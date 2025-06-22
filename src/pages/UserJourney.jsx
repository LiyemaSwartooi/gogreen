import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuth } from '../context/AuthContext';
import { 
  FaLeaf, FaGraduationCap, FaStore,
  FaBox, FaSeedling, FaBook,
  FaChartLine, FaHandshake, FaLightbulb,
  FaShieldHalved, FaToolbox, FaWrench,
  FaRocket, FaUserGraduate, FaMoneyBillWave,
  FaArrowRight, FaStar, FaGem, FaFire,
  FaUsers, FaTrophy, FaCircleCheck,
  FaUser, FaGear, FaArrowRightFromBracket, FaBell,
  FaChevronDown, FaHouse
} from 'react-icons/fa6';

const categories = [
  {
    id: 'starter-kits',
    name: 'Starter Kits',
    count: 3,
    icon: <FaBox />,
    color: 'from-emerald-500 to-green-500',
    description: 'Complete growing solutions for every level',
    journeys: [
      {
        id: 'basic-kit',
        name: 'Basic Starter Kit',
        icon: <FaSeedling />,
        description: 'Everything you need to start your microgreens journey. Perfect for beginners.',
        features: [
          'Growing Trays & Dome',
          'Premium Soil Mix',
          'Selected Seeds',
          'Basic Tools'
        ],
        price: 'R499',
        badge: 'Popular',
        badgeColor: 'bg-emerald-500'
      },
      {
        id: 'pro-kit',
        name: 'Professional Kit',
        icon: <FaToolbox />,
        description: 'Advanced setup for serious urban farmers. Includes automation features.',
        features: [
          'Auto-Watering System',
          'LED Grow Lights',
          'Climate Control',
          'Extended Tool Set'
        ],
        price: 'R1,499',
        badge: 'Best Value',
        badgeColor: 'bg-blue-500'
      },
      {
        id: 'business-kit',
        name: 'Business Startup Kit',
        icon: <FaRocket />,
        description: 'Complete business solution with training and marketing materials.',
        features: [
          'Pro Kit Equipment',
          'Business Training',
          'Marketing Materials',
          'Support Package'
        ],
        price: 'R2,999',
        badge: 'Premium',
        badgeColor: 'bg-purple-500'
      }
    ]
  },
  {
    id: 'training',
    name: 'Training Programs',
    count: 3,
    icon: <FaGraduationCap />,
    color: 'from-blue-500 to-indigo-500',
    description: 'Expert-led courses to master your skills',
    journeys: [
      {
        id: 'basics-course',
        name: 'Microgreens Basics',
        icon: <FaBook />,
        description: 'Master the fundamentals of microgreens cultivation.',
        features: [
          'Growing Techniques',
          'Plant Care Basics',
          'Harvest Methods',
          'Problem Solving'
        ],
        duration: '2 Weeks',
        badge: 'Beginner',
        badgeColor: 'bg-green-500'
      },
      {
        id: 'business-training',
        name: 'Business Development',
        icon: <FaChartLine />,
        description: 'Learn how to turn your growing skills into a profitable business.',
        features: [
          'Business Planning',
          'Market Analysis',
          'Pricing Strategy',
          'Sales Techniques'
        ],
        duration: '3 Weeks',
        badge: 'Advanced',
        badgeColor: 'bg-orange-500'
      },
      {
        id: 'advanced-techniques',
        name: 'Advanced Growing',
        icon: <FaUserGraduate />,
        description: 'Advanced techniques for scaling your production.',
        features: [
          'Automation Systems',
          'Scale Operations',
          'Quality Control',
          'Advanced Troubleshooting'
        ],
        duration: '4 Weeks',
        badge: 'Expert',
        badgeColor: 'bg-red-500'
      }
    ]
  },
  {
    id: 'marketplace',
    name: 'Marketplace',
    count: 3,
    icon: <FaStore />,
    color: 'from-purple-500 to-pink-500',
    description: 'Premium supplies and business services',
    journeys: [
      {
        id: 'supplies',
        name: 'Growing Supplies',
        icon: <FaWrench />,
        description: 'Quality supplies for your growing operation.',
        features: [
          'Premium Seeds',
          'Growing Media',
          'Tools & Equipment',
          'Packaging Materials'
        ],
        badge: 'Quality',
        badgeColor: 'bg-teal-500'
      },
      {
        id: 'tech-solutions',
        name: 'Tech Solutions',
        icon: <FaLightbulb />,
        description: 'Advanced technology for automated growing.',
        features: [
          'Automation Systems',
          'Monitoring Tools',
          'Climate Control',
          'Smart Solutions'
        ],
        badge: 'Innovation',
        badgeColor: 'bg-cyan-500'
      },
      {
        id: 'business-services',
        name: 'Business Services',
        icon: <FaMoneyBillWave />,
        description: 'Professional services to grow your business.',
        features: [
          'Marketing Support',
          'Business Planning',
          'Financial Tools',
          'Growth Strategy'
        ],
        badge: 'Professional',
        badgeColor: 'bg-indigo-500'
      }
    ]
  }
];

