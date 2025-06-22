export const lesson3Content = {
  lessonInfo: {
    id: 3,
    module: "Growing Techniques",
    title: "Optimal Growing Conditions",
    description: "Master environmental control to create perfect growing conditions for maximum microgreen yield and quality.",
    estimatedTime: "60 minutes",
    difficulty: "Intermediate",
    totalSlides: 8
  },

  slides: [
    {
      id: 0,
      type: "introduction",
      title: "Welcome to Lesson 3: Optimal Growing Conditions",
      content: "Environmental conditions are crucial for successful microgreen cultivation. In this lesson, you'll learn to control temperature, lighting, humidity, and air circulation to maximize growth, flavor, and nutritional content.",
      keyPoints: [
        "Master temperature control for optimal growth",
        "Design effective lighting systems",
        "Manage humidity and air circulation",
        "Monitor and adjust environmental parameters"
      ],
      learningObjectives: [
        "Control temperature ranges for different growth stages",
        "Set up appropriate lighting systems for microgreens",
        "Maintain optimal humidity and air circulation",
        "Use monitoring tools to track environmental conditions",
        "Troubleshoot common environmental problems"
      ]
    },

    {
      id: 1,
      type: "theory",
      title: "Temperature Control Fundamentals",
      content: "Temperature is the most critical environmental factor affecting microgreen growth rate, quality, and shelf life. Understanding optimal temperature ranges for different stages is essential for success.",
      image: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      sections: [
        {
          heading: "Growth Stage Temperature Requirements",
          content: "Different growth stages require specific temperature ranges for optimal development and quality.",
          points: [
            "Germination: 65-75°F (18-24°C) for most varieties",
            "Early growth: 60-70°F (15-21°C) for strong development",
            "Harvest stage: 55-65°F (13-18°C) for extended shelf life",
            "Cool-season crops prefer lower temperatures",
            "Warm-season crops tolerate higher temperatures"
          ]
        },
        {
          heading: "Temperature Effects on Growth",
          content: "Temperature directly impacts germination speed, growth rate, flavor development, and nutritional content.",
          points: [
            "Higher temperatures accelerate germination but may reduce quality",
            "Optimal temperatures promote even, healthy growth",
            "Excessive heat causes leggy, weak plants",
            "Cool temperatures slow growth but improve flavor concentration",
            "Temperature fluctuations stress plants and reduce yields"
          ]
        }
      ],
      practicalSteps: [
        {
          step: 1,
          title: "Install Temperature Monitoring",
          description: "Set up reliable temperature monitoring throughout your growing area",
          instructions: [
            "Place digital thermometers at plant level",
            "Install min/max recording thermometers",
            "Position sensors away from direct heat sources",
            "Monitor multiple zones in larger setups"
          ],
          tips: [
            "Check calibration monthly",
            "Use wireless sensors for remote monitoring",
            "Record temperatures at the same times daily"
          ]
        },
        {
          step: 2,
          title: "Implement Temperature Control",
          description: "Create systems to maintain optimal temperature ranges",
          instructions: [
            "Use heating mats for germination areas",
            "Install ventilation fans for cooling",
            "Add thermal mass for temperature stability",
            "Insulate growing areas from external temperature swings"
          ],
          tips: [
            "Gradual temperature changes are better than sudden shifts",
            "Consider backup heating/cooling systems",
            "Use timers to automate temperature control"
          ]
        }
      ]
    },

    {
      id: 2,
      type: "technique",
      title: "Lighting Systems and Setup",
      content: "Proper lighting is essential for photosynthesis, healthy growth, and nutritional development in microgreens. Learn to design and implement effective lighting systems.",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      techniques: [
        {
          name: "LED Grow Light Setup",
          bestFor: ["Indoor growing", "Year-round production", "Energy efficiency"],
          method: {
            duration: "12-16 hours daily",
            intensity: "20-40 μmol/m²/s PPFD",
            spectrum: "Full spectrum with blue/red emphasis",
            distance: "6-12 inches from plants"
          },
          benefits: [
            "Energy efficient and long-lasting",
            "Low heat generation",
            "Customizable light spectrum",
            "Precise control over photoperiod",
            "Suitable for all growth stages"
          ]
        },
        {
          name: "Fluorescent Light System",
          bestFor: ["Budget setups", "Small-scale growing", "Supplemental lighting"],
          method: {
            duration: "14-18 hours daily",
            intensity: "15-30 μmol/m²/s PPFD",
            spectrum: "Cool white (6500K) or grow bulbs",
            distance: "4-8 inches from plants"
          },
          benefits: [
            "Lower initial cost",
            "Widely available",
            "Even light distribution",
            "Good for leafy greens",
            "Easy to install"
          ],
          warnings: [
            "Higher energy consumption than LEDs",
            "Generate more heat",
            "Shorter lifespan than LEDs",
            "Less efficient light spectrum"
          ]
        }
      ],
      practicalSteps: [
        {
          step: 1,
          title: "Calculate Lighting Requirements",
          description: "Determine the appropriate lighting setup for your growing area",
          instructions: [
            "Measure your growing area dimensions",
            "Calculate required light intensity (PPFD)",
            "Determine optimal light height and spacing",
            "Plan for uniform light distribution"
          ],
          tips: [
            "Use a light meter to measure actual output",
            "Account for light degradation over time",
            "Consider reflective surfaces to maximize efficiency"
          ]
        },
        {
          step: 2,
          title: "Install and Configure Lights",
          description: "Set up your lighting system for optimal performance",
          instructions: [
            "Mount lights at appropriate height",
            "Install timers for automated photoperiod",
            "Position lights for even coverage",
            "Test light intensity across growing area"
          ],
          tips: [
            "Start with manufacturer recommendations",
            "Adjust based on plant response",
            "Use reflectors to improve efficiency"
          ]
        }
      ]
    },

    {
      id: 3,
      type: "practical",
      title: "Humidity and Air Circulation Management",
      content: "Proper humidity and air circulation prevent disease, promote healthy growth, and ensure optimal plant development throughout the growing cycle.",
      image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      practicalSteps: [
        {
          step: 1,
          title: "Monitor Humidity Levels",
          description: "Track and maintain optimal humidity ranges for different growth stages",
          instructions: [
            "Install digital hygrometers throughout growing area",
            "Record humidity levels multiple times daily",
            "Identify patterns and problem areas",
            "Set target ranges: 50-70% for most microgreens"
          ],
          tips: [
            "Calibrate hygrometers regularly",
            "Place sensors at plant level",
            "Monitor both day and night humidity"
          ]
        },
        {
          step: 2,
          title: "Implement Humidity Control",
          description: "Create systems to maintain optimal humidity levels",
          instructions: [
            "Use humidifiers to increase moisture when needed",
            "Install dehumidifiers or increase ventilation to reduce humidity",
            "Create humidity zones for different crops",
            "Adjust watering practices to influence humidity"
          ],
          tips: [
            "Gradual humidity changes prevent plant stress",
            "Higher humidity during germination, lower during harvest",
            "Good air circulation helps prevent humidity-related problems"
          ]
        },
        {
          step: 3,
          title: "Set Up Air Circulation",
          description: "Design effective air movement systems for healthy plant growth",
          instructions: [
            "Install oscillating fans for gentle air movement",
            "Position exhaust fans for proper ventilation",
            "Create air intake and exhaust points",
            "Ensure air movement reaches all growing areas"
          ],
          tips: [
            "Gentle, constant air movement is better than strong intermittent flow",
            "Avoid direct airflow on young seedlings",
            "Use variable speed fans for fine control"
          ]
        }
      ],
      systems: [
        {
          type: "Basic Ventilation System",
          setup: {
            materials: [
              "Oscillating fans (6-8 inch)",
              "Exhaust fan with speed control",
              "Air intake vents or louvers",
              "Timers for automated operation"
            ],
            steps: [
              {
                step: 1,
                title: "Plan Air Flow Pattern",
                description: "Design efficient air movement throughout growing space",
                process: [
                  "Identify air intake and exhaust locations",
                  "Plan for gentle air circulation over plants",
                  "Avoid dead air zones",
                  "Consider temperature stratification"
                ]
              },
              {
                step: 2,
                title: "Install Circulation Fans",
                description: "Set up fans for optimal air movement",
                process: [
                  "Mount oscillating fans above plant level",
                  "Position for indirect air flow over plants",
                  "Install exhaust fans in upper corners",
                  "Add intake vents at lower levels"
                ]
              }
            ]
          }
        }
      ]
    },

    {
      id: 4,
      type: "calculation",
      title: "Environmental Monitoring and Calculations",
      content: "Learn to calculate and monitor key environmental parameters to optimize growing conditions and predict plant performance.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      calculations: [
        {
          concept: "Daily Light Integral (DLI)",
          formula: "DLI = PPFD × photoperiod × 0.0036",
          explanation: "Calculate the total amount of light plants receive daily. Most microgreens need 8-15 mol/m²/day DLI.",
          example: {
            lightIntensity: "25 μmol/m²/s PPFD",
            photoperiod: "16 hours",
            calculation: "25 × 16 × 0.0036 = 1.44 mol/m²/day",
            result: "1.44 mol/m²/day DLI (too low - increase intensity or duration)"
          }
        },
        {
          concept: "Vapor Pressure Deficit (VPD)",
          formula: "VPD = SVP × (1 - RH/100)",
          explanation: "VPD indicates the driving force for water movement from plants to air. Optimal VPD for microgreens is 0.4-0.8 kPa.",
          example: {
            temperature: "70°F (21°C)",
            humidity: "60% RH",
            calculation: "2.49 kPa × (1 - 60/100) = 0.996 kPa",
            result: "0.996 kPa VPD (slightly high - increase humidity or decrease temperature)"
          }
        }
      ],
      practiceProblems: [
        {
          problem: "Calculate the DLI for a growing setup with LED lights providing 30 μmol/m²/s PPFD for 14 hours daily.",
          given: "PPFD = 30 μmol/m²/s, Photoperiod = 14 hours",
          steps: [
            "Apply DLI formula: DLI = PPFD × photoperiod × 0.0036",
            "Substitute values: DLI = 30 × 14 × 0.0036",
            "Calculate: DLI = 1.512 mol/m²/day"
          ],
          solution: "1.512 mol/m²/day DLI (too low for optimal growth - increase to 8-15 mol/m²/day)"
        },
        {
          problem: "Determine if environmental conditions are optimal: Temperature 68°F, Humidity 65%, Light 35 μmol/m²/s for 12 hours.",
          given: "T = 68°F (20°C), RH = 65%, PPFD = 35 μmol/m²/s, Photoperiod = 12 hours",
          steps: [
            "Calculate DLI: 35 × 12 × 0.0036 = 1.512 mol/m²/day",
            "Check temperature range: 68°F is within optimal 60-70°F",
            "Check humidity: 65% is within optimal 50-70%",
            "Evaluate DLI: 1.512 is below optimal 8-15 mol/m²/day"
          ],
          solution: "Temperature and humidity are optimal, but DLI is too low. Increase light intensity or duration."
        }
      ]
    },

    {
      id: 5,
      type: "hands-on",
      title: "Complete Environmental Control Workshop",
      content: "Practice setting up and optimizing a complete environmental control system for microgreen production.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      workshop: {
        title: "Environmental Control System Setup",
        objective: "Design and implement a complete environmental control system with monitoring and automation",
        duration: "120 minutes",
        systems: [
          {
            system: "Temperature Control System",
            timeAllocation: "30 minutes",
            tasks: [
              "Install temperature sensors and monitoring",
              "Set up heating mats for germination area",
              "Configure ventilation fans for cooling",
              "Program temperature controllers and alarms",
              "Test system response and calibration"
            ],
            evaluation: [
              "Accurate temperature monitoring",
              "Proper heating/cooling response",
              "Stable temperature maintenance",
              "Effective alarm system"
            ]
          },
          {
            system: "Lighting System Design",
            timeAllocation: "40 minutes",
            tasks: [
              "Calculate lighting requirements for growing area",
              "Install and position LED grow lights",
              "Set up automated timers and controls",
              "Measure light intensity and uniformity",
              "Optimize light height and coverage"
            ],
            evaluation: [
              "Appropriate light intensity (PPFD)",
              "Uniform light distribution",
              "Correct photoperiod programming",
              "Energy-efficient setup"
            ]
          },
          {
            system: "Humidity and Air Circulation",
            timeAllocation: "30 minutes",
            tasks: [
              "Install humidity monitoring equipment",
              "Set up air circulation fans",
              "Configure humidity control systems",
              "Test air flow patterns",
              "Optimize ventilation for plant health"
            ],
            evaluation: [
              "Proper humidity range maintenance",
              "Effective air circulation",
              "Prevention of stagnant air zones",
              "Balanced ventilation system"
            ]
          },
          {
            system: "Integrated Monitoring System",
            timeAllocation: "20 minutes",
            tasks: [
              "Connect all sensors to monitoring system",
              "Set up data logging and alerts",
              "Create environmental control protocols",
              "Test automated responses",
              "Document system parameters"
            ],
            evaluation: [
              "Comprehensive data collection",
              "Reliable alert system",
              "Automated control responses",
              "Clear documentation"
            ]
          }
        ],
        comparison: {
          title: "System Performance Analysis",
          timeAllocation: "20 minutes",
          criteria: [
            "Energy efficiency and operating costs",
            "Reliability and maintenance requirements",
            "Scalability for larger operations",
            "Integration with existing systems",
            "Return on investment potential"
          ],
          deliverable: "Complete environmental control plan with cost-benefit analysis"
        }
      }
    },

    {
      id: 6,
      type: "troubleshooting",
      title: "Environmental Problem Diagnosis and Solutions",
      content: "Learn to identify, diagnose, and solve common environmental problems that affect microgreen growth and quality.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      problems: [
        {
          issue: "Leggy, Weak Growth",
          symptoms: [
            "Elongated stems with small leaves",
            "Plants falling over or bending",
            "Pale or light green coloration",
            "Reduced flavor and nutritional content"
          ],
          causes: [
            "Insufficient light intensity",
            "Excessive temperature",
            "Poor air circulation",
            "High humidity combined with low light"
          ],
          solutions: [
            "Increase light intensity or reduce light height",
            "Lower growing temperature by 5-10°F",
            "Improve air circulation with fans",
            "Reduce humidity to 50-60% range",
            "Ensure proper photoperiod (12-16 hours)"
          ],
          prevention: [
            "Monitor DLI and maintain 8-15 mol/m²/day",
            "Keep temperatures in optimal range",
            "Provide gentle, constant air movement",
            "Balance humidity with adequate lighting"
          ]
        },
        {
          issue: "Slow or Uneven Germination",
          symptoms: [
            "Seeds taking longer than expected to sprout",
            "Patchy germination across trays",
            "Some areas germinating while others don't",
            "Weak or stunted seedlings"
          ],
          causes: [
            "Temperature too low or inconsistent",
            "Inadequate moisture levels",
            "Poor seed-to-medium contact",
            "Old or poor-quality seeds"
          ],
          solutions: [
            "Increase temperature to 70-75°F for germination",
            "Use heating mats for consistent bottom heat",
            "Ensure even moisture distribution",
            "Improve seed coverage and contact",
            "Test seed viability before planting"
          ],
          prevention: [
            "Maintain consistent germination temperature",
            "Use fresh, high-quality seeds",
            "Ensure proper watering techniques",
            "Monitor and adjust environmental conditions"
          ]
        },
        {
          issue: "Mold and Fungal Growth",
          symptoms: [
            "White, gray, or colored fuzzy growth",
            "Musty or unpleasant odors",
            "Wilting or dying plants",
            "Slimy or discolored growing medium"
          ],
          causes: [
            "Excessive humidity and poor air circulation",
            "Overwatering or waterlogged conditions",
            "Contaminated growing medium or seeds",
            "Inadequate sanitation practices"
          ],
          solutions: [
            "Reduce humidity to 40-50% immediately",
            "Increase air circulation significantly",
            "Remove affected plants and medium",
            "Improve drainage and reduce watering",
            "Sanitize all equipment and surfaces"
          ],
          prevention: [
            "Maintain proper humidity levels (50-70%)",
            "Ensure excellent air circulation",
            "Use sterile growing medium and clean seeds",
            "Practice good sanitation protocols"
          ]
        }
      ],
      diagnosticGuide: {
        title: "Environmental Problem Diagnostic Checklist",
        steps: [
          "Measure and record current temperature, humidity, and light levels",
          "Check air circulation patterns and identify stagnant areas",
          "Examine plants for specific symptoms and patterns",
          "Review recent changes in environmental conditions",
          "Test growing medium moisture and drainage",
          "Inspect equipment for proper operation",
          "Compare conditions to optimal ranges for your crops",
          "Implement corrective measures gradually",
          "Monitor plant response to changes",
          "Document solutions for future reference"
        ]
      }
    },

    {
      id: 7,
      type: "summary",
      title: "Lesson 3 Summary and Assessment",
      content: "You've mastered environmental control for optimal microgreen production. Let's review your achievements and prepare for advanced growing techniques.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      summary: {
        keyLearnings: [
          "Temperature control strategies for all growth stages",
          "Lighting system design and optimization",
          "Humidity and air circulation management",
          "Environmental monitoring and calculation methods",
          "Problem diagnosis and solution implementation"
        ],
        skillsAcquired: [
          "Environmental parameter monitoring and control",
          "Lighting system installation and optimization",
          "Climate control system design",
          "Problem diagnosis and troubleshooting",
          "Data collection and analysis for optimization"
        ],
        practicalExperience: [
          "Complete environmental control system setup",
          "Lighting calculation and installation",
          "Climate monitoring and adjustment",
          "Problem identification and resolution"
        ]
      },
      assessment: {
        title: "Environmental Control Mastery Assessment",
        tasks: [
          {
            task: "Environmental System Design",
            description: "Design a complete environmental control system for a 4x8 foot growing area including temperature, lighting, and humidity control",
            criteria: [
              "Appropriate equipment selection",
              "Correct sizing and positioning",
              "Integration of monitoring systems",
              "Cost-effective design approach"
            ]
          },
          {
            task: "Problem Diagnosis Challenge",
            description: "Diagnose and solve three environmental problems using systematic troubleshooting methods",
            criteria: [
              "Accurate problem identification",
              "Logical diagnostic process",
              "Effective solution implementation",
              "Prevention strategy development"
            ]
          }
        ]
      },
      nextSteps: {
        title: "Preparing for Lesson 4: Advanced Growing Techniques",
        preview: "Now that you've mastered environmental control, you'll learn advanced techniques for maximizing yield, quality, and efficiency in microgreen production.",
        topics: [
          "Succession planting and crop rotation",
          "Nutrient management and supplementation",
          "Advanced harvesting techniques",
          "Quality optimization and shelf life extension"
        ],
        preparation: [
          "Have your environmental control systems operational",
          "Gather advanced growing equipment",
          "Prepare multiple growing areas for succession planting",
          "Review your environmental monitoring data"
        ]
      }
    }
  ]
};

export default lesson3Content; 