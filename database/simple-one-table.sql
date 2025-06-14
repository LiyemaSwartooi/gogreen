-- =============================================
-- Go-green ONE TABLE for SignUp & SignIn
-- EXACTLY what your forms collect
-- =============================================

-- ONE TABLE for ALL form data
CREATE TABLE public.users (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    
    -- FROM SIGNUP FORM
    email TEXT UNIQUE NOT NULL,     -- email field (required)
    full_name TEXT NOT NULL,        -- fullName field (required)
    
    -- FROM SIGNIN FORM  
    remember_me BOOLEAN DEFAULT false,  -- rememberMe checkbox
    
    -- TIMESTAMPS
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for performance
CREATE INDEX idx_users_email ON public.users(email);

-- Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own data" ON public.users
    FOR ALL USING (auth.uid() = id);

-- Auto-create user on signup
CREATE OR REPLACE FUNCTION public.create_user_profile()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (id, email, full_name)
    VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'full_name', 'User'));
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER create_user_on_signup
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.create_user_profile();

-- Permissions
GRANT ALL ON public.users TO anon, authenticated; 