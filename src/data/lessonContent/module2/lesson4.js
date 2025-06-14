export const lesson4Content = {
  lessonInfo: {
    id: 4,
    module: "Plant Care Basics",
    title: "Environmental Control",
    description: "Master the art of managing environmental factors for optimal microgreen growth.",
    estimatedTime: "45 minutes",
    difficulty: "Intermediate",
    totalSlides: 7
  },

  slides: [
    {
      id: 0,
      type: "introduction",
      title: "Welcome to Lesson 4: Environmental Control",
      content: "Environmental control is crucial for successful microgreen production. Learn to manage temperature, humidity, light, and air circulation for optimal growth.",
      keyPoints: [
        "Temperature management",
        "Humidity control",
        "Light requirements",
        "Air circulation"
      ],
      learningObjectives: [
        "Monitor and adjust environmental conditions",
        "Optimize growing environment",
        "Troubleshoot environmental issues",
        "Implement control systems"
      ]
    },
    {
      id: 1,
      type: "technique",
      title: "Temperature Management",
      content: "Learn optimal temperature ranges and control methods for different growth stages.",
      temperature: {
        growthStages: [
          {
            stage: "Germination",
            optimal: "70-75°F (21-24°C)",
            acceptable: "65-80°F (18-27°C)",
            considerations: [
              "Higher temps speed germination",
              "Avoid temperature extremes",
              "Maintain consistency",
              "Monitor soil temperature"
            ]
          },
          {
            stage: "Vegetative Growth",
            optimal: "65-70°F (18-21°C)",
            acceptable: "60-75°F (16-24°C)",
            considerations: [
              "Cooler temps prevent leggy growth",
              "Avoid cold drafts",
              "Day/night differential",
              "Gradual temperature changes"
            ]
          }
        ],
        controlMethods: [
          {
            method: "Heating",
            equipment: [
              "Heat mats",
              "Space heaters",
              "Greenhouse heaters",
              "Thermal mass"
            ],
            tips: [
              "Use thermostats",
              "Monitor constantly",
              "Maintain backup systems",
              "Regular maintenance"
            ]
          },
          {
            method: "Cooling",
            equipment: [
              "Ventilation fans",
              "Shade cloth",
              "Evaporative cooling",
              "Air conditioning"
            ],
            tips: [
              "Use multiple methods",
              "Monitor heat spots",
              "Regular maintenance",
              "Energy efficiency"
            ]
          }
        ]
      }
    },
    {
      id: 2,
      type: "technique",
      title: "Humidity and Air Circulation",
      content: "Master humidity control and air movement for healthy plant growth.",
      environment: {
        humidity: {
          optimal: {
            germination: "90-95%",
            growth: "50-70%",
            finishing: "40-60%"
          },
          controlMethods: [
            {
              method: "Increasing Humidity",
              techniques: [
                "Misting systems",
                "Humidity domes",
                "Water trays",
                "Grouping plants"
              ]
            },
            {
              method: "Decreasing Humidity",
              techniques: [
                "Ventilation",
                "Dehumidifiers",
                "Air movement",
                "Temperature control"
              ]
            }
          ],
          monitoring: [
            "Digital hygrometers",
            "Environmental controllers",
            "Data loggers",
            "Visual indicators"
          ]
        },
        airCirculation: {
          importance: [
            "Prevents disease",
            "Strengthens stems",
            "Regulates temperature",
            "Distributes humidity"
          ],
          equipment: [
            {
              type: "Fans",
              uses: [
                "Continuous air movement",
                "Temperature regulation",
                "Humidity control",
                "Disease prevention"
              ]
            },
            {
              type: "Ventilation",
              uses: [
                "Fresh air exchange",
                "Temperature control",
                "Humidity regulation",
                "CO2 management"
              ]
            }
          ]
        }
      }
    },
    {
      id: 3,
      type: "hands-on",
      title: "Environmental Control Workshop",
      content: "Practice monitoring and adjusting environmental conditions.",
      workshop: {
        title: "Environmental Management Practice",
        duration: "35 minutes",
        setup: {
          materials: [
            "Thermometer",
            "Hygrometer",
            "Light meter",
            "Fans",
            "Humidity dome",
            "Data logger"
          ],
          safety: [
            "Electrical safety",
            "Equipment handling",
            "Proper ventilation",
            "Emergency procedures"
          ]
        },
        exercises: [
          {
            name: "Temperature Mapping",
            steps: [
              "Measure various locations",
              "Record temperature patterns",
              "Identify hot/cold spots",
              "Implement solutions"
            ]
          },
          {
            name: "Humidity Control",
            steps: [
              "Monitor humidity levels",
              "Test control methods",
              "Adjust ventilation",
              "Document results"
            ]
          }
        ]
      }
    },
    {
      id: 4,
      type: "calculation",
      title: "Environmental Calculations",
      content: "Learn to calculate and adjust environmental parameters.",
      calculations: [
        {
          concept: "Ventilation Rate",
          formula: "Air changes per hour = (Fan CFM × 60) ÷ Room volume",
          explanation: "Calculate air exchange rate for proper ventilation",
          example: {
            roomVolume: "1000 cubic feet",
            fanCFM: "100",
            calculation: "(100 × 60) ÷ 1000 = 6 air changes per hour"
          }
        },
        {
          concept: "Vapor Pressure Deficit",
          formula: "VPD = SVP × (1 - RH/100)",
          explanation: "Calculate optimal moisture conditions",
          example: {
            temperature: "72°F",
            humidity: "60%",
            calculation: "0.87 kPa = optimal for vegetative growth"
          }
        }
      ]
    },
    {
      id: 5,
      type: "quality",
      title: "Environmental Monitoring",
      content: "Learn to implement effective monitoring systems.",
      monitoring: {
        parameters: [
          {
            parameter: "Temperature",
            frequency: "Hourly",
            method: "Digital sensors",
            optimalRange: "65-75°F (18-24°C)"
          },
          {
            parameter: "Humidity",
            frequency: "Hourly",
            method: "Hygrometer",
            optimalRange: "50-70%"
          },
          {
            parameter: "Air Movement",
            frequency: "Daily",
            method: "Smoke test/flags",
            optimalRange: "Gentle leaf movement"
          }
        ],
        documentation: {
          required: [
            "Date and time",
            "Parameter readings",
            "Equipment status",
            "Adjustments made"
          ],
          format: [
            "Digital logs",
            "Charts/graphs",
            "Alert systems",
            "Trend analysis"
          ]
        }
      }
    },
    {
      id: 6,
      type: "summary",
      title: "Lesson 4 Summary and Assessment",
      content: "Review your understanding of environmental control and complete Module 2.",
      summary: {
        keyLearnings: [
          "Temperature management",
          "Humidity control",
          "Air circulation",
          "Monitoring systems",
          "Environmental optimization"
        ],
        skillsAcquired: [
          "Environmental monitoring",
          "System adjustment",
          "Problem diagnosis",
          "Data interpretation",
          "Control implementation"
        ],
        practicalExperience: [
          "Temperature control",
          "Humidity management",
          "Ventilation setup",
          "Monitoring practice"
        ]
      },
      assessment: {
        title: "Environmental Control Assessment",
        tasks: [
          {
            task: "Environment Setup",
            description: "Set up and optimize growing environment",
            criteria: [
              "Proper temperature",
              "Humidity control",
              "Air circulation",
              "Monitoring system"
            ]
          },
          {
            task: "System Management",
            description: "Demonstrate environmental management skills",
            criteria: [
              "Parameter monitoring",
              "System adjustment",
              "Problem resolution",
              "Documentation"
            ]
          }
        ]
      },
      moduleCompletion: {
        title: "Congratulations on Completing Module 2: Plant Care Basics",
        achievements: [
          "Mastered watering techniques",
          "Understanding of nutrient management",
          "Pest and disease control knowledge",
          "Environmental control expertise"
        ],
        nextSteps: [
          "Practice techniques learned",
          "Set up monitoring systems",
          "Implement management plans",
          "Prepare for advanced modules"
        ]
      }
    }
  ]
};

export default lesson4Content; 