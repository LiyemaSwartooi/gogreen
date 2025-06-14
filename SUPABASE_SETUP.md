# 🔥 Go-green Supabase Authentication Setup

Complete guide to set up Supabase authentication for your Go-green microgreens platform.

## 📋 Prerequisites

- Node.js 18+ installed
- Supabase account (free tier is sufficient)
- Go-green project files

## 🚀 Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Fill in project details:
   - **Name**: Go-green Platform
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to your users
5. Click "Create new project"
6. Wait for project setup (2-3 minutes)

## 🔧 Step 2: Configure Authentication Settings

1. In your Supabase dashboard, go to **Authentication > Settings**
2. Configure the following:

### Email Settings:
- ✅ **Enable email confirmations**: DISABLED (as requested)
- ✅ **Enable email change confirmations**: DISABLED
- ✅ **Enable secure email change**: ENABLED

### URL Configuration:
- **Site URL**: `http://localhost:5173` (for development)
- **Redirect URLs**: Add these URLs:
  ```
  http://localhost:5173/journey
  http://localhost:5173/signin
  http://localhost:5173/signup
  ```

### Email Templates (Optional):
- Customize the email templates if needed
- Default templates work fine for most cases

## 🗄️ Step 3: Set Up Database Schema

1. Go to **SQL Editor** in your Supabase dashboard
2. Click "New Query"
3. Copy and paste the entire content from `database/supabase-schema.sql`
4. Click "Run" to execute the schema
5. Verify tables are created in **Table Editor**

### Expected Tables:
- ✅ `user_profiles` - Extended user information
- ✅ `user_progress` - Course progress tracking
- ✅ `user_achievements` - Badges and certificates
- ✅ `user_sessions` - Login session tracking
- ✅ `user_preferences` - User settings
- ✅ `course_enrollments` - Course enrollments
- ✅ `user_activity_log` - Activity analytics

## 🔑 Step 4: Configure Environment Variables

1. In your Supabase dashboard, go to **Settings > API**
2. Copy the following values:
   - **Project URL**
   - **Project API Keys > anon public**

3. Create environment file in your project root:

### For Development (.env.local):
```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### For Production (.env.production):
```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

**⚠️ IMPORTANT**: 
- Never commit these files to version control
- Add `.env*` to your `.gitignore` file
- Use different projects for development and production

## 📦 Step 5: Install Dependencies

Run the following command in your project directory:

```bash
npm install @supabase/supabase-js
```

## 🧪 Step 6: Test the Integration

1. Start your development server:
```bash
npm run dev
```

2. Open your browser to `http://localhost:5173`

3. Test the authentication flow:
   - Go to Sign Up page
   - Create a new account
   - Verify you're redirected to the journey page
   - Check Supabase dashboard for new user in Authentication > Users

## 🔒 Step 7: Security Configuration

### Row Level Security (RLS)
The schema automatically enables RLS and creates policies. Verify in **Authentication > Policies**:

- ✅ Users can only access their own data
- ✅ Profiles are automatically created for new users
- ✅ All tables have appropriate security policies

### API Rate Limiting
In **Settings > API**:
- Check rate limiting settings
- Default limits are usually sufficient for development

## 📊 Step 8: Verify Data Flow

1. Create a test account through your app
2. Check in Supabase dashboard:
   - **Authentication > Users**: New user should appear
   - **Table Editor > user_profiles**: Profile should be auto-created
   - **Table Editor > user_preferences**: Preferences should be set

## 🎯 Common Issues & Solutions

### Issue: "Invalid API Key"
**Solution**: Double-check your environment variables and restart the dev server

### Issue: "Row Level Security" errors
**Solution**: Make sure RLS policies are properly set up by running the schema again

### Issue: User profile not created
**Solution**: Check if the trigger `on_auth_user_created` exists in **Database > Functions**

### Issue: CORS errors
**Solution**: Add your domain to the allowed origins in **Authentication > Settings**

## 🚀 Production Deployment

### Environment Setup:
1. Create a production Supabase project
2. Run the schema on production database
3. Update production environment variables
4. Configure production URLs in Supabase settings

### Security Checklist:
- ✅ Enable RLS on all tables
- ✅ Use strong database passwords
- ✅ Limit API access by origin
- ✅ Enable email confirmations for production (optional)
- ✅ Set up proper backup policies

## 📈 Advanced Features (Optional)

### Google OAuth Setup:
1. Go to **Authentication > Providers**
2. Enable Google provider
3. Add OAuth credentials from Google Console

### Email Provider Setup:
1. Go to **Authentication > Settings**
2. Configure SMTP settings
3. Use your own email service (SendGrid, Mailgun, etc.)

### Analytics Setup:
1. Use the built-in analytics views in the schema
2. Connect to external analytics tools
3. Set up monitoring dashboards

## 🛟 Support & Resources

- **Supabase Docs**: [docs.supabase.com](https://docs.supabase.com)
- **React Integration**: [supabase.com/docs/guides/auth/auth-helpers/react](https://supabase.com/docs/guides/auth/auth-helpers/react)
- **Community**: [github.com/supabase/supabase/discussions](https://github.com/supabase/supabase/discussions)

## ✅ Setup Complete!

Your Go-green platform now has:
- 🔐 Secure user authentication
- 👤 Extended user profiles
- 📊 Progress tracking
- 🏆 Achievement system
- 📈 Analytics capabilities
- 🛡️ Row-level security
- 🚀 Production-ready setup

**Next Steps**:
1. Test all authentication flows
2. Customize user profiles as needed
3. Implement course progress tracking
4. Set up analytics dashboards
5. Deploy to production

---

**🎉 Congratulations!** Your Go-green platform is now powered by Supabase with complete authentication and user management capabilities! 