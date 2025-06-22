import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaArrowRight, FaBook, FaCircleCheck,
  FaSeedling, FaLeaf, FaWater, FaTemperatureHalf, 
  FaSun, FaScissors, FaTriangleExclamation,
  FaLightbulb, FaClock, FaTrophy, FaHouse, FaLock, 
  FaBars, FaXmark, FaCircleInfo, FaScrewdriverWrench, 
  FaChevronDown, FaChevronUp, FaFlask, FaMagnifyingGlass,
  FaGears, FaLayerGroup, FaChartLine, FaListCheck,
  FaDroplet, FaThermometer, FaWind, FaGraduationCap,
  FaChevronLeft, FaChevronRight, FaCircleQuestion
} from 'react-icons/fa6';
import { 
  courseStructure, 
  getLessonContent, 
  getLessonSlide, 
  getLessonInfo,
  getModuleByLessonId,
  getLessonProgress,
  isLessonAvailable,
  getNextLesson,
  getPreviousLesson
} from '../../data/lessonContentManager';

// Add IconDisplay component
const IconDisplay = ({ icon: Icon, size = 'large', className = '' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xlarge: 'w-24 h-24'
  };

  return (
    <div className={`flex items-center justify-center p-4 rounded-2xl ${className}`}>
      <Icon className={`${sizeClasses[size]} transition-all duration-300`} />
    </div>
  );
};

