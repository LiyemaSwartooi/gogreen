export const lesson2Content = {
  lessonInfo: {
    id: 2,
    module: "Plant Care Basics",
    title: "Nutrient Management",
    description: "Learn essential nutrient requirements and feeding techniques for optimal microgreen growth.",
    estimatedTime: "50 minutes",
    difficulty: "Intermediate",
    totalSlides: 7
  },

  slides: [
    {
      id: 0,
      type: "introduction",
      title: "Welcome to Lesson 2: Nutrient Management",
      content: "Understanding and managing nutrients is crucial for healthy microgreen growth. In this lesson, you'll master nutrient requirements, deficiency identification, and feeding techniques.",
      keyPoints: [
        "Essential nutrient requirements",
        "Nutrient deficiency symptoms",
        "Feeding schedules and techniques",
        "Organic vs. synthetic nutrients"
      ],
      learningObjectives: [
        "Identify essential nutrients for microgreens",
        "Recognize nutrient deficiency symptoms",
        "Develop effective feeding schedules",
        "Choose appropriate nutrient solutions"
      ]
    },
    {
      id: 1,
      type: "technique",
      title: "Essential Nutrients Overview",
      content: "Understanding the key nutrients required for microgreen growth.",
      nutrients: {
        macronutrients: [
          {
            name: "Nitrogen (N)",
            role: "Leaf growth and chlorophyll production",
            deficiencySymptoms: [
              "Yellowing of older leaves",
              "Stunted growth",
              "Thin stems"
            ],
            sources: [
              "Fish emulsion",
              "Blood meal",
              "Balanced liquid fertilizers"
            ]
          },
          {
            name: "Phosphorus (P)",
            role: "Root development and energy transfer",
            deficiencySymptoms: [
              "Purple leaf tints",
              "Slow growth",
              "Poor root development"
            ],
            sources: [
              "Bone meal",
              "Rock phosphate",
              "Balanced liquid fertilizers"
            ]
          },
          {
            name: "Potassium (K)",
            role: "Overall plant health and stress resistance",
            deficiencySymptoms: [
              "Leaf edge browning",
              "Weak stems",
              "Poor water regulation"
            ],
            sources: [
              "Kelp meal",
              "Wood ash",
              "Balanced liquid fertilizers"
            ]
          }
        ],
        micronutrients: [
          {
            name: "Iron (Fe)",
            role: "Chlorophyll synthesis",
            deficiencySymptoms: ["Yellowing between leaf veins"]
          },
          {
            name: "Calcium (Ca)",
            role: "Cell wall strength",
            deficiencySymptoms: ["Distorted new growth"]
          },
          {
            name: "Magnesium (Mg)",
            role: "Chlorophyll component",
            deficiencySymptoms: ["Yellowing from leaf edges"]
          }
        ]
      }
    },
    {
      id: 2,
      type: "technique",
      title: "Nutrient Solution Preparation",
      content: "Learn to prepare and apply nutrient solutions correctly.",
      preparation: {
        steps: [
          {
            step: "Solution Mixing",
            instructions: [
              "Use clean container",
              "Add room temperature water",
              "Measure nutrients precisely",
              "Mix thoroughly",
              "Check final pH"
            ],
            tips: [
              "Always add nutrients to water, not water to nutrients",
              "Mix in well-ventilated area",
              "Use protective equipment",
              "Store solutions properly"
            ]
          },
          {
            step: "Application Methods",
            instructions: [
              "Bottom feeding preferred",
              "Light foliar feeding optional",
              "Apply during active growth",
              "Monitor plant response",
              "Adjust concentration if needed"
            ],
            cautions: [
              "Avoid leaf burn",
              "Don't overfeed",
              "Maintain consistent schedule",
              "Clean equipment after use"
            ]
          }
        ],
        concentrations: {
          seedling: "Quarter strength",
          activeGrowth: "Half strength",
          mature: "Full strength",
          notes: "Always start weaker and adjust based on response"
        }
      }
    },
    {
      id: 3,
      type: "hands-on",
      title: "Nutrient Management Workshop",
      content: "Practice preparing and applying nutrient solutions.",
      workshop: {
        title: "Nutrient Solution Preparation and Application",
        duration: "45 minutes",
        setup: {
          materials: [
            "Various nutrient solutions",
            "Measuring tools",
            "pH meter",
            "EC meter",
            "Spray bottles",
            "Growing trays"
          ],
          safety: [
            "Wear gloves",
            "Use in ventilated area",
            "Keep solutions labeled",
            "Clean all equipment"
          ]
        },
        exercises: [
          {
            name: "Solution Preparation",
            steps: [
              "Measure water volume",
              "Calculate nutrient amounts",
              "Mix solutions",
              "Test pH and EC",
              "Adjust if necessary"
            ]
          },
          {
            name: "Application Practice",
            steps: [
              "Bottom feeding setup",
              "Foliar application",
              "Monitoring technique",
              "Clean-up procedures"
            ]
          }
        ]
      }
    },
    {
      id: 4,
      type: "calculation",
      title: "Nutrient Calculations",
      content: "Learn to calculate proper nutrient concentrations.",
      calculations: [
        {
          concept: "Nutrient Solution Strength",
          formula: "Parts Per Million (ppm) = (mL nutrient × strength) ÷ L water × 1000",
          explanation: "Calculate nutrient concentration in ppm",
          example: {
            nutrientAmount: "2mL",
            waterVolume: "1L",
            strength: "2%",
            calculation: "(2 × 0.02) ÷ 1 × 1000 = 40ppm"
          }
        },
        {
          concept: "Feed Schedule",
          formula: "Weekly nutrient need = Base rate × Growth stage factor × Tray count",
          explanation: "Calculate weekly nutrient solution requirements",
          example: {
            baseRate: "100mL per tray",
            growthFactor: "1.5 (active growth)",
            trayCount: "10",
            calculation: "100 × 1.5 × 10 = 1500mL per week"
          }
        }
      ]
    },
    {
      id: 5,
      type: "quality",
      title: "Quality Control and Monitoring",
      content: "Learn to monitor nutrient levels and plant health.",
      monitoring: {
        parameters: [
          {
            parameter: "EC (Electrical Conductivity)",
            optimal: "1.0-1.5 mS/cm",
            frequency: "Daily",
            method: "EC meter reading"
          },
          {
            parameter: "pH",
            optimal: "5.5-6.5",
            frequency: "Daily",
            method: "pH meter or strips"
          },
          {
            parameter: "Plant Color",
            optimal: "Deep green",
            frequency: "Daily",
            method: "Visual inspection"
          }
        ],
        recordKeeping: [
          "Date and time of feeding",
          "Solution composition",
          "Plant response",
          "Environmental conditions",
          "Adjustments made"
        ]
      }
    },
    {
      id: 6,
      type: "summary",
      title: "Lesson 2 Summary and Assessment",
      content: "Review your understanding of nutrient management and prepare for the next lesson.",
      summary: {
        keyLearnings: [
          "Essential nutrient requirements",
          "Solution preparation techniques",
          "Application methods",
          "Monitoring and adjustment",
          "Quality control procedures"
        ],
        skillsAcquired: [
          "Nutrient solution preparation",
          "Deficiency identification",
          "Application techniques",
          "Monitoring methods",
          "Problem resolution"
        ],
        practicalExperience: [
          "Solution mixing",
          "Application practice",
          "Monitoring procedures",
          "Record keeping"
        ]
      },
      assessment: {
        title: "Nutrient Management Assessment",
        tasks: [
          {
            task: "Solution Preparation",
            description: "Prepare nutrient solutions at various concentrations",
            criteria: [
              "Accurate measurements",
              "Proper mixing technique",
              "Correct pH adjustment",
              "Safety procedures followed"
            ]
          },
          {
            task: "Deficiency Identification",
            description: "Identify nutrient deficiencies from plant symptoms",
            criteria: [
              "Accurate diagnosis",
              "Appropriate solutions",
              "Prevention strategies",
              "Documentation"
            ]
          }
        ]
      },
      nextSteps: {
        title: "Preparing for Lesson 3: Disease and Pest Management",
        preview: "Next, you'll learn to identify, prevent, and manage common microgreen pests and diseases.",
        topics: [
          "Common pest identification",
          "Disease recognition",
          "Prevention strategies",
          "Organic control methods"
        ],
        preparation: [
          "Review plant health indicators",
          "Gather monitoring tools",
          "Document current practices",
          "Prepare observation samples"
        ]
      }
    }
  ]
};

export default lesson2Content; 