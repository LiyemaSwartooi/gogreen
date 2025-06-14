-- =============================================
-- Go-green Single Table Auth Schema
-- ONE table for ALL SignUp & SignIn data
-- =============================================

-- =============================================
-- SINGLE COMPREHENSIVE USER TABLE
-- Collects ALL data from SignUp & SignIn forms
-- =============================================
CREATE TABLE public.users (
    -- Primary key linked to Supabase auth
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    
    -- DATA FROM SIGNUP FORM
    email TEXT UNIQUE NOT NULL,           -- Required: email field from SignUp
    full_name TEXT NOT NULL,              -- Required: fullName field from SignUp
    
    -- DATA FROM SIGNIN FORM  
    remember_me BOOLEAN DEFAULT false,    -- rememberMe checkbox from SignIn
    current_session_active BOOLEAN DEFAULT false,  -- Is user currently signed in
    
    -- SESSION & ACTIVITY TRACKING
    total_signins INTEGER DEFAULT 0,     -- Count of total sign ins
    last_signin_at TIMESTAMP WITH TIME ZONE,  -- Last time user signed in
    last_signin_ip INET,                 -- IP address of last signin
    last_user_agent TEXT,                -- Browser info from last signin
    
    -- ACCOUNT STATUS
    is_active BOOLEAN DEFAULT true,      -- Account status
    account_verified BOOLEAN DEFAULT false,  -- Email verification status
    
    -- TIMESTAMPS
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),  -- When account was created
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),  -- Last profile update
    last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW() -- Last any activity
);

-- =============================================
-- INDEXES FOR PERFORMANCE
-- =============================================
CREATE INDEX idx_users_email ON public.users(email);
CREATE INDEX idx_users_active ON public.users(is_active);
CREATE INDEX idx_users_last_signin ON public.users(last_signin_at);
CREATE INDEX idx_users_current_session ON public.users(current_session_active);

-- =============================================
-- ROW LEVEL SECURITY
-- =============================================
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Users can only see and modify their own data
CREATE POLICY "Users can view own data" ON public.users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON public.users
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own data" ON public.users
    FOR INSERT WITH CHECK (auth.uid() = id);

-- =============================================
-- AUTOMATIC TRIGGERS
-- =============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_users_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    NEW.last_activity = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for updated_at
CREATE TRIGGER update_users_timestamp 
    BEFORE UPDATE ON public.users 
    FOR EACH ROW EXECUTE FUNCTION update_users_updated_at();

-- =============================================
-- AUTO-CREATE USER ON SIGNUP
-- =============================================
CREATE OR REPLACE FUNCTION public.handle_user_signup()
RETURNS TRIGGER AS $$
BEGIN
    -- Create user record with signup data
    INSERT INTO public.users (id, email, full_name, created_at, account_verified)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', 'User'),
        NOW(),
        false  -- Will be true when no email confirmation needed
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to auto-create user on signup
CREATE TRIGGER gogreen_signup_handler
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_user_signup();

-- =============================================
-- SIGNIN TRACKING FUNCTION
-- =============================================
CREATE OR REPLACE FUNCTION public.gogreen_track_signin(
    user_uuid UUID,
    remember_user BOOLEAN DEFAULT false,
    user_ip INET DEFAULT NULL,
    user_agent_string TEXT DEFAULT NULL
)
RETURNS VOID AS $$
BEGIN
    -- Update user signin data
    UPDATE public.users 
    SET 
        remember_me = remember_user,
        current_session_active = true,
        total_signins = total_signins + 1,
        last_signin_at = NOW(),
        last_signin_ip = user_ip,
        last_user_agent = user_agent_string,
        last_activity = NOW()
    WHERE id = user_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =============================================
-- SIGNOUT TRACKING FUNCTION
-- =============================================
CREATE OR REPLACE FUNCTION public.gogreen_track_signout(user_uuid UUID)
RETURNS VOID AS $$
BEGIN
    -- Mark session as inactive
    UPDATE public.users 
    SET 
        current_session_active = false,
        last_activity = NOW()
    WHERE id = user_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =============================================
-- HELPFUL VIEWS
-- =============================================

-- User dashboard view
CREATE VIEW public.user_dashboard AS
SELECT 
    id,
    email,
    full_name,
    remember_me,
    current_session_active,
    total_signins,
    last_signin_at,
    is_active,
    account_verified,
    created_at as joined_date,
    last_activity
FROM public.users;

-- Active users view
CREATE VIEW public.active_users AS
SELECT 
    id,
    email,
    full_name,
    last_signin_at,
    total_signins
FROM public.users 
WHERE is_active = true AND current_session_active = true;

-- =============================================
-- GRANT PERMISSIONS
-- =============================================
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.users TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

-- Grant execute permissions on functions
GRANT EXECUTE ON FUNCTION public.gogreen_track_signin TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.gogreen_track_signout TO anon, authenticated;

-- =============================================
-- COMMENTS
-- =============================================
COMMENT ON TABLE public.users IS 'Single table storing ALL data from SignUp and SignIn forms';
COMMENT ON COLUMN public.users.full_name IS 'From SignUp form: fullName field (required)';
COMMENT ON COLUMN public.users.email IS 'From SignUp form: email field (required)';
COMMENT ON COLUMN public.users.remember_me IS 'From SignIn form: rememberMe checkbox';
COMMENT ON COLUMN public.users.current_session_active IS 'Is user currently signed in';
COMMENT ON COLUMN public.users.total_signins IS 'Count of how many times user has signed in';

-- =============================================
-- SCHEMA COMPLETE!
-- One table captures everything from both forms
-- ============================================= 