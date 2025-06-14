# 🔐 Simple Authentication Setup - SignIn/SignUp Only

Quick setup guide for basic signin/signup functionality using Supabase.

## 🚀 Quick Setup (5 minutes)

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com) → Sign up/Login
2. Create new project: **"Go-green Auth"**
3. Choose region and set password
4. Wait 2-3 minutes for setup

### 2. Configure Auth Settings
In Supabase Dashboard → **Authentication > Settings**:
- ✅ **Disable email confirmations** (as requested)
- **Site URL**: `http://localhost:5173`
- **Redirect URLs**: `http://localhost:5173/journey`

### 3. Set Up Database
1. Go to **SQL Editor**
2. Copy & paste content from `database/auth-schema.sql`
3. Click **Run**
4. Verify 2 tables created: `user_profiles` & `user_sessions`

### 4. Get Your Keys
**Settings > API** → Copy:
- **Project URL**
- **anon public key**

### 5. Create Environment File
Create `.env.local` in project root:
```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### 6. Install & Test
```bash
npm install @supabase/supabase-js
npm run dev
```

## 🧪 Test Your Setup

1. Open `http://localhost:5173`
2. Go to SignUp page
3. Create account with:
   - Name: Test User
   - Email: test@example.com
   - Password: test123456
4. Should redirect to journey page
5. Check Supabase dashboard for new user

## 📊 What You Get

### Tables Created:
- **`user_profiles`** - Stores: name, email, phone, location
- **`user_sessions`** - Tracks: login times, IP addresses

### Features Working:
- ✅ Sign up with email/password
- ✅ Sign in with email/password
- ✅ Auto-create user profiles
- ✅ Secure data access (RLS enabled)
- ✅ Session tracking
- ✅ Protected routes

## 🔧 Customize (Optional)

### Add more profile fields:
```sql
ALTER TABLE public.user_profiles 
ADD COLUMN age INTEGER,
ADD COLUMN profession TEXT;
```

### Change password requirements:
In Supabase → **Authentication > Settings** → Password requirements

## ⚠️ Important Notes

- **No email confirmation** - Users can login immediately after signup
- **Secure by default** - RLS policies protect user data
- **Auto-profile creation** - Profile created automatically on signup
- **Session tracking** - Basic login analytics included

## 🎯 Production Checklist

Before going live:
- [ ] Create production Supabase project
- [ ] Enable email confirmations
- [ ] Set production URLs
- [ ] Use environment variables
- [ ] Test thoroughly

---

**✅ Done!** Your signin/signup is now powered by Supabase! 