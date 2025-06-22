import { motion } from 'framer-motion';
import { 
  FaSeedling, FaWater, FaLeaf, FaChartLine, FaRocket, 
  FaStar, FaGift, FaShield, FaUsers, FaTrophy,
  FaArrowRight, FaCircleCheck, FaGem, FaCrown
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const StarterKits = () => {
  const kits = [
    {
      name: "Basic Kit",
      price: "R500",
      originalPrice: "R750",
      badge: "Popular",
      features: [
        "5 Premium Microgreen Varieties",
        "Growing Trays & Containers",
        "Premium Soil Mix",
        "LED Growing Light",
        "Step-by-Step Guide",
        "24/7 Support Access"
      ],
      icon: <FaSeedling className="w-8 h-8" />,
      color: "from-emerald-500 via-emerald-400 to-green-500",
      shadowColor: "shadow-emerald-500/25",
      borderColor: "border-emerald-200",
      popular: false
    },
    {
      name: "Pro Kit",
      price: "R1,200",
      originalPrice: "R1,800",
      badge: "Best Value",
      features: [
        "10 Premium Microgreen Varieties",
        "Advanced Growing System",
        "Automated Watering Kit",
        "Professional LED Lights",
        "Business Guide & Support",
        "Marketing Templates",
        "Priority Support"
      ],
      icon: <FaRocket className="w-8 h-8" />,
      color: "from-blue-500 via-cyan-400 to-teal-500",
      shadowColor: "shadow-blue-500/25",
      borderColor: "border-blue-200",
      popular: true
    },
    {
      name: "Commercial Kit",
      price: "R2,500",
      originalPrice: "R3,500",
      badge: "Premium",
      features: [
        "20 Premium Microgreen Varieties",
        "Complete Vertical Setup",
        "Climate Control System",
        "Marketing Materials",
        "1-on-1 Mentorship",
        "Business License Support",
        "Profit Guarantee"
      ],
      icon: <FaCrown className="w-8 h-8" />,
      color: "from-purple-500 via-pink-400 to-rose-500",
      shadowColor: "shadow-purple-500/25",
      borderColor: "border-purple-200",
      popular: false
    }
  ];

  return (
    <section id="starter-kits" className="relative py-8 md:py-20 scroll-mt-20">
      {/* Section Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200/20 rounded-full filter blur-2xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-200/20 rounded-full filter blur-2xl animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-200/20 rounded-full filter blur-xl animate-float animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.span 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold bg-gradient-to-r from-emerald-100 via-teal-100 to-emerald-100 text-emerald-800 mb-4 md:mb-6 shadow-lg border border-emerald-200/50"
          >
            <FaGem className="mr-2 text-emerald-600" /> 
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Get Started Today</span>
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
          >
            Choose Your
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
              Perfect Starter Kit
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
          >
            Everything you need to start your urban farming journey. Each kit includes premium seeds, 
            professional equipment, and expert guidance to ensure your success.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-6 md:mt-8 px-4 md:px-0"
          >
            <div className="flex items-center space-x-2 text-gray-600">
              <FaShield className="w-5 h-5 text-emerald-600" />
              <span className="text-xs md:text-sm font-medium">30-Day Guarantee</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <FaUsers className="w-5 h-5 text-blue-600" />
              <span className="text-xs md:text-sm font-medium">500+ Happy Farmers</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <FaTrophy className="w-5 h-5 text-purple-600" />
              <span className="text-xs md:text-sm font-medium">95% Success Rate</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0">
          {kits.map((kit, index) => (
            <motion.div
              key={kit.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl transform transition-all duration-500 hover:shadow-3xl ${kit.shadowColor} ${kit.popular ? 'scale-105 ring-4 ring-blue-200/50' : ''}`}
            >
              {/* Popular Badge - Center Top */}
              {kit.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-50">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-2">
                    <FaStar className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Header with Gradient */}
              <div className={`bg-gradient-to-br ${kit.color} p-4 md:p-8 text-white relative overflow-hidden rounded-t-3xl`}>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold mb-2">{kit.name}</h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm">
                        <FaGift className="w-3 h-3 mr-1" />
                        {kit.badge}
                      </span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                      {kit.icon}
                    </div>
                  </div>
                  
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl md:text-4xl font-bold">{kit.price}</span>
                    <span className="text-sm md:text-lg line-through opacity-60">{kit.originalPrice}</span>
                  </div>
                  <p className="text-xs md:text-sm opacity-90 mt-1">One-time payment</p>
                </div>
              </div>

              {/* Features List */}
              <div className="p-4 md:p-8 bg-white/90 backdrop-blur-sm rounded-b-3xl">
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {kit.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-start text-gray-700"
                    >
                      <FaCircleCheck className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/starter-kits"
                    className={`group block w-full py-4 px-6 text-center rounded-2xl bg-gradient-to-r ${kit.color} text-white font-semibold hover:shadow-xl ${kit.shadowColor} transform transition-all duration-300 relative overflow-hidden`}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>Get Started Now</span>
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </motion.div>

                {/* Additional Info */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500 flex items-center justify-center space-x-1">
                    <FaShield className="w-3 h-3" />
                    <span>30-day money-back guarantee</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 rounded-3xl p-8 border border-emerald-100/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not sure which kit is right for you?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get personalized recommendations based on your space, budget, and goals. 
              Our experts will help you choose the perfect starter kit.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
            >
              <FaUsers className="w-5 h-5" />
              <span>Get Free Consultation</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StarterKits;
