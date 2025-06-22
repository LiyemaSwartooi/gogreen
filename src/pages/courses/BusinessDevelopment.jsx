import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaArrowRight, FaChartLine, FaCircleCheck,
  FaPlay, FaPause, FaMoneyBillWave, FaUsers, FaBullseye,
  FaLightbulb, FaHandshake, FaCalculator, FaTrophy,
  FaBook, FaStore, FaBullhorn, FaChartBar
} from 'react-icons/fa6';

const BusinessDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completedSlides, setCompletedSlides] = useState(new Set());
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const courseData = {
    title: "Business Development",
    description: "Learn how to turn your growing skills into a profitable business",
    duration: "3 Weeks",
    totalSlides: 20,
    modules: [
      {
        title: "Business Planning",
        slides: [0, 1, 2, 3, 4]
      },
      {
        title: "Market Analysis", 
        slides: [5, 6, 7, 8, 9]
      },
      {
        title: "Pricing Strategy",
        slides: [10, 11, 12, 13, 14]
      },
      {
        title: "Sales Techniques",
        slides: [15, 16, 17, 18, 19]
      }
    ]
  };

  const slides = [
    // Business Planning Module
    {
      id: 0,
      module: "Business Planning",
      title: "Welcome to Business Development",
      content: "Transform your microgreens hobby into a profitable business. Learn proven strategies for planning, launching, and scaling your urban farming enterprise.",
      type: "intro",
      keyPoints: [
        "3-week comprehensive business course",
        "Real-world case studies",
        "Financial planning tools",
        "Marketing strategies"
      ]
    },
    {
      id: 1,
      module: "Business Planning",
      title: "Creating Your Business Plan",
      content: "A solid business plan is your roadmap to success. Learn how to create a comprehensive plan that attracts investors and guides your growth.",
      type: "lesson",
      keyPoints: [
        "Executive summary writing",
        "Market opportunity analysis",
        "Financial projections",
        "Risk assessment"
      ]
    },
    {
      id: 2,
      module: "Business Planning",
      title: "Legal Structure and Registration",
      content: "Choose the right legal structure for your business and understand the registration requirements in South Africa.",
      type: "lesson",
      keyPoints: [
        "Business entity types",
        "Registration process",
        "Tax implications",
        "Licensing requirements"
      ]
    },
    {
      id: 3,
      module: "Business Planning",
      title: "Setting Up Operations",
      content: "Design efficient operations that can scale with your business growth while maintaining quality standards.",
      type: "lesson",
      keyPoints: [
        "Production planning",
        "Quality control systems",
        "Inventory management",
        "Supply chain setup"
      ]
    },
    {
      id: 4,
      module: "Business Planning",
      title: "Financial Planning Basics",
      content: "Master the financial fundamentals every microgreens entrepreneur needs to know for sustainable growth.",
      type: "lesson",
      keyPoints: [
        "Startup cost calculation",
        "Cash flow management",
        "Break-even analysis",
        "Funding options"
      ]
    },
    // Market Analysis Module
    {
      id: 5,
      module: "Market Analysis",
      title: "Understanding Your Market",
      content: "Conduct thorough market research to identify opportunities and understand your competitive landscape.",
      type: "lesson",
      keyPoints: [
        "Market size estimation",
        "Customer segmentation",
        "Competitive analysis",
        "Trend identification"
      ]
    },
    {
      id: 6,
      module: "Market Analysis",
      title: "Identifying Target Customers",
      content: "Define your ideal customers and understand their needs, preferences, and buying behaviors.",
      type: "lesson",
      keyPoints: [
        "Customer persona development",
        "Needs assessment",
        "Buying behavior analysis",
        "Customer journey mapping"
      ]
    },
    {
      id: 7,
      module: "Market Analysis",
      title: "Competitive Landscape",
      content: "Analyze your competition to identify gaps in the market and develop your competitive advantage.",
      type: "lesson",
      keyPoints: [
        "Competitor identification",
        "SWOT analysis",
        "Competitive positioning",
        "Differentiation strategies"
      ]
    },
    {
      id: 8,
      module: "Market Analysis",
      title: "Market Entry Strategy",
      content: "Develop a strategic approach to entering the market and gaining your first customers.",
      type: "lesson",
      keyPoints: [
        "Go-to-market strategy",
        "Launch planning",
        "Early adopter targeting",
        "Market penetration tactics"
      ]
    },
    {
      id: 9,
      module: "Market Analysis",
      title: "Market Validation",
      content: "Test your business concept with real customers before full-scale launch to minimize risk.",
      type: "lesson",
      keyPoints: [
        "MVP development",
        "Customer feedback collection",
        "Pilot program design",
        "Iteration strategies"
      ]
    },
    // Pricing Strategy Module
    {
      id: 10,
      module: "Pricing Strategy",
      title: "Pricing Fundamentals",
      content: "Learn the art and science of pricing your microgreens for maximum profitability while remaining competitive.",
      type: "lesson",
      keyPoints: [
        "Cost-plus pricing",
        "Value-based pricing",
        "Competitive pricing",
        "Psychological pricing"
      ]
    },
    {
      id: 11,
      module: "Pricing Strategy",
      title: "Cost Analysis",
      content: "Calculate all your costs accurately to ensure profitable pricing decisions.",
      type: "lesson",
      keyPoints: [
        "Direct cost calculation",
        "Indirect cost allocation",
        "Labor cost analysis",
        "Overhead distribution"
      ]
    },
    {
      id: 12,
      module: "Pricing Strategy",
      title: "Value Proposition",
      content: "Develop a compelling value proposition that justifies your pricing and differentiates your products.",
      type: "lesson",
      keyPoints: [
        "Unique value identification",
        "Benefit communication",
        "Premium positioning",
        "Value demonstration"
      ]
    },
    {
      id: 13,
      module: "Pricing Strategy",
      title: "Dynamic Pricing",
      content: "Implement flexible pricing strategies that respond to market conditions and maximize revenue.",
      type: "lesson",
      keyPoints: [
        "Seasonal pricing",
        "Volume discounts",
        "Promotional pricing",
        "Price optimization"
      ]
    },
    {
      id: 14,
      module: "Pricing Strategy",
      title: "Profit Margin Optimization",
      content: "Maximize your profit margins through strategic pricing and cost management.",
      type: "lesson",
      keyPoints: [
        "Margin analysis",
        "Cost reduction strategies",
        "Premium product development",
        "Efficiency improvements"
      ]
    },
    // Sales Techniques Module
    {
      id: 15,
      module: "Sales Techniques",
      title: "Sales Fundamentals",
      content: "Master the essential sales skills needed to grow your microgreens business successfully.",
      type: "lesson",
      keyPoints: [
        "Sales process design",
        "Customer relationship building",
        "Objection handling",
        "Closing techniques"
      ]
    },
    {
      id: 16,
      module: "Sales Techniques",
      title: "Building Customer Relationships",
      content: "Develop long-term customer relationships that drive repeat business and referrals.",
      type: "lesson",
      keyPoints: [
        "Trust building strategies",
        "Communication skills",
        "Customer service excellence",
        "Relationship maintenance"
      ]
    },
    {
      id: 17,
      module: "Sales Techniques",
      title: "Sales Channels",
      content: "Explore different sales channels and choose the best mix for your business model.",
      type: "lesson",
      keyPoints: [
        "Direct sales strategies",
        "Retail partnerships",
        "Online sales platforms",
        "Wholesale opportunities"
      ]
    },
    {
      id: 18,
      module: "Sales Techniques",
      title: "Marketing and Promotion",
      content: "Develop effective marketing strategies to attract customers and build brand awareness.",
      type: "lesson",
      keyPoints: [
        "Digital marketing basics",
        "Social media strategies",
        "Content marketing",
        "Local marketing tactics"
      ]
    },
    {
      id: 19,
      module: "Sales Techniques",
      title: "Course Completion",
      content: "Congratulations! You now have the business skills to turn your microgreens passion into a profitable enterprise.",
      type: "completion",
      keyPoints: [
        "Business plan template",
        "Financial planning tools",
        "Marketing resources",
        "Ongoing support access"
      ]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isPlaying && currentSlide < slides.length - 1) {
      interval = setInterval(() => {
        nextSlide();
      }, 12000); // 12 seconds per slide for business content
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCompletedSlides(prev => new Set([...prev, currentSlide]));
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const getProgressPercentage = () => {
    return Math.round((completedSlides.size / slides.length) * 100);
  };

  const getCurrentModule = () => {
    return courseData.modules.find(module => 
      module.slides.includes(currentSlide)
    );
  };

  const currentSlideData = slides[currentSlide];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 overflow-x-hidden w-full"
    >
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-blue-100/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between flex-wrap gap-2 md:gap-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/journey')}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 transition-colors duration-300"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Journey</span>
            </motion.button>

            <div className="text-center order-last md:order-none w-full md:w-auto">
              <h1 className="text-lg md:text-xl font-bold text-gray-900">{courseData.title}</h1>
              <p className="text-xs md:text-sm text-gray-600">{getCurrentModule()?.title}</p>
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900">{getProgressPercentage()}% Complete</div>
                <div className="text-xs text-gray-600">{currentSlide + 1} of {slides.length}</div>
              </div>
              <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${getProgressPercentage()}%` }}
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-blue-100/50 p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <FaChartLine className="w-5 h-5 text-blue-600 mr-2" />
                Course Modules
              </h3>
              
              <div className="space-y-3">
                {courseData.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-700">{module.title}</h4>
                    <div className="space-y-1">
                      {module.slides.map(slideIndex => (
                        <button
                          key={slideIndex}
                          onClick={() => goToSlide(slideIndex)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all duration-300 flex items-center justify-between ${
                            currentSlide === slideIndex
                              ? 'bg-blue-100 text-blue-700 font-medium'
                              : completedSlides.has(slideIndex)
                              ? 'bg-green-50 text-green-700'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <span>Lesson {slideIndex + 1}</span>
                          {completedSlides.has(slideIndex) && (
                            <FaCircleCheck className="w-4 h-4 text-green-500" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100/50 overflow-hidden"
            >
              {/* Slide Header */}
              <div className="relative h-64 bg-gradient-to-r from-blue-500 to-indigo-500">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      {currentSlideData.module === "Business Planning" && <FaLightbulb className="w-10 h-10" />}
                      {currentSlideData.module === "Market Analysis" && <FaChartBar className="w-10 h-10" />}
                      {currentSlideData.module === "Pricing Strategy" && <FaCalculator className="w-10 h-10" />}
                      {currentSlideData.module === "Sales Techniques" && <FaHandshake className="w-10 h-10" />}
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{currentSlideData.title}</h2>
                    <p className="text-blue-100">{currentSlideData.module}</p>
                  </div>
                </div>
              </div>

              {/* Slide Content */}
              <div className="p-8">
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {currentSlideData.content}
                  </p>

                  {/* Key Points */}
                  <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                    <h3 className="font-bold text-blue-800 mb-4 flex items-center">
                      <FaTrophy className="w-5 h-5 mr-2" />
                      Key Learning Points
                    </h3>
                    <ul className="space-y-2">
                      {currentSlideData.keyPoints.map((point, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center text-blue-700"
                        >
                          <FaCircleCheck className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Completion Message */}
                  {currentSlideData.type === 'completion' && (
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-white text-center">
                      <FaTrophy className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Congratulations!</h3>
                      <p className="text-blue-100">You've successfully completed the Business Development course!</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  currentSlide === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
                }`}
              >
                <FaArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-2 px-4 py-3 bg-blue-100 text-blue-700 rounded-2xl hover:bg-blue-200 transition-colors duration-300"
              >
                {isPlaying ? <FaPause className="w-4 h-4" /> : <FaPlay className="w-4 h-4" />}
                <span>{isPlaying ? 'Pause' : 'Auto Play'}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  currentSlide === slides.length - 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg'
                }`}
              >
                <span>Next</span>
                <FaArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessDevelopment; 