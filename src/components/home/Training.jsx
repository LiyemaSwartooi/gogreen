import { motion } from 'framer-motion';
import { 
  FaGraduationCap, FaUsers, FaChartLine, FaHandshake, 
  FaRocket, FaStar, FaAward, FaCertificate, FaLightbulb,
  FaBookOpen, FaVideo, FaUserGraduate, FaTrophy,
  FaGem, FaArrowRight, FaCircleCheck, FaClock
} from 'react-icons/fa6';

const Training = () => {
  const features = [
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Expert-Led Training",
      description: "Learn from experienced urban farmers and business mentors with 10+ years of expertise",
      color: "bg-emerald-100 text-emerald-600",
      gradient: "from-emerald-500 via-emerald-400 to-green-500",
      shadowColor: "shadow-emerald-500/20",
      stats: "50+ Expert Mentors"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Hands-On Experience",
      description: "Practice growing techniques in real urban farming environments with live demonstrations",
      color: "bg-blue-100 text-blue-600",
      gradient: "from-blue-500 via-cyan-400 to-teal-500",
      shadowColor: "shadow-blue-500/20",
      stats: "100+ Practice Sessions"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Business Skills",
      description: "Master marketing, sales, financial management, and scaling strategies for success",
      color: "bg-purple-100 text-purple-600",
      gradient: "from-purple-500 via-pink-400 to-rose-500",
      shadowColor: "shadow-purple-500/20",
      stats: "15+ Business Modules"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Network Building",
      description: "Connect with buyers, restaurants, suppliers, and fellow entrepreneurs in your area",
      color: "bg-pink-100 text-pink-600",
      gradient: "from-pink-500 via-rose-400 to-red-500",
      shadowColor: "shadow-pink-500/20",
      stats: "500+ Network Partners"
    }
  ];

  const curriculum = [
    {
      week: "Week 1",
      title: "Foundation & Setup",
      modules: [
        "Microgreens Fundamentals",
        "Equipment & Space Setup",
        "Seed Selection & Sourcing",
        "Growing Techniques"
      ],
      icon: <FaBookOpen className="w-6 h-6" />,
      color: "from-emerald-500 to-green-500"
    },
    {
      week: "Week 2",
      title: "Business & Marketing",
      modules: [
        "Business Planning",
        "Marketing Strategies",
        "Customer Acquisition",
        "Scaling & Growth"
      ],
      icon: <FaRocket className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="training" className="relative py-8 md:py-20 scroll-mt-20">
      {/* Section Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-emerald-200/20 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-blue-200/20 rounded-full filter blur-2xl animate-float animation-delay-2000" />
        <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-purple-200/20 rounded-full filter blur-xl animate-float animation-delay-4000" />
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
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Comprehensive Training</span>
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
          >
            Learn, Grow &
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
              Build Your Success
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
          >
            Our comprehensive 2-week training program combines expert knowledge, hands-on practice, 
            and business skills to ensure your urban farming success from day one.
          </motion.p>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-6 md:mt-8 px-4 md:px-0"
          >
            <div className="flex items-center space-x-2 text-gray-600">
              <FaAward className="w-5 h-5 text-emerald-600" />
              <span className="text-xs md:text-sm font-medium">Certified Program</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <FaUserGraduate className="w-5 h-5 text-blue-600" />
              <span className="text-xs md:text-sm font-medium">500+ Graduates</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <FaTrophy className="w-5 h-5 text-purple-600" />
              <span className="text-xs md:text-sm font-medium">95% Success Rate</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16 px-4 md:px-0">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
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

        {/* Curriculum Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              2-Week Curriculum Overview
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured learning path designed to take you from beginner to successful entrepreneur
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {curriculum.map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${week.color} rounded-2xl p-4 text-white mr-4`}>
                    {week.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{week.title}</h4>
                    <p className="text-emerald-600 font-semibold">{week.week}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {week.modules.map((module, i) => (
                                         <li key={i} className="flex items-center text-gray-700">
                       <FaCircleCheck className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="font-medium">{module}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 rounded-3xl blur-3xl" />
          <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-emerald-100/50">
            <div className="grid md:grid-cols-4 divide-x divide-emerald-100">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="p-8 text-center group hover:bg-emerald-50/50 transition-colors duration-300"
              >
                <div className="flex items-center justify-center mb-3">
                  <FaClock className="w-6 h-6 text-emerald-600 mr-2" />
                  <p className="text-4xl font-bold text-emerald-600">2</p>
                </div>
                <p className="text-gray-600 font-medium">Weeks Duration</p>
                <p className="text-xs text-gray-500 mt-1">Intensive Training</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="p-8 text-center group hover:bg-blue-50/50 transition-colors duration-300"
              >
                <div className="flex items-center justify-center mb-3">
                  <FaVideo className="w-6 h-6 text-blue-600 mr-2" />
                  <p className="text-4xl font-bold text-blue-600">100%</p>
                </div>
                <p className="text-gray-600 font-medium">Practical Learning</p>
                <p className="text-xs text-gray-500 mt-1">Hands-on Experience</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="p-8 text-center group hover:bg-purple-50/50 transition-colors duration-300"
              >
                <div className="flex items-center justify-center mb-3">
                  <FaCertificate className="w-6 h-6 text-purple-600 mr-2" />
                  <p className="text-4xl font-bold text-purple-600">R2K+</p>
                </div>
                <p className="text-gray-600 font-medium">Monthly Potential</p>
                <p className="text-xs text-gray-500 mt-1">Average Earnings</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="p-8 text-center group hover:bg-pink-50/50 transition-colors duration-300"
              >
                <div className="flex items-center justify-center mb-3">
                  <FaLightbulb className="w-6 h-6 text-pink-600 mr-2" />
                  <p className="text-4xl font-bold text-pink-600">24/7</p>
                </div>
                <p className="text-gray-600 font-medium">Support Access</p>
                <p className="text-xs text-gray-500 mt-1">Ongoing Mentorship</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 rounded-3xl p-8 border border-emerald-100/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Training Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our next cohort and transform your passion for sustainable farming into a profitable business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
            >
              <FaRocket className="w-5 h-5" />
              <span>Enroll Now</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
