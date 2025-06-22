export const lesson4Content = {
  lessonInfo: {
    id: 12,
    module: "Harvest Methods",
    title: "Market Preparation",
    description: "Learn professional techniques for preparing microgreens for market, including packaging, labeling, transportation, and quality assurance.",
    estimatedTime: "55 minutes",
    difficulty: "Intermediate",
    totalSlides: 7
  },

  slides: [
    {
      id: 0,
      type: "introduction",
      title: "Welcome to Lesson 4: Market Preparation",
      content: "Master the final steps of preparing microgreens for market to ensure product quality and customer satisfaction.",
      keyPoints: [
        "Market requirements",
        "Packaging standards",
        "Transportation logistics",
        "Quality assurance"
      ],
      learningObjectives: [
        "Meet market standards",
        "Master packaging methods",
        "Ensure safe transport",
        "Maintain quality"
      ]
    },
    {
      id: 1,
      type: "technique",
      title: "Market Requirements",
      content: "Understanding and meeting various market requirements and standards.",
      requirements: {
        retail: {
          packaging: [
            {
              type: "Individual Portions",
              specifications: [
                "Standard sizes (2-4 oz)",
                "Clear containers",
                "Proper labeling",
                "Barcode requirements"
              ],
              standards: [
                "Food safety compliance",
                "Quality certification",
                "Traceability",
                "Shelf life guarantees"
              ]
            },
            {
              type: "Bulk Packaging",
              specifications: [
                "Large containers (1-5 lbs)",
                "Protected packaging",
                "Commercial labeling",
                "Temperature indicators"
              ],
              standards: [
                "Commercial grade",
                "Wholesale compliance",
                "Distribution requirements",
                "Chain of custody"
              ]
            }
          ],
          labeling: {
            required: [
              "Product name",
              "Weight/volume",
              "Date information",
              "Producer details",
              "Nutritional facts",
              "Storage instructions",
              "Tracking codes",
              "Safety warnings"
            ],
            optional: [
              "Recipe suggestions",
              "Usage tips",
              "QR codes",
              "Certification logos"
            ]
          }
        },
        restaurant: {
          specifications: [
            {
              aspect: "Packaging",
              requirements: [
                "Commercial containers",
                "Bulk options",
                "Easy access design",
                "Resealable features"
              ]
            },
            {
              aspect: "Delivery",
              requirements: [
                "Scheduled times",
                "Temperature control",
                "Quality guarantees",
                "Flexible quantities"
              ]
            }
          ]
        },
        farmers_market: {
          requirements: [
            {
              aspect: "Display",
              specifications: [
                "Attractive presentation",
                "Sample displays",
                "Educational materials",
                "Price signage"
              ]
            },
            {
              aspect: "Packaging",
              specifications: [
                "On-site packaging",
                "Various sizes",
                "Eco-friendly options",
                "Custom quantities"
              ]
            }
          ]
        }
      }
    },
    {
      id: 2,
      type: "technique",
      title: "Packaging Standards",
      content: "Professional packaging techniques for different market channels.",
      standards: {
        materials: [
          {
            type: "Retail Containers",
            options: [
              {
                name: "Clamshell Containers",
                features: [
                  "Clear visibility",
                  "Stackable design",
                  "Ventilation holes",
                  "Secure closure"
                ],
                sizes: ["2 oz", "4 oz", "8 oz"]
              },
              {
                name: "Sealed Bags",
                features: [
                  "Modified atmosphere",
                  "Resealable option",
                  "Moisture control",
                  "Custom printing"
                ],
                sizes: ["3 oz", "6 oz", "1 lb"]
              }
            ]
          },
          {
            type: "Commercial Packaging",
            options: [
              {
                name: "Bulk Containers",
                features: [
                  "Durable construction",
                  "Large capacity",
                  "Easy handling",
                  "Temperature control"
                ],
                sizes: ["2 lb", "5 lb", "10 lb"]
              }
            ]
          }
        ],
        procedures: {
          retail: [
            {
              step: "Container Preparation",
              actions: [
                "Sanitize containers",
                "Check integrity",
                "Apply labels",
                "Prepare closure"
              ]
            },
            {
              step: "Product Loading",
              actions: [
                "Weigh product",
                "Careful placement",
                "Avoid compression",
                "Check presentation"
              ]
            },
            {
              step: "Final Inspection",
              actions: [
                "Quality check",
                "Label verification",
                "Seal integrity",
                "Appearance review"
              ]
            }
          ]
        }
      }
    },
    {
      id: 3,
      type: "hands-on",
      title: "Transportation Workshop",
      content: "Practice proper transportation methods and logistics.",
      workshop: {
        title: "Transportation Methods Practice",
        duration: "30 minutes",
        equipment: {
          vehicles: [
            {
              type: "Refrigerated Van",
              features: [
                "Temperature control",
                "Multiple zones",
                "Loading equipment",
                "Monitoring systems"
              ]
            },
            {
              type: "Insulated Containers",
              features: [
                "Portable cooling",
                "Temperature logging",
                "Stackable design",
                "Secure closure"
              ]
            }
          ],
          monitoring: [
            "Temperature loggers",
            "Humidity sensors",
            "GPS tracking",
            "Time indicators"
          ]
        },
        exercises: [
          {
            name: "Loading Practice",
            steps: [
              "Container organization",
              "Temperature verification",
              "Secure placement",
              "Route planning"
            ],
            duration: "15 minutes"
          },
          {
            name: "Delivery Protocol",
            steps: [
              "Temperature check",
              "Quality verification",
              "Documentation",
              "Customer handoff"
            ],
            duration: "15 minutes"
          }
        ]
      }
    },
    {
      id: 4,
      type: "calculation",
      title: "Logistics Calculations",
      content: "Learn to calculate and optimize delivery routes and timing.",
      calculations: [
        {
          concept: "Delivery Time Estimation",
          formula: "Base Time + Traffic + Handling = Total Delivery Time",
          explanation: "Calculate accurate delivery windows for scheduling",
          example: {
            baseTime: "30 minutes",
            adjustments: {
              traffic: "+15 minutes (peak hours)",
              handling: "+10 minutes (per stop)",
              weather: "+5 minutes (conditions)"
            },
            result: "60 minutes total delivery time"
          }
        },
        {
          concept: "Load Capacity",
          formula: "Vehicle Capacity × Packaging Factor = Maximum Load",
          explanation: "Calculate optimal load for each delivery route",
          example: {
            capacity: "200 cubic feet",
            factor: "0.7 (space efficiency)",
            result: "140 cubic feet usable space"
          }
        }
      ]
    },
    {
      id: 5,
      type: "quality",
      title: "Quality Assurance",
      content: "Implement comprehensive quality control for market preparation.",
      procedures: {
        inspection: [
          {
            stage: "Pre-Packaging",
            checks: [
              "Product quality",
              "Container integrity",
              "Label accuracy",
              "Weight verification"
            ],
            frequency: "Every batch"
          },
          {
            stage: "Post-Packaging",
            checks: [
              "Seal integrity",
              "Label placement",
              "Product presentation",
              "Temperature compliance"
            ],
            frequency: "Every container"
          },
          {
            stage: "Pre-Transport",
            checks: [
              "Temperature verification",
              "Container stability",
              "Documentation completion",
              "Vehicle readiness"
            ],
            frequency: "Every delivery"
          }
        ],
        documentation: {
          required: [
            "Quality inspection logs",
            "Temperature records",
            "Delivery manifests",
            "Customer receipts"
          ],
          format: "Digital tracking system"
        }
      }
    },
    {
      id: 6,
      type: "summary",
      title: "Lesson 4 Summary and Assessment",
      content: "Review your understanding of market preparation procedures.",
      summary: {
        keyLearnings: [
          "Market requirements",
          "Packaging standards",
          "Transportation methods",
          "Quality assurance",
          "Documentation systems"
        ],
        skillsAcquired: [
          "Professional packaging",
          "Transport logistics",
          "Quality control",
          "Customer service",
          "Documentation"
        ]
      },
      assessment: {
        title: "Market Preparation Assessment",
        tasks: [
          {
            task: "Packaging Demonstration",
            description: "Complete professional packaging process",
            criteria: [
              "Proper technique",
              "Quality standards",
              "Label compliance",
              "Documentation"
            ]
          },
          {
            task: "Transport Planning",
            description: "Plan and execute delivery route",
            criteria: [
              "Route optimization",
              "Temperature control",
              "Time management",
              "Quality maintenance"
            ]
          }
        ]
      },
      moduleCompletion: {
        title: "Congratulations on Completing Module 3: Harvest Methods",
        summary: "You have mastered the essential skills for harvesting, handling, and marketing microgreens.",
        nextSteps: [
          "Practice techniques regularly",
          "Implement systems learned",
          "Monitor and improve processes",
          "Stay updated on standards"
        ]
      }
    }
  ]
};

export default lesson4Content; 