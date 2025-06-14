export const lesson1Content = {
  lessonInfo: {
    id: 1,
    module: "Plant Care Basics",
    title: "Watering Techniques",
    description: "Master the fundamentals of proper watering techniques for healthy microgreen growth.",
    estimatedTime: "45 minutes",
    difficulty: "Beginner",
    totalSlides: 7
  },

  slides: [
    {
      id: 0,
      type: "introduction",
      title: "Welcome to Lesson 1: Watering Techniques",
      content: "Proper watering is crucial for microgreen success. In this lesson, you'll learn the science of water management and master various watering techniques.",
      keyPoints: [
        "Understand water quality and requirements",
        "Learn different watering methods",
        "Master bottom-watering techniques",
        "Prevent common watering issues"
      ],
      learningObjectives: [
        "Assess water quality and prepare optimal water solutions",
        "Apply different watering techniques effectively",
        "Monitor and maintain proper moisture levels",
        "Troubleshoot common watering problems"
      ]
    },
    {
      id: 1,
      type: "technique",
      title: "Water Quality and Preparation",
      content: "Learn how to prepare and maintain optimal water quality for microgreens.",
      waterQuality: {
        parameters: [
          {
            parameter: "pH Level",
            optimal: "5.5-6.5",
            description: "Most nutrients are available in this range",
            measurement: "Use pH meter or test strips",
            adjustment: "Add pH up/down solutions as needed"
          },
          {
            parameter: "Temperature",
            optimal: "65-70°F (18-21°C)",
            description: "Avoid shocking plants with cold water",
            measurement: "Use water thermometer",
            adjustment: "Let water stand at room temperature"
          },
          {
            parameter: "Chlorine Content",
            optimal: "0 ppm",
            description: "Chlorine can harm beneficial microorganisms",
            measurement: "Use chlorine test strips",
            adjustment: "Let water stand 24h or use dechlorinator"
          }
        ],
        tools: [
          "pH meter or test strips",
          "Water thermometer",
          "Chlorine test strips",
          "Storage containers",
          "pH adjustment solutions"
        ]
      }
    },
    {
      id: 2,
      type: "technique",
      title: "Watering Methods",
      content: "Explore different watering techniques and their applications.",
      methods: [
        {
          name: "Bottom Watering",
          description: "Water is absorbed through drainage holes",
          benefits: [
            "Promotes strong root growth",
            "Reduces risk of mold",
            "Even moisture distribution",
            "Less likely to damage delicate plants"
          ],
          steps: [
            "Fill tray with 1/4 inch water",
            "Place growing tray in water",
            "Allow 10-15 minutes absorption",
            "Remove and let drain",
            "Check moisture level"
          ]
        },
        {
          name: "Misting",
          description: "Fine spray application from above",
          benefits: [
            "Gentle on young seedlings",
            "Good for initial germination",
            "Maintains humidity",
            "Quick moisture boost"
          ],
          steps: [
            "Use fine mist sprayer",
            "Hold 12-18 inches above",
            "Spray evenly across surface",
            "Avoid oversaturation",
            "Monitor moisture level"
          ]
        }
      ]
    },
    {
      id: 3,
      type: "hands-on",
      title: "Watering Practice Workshop",
      content: "Practice different watering techniques and moisture management.",
      workshop: {
        title: "Watering Techniques Practice",
        duration: "30 minutes",
        setup: {
          materials: [
            "Multiple growing trays",
            "Water reservoir",
            "Spray bottle",
            "Moisture meter",
            "Timer",
            "pH testing kit"
          ],
          preparation: [
            "Prepare room temperature water",
            "Test and adjust pH if needed",
            "Set up bottom watering station",
            "Prepare misting bottles"
          ]
        },
        exercises: [
          {
            name: "Bottom Watering Practice",
            duration: "15 minutes",
            steps: [
              "Set up watering tray",
              "Practice proper water depth",
              "Time absorption period",
              "Check moisture distribution",
              "Document results"
            ]
          },
          {
            name: "Misting Technique",
            duration: "15 minutes",
            steps: [
              "Practice spray distance",
              "Achieve even coverage",
              "Monitor water volume",
              "Check leaf wetness",
              "Record observations"
            ]
          }
        ]
      }
    },
    {
      id: 4,
      type: "calculation",
      title: "Water Requirements Calculation",
      content: "Learn to calculate water requirements for different growing setups.",
      calculations: [
        {
          concept: "Daily Water Needs",
          formula: "Water (ml) = Tray Area (sq in) × Growth Stage Factor",
          explanation: "Calculate daily water requirements based on tray size and growth stage",
          example: {
            traySize: "10×20 inches (standard tray)",
            growthStage: "Early growth (factor: 0.8)",
            calculation: "200 sq in × 0.8 = 160ml per day",
            notes: "Adjust based on humidity and temperature"
          }
        },
        {
          concept: "Bottom Watering Volume",
          formula: "Water depth (inches) × Tray footprint (sq in)",
          explanation: "Calculate volume needed for bottom watering setup",
          example: {
            traySize: "10×20 inches",
            waterDepth: "0.25 inches",
            calculation: "0.25 × 200 = 50 cubic inches (820ml)",
            notes: "Convert to ml (1 cubic inch = 16.4ml)"
          }
        }
      ]
    },
    {
      id: 5,
      type: "quality",
      title: "Quality Control and Troubleshooting",
      content: "Learn to identify and solve common watering issues.",
      problems: [
        {
          issue: "Overwatering",
          symptoms: [
            "Yellowing leaves",
            "Mold growth",
            "Damping off",
            "Slow growth"
          ],
          solutions: [
            "Reduce watering frequency",
            "Improve air circulation",
            "Check drainage",
            "Monitor moisture levels"
          ]
        },
        {
          issue: "Underwatering",
          symptoms: [
            "Wilting",
            "Dry soil surface",
            "Uneven growth",
            "Stunted development"
          ],
          solutions: [
            "Increase watering frequency",
            "Check water absorption",
            "Verify drainage holes",
            "Adjust watering schedule"
          ]
        }
      ],
      preventiveMeasures: [
        "Regular moisture monitoring",
        "Proper drainage setup",
        "Consistent watering schedule",
        "Environmental control",
        "Quality water preparation"
      ]
    },
    {
      id: 6,
      type: "summary",
      title: "Lesson 1 Summary and Assessment",
      content: "Review your mastery of watering techniques and prepare for the next lesson.",
      summary: {
        keyLearnings: [
          "Water quality management",
          "Different watering techniques",
          "Moisture monitoring methods",
          "Problem identification and solutions",
          "Calculation of water requirements"
        ],
        skillsAcquired: [
          "Water quality testing and adjustment",
          "Bottom watering technique",
          "Misting application",
          "Moisture level monitoring",
          "Problem diagnosis and resolution"
        ],
        practicalExperience: [
          "Hands-on watering practice",
          "Water requirement calculations",
          "Quality control procedures",
          "Troubleshooting exercises"
        ]
      },
      assessment: {
        title: "Watering Techniques Assessment",
        tasks: [
          {
            task: "Water Quality Analysis",
            description: "Test and adjust water parameters for optimal growing conditions",
            criteria: [
              "Accurate pH measurement",
              "Proper temperature adjustment",
              "Chlorine content verification",
              "Solution preparation"
            ]
          },
          {
            task: "Watering Technique Demonstration",
            description: "Demonstrate mastery of different watering methods",
            criteria: [
              "Bottom watering execution",
              "Misting technique",
              "Moisture monitoring",
              "Problem identification"
            ]
          }
        ]
      },
      nextSteps: {
        title: "Preparing for Lesson 2: Nutrient Management",
        preview: "Next, you'll learn about essential nutrients and feeding schedules for optimal microgreen growth.",
        topics: [
          "Nutrient requirements by growth stage",
          "Fertilizer types and applications",
          "Nutrient deficiency identification",
          "Feeding schedule development"
        ],
        preparation: [
          "Review water quality notes",
          "Gather nutrient testing tools",
          "Prepare growing samples",
          "Document current practices"
        ]
      }
    }
  ]
};

export default lesson1Content; 