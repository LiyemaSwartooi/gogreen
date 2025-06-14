export const microgreensLessons = {
  // Module 1: Growing Techniques
  0: {
    id: 0,
    module: "Growing Techniques",
    title: "Module 1: Growing Techniques Overview",
    type: "module_overview",
    content: "Welcome to Module 1! In this module, you'll master the fundamental techniques for growing healthy, vibrant microgreens from seed to harvest.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    keyPoints: [
      "Learn proper seed selection and preparation",
      "Master growing medium setup and maintenance", 
      "Understand optimal growing conditions",
      "Develop consistent watering techniques"
    ],
    moduleGoals: [
      "Set up your first microgreens growing system",
      "Understand the complete growing process",
      "Identify quality seeds and growing materials",
      "Create optimal growing environments"
    ]
  },

  1: {
    id: 1,
    module: "Growing Techniques", 
    title: "Seed Selection and Preparation",
    type: "lesson",
    content: "The foundation of successful microgreens starts with choosing the right seeds and preparing them properly for optimal germination.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    keyPoints: [
      "Identify high-quality microgreen seeds",
      "Understand seed storage requirements",
      "Learn pre-soaking techniques",
      "Calculate proper seeding density"
    ],
    learningObjectives: [
      "Select appropriate seeds for microgreen production",
      "Properly store seeds to maintain viability",
      "Apply correct pre-treatment methods",
      "Calculate seeding rates for different varieties"
    ],
    stepByStep: [
      {
        step: 1,
        title: "Choose Quality Seeds",
        description: "Select seeds specifically labeled for microgreens or sprouting. Avoid treated seeds meant for field planting.",
        tips: ["Look for high germination rates (85%+)", "Choose organic when possible", "Check expiration dates"]
      },
      {
        step: 2,
        title: "Test Germination Rate",
        description: "Before large plantings, test a small sample to ensure good germination rates.",
        tips: ["Use 10-20 seeds for testing", "Expect results in 2-3 days", "Aim for 80%+ germination"]
      },
      {
        step: 3,
        title: "Pre-soak Large Seeds",
        description: "Larger seeds like peas, sunflowers, and beans benefit from 8-12 hours of soaking.",
        tips: ["Use room temperature water", "Drain thoroughly after soaking", "Plant immediately after soaking"]
      },
      {
        step: 4,
        title: "Calculate Seeding Density",
        description: "Use proper seeding rates: 1-2 oz per 10x20 tray for most varieties.",
        tips: ["Small seeds need less density", "Large seeds need more space", "Adjust based on variety"]
      }
    ],
    commonMistakes: [
      "Using garden seeds instead of microgreen seeds",
      "Over-soaking small seeds",
      "Planting too densely causing mold issues",
      "Using old seeds with poor viability"
    ],
    practicalExercise: {
      title: "Seed Selection Challenge",
      description: "Practice identifying quality microgreen seeds and calculating seeding rates for a 10x20 tray.",
      materials: ["Various seed samples", "Scale", "Calculator", "10x20 tray"],
      timeRequired: "30 minutes"
    }
  },

  2: {
    id: 2,
    module: "Growing Techniques",
    title: "Growing Medium Setup",
    type: "lesson", 
    content: "Learn how to prepare and maintain the perfect growing environment for your microgreens using various growing mediums.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    keyPoints: [
      "Compare different growing mediums",
      "Prepare soil-based growing mixes",
      "Set up hydroponic growing systems",
      "Maintain proper moisture levels"
    ],
    learningObjectives: [
      "Choose appropriate growing medium for different crops",
      "Prepare sterile growing environments",
      "Maintain consistent moisture without overwatering",
      "Troubleshoot common medium-related issues"
    ],
    stepByStep: [
      {
        step: 1,
        title: "Choose Your Growing Medium",
        description: "Select between soil mix, coconut coir, hemp mats, or hydroponic pads based on your setup and preferences.",
        tips: ["Soil mix: versatile, nutrient-rich", "Coco coir: sustainable, good drainage", "Hemp mats: reusable, eco-friendly"]
      },
      {
        step: 2,
        title: "Prepare Soil-Based Medium",
        description: "Mix high-quality potting soil with perlite for drainage (3:1 ratio).",
        tips: ["Use sterile potting mix", "Add perlite for aeration", "Moisten before use"]
      },
      {
        step: 3,
        title: "Fill Growing Trays",
        description: "Add 1-2 inches of growing medium to your trays, level and lightly compress.",
        tips: ["Don't pack too tightly", "Leave space for root development", "Ensure even distribution"]
      },
      {
        step: 4,
        title: "Pre-moisten Medium",
        description: "Lightly water the medium until evenly moist but not waterlogged.",
        tips: ["Use spray bottle for even distribution", "Medium should feel like wrung-out sponge", "Allow excess water to drain"]
      }
    ],
    mediumComparison: [
      {
        type: "Potting Soil Mix",
        pros: ["Nutrient-rich", "Easy to use", "Good for beginners"],
        cons: ["Can harbor pests", "Messy", "Heavier"],
        bestFor: ["Brassicas", "Herbs", "Leafy greens"]
      },
      {
        type: "Coconut Coir",
        pros: ["Sustainable", "Disease-resistant", "Good water retention"],
        cons: ["May need nutrients", "Can be dusty", "pH adjustment needed"],
        bestFor: ["Peas", "Sunflowers", "Radishes"]
      },
      {
        type: "Hemp Growing Mats",
        pros: ["Reusable", "Clean", "No soil mess"],
        cons: ["Higher initial cost", "Limited nutrients", "Requires careful watering"],
        bestFor: ["Wheatgrass", "Barley grass", "Small seeds"]
      }
    ],
    practicalExercise: {
      title: "Medium Preparation Lab",
      description: "Prepare three different growing mediums and compare their properties.",
      materials: ["Potting soil", "Perlite", "Coconut coir", "Hemp mats", "Growing trays"],
      timeRequired: "45 minutes"
    }
  },

  3: {
    id: 3,
    module: "Growing Techniques",
    title: "Optimal Growing Conditions",
    type: "lesson",
    content: "Master the environmental factors that determine microgreen success: light, temperature, humidity, and air circulation.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    keyPoints: [
      "Control temperature for optimal growth",
      "Provide appropriate lighting conditions", 
      "Manage humidity levels effectively",
      "Ensure proper air circulation"
    ],
    learningObjectives: [
      "Create optimal temperature ranges for different varieties",
      "Set up appropriate lighting systems",
      "Monitor and control humidity levels",
      "Design proper ventilation systems"
    ],
    stepByStep: [
      {
        step: 1,
        title: "Set Temperature Range",
        description: "Maintain 65-75°F (18-24°C) for most microgreens during germination and growth.",
        tips: ["Use thermometer to monitor", "Cooler temps slow growth", "Warmer temps increase disease risk"]
      },
      {
        step: 2,
        title: "Provide Adequate Lighting",
        description: "Use LED grow lights 12-16 hours daily, positioned 6-12 inches above plants.",
        tips: ["Start with lower intensity", "Increase as plants grow", "Use full spectrum LEDs"]
      },
      {
        step: 3,
        title: "Control Humidity",
        description: "Maintain 40-60% relative humidity to prevent mold while supporting growth.",
        tips: ["Use humidity meter", "Increase ventilation if too high", "Use humidity dome for germination"]
      },
      {
        step: 4,
        title: "Ensure Air Circulation",
        description: "Provide gentle air movement with fans to prevent stagnant air and mold growth.",
        tips: ["Use oscillating fans", "Avoid direct strong airflow", "Maintain consistent circulation"]
      }
    ],
    environmentalFactors: [
      {
        factor: "Temperature",
        optimal: "65-75°F (18-24°C)",
        effects: "Controls growth rate and disease susceptibility",
        monitoring: "Digital thermometer with min/max memory"
      },
      {
        factor: "Light",
        optimal: "12-16 hours daily, 20-40 DLI",
        effects: "Drives photosynthesis and determines color/flavor",
        monitoring: "Light meter or smartphone app"
      },
      {
        factor: "Humidity", 
        optimal: "40-60% RH",
        effects: "Affects disease pressure and growth rate",
        monitoring: "Digital hygrometer"
      },
      {
        factor: "Air Circulation",
        optimal: "Gentle, consistent movement",
        effects: "Prevents mold, strengthens stems",
        monitoring: "Visual observation of plant movement"
      }
    ],
    troubleshooting: [
      {
        problem: "Leggy, pale growth",
        cause: "Insufficient light",
        solution: "Increase light intensity or duration"
      },
      {
        problem: "Slow germination",
        cause: "Temperature too low",
        solution: "Increase temperature to 70-75°F"
      },
      {
        problem: "Mold growth",
        cause: "High humidity, poor air circulation",
        solution: "Increase ventilation, reduce watering"
      }
    ],
    practicalExercise: {
      title: "Environmental Monitoring Setup",
      description: "Set up monitoring systems and optimize growing conditions for your space.",
      materials: ["Thermometer", "Hygrometer", "Light meter", "Fan", "Timer"],
      timeRequired: "60 minutes"
    }
  },

  4: {
    id: 4,
    module: "Growing Techniques",
    title: "Watering Techniques and Schedules",
    type: "lesson",
    content: "Develop consistent watering practices that promote healthy growth while preventing common water-related problems.",
    image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    keyPoints: [
      "Master bottom watering techniques",
      "Understand proper watering frequency",
      "Prevent overwatering and underwatering",
      "Use appropriate water quality"
    ],
    learningObjectives: [
      "Implement effective bottom watering systems",
      "Develop watering schedules for different growth stages",
      "Identify and correct watering problems",
      "Ensure proper water quality for optimal growth"
    ],
    stepByStep: [
      {
        step: 1,
        title: "Set Up Bottom Watering",
        description: "Use trays with drainage holes placed in solid water trays for bottom watering.",
        tips: ["Ensure good drainage holes", "Use 1/4 inch water depth", "Allow 15-30 minutes for absorption"]
      },
      {
        step: 2,
        title: "Establish Watering Schedule",
        description: "Water daily during germination, then every 1-2 days during growth phase.",
        tips: ["Check soil moisture daily", "Water early morning", "Adjust based on humidity and temperature"]
      },
      {
        step: 3,
        title: "Monitor Water Quality",
        description: "Use filtered or dechlorinated water with pH 6.0-7.0 for best results.",
        tips: ["Test pH regularly", "Let tap water sit 24 hours to dechlorinate", "Consider water filtration"]
      },
      {
        step: 4,
        title: "Adjust for Growth Stage",
        description: "Reduce watering frequency as plants mature to prevent root rot and mold.",
        tips: ["Less water near harvest", "Watch for wilting signs", "Maintain consistent moisture"]
      }
    ],
    wateringMethods: [
      {
        method: "Bottom Watering",
        description: "Water absorbed from below through drainage holes",
        pros: ["Prevents leaf diseases", "Encourages deep roots", "More efficient"],
        cons: ["Requires proper drainage", "Can be slower", "Need to monitor absorption"],
        bestFor: "Most microgreens, especially dense plantings"
      },
      {
        method: "Misting",
        description: "Fine spray applied to soil surface",
        pros: ["Gentle on seeds", "Good for germination", "Easy to control"],
        cons: ["Can cause leaf diseases", "Uneven distribution", "Time consuming"],
        bestFor: "Seed germination phase only"
      },
      {
        method: "Drip Irrigation",
        description: "Automated system with controlled water delivery",
        pros: ["Consistent watering", "Automated", "Water efficient"],
        cons: ["Complex setup", "Higher cost", "Maintenance required"],
        bestFor: "Large-scale commercial operations"
      }
    ],
    waterQualityGuide: {
      pH: {
        optimal: "6.0-7.0",
        testing: "Use pH strips or digital meter",
        adjustment: "Add lemon juice to lower, baking soda to raise"
      },
      chlorine: {
        issue: "Can inhibit growth and beneficial microbes",
        solution: "Let tap water sit 24 hours or use dechlorinator"
      },
      hardness: {
        acceptable: "Moderate hardness is fine",
        issue: "Very hard water may cause nutrient lockout"
      },
      temperature: {
        optimal: "Room temperature (65-75°F)",
        avoid: "Very cold or hot water can shock plants"
      }
    },
    practicalExercise: {
      title: "Watering System Setup",
      description: "Create an efficient bottom watering system and establish a watering schedule.",
      materials: ["Growing trays", "Water trays", "pH test kit", "Measuring cup", "Timer"],
      timeRequired: "45 minutes"
    }
  },

  // Module 2: Plant Care Basics
  5: {
    id: 5,
    module: "Plant Care Basics",
    title: "Module 2: Plant Care Basics Overview", 
    type: "module_overview",
    content: "Welcome to Module 2! Learn essential plant care techniques to ensure healthy growth and maximize your microgreen yields.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    keyPoints: [
      "Monitor plant health and development",
      "Provide proper nutrition and fertilization",
      "Manage pests and diseases naturally",
      "Optimize growth through proper care timing"
    ],
    moduleGoals: [
      "Develop daily care routines",
      "Recognize healthy vs. unhealthy plants",
      "Apply organic pest and disease management",
      "Maximize yield through proper nutrition"
    ]
  },

  6: {
    id: 6,
    module: "Plant Care Basics",
    title: "Daily Monitoring and Maintenance",
    type: "lesson",
    content: "Establish effective daily routines to monitor plant health, catch problems early, and maintain optimal growing conditions.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    keyPoints: [
      "Create systematic monitoring routines",
      "Identify early warning signs",
      "Maintain growing environment consistency",
      "Keep detailed growing records"
    ],
    learningObjectives: [
      "Develop daily inspection habits",
      "Recognize signs of healthy growth",
      "Identify problems before they become serious",
      "Maintain consistent environmental conditions"
    ],
    stepByStep: [
      {
        step: 1,
        title: "Morning Health Check",
        description: "Inspect plants for color, growth rate, and any signs of stress or disease.",
        tips: ["Look for uniform green color", "Check for wilting or yellowing", "Note growth progress"]
      },
      {
        step: 2,
        title: "Environmental Monitoring",
        description: "Check temperature, humidity, and light levels to ensure optimal conditions.",
        tips: ["Record daily readings", "Adjust as needed", "Note any fluctuations"]
      },
      {
        step: 3,
        title: "Watering Assessment",
        description: "Check soil moisture and water as needed based on plant stage and conditions.",
        tips: ["Feel soil moisture", "Look for signs of over/under watering", "Adjust watering schedule"]
      },
      {
        step: 4,
        title: "Record Keeping",
        description: "Document observations, actions taken, and environmental conditions.",
        tips: ["Use growing log", "Note problems and solutions", "Track growth rates"]
      }
    ],
    monitoringChecklist: [
      "Plant color and vigor",
      "Growth rate and height",
      "Soil moisture level",
      "Temperature and humidity",
      "Light duration and intensity",
      "Air circulation",
      "Signs of pests or disease",
      "Overall tray condition"
    ],
    healthIndicators: {
      healthy: [
        "Vibrant green color",
        "Upright, sturdy stems",
        "Consistent growth rate",
        "No yellowing or browning",
        "Good root development"
      ],
      warning_signs: [
        "Pale or yellowing leaves",
        "Leggy, weak stems",
        "Slow or stunted growth",
        "Wilting despite adequate water",
        "Unusual odors"
      ],
      immediate_action: [
        "Brown or black spots",
        "Fuzzy mold growth",
        "Collapsed or rotting stems",
        "Strong unpleasant odors",
        "Visible pest activity"
      ]
    },
    practicalExercise: {
      title: "Daily Monitoring Routine",
      description: "Establish and practice a comprehensive daily monitoring routine.",
      materials: ["Growing log", "Thermometer", "Hygrometer", "Magnifying glass"],
      timeRequired: "30 minutes daily"
    }
  },

  // Continue with remaining lessons...
  // I'll add a few more key lessons to demonstrate the structure

  10: {
    id: 10,
    module: "Harvest Methods",
    title: "Module 3: Harvest Methods Overview",
    type: "module_overview", 
    content: "Welcome to Module 3! Master the techniques for harvesting, handling, and storing microgreens to maximize quality and shelf life.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    keyPoints: [
      "Learn optimal harvest timing",
      "Master clean cutting techniques",
      "Understand post-harvest handling",
      "Maximize storage life and quality"
    ],
    moduleGoals: [
      "Identify perfect harvest timing",
      "Use proper harvesting tools and techniques",
      "Handle harvested microgreens safely",
      "Extend shelf life through proper storage"
    ]
  },

  15: {
    id: 15,
    module: "Problem Solving",
    title: "Module 4: Problem Solving Overview",
    type: "module_overview",
    content: "Welcome to Module 4! Learn to identify, troubleshoot, and prevent common problems in microgreen production.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    keyPoints: [
      "Identify common growing problems",
      "Apply systematic troubleshooting",
      "Implement preventive measures",
      "Maintain consistent quality"
    ],
    moduleGoals: [
      "Diagnose problems quickly and accurately",
      "Apply effective solutions",
      "Prevent problems before they occur",
      "Maintain high-quality production standards"
    ]
  }
};

// Helper function to get lesson by ID
export const getLessonById = (id) => {
  return microgreensLessons[id] || null;
};

// Helper function to get all lessons for a module
export const getLessonsByModule = (moduleName) => {
  return Object.values(microgreensLessons).filter(lesson => lesson.module === moduleName);
};

// Helper function to check if lesson is module overview
export const isModuleOverview = (lessonId) => {
  const lesson = microgreensLessons[lessonId];
  return lesson && lesson.type === 'module_overview';
}; 