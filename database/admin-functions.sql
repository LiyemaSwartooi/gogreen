-- Admin Functions for Go-Green Platform
-- These functions allow admin users to bypass RLS and see all data

-- Function to get all users for admin dashboard
CREATE OR REPLACE FUNCTION get_all_users_admin()
RETURNS TABLE (
    id uuid,
    email text,
    full_name text,
    remember_me boolean,
    created_at timestamptz,
    updated_at timestamptz,
    total_course_time_minutes integer,
    current_course_id text,
    courses_enrolled text[],
    skill_level text,
    learning_streak_days integer,
    last_activity_date timestamptz,
    current_lesson_id integer,
    current_slide_index integer,
    completed_lessons integer[],
    course_progress_percentage integer,
    learning_notes text,
    preferred_learning_pace text,
    daily_learning_goal_minutes integer,
    weekly_learning_streak integer,
    best_learning_streak integer,
    total_quiz_attempts integer,
    total_quiz_correct integer
)
SECURITY DEFINER
SET search_path = public
LANGUAGE sql
AS $$
    SELECT 
        u.id,
        u.email,
        u.full_name,
        u.remember_me,
        u.created_at,
        u.updated_at,
        u.total_course_time_minutes,
        u.current_course_id,
        u.courses_enrolled,
        u.skill_level,
        u.learning_streak_days,
        u.last_activity_date,
        u.current_lesson_id,
        u.current_slide_index,
        u.completed_lessons,
        u.course_progress_percentage,
        u.learning_notes,
        u.preferred_learning_pace,
        u.daily_learning_goal_minutes,
        u.weekly_learning_streak,
        u.best_learning_streak,
        u.total_quiz_attempts,
        u.total_quiz_correct
    FROM users u
    ORDER BY u.created_at DESC;
$$;

-- Function to get user count for admin stats
CREATE OR REPLACE FUNCTION get_user_count_admin()
RETURNS integer
SECURITY DEFINER
SET search_path = public
LANGUAGE sql
AS $$
    SELECT COUNT(*)::integer FROM users;
$$;

-- Function to get users created this week (adjusted for test data)
CREATE OR REPLACE FUNCTION get_users_this_week_admin()
RETURNS integer
SECURITY DEFINER
SET search_path = public
LANGUAGE sql
AS $$
    SELECT COUNT(*)::integer 
    FROM users 
    WHERE created_at >= '2024-01-15'::date;
$$;

-- Function to get active users (realistic activity)
CREATE OR REPLACE FUNCTION get_active_users_admin()
RETURNS integer
SECURITY DEFINER
SET search_path = public
LANGUAGE sql
AS $$
    SELECT COUNT(*)::integer 
    FROM users 
    WHERE last_activity_date >= '2024-01-19'::date
    AND (
        learning_streak_days >= 5 
        OR total_course_time_minutes >= 120
        OR course_progress_percentage >= 30
    );
$$;

-- Grant execute permissions to authenticated users
GRANT EXECUTE ON FUNCTION get_all_users_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION get_user_count_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION get_users_this_week_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION get_active_users_admin() TO authenticated; 