const UserJourney = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const { user: authUser, signOut } = useAuth();

  // Get user data from auth context
  const user = {
    name: authUser?.user_metadata?.full_name || authUser?.email?.split('@')[0] || "User",
    email: authUser?.email || "",
    avatar: authUser?.user_metadata?.avatar_url || null,
    level: "Urban Farmer", // You can enhance this based on user progress
    joinDate: authUser?.created_at ? new Date(authUser.created_at).toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    }) : "Recently"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/30 relative overflow-x-hidden w-full"
    >
      {/* User Profile Section */}
<div className="absolute top-2 right-2 md:top-4 md:right-4 z-50">
        <div className="relative">
          {/* Profile Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-1 md:space-x-2 bg-white/90 backdrop-blur-sm rounded-lg md:rounded-xl p-1.5 md:p-2 shadow-lg border border-emerald-100/50 hover:shadow-xl transition-all duration-300 group"
          >
            {/* Avatar */}
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-semibold shadow-md">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full rounded-lg object-cover" />
              ) : (
                <FaUser className="w-4 h-4" />
              )}
            </div>
            
            {/* User Info */}
            <div className="hidden lg:block text-left">
              <div className="font-semibold text-gray-900 text-xs">{user.name}</div>
              <div className="text-xs text-emerald-600 font-medium">{user.level}</div>
            </div>
            
            {/* Dropdown Arrow */}
            <motion.div
              animate={{ rotate: isProfileOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-gray-500 group-hover:text-emerald-600 transition-colors duration-300"
            >
              <FaChevronDown className="w-3 h-3" />
            </motion.div>

            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <FaStar className="w-2 h-2 text-white" />
          </div>
          </motion.button>

          {/* Profile Dropdown */}
          {isProfileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-56 md:w-64 bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl shadow-2xl border border-emerald-100/50 overflow-hidden"
            >
              {/* Enhanced Profile Header */}
              <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 p-4 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full -translate-y-12 translate-x-12" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white rounded-full translate-y-10 -translate-x-10" />
                  <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white rounded-full -translate-x-8 -translate-y-8" />
        </div>
        
                <div className="relative z-10">
                  <div className="flex items-start space-x-3">
                    {/* Enhanced Avatar */}
          <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="relative"
                    >
                      <div className="w-12 h-12 bg-white/25 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30 shadow-xl">
                        {user.avatar ? (
                          <img src={user.avatar} alt={user.name} className="w-full h-full rounded-2xl object-cover" />
                        ) : (
                          <FaUser className="w-6 h-6 text-white" />
                        )}
                      </div>
                      {/* Online Status Indicator */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    </motion.div>

                    {/* Enhanced User Info */}
                    <div className="flex-1 min-w-0">
                      <div className="mb-2">
                        <motion.h3 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="font-bold text-sm mb-1 text-white"
                        >
                          {user.name}
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          className="text-emerald-100 text-xs font-medium truncate"
                        >
                          {user.email}
                        </motion.p>
                        <motion.p 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-emerald-200 text-xs font-medium"
                        >
                          Member since {user.joinDate}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                             {/* Menu Items */}
               <div className="p-2">

                {/* Logout */}
                <motion.button
                  whileHover={{ x: 4 }}
                  onClick={async () => {
                    const result = await signOut();
                    if (result.success || !result.error) {
                      // Show success toast
                      toast.success('Successfully Signed Out!', {
                        description: 'You have been safely logged out. See you next time!',
                        duration: 3000,
                      });
                      
                      // Small delay for user to see the toast before redirect
                      setTimeout(() => {
                        navigate('/signin');
                        setIsProfileOpen(false);
                      }, 1000);
                    } else {
                      // Show error toast if logout fails
                      toast.error('Sign Out Failed', {
                        description: 'Something went wrong. Please try again.',
                        duration: 3000,
                      });
                    }
                  }}
                  className="w-full flex items-center space-x-3 p-2 rounded-xl hover:bg-red-50 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg flex items-center justify-center text-red-600 group-hover:from-red-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
                    <FaArrowRightFromBracket className="w-4 h-4" />
              </div>
                  <span className="font-medium text-sm text-gray-700 group-hover:text-red-600 transition-colors duration-300">
                    Sign Out
                  </span>
                </motion.button>
            </div>
          </motion.div>
          )}
        </div>
      </div>
      {/* Enhanced Animated Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Floating Bubbles */}
        <motion.div
          animate={{
            y: [-20, -100, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [20, -80, 20],
            x: [10, -15, 10],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/4 right-20 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [-30, -120, -30],
            x: [-15, 20, -15],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-purple-200/35 to-pink-200/35 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [15, -90, 15],
            x: [20, -10, 20],
            scale: [1.05, 1.15, 1.05],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-teal-200/40 to-emerald-200/40 rounded-full blur-lg"
        />

        {/* Medium Bubbles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-10, -60, -10],
              x: [-5, 15, -5],
              scale: [0.8, 1.1, 0.8],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
            className={`absolute w-16 h-16 bg-gradient-to-br from-emerald-300/20 to-teal-300/20 rounded-full blur-md`}
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
          />
        ))}

        {/* Small Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            animate={{
              y: [-5, -40, -5],
              x: [-3, 8, -3],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
            className={`absolute w-6 h-6 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-full blur-sm`}
            style={{
              top: `${Math.random() * 90 + 5}%`,
              left: `${Math.random() * 90 + 5}%`,
            }}
          />
        ))}
      </div>



      {/* Enhanced Main Content */}
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 md:pt-16 md:pb-8 lg:pt-20 lg:pb-20">
        {/* Section Header */}
                <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 mb-4 md:mb-6 border border-emerald-200/50 text-sm md:text-base"
          >
            <FaRocket className="mr-2" />
            <span className="font-semibold">Choose Your Path</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4 md:mb-6 flex flex-col items-center justify-center text-center"
          >
            <div className="flex flex-wrap items-center justify-center space-x-2">
              <span className="text-lg md:text-2xl text-gray-600 font-medium">
                Welcome, 
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-lg md:text-2xl text-emerald-600 font-bold">
                  {user.name}!
                </span>
                <FaSeedling className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent mb-4 md:mb-6">
            Continue Your Journey Today
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
            Select from our carefully curated options to continue your urban farming journey. Whether you're just starting or ready to scale, 
            <span className="text-emerald-600 font-semibold"> we have the perfect solution for you.</span>
          </p>
        </motion.div>

        {/* Enhanced Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="relative group"
            >
              <div
                className={`bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl border-2 border-transparent hover:border-emerald-200/50 ${
                  selectedCategory === category.id ? 'ring-4 ring-emerald-500/20 border-emerald-300/50' : ''
                }`}
                onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
              >
                {/* Enhanced Header */}
                <div className={`bg-gradient-to-br ${category.color} p-4 md:p-8 relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full -translate-y-10 translate-x-10" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full translate-y-8 -translate-x-8" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="text-white">
                        <div className="text-lg md:text-2xl font-bold mb-1">{category.name}</div>
                        <div className="text-white/90 text-xs md:text-sm font-medium">{category.count} Options Available</div>
                      </div>
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="text-white text-2xl md:text-4xl bg-white/20 rounded-xl md:rounded-2xl p-2 md:p-3 backdrop-blur-sm"
                      >
                        {category.icon}
                      </motion.div>
                    </div>
                    <p className="text-white/90 text-xs md:text-sm leading-relaxed">{category.description}</p>
                  </div>
                </div>

                {/* Enhanced Content Preview */}
                <div className="p-4 md:p-6">
                                      <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium text-sm md:text-base">Explore Options</span>
                    <motion.div
                      animate={{ x: selectedCategory === category.id ? 5 : 0 }}
                      className="text-emerald-600"
                    >
                      <FaArrowRight />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Journey Cards */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-8"
          >
            {/* Category Title */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {categories.find((cat) => cat.id === selectedCategory)?.name}
              </h3>
              <p className="text-sm md:text-base text-gray-600 px-4 md:px-0">
                {categories.find((cat) => cat.id === selectedCategory)?.description}
              </p>
            </div>

            {/* Journey Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {categories
              .find((cat) => cat.id === selectedCategory)
                ?.journeys.map((journey, index) => (
                <motion.div
                  key={journey.id}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -8 }}
                                         className="bg-white rounded-3xl shadow-xl border-2 border-transparent hover:border-emerald-200/50 hover:shadow-2xl transition-all duration-500 group relative"
                  >
                                         {/* Badge */}
                                          {(selectedCategory === 'starter-kits' || 
                       selectedCategory === 'marketplace' ||
                       journey.id === 'business-training' ||
                       journey.id === 'advanced-techniques') ? (
                        <div className="absolute -top-3 left-4 md:left-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-semibold z-50 shadow-lg">
                          Coming Soon
                        </div>
                                            ) : journey.badge && (
                        <div className={`absolute -top-3 left-4 md:left-6 ${journey.badgeColor} text-white px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-semibold z-50 shadow-lg`}>
                         {journey.badge}
                       </div>
                     )}

                                         <div className="p-4 md:p-8 relative overflow-hidden rounded-3xl">
                       {/* Background Pattern */}
                       <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full -translate-y-16 translate-x-16 opacity-50" />
                      
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4 md:mb-6">
                          <div>
                            <h4 className="text-lg md:text-2xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">
                        {journey.name}
                            </h4>
                    {journey.price && (
                              <div className="text-lg md:text-2xl font-bold text-emerald-600">
                        {(selectedCategory === 'starter-kits' || selectedCategory === 'marketplace') 
                          ? 'Pricing TBA' 
                          : journey.price
                        }
                      </div>
                    )}
                    {journey.duration && (
                              <div className="text-base md:text-lg font-semibold text-blue-600">
                        Duration: {journey.duration}
                      </div>
                    )}
                          </div>
                          <motion.div 
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            className="text-2xl md:text-3xl text-emerald-600 bg-emerald-50 rounded-xl md:rounded-2xl p-2 md:p-3 group-hover:bg-emerald-100 transition-colors duration-300"
                          >
                            {journey.icon}
                          </motion.div>
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                          {(selectedCategory === 'starter-kits' || 
                            selectedCategory === 'marketplace' ||
                            journey.id === 'business-training' ||
                            journey.id === 'advanced-techniques') && (
                            <span className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium bg-amber-100 text-amber-800 border border-amber-200 mb-2 md:mb-3">
                              <FaRocket className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                              Coming Soon - Get early access!
                            </span>
                          )}
                          <br />
                          {journey.description}
                          {(selectedCategory === 'starter-kits' || 
                            selectedCategory === 'marketplace' ||
                            journey.id === 'business-training' ||
                            journey.id === 'advanced-techniques') && (
                            <span className="block mt-2 text-emerald-600 font-medium">
                              Join our waitlist to be the first to know when we launch!
                            </span>
                          )}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                          {journey.features.map((feature, featureIndex) => (
                            <motion.div 
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + featureIndex * 0.1 }}
                              className="flex items-center text-sm md:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                            >
                                                             <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                                 <FaCircleCheck className="w-2 h-2 md:w-3 md:h-3 text-white" />
                              </div>
                              <span className="font-medium">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            // Handle different journey types
                            if (journey.id === 'basics-course') {
                              navigate('/courses/microgreens-basics');
                            } else if (journey.id === 'business-training') {
                              navigate('/courses/business-development');
                            } else if (journey.id === 'advanced-techniques') {
                              navigate('/courses/advanced-growing');
                            } else {
                              // Coming Soon sections - open modal or form for user interest
                              const category = categories.find(cat => cat.id === selectedCategory);
                              const isComingSoon = selectedCategory === 'starter-kits' || 
                                                 selectedCategory === 'marketplace' ||
                                                 journey.id === 'business-training' ||
                                                 journey.id === 'advanced-techniques';
                              
                              if (isComingSoon) {
                                const message = `Hi! I'm interested in the ${journey.name} from your ${category?.name} section. Can you brief me on when this will be available and what it includes?`;
                                const whatsappUrl = `https://wa.me/27123456789?text=${encodeURIComponent(message)}`;
                                window.open(whatsappUrl, '_blank');
                              }
                            }
                          }}
                          className={`w-full py-4 ${
                            selectedCategory === 'starter-kits' || 
                            selectedCategory === 'marketplace' ||
                            journey.id === 'business-training' ||
                            journey.id === 'advanced-techniques'
                              ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:to-orange-400'
                              : 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500'
                          } text-white rounded-xl md:rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden text-sm md:text-base py-3 md:py-4`}
                        >
                          <span className="relative z-10">
                            {selectedCategory === 'starter-kits' || 
                             selectedCategory === 'marketplace' ||
                             journey.id === 'business-training' ||
                             journey.id === 'advanced-techniques'
                              ? 'Get Notified' 
                              : 'Get Started'
                            }
                          </span>
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="ml-2 relative z-10"
                          >
                            <FaArrowRight />
                          </motion.div>
                          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </motion.button>
                      </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Call to Action Section */}
        {!selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-8 md:mt-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 rounded-2xl md:rounded-3xl p-6 md:p-12 text-white relative overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0">
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl"
              />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white mb-4 md:mb-6 text-sm md:text-base"
              >
                <FaFire className="mr-2 text-yellow-300" />
                <span className="font-semibold">Ready to Start?</span>
              </motion.div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Join the Urban Farming Revolution
              </h3>
              <p className="text-base md:text-xl text-emerald-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4 md:px-0">
                Select a category above to explore your options and begin your journey to sustainable farming success.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4 md:px-0">
                                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 md:px-8 md:py-4 bg-white text-emerald-600 rounded-xl md:rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center text-sm md:text-base"
                  >
                  <FaUsers className="mr-2" />
                  Join Community
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white rounded-xl md:rounded-2xl font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 flex items-center text-sm md:text-base"
                >
                  <FaBook className="mr-2" />
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default UserJourney;