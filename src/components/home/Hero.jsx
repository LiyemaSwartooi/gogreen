import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, FaSeedling, FaUsers, FaLeaf, FaRocket,
  FaStar, FaAward, FaTrophy, FaGem, FaShield,
  FaChartLine, FaGlobe, FaHeart, FaLightbulb,
  FaPlay, FaCircleCheck, FaFire, FaThumbsUp
} from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-200/20 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-200/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-purple-200/20 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
          <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-pink-200/20 rounded-full filter blur-2xl animate-blob animation-delay-6000" />
        </div>
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-emerald-400/30 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-8 h-8 bg-blue-400/30 rounded-full animate-float animation-delay-2000" />
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-purple-400/30 rounded-full animate-float animation-delay-4000" />
        <div className="absolute top-60 left-1/2 w-5 h-5 bg-pink-400/30 rounded-full animate-float animation-delay-6000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-100 via-teal-100 to-emerald-100 text-emerald-800 mb-6 shadow-lg border border-emerald-200/50 backdrop-blur-sm"
            >
              <FaSeedling className="mr-2 text-emerald-600" /> 
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-semibold">Smart Urban Farming</span>
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight px-4 sm:px-0"
            >
              Grow Your Future with{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent relative">
                Microgreens
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0"
            >
              Empowering youth with smart farming kits to grow and sell high-value microgreens. 
              <span className="text-emerald-600 font-semibold"> Start your profitable urban farming business in just 14 days!</span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-row items-center lg:justify-start justify-center gap-3 md:gap-4 w-full"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/signin"
                  className="group inline-flex items-center justify-center space-x-2 px-4 py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden flex-1 sm:flex-none min-w-[120px] sm:min-w-[160px] text-sm md:text-base"
                >
                  <span className="relative z-10">Get Started</span>
                  <FaArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/signin"
                  className="group inline-flex items-center justify-center space-x-2 px-4 py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full border-2 border-emerald-600 text-emerald-600 font-medium hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-0.5 bg-white/80 backdrop-blur-sm flex-1 sm:flex-none min-w-[120px] sm:min-w-[160px] text-sm md:text-base"
                >
                  <span>Join Training</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Hero Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              {/* Enhanced Image Container */}
              <motion.div 
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 3 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-emerald-200 via-teal-200 to-emerald-300 rounded-3xl shadow-2xl"
              >
                <img
                  src="/assets/images/6feca725-ea49-49b5-a982-b6c3c8674d8a.jpg"
                  alt="Microgreens Smart Farming"
                  className="w-full h-full object-cover rounded-3xl mix-blend-multiply"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent rounded-3xl" />
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-1 -right-1 md:-bottom-4 md:-right-4 bg-white/90 backdrop-blur-sm p-1.5 md:p-2.5 rounded-md md:rounded-lg shadow-sm md:shadow-md max-w-[120px] md:max-w-[180px] border border-emerald-100/30"
              >
                <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-md flex items-center justify-center shadow-sm">
                    <FaUsers className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-xs md:text-sm">500+</p>
                    <p className="text-emerald-600 font-medium text-[10px] md:text-xs">Youth</p>
                  </div>
                </div>
                <p className="text-gray-600 text-[9px] md:text-xs font-medium leading-tight hidden md:block">
                  Creating sustainable jobs through smart urban farming initiatives across South Africa
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-1 -left-1 md:-top-4 md:-left-4 bg-white/90 backdrop-blur-sm p-1.5 md:p-2.5 rounded-md md:rounded-lg shadow-sm md:shadow-md border border-blue-100/30"
              >
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md flex items-center justify-center shadow-sm">
                    <FaFire className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-xs md:text-sm">R2K+</p>
                    <p className="text-blue-600 font-medium text-[10px] md:text-xs">Monthly</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Platform Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 lg:mt-24 px-4 md:px-0"
        >
          {[
            { 
              number: "14", 
              label: "Days to First Harvest",
              icon: <FaRocket className="w-6 h-6" />,
              color: "from-emerald-500 to-green-500",
              description: "Quick turnaround"
            },
            { 
              number: "R2K+", 
              label: "Monthly Revenue",
              icon: <FaChartLine className="w-6 h-6" />,
              color: "from-blue-500 to-cyan-500",
              description: "Proven earnings"
            },
            { 
              number: "10+", 
              label: "Premium Microgreens",
              icon: <FaLeaf className="w-6 h-6" />,
              color: "from-purple-500 to-pink-500",
              description: "Variety selection"
            },
            { 
              number: "60%", 
              label: "Profit Margin",
              icon: <FaTrophy className="w-6 h-6" />,
              color: "from-pink-500 to-rose-500",
              description: "High returns"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.3 } }}
              className="group p-4 md:p-6 lg:p-8 bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl border-2 border-emerald-100/50 hover:shadow-2xl hover:border-emerald-200/50 transition-all duration-500 text-center relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-current rounded-full -translate-y-10 translate-x-10" />
              </div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${stat.color} rounded-xl md:rounded-2xl flex items-center justify-center text-white mx-auto mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  {stat.icon}
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </h3>
                <p className="text-sm md:text-base text-gray-900 font-bold mb-1 group-hover:text-emerald-600 transition-colors duration-300">{stat.label}</p>
                <p className="text-xs md:text-sm text-gray-500 font-medium">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
