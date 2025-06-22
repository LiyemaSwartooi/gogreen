export const lesson3Content = {
  lessonInfo: {
    id: 11,
    module: "Harvest Methods",
    title: "Post-Harvest Handling",
    description: "Learn essential techniques for handling, storing, and packaging harvested microgreens to maintain quality and extend shelf life.",
    estimatedTime: "50 minutes",
    difficulty: "Intermediate",
    totalSlides: 7
  },

  slides: [
    {
      id: 0,
      type: "introduction",
      title: "Welcome to Lesson 3: Post-Harvest Handling",
      content: "Master the critical steps of handling microgreens after harvest to ensure quality and maximize shelf life.",
      keyPoints: [
        "Initial processing",
        "Storage methods",
        "Packaging techniques",
        "Quality maintenance"
      ],
      learningObjectives: [
        "Implement proper handling procedures",
        "Master storage techniques",
        "Learn packaging methods",
        "Maintain product quality"
      ]
    },
    {
      id: 1,
      type: "technique",
      title: "Initial Processing",
      content: "Learn proper handling techniques immediately after harvest.",
      procedures: {
        cleaning: [
          {
            step: "Initial Inspection",
            actions: [
              "Remove damaged leaves",
              "Sort by quality grade",
              "Check for debris",
              "Assess moisture level"
            ],
            equipment: [
              "Clean work surface",
              "Sorting containers",
              "Inspection light",
              "Clean gloves"
            ]
          },
          {
            step: "Temperature Management",
            actions: [
              "Pre-cool harvest area",
              "Monitor product temperature",
              "Use cooling equipment",
              "Maintain cold chain"
            ],
            equipment: [
              "Thermometers",
              "Cooling units",
              "Temperature loggers",
              "Cold storage"
            ]
          }
        ],
        preparation: {
          washing: {
            required: false,
            note: "Most microgreens should not be washed to prevent damage and reduce spoilage",
            exceptions: [
              {
                case: "Visible soil",
                method: "Gentle spray misting",
                precautions: [
                  "Minimal water contact",
                  "Immediate drying",
                  "Careful handling",
                  "Temperature control"
                ]
              }
            ]
          },
          drying: {
            methods: [
              {
                type: "Air Drying",
                technique: "Gentle air circulation",
                equipment: "Fans",
                duration: "10-15 minutes"
              },
              {
                type: "Absorbent Materials",
                technique: "Paper towel blotting",
                equipment: "Food-grade paper",
                duration: "5-10 minutes"
              }
            ]
          }
        }
      }
    },
    {
      id: 2,
      type: "technique",
      title: "Storage Methods",
      content: "Master proper storage techniques for maximum shelf life.",
      methods: {
        temperature: {
          optimal: {
            range: "33-40°F (1-4°C)",
            humidity: "95-98%",
            monitoring: "Every 2 hours",
            equipment: [
              "Commercial refrigerator",
              "Temperature sensors",
              "Humidity monitors",
              "Data loggers"
            ]
          },
          zones: [
            {
              name: "Primary Storage",
              temp: "35°F (2°C)",
              use: "Main inventory"
            },
            {
              name: "Staging Area",
              temp: "38°F (3.3°C)",
              use: "Order preparation"
            },
            {
              name: "Transport Prep",
              temp: "36°F (2.2°C)",
              use: "Shipping preparation"
            }
          ]
        },
        containers: [
          {
            type: "Plastic Containers",
            features: [
              "Ventilation holes",
              "Moisture control",
              "Stackable design",
              "Clear visibility"
            ],
            bestFor: "Short-term storage"
          },
          {
            type: "Modified Atmosphere",
            features: [
              "Gas permeability",
              "Moisture barrier",
              "Temperature stable",
              "Light protection"
            ],
            bestFor: "Extended storage"
          }
        ]
      }
    },
    {
      id: 3,
      type: "hands-on",
      title: "Packaging Workshop",
      content: "Practice proper packaging techniques for different market requirements.",
      workshop: {
        title: "Packaging Methods Practice",
        duration: "30 minutes",
        materials: {
          containers: [
            "Plastic clamshells",
            "Sealed bags",
            "Bulk containers",
            "Custom packaging"
          ],
          tools: [
            "Scale",
            "Label printer",
            "Sealing equipment",
            "Dating system"
          ],
          supplies: [
            "Labels",
            "Packaging materials",
            "Safety equipment",
            "Cleaning supplies"
          ]
        },
        exercises: [
          {
            name: "Retail Packaging",
            steps: [
              "Weight measurement",
              "Container selection",
              "Product placement",
              "Label application"
            ],
            duration: "15 minutes"
          },
          {
            name: "Bulk Packaging",
            steps: [
              "Quantity measurement",
              "Container preparation",
              "Product loading",
              "Sealing process"
            ],
            duration: "15 minutes"
          }
        ]
      }
    },
    {
      id: 4,
      type: "calculation",
      title: "Storage Life Calculations",
      content: "Learn to calculate and optimize storage life for different varieties.",
      calculations: [
        {
          concept: "Shelf Life Estimation",
          formula: "Base Life + Condition Adjustments = Expected Shelf Life",
          explanation: "Calculate expected storage duration based on conditions",
          example: {
            baseLife: "7 days",
            adjustments: {
              temperature: "+2 days (optimal cooling)",
              packaging: "+1 day (MAP)",
              handling: "-1 day (transport time)"
            },
            result: "9 days total shelf life"
          }
        },
        {
          concept: "Storage Capacity",
          formula: "Available Space × Density Factor = Storage Capacity",
          explanation: "Calculate maximum storage capacity while maintaining quality",
          example: {
            space: "100 cubic feet",
            density: "0.5 lbs/cubic foot",
            result: "50 lbs maximum capacity"
          }
        }
      ]
    },
    {
      id: 5,
      type: "quality",
      title: "Quality Monitoring",
      content: "Implement quality control measures during storage and handling.",
      monitoring: {
        parameters: [
          {
            aspect: "Visual Quality",
            indicators: [
              "Color vibrancy",
              "Leaf integrity",
              "Stem condition",
              "Overall appearance"
            ],
            frequency: "Every 12 hours",
            standards: "90% retention"
          },
          {
            aspect: "Temperature Control",
            indicators: [
              "Storage temperature",
              "Product temperature",
              "Temperature variation",
              "Cold chain maintenance"
            ],
            frequency: "Every 2 hours",
            standards: "±1°F variance"
          },
          {
            aspect: "Moisture Management",
            indicators: [
              "Condensation levels",
              "Product moisture",
              "Container moisture",
              "Humidity levels"
            ],
            frequency: "Every 6 hours",
            standards: "No free moisture"
          }
        ],
        documentation: {
          required: [
            "Temperature logs",
            "Quality checks",
            "Inventory rotation",
            "Incident reports"
          ],
          format: "Digital tracking system"
        }
      }
    },
    {
      id: 6,
      type: "summary",
      title: "Lesson 3 Summary and Assessment",
      content: "Review your understanding of post-harvest handling procedures.",
      summary: {
        keyLearnings: [
          "Initial processing methods",
          "Storage techniques",
          "Packaging procedures",
          "Quality monitoring",
          "Documentation requirements"
        ],
        skillsAcquired: [
          "Temperature management",
          "Packaging techniques",
          "Quality assessment",
          "Storage optimization",
          "Record keeping"
        ]
      },
      assessment: {
        title: "Post-Harvest Handling Assessment",
        tasks: [
          {
            task: "Processing Demonstration",
            description: "Show proper handling and storage procedures",
            criteria: [
              "Temperature control",
              "Handling technique",
              "Storage method",
              "Quality maintenance"
            ]
          },
          {
            task: "Documentation Practice",
            description: "Complete required monitoring records",
            criteria: [
              "Accuracy",
              "Completeness",
              "Timeliness",
              "Organization"
            ]
          }
        ]
      },
      nextSteps: {
        title: "Preparing for Lesson 4: Market Preparation",
        preview: "Learn how to prepare microgreens for market, including packaging, labeling, and transportation.",
        topics: [
          "Market requirements",
          "Packaging standards",
          "Transportation methods",
          "Quality assurance"
        ]
      }
    }
  ]
};

export default lesson3Content; 