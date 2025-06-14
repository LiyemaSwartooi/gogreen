import lesson1Content from './lesson1';
import lesson2Content from './lesson2';
import lesson3Content from './lesson3';
import lesson4Content from './lesson4';

export const module2Content = {
  moduleInfo: {
    id: 2,
    title: "Plant Care Basics",
    description: "Master essential techniques for maintaining healthy microgreens through proper watering, nutrition, pest management, and environmental control.",
    totalLessons: 4,
    difficulty: "Intermediate",
    prerequisites: ["Module 1: Microgreens Basics"],
    estimatedTime: "3.5 hours"
  },
  lessons: [
    lesson1Content,
    lesson2Content,
    lesson3Content,
    lesson4Content
  ]
};

export default module2Content; 