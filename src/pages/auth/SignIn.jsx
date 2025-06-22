import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useAuth } from '../../context/AuthContext';
import { 
  FaEnvelope, FaLock, FaGoogle, FaGithub, FaLinkedin, 
  FaLeaf, FaSeedling, FaGraduationCap, FaHandshake, 
  FaChartLine, FaUsers, FaArrowRight, FaTrophy,
  FaRocket, FaShield, FaChartPie, FaSpinner, FaTriangleExclamation,
  FaEye, FaEyeSlash
} from 'react-icons/fa6';
import { ROUTES } from '@/utils/constants';

const SignIn = () => {
  const navigate = useNavigate();
  const { signIn, loading, error, clearError, user } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      navigate(ROUTES.USER_JOURNEY);
    }
  }, [user, navigate]);

  const validateForm = () => {
    const errors = {};
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Password validation
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear specific field error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear global error
    if (error) {
      clearError();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // Show error toast for validation issues
      const firstError = Object.values(errors)[0];
      toast.error('Please fix the form errors', {
        description: firstError,
        duration: 3000,
      });
      return;
    }
    
    setIsSubmitting(true);
    setFormErrors({});
    
    try {
      const result = await signIn(formData.email, formData.password);
      
      if (result.success) {
        // Show success toast
        toast.success('Welcome back!', {
          description: 'You have successfully signed in. Redirecting to your dashboard...',
          duration: 3000,
        });
        
        // Small delay before redirect for better UX
        setTimeout(() => {
          navigate(ROUTES.USER_JOURNEY);
        }, 1000);
      } else {
        setFormErrors({ submit: result.error });
        toast.error('Sign In Failed', {
          description: result.error || 'Invalid email or password. Please try again.',
          duration: 4000,
        });
      }
    } catch (err) {
      const errorMessage = 'An unexpected error occurred. Please try again.';
      setFormErrors({ submit: errorMessage });
      toast.error('Sign In Error', {
        description: errorMessage,
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-x-hidden w-full"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-emerald-200/30 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-blue-200/30 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] bg-purple-200/30 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
        </div>
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:32px_32px]" />
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-emerald-400/30 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400/30 rounded-full animate-float animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center min-h-screen">
          {/* Left Section - Compact Welcome Message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 mb-4 shadow-lg border border-emerald-200/50"
            >
              <FaSeedling className="mr-2 text-emerald-600" /> 
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-semibold">Welcome Back</span>
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Continue Your
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
                Urban Farming Journey
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Access your dashboard and continue building your sustainable microgreens business. 
              <span className="text-emerald-600 font-semibold"> Your success story awaits!</span>
            </motion.p>

            {/* Compact Achievement Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3 mb-6"
            >
              {[
                { 
                  icon: <FaUsers className="w-4 h-4" />,
                  title: "Active Community",
                  description: "Join 500+ successful farmers",
                  color: "from-emerald-500 to-green-500",
                  badge: "500+ Members"
                },
                { 
                  icon: <FaChartLine className="w-4 h-4" />,
                  title: "Track Progress",
                  description: "Monitor growth in real-time",
                  color: "from-blue-500 to-cyan-500",
                  badge: "Live Analytics"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-emerald-100/50 hover:shadow-lg hover:border-emerald-200/50 transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-r ${item.color} rounded-lg p-2 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-sm text-gray-900">{item.title}</h3>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Compact Success Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-3 text-center"
            >
              {[
                { number: "500+", label: "Active Users", icon: <FaUsers className="w-3 h-3" /> },
                { number: "95%", label: "Success Rate", icon: <FaTrophy className="w-3 h-3" /> },
                { number: "R2K+", label: "Avg. Monthly", icon: <FaRocket className="w-3 h-3" /> }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-emerald-100/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-1 text-emerald-600">
                    {stat.icon}
                  </div>
                  <div className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section - Compact Sign In Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-5 border border-emerald-100/50 relative overflow-hidden">
              {/* Form Background Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100/50 to-teal-100/50 rounded-full -translate-y-10 translate-x-10" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-100/50 to-purple-100/50 rounded-full translate-y-8 -translate-x-8" />
              
              <div className="relative z-10">
                <div className="text-center mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg mx-auto mb-2 flex items-center justify-center shadow-lg"
                  >
                    <FaChartPie className="w-5 h-5 text-white" />
                  </motion.div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Welcome Back</h2>
                  <p className="text-gray-600 text-xs">Access your dashboard</p>
                </div>

                {/* Global Error Message */}
                {(error || formErrors.submit) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 flex items-center space-x-2"
                  >
                    <FaTriangleExclamation className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <p className="text-red-700 text-xs">{error || formErrors.submit}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1 text-xs">Email</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full pl-9 pr-3 py-2.5 rounded-lg border ${formErrors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-emerald-500 focus:border-emerald-500'} focus:outline-none focus:ring-2 transition-all duration-300 text-xs hover:border-emerald-300`}
                        placeholder="Enter your email"
                      />
                    </div>
                    {formErrors.email && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1 text-xs">Password</label>
                    <div className="relative">
                      <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className={`w-full pl-9 pr-10 py-2.5 rounded-lg border ${formErrors.password ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-emerald-500 focus:border-emerald-500'} focus:outline-none focus:ring-2 transition-all duration-300 text-xs hover:border-emerald-300`}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        {showPassword ? (
                          <FaEyeSlash className="text-xs" />
                        ) : (
                          <FaEye className="text-xs" />
                        )}
                      </button>
                    </div>
                    {formErrors.password && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded text-emerald-600 focus:ring-emerald-500 w-3 h-3"
                      />
                      <label className="ml-2 text-xs text-gray-600">Remember me</label>
                    </div>
                    <Link to="#" className="text-xs text-emerald-600 hover:text-emerald-700 font-medium">
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || loading}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting || loading ? (
                      <>
                        <FaSpinner className="w-4 h-4 animate-spin" />
                        <span>Signing In...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In</span>
                        <FaArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  


                </form>

                <p className="mt-4 text-center text-gray-600 text-xs">
                  Need an account?{' '}
                  <Link to="/signup" className="text-emerald-600 hover:text-emerald-700 font-medium underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignIn;