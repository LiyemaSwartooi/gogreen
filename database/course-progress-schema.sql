-- =====================================================
-- COURSE PROGRESS TRACKING SCHEMA
-- Add columns and tables to existing users table for
-- comprehensive course progress tracking
-- =====================================================

-- Add new columns to existing users table
ALTER TABLE public.users 
ADD COLUMN IF NOT EXISTS total_course_time_minutes INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS current_course_id VARCHAR(50) DEFAULT NULL,
ADD COLUMN IF NOT EXISTS courses_enrolled TEXT[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS skill_level VARCHAR(20) DEFAULT 'beginner',
ADD COLUMN IF NOT EXISTS learning_streak_days INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS last_activity_date TIMESTAMP WITH TIME ZONE DEFAULT now();

-- Create indexes for new user columns
CREATE INDEX IF NOT EXISTS idx_users_current_course ON public.users (current_course_id);
CREATE INDEX IF NOT EXISTS idx_users_last_activity ON public.users (last_activity_date);
CREATE INDEX IF NOT EXISTS idx_users_skill_level ON public.users (skill_level);

-- =====================================================
-- COURSES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS public.courses (
  id VARCHAR(50) NOT NULL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  difficulty_level VARCHAR(20) NOT NULL DEFAULT 'beginner',
  estimated_duration_hours INTEGER DEFAULT 0,
  total_modules INTEGER DEFAULT 0,
  total_lessons INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Insert microgreens-basics course
INSERT INTO public.courses (id, title, description, difficulty_level, estimated_duration_hours, total_modules, total_lessons) 
VALUES (
  'microgreens-basics',
  'Microgreens Basics',
  'Master the fundamentals of microgreens cultivation',
  'beginner',
  12,
  4,
  16
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  updated_at = now();

-- =====================================================
-- COURSE MODULES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS public.course_modules (
  id SERIAL PRIMARY KEY,
  course_id VARCHAR(50) NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  module_number INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  estimated_duration_hours INTEGER DEFAULT 0,
  total_lessons INTEGER DEFAULT 0,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(course_id, module_number)
);

-- Insert microgreens course modules
INSERT INTO public.course_modules (course_id, module_number, title, description, estimated_duration_hours, total_lessons, order_index) VALUES
  ('microgreens-basics', 1, 'Growing Techniques', 'Master fundamental growing techniques', 3, 4, 1),
  ('microgreens-basics', 2, 'Plant Care Basics', 'Learn essential plant care practices', 3, 4, 2),
  ('microgreens-basics', 3, 'Harvest Methods', 'Master harvesting and post-harvest handling', 3, 4, 3),
  ('microgreens-basics', 4, 'Problem Solving', 'Identify and solve common problems', 3, 4, 4)
ON CONFLICT (course_id, module_number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description;

-- =====================================================
-- LESSONS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS public.lessons (
  id INTEGER PRIMARY KEY,
  course_id VARCHAR(50) NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  module_id INTEGER NOT NULL REFERENCES public.course_modules(id) ON DELETE CASCADE,
  lesson_number INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  estimated_time_minutes INTEGER DEFAULT 45,
  difficulty VARCHAR(20) DEFAULT 'beginner',
  total_slides INTEGER DEFAULT 0,
  lesson_type VARCHAR(50) DEFAULT 'standard',
  order_index INTEGER NOT NULL,
  prerequisites INTEGER[] DEFAULT '{}',
  learning_objectives TEXT[],
  key_skills TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(course_id, lesson_number)
);

-- Insert lessons for microgreens-basics (16 lessons across 4 modules)
INSERT INTO public.lessons (id, course_id, module_id, lesson_number, title, description, estimated_time_minutes, difficulty, total_slides, order_index, learning_objectives, key_skills) VALUES
  -- Module 1: Growing Techniques
  (1, 'microgreens-basics', 1, 1, 'Seed Selection and Preparation', 'Master the foundation of successful microgreens by learning proper seed selection and preparation techniques.', 45, 'beginner', 8, 1, '{"Identify quality seeds suitable for microgreen production","Understand storage requirements for maintaining seed viability","Apply proper pre-soaking and preparation methods","Calculate seeding rates for different varieties and tray sizes"}', '{"seed_quality_assessment","pre_soaking_techniques","seeding_calculations"}'),
  (2, 'microgreens-basics', 1, 2, 'Growing Mediums', 'Learn about different growing mediums and their applications', 45, 'beginner', 7, 2, '{"Compare different growing medium types","Select appropriate mediums for different seeds","Understand medium preparation techniques"}', '{"medium_selection","soil_preparation","hydroponic_systems"}'),
  (3, 'microgreens-basics', 1, 3, 'Seeding Techniques', 'Master proper seeding density and distribution methods', 50, 'beginner', 6, 3, '{"Calculate optimal seeding densities","Apply even distribution techniques","Understand germination requirements"}', '{"seeding_density","distribution_techniques","germination_optimization"}'),
  (4, 'microgreens-basics', 1, 4, 'Environmental Setup', 'Create optimal growing conditions for microgreens', 40, 'beginner', 8, 4, '{"Set up proper lighting systems","Control temperature and humidity","Design ventilation systems"}', '{"lighting_setup","climate_control","ventilation_design"}'),
  
  -- Module 2: Plant Care Basics  
  (5, 'microgreens-basics', 2, 5, 'Watering Techniques', 'Learn proper watering methods and schedules', 45, 'intermediate', 7, 5, '{"Apply bottom watering techniques","Understand watering schedules","Prevent overwatering issues"}', '{"bottom_watering","irrigation_scheduling","moisture_management"}'),
  (6, 'microgreens-basics', 2, 6, 'Nutrient Management', 'Understand nutrition requirements and fertilization', 40, 'intermediate', 6, 6, '{"Calculate nutrient requirements","Apply organic fertilization methods","Monitor plant nutrition status"}', '{"nutrient_calculation","organic_fertilization","nutrition_monitoring"}'),
  (7, 'microgreens-basics', 2, 7, 'Disease and Pest Management', 'Identify and manage common problems', 50, 'intermediate', 8, 7, '{"Identify common diseases and pests","Apply preventive measures","Use organic treatment methods"}', '{"disease_identification","pest_control","organic_treatments"}'),
  (8, 'microgreens-basics', 2, 8, 'Environmental Control', 'Maintain optimal growing conditions', 45, 'intermediate', 7, 8, '{"Monitor environmental parameters","Adjust growing conditions","Troubleshoot environmental issues"}', '{"environmental_monitoring","condition_adjustment","troubleshooting"}'),
  
  -- Module 3: Harvest Methods
  (9, 'microgreens-basics', 3, 9, 'Harvest Timing and Indicators', 'Learn when and how to harvest microgreens', 40, 'intermediate', 6, 9, '{"Identify harvest readiness indicators","Understand optimal harvest timing","Assess microgreen quality"}', '{"harvest_timing","quality_assessment","readiness_indicators"}'),
  (10, 'microgreens-basics', 3, 10, 'Harvesting Techniques and Tools', 'Master harvesting methods and tool selection', 45, 'intermediate', 7, 10, '{"Use proper harvesting tools","Apply clean harvesting techniques","Maintain tool sanitation"}', '{"harvesting_tools","clean_techniques","sanitation_practices"}'),
  (11, 'microgreens-basics', 3, 11, 'Post-Harvest Handling', 'Proper handling and storage after harvest', 50, 'intermediate', 8, 11, '{"Apply proper washing techniques","Understand storage requirements","Maintain freshness and quality"}', '{"washing_techniques","storage_methods","quality_maintenance"}'),
  (12, 'microgreens-basics', 3, 12, 'Market Preparation', 'Prepare microgreens for sale and distribution', 45, 'intermediate', 7, 12, '{"Package products professionally","Understand market requirements","Calculate pricing strategies"}', '{"professional_packaging","market_analysis","pricing_strategies"}'),
  
  -- Module 4: Problem Solving
  (13, 'microgreens-basics', 4, 13, 'Common Growing Problems', 'Identify and solve frequent issues', 50, 'advanced', 8, 13, '{"Diagnose common growing problems","Apply corrective measures","Prevent recurring issues"}', '{"problem_diagnosis","corrective_actions","prevention_strategies"}'),
  (14, 'microgreens-basics', 4, 14, 'Quality Control', 'Maintain consistent product quality', 45, 'advanced', 7, 14, '{"Implement quality control systems","Monitor production consistency","Apply improvement strategies"}', '{"quality_systems","consistency_monitoring","continuous_improvement"}'),
  (15, 'microgreens-basics', 4, 15, 'Troubleshooting Guide', 'Systematic approach to problem solving', 40, 'advanced', 6, 15, '{"Use systematic troubleshooting methods","Document solutions","Build problem-solving skills"}', '{"systematic_troubleshooting","solution_documentation","analytical_thinking"}'),
  (16, 'microgreens-basics', 4, 16, 'Advanced Techniques', 'Master advanced growing techniques', 55, 'advanced', 9, 16, '{"Apply advanced growing methods","Optimize production efficiency","Implement innovation strategies"}', '{"advanced_techniques","production_optimization","innovation_implementation"}')
ON CONFLICT (course_id, lesson_number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  estimated_time_minutes = EXCLUDED.estimated_time_minutes;

-- =====================================================
-- USER COURSE ENROLLMENTS
-- =====================================================
CREATE TABLE IF NOT EXISTS public.user_course_enrollments (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  course_id VARCHAR(50) NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
  current_lesson_id INTEGER DEFAULT NULL,
  current_slide_index INTEGER DEFAULT 0,
  total_time_spent_minutes INTEGER DEFAULT 0,
  progress_percentage INTEGER DEFAULT 0,
  completion_status VARCHAR(20) DEFAULT 'enrolled',
  certificate_earned BOOLEAN DEFAULT false,
  certificate_earned_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
  last_accessed TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, course_id)
);

-- Create indexes for course enrollments
CREATE INDEX IF NOT EXISTS idx_enrollments_user_course ON public.user_course_enrollments (user_id, course_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON public.user_course_enrollments (completion_status);
CREATE INDEX IF NOT EXISTS idx_enrollments_last_accessed ON public.user_course_enrollments (last_accessed);

-- =====================================================
-- USER LESSON PROGRESS
-- =====================================================  
CREATE TABLE IF NOT EXISTS public.user_lesson_progress (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  course_id VARCHAR(50) NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  lesson_id INTEGER NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
  current_slide_index INTEGER DEFAULT 0,
  total_slides_completed INTEGER DEFAULT 0,
  time_spent_minutes INTEGER DEFAULT 0,
  completion_percentage INTEGER DEFAULT 0,
  is_completed BOOLEAN DEFAULT false,
  quiz_score INTEGER DEFAULT NULL,
  quiz_attempts INTEGER DEFAULT 0,
  last_accessed TIMESTAMP WITH TIME ZONE DEFAULT now(),
  completed_slides INTEGER[] DEFAULT '{}',
  skills_acquired TEXT[] DEFAULT '{}',
  notes TEXT DEFAULT NULL,
  UNIQUE(user_id, course_id, lesson_id)
);

-- Create indexes for lesson progress
CREATE INDEX IF NOT EXISTS idx_lesson_progress_user_course ON public.user_lesson_progress (user_id, course_id);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_lesson ON public.user_lesson_progress (lesson_id);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_completed ON public.user_lesson_progress (is_completed);

-- =====================================================
-- USER QUIZ RESULTS
-- =====================================================
CREATE TABLE IF NOT EXISTS public.user_quiz_results (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  course_id VARCHAR(50) NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  lesson_id INTEGER NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  slide_id INTEGER NOT NULL,
  quiz_question TEXT NOT NULL,
  selected_answer INTEGER NOT NULL,
  correct_answer INTEGER NOT NULL,
  is_correct BOOLEAN NOT NULL,
  time_taken_seconds INTEGER DEFAULT NULL,
  attempted_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  score_percentage INTEGER DEFAULT 0
);

-- Create indexes for quiz results
CREATE INDEX IF NOT EXISTS idx_quiz_results_user_lesson ON public.user_quiz_results (user_id, lesson_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_performance ON public.user_quiz_results (is_correct, attempted_at);

-- =====================================================
-- USER ACHIEVEMENTS & BADGES
-- =====================================================
CREATE TABLE IF NOT EXISTS public.user_achievements (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  achievement_type VARCHAR(50) NOT NULL,
  achievement_name VARCHAR(255) NOT NULL, 
  achievement_description TEXT,
  course_id VARCHAR(50) REFERENCES public.courses(id) ON DELETE CASCADE,
  lesson_id INTEGER REFERENCES public.lessons(id) ON DELETE CASCADE,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  badge_icon VARCHAR(100) DEFAULT NULL,
  points_awarded INTEGER DEFAULT 0
);

-- Create indexes for achievements
CREATE INDEX IF NOT EXISTS idx_achievements_user ON public.user_achievements (user_id);
CREATE INDEX IF NOT EXISTS idx_achievements_type ON public.user_achievements (achievement_type);
CREATE INDEX IF NOT EXISTS idx_achievements_course ON public.user_achievements (course_id);

-- =====================================================
-- USER LEARNING ANALYTICS
-- =====================================================
CREATE TABLE IF NOT EXISTS public.user_learning_analytics (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  course_id VARCHAR(50) NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  time_spent_minutes INTEGER DEFAULT 0,
  lessons_started INTEGER DEFAULT 0,
  lessons_completed INTEGER DEFAULT 0,
  quizzes_attempted INTEGER DEFAULT 0,
  quizzes_passed INTEGER DEFAULT 0,
  average_quiz_score DECIMAL(5,2) DEFAULT 0,
  slides_viewed INTEGER DEFAULT 0,
  active_learning_time_minutes INTEGER DEFAULT 0,
  UNIQUE(user_id, course_id, date)
);

-- Create indexes for learning analytics
CREATE INDEX IF NOT EXISTS idx_analytics_user_course_date ON public.user_learning_analytics (user_id, course_id, date);
CREATE INDEX IF NOT EXISTS idx_analytics_date ON public.user_learning_analytics (date);

-- =====================================================
-- ENABLE ROW LEVEL SECURITY (RLS)
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_course_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_learning_analytics ENABLE ROW LEVEL SECURITY;

-- RLS Policies for courses, modules, lessons (public read access)
CREATE POLICY "Allow public read access to courses" ON public.courses FOR SELECT USING (is_active = true);
CREATE POLICY "Allow public read access to course_modules" ON public.course_modules FOR SELECT USING (true);
CREATE POLICY "Allow public read access to lessons" ON public.lessons FOR SELECT USING (true);

-- RLS Policies for user-specific data (users can only access their own data)
CREATE POLICY "Users can manage their own enrollments" ON public.user_course_enrollments 
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own lesson progress" ON public.user_lesson_progress 
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own quiz results" ON public.user_quiz_results 
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own achievements" ON public.user_achievements 
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own learning analytics" ON public.user_learning_analytics 
  FOR ALL USING (auth.uid() = user_id);

-- =====================================================
-- HELPER FUNCTIONS FOR PROGRESS TRACKING
-- =====================================================

-- Function to calculate course progress percentage
CREATE OR REPLACE FUNCTION calculate_course_progress(p_user_id UUID, p_course_id VARCHAR)
RETURNS INTEGER AS $$
DECLARE
  total_lessons INTEGER;
  completed_lessons INTEGER;
  progress_percentage INTEGER;
BEGIN
  -- Get total lessons in course
  SELECT COUNT(*) INTO total_lessons 
  FROM public.lessons 
  WHERE course_id = p_course_id;
  
  -- Get completed lessons for user
  SELECT COUNT(*) INTO completed_lessons
  FROM public.user_lesson_progress 
  WHERE user_id = p_user_id 
    AND course_id = p_course_id 
    AND is_completed = true;
  
  -- Calculate percentage
  IF total_lessons > 0 THEN
    progress_percentage := ROUND((completed_lessons::DECIMAL / total_lessons::DECIMAL) * 100);
  ELSE
    progress_percentage := 0;
  END IF;
  
  RETURN progress_percentage;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to update user course enrollment progress
CREATE OR REPLACE FUNCTION update_course_enrollment_progress(p_user_id UUID, p_course_id VARCHAR)
RETURNS VOID AS $$
DECLARE
  progress_pct INTEGER;
  total_time INTEGER;
BEGIN
  -- Calculate progress percentage
  progress_pct := calculate_course_progress(p_user_id, p_course_id);
  
  -- Calculate total time spent
  SELECT COALESCE(SUM(time_spent_minutes), 0) INTO total_time
  FROM public.user_lesson_progress
  WHERE user_id = p_user_id AND course_id = p_course_id;
  
  -- Update enrollment record
  UPDATE public.user_course_enrollments
  SET 
    progress_percentage = progress_pct,
    total_time_spent_minutes = total_time,
    last_accessed = now(),
    completed_at = CASE WHEN progress_pct = 100 THEN now() ELSE completed_at END,
    completion_status = CASE 
      WHEN progress_pct = 100 THEN 'completed'
      WHEN progress_pct > 0 THEN 'in_progress'
      ELSE 'enrolled'
    END
  WHERE user_id = p_user_id AND course_id = p_course_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- INITIAL DATA SETUP
-- =====================================================

-- Create some initial achievements
INSERT INTO public.user_achievements (user_id, achievement_type, achievement_name, achievement_description, badge_icon, points_awarded)
SELECT 
  (SELECT id FROM public.users LIMIT 1),
  'course_start',
  'Learning Journey Begins',
  'Started your first microgreens course',
  'FaSeedling',
  10
WHERE EXISTS (SELECT 1 FROM public.users LIMIT 1)
ON CONFLICT DO NOTHING; 