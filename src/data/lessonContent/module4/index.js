import lesson1Content from './lesson1';
import lesson2Content from './lesson2';
import lesson3Content from './lesson3';
import lesson4Content from './lesson4';

export const module4Content = {
  moduleInfo: {
    id: 4,
    title: "Problem Solving",
    description: "Master the skills to identify, prevent, and manage common problems in microgreens cultivation.",
    totalLessons: 4,
    difficulty: "Intermediate",
    estimatedTime: "3 hours"
  },

  lessons: [
    {
      id: 13,
      title: "Common Growth Issues",
      description: "Learn to identify, diagnose, and resolve common growth problems in microgreens cultivation.",
      content: lesson1Content
    },
    {
      id: 14,
      title: "Disease Management",
      description: "Learn to identify, prevent, and manage common diseases in microgreens cultivation.",
      content: lesson2Content
    },
    {
      id: 15,
      title: "Pest Control",
      description: "Learn to identify, prevent, and manage common pests in microgreens cultivation.",
      content: lesson3Content
    },
    {
      id: 16,
      title: "Environmental Stress",
      description: "Learn to identify, prevent, and manage environmental stress in microgreens cultivation.",
      content: lesson4Content
    }
  ]
};

export default module4Content; 