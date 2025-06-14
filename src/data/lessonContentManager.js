import { lesson1Content } from './lessonContent/module1/lesson1.js';
import { lesson2Content } from './lessonContent/module1/lesson2.js';
import { lesson3Content } from './lessonContent/module1/lesson3.js';
import { lesson4Content } from './lessonContent/module1/lesson4.js';
import { module2Content } from './lessonContent/module2';
import { module3Content } from './lessonContent/module3';
import module4Content from './lessonContent/module4';

// Lesson content registry
const lessonRegistry = {
  1: lesson1Content,
  2: lesson2Content,
  3: lesson3Content,
  4: lesson4Content,
  // Module 2 lessons
  5: module2Content.lessons[0], // Watering Techniques
  6: module2Content.lessons[1], // Nutrient Management
  7: module2Content.lessons[2], // Disease and Pest Management
  8: module2Content.lessons[3], // Environmental Control
  // Module 3 lessons
  9: module3Content.lessons[0], // Harvest Timing and Indicators
  10: module3Content.lessons[1], // Harvesting Techniques and Tools
  11: module3Content.lessons[2], // Post-Harvest Handling
  12: module3Content.lessons[3], // Market Preparation
  // Module 4 lessons
  13: module4Content.lessons[0].content,
  14: module4Content.lessons[1].content,
  15: module4Content.lessons[2].content,
  16: module4Content.lessons[3].content
};

// Course structure with lesson mapping
export const courseStructure = {
  title: "Microgreens Basics",
  description: "Master the fundamentals of microgreens cultivation",
  modules: [
    {
      id: 1,
      title: "Growing Techniques",
      description: "Master fundamental growing techniques",
      lessons: [1, 2, 3, 4]
    },
    {
      id: 2,
      title: "Plant Care Basics",
      description: "Learn essential plant care practices",
      lessons: [5, 6, 7, 8]
    },
    {
      id: 3,
      title: "Harvest Methods",
      description: "Master harvesting and post-harvest handling",
      lessons: [9, 10, 11, 12]
    },
    {
      id: 4,
      title: "Problem Solving",
      description: "Identify and solve common problems",
      lessons: [13, 14, 15, 16]
    }
  ]
};

// Get lesson content by ID
export const getLessonContent = (lessonId) => {
  return lessonRegistry[lessonId] || null;
};

// Get all slides for a specific lesson
export const getLessonSlides = (lessonId) => {
  const lesson = getLessonContent(lessonId);
  return lesson ? lesson.slides : [];
};

// Get specific slide from a lesson
export const getLessonSlide = (lessonId, slideIndex) => {
  const slides = getLessonSlides(lessonId);
  return slides[slideIndex] || null;
};

// Get lesson info
export const getLessonInfo = (lessonId) => {
  const lesson = getLessonContent(lessonId);
  return lesson ? lesson.lessonInfo : null;
};

// Get module info by lesson ID
export const getModuleByLessonId = (lessonId) => {
  for (const module of courseStructure.modules) {
    if (module.lessons.includes(lessonId)) {
      return module;
    }
  }
  return null;
};

// Get lesson progress info
export const getLessonProgress = (lessonId, completedSlides = new Set()) => {
  const lesson = getLessonContent(lessonId);
  if (!lesson) return { total: 0, completed: 0, percentage: 0 };
  
  const totalSlides = lesson.slides.length;
  const completedCount = Array.from(completedSlides).filter(slideIndex => 
    slideIndex >= 0 && slideIndex < totalSlides
  ).length;
  
  return {
    total: totalSlides,
    completed: completedCount,
    percentage: totalSlides > 0 ? Math.round((completedCount / totalSlides) * 100) : 0
  };
};

// Check if lesson is available (has content)
export const isLessonAvailable = (lessonId) => {
  return lessonRegistry[lessonId] !== null;
};

// Get next available lesson
export const getNextLesson = (currentLessonId) => {
  const currentModule = getModuleByLessonId(currentLessonId);
  if (!currentModule) return null;
  
  const currentIndex = currentModule.lessons.indexOf(currentLessonId);
  if (currentIndex === -1 || currentIndex === currentModule.lessons.length - 1) {
    // Look for next module's first lesson
    const moduleIndex = courseStructure.modules.findIndex(m => m.id === currentModule.id);
    if (moduleIndex < courseStructure.modules.length - 1) {
      const nextModule = courseStructure.modules[moduleIndex + 1];
      return nextModule.lessons[0];
    }
    return null; // No more lessons
  }
  
  return currentModule.lessons[currentIndex + 1];
};

// Get previous lesson
export const getPreviousLesson = (currentLessonId) => {
  const currentModule = getModuleByLessonId(currentLessonId);
  if (!currentModule) return null;
  
  const currentIndex = currentModule.lessons.indexOf(currentLessonId);
  if (currentIndex === -1 || currentIndex === 0) {
    // Look for previous module's last lesson
    const moduleIndex = courseStructure.modules.findIndex(m => m.id === currentModule.id);
    if (moduleIndex > 0) {
      const prevModule = courseStructure.modules[moduleIndex - 1];
      return prevModule.lessons[prevModule.lessons.length - 1];
    }
    return null; // No previous lessons
  }
  
  return currentModule.lessons[currentIndex - 1];
};

// Get overall course progress
export const getCourseProgress = (completedLessons = new Set()) => {
  const totalLessons = courseStructure.modules.reduce((total, module) => 
    total + module.lessons.length, 0
  );
  
  const completedCount = Array.from(completedLessons).filter(lessonId => 
    courseStructure.modules.some(module => module.lessons.includes(lessonId))
  ).length;
  
  return {
    total: totalLessons,
    completed: completedCount,
    percentage: totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0
  };
};

export default {
  courseStructure,
  getLessonContent,
  getLessonSlides,
  getLessonSlide,
  getLessonInfo,
  getModuleByLessonId,
  getLessonProgress,
  isLessonAvailable,
  getNextLesson,
  getPreviousLesson,
  getCourseProgress
}; 