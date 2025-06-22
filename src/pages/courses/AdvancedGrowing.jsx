import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaArrowRight, FaUserGraduate, FaCircleCheck,
  FaPlay, FaPause, FaGears, FaChartLine, FaShield,
  FaLightbulb, FaRobot, FaFlask, FaTrophy,
  FaBook, FaMicrochip, FaTemperatureHalf, FaWifi
} from 'react-icons/fa6';

const AdvancedGrowing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completedSlides, setCompletedSlides] = useState(new Set());
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const courseData = {
    title: "Advanced Growing Techniques",
    description: "Advanced techniques for scaling your production",
    duration: "4 Weeks",
    totalSlides: 24,
    modules: [
      {
        title: "Automation Systems",
        slides: [0, 1, 2, 3, 4, 5]
      },
      {
        title: "Scale Operations", 
        slides: [6, 7, 8, 9, 10, 11]
      },
      {
        title: "Quality Control",
        slides: [12, 13, 14, 15, 16, 17]
      },
      {
        title: "Advanced Troubleshooting",
        slides: [18, 19, 20, 21, 22, 23]
      }
    ]
  };

  const slides = [
    // Automation Systems Module
    {
      id: 0,
      module: "Automation Systems",
      title: "Welcome to Advanced Growing",
      content: "Take your microgreens production to the next level with advanced automation, scaling strategies, and professional quality control systems.",
      type: "intro",
      keyPoints: [
        "4-week advanced course",
        "Automation technologies",
        "Scaling methodologies",
        "Professional quality systems"
      ]
    },
    {
      id: 1,
      module: "Automation Systems",
      title: "Introduction to Automation",
      content: "Understand the fundamentals of automation in microgreens production and how it can increase efficiency and consistency.",
      type: "lesson",
      keyPoints: [
        "Benefits of automation",
        "Types of automation systems",
        "ROI calculation",
        "Implementation planning"
      ]
    },
    {
      id: 2,
      module: "Automation Systems",
      title: "Automated Watering Systems",
      content: "Design and implement sophisticated watering systems that deliver precise amounts of water at optimal times.",
      type: "lesson",
      keyPoints: [
        "Drip irrigation systems",
        "Misting automation",
        "Moisture sensors",
        "Timer programming"
      ]
    },
    {
      id: 3,
      module: "Automation Systems",
      title: "Climate Control Automation",
      content: "Master automated climate control systems for temperature, humidity, and air circulation management.",
      type: "lesson",
      keyPoints: [
        "HVAC integration",
        "Sensor networks",
        "Control algorithms",
        "Energy efficiency"
      ]
    },
    {
      id: 4,
      module: "Automation Systems",
      title: "Lighting Automation",
      content: "Implement advanced LED lighting systems with automated scheduling and intensity control.",
      type: "lesson",
      keyPoints: [
        "LED spectrum optimization",
        "Photoperiod control",
        "Light intensity automation",
        "Energy management"
      ]
    },
    {
      id: 5,
      module: "Automation Systems",
      title: "IoT and Smart Monitoring",
      content: "Integrate Internet of Things (IoT) devices for remote monitoring and control of your growing operations.",
      type: "lesson",
      keyPoints: [
        "IoT sensor deployment",
        "Remote monitoring apps",
        "Data analytics",
        "Alert systems"
      ]
    },
    // Scale Operations Module
    {
      id: 6,
      module: "Scale Operations",
      title: "Scaling Fundamentals",
      content: "Learn the principles of scaling microgreens production while maintaining quality and profitability.",
      type: "lesson",
      keyPoints: [
        "Scaling strategies",
        "Capacity planning",
        "Resource optimization",
        "Growth management"
      ]
    },
    {
      id: 7,
      module: "Scale Operations",
      title: "Production Planning",
      content: "Develop sophisticated production planning systems that optimize yield and minimize waste.",
      type: "lesson",
      keyPoints: [
        "Demand forecasting",
        "Production scheduling",
        "Inventory optimization",
        "Waste reduction"
      ]
    },
    {
      id: 8,
      module: "Scale Operations",
      title: "Facility Design",
      content: "Design efficient growing facilities that maximize space utilization and workflow optimization.",
      type: "lesson",
      keyPoints: [
        "Layout optimization",
        "Vertical growing systems",
        "Workflow design",
        "Space efficiency"
      ]
    },
    {
      id: 9,
      module: "Scale Operations",
      title: "Supply Chain Management",
      content: "Build robust supply chains that support scaled operations with reliable sourcing and distribution.",
      type: "lesson",
      keyPoints: [
        "Supplier relationships",
        "Inventory management",
        "Distribution networks",
        "Logistics optimization"
      ]
    },
    {
      id: 10,
      module: "Scale Operations",
      title: "Team Management",
      content: "Build and manage teams effectively as your operation grows beyond what you can handle alone.",
      type: "lesson",
      keyPoints: [
        "Hiring strategies",
        "Training programs",
        "Performance management",
        "Team leadership"
      ]
    },
    {
      id: 11,
      module: "Scale Operations",
      title: "Financial Management",
      content: "Implement advanced financial management systems for scaled operations and growth funding.",
      type: "lesson",
      keyPoints: [
        "Financial planning",
        "Cost management",
        "Investment strategies",
        "Growth funding"
      ]
    },
    // Quality Control Module
    {
      id: 12,
      module: "Quality Control",
      title: "Quality Management Systems",
      content: "Implement comprehensive quality management systems that ensure consistent, high-quality production.",
      type: "lesson",
      keyPoints: [
        "Quality standards",
        "Process documentation",
        "Quality metrics",
        "Continuous improvement"
      ]
    },
    {
      id: 13,
      module: "Quality Control",
      title: "Testing and Analysis",
      content: "Establish testing protocols and analytical methods to monitor and verify product quality.",
      type: "lesson",
      keyPoints: [
        "Nutritional testing",
        "Contamination screening",
        "Shelf life analysis",
        "Quality documentation"
      ]
    },
    {
      id: 14,
      module: "Quality Control",
      title: "Food Safety Protocols",
      content: "Implement comprehensive food safety protocols that meet commercial standards and regulations.",
      type: "lesson",
      keyPoints: [
        "HACCP principles",
        "Sanitation procedures",
        "Traceability systems",
        "Compliance management"
      ]
    },
    {
      id: 15,
      module: "Quality Control",
      title: "Certification and Standards",
      content: "Navigate certification processes and industry standards for commercial microgreens production.",
      type: "lesson",
      keyPoints: [
        "Organic certification",
        "GAP compliance",
        "Industry standards",
        "Audit preparation"
      ]
    },
    {
      id: 16,
      module: "Quality Control",
      title: "Quality Assurance Systems",
      content: "Build systematic quality assurance processes that prevent problems before they occur.",
      type: "lesson",
      keyPoints: [
        "Prevention strategies",
        "Process controls",
        "Monitoring systems",
        "Corrective actions"
      ]
    },
    {
      id: 17,
      module: "Quality Control",
      title: "Customer Quality Management",
      content: "Manage customer quality expectations and handle quality-related customer issues professionally.",
      type: "lesson",
      keyPoints: [
        "Quality communication",
        "Customer feedback",
        "Issue resolution",
        "Quality guarantees"
      ]
    },
    // Advanced Troubleshooting Module
    {
      id: 18,
      module: "Advanced Troubleshooting",
      title: "Diagnostic Methodologies",
      content: "Master systematic approaches to diagnosing complex problems in large-scale operations.",
      type: "lesson",
      keyPoints: [
        "Problem identification",
        "Root cause analysis",
        "Diagnostic tools",
        "Solution development"
      ]
    },
    {
      id: 19,
      module: "Advanced Troubleshooting",
      title: "System Failures",
      content: "Handle major system failures and develop contingency plans for business continuity.",
      type: "lesson",
      keyPoints: [
        "Failure analysis",
        "Emergency procedures",
        "Backup systems",
        "Recovery planning"
      ]
    },
    {
      id: 20,
      module: "Advanced Troubleshooting",
      title: "Data-Driven Problem Solving",
      content: "Use data analytics and monitoring systems to identify and solve problems proactively.",
      type: "lesson",
      keyPoints: [
        "Data collection",
        "Analytics tools",
        "Predictive maintenance",
        "Performance optimization"
      ]
    },
    {
      id: 21,
      module: "Advanced Troubleshooting",
      title: "Advanced Pest Management",
      content: "Implement integrated pest management strategies for large-scale commercial operations.",
      type: "lesson",
      keyPoints: [
        "IPM principles",
        "Biological controls",
        "Monitoring systems",
        "Treatment protocols"
      ]
    },
    {
      id: 22,
      module: "Advanced Troubleshooting",
      title: "Crisis Management",
      content: "Develop crisis management capabilities to handle major operational disruptions effectively.",
      type: "lesson",
      keyPoints: [
        "Crisis planning",
        "Communication strategies",
        "Stakeholder management",
        "Recovery procedures"
      ]
    },
    {
      id: 23,
      module: "Advanced Troubleshooting",
      title: "Course Completion",
      content: "Congratulations! You now have the advanced skills to operate a professional-grade microgreens business.",
      type: "completion",
      keyPoints: [
        "Advanced certification",
        "Professional network access",
        "Ongoing support",
        "Mentorship opportunities"
      ]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isPlaying && currentSlide < slides.length - 1) {
      interval = setInterval(() => {
        nextSlide();
      }, 15000); // 15 seconds per slide for advanced content
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
      className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30"
    >
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-purple-100/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/journey')}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-xl hover:bg-purple-200 transition-colors duration-300"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Journey</span>
            </motion.button>

            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-900">{courseData.title}</h1>
              <p className="text-sm text-gray-600">{getCurrentModule()?.title}</p>
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
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-purple-100/50 p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <FaUserGraduate className="w-5 h-5 text-purple-600 mr-2" />
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
                              ? 'bg-purple-100 text-purple-700 font-medium'
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
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-purple-100/50 overflow-hidden"
            >
              {/* Slide Header */}
              <div className="relative h-64 bg-gradient-to-r from-purple-500 to-pink-500">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      {currentSlideData.module === "Automation Systems" && <FaRobot className="w-10 h-10" />}
                      {currentSlideData.module === "Scale Operations" && <FaChartLine className="w-10 h-10" />}
                      {currentSlideData.module === "Quality Control" && <FaShield className="w-10 h-10" />}
                      {currentSlideData.module === "Advanced Troubleshooting" && <FaFlask className="w-10 h-10" />}
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{currentSlideData.title}</h2>
                    <p className="text-purple-100">{currentSlideData.module}</p>
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
                  <div className="bg-purple-50 rounded-2xl p-6 mb-6">
                    <h3 className="font-bold text-purple-800 mb-4 flex items-center">
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
                          className="flex items-center text-purple-700"
                        >
                          <FaCircleCheck className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Completion Message */}
                  {currentSlideData.type === 'completion' && (
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white text-center">
                      <FaTrophy className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Expert Level Achieved!</h3>
                      <p className="text-purple-100">You've mastered advanced microgreens production techniques!</p>
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
                className="flex items-center space-x-2 px-4 py-3 bg-purple-100 text-purple-700 rounded-2xl hover:bg-purple-200 transition-colors duration-300"
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
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
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

export default AdvancedGrowing; 