export const lesson2Content = {
  lessonInfo: {
    id: 10,
    module: "Harvest Methods",
    title: "Harvesting Techniques and Tools",
    description: "Master the proper techniques and tools for harvesting microgreens efficiently and safely.",
    estimatedTime: "60 minutes",
    difficulty: "Intermediate",
    totalSlides: 7
  },

  slides: [
    {
      id: 0,
      type: "introduction",
      title: "Welcome to Lesson 2: Harvesting Techniques and Tools",
      content: "Learn professional harvesting methods and proper tool selection for optimal microgreen harvest.",
      keyPoints: [
        "Essential harvesting tools",
        "Cutting techniques",
        "Safety protocols",
        "Efficiency methods"
      ],
      learningObjectives: [
        "Select appropriate harvesting tools",
        "Master cutting techniques",
        "Implement safety measures",
        "Optimize harvest efficiency"
      ]
    },
    {
      id: 1,
      type: "technique",
      title: "Essential Harvesting Tools",
      content: "Understanding and selecting the right tools for microgreen harvesting.",
      tools: {
        cutting: [
          {
            name: "Sharp Scissors",
            description: "Clean, sharp scissors for precise cuts",
            features: [
              "Stainless steel construction",
              "Easy to sanitize",
              "Ergonomic grip",
              "Sharp, precise blades"
            ],
            maintenance: [
              "Regular cleaning",
              "Proper storage",
              "Blade sharpening",
              "Sanitization"
            ]
          },
          {
            name: "Harvesting Knife",
            description: "Specialized knife for efficient harvesting",
            features: [
              "Long, straight blade",
              "Comfortable handle",
              "Balanced weight",
              "Easy to clean"
            ],
            maintenance: [
              "Daily sharpening",
              "Proper storage",
              "Regular sanitization",
              "Handle care"
            ]
          },
          {
            name: "Electric Trimmer",
            description: "Power tool for large-scale harvesting",
            features: [
              "Adjustable height",
              "Safety guards",
              "Rechargeable battery",
              "Multiple attachments"
            ],
            maintenance: [
              "Battery charging",
              "Blade cleaning",
              "Regular lubrication",
              "Safety checks"
            ]
          }
        ],
        collection: [
          {
            name: "Harvest Containers",
            description: "Clean containers for collected microgreens",
            requirements: [
              "Food-grade material",
              "Proper ventilation",
              "Easy to clean",
              "Stackable design"
            ]
          },
          {
            name: "Collection Trays",
            description: "Trays for temporary holding during harvest",
            requirements: [
              "Shallow depth",
              "Smooth surface",
              "Easy handling",
              "Proper drainage"
            ]
          }
        ],
        safety: [
          {
            name: "Personal Protection",
            items: [
              "Clean gloves",
              "Hair covering",
              "Clean apron",
              "Non-slip shoes"
            ]
          },
          {
            name: "Sanitation",
            items: [
              "Sanitizing solution",
              "Clean cloths",
              "Hand sanitizer",
              "Tool cleaner"
            ]
          }
        ]
      }
    },
    {
      id: 2,
      type: "technique",
      title: "Cutting Techniques",
      content: "Master proper cutting methods for different microgreen varieties.",
      techniques: {
        basic: [
          {
            method: "Single Stem Cut",
            description: "Individual stem cutting for delicate varieties",
            steps: [
              "Hold stems gently",
              "Cut close to growing medium",
              "Maintain consistent height",
              "Place in collection container"
            ],
            bestFor: [
              "Delicate varieties",
              "Premium products",
              "Small batches",
              "Special orders"
            ]
          },
          {
            method: "Bunch Cutting",
            description: "Harvesting multiple stems at once",
            steps: [
              "Gather stems in small bunch",
              "Position cutting tool",
              "Make clean, straight cut",
              "Transfer to container"
            ],
            bestFor: [
              "Sturdy varieties",
              "Large harvests",
              "Time efficiency",
              "Uniform crops"
            ]
          },
          {
            method: "Strip Harvesting",
            description: "Harvesting in straight lines or strips",
            steps: [
              "Align cutting tool",
              "Make continuous cut",
              "Maintain straight line",
              "Collect cut greens"
            ],
            bestFor: [
              "Dense plantings",
              "Commercial production",
              "Even height crops",
              "Large trays"
            ]
          }
        ],
        advanced: {
          electric: {
            method: "Electric Trimmer Technique",
            requirements: [
              "Proper height adjustment",
              "Steady hand movement",
              "Even pressure",
              "Continuous motion"
            ],
            advantages: [
              "Fast harvesting",
              "Consistent height",
              "Reduced fatigue",
              "Large-scale efficiency"
            ]
          },
          specialty: {
            method: "Specialty Crop Techniques",
            variations: [
              {
                type: "Root Attached",
                technique: "Careful lifting and cutting",
                tools: "Special lifting tools"
              },
              {
                type: "Living Trays",
                technique: "Partial harvest methods",
                tools: "Precision scissors"
              }
            ]
          }
        }
      }
    },
    {
      id: 3,
      type: "hands-on",
      title: "Harvesting Practice Workshop",
      content: "Practice different harvesting techniques with various tools.",
      workshop: {
        title: "Hands-on Harvesting Practice",
        duration: "45 minutes",
        setup: {
          materials: [
            "Various cutting tools",
            "Practice crop trays",
            "Collection containers",
            "Safety equipment"
          ],
          safety: [
            "Tool handling protocol",
            "Personal protection",
            "Clean workspace",
            "First aid access"
          ]
        },
        exercises: [
          {
            name: "Basic Cutting Practice",
            steps: [
              "Tool selection",
              "Proper grip technique",
              "Cutting practice",
              "Collection method"
            ],
            duration: "15 minutes"
          },
          {
            name: "Advanced Technique Practice",
            steps: [
              "Bunch cutting method",
              "Strip harvesting",
              "Electric trimmer use",
              "Specialty techniques"
            ],
            duration: "30 minutes"
          }
        ]
      }
    },
    {
      id: 4,
      type: "calculation",
      title: "Harvest Efficiency Calculations",
      content: "Learn to calculate and optimize harvest efficiency.",
      calculations: [
        {
          concept: "Harvest Rate",
          formula: "Trays per Hour = Total Trays ÷ Time (hours)",
          explanation: "Calculate harvesting speed and efficiency",
          example: {
            scenario: "Commercial harvest",
            calculation: "20 trays ÷ 2 hours = 10 trays/hour",
            factors: [
              "Tool selection",
              "Technique efficiency",
              "Crop density",
              "Tray size"
            ]
          }
        },
        {
          concept: "Yield Calculation",
          formula: "Yield (oz) = Tray Area (sq ft) × Yield Rate (oz/sq ft)",
          explanation: "Estimate expected harvest yield",
          example: {
            scenario: "Standard tray harvest",
            calculation: "2 sq ft × 4 oz/sq ft = 8 oz yield",
            factors: [
              "Crop type",
              "Growing density",
              "Harvest height",
              "Growing conditions"
            ]
          }
        }
      ]
    },
    {
      id: 5,
      type: "quality",
      title: "Quality Control During Harvest",
      content: "Maintain high quality standards during the harvesting process.",
      standards: {
        cutting: [
          {
            aspect: "Cut Quality",
            criteria: [
              "Clean, straight cuts",
              "Consistent height",
              "No damaged stems",
              "Proper technique use"
            ],
            measurement: "Visual inspection of cut ends",
            acceptableRange: "95% clean cuts"
          },
          {
            aspect: "Product Handling",
            criteria: [
              "Gentle handling",
              "Clean containers",
              "Proper storage",
              "Temperature control"
            ],
            measurement: "Product condition assessment",
            acceptableRange: "No visible damage"
          }
        ],
        safety: [
          {
            aspect: "Tool Sanitation",
            requirements: [
              "Regular cleaning",
              "Proper sanitization",
              "Tool inspection",
              "Maintenance records"
            ],
            frequency: "Every 30 minutes of use"
          },
          {
            aspect: "Personal Hygiene",
            requirements: [
              "Clean hands/gloves",
              "Proper attire",
              "Hair containment",
              "Health standards"
            ],
            frequency: "Continuous monitoring"
          }
        ]
      }
    },
    {
      id: 6,
      type: "summary",
      title: "Lesson 2 Summary and Assessment",
      content: "Review your understanding of harvesting techniques and tools.",
      summary: {
        keyLearnings: [
          "Tool selection and use",
          "Cutting techniques",
          "Safety protocols",
          "Efficiency methods",
          "Quality control"
        ],
        skillsAcquired: [
          "Proper tool handling",
          "Various cutting methods",
          "Harvest efficiency",
          "Quality maintenance",
          "Safety compliance"
        ]
      },
      assessment: {
        title: "Harvesting Techniques Assessment",
        tasks: [
          {
            task: "Tool Proficiency",
            description: "Demonstrate proper use of various harvesting tools",
            criteria: [
              "Correct tool selection",
              "Proper technique",
              "Safety compliance",
              "Efficiency demonstration"
            ]
          },
          {
            task: "Quality Control",
            description: "Maintain quality standards during harvest",
            criteria: [
              "Clean cutting",
              "Proper handling",
              "Container management",
              "Documentation"
            ]
          }
        ]
      },
      nextSteps: {
        title: "Preparing for Lesson 3: Post-Harvest Handling",
        preview: "Learn proper handling, storage, and packaging techniques for harvested microgreens.",
        topics: [
          "Cleaning procedures",
          "Storage methods",
          "Packaging techniques",
          "Quality maintenance"
        ]
      }
    }
  ]
};

export default lesson2Content; 