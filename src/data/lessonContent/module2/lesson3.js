export const lesson3Content = {
  lessonInfo: {
    id: 3,
    module: "Plant Care Basics",
    title: "Disease and Pest Management",
    description: "Learn to identify, prevent, and manage common microgreen pests and diseases using organic methods.",
    estimatedTime: "55 minutes",
    difficulty: "Intermediate",
    totalSlides: 7
  },

  slides: [
    {
      id: 0,
      type: "introduction",
      title: "Welcome to Lesson 3: Disease and Pest Management",
      content: "Effective pest and disease management is crucial for successful microgreen production. Learn to identify, prevent, and control common issues using organic methods.",
      keyPoints: [
        "Common pest identification",
        "Disease recognition",
        "Prevention strategies",
        "Organic control methods"
      ],
      learningObjectives: [
        "Identify common pests and diseases",
        "Implement prevention strategies",
        "Apply organic control methods",
        "Maintain crop health records"
      ]
    },
    {
      id: 1,
      type: "technique",
      title: "Common Pests and Diseases",
      content: "Learn to identify and understand common microgreen pests and diseases.",
      issues: {
        pests: [
          {
            name: "Aphids",
            description: "Small, soft-bodied insects that cluster on leaves",
            symptoms: [
              "Curled leaves",
              "Sticky residue",
              "Yellowing plants",
              "Visible insects"
            ],
            prevention: [
              "Good air circulation",
              "Regular inspection",
              "Clean growing environment",
              "Proper spacing"
            ],
            organicControl: [
              "Neem oil spray",
              "Insecticidal soap",
              "Beneficial insects",
              "Physical removal"
            ]
          },
          {
            name: "Fungus Gnats",
            description: "Small flying insects in growing medium",
            symptoms: [
              "Flying insects near soil",
              "Weak growth",
              "Root damage",
              "Wilting"
            ],
            prevention: [
              "Avoid overwatering",
              "Use sterile media",
              "Yellow sticky traps",
              "Good drainage"
            ],
            organicControl: [
              "Beneficial nematodes",
              "Hydrogen peroxide solution",
              "Sticky traps",
              "Soil drying"
            ]
          }
        ],
        diseases: [
          {
            name: "Damping Off",
            description: "Fungal disease affecting seedlings",
            symptoms: [
              "Collapsed stems",
              "Wilting seedlings",
              "Brown/black stem base",
              "Poor germination"
            ],
            prevention: [
              "Good air circulation",
              "Clean equipment",
              "Proper spacing",
              "Avoid overwatering"
            ],
            treatment: [
              "Remove affected plants",
              "Improve ventilation",
              "Adjust watering",
              "Use sterile media"
            ]
          },
          {
            name: "Powdery Mildew",
            description: "White powdery growth on leaves",
            symptoms: [
              "White powder on leaves",
              "Yellowing leaves",
              "Stunted growth",
              "Leaf distortion"
            ],
            prevention: [
              "Good air circulation",
              "Proper humidity",
              "Adequate spacing",
              "Clean environment"
            ],
            treatment: [
              "Neem oil spray",
              "Potassium bicarbonate",
              "Remove affected parts",
              "Improve ventilation"
            ]
          }
        ]
      }
    },
    {
      id: 2,
      type: "technique",
      title: "Prevention Strategies",
      content: "Learn effective prevention methods for pest and disease control.",
      strategies: {
        environmental: [
          {
            factor: "Air Circulation",
            importance: "Prevents fungal growth and strengthens stems",
            implementation: [
              "Use fans for air movement",
              "Proper tray spacing",
              "Regular ventilation",
              "Monitor humidity levels"
            ]
          },
          {
            factor: "Sanitation",
            importance: "Prevents disease spread and pest establishment",
            implementation: [
              "Clean tools regularly",
              "Sanitize growing areas",
              "Remove plant debris",
              "Use clean water"
            ]
          },
          {
            factor: "Growing Conditions",
            importance: "Creates unfavorable environment for pests/diseases",
            implementation: [
              "Proper temperature",
              "Controlled humidity",
              "Adequate lighting",
              "Good drainage"
            ]
          }
        ],
        culturalPractices: [
          {
            practice: "Crop Rotation",
            benefits: [
              "Breaks disease cycles",
              "Reduces pest pressure",
              "Maintains soil health",
              "Improves yields"
            ]
          },
          {
            practice: "Plant Spacing",
            benefits: [
              "Improves air flow",
              "Reduces disease spread",
              "Easier monitoring",
              "Better growth"
            ]
          }
        ]
      }
    },
    {
      id: 3,
      type: "hands-on",
      title: "Pest and Disease Management Workshop",
      content: "Practice identifying and managing common pest and disease issues.",
      workshop: {
        title: "Identification and Management Practice",
        duration: "40 minutes",
        setup: {
          materials: [
            "Magnifying glass",
            "Inspection tools",
            "Recording sheets",
            "Sample plants",
            "Treatment supplies",
            "Safety equipment"
          ],
          safety: [
            "Wear gloves",
            "Use proper PPE",
            "Follow safety guidelines",
            "Proper disposal methods"
          ]
        },
        exercises: [
          {
            name: "Pest Identification",
            steps: [
              "Visual inspection",
              "Symptom recognition",
              "Documentation",
              "Treatment planning"
            ]
          },
          {
            name: "Disease Assessment",
            steps: [
              "Symptom analysis",
              "Environmental assessment",
              "Treatment selection",
              "Prevention planning"
            ]
          }
        ]
      }
    },
    {
      id: 4,
      type: "calculation",
      title: "Treatment Calculations",
      content: "Learn to calculate proper treatment concentrations and applications.",
      calculations: [
        {
          concept: "Neem Oil Solution",
          formula: "mL neem oil = (Surface area ft² × 2mL) ÷ Coverage rate",
          explanation: "Calculate neem oil needed for foliar spray",
          example: {
            area: "100 ft²",
            coverageRate: "50 ft²/L",
            calculation: "(100 × 2) ÷ 50 = 4mL neem oil per liter"
          }
        },
        {
          concept: "Hydrogen Peroxide Solution",
          formula: "H₂O₂ solution = Water volume × Dilution factor",
          explanation: "Calculate H₂O₂ for soil treatment",
          example: {
            waterVolume: "1L",
            dilutionFactor: "0.03",
            calculation: "1L × 0.03 = 30mL H₂O₂ per liter"
          }
        }
      ]
    },
    {
      id: 5,
      type: "quality",
      title: "Monitoring and Documentation",
      content: "Learn effective monitoring and record-keeping practices.",
      monitoring: {
        dailyChecks: [
          {
            task: "Visual Inspection",
            frequency: "Daily",
            focus: [
              "Leaf appearance",
              "Pest presence",
              "Disease symptoms",
              "Plant vigor"
            ]
          },
          {
            task: "Environmental Monitoring",
            frequency: "Daily",
            parameters: [
              "Temperature",
              "Humidity",
              "Air circulation",
              "Light levels"
            ]
          }
        ],
        recordKeeping: {
          categories: [
            {
              name: "Pest Observations",
              details: [
                "Type of pest",
                "Location found",
                "Population level",
                "Date observed"
              ]
            },
            {
              name: "Treatment Records",
              details: [
                "Treatment type",
                "Application date",
                "Concentration used",
                "Effectiveness"
              ]
            },
            {
              name: "Prevention Measures",
              details: [
                "Sanitation schedule",
                "Environmental controls",
                "Cultural practices",
                "Inspection results"
              ]
            }
          ]
        }
      }
    },
    {
      id: 6,
      type: "summary",
      title: "Lesson 3 Summary and Assessment",
      content: "Review your understanding of pest and disease management and prepare for the next lesson.",
      summary: {
        keyLearnings: [
          "Pest and disease identification",
          "Prevention strategies",
          "Organic control methods",
          "Monitoring techniques",
          "Record keeping practices"
        ],
        skillsAcquired: [
          "Problem identification",
          "Treatment application",
          "Prevention implementation",
          "Documentation methods",
          "Risk assessment"
        ],
        practicalExperience: [
          "Pest identification",
          "Disease diagnosis",
          "Treatment preparation",
          "Monitoring practice"
        ]
      },
      assessment: {
        title: "Pest and Disease Management Assessment",
        tasks: [
          {
            task: "Problem Identification",
            description: "Identify common pests and diseases from symptoms",
            criteria: [
              "Accurate identification",
              "Proper documentation",
              "Treatment selection",
              "Prevention planning"
            ]
          },
          {
            task: "Treatment Application",
            description: "Demonstrate proper treatment preparation and application",
            criteria: [
              "Correct calculations",
              "Safe application",
              "Proper timing",
              "Effective monitoring"
            ]
          }
        ]
      },
      nextSteps: {
        title: "Preparing for Lesson 4: Environmental Control",
        preview: "Next, you'll learn about managing environmental factors for optimal microgreen growth.",
        topics: [
          "Temperature management",
          "Humidity control",
          "Light requirements",
          "Air circulation"
        ],
        preparation: [
          "Review current conditions",
          "Gather monitoring tools",
          "Document environment",
          "Prepare adjustment plans"
        ]
      }
    }
  ]
};

export default lesson3Content; 