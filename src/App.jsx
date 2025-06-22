import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';
import Layout from '@/components/layout/Layout';
import { AuthProvider } from '@/context/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { Toaster } from 'sonner';
import './styles/toast.css';

// Pages
import Home from '@/pages/Home';
import UserJourney from '@/pages/UserJourney';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import StarterKits from '@/pages/StarterKits';
import TermsAndPolicies from '@/pages/TermsAndPolicies';
import AdminDashboard from '@/pages/AdminDashboard';

// Course Pages
import MicrogreensBasics from '@/pages/courses/MicrogreensBasics';
import BusinessDevelopment from '@/pages/courses/BusinessDevelopment';
import AdvancedGrowing from '@/pages/courses/AdvancedGrowing';

// Auth Pages
import SignIn from '@/pages/auth/SignIn';
import SignUp from '@/pages/auth/SignUp';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import VerifyEmail from '@/pages/auth/VerifyEmail';
import JoinMission from '@/pages/auth/JoinMission';

function App() {
  return (
    <AuthProvider>
      <div className="w-full overflow-x-hidden">
        <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.USER_JOURNEY} element={
          <ProtectedRoute>
            <UserJourney />
          </ProtectedRoute>
        } />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/starter-kits" element={<StarterKits />} />
        <Route path="/terms-and-policies" element={<TermsAndPolicies />} />
      </Route>

      {/* Admin Route - Outside Layout for clean interface */}
      <Route path="/admin" element={<AdminDashboard />} />

      {/* Course Routes */}
      <Route path="/courses/microgreens-basics" element={
        <ProtectedRoute>
          <MicrogreensBasics />
        </ProtectedRoute>
      } />
      <Route path="/courses/business-development" element={
        <ProtectedRoute>
          <BusinessDevelopment />
        </ProtectedRoute>
      } />
      <Route path="/courses/advanced-growing" element={
        <ProtectedRoute>
          <AdvancedGrowing />
        </ProtectedRoute>
      } />

      {/* Auth Routes */}
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={ROUTES.VERIFY_EMAIL} element={<VerifyEmail />} />
      <Route path="/join-mission" element={<JoinMission />} />
        </Routes>
        <Toaster 
          position="top-right" 
          expand={true}
          richColors={false}
          toastOptions={{
            duration: 4000,
            className: 'font-medium shadow-2xl',
            style: {
              background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '16px',
              padding: '16px 20px',
              fontSize: '14px',
              fontWeight: '500',
              boxShadow: '0 10px 25px -5px rgba(5, 150, 105, 0.4), 0 10px 10px -5px rgba(5, 150, 105, 0.2)',
              backdropFilter: 'blur(8px)',
            },
            success: {
              style: {
                background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              },
              iconTheme: {
                primary: '#ffffff',
                secondary: '#059669',
              },
            },
            error: {
              style: {
                background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 10px 25px -5px rgba(220, 38, 38, 0.4), 0 10px 10px -5px rgba(220, 38, 38, 0.2)',
              },
              iconTheme: {
                primary: '#ffffff',
                secondary: '#dc2626',
              },
            },
            info: {
              style: {
                background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.4), 0 10px 10px -5px rgba(37, 99, 235, 0.2)',
              },
              iconTheme: {
                primary: '#ffffff',
                secondary: '#2563eb',
              },
            },
            warning: {
              style: {
                background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 10px 25px -5px rgba(217, 119, 6, 0.4), 0 10px 10px -5px rgba(217, 119, 6, 0.2)',
              },
              iconTheme: {
                primary: '#ffffff',
                secondary: '#d97706',
              },
            },
          }}
        />
      </div>
    </AuthProvider>
  );
}

export default App;
