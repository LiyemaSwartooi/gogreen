-- =====================================================
-- EXTENDED USERS TABLE FOR COURSE PROGRESS TRACKING
-- Simple single-table approach for microgreens course
-- =====================================================

-- Your existing users table structure (keeping as reference)
CREATE TABLE IF NOT EXISTS public.users (
  id uuid not null,
  email text not null,
  full_name text not null,
  remember_me boolean null default false,
  created_at timestamp with time zone null default now(),
  updated_at timestamp with time zone null default now(),
  total_course_time_minutes integer null default 0,
  current_course_id character varying(50) null default null::character varying,
  courses_enrolled text[] null default '{}'::text[],
  skill_level character varying(20) null default 'beginner'::character varying,
  learning_streak_days integer null default 0,
  last_activity_date timestamp with time zone null default now(),
  constraint users_pkey primary key (id),
  constraint users_email_key unique (email),
  constraint users_id_fkey foreign KEY (id) references auth.users (id) on delete CASCADE
);

-- Add additional columns for comprehensive course progress tracking
ALTER TABLE public.users 
ADD COLUMN IF NOT EXISTS current_lesson_id INTEGER DEFAULT NULL,
ADD COLUMN IF NOT EXISTS current_slide_index INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS completed_lessons INTEGER[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS completed_slides JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS lesson_progress JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS quiz_scores JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS quiz_attempts JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS time_spent_per_lesson JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS skills_acquired text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS achievements_earned text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS certificates_earned text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS course_started_at timestamp with time zone null default null,
ADD COLUMN IF NOT EXISTS course_completed_at timestamp with time zone null default null,
ADD COLUMN IF NOT EXISTS course_progress_percentage INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS learning_notes TEXT DEFAULT NULL,
ADD COLUMN IF NOT EXISTS preferred_learning_pace VARCHAR(20) DEFAULT 'normal',
ADD COLUMN IF NOT EXISTS daily_learning_goal_minutes INTEGER DEFAULT 30,
ADD COLUMN IF NOT EXISTS weekly_learning_streak INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS best_learning_streak INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS total_quiz_attempts INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS total_quiz_correct INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS favorite_lessons INTEGER[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS bookmarked_slides JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS learning_preferences JSONB DEFAULT '{}';

-- Create indexes for all the new columns
CREATE INDEX IF NOT EXISTS idx_users_email ON public.users USING btree (email);
CREATE INDEX IF NOT EXISTS idx_users_current_course ON public.users USING btree (current_course_id);
CREATE INDEX IF NOT EXISTS idx_users_last_activity ON public.users USING btree (last_activity_date);
CREATE INDEX IF NOT EXISTS idx_users_skill_level ON public.users USING btree (skill_level);
CREATE INDEX IF NOT EXISTS idx_users_current_lesson ON public.users USING btree (current_lesson_id);
CREATE INDEX IF NOT EXISTS idx_users_course_progress ON public.users USING btree (course_progress_percentage);
CREATE INDEX IF NOT EXISTS idx_users_course_started ON public.users USING btree (course_started_at);
CREATE INDEX IF NOT EXISTS idx_users_learning_streak ON public.users USING btree (learning_streak_days);

-- Create GIN indexes for JSONB columns for better performance
CREATE INDEX IF NOT EXISTS idx_users_completed_slides_gin ON public.users USING gin (completed_slides);
CREATE INDEX IF NOT EXISTS idx_users_lesson_progress_gin ON public.users USING gin (lesson_progress);
CREATE INDEX IF NOT EXISTS idx_users_quiz_scores_gin ON public.users USING gin (quiz_scores);
CREATE INDEX IF NOT EXISTS idx_users_bookmarked_slides_gin ON public.users USING gin (bookmarked_slides);
CREATE INDEX IF NOT EXISTS idx_users_learning_preferences_gin ON public.users USING gin (learning_preferences);

-- =====================================================
-- EXAMPLE DATA STRUCTURES FOR JSONB COLUMNS
-- =====================================================

-- completed_slides structure:
-- {
--   "1": [0, 1, 2, 3, 4, 5, 6, 7],  -- lesson 1 completed slides
--   "2": [0, 1, 2],                 -- lesson 2 completed slides
--   "3": []                         -- lesson 3 no completed slides
-- }

-- lesson_progress structure:
-- {
--   "1": {
--     "started_at": "2025-01-08T10:00:00Z",
--     "completed_at": "2025-01-08T11:30:00Z",
--     "time_spent_minutes": 45,
--     "completion_percentage": 100,
--     "current_slide": 7,
--     "total_slides": 8,
--     "is_completed": true
--   },
--   "2": {
--     "started_at": "2025-01-08T12:00:00Z",
--     "completed_at": null,
--     "time_spent_minutes": 20,
--     "completion_percentage": 43,
--     "current_slide": 2,
--     "total_slides": 7,
--     "is_completed": false
--   }
-- }

-- quiz_scores structure:
-- {
--   "lesson_1_slide_1": {
--     "score": 85,
--     "correct_answers": 3,
--     "total_questions": 4,
--     "attempts": 1,
--     "last_attempt": "2025-01-08T10:30:00Z"
--   }
-- }

-- quiz_attempts structure:
-- {
--   "lesson_1_slide_1": [
--     {
--       "attempt": 1,
--       "score": 85,
--       "attempted_at": "2025-01-08T10:30:00Z",
--       "time_taken_seconds": 45
--     }
--   ]
-- }

-- time_spent_per_lesson structure:
-- {
--   "1": 45,
--   "2": 20,
--   "3": 0
-- }

-- bookmarked_slides structure:
-- {
--   "bookmarks": [
--     {
--       "lesson_id": 1,
--       "slide_id": 3,
--       "title": "Seed Quality Assessment",
--       "bookmarked_at": "2025-01-08T10:15:00Z",
--       "notes": "Important technique for identifying good seeds"
--     }
--   ]
-- }

-- learning_preferences structure:
-- {
--   "preferred_time_of_day": "morning",
--   "notification_frequency": "daily",
--   "learning_style": "visual",
--   "difficulty_preference": "progressive",
--   "reminder_settings": {
--     "enabled": true,
--     "time": "09:00",
--     "days": ["monday", "tuesday", "wednesday", "thursday", "friday"]
--   }
-- }

-- =====================================================
-- HELPER FUNCTIONS FOR PROGRESS TRACKING
-- =====================================================

-- Function to update lesson progress
CREATE OR REPLACE FUNCTION update_lesson_progress(
  p_user_id UUID,
  p_lesson_id INTEGER,
  p_slide_index INTEGER,
  p_time_spent_minutes INTEGER DEFAULT 0
) RETURNS VOID AS $$
DECLARE
  current_progress JSONB;
  current_completed_slides JSONB;
  lesson_key TEXT;
  total_slides INTEGER;
  completed_slides_count INTEGER;
  completion_percentage INTEGER;
BEGIN
  lesson_key := p_lesson_id::TEXT;
  
  -- Get current progress
  SELECT lesson_progress, completed_slides INTO current_progress, current_completed_slides
  FROM public.users WHERE id = p_user_id;
  
  -- Initialize if null
  IF current_progress IS NULL THEN current_progress := '{}'::JSONB; END IF;
  IF current_completed_slides IS NULL THEN current_completed_slides := '{}'::JSONB; END IF;
  
  -- Get total slides for this lesson (you can adjust this based on your data)
  -- For now, setting default based on lesson structure
  total_slides := CASE 
    WHEN p_lesson_id = 1 THEN 8
    WHEN p_lesson_id = 2 THEN 7  
    WHEN p_lesson_id = 3 THEN 6
    WHEN p_lesson_id = 4 THEN 8
    ELSE 7 -- default
  END;
  
  -- Count completed slides
  IF current_completed_slides ? lesson_key THEN
    completed_slides_count := jsonb_array_length(current_completed_slides->lesson_key);
  ELSE
    completed_slides_count := 0;
  END IF;
  
  -- Calculate completion percentage
  completion_percentage := CASE 
    WHEN total_slides > 0 THEN ROUND((completed_slides_count::DECIMAL / total_slides::DECIMAL) * 100)
    ELSE 0
  END;
  
  -- Update lesson progress
  current_progress := current_progress || jsonb_build_object(
    lesson_key,
    jsonb_build_object(
      'started_at', COALESCE((current_progress->lesson_key->>'started_at')::TEXT, now()::TEXT),
      'completed_at', CASE WHEN completion_percentage = 100 THEN now()::TEXT ELSE NULL END,
      'time_spent_minutes', COALESCE((current_progress->lesson_key->>'time_spent_minutes')::INTEGER, 0) + p_time_spent_minutes,
      'completion_percentage', completion_percentage,
      'current_slide', p_slide_index,
      'total_slides', total_slides,
      'is_completed', completion_percentage = 100,
      'last_accessed', now()::TEXT
    )
  );
  
  -- Update user record
  UPDATE public.users 
  SET 
    lesson_progress = current_progress,
    current_lesson_id = p_lesson_id,
    current_slide_index = p_slide_index,
    total_course_time_minutes = total_course_time_minutes + p_time_spent_minutes,
    last_activity_date = now(),
    updated_at = now()
  WHERE id = p_user_id;
  
END;
$$ LANGUAGE plpgsql;

-- Function to mark slide as completed
CREATE OR REPLACE FUNCTION mark_slide_completed(
  p_user_id UUID,
  p_lesson_id INTEGER,
  p_slide_index INTEGER
) RETURNS VOID AS $$
DECLARE
  current_completed_slides JSONB;
  lesson_key TEXT;
  lesson_slides JSONB;
BEGIN
  lesson_key := p_lesson_id::TEXT;
  
  -- Get current completed slides
  SELECT completed_slides INTO current_completed_slides
  FROM public.users WHERE id = p_user_id;
  
  -- Initialize if null
  IF current_completed_slides IS NULL THEN current_completed_slides := '{}'::JSONB; END IF;
  
  -- Get current lesson slides array or create new one
  IF current_completed_slides ? lesson_key THEN
    lesson_slides := current_completed_slides->lesson_key;
  ELSE
    lesson_slides := '[]'::JSONB;
  END IF;
  
  -- Add slide index if not already present
  IF NOT (lesson_slides @> jsonb_build_array(p_slide_index)) THEN
    lesson_slides := lesson_slides || jsonb_build_array(p_slide_index);
  END IF;
  
  -- Update completed slides
  current_completed_slides := current_completed_slides || jsonb_build_object(lesson_key, lesson_slides);
  
  -- Update user record
  UPDATE public.users 
  SET 
    completed_slides = current_completed_slides,
    updated_at = now()
  WHERE id = p_user_id;
  
  -- Also update lesson progress
  PERFORM update_lesson_progress(p_user_id, p_lesson_id, p_slide_index, 0);
  
END;
$$ LANGUAGE plpgsql;

-- Function to calculate overall course progress
CREATE OR REPLACE FUNCTION calculate_overall_course_progress(p_user_id UUID) 
RETURNS INTEGER AS $$
DECLARE
  total_lessons INTEGER := 16; -- Total lessons in microgreens-basics
  completed_lessons INTEGER;
  progress_percentage INTEGER;
BEGIN
  -- Count completed lessons
  SELECT array_length(completed_lessons, 1) INTO completed_lessons
  FROM public.users WHERE id = p_user_id;
  
  -- Handle null case
  IF completed_lessons IS NULL THEN completed_lessons := 0; END IF;
  
  -- Calculate percentage
  progress_percentage := ROUND((completed_lessons::DECIMAL / total_lessons::DECIMAL) * 100);
  
  -- Update user record
  UPDATE public.users 
  SET 
    course_progress_percentage = progress_percentage,
    course_completed_at = CASE WHEN progress_percentage = 100 THEN now() ELSE course_completed_at END,
    updated_at = now()
  WHERE id = p_user_id;
  
  RETURN progress_percentage;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- ENABLE ROW LEVEL SECURITY
-- =====================================================

-- Enable RLS on users table (if not already enabled)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Create policy for users to access only their own data (drop and recreate to avoid conflicts)
DROP POLICY IF EXISTS "Users can view and update their own data" ON public.users;
CREATE POLICY "Users can view and update their own data" 
ON public.users FOR ALL 
USING (auth.uid() = id);

-- =====================================================
-- SAMPLE USAGE EXAMPLES
-- =====================================================

-- Example: Mark slide as completed
-- SELECT mark_slide_completed('user-uuid-here', 1, 3);

-- Example: Update lesson progress
-- SELECT update_lesson_progress('user-uuid-here', 1, 5, 15);

-- Example: Calculate overall progress
-- SELECT calculate_overall_course_progress('user-uuid-here');

-- Example: Query user progress
-- SELECT 
--   full_name,
--   current_course_id,
--   current_lesson_id,
--   current_slide_index,
--   course_progress_percentage,
--   total_course_time_minutes,
--   learning_streak_days,
--   lesson_progress,
--   completed_slides
-- FROM public.users 
-- WHERE id = 'user-uuid-here'; 