const MicrogreensBasics = () => {
  const [currentLessonId, setCurrentLessonId] = useState(1); // Start with lesson 1
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // Current slide within lesson
  const [completedSlides, setCompletedSlides] = useState(new Set()); // Completed slides within current lesson
  const [completedLessons, setCompletedLessons] = useState(new Set()); // Completed lessons
  const [sidebarOpen, setSidebarOpen] = useState(false); // Start closed on mobile
  const [expandedSections, setExpandedSections] = useState(new Set(['main-content'])); // Track which sections are expanded
  const [userProgress, setUserProgress] = useState({
    timeSpent: 0, // Time spent on current lesson in minutes
    totalTimeSpent: 0, // Total time across all lessons
    lastAccessed: Date.now(),
    skillsAcquired: new Set(),
    certificationsEarned: new Set()
  });
  const [quizState, setQuizState] = useState({
    selectedAnswer: null,
    showAnswer: false,
    isCorrect: false,
    quizCompleted: new Set() // Track completed quizzes
  });
  const navigate = useNavigate();

  // Handle sidebar state based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Time tracking for lesson engagement
  useEffect(() => {
    const startTime = Date.now();
    
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 60000); // Convert to minutes
      setUserProgress(prev => ({
        ...prev,
        timeSpent: prev.timeSpent + timeSpent,
        totalTimeSpent: prev.totalTimeSpent + timeSpent,
        lastAccessed: Date.now()
      }));
    };
  }, [currentLessonId, currentSlideIndex]);

  // Auto-save progress to localStorage
  useEffect(() => {
    const progressData = {
      currentLessonId,
      currentSlideIndex,
      completedSlides: Array.from(completedSlides),
      completedLessons: Array.from(completedLessons),
      userProgress: {
        ...userProgress,
        skillsAcquired: Array.from(userProgress.skillsAcquired),
        certificationsEarned: Array.from(userProgress.certificationsEarned)
      }
    };
    localStorage.setItem('microgreens-course-progress', JSON.stringify(progressData));
  }, [currentLessonId, currentSlideIndex, completedSlides, completedLessons, userProgress]);

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('microgreens-course-progress');
    if (savedProgress) {
      try {
        const data = JSON.parse(savedProgress);
        setCurrentLessonId(data.currentLessonId || 1);
        setCurrentSlideIndex(data.currentSlideIndex || 0);
        setCompletedSlides(new Set(data.completedSlides || []));
        setCompletedLessons(new Set(data.completedLessons || []));
        if (data.userProgress) {
          setUserProgress({
            ...data.userProgress,
            skillsAcquired: new Set(data.userProgress.skillsAcquired || []),
            certificationsEarned: new Set(data.userProgress.certificationsEarned || [])
          });
        }
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
  }, []);

  // Get current lesson content
  const currentLessonContent = getLessonContent(currentLessonId);
  const currentSlideData = currentLessonContent?.slides?.[currentSlideIndex] || null;
  const currentLessonInfo = getLessonInfo(currentLessonId);
  const currentModule = getModuleByLessonId(currentLessonId);

  // Add null checks for data that might be undefined
  const hasAssessment = currentSlideData?.assessment?.questions?.length > 0;
  const hasTasks = currentSlideData?.assessment?.tasks?.length > 0;
  const hasNextSteps = currentSlideData?.nextSteps?.topics?.length > 0;
  const hasMediumTypes = currentSlideData?.mediumTypes?.length > 0;
  const hasTechniques = currentSlideData?.techniques?.length > 0;
  const hasExercise = currentSlideData?.exercise?.materials?.length > 0;
  const hasQuiz = currentSlideData?.quiz?.options?.length > 0;
  const hasCalculations = currentSlideData?.calculations?.length > 0;
  const hasSystems = currentSlideData?.systems?.length > 0;
  const hasTroubleshooting = currentSlideData?.troubleshooting?.length > 0;
  const hasDrainageSystems = currentSlideData?.drainageSystems?.length > 0;
  const hasWateringTechniques = currentSlideData?.wateringTechniques?.length > 0;
  const hasQualityChecks = currentSlideData?.qualityChecks?.length > 0;

  const nextSlide = () => {
    if (!currentLessonContent) return;
    
    // Check if we're on the last slide of the current lesson
    const isLastSlide = currentSlideIndex >= currentLessonContent.slides.length - 1;
    
    if (!isLastSlide) {
      // Move to next slide in current lesson
      const nextSlideIndex = currentSlideIndex + 1;
      setCurrentSlideIndex(nextSlideIndex);
    } else {
      // We're on the last slide of the current lesson
      // Only mark the lesson as completed if the current slide is marked as completed
      if (completedSlides.has(currentSlideIndex)) {
        const newCompletedLessons = new Set([...completedLessons, currentLessonId]);
        setCompletedLessons(newCompletedLessons);
      }
      
      // Try to move to next lesson
      const nextLessonId = getNextLesson(currentLessonId);
      if (nextLessonId) {
        // Store the next lesson ID and reset slide index
        setCurrentLessonId(nextLessonId);
        setCurrentSlideIndex(0);
        setCompletedSlides(new Set()); // Reset slide completion for new lesson
      }
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    } else {
      // Go to previous lesson's last slide
      const prevLessonId = getPreviousLesson(currentLessonId);
      if (prevLessonId && isLessonAvailable(prevLessonId)) {
        const prevLessonContent = getLessonContent(prevLessonId);
        if (prevLessonContent) {
          setCurrentLessonId(prevLessonId);
          setCurrentSlideIndex(prevLessonContent.slides.length - 1);
          // Reset slide completion for previous lesson (don't auto-mark as completed)
          setCompletedSlides(new Set());
        }
      }
    }
  };

  const goToLesson = (lessonId) => {
    if (isLessonAvailable(lessonId)) {
      setCurrentLessonId(lessonId);
      setCurrentSlideIndex(0);
      setCompletedSlides(new Set()); // Reset slide completion for new lesson
      // Close sidebar on mobile after lesson selection
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    }
  };

  const markSlideComplete = () => {
    const newCompletedSlides = new Set([...completedSlides, currentSlideIndex]);
    setCompletedSlides(newCompletedSlides);

    // Track skills acquired based on lesson content
    const currentSlide = currentSlideData;
    if (currentSlide) {
      // Determine skills based on slide type and content
      const skillsAcquired = [];
      
      if (currentSlide.type === 'practical' || currentSlide.type === 'hands-on') {
        skillsAcquired.push(`practical-${currentLessonId}`);
      }
      if (currentSlide.type === 'technique') {
        skillsAcquired.push(`technique-${currentLessonId}`);
      }
      if (currentSlide.type === 'calculation') {  
        skillsAcquired.push(`calculation-${currentLessonId}`);
      }
      if (currentSlide.quiz) {
        skillsAcquired.push(`quiz-${currentLessonId}-${currentSlideIndex}`);
      }

      if (skillsAcquired.length > 0) {
        setUserProgress(prev => ({
          ...prev,
          skillsAcquired: new Set([...prev.skillsAcquired, ...skillsAcquired])
        }));
      }
    }

    // Check if lesson is complete and award achievements
    const totalSlides = currentLessonContent?.slides?.length || 0;
    if (newCompletedSlides.size === totalSlides) {
      const newCompletedLessons = new Set([...completedLessons, currentLessonId]);
      setCompletedLessons(newCompletedLessons);

      // Award module completion certificates
      const currentModule = getModuleByLessonId(currentLessonId);
      if (currentModule) {
        const moduleComplete = currentModule.lessons.every(id => 
          newCompletedLessons.has(id)
        );
        if (moduleComplete) {
          setUserProgress(prev => ({
            ...prev,
            certificationsEarned: new Set([...prev.certificationsEarned, `module-${currentModule.id}`])
          }));
        }
      }
    }
  };

  const getLessonProgressPercentage = () => {
    if (!currentLessonContent) return 0;
    // Calculate progress based on current slide position + completed slides
    const totalSlides = currentLessonContent.slides.length;
    const currentProgress = (currentSlideIndex + 1) / totalSlides;
    return Math.round(currentProgress * 100);
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  // Quiz interaction handlers
  const handleQuizAnswer = (selectedIndex) => {
    const correct = selectedIndex === currentSlideData?.quiz?.correct;
    setQuizState({
      selectedAnswer: selectedIndex,
      showAnswer: true,
      isCorrect: correct,
      quizCompleted: new Set([...quizState.quizCompleted, `${currentLessonId}-${currentSlideIndex}`])
    });

    // Award bonus skills for correct answers
    if (correct) {
      setUserProgress(prev => ({
        ...prev,
        skillsAcquired: new Set([...prev.skillsAcquired, `quiz-correct-${currentLessonId}-${currentSlideIndex}`])
      }));
    }
  };

  const resetQuiz = () => {
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: null,
      showAnswer: false,
      isCorrect: false
    }));
  };

  // Reset quiz when slide changes
  useEffect(() => {
    resetQuiz();
  }, [currentSlideIndex, currentLessonId]);

  // Collapsible Section Component
  const CollapsibleSection = ({ id, title, icon, children, defaultExpanded = false }) => {
    const isExpanded = expandedSections.has(id);
    
    return (
      <div className="mb-6">
        <motion.button
          onClick={() => toggleSection(id)}
          className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 hover:from-emerald-100 hover:to-teal-100 transition-all duration-300"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="flex items-center">
            {icon}
            <h3 className="text-lg font-semibold text-emerald-800 ml-3">{title}</h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaChevronDown className="w-5 h-5 text-emerald-600" />
          </motion.div>
        </motion.button>
        
        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pt-4">
            {children}
          </div>
        </motion.div>
      </div>
    );
  };

    return (
    <div className="flex h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-x-hidden w-full">
      {/* Collapsible Sidebar */}
              <div className={`bg-white border-r border-emerald-100/50 flex flex-col overflow-hidden transition-all duration-300 ease-in-out z-50 
        ${sidebarOpen 
          ? 'fixed inset-y-0 left-0 w-72 sm:w-80 md:relative md:w-80' 
          : 'fixed -left-80 w-72 sm:w-80 md:relative md:w-0'
        }`}
      >
        {/* Sidebar Header */}
                  <div className="border-b border-emerald-100/50 w-72 sm:w-80 md:min-w-80">
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between p-3 md:p-4 bg-emerald-50/50">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/journey')}
              className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors duration-300 text-sm"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span>Back to Journey</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center justify-center w-8 h-8 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors duration-300"
            >
              <FaXmark className="w-4 h-4 text-gray-600" />
            </motion.button>
          </div>
          
          {/* Course Info */}
          <div className="p-4 md:p-6 pt-3 md:pt-4">
            <div className="mb-4">
              <h1 className="text-xl font-bold text-gray-900">{courseStructure.title}</h1>
              <p className="text-sm text-gray-600">{courseStructure.description}</p>
            </div>



          {/* Current Lesson Progress */}
          {currentLessonInfo && (
            <div className="mb-4 p-3 bg-emerald-50 rounded-xl">
              <div className="flex items-center justify-between text-sm text-emerald-700 mb-2">
                <span>Current Lesson</span>
                <span>{getLessonProgressPercentage()}%</span>
              </div>
              <h3 className="font-medium text-emerald-800 text-sm mb-1">{currentLessonInfo.title}</h3>
              <div className="bg-emerald-200 rounded-full h-2">
                <div 
                  className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getLessonProgressPercentage()}%` }}
                />
              </div>
              <p className="text-xs text-emerald-600 mt-1">
                Slide {currentSlideIndex + 1} of {currentLessonContent?.slides.length || 0}
              </p>
            </div>
          )}


          </div>
        </div>

              {/* Scrollable Course Navigation */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 w-72 sm:w-80 md:min-w-80">
          <div className="space-y-4">
            {courseStructure.modules.map((module, moduleIndex) => {
              const moduleCompleted = module.lessons.every(lessonId => completedLessons.has(lessonId));
              const moduleStarted = module.lessons.some(lessonId => completedLessons.has(lessonId));
              
              return (
                <div key={moduleIndex} className="space-y-2">
                  <div className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                    moduleCompleted ? 'bg-green-50 border border-green-200' : 
                    moduleStarted ? 'bg-emerald-50 border border-emerald-200' : 
                    'bg-gray-50 border border-gray-200'
                  }`}>
                    <h4 className={`font-semibold text-sm ${
                      moduleCompleted ? 'text-green-700' : 
                      moduleStarted ? 'text-emerald-700' : 
                      'text-gray-600'
                    }`}>
                      Module {moduleIndex + 1}: {module.title}
                    </h4>
                    {moduleCompleted && <FaCircleCheck className="w-4 h-4 text-green-500" />}
                  </div>
                  
                  <div className="space-y-1 ml-2">
                    {module.lessons.map((lessonId, lessonIndex) => {
                      const isAvailable = isLessonAvailable(lessonId);
                      const isCompleted = completedLessons.has(lessonId);
                      const isCurrent = currentLessonId === lessonId;
                      const lessonInfo = getLessonInfo(lessonId);
                      
                      return (
                        <button
                          key={lessonId}
                          onClick={() => goToLesson(lessonId)}
                          disabled={!isAvailable}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 flex items-center justify-between ${
                            isCurrent
                              ? 'bg-emerald-100 text-emerald-700 font-medium border border-emerald-300'
                              : isCompleted
                              ? 'bg-green-50 text-green-700 hover:bg-green-100'
                              : isAvailable
                              ? 'text-gray-700 hover:bg-gray-100 border border-gray-200'
                              : 'text-gray-400 cursor-not-allowed bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center">
                            {!isAvailable && <FaLock className="w-3 h-3 mr-2" />}
                            <div>
                              <div className="font-medium">Lesson {lessonIndex + 1}</div>
                              {lessonInfo && (
                                <div className="text-xs opacity-75">{lessonInfo.title}</div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {isCompleted && <FaCircleCheck className="w-4 h-4 text-green-500" />}
                            {isCurrent && !isCompleted && <div className="w-2 h-2 bg-emerald-500 rounded-full" />}
                            {!isAvailable && <span className="text-xs bg-gray-200 px-2 py-1 rounded">Soon</span>}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
        sidebarOpen ? '' : 'md:ml-0'
      }`}>


        {/* Single Flowing Content */}
        <div className="flex-1 overflow-y-auto">
          <motion.div
            key={`${currentLessonId}-${currentSlideIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-full"
          >
            {/* Compact Header */}
            <div className="bg-white border-b border-emerald-100/50 px-4 md:px-8 py-4 md:py-6">
              <div className="max-w-6xl mx-auto">
                {/* Mobile Layout - Clean and simple */}
                <div className="block md:hidden">
                  {/* Single clean row with lesson info */}
                  <div className="flex items-center space-x-3">
                    {/* Lesson icon */}
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      {currentModule?.title === "Growing Techniques" && <FaSeedling className="w-5 h-5 text-emerald-600" />}
                      {currentModule?.title === "Plant Care Basics" && <FaLeaf className="w-5 h-5 text-emerald-600" />}
                      {currentModule?.title === "Harvest Methods" && <FaScissors className="w-5 h-5 text-emerald-600" />}
                      {currentModule?.title === "Problem Solving" && <FaLightbulb className="w-5 h-5 text-emerald-600" />}
                    </div>
                    
                    {/* Content - takes up remaining space */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center text-xs text-emerald-600 mb-1">
                        <span>Lesson {currentLessonId}</span>
                        <span className="mx-1">•</span>
                        <span>Slide {currentSlideIndex + 1}/{currentLessonContent?.slides.length || 0}</span>
                      </div>
                      <h1 className="text-base font-bold text-gray-900 leading-tight line-clamp-2">{currentSlideData?.title}</h1>
                    </div>
                    
                    {/* Menu button */}
                    <div className="flex-shrink-0">
                      {!sidebarOpen && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSidebarOpen(true)}
                          className="flex items-center justify-center w-10 h-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors duration-300 shadow-md"
                        >
                          <FaChevronRight className="w-4 h-4" />
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - Original horizontal layout */}
                <div className="hidden md:flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Course Navigation Hint - Only show when sidebar is closed */}
                    {!sidebarOpen && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSidebarOpen(true)}
                        className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-lg transition-colors duration-300 text-sm border border-emerald-200"
                      >
                        <FaChevronRight className="w-4 h-4" />
                        <span>Course Menu</span>
                      </motion.button>
                    )}
                    
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                      {currentModule?.title === "Growing Techniques" && <FaSeedling className="w-6 h-6 text-emerald-600" />}
                      {currentModule?.title === "Plant Care Basics" && <FaLeaf className="w-6 h-6 text-emerald-600" />}
                      {currentModule?.title === "Harvest Methods" && <FaScissors className="w-6 h-6 text-emerald-600" />}
                      {currentModule?.title === "Problem Solving" && <FaLightbulb className="w-6 h-6 text-emerald-600" />}
                    </div>
                    
                    <div>
                      <div className="flex items-center text-sm text-emerald-600 mb-1">
                        <span>Lesson {currentLessonId}</span>
                        <span className="mx-2">•</span>
                        <span>{currentModule?.title}</span>
                        <span className="mx-2">•</span>
                        <span>Slide {currentSlideIndex + 1}/{currentLessonContent?.slides.length || 0}</span>
                      </div>
                      <h1 className="text-2xl font-bold text-gray-900 leading-tight">{currentSlideData?.title}</h1>
                    </div>
                  </div>
                  
                  {/* Slide Completion Status - Desktop */}
                  <div>
                    {completedSlides.has(currentSlideIndex) ? (
                      <div className="flex items-center text-green-600 bg-green-50 px-4 py-2 rounded-full border border-green-200">
                        <FaCircleCheck className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Completed</span>
                      </div>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={markSlideComplete}
                        className="flex items-center text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-full border border-emerald-200 transition-colors duration-300"
                      >
                        <FaCircleCheck className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Mark Complete</span>
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12">
                {/* Content Section */}
                <div className="lg:col-span-2">
                  <div className="prose prose-lg max-w-none">
                    {/* All Slide Content */}
                    {currentSlideData ? (
                      <div className="bg-white rounded-3xl p-4 md:p-8 shadow-lg border border-emerald-100/50 mb-6 md:mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-8 flex items-center">
                          <FaBook className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 mr-2 md:mr-3" />
                          {currentSlideData?.type === 'introduction' ? 'Introduction' :
                           currentSlideData?.type === 'theory' ? 'Theory & Concepts' :
                           currentSlideData?.type === 'practical' ? 'Practical Application' :
                           currentSlideData?.type === 'technique' ? 'Techniques & Methods' :
                           currentSlideData?.type === 'calculation' ? 'Calculations & Formulas' :
                           currentSlideData?.type === 'hands-on' ? 'Hands-On Workshop' :
                           currentSlideData?.type === 'troubleshooting' ? 'Troubleshooting Guide' :
                           currentSlideData?.type === 'summary' ? 'Lesson Summary' :
                           currentSlideData?.type === 'comparison' ? 'Medium Comparison' :
                           'Lesson Content'}
                        </h2>

                        {/* Main Content - Always Expanded */}
                        <CollapsibleSection
                          id="main-content"
                          title="Overview"
                          icon={<FaBook className="w-5 h-5 text-emerald-600" />}
                          defaultExpanded={true}
                        >
                          {/* Main Image */}
                          {currentSlideData?.type === "introduction" && (
                            <div className="mb-6">
                              <IconDisplay 
                                icon={
                                  currentLessonId === 1 ? FaSeedling :
                                  currentLessonId === 2 ? FaLeaf :
                                  currentLessonId === 3 ? FaTemperatureHalf :
                                  currentLessonId === 4 ? FaGears : FaBook
                                }
                                size="xlarge"
                                className="text-emerald-600 bg-emerald-50"
                              />
                            </div>
                          )}
                          
                          {currentSlideData?.type === "technique" && (
                            <div className="mb-6">
                              <IconDisplay 
                                icon={FaScrewdriverWrench}
                                size="xlarge"
                                className="text-blue-600 bg-blue-50"
                              />
                            </div>
                          )}
                          
                          {currentSlideData?.type === "hands-on" && (
                            <div className="mb-6">
                              <IconDisplay 
                                icon={FaFlask}
                                size="xlarge"
                                className="text-purple-600 bg-purple-50"
                              />
                            </div>
                          )}
                          
                          {currentSlideData?.type === "summary" && (
                            <div className="mb-6">
                              <IconDisplay 
                                icon={FaTrophy}
                                size="xlarge"
                                className="text-yellow-600 bg-yellow-50"
                              />
                            </div>
                          )}
                          
                          {currentSlideData?.type === "calculation" && (
                            <div className="mb-6">
                              <IconDisplay 
                                icon={FaChartLine}
                                size="xlarge"
                                className="text-indigo-600 bg-indigo-50"
                              />
                            </div>
                          )}
                          
                          {currentSlideData?.type === "quality" && (
                            <div className="mb-6">
                              <IconDisplay 
                                icon={FaCircleCheck}
                                size="xlarge"
                                className="text-green-600 bg-green-50"
                              />
                            </div>
                          )}
                          
                          {/* Main Content */}
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {currentSlideData?.content}
                          </p>
                        </CollapsibleSection>

                        {/* Learning Objectives */}
                        {currentSlideData?.learningObjectives && (
                          <CollapsibleSection
                            id="learning-objectives"
                            title="Learning Objectives"
                            icon={<FaCircleInfo className="w-5 h-5 text-blue-600" />}
                          >
                            <div className="bg-blue-50 rounded-2xl p-6">
                              <ul className="space-y-3">
                                {currentSlideData.learningObjectives.map((objective, index) => (
                                  <li key={index} className="flex items-start text-blue-700">
                                    <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
                                      {index + 1}
                                    </span>
                                    <span>{objective}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Theory Sections */}
                        {currentSlideData?.sections && currentSlideData.sections.map((section, index) => (
                          <CollapsibleSection
                            key={index}
                            id={`theory-section-${index}`}
                            title={section.heading}
                            icon={<FaLightbulb className="w-5 h-5 text-yellow-600" />}
                          >
                            <div className="bg-gray-50 rounded-2xl p-6">
                              <p className="text-gray-700 mb-4">{section.content}</p>
                              
                              {section.points && (
                                <ul className="space-y-2 mb-4">
                                  {section.points.map((point, pointIndex) => (
                                    <li key={pointIndex} className="flex items-start text-gray-700">
                                      <FaCircleCheck className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                              
                              {section.categories && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                                  {section.categories.map((category, catIndex) => (
                                    <div key={catIndex} className="bg-white rounded-xl p-3 md:p-4 shadow-sm">
                                      <h4 className="font-semibold text-emerald-700 mb-2">{category.type}</h4>
                                      <p className="text-sm text-gray-600 mb-2">Examples: {category.examples.join(', ')}</p>
                                      <p className="text-sm font-medium text-emerald-600">{category.density}</p>
                                      <ul className="text-xs text-gray-500 mt-2 space-y-1">
                                        {category.characteristics.map((char, charIndex) => (
                                          <li key={charIndex}>• {char}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </CollapsibleSection>
                        ))}

                        {/* Practical Steps */}
                        {currentSlideData?.practicalSteps && (
                          <CollapsibleSection
                            id="practical-steps"
                            title="Step-by-Step Instructions"
                            icon={<FaScrewdriverWrench className="w-5 h-5 text-gray-600" />}
                          >
                            <div className="bg-gray-50 rounded-2xl p-6">
                              <div className="space-y-6">
                                {currentSlideData.practicalSteps.map((step, index) => (
                                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                                    <div className="flex items-start">
                                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                                        {step.step}
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                                        <p className="text-gray-700 mb-3">{step.description}</p>
                                        
                                        {step.instructions && (
                                          <div className="mb-3">
                                            <h5 className="font-medium text-gray-800 mb-2">Instructions:</h5>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                              {step.instructions.map((instruction, instIndex) => (
                                                <li key={instIndex} className="flex items-start">
                                                  <span className="mr-2">•</span>
                                                  <span>{instruction}</span>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        )}
                                        
                                        {step.tips && (
                                          <div className="bg-yellow-50 rounded-lg p-3">
                                            <h5 className="text-sm font-medium text-yellow-800 mb-2 flex items-center space-x-2">
                  <FaLightbulb className="w-4 h-4" />
                  <span>Pro Tips:</span>
                </h5>
                                            <ul className="text-sm text-yellow-700 space-y-1">
                                              {step.tips.map((tip, tipIndex) => (
                                                <li key={tipIndex} className="flex items-start">
                                                  <span className="mr-2">•</span>
                                                  <span>{tip}</span>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Techniques */}
                        {hasTechniques && currentSlideData?.techniques && currentSlideData.techniques.map((technique, index) => (
                          <CollapsibleSection
                            key={index}
                            id={`technique-${index}`}
                            title={technique.name}
                            icon={<FaWater className="w-5 h-5 text-emerald-600" />}
                          >
                            <div className="bg-emerald-50 rounded-2xl p-6">
                              <p className="text-emerald-700 mb-4">Best for: {technique.bestFor?.join(', ') || 'N/A'}</p>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-medium text-emerald-800 mb-3">Method:</h4>
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="text-sm text-gray-600 mb-2">Duration: {technique.method?.duration || 'N/A'}</p>
                                    <p className="text-sm text-gray-600 mb-3">Temperature: {technique.method?.temperature || 'N/A'}</p>
                                    {technique.method?.ratio && (
                                      <p className="text-sm text-gray-600 mb-3">Ratio: {technique.method.ratio}</p>
                                    )}
                                    {technique.method?.solution && (
                                      <p className="text-sm text-gray-600 mb-3">Solution: {technique.method.solution}</p>
                                    )}
                                    <ol className="text-sm text-gray-700 space-y-1">
                                      {technique.method?.steps?.map((step, stepIndex) => (
                                        <li key={stepIndex} className="flex items-start">
                                          <span className="mr-2 font-medium">{stepIndex + 1}.</span>
                                          <span>{step}</span>
                                        </li>
                                      ))}
                                    </ol>
                                  </div>
                                </div>
                                
                                <div>
                                  <h4 className="font-medium text-emerald-800 mb-3">Benefits:</h4>
                                  <ul className="text-sm text-emerald-700 space-y-1 mb-4">
                                    {technique.benefits?.map((benefit, benefitIndex) => (
                                      <li key={benefitIndex} className="flex items-start">
                                        <FaCircleCheck className="w-3 h-3 text-emerald-500 mr-2 flex-shrink-0 mt-1" />
                                        <span>{benefit}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  
                                  {technique.warnings?.length > 0 && (
                                    <>
                                      <h4 className="font-medium text-red-800 mb-3">Warnings:</h4>
                                      <ul className="text-sm text-red-700 space-y-1">
                                        {technique.warnings.map((warning, warningIndex) => (
                                          <li key={warningIndex} className="flex items-start">
                                            <FaTriangleExclamation className="w-3 h-3 text-red-500 mr-2 flex-shrink-0 mt-1" />
                                            <span>{warning}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </CollapsibleSection>
                        ))}

                        {/* Exercise */}
                        {hasExercise && currentSlideData?.exercise && (
                          <CollapsibleSection
                            id="practical-exercise"
                            title="Practical Exercise"
                            icon={<FaClock className="w-5 h-5 text-purple-600" />}
                          >
                            <div className="bg-purple-50 rounded-2xl p-6">
                              <div className="text-purple-700">
                                <h4 className="font-medium mb-2">{currentSlideData.exercise.title}</h4>
                                <p className="mb-4">{currentSlideData.exercise.description}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                  <div>
                                    <h5 className="font-medium mb-2">Materials Needed:</h5>
                                    <ul className="text-sm space-y-1">
                                      {currentSlideData.exercise.materials?.map((material, index) => (
                                        <li key={index} className="flex items-center">
                                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                                          {material}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <h5 className="font-medium mb-2">Time Required:</h5>
                                    <p className="text-sm bg-purple-100 rounded-lg px-3 py-2 inline-block">
                                      {currentSlideData.exercise.timeRequired}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <h5 className="font-medium mb-2">Steps:</h5>
                                  <ol className="text-sm space-y-1">
                                    {currentSlideData.exercise.steps?.map((step, index) => (
                                      <li key={index} className="flex items-start">
                                        <span className="mr-2 font-medium">{index + 1}.</span>
                                        <span>{step}</span>
                                      </li>
                                    ))}
                                  </ol>
                                </div>
                              </div>
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Quiz */}
                        {hasQuiz && currentSlideData?.quiz && (
                          <CollapsibleSection
                            id="knowledge-check"
                            title="Knowledge Check"
                            icon={<FaCircleQuestion className="w-5 h-5 text-indigo-600" />}
                          >
                            <div className="bg-indigo-50 rounded-2xl p-6">
                              <div className="text-indigo-700">
                                <h4 className="font-medium mb-4">{currentSlideData.quiz.question}</h4>
                                <div className="space-y-2 mb-4">
                                  {currentSlideData.quiz.options?.map((option, index) => (
                                    <motion.button
                                      key={index}
                                      onClick={() => !quizState.showAnswer && handleQuizAnswer(index)}
                                      disabled={quizState.showAnswer}
                                      whileHover={!quizState.showAnswer ? { scale: 1.02 } : {}}
                                      whileTap={!quizState.showAnswer ? { scale: 0.98 } : {}}
                                      className={`w-full p-3 rounded-lg border text-left transition-all duration-300 ${
                                        quizState.showAnswer
                                          ? index === currentSlideData.quiz.correct
                                            ? 'bg-green-100 border-green-300 text-green-800'
                                            : index === quizState.selectedAnswer && quizState.selectedAnswer !== currentSlideData.quiz.correct
                                            ? 'bg-red-100 border-red-300 text-red-800'
                                            : 'bg-gray-100 border-gray-300 text-gray-600'
                                          : quizState.selectedAnswer === index
                                          ? 'bg-indigo-100 border-indigo-300'
                                          : 'bg-white border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 cursor-pointer'
                                      }`}
                                    >
                                      <div className="flex items-center justify-between">
                                        <div>
                                          <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
                                          <span>{option}</span>
                                        </div>
                                        {quizState.showAnswer && (
                                          <>
                                            {index === currentSlideData.quiz.correct && (
                                              <FaCircleCheck className="w-4 h-4 text-green-600" />
                                            )}
                                            {index === quizState.selectedAnswer && quizState.selectedAnswer !== currentSlideData.quiz.correct && (
                                              <FaXmark className="w-4 h-4 text-red-600" />
                                            )}
                                          </>
                                        )}
                                      </div>
                                    </motion.button>
                                  ))}
                                </div>
                                
                                {quizState.showAnswer && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{ duration: 0.3 }}
                                    className={`p-4 rounded-lg mb-4 ${
                                      quizState.isCorrect ? 'bg-green-100 border border-green-300' : 'bg-orange-100 border border-orange-300'
                                    }`}
                                  >
                                    <div className="flex items-center mb-2">
                                      {quizState.isCorrect ? (
                                        <FaCircleCheck className="w-5 h-5 text-green-600 mr-2" />
                                      ) : (
                                        <FaCircleInfo className="w-5 h-5 text-orange-600 mr-2" />
                                      )}
                                      <span className={`font-medium ${quizState.isCorrect ? 'text-green-800' : 'text-orange-800'}`}>
                                        {quizState.isCorrect ? 'Correct! Well done!' : 'Not quite right, but great effort!'}
                                      </span>
                                    </div>
                                    <p className={`text-sm ${quizState.isCorrect ? 'text-green-700' : 'text-orange-700'}`}>
                                      <strong>Explanation:</strong> {currentSlideData.quiz.explanation}
                                    </p>
                                  </motion.div>
                                )}

                                {quizState.showAnswer && (
                                  <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    onClick={resetQuiz}
                                    className="w-full px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg border border-indigo-300 transition-colors font-medium"
                                  >
                                    Try Again
                                  </motion.button>
                                )}
                              </div>
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Calculations */}
                        {hasCalculations && currentSlideData?.calculations && (
                          <CollapsibleSection
                            id="calculations"
                            title="Calculations & Formulas"
                            icon={<FaCircleInfo className="w-5 h-5 text-blue-600" />}
                          >
                            <div className="space-y-6">
                              {currentSlideData.calculations.map((calc, index) => (
                                <div key={index} className="bg-blue-50 rounded-2xl p-6">
                                  <h4 className="text-lg font-semibold text-blue-800 mb-3">{calc.concept}</h4>
                                  {calc.formula && (
                                    <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-blue-500">
                                      <code className="text-blue-700 font-mono text-lg">{calc.formula}</code>
                                    </div>
                                  )}
                                  <p className="text-blue-700 mb-4">{calc.explanation}</p>
                                  
                                  {calc.example && (
                                    <div className="bg-blue-100 rounded-lg p-4">
                                      <h5 className="font-medium text-blue-800 mb-2">Example:</h5>
                                      <div className="text-sm text-blue-700 space-y-1">
                                        <p><strong>Tray Size:</strong> {calc.example.traySize}</p>
                                        <p><strong>Seed Type:</strong> {calc.example.seedType}</p>
                                        <p><strong>Density:</strong> {calc.example.density}</p>
                                        <p><strong>Calculation:</strong> {calc.example.calculation}</p>
                                        <p><strong>Result:</strong> {calc.example.weight}</p>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {calc.conversions?.length > 0 && (
                                    <div className="mt-4">
                                      <h5 className="font-medium text-blue-800 mb-3">Seed Conversions:</h5>
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {calc.conversions.map((conv, convIndex) => (
                                          <div key={convIndex} className="bg-white rounded-lg p-4 shadow-sm">
                                            <h6 className="font-semibold text-blue-700 mb-2">{conv.variety}</h6>
                                            <div className="text-xs text-blue-600 space-y-1">
                                              <p><strong>Seeds/oz:</strong> {conv.seedsPerOz}</p>
                                              <p><strong>Recommended:</strong> {conv.recommendedOz}</p>
                                              <p><strong>Density:</strong> {conv.density}</p>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Practice Problems */}
                        {currentSlideData?.practiceProblems && (
                          <CollapsibleSection
                            id="practice-problems"
                            title="Practice Problems"
                            icon={<FaLightbulb className="w-5 h-5 text-yellow-600" />}
                          >
                            <div className="space-y-4">
                              {currentSlideData.practiceProblems.map((problem, index) => (
                                <div key={index} className="bg-yellow-50 rounded-2xl p-6">
                                  <h4 className="font-semibold text-yellow-800 mb-3">Problem {index + 1}:</h4>
                                  <p className="text-yellow-700 mb-3">{problem.problem}</p>
                                  <div className="bg-yellow-100 rounded-lg p-4 mb-3">
                                    <p className="text-sm text-yellow-700"><strong>Given:</strong> {problem.given}</p>
                                  </div>
                                  <div className="bg-white rounded-lg p-4">
                                    <p className="text-sm font-medium text-yellow-800 mb-2">Solution Steps:</p>
                                    <ol className="text-sm text-yellow-700 space-y-1">
                                      {problem.steps.map((step, stepIndex) => (
                                        <li key={stepIndex} className="flex items-start">
                                          <span className="mr-2 font-medium">{stepIndex + 1}.</span>
                                          <span>{step}</span>
                                        </li>
                                      ))}
                                    </ol>
                                    <div className="mt-3 p-3 bg-green-100 rounded-lg">
                                      <p className="text-sm text-green-800"><strong>Answer:</strong> {problem.solution}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Tools */}
                        {currentSlideData?.tools && Array.isArray(currentSlideData.tools) && (
                          <CollapsibleSection
                            id="tools-needed"
                            title="Tools & Equipment"
                            icon={<FaScrewdriverWrench className="w-5 h-5 text-gray-600" />}
                          >
                            <div className="bg-gray-50 rounded-2xl p-6">
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {currentSlideData.tools.map((tool, index) => (
                                  <li key={index} className="flex items-center text-gray-700">
                                    <FaCircleCheck className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                                    <span>{tool}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Workshop */}
                        {currentSlideData?.workshop && (
                          <CollapsibleSection
                            id="workshop"
                            title={currentSlideData.workshop.title}
                            icon={<FaScrewdriverWrench className="w-5 h-5 text-purple-600" />}
                          >
                            <div className="bg-purple-50 rounded-2xl p-6">
                              <div className="mb-6">
                                <p className="text-purple-700 mb-2"><strong>Objective:</strong> {currentSlideData.workshop.objective}</p>
                                <p className="text-purple-700"><strong>Duration:</strong> {currentSlideData.workshop.duration}</p>
                              </div>
                              
                              {/* Materials (if available) */}
                              {currentSlideData.workshop.materials && Array.isArray(currentSlideData.workshop.materials) && currentSlideData.workshop.materials.length > 0 && (
                                <div className="mb-6">
                                  <h4 className="font-semibold text-purple-800 mb-3">Materials Needed:</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {currentSlideData.workshop.materials.map((material, index) => (
                                      <div key={index} className="flex items-center text-purple-700">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                        <span className="text-sm">{material}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                              {/* Workshop Phases (original structure) */}
                              {currentSlideData.workshop.phases && (
                                <div className="space-y-4">
                                  <h4 className="font-semibold text-purple-800">Workshop Phases:</h4>
                                  {currentSlideData.workshop.phases.map((phase, index) => (
                                    <div key={index} className="bg-white rounded-lg p-4">
                                      <h5 className="font-medium text-purple-700 mb-2">{phase.phase}</h5>
                                      <ul className="text-sm text-purple-600 space-y-1">
                                        {phase.tasks.map((task, taskIndex) => (
                                          <li key={taskIndex} className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>{task}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              )}
                              
                              {/* Workshop Systems (lesson 2 structure) */}
                              {currentSlideData.workshop.systems && (
                                <div className="space-y-4">
                                  <h4 className="font-semibold text-purple-800">Workshop Systems:</h4>
                                  {currentSlideData.workshop.systems.map((system, index) => (
                                    <div key={index} className="bg-white rounded-lg p-4">
                                      <div className="flex items-center justify-between mb-3">
                                        <h5 className="font-medium text-purple-700">{system.system}</h5>
                                        <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                                          {system.timeAllocation}
                                        </span>
                                      </div>
                                      
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <h6 className="font-medium text-purple-600 mb-2">Tasks:</h6>
                                          <ul className="text-sm text-purple-600 space-y-1">
                                            {system.tasks.map((task, taskIndex) => (
                                              <li key={taskIndex} className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>{task}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        
                                        <div>
                                          <h6 className="font-medium text-green-600 mb-2">Evaluation Criteria:</h6>
                                          <ul className="text-sm text-green-600 space-y-1">
                                            {system.evaluation.map((criteria, evalIndex) => (
                                              <li key={evalIndex} className="flex items-start">
                                                <FaCircleCheck className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                                                <span>{criteria}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                              
                              {/* Workshop Comparison (lesson 2 specific) */}
                              {currentSlideData.workshop.comparison && (
                                <div className="mt-6 bg-white rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-3">
                                    <h5 className="font-medium text-purple-700">{currentSlideData.workshop.comparison.title}</h5>
                                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                      {currentSlideData.workshop.comparison.timeAllocation}
                                    </span>
                                  </div>
                                  
                                  <div className="mb-3">
                                    <h6 className="font-medium text-blue-600 mb-2">Comparison Criteria:</h6>
                                    <ul className="text-sm text-blue-600 space-y-1">
                                      {currentSlideData.workshop.comparison.criteria.map((criteria, index) => (
                                        <li key={index} className="flex items-start">
                                          <span className="mr-2">•</span>
                                          <span>{criteria}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div className="bg-blue-50 rounded-lg p-3">
                                    <p className="text-sm text-blue-700">
                                      <strong>Deliverable:</strong> {currentSlideData.workshop.comparison.deliverable}
                                    </p>
                                  </div>
                                </div>
                              )}
                              
                              {/* Success Checkpoints (if available) */}
                              {currentSlideData.workshop.checkpoints && (
                                <div className="mt-6">
                                  <h4 className="font-semibold text-purple-800 mb-3">Success Checkpoints:</h4>
                                  <div className="space-y-2">
                                    {currentSlideData.workshop.checkpoints.map((checkpoint, index) => (
                                      <div key={index} className="flex items-center text-purple-700">
                                        <FaCircleCheck className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                                        <span className="text-sm">{checkpoint}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Problems/Troubleshooting */}
                        {currentSlideData?.problems?.length > 0 && (
                          <CollapsibleSection
                            id="troubleshooting"
                            title="Common Problems & Solutions"
                            icon={<FaTriangleExclamation className="w-5 h-5 text-red-600" />}
                          >
                            <div className="space-y-6">
                              {currentSlideData.problems.map((problem, index) => (
                                <div key={index} className="bg-red-50 rounded-2xl p-6">
                                  <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                                    <FaTriangleExclamation className="w-5 h-5 mr-2" />
                                    {problem.issue}
                                  </h4>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                      {problem.symptoms?.length > 0 && (
                                        <>
                                          <h5 className="font-medium text-red-700 mb-2">Symptoms:</h5>
                                          <ul className="text-sm text-red-600 space-y-1 mb-4">
                                            {problem.symptoms.map((symptom, sIndex) => (
                                              <li key={sIndex} className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>{symptom}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </>
                                      )}
                                      
                                      {problem.causes?.length > 0 && (
                                        <>
                                          <h5 className="font-medium text-red-700 mb-2">Causes:</h5>
                                          <ul className="text-sm text-red-600 space-y-1">
                                            {problem.causes.map((cause, cIndex) => (
                                              <li key={cIndex} className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>{cause}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </>
                                      )}
                                    </div>
                                    
                                    <div>
                                      {problem.solutions?.length > 0 && (
                                        <>
                                          <h5 className="font-medium text-green-700 mb-2">Solutions:</h5>
                                          <ul className="text-sm text-green-600 space-y-1 mb-4">
                                            {problem.solutions.map((solution, solIndex) => (
                                              <li key={solIndex} className="flex items-start">
                                                <FaCircleCheck className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                                                <span>{solution}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </>
                                      )}
                                      
                                      {problem.prevention?.length > 0 && (
                                        <>
                                          <h5 className="font-medium text-blue-700 mb-2">Prevention:</h5>
                                          <ul className="text-sm text-blue-600 space-y-1">
                                            {problem.prevention.map((prev, pIndex) => (
                                              <li key={pIndex} className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>{prev}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Diagnostic Guide */}
                        {currentSlideData?.diagnosticGuide && (
                          <CollapsibleSection
                            id="diagnostic-guide"
                            title={currentSlideData.diagnosticGuide.title}
                            icon={<FaCircleInfo className="w-5 h-5 text-blue-600" />}
                          >
                            <div className="bg-blue-50 rounded-2xl p-6">
                              <ol className="space-y-3">
                                {currentSlideData.diagnosticGuide.steps.map((step, index) => (
                                  <li key={index} className="flex items-start text-blue-700">
                                    <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
                                      {index + 1}
                                    </span>
                                    <span>{step}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Summary */}
                        {currentSlideData?.summary && (
                          <>
                            <CollapsibleSection
                              id="key-learnings"
                              title="Key Learnings"
                              icon={<FaTrophy className="w-5 h-5 text-emerald-600" />}
                            >
                              <div className="bg-emerald-50 rounded-2xl p-6">
                                <ul className="space-y-3">
                                  {currentSlideData.summary.keyLearnings.map((learning, index) => (
                                    <li key={index} className="flex items-start text-emerald-700">
                                      <FaCircleCheck className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                                      <span>{learning}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </CollapsibleSection>

                            <CollapsibleSection
                              id="skills-acquired"
                              title="Skills Acquired"
                              icon={<FaLightbulb className="w-5 h-5 text-yellow-600" />}
                            >
                              <div className="bg-yellow-50 rounded-2xl p-6">
                                <ul className="space-y-3">
                                  {currentSlideData.summary.skillsAcquired.map((skill, index) => (
                                    <li key={index} className="flex items-start text-yellow-700">
                                      <FaCircleCheck className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                                      <span>{skill}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </CollapsibleSection>

                            {currentSlideData?.summary?.practicalExperience && Array.isArray(currentSlideData.summary.practicalExperience) && (
                              <>
                                <CollapsibleSection
                                  id="practical-experience"
                                  title="Practical Experience"
                                  icon={<FaScrewdriverWrench className="w-5 h-5 text-purple-600" />}
                                >
                                  <div className="bg-purple-50 rounded-2xl p-6">
                                    <ul className="space-y-3">
                                      {currentSlideData.summary.practicalExperience.map((experience, index) => (
                                        <li key={index} className="flex items-start text-purple-700">
                                          <FaCircleCheck className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                                          <span>{experience}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </CollapsibleSection>
                              </>
                            )}
                          </>
                        )}

                        {/* Assessment */}
                        {hasAssessment && currentSlideData?.assessment && (
                          <CollapsibleSection
                            id="final-assessment"
                            title={currentSlideData.assessment.title}
                            icon={<FaCircleInfo className="w-5 h-5 text-indigo-600" />}
                          >
                            <div className="bg-indigo-50 rounded-2xl p-6">
                              <div className="space-y-6">
                                {currentSlideData.assessment.questions.map((question, index) => (
                                  <div key={index} className="bg-white rounded-lg p-4">
                                    <h5 className="font-medium text-indigo-800 mb-3">Question {index + 1}:</h5>
                                    <p className="text-indigo-700 mb-3">{question.question}</p>
                                    
                                    {question.type === 'multiple-choice' && (
                                      <div className="space-y-2">
                                        {question.options.map((option, optIndex) => (
                                          <div key={optIndex} className={`p-2 rounded border ${
                                            optIndex === question.correct 
                                              ? 'bg-green-100 border-green-300 text-green-800' 
                                              : 'bg-gray-50 border-gray-200'
                                          }`}>
                                            <span className="font-medium mr-2">{String.fromCharCode(65 + optIndex)}.</span>
                                            {option}
                                            {optIndex === question.correct && (
                                              <FaCircleCheck className="w-4 h-4 text-green-600 inline ml-2" />
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                    
                                    {question.type === 'calculation' && (
                                      <div className="bg-green-100 rounded-lg p-3">
                                        <p className="text-green-800"><strong>Answer:</strong> {question.answer}</p>
                                        {question.explanation && (
                                          <p className="text-green-700 text-sm mt-2">{question.explanation}</p>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Assessment Tasks */}
                        {hasTasks && currentSlideData?.assessment?.tasks && (
                          <CollapsibleSection
                            id="assessment-tasks"
                            title={currentSlideData.assessment.title}
                            icon={<FaCircleInfo className="w-5 h-5 text-indigo-600" />}
                          >
                            <div className="bg-indigo-50 rounded-2xl p-6">
                              <div className="space-y-6">
                                {currentSlideData.assessment.tasks.map((task, index) => (
                                  <div key={index} className="bg-white rounded-lg p-4">
                                    <h5 className="font-semibold text-indigo-800 mb-3">{task.task}</h5>
                                    <p className="text-indigo-700 mb-4">{task.description}</p>
                                    
                                    <div>
                                      <h6 className="font-medium text-indigo-600 mb-3">Evaluation Criteria:</h6>
                                      <ul className="space-y-2">
                                        {task.criteria.map((criteria, critIndex) => (
                                          <li key={critIndex} className="flex items-start text-indigo-600">
                                            <FaCircleCheck className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">{criteria}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Next Steps */}
                        {hasNextSteps && currentSlideData?.nextSteps && (
                          <CollapsibleSection
                            id="next-steps"
                            title={currentSlideData.nextSteps.title || "Next Steps"}
                            icon={<FaArrowRight className="w-5 h-5 text-emerald-600" />}
                          >
                            <div className="bg-emerald-50 rounded-2xl p-6">
                              {currentSlideData.nextSteps.preview && (
                                <p className="text-emerald-700 mb-4">{currentSlideData.nextSteps.preview}</p>
                              )}
                              
                              {currentSlideData.nextSteps.topics && Array.isArray(currentSlideData.nextSteps.topics) && (
                                <div className="mb-6">
                                  <h4 className="font-semibold text-emerald-800 mb-3">Topics to Cover:</h4>
                                  <ul className="space-y-2">
                                    {currentSlideData.nextSteps.topics.map((topic, index) => (
                                      <li key={index} className="flex items-start text-emerald-700">
                                        <FaCircleCheck className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                                        <span>{topic}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {currentSlideData.nextSteps.preparation && Array.isArray(currentSlideData.nextSteps.preparation) && (
                                <div>
                                  <h4 className="font-semibold text-emerald-800 mb-3">Preparation Checklist:</h4>
                                  <ul className="space-y-2">
                                    {currentSlideData.nextSteps.preparation.map((prep, index) => (
                                      <li key={index} className="flex items-start text-emerald-700">
                                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                                        <span>{prep}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Medium Types Comparison */}
                        {hasMediumTypes && currentSlideData?.mediumTypes && Array.isArray(currentSlideData.mediumTypes) && (
                          <div className="bg-white rounded-2xl p-4 md:p-6 mb-6 shadow-sm">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Growing Medium Options</h3>
                            <div className="space-y-4 md:space-y-6">
                              {currentSlideData.mediumTypes.map((medium, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl p-4 md:p-6">
                                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                                    <h4 className="text-lg font-bold text-gray-900">{medium.name}</h4>
                                    <div className="flex flex-wrap gap-2">
                                      {medium.cost && (
                                        <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                                          {medium.cost}
                                        </span>
                                      )}
                                      {medium.difficulty && (
                                        <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                                          {medium.difficulty}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  
                                  {medium.composition && (
                                    <p className="text-gray-600 mb-4 italic text-sm md:text-base">{medium.composition}</p>
                                  )}
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    {medium.pros && Array.isArray(medium.pros) && (
                                      <div className="bg-white rounded-lg p-4">
                                        <h5 className="font-semibold text-green-700 mb-3 flex items-center">
                                          <FaCircleCheck className="w-4 h-4 mr-2" />
                                          Advantages
                                        </h5>
                                        <ul className="space-y-2">
                                          {medium.pros.map((pro, proIndex) => (
                                            <li key={proIndex} className="flex items-start text-green-600 text-sm">
                                              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                                              <span>{pro}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                    
                                    {medium.cons && Array.isArray(medium.cons) && (
                                      <div className="bg-white rounded-lg p-4">
                                        <h5 className="font-semibold text-red-700 mb-3 flex items-center">
                                          <FaTriangleExclamation className="w-4 h-4 mr-2" />
                                          Disadvantages
                                        </h5>
                                        <ul className="space-y-2">
                                          {medium.cons.map((con, conIndex) => (
                                            <li key={conIndex} className="flex items-start text-red-600 text-sm">
                                              <span className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                                              <span>{con}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                  
                                  <div className="bg-white rounded-lg p-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {medium.bestFor && Array.isArray(medium.bestFor) && (
                                        <div>
                                          <h6 className="font-medium text-gray-800 mb-2">Best For:</h6>
                                          <p className="text-sm text-gray-600">{medium.bestFor.join(', ')}</p>
                                        </div>
                                      )}
                                      {medium.setup && (
                                        <div>
                                          <h6 className="font-medium text-gray-800 mb-2">Setup:</h6>
                                          <p className="text-sm text-gray-600">{medium.setup}</p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Selection Guide */}
                        {currentSlideData?.selectionGuide?.title && currentSlideData?.selectionGuide?.factors && Array.isArray(currentSlideData.selectionGuide.factors) && (
                          <div className="bg-yellow-50 rounded-2xl p-4 md:p-6 mb-6">
                            <h3 className="text-lg md:text-xl font-semibold text-yellow-900 mb-4">{currentSlideData.selectionGuide.title}</h3>
                            <div className="space-y-4">
                              {currentSlideData.selectionGuide.factors.map((factor, index) => (
                                <div key={index} className="bg-white rounded-lg p-4">
                                  <h5 className="font-semibold text-yellow-800 mb-4">{factor.factor}</h5>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {(factor.beginner || factor.low) && (
                                      <div className="bg-green-50 rounded-lg p-3">
                                        <div className="text-xs text-gray-500 mb-1">Beginner/Low</div>
                                        <div className="text-sm font-medium text-green-800">
                                          {factor.beginner || factor.low}
                                        </div>
                                      </div>
                                    )}
                                    {(factor.intermediate || factor.medium) && (
                                      <div className="bg-blue-50 rounded-lg p-3">
                                        <div className="text-xs text-gray-500 mb-1">Intermediate/Medium</div>
                                        <div className="text-sm font-medium text-blue-800">
                                          {factor.intermediate || factor.medium}
                                        </div>
                                      </div>
                                    )}
                                    {(factor.advanced || factor.high) && (
                                      <div className="bg-purple-50 rounded-lg p-3">
                                        <div className="text-xs text-gray-500 mb-1">Advanced/High</div>
                                        <div className="text-sm font-medium text-purple-800">
                                          {factor.advanced || factor.high}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Preparation Steps */}
                        {currentSlideData?.preparation?.recipe?.title && (
                          <>
                            <CollapsibleSection
                              id="soil-recipe"
                              title={currentSlideData.preparation.recipe.title}
                              icon={<FaScrewdriverWrench className="w-5 h-5 text-emerald-600" />}
                            >
                              <div className="bg-emerald-50 rounded-2xl p-6">
                                <div className="mb-6">
                                  <h5 className="font-semibold text-emerald-800 mb-4">Ingredients:</h5>
                                  <div className="space-y-3">
                                    {currentSlideData.preparation.recipe.ingredients?.map((ingredient, index) => (
                                      <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-between">
                                        <div>
                                          <h6 className="font-medium text-emerald-700">{ingredient.component}</h6>
                                          <p className="text-sm text-emerald-600">{ingredient.purpose}</p>
                                        </div>
                                        <div className="text-right">
                                          <span className="text-lg font-bold text-emerald-800">{ingredient.ratio}</span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                {currentSlideData.preparation.recipe.totalVolume && (
                                  <div className="bg-emerald-100 rounded-lg p-4">
                                    <p className="text-emerald-800 font-medium">{currentSlideData.preparation.recipe.totalVolume}</p>
                                  </div>
                                )}
                              </div>
                            </CollapsibleSection>

                            {currentSlideData.preparation.steps?.length > 0 && (
                              <CollapsibleSection
                                id="preparation-steps"
                                title="Preparation Steps"
                                icon={<FaScrewdriverWrench className="w-5 h-5 text-blue-600" />}
                              >
                                <div className="bg-blue-50 rounded-2xl p-6">
                                  <div className="space-y-6">
                                    {currentSlideData.preparation.steps.map((step, index) => (
                                      <div key={index} className="bg-white rounded-xl p-6">
                                        <div className="flex items-start">
                                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                                            {step.step}
                                          </div>
                                          <div className="flex-1">
                                            <h5 className="font-semibold text-blue-900 mb-2">{step.title}</h5>
                                            <p className="text-blue-700 mb-3">{step.description}</p>
                                            
                                            {step.details?.length > 0 && (
                                              <div className="mb-3">
                                                <h6 className="font-medium text-blue-800 mb-2">Details:</h6>
                                                <ul className="text-sm text-blue-700 space-y-1">
                                                  {step.details.map((detail, detailIndex) => (
                                                    <li key={detailIndex} className="flex items-start">
                                                      <span className="mr-2">•</span>
                                                      <span>{detail}</span>
                                                    </li>
                                                  ))}
                                                </ul>
                                              </div>
                                            )}
                                            
                                            {step.tips?.length > 0 && (
                                              <div className="bg-yellow-50 rounded-lg p-3">
                                                <h6 className="text-sm font-medium text-yellow-800 mb-2 flex items-center space-x-2">
                  <FaLightbulb className="w-4 h-4" />
                  <span>Pro Tips:</span>
                </h6>
                                                <ul className="text-sm text-yellow-700 space-y-1">
                                                  {step.tips.map((tip, tipIndex) => (
                                                    <li key={tipIndex} className="flex items-start">
                                                      <span className="mr-2">•</span>
                                                      <span>{tip}</span>
                                                    </li>
                                                  ))}
                                                </ul>
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </CollapsibleSection>
                            )}
                          </>
                        )}

                        {/* Sterilization */}
                        {currentSlideData?.sterilization?.title && (
                          <CollapsibleSection
                            id="sterilization"
                            title={currentSlideData.sterilization.title}
                            icon={<FaTemperatureHalf className="w-5 h-5 text-red-600" />}
                          >
                            <div className="bg-red-50 rounded-2xl p-6">
                              {currentSlideData.sterilization.when && (
                                <p className="text-red-700 mb-4"><strong>When to use:</strong> {currentSlideData.sterilization.when}</p>
                              )}
                              
                              {currentSlideData.sterilization.methods?.length > 0 && (
                                <div className="space-y-6">
                                  {currentSlideData.sterilization.methods.map((method, index) => (
                                    <div key={index} className="bg-white rounded-lg p-4">
                                      <h5 className="font-semibold text-red-800 mb-3">{method.method}</h5>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                          {method.temperature && (
                                            <p className="text-sm text-red-600 mb-2">
                                              <strong>Temperature:</strong> {method.temperature}
                                            </p>
                                          )}
                                          {method.duration && (
                                            <p className="text-sm text-red-600 mb-3">
                                              <strong>Duration:</strong> {method.duration}
                                            </p>
                                          )}
                                          {method.steps?.length > 0 && (
                                            <>
                                              <h6 className="font-medium text-red-700 mb-2">Steps:</h6>
                                              <ol className="text-sm text-red-600 space-y-1">
                                                {method.steps.map((step, stepIndex) => (
                                                  <li key={stepIndex} className="flex items-start">
                                                    <span className="mr-2 font-medium">{stepIndex + 1}.</span>
                                                    <span>{step}</span>
                                                  </li>
                                                ))}
                                              </ol>
                                            </>
                                          )}
                                        </div>
                                        <div>
                                          {method.pros?.length > 0 && (
                                            <div className="mb-3">
                                              <h6 className="font-medium text-green-700 mb-2">Pros:</h6>
                                              <ul className="text-sm text-green-600 space-y-1">
                                                {method.pros.map((pro, proIndex) => (
                                                  <li key={proIndex} className="flex items-start">
                                                    <FaCircleCheck className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                                                    <span>{pro}</span>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          )}
                                          {method.cons?.length > 0 && (
                                            <div>
                                              <h6 className="font-medium text-red-700 mb-2">Cons:</h6>
                                              <ul className="text-sm text-red-600 space-y-1">
                                                {method.cons.map((con, conIndex) => (
                                                  <li key={conIndex} className="flex items-start">
                                                    <FaTriangleExclamation className="w-3 h-3 text-red-500 mr-2 flex-shrink-0 mt-1" />
                                                    <span>{con}</span>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Systems Setup (for soilless mediums) */}
                        {hasSystems && currentSlideData?.systems && (
                          <CollapsibleSection
                            id="systems-setup"
                            title="System Setup Methods"
                            icon={<FaScrewdriverWrench className="w-5 h-5 text-teal-600" />}
                          >
                            <div className="space-y-6">
                              {currentSlideData.systems.map((system, index) => (
                                <div key={index} className="bg-teal-50 rounded-2xl p-6">
                                  <h4 className="text-lg font-bold text-teal-800 mb-4">{system.type}</h4>
                                  
                                  {/* Materials */}
                                  <div className="mb-6">
                                    <h5 className="font-semibold text-teal-700 mb-3">Materials Needed:</h5>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                      {system.setup?.materials?.map((material, matIndex) => (
                                        <div key={matIndex} className="flex items-center text-teal-600">
                                          <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                                          <span className="text-sm">{material}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  {/* Setup Steps */}
                                  <div className="space-y-4">
                                    <h5 className="font-semibold text-teal-700">Setup Process:</h5>
                                    {system.setup?.steps?.map((step, stepIndex) => (
                                      <div key={stepIndex} className="bg-white rounded-lg p-4">
                                        <div className="flex items-start">
                                          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                                            {step.step}
                                          </div>
                                          <div className="flex-1">
                                            <h6 className="font-medium text-teal-800 mb-2">{step.title}</h6>
                                            <p className="text-teal-700 mb-3 text-sm">{step.description}</p>
                                            
                                            <div>
                                              <h6 className="font-medium text-teal-600 mb-2 text-sm">Process:</h6>
                                              <ul className="text-sm text-teal-600 space-y-1">
                                                {step.process?.map((process, processIndex) => (
                                                  <li key={processIndex} className="flex items-start">
                                                    <span className="mr-2">•</span>
                                                    <span>{process}</span>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Troubleshooting (for systems) */}
                        {hasTroubleshooting && currentSlideData?.troubleshooting && !currentSlideData?.problems && (
                          <CollapsibleSection
                            id="troubleshooting-guide"
                            title="Troubleshooting Guide"
                            icon={<FaTriangleExclamation className="w-5 h-5 text-orange-600" />}
                          >
                            <div className="bg-orange-50 rounded-2xl p-6">
                              <div className="space-y-4">
                                {currentSlideData.troubleshooting.map((issue, index) => (
                                  <div key={index} className="bg-white rounded-lg p-4">
                                    <h5 className="font-semibold text-orange-800 mb-2 flex items-center">
                                      <FaTriangleExclamation className="w-4 h-4 mr-2" />
                                      {issue.problem}
                                    </h5>
                                    <div className="bg-green-50 rounded-lg p-3">
                                      <p className="text-green-700 text-sm">
                                        <strong>Solution:</strong> {issue.solution}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Drainage Systems */}
                        {hasDrainageSystems && currentSlideData?.drainageSystems && (
                          <CollapsibleSection
                            id="drainage-systems"
                            title="Drainage & Watering Systems"
                            icon={<FaWater className="w-5 h-5 text-blue-600" />}
                          >
                            <div className="space-y-6">
                              {currentSlideData.drainageSystems.map((system, index) => (
                                <div key={index} className="bg-blue-50 rounded-2xl p-6">
                                  <h4 className="text-lg font-bold text-blue-800 mb-3">{system.system}</h4>
                                  <p className="text-blue-700 mb-4">{system.description}</p>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                      <h5 className="font-semibold text-blue-700 mb-3">Components:</h5>
                                      <ul className="text-sm text-blue-600 space-y-1">
                                        {system.components?.map((component, compIndex) => (
                                          <li key={compIndex} className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>{component}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h5 className="font-semibold text-blue-700 mb-3">Setup Steps:</h5>
                                      <ol className="text-sm text-blue-600 space-y-1">
                                        {system.setup?.map((step, stepIndex) => (
                                          <li key={stepIndex} className="flex items-start">
                                            <span className="mr-2 font-medium">{stepIndex + 1}.</span>
                                            <span>{step}</span>
                                          </li>
                                        ))}
                                      </ol>
                                    </div>
                                    
                                    <div>
                                      <h5 className="font-semibold text-green-700 mb-3">Advantages:</h5>
                                      <ul className="text-sm text-green-600 space-y-1">
                                        {system.advantages?.map((advantage, advIndex) => (
                                          <li key={advIndex} className="flex items-start">
                                            <FaCircleCheck className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                                            <span>{advantage}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Watering Techniques */}
                        {hasWateringTechniques && currentSlideData?.wateringTechniques && (
                          <CollapsibleSection
                            id="watering-techniques"
                            title="Watering Techniques"
                            icon={<FaWater className="w-5 h-5 text-blue-600" />}
                          >
                            <div className="bg-blue-50 rounded-2xl p-6">
                              <div className="space-y-6">
                                {currentSlideData.wateringTechniques.map((technique, index) => (
                                  <div key={index} className="bg-white rounded-lg p-4">
                                    <h5 className="font-semibold text-blue-800 mb-3">{technique.technique}</h5>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                      <div className="md:col-span-2">
                                        <h6 className="font-medium text-blue-700 mb-2">Steps:</h6>
                                        <ol className="text-sm text-blue-600 space-y-1">
                                          {technique.steps?.map((step, stepIndex) => (
                                            <li key={stepIndex} className="flex items-start">
                                              <span className="mr-2 font-medium">{stepIndex + 1}.</span>
                                              <span>{step}</span>
                                            </li>
                                          ))}
                                        </ol>
                                      </div>
                                      
                                      <div>
                                        <div className="mb-3">
                                          <h6 className="font-medium text-blue-700 mb-2">Timing:</h6>
                                          <p className="text-sm text-blue-600">{technique.timing}</p>
                                        </div>
                                        <div>
                                          <h6 className="font-medium text-blue-700 mb-2">Indicators:</h6>
                                          <p className="text-sm text-blue-600">{technique.indicators}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CollapsibleSection>
                        )}

                        {/* Quality Checks */}
                        {hasQualityChecks && currentSlideData?.qualityChecks && (
                          <CollapsibleSection
                            id="quality-checks"
                            title="Quality Control Checks"
                            icon={<FaCircleCheck className="w-5 h-5 text-green-600" />}
                          >
                            <div className="bg-green-50 rounded-2xl p-6">
                              <div className="space-y-4">
                                {currentSlideData.qualityChecks.map((check, index) => (
                                  <div key={index} className="bg-white rounded-lg p-4">
                                    <h5 className="font-semibold text-green-800 mb-3">{check.check}</h5>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <h6 className="font-medium text-green-700 mb-2">Procedure:</h6>
                                        <p className="text-sm text-green-600">{check.procedure}</p>
                                      </div>
                                      <div>
                                        <h6 className="font-medium text-green-700 mb-2">Pass/Fail Criteria:</h6>
                                        <p className="text-sm text-green-600">{check.passFailCriteria}</p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CollapsibleSection>
                        )}
                      </div>
                    ) : (
                      /* Fallback content when currentSlideData is null */
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-12 text-white text-center">
                        <FaTrophy className="w-20 h-20 mx-auto mb-6" />
                        <h2 className="text-4xl font-bold mb-4">Lesson Complete!</h2>
                        <p className="text-emerald-100 text-xl mb-8">
                          You've successfully completed Lesson 2: Growing Medium Setup!
                        </p>
                        <div className="bg-white/20 rounded-2xl p-6 mb-8">
                          <h3 className="text-xl font-semibold mb-4">What's Next?</h3>
                          <p className="text-emerald-100 mb-4">
                            Lesson 3 is coming soon! In the meantime, practice what you've learned:
                          </p>
                          <ul className="text-emerald-100 text-left space-y-2 max-w-md mx-auto">
                            <li className="flex items-center">
                              <FaCircleCheck className="w-4 h-4 mr-3 flex-shrink-0" />
                              Set up your growing medium systems
                            </li>
                            <li className="flex items-center">
                              <FaCircleCheck className="w-4 h-4 mr-3 flex-shrink-0" />
                              Test different drainage methods
                            </li>
                            <li className="flex items-center">
                              <FaCircleCheck className="w-4 h-4 mr-3 flex-shrink-0" />
                              Practice quality control checks
                            </li>
                          </ul>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate('/journey')}
                          className="bg-white text-emerald-600 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-emerald-50 transition-colors duration-300"
                        >
                          Return to Journey
                        </motion.button>
                      </div>
                    )}

                    {/* Completion Message */}
                    {currentSlideData?.type === 'completion' && (
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-12 text-white text-center">
                        <FaTrophy className="w-20 h-20 mx-auto mb-6" />
                        <h2 className="text-4xl font-bold mb-4">Congratulations!</h2>
                        <p className="text-emerald-100 text-xl mb-8">You've successfully completed the Microgreens Basics course!</p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate('/journey')}
                          className="bg-white text-emerald-600 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-emerald-50 transition-colors duration-300"
                        >
                          Return to Journey
                        </motion.button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Key Points Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-emerald-50 rounded-3xl p-4 md:p-8 lg:sticky lg:top-8">
                    <h3 className="text-lg md:text-xl font-bold text-emerald-800 mb-4 md:mb-6 flex items-center">
                      <FaTrophy className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                      Key Learning Points
                    </h3>
                    <ul className="space-y-4">
                      {currentSlideData?.keyPoints?.length > 0 ? (
                        currentSlideData.keyPoints.map((point, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start text-emerald-700"
                          >
                            <FaCircleCheck className="w-5 h-5 text-emerald-500 mr-4 flex-shrink-0 mt-1" />
                            <span className="leading-relaxed">{point}</span>
                          </motion.li>
                        ))
                      ) : (
                        // Fallback: Generate key points from slide content
                        <>
                          {currentSlideData?.learningObjectives?.slice(0, 4).map((objective, index) => (
                            <motion.li
                              key={`objective-${index}`}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start text-emerald-700"
                            >
                              <FaCircleCheck className="w-5 h-5 text-emerald-500 mr-4 flex-shrink-0 mt-1" />
                              <span className="leading-relaxed">{objective}</span>
                            </motion.li>
                          )) || []}
                          
                          {/* If no learning objectives, show content-based points */}
                          {!currentSlideData?.learningObjectives && currentSlideData?.content && (
                            <motion.li
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="flex items-start text-emerald-700"
                            >
                              <FaCircleCheck className="w-5 h-5 text-emerald-500 mr-4 flex-shrink-0 mt-1" />
                              <span className="leading-relaxed">
                                {currentSlideData.type === 'introduction' ? 'Foundation concepts and overview' :
                                 currentSlideData.type === 'theory' ? 'Theoretical knowledge and principles' :
                                 currentSlideData.type === 'practical' ? 'Hands-on practical applications' :
                                 currentSlideData.type === 'technique' ? 'Specific techniques and methods' :
                                 currentSlideData.type === 'calculation' ? 'Mathematical calculations and formulas' :
                                 currentSlideData.type === 'hands-on' ? 'Workshop and practical experience' :
                                 currentSlideData.type === 'troubleshooting' ? 'Problem identification and solutions' :
                                 currentSlideData.type === 'summary' ? 'Key learnings and next steps' :
                                 currentSlideData.type === 'comparison' ? 'Comparative analysis and selection' :
                                 'Essential learning content'}
                              </span>
                            </motion.li>
                          )}
                          
                          {/* Add slide-specific points based on content type */}
                          {currentSlideData?.mediumTypes && (
                            <motion.li
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                              className="flex items-start text-emerald-700"
                            >
                              <FaCircleCheck className="w-5 h-5 text-emerald-500 mr-4 flex-shrink-0 mt-1" />
                              <span className="leading-relaxed">Compare {currentSlideData.mediumTypes.length} different growing medium options</span>
                            </motion.li>
                          )}
                          
                          {currentSlideData?.techniques && (
                            <motion.li
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                              className="flex items-start text-emerald-700"
                            >
                              <FaCircleCheck className="w-5 h-5 text-emerald-500 mr-4 flex-shrink-0 mt-1" />
                              <span className="leading-relaxed">Master {currentSlideData.techniques.length} essential techniques</span>
                            </motion.li>
                          )}
                          
                          {currentSlideData?.problems && (
                            <motion.li
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 }}
                              className="flex items-start text-emerald-700"
                            >
                              <FaCircleCheck className="w-5 h-5 text-emerald-500 mr-4 flex-shrink-0 mt-1" />
                              <span className="leading-relaxed">Solve {currentSlideData.problems.length} common problems</span>
                            </motion.li>
                          )}
                          
                          {currentSlideData?.workshop && (
                            <motion.li
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 }}
                              className="flex items-start text-emerald-700"
                            >
                              <FaCircleCheck className="w-5 h-5 text-emerald-500 mr-4 flex-shrink-0 mt-1" />
                              <span className="leading-relaxed">Complete hands-on workshop: {currentSlideData.workshop.title}</span>
                            </motion.li>
                          )}
                        </>
                      )}
                    </ul>
                    
                    {/* Progress for this lesson */}
                    <div className="mt-8 pt-8 border-t border-emerald-200">
                      <div className="flex items-center justify-between text-emerald-700 mb-3">
                        <span className="font-medium">Lesson Progress</span>
                        <span className="font-bold">{getLessonProgressPercentage()}%</span>
                      </div>
                      <div className="bg-emerald-200 rounded-full h-3">
                        <div 
                          className="bg-emerald-500 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${getLessonProgressPercentage()}%` }}
                        />
                      </div>
                      
                      {/* Current slide indicator */}
                      {currentLessonContent && (
                        <div className="mt-4 text-sm text-emerald-600">
                          <div className="flex items-center justify-between mb-2">
                            <span>Slide {currentSlideIndex + 1} of {currentLessonContent.slides.length}</span>
                            <span className="text-xs bg-emerald-100 px-2 py-1 rounded-full">
                              {currentSlideData?.type || 'content'}
                            </span>
                          </div>
                          <div className="flex space-x-1">
                            {currentLessonContent.slides.map((_, index) => (
                              <div
                                key={index}
                                className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                                  index <= currentSlideIndex 
                                    ? 'bg-emerald-400' 
                                    : 'bg-emerald-200'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Controls - Outside Content */}
              <div className="max-w-6xl mx-auto px-4 md:px-8 pb-6 md:pb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-emerald-100/50 shadow-lg">
                  <div className="flex items-center justify-between flex-wrap gap-3 md:gap-0">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={prevSlide}
                      disabled={currentLessonId === 1 && currentSlideIndex === 0}
                      className={`flex items-center space-x-2 px-3 md:px-4 py-3 md:py-2 rounded-xl font-medium transition-all duration-300 text-sm md:text-base ${
                        currentLessonId === 1 && currentSlideIndex === 0
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-gray-700 hover:bg-emerald-50 shadow-sm border border-gray-300'
                      }`}
                    >
                      <FaArrowLeft className="w-4 h-4" />
                      <span className="hidden sm:inline">Previous</span>
                      <span className="sm:hidden">Prev</span>
                    </motion.button>

                    {/* Progress */}
                    <div className="text-center order-first w-full md:order-none md:w-auto">
                      <div className="text-xs text-gray-500 mb-1 hidden md:block">Lesson Progress</div>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="bg-gray-300 rounded-full h-2 w-20 md:w-24">
                          <div 
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${getLessonProgressPercentage()}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-600">{getLessonProgressPercentage()}%</span>
                      </div>
                    </div>

                    {/* Next Button */}
                    <div className="flex items-center space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={nextSlide}
                        disabled={!currentLessonContent || (currentSlideIndex === currentLessonContent.slides.length - 1 && (!getNextLesson(currentLessonId) || !isLessonAvailable(getNextLesson(currentLessonId))))}
                        className={`flex items-center space-x-2 px-3 md:px-4 py-3 md:py-2 rounded-xl font-medium transition-all duration-300 text-sm md:text-base ${
                          !currentLessonContent || (currentSlideIndex === currentLessonContent.slides.length - 1 && (!getNextLesson(currentLessonId) || !isLessonAvailable(getNextLesson(currentLessonId))))
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-md'
                        }`}
                      >
                        <span>
                          {currentLessonContent && currentSlideIndex === currentLessonContent.slides.length - 1 
                            ? (getNextLesson(currentLessonId) && isLessonAvailable(getNextLesson(currentLessonId)) ? 
                               <>
                                 <span className="hidden sm:inline">Next Lesson</span>
                                 <span className="sm:hidden">Next</span>
                               </> : 
                               <>
                                 <span className="hidden sm:inline">Course Complete</span>
                                 <span className="sm:hidden">Done</span>
                               </>)
                            : <>
                                <span className="hidden sm:inline">Next Slide</span>
                                <span className="sm:hidden">Next</span>
                              </>
                          }
                        </span>
                        <FaArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>



      </div>
    </div>
  );
};

export default MicrogreensBasics; 