import { motion } from 'framer-motion';
import { 
  FaStore, FaLeaf, FaBox, FaTruck, FaCartShopping, 
  FaMoneyBillWave, FaUsers, FaChartLine, FaStar,
  FaGem, FaArrowRight, FaCircleCheck, FaGlobe,
  FaMobile, FaCreditCard, FaShield, FaRocket
} from 'react-icons/fa6';

const Marketplace = () => {
  const features = [
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: "Fresh Products",
      description: "Connect directly with customers looking for fresh, locally grown microgreens and premium produce.",
      color: "bg-emerald-100 text-emerald-600",
      gradient: "from-emerald-500 via-emerald-400 to-green-500",
      shadowColor: "shadow-emerald-500/20",
      stats: "1000+ Customers"
    },
    {
      icon: <FaBox className="w-8 h-8" />,
      title: "Smart Packaging",
      description: "Access eco-friendly packaging solutions designed specifically for microgreens freshness and appeal.",
      color: "bg-blue-100 text-blue-600",
      gradient: "from-blue-500 via-cyan-400 to-teal-500",
      shadowColor: "shadow-blue-500/20",
      stats: "Eco-Friendly"
    },
    {
      icon: <FaTruck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Efficient delivery network to get your products to customers quickly and maintain freshness.",
      color: "bg-purple-100 text-purple-600",
      gradient: "from-purple-500 via-pink-400 to-rose-500",
      shadowColor: "shadow-purple-500/20",
      stats: "Same Day"
    },
    {
      icon: <FaStore className="w-8 h-8" />,
      title: "Online Store",
      description: "Your own branded online store with professional design to showcase and sell your products.",
      color: "bg-pink-100 text-pink-600",
      gradient: "from-pink-500 via-rose-400 to-red-500",
      shadowColor: "shadow-pink-500/20",
      stats: "Custom Branding"
    }
  ];

  const benefits = [
    {
      icon: <FaMoneyBillWave className="w-6 h-6" />,
      title: "Higher Profits",
      value: "60%",
      description: "Average profit margins"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Growing Market",
      value: "500+",
      description: "Active buyers daily"
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Sales Growth",
      value: "300%",
      description: "Average growth in 6 months"
    }
  ];

  const marketplaceFeatures = [
    {
      icon: <FaMobile className="w-5 h-5" />,
      title: "Mobile Optimized",
      description: "Sell on-the-go with our mobile app"
    },
    {
      icon: <FaCreditCard className="w-5 h-5" />,
      title: "Secure Payments",
      description: "Multiple payment options available"
    },
    {
      icon: <FaShield className="w-5 h-5" />,
      title: "Buyer Protection",
      description: "Guaranteed transactions for peace of mind"
    },
    {
      icon: <FaGlobe className="w-5 h-5" />,
      title: "Wide Reach",
      description: "Access customers across multiple cities"
    }
  ];

  return (
    <section id="marketplace" className="relative py-8 md:py-20 scroll-mt-20">
      {/* Section Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 left-16 w-36 h-36 bg-emerald-200/20 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-blue-200/20 rounded-full filter blur-2xl animate-float animation-delay-2000" />
        <div className="absolute top-1/3 left-1/2 w-28 h-28 bg-purple-200/20 rounded-full filter blur-xl animate-float animation-delay-4000" />
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
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Sell Your Products</span>
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
          >
            Premium
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
              Marketplace
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
          >
            A dedicated platform designed to help you sell your microgreens, connect with premium customers, 
            and build a thriving business in your local market.
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
              <span className="text-xs md:text-sm font-medium">Secure Platform</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <FaUsers className="w-5 h-5 text-blue-600" />
              <span className="text-xs md:text-sm font-medium">1000+ Buyers</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <FaStar className="w-5 h-5 text-purple-600" />
              <span className="text-xs md:text-sm font-medium">4.9/5 Rating</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16 px-4 md:px-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`bg-white/95 backdrop-blur-sm rounded-3xl p-4 md:p-8 shadow-2xl hover:shadow-3xl ${feature.shadowColor} transition-all duration-500 relative overflow-hidden group`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-current rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-current rounded-full translate-y-12 -translate-x-12" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className={`rounded-2xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center ${feature.color} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700">
                      <FaStar className="w-3 h-3 mr-1" />
                      <span className="hidden sm:inline">{feature.stats}</span>
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className="flex items-center text-emerald-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <FaArrowRight className="w-3 h-3 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Sellers Choose Our Marketplace
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of successful farmers who are building profitable businesses through our platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl w-16 h-16 flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {benefit.value}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 rounded-3xl p-8 border border-emerald-100/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Everything You Need to Succeed
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our marketplace provides all the tools and features you need to build a successful microgreens business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketplaceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl w-12 h-12 flex items-center justify-center text-white mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full -translate-y-20 translate-x-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Selling?
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join our marketplace today and start connecting with customers who value fresh, locally grown microgreens.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <FaRocket className="w-5 h-5" />
                  <span>Start Selling Now</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <FaCartShopping className="w-5 h-5" />
                  <span>Browse Marketplace</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Marketplace;
