import { motion } from 'framer-motion';
import { FaArrowLeft, FaBox, FaSeedling, FaLeaf, FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const StarterKits = () => {
  const kits = [
    {
      id: 1,
      name: "Basic Starter Kit",
      price: "R499",
      image: "/assets/images/basic-kit.jpg",
      description: "Perfect for beginners who want to start their microgreens journey",
      features: [
        "Growing Trays & Dome",
        "Premium Soil Mix",
        "Selected Seeds (5 varieties)",
        "Basic Tools",
        "Quick Start Guide"
      ],
      badge: "Popular",
      badgeColor: "bg-emerald-500"
    },
    {
      id: 2,
      name: "Professional Kit",
      price: "R1,499",
      image: "/assets/images/pro-kit.jpg",
      description: "Advanced setup for serious urban farmers with automation features",
      features: [
        "Auto-Watering System",
        "LED Grow Lights",
        "Climate Control",
        "Extended Tool Set",
        "10 Seed Varieties",
        "Professional Training Materials"
      ],
      badge: "Best Value",
      badgeColor: "bg-blue-500"
    },
    {
      id: 3,
      name: "Business Startup Kit",
      price: "R2,999",
      image: "/assets/images/business-kit.jpg",
      description: "Complete business solution with training and marketing materials",
      features: [
        "All Pro Kit Equipment",
        "Business Training Course",
        "Marketing Materials",
        "Support Package",
        "15 Premium Seed Varieties",
        "Business Plan Template"
      ],
      badge: "Premium",
      badgeColor: "bg-purple-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 md:pt-20 overflow-x-hidden w-full min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-12">
          <Link 
            to="/"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Starter Kit
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to start your microgreens journey. From beginner-friendly kits to professional setups.
            </p>
          </motion.div>
        </div>

        {/* Kits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kits.map((kit, index) => (
            <motion.div
              key={kit.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-emerald-100/50"
            >
              {/* Badge */}
              {kit.badge && (
                <div className="relative">
                  <div className={`absolute top-4 right-4 ${kit.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold z-10`}>
                    {kit.badge}
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                <FaBox className="w-16 h-16 text-emerald-600" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{kit.name}</h3>
                <p className="text-gray-600 mb-4">{kit.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {kit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <FaLeaf className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & Button */}
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-emerald-600">{kit.price}</div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <FaCartShopping className="w-4 h-4" />
                    <span>Order Now</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Not sure which kit is right for you? Our experts are here to help you make the best choice for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            Get Expert Advice
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StarterKits; 