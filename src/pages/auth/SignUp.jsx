import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useAuth } from '../../context/AuthContext';
import { 
  FaUser, FaEnvelope, FaLock, FaGoogle, 
  FaGithub, FaLinkedin, FaLeaf, FaGraduationCap,
  FaHandshake, FaChartLine, FaSeedling, FaUsers,
  FaArrowRight, FaStar, FaRocket, FaTrophy, 
  FaShield, FaSpinner, FaTriangleExclamation,
  FaEye, FaEyeSlash
} from 'react-icons/fa6';

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp, loading, error, clearError, user } = useAuth();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      navigate('/journey');
    }
  }, [user, navigate]);

  const validateForm = () => {
    const errors = {};
    
    // Full Name validation
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = 'Full name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName.trim())) {
      errors.fullName = 'Full name can only contain letters and spaces';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Password validation
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      errors.password = 'Password must contain uppercase, lowercase, and a number';
    }
    
    // Confirm Password validation
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    
    // Terms and Policies validation
    if (!acceptedTerms) {
      errors.terms = 'You must accept the terms and policies to create an account';
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
      const result = await signUp(formData.email, formData.password, {
        full_name: formData.fullName
      });
      
      if (result.success) {
        // Show success toast
        toast.success('Welcome to Go-Green!', {
          description: 'Your account has been created successfully. Starting your farming journey!',
          duration: 4000,
        });
        
        // Small delay before redirect for better UX
        setTimeout(() => {
          navigate('/journey');
        }, 1500);
      } else {
        setFormErrors({ submit: result.error });
        toast.error('Registration Failed', {
          description: result.error || 'Something went wrong. Please try again.',
          duration: 4000,
        });
      }
    } catch (err) {
      const errorMessage = 'An unexpected error occurred. Please try again.';
      setFormErrors({ submit: errorMessage });
      toast.error('Registration Error', {
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
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-200/30 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-200/30 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-purple-200/30 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
        </div>
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:32px_32px]" />
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-emerald-400/30 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400/30 rounded-full animate-float animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Left Section - Compact Value Proposition */}
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
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-semibold">Join the Revolution</span>
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Start Your
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
              Join thousands building sustainable businesses through microgreens cultivation. 
              <span className="text-emerald-600 font-semibold"> Start earning in 14 days!</span>
            </motion.p>

            {/* Compact Value Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3 mb-6"
            >
              {[
                { 
                  icon: <FaGraduationCap className="w-4 h-4" />,
                  title: "Complete Training",
                  description: "2-week course with mentorship",
                  color: "from-emerald-500 to-green-500",
                  badge: "14 Days"
                },
                { 
                  icon: <FaChartLine className="w-4 h-4" />,
                  title: "Proven Revenue",
                  description: "R2K+ monthly with 60% margins",
                  color: "from-purple-500 to-pink-500",
                  badge: "R2K+"
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
                { number: "500+", label: "Youth Trained", icon: <FaUsers className="w-3 h-3" /> },
                { number: "95%", label: "Success Rate", icon: <FaTrophy className="w-3 h-3" /> },
                { number: "50+", label: "Cities", icon: <FaRocket className="w-3 h-3" /> }
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

          {/* Right Section - Compact Sign Up Form */}
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
                    <FaShield className="w-5 h-5 text-white" />
                  </motion.div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Create Account</h2>
                  <p className="text-gray-600 text-xs">Start your farming business</p>
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
                    <label className="block text-gray-700 font-medium mb-1 text-xs">Full Name</label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className={`w-full pl-9 pr-3 py-2.5 rounded-lg border ${formErrors.fullName ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-emerald-500 focus:border-emerald-500'} focus:outline-none focus:ring-2 transition-all duration-300 text-xs hover:border-emerald-300`}
                        placeholder="Enter your name"
                      />
                    </div>
                    {formErrors.fullName && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.fullName}</p>
                    )}
                  </div>

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
                        placeholder="Create a password"
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

                  <div>
                    <label className="block text-gray-700 font-medium mb-1 text-xs">Confirm Password</label>
                    <div className="relative">
                      <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        className={`w-full pl-9 pr-10 py-2.5 rounded-lg border ${formErrors.confirmPassword ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-emerald-500 focus:border-emerald-500'} focus:outline-none focus:ring-2 transition-all duration-300 text-xs hover:border-emerald-300`}
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        {showConfirmPassword ? (
                          <FaEyeSlash className="text-xs" />
                        ) : (
                          <FaEye className="text-xs" />
                        )}
                      </button>
                    </div>
                    {formErrors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.confirmPassword}</p>
                    )}
                  </div>



                  <div className="flex items-start space-x-2 pt-1">
                    <input
                      type="checkbox" 
                      checked={acceptedTerms}
                      onChange={(e) => {
                        setAcceptedTerms(e.target.checked);
                        if (formErrors.terms) {
                          setFormErrors(prev => ({
                            ...prev,
                            terms: ''
                          }));
                        }
                      }}
                      className={`mt-0.5 rounded w-3 h-3 ${formErrors.terms ? 'text-red-600 focus:ring-red-500' : 'text-emerald-600 focus:ring-emerald-500'}`}
                    />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-600 leading-tight">
                        I agree to the{' '}
                        <Link to="/terms-and-policies" className="text-emerald-600 hover:text-emerald-700 font-medium underline">
                          Terms and Policies
                        </Link>
                      </span>
                      {formErrors.terms && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.terms}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || loading}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting || loading ? (
                      <>
                        <FaSpinner className="w-4 h-4 animate-spin" />
                        <span>Creating Account...</span>
                      </>
                    ) : (
                      <>
                        <span>Create Account</span>
                        <FaArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>


                </form>

                <p className="mt-4 text-center text-gray-600 text-xs">
                  Have an account?{' '}
                  <Link to="/signin" className="text-emerald-600 hover:text-emerald-700 font-medium underline">
                    Sign in
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

export default SignUp;