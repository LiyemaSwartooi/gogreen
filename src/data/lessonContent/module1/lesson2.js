export const lesson2Content = {
  lessonInfo: {
    id: 2,
    module: "Growing Techniques",
    title: "Growing Medium Setup",
    description: "Learn how to prepare and maintain the perfect growing environment for your microgreens using various growing mediums.",
    estimatedTime: "50 minutes",
    difficulty: "Beginner",
    totalSlides: 7
  },

  slides: [
    {
      id: 0,
      type: "introduction",
      title: "Welcome to Lesson 2: Growing Medium Setup",
      content: "The growing medium is the foundation that supports your microgreens throughout their growth cycle. In this lesson, you'll master different medium types, preparation techniques, and setup methods for optimal results.",
      keyPoints: [
        "Compare different growing medium options",
        "Learn proper preparation and sterilization techniques",
        "Master setup procedures for various systems",
        "Understand drainage and moisture management"
      ],
      learningObjectives: [
        "Select appropriate growing mediums for different microgreen varieties",
        "Prepare sterile, well-draining growing environments",
        "Set up both soil-based and soilless growing systems",
        "Implement proper moisture management techniques"
      ]
    },

    {
      id: 1,
      type: "comparison",
      title: "Growing Medium Options Comparison",
      content: "Understanding the pros and cons of different growing mediums helps you choose the best option for your specific needs and growing conditions.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      mediumTypes: [
        {
          name: "Potting Soil Mix",
          composition: "Peat moss, vermiculite, perlite, organic matter",
          pros: [
            "Nutrient-rich for extended growth",
            "Excellent water retention",
            "Familiar and easy to use",
            "Good for beginners",
            "Supports larger microgreens"
          ],
          cons: [
            "Can harbor pests and diseases",
            "Messy to work with",
            "Heavier than alternatives",
            "May contain unwanted additives",
            "Requires more cleanup"
          ],
          bestFor: ["Brassicas", "Herbs", "Leafy greens", "Longer growing cycles"],
          cost: "$",
          difficulty: "Easy",
          setup: "Fill trays 1-2 inches deep, level and lightly compress"
        },
        {
          name: "Coconut Coir",
          composition: "Processed coconut husk fiber",
          pros: [
            "Sustainable and eco-friendly",
            "Excellent water retention",
            "Disease resistant",
            "pH neutral",
            "Lightweight and clean"
          ],
          cons: [
            "Low in nutrients (may need supplements)",
            "Can be dusty when dry",
            "Requires pH adjustment sometimes",
            "More expensive than soil",
            "May need pre-rinsing"
          ],
          bestFor: ["Peas", "Sunflowers", "Radishes", "Quick-growing varieties"],
          cost: "$$",
          difficulty: "Moderate",
          setup: "Hydrate compressed blocks, fluff and fill trays"
        },
        {
          name: "Hemp Growing Mats",
          composition: "Compressed hemp fiber mats",
          pros: [
            "Reusable and biodegradable",
            "Clean and mess-free",
            "Excellent drainage",
            "No soil contamination",
            "Professional appearance"
          ],
          cons: [
            "Higher initial investment",
            "Limited nutrient content",
            "Requires careful watering",
            "May dry out quickly",
            "Not suitable for all varieties"
          ],
          bestFor: ["Wheatgrass", "Barley grass", "Small seeds", "Commercial production"],
          cost: "$$$",
          difficulty: "Moderate",
          setup: "Pre-soak mats, place in trays with drainage"
        },
        {
          name: "Hydroponic Pads",
          composition: "Synthetic growing pads or rockwool",
          pros: [
            "Sterile and consistent",
            "Excellent for automation",
            "No pest issues",
            "Precise nutrient control",
            "Professional results"
          ],
          cons: [
            "Requires nutrient solutions",
            "Higher complexity",
            "More expensive setup",
            "Less forgiving for beginners",
            "Environmental concerns with disposal"
          ],
          bestFor: ["Commercial production", "Controlled environments", "Research"],
          cost: "$$$$",
          difficulty: "Advanced",
          setup: "Requires hydroponic system with nutrient delivery"
        }
      ],
      selectionGuide: {
        title: "Choosing Your Growing Medium",
        factors: [
          {
            factor: "Experience Level",
            beginner: "Potting soil mix",
            intermediate: "Coconut coir or hemp mats",
            advanced: "Hydroponic systems"
          },
          {
            factor: "Budget",
            low: "Potting soil mix",
            medium: "Coconut coir",
            high: "Hemp mats or hydroponic pads"
          },
          {
            factor: "Cleanliness Priority",
            low: "Soil acceptable",
            medium: "Coconut coir",
            high: "Hemp mats or hydroponic"
          }
        ]
      }
    },

    {
      id: 2,
      type: "technique",
      title: "Soil-Based Medium Preparation",
      content: "Master the preparation of soil-based growing mediums for optimal microgreen production.",
      preparation: {
        recipe: {
          title: "Optimal Microgreen Soil Mix",
          ingredients: [
            {
              component: "High-quality potting soil",
              ratio: "60%",
              purpose: "Base growing medium with nutrients"
            },
            {
              component: "Perlite",
              ratio: "25%",
              purpose: "Drainage and aeration"
            },
            {
              component: "Vermiculite",
              ratio: "10%",
              purpose: "Water retention and nutrients"
            },
            {
              component: "Coconut coir",
              ratio: "5%",
              purpose: "Additional water retention"
            }
          ],
          totalVolume: "For 10x20 tray: approximately 2-3 cups of mix"
        },
        steps: [
          {
            step: 1,
            title: "Gather and Measure Ingredients",
            description: "Collect all components and measure according to ratios",
            details: [
              "Use measuring cups for consistent ratios",
              "Choose high-quality, sterile potting soil",
              "Ensure perlite is horticultural grade",
              "Pre-moisten coir if using compressed blocks"
            ],
            tips: [
              "Buy ingredients in bulk for cost savings",
              "Store components in sealed containers",
              "Label containers with contents and dates"
            ]
          },
          {
            step: 2,
            title: "Mix Components Thoroughly",
            description: "Combine all ingredients for uniform distribution",
            details: [
              "Use large mixing container or wheelbarrow",
              "Add dry ingredients first, then liquids",
              "Mix thoroughly with hands or garden tool",
              "Break up any clumps or compressed areas"
            ],
            tips: [
              "Wear gloves to protect hands",
              "Mix in well-ventilated area",
              "Add water gradually while mixing"
            ]
          },
          {
            step: 3,
            title: "Adjust Moisture Content",
            description: "Achieve optimal moisture level for planting",
            details: [
              "Mix should feel like wrung-out sponge",
              "Add water gradually while mixing",
              "Test by squeezing handful - should hold shape but crumble easily",
              "Let mixture rest 30 minutes before final adjustment"
            ],
            tips: [
              "Use spray bottle for fine moisture control",
              "Filtered water prevents chlorine issues",
              "Slightly damp is better than too wet"
            ]
          }
        ]
      },
      sterilization: {
        title: "Optional Sterilization Process",
        when: "Use when concerned about pests, diseases, or weed seeds",
        methods: [
          {
            method: "Oven Sterilization",
            temperature: "180°F (82°C)",
            duration: "30 minutes",
            steps: [
              "Spread moist soil mix in baking pans",
              "Cover with aluminum foil",
              "Heat for 30 minutes at 180°F",
              "Cool completely before use"
            ],
            pros: ["Kills most pathogens", "Easy to do at home"],
            cons: ["May reduce beneficial microbes", "Time consuming"]
          },
          {
            method: "Steam Sterilization",
            equipment: "Pressure cooker or steamer",
            duration: "15-20 minutes",
            steps: [
              "Place soil in heat-proof containers",
              "Steam at 15 PSI for 15-20 minutes",
              "Allow to cool and dry slightly",
              "Test moisture before use"
            ],
            pros: ["Very effective sterilization", "Retains soil structure"],
            cons: ["Requires special equipment", "More complex process"]
          }
        ]
      }
    },

    {
      id: 3,
      type: "technique",
      title: "Soilless Medium Setup",
      content: "Learn to prepare and set up soilless growing systems for clean, efficient microgreen production.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      systems: [
        {
          type: "Coconut Coir System",
          setup: {
            materials: [
              "Compressed coir blocks or loose coir",
              "Growing trays with drainage holes",
              "Water collection trays",
              "pH test strips",
              "Measuring containers"
            ],
            steps: [
              {
                step: 1,
                title: "Hydrate Coir",
                description: "Expand compressed coir blocks with water",
                process: [
                  "Place coir block in large container",
                  "Add warm water gradually (5-7 times block volume)",
                  "Allow 15-30 minutes for full expansion",
                  "Fluff with hands to break up clumps"
                ]
              },
              {
                step: 2,
                title: "Adjust pH",
                description: "Test and adjust pH to optimal range",
                process: [
                  "Test pH of hydrated coir (should be 5.5-6.5)",
                  "If too acidic, add small amount of lime",
                  "If too alkaline, add small amount of sulfur",
                  "Mix thoroughly and retest"
                ]
              },
              {
                step: 3,
                title: "Fill Trays",
                description: "Distribute prepared coir in growing trays",
                process: [
                  "Fill trays to 1-1.5 inch depth",
                  "Level surface with hands or tool",
                  "Lightly compress to eliminate air pockets",
                  "Ensure even distribution across tray"
                ]
              }
            ]
          }
        },
        {
          type: "Hemp Mat System",
          setup: {
            materials: [
              "Hemp growing mats (cut to tray size)",
              "Growing trays with drainage",
              "Water collection system",
              "Scissors for cutting mats"
            ],
            steps: [
              {
                step: 1,
                title: "Prepare Mats",
                description: "Cut and pre-soak hemp mats",
                process: [
                  "Cut mats to fit tray dimensions exactly",
                  "Soak in clean water for 10-15 minutes",
                  "Gently squeeze out excess water",
                  "Mats should be damp but not dripping"
                ]
              },
              {
                step: 2,
                title: "Install in Trays",
                description: "Place prepared mats in growing trays",
                process: [
                  "Lay mat flat in tray bottom",
                  "Ensure complete coverage with no gaps",
                  "Press gently to ensure contact with tray",
                  "Check that drainage holes aren't blocked"
                ]
              }
            ]
          }
        }
      ],
      troubleshooting: [
        {
          problem: "Coir too acidic (pH below 5.5)",
          solution: "Add small amount of agricultural lime, mix well, test again"
        },
        {
          problem: "Hemp mats drying out quickly",
          solution: "Increase watering frequency, check humidity levels, ensure proper drainage"
        },
        {
          problem: "Uneven moisture distribution",
          solution: "Improve tray leveling, check for drainage blockages, adjust watering technique"
        }
      ]
    },

    {
      id: 4,
      type: "practical",
      title: "Tray Setup and Drainage Systems",
      content: "Master the setup of proper drainage and watering systems for consistent moisture management.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      drainageSystems: [
        {
          system: "Basic Bottom Watering",
          description: "Simple and effective system for most home growers",
          components: [
            "Growing trays with drainage holes",
            "Solid water collection trays",
            "Water level indicators (optional)"
          ],
          setup: [
            "Drill 1/4 inch holes every 2 inches in growing trays",
            "Place growing tray inside solid collection tray",
            "Ensure 1/4 inch gap between tray bottoms",
            "Add water to collection tray as needed"
          ],
          advantages: [
            "Prevents overwatering",
            "Encourages deep root growth",
            "Reduces leaf diseases",
            "Easy to monitor water levels"
          ]
        },
        {
          system: "Ebb and Flow System",
          description: "Automated system for larger operations",
          components: [
            "Growing trays with drainage",
            "Reservoir tank",
            "Water pump with timer",
            "Distribution tubing",
            "Overflow protection"
          ],
          setup: [
            "Connect pump to timer system",
            "Install distribution lines to trays",
            "Set flooding schedule (2-3 times daily)",
            "Adjust flood depth to 1/4 inch",
            "Install overflow drains for safety"
          ],
          advantages: [
            "Automated watering",
            "Consistent moisture levels",
            "Scalable for large operations",
            "Nutrient solution delivery possible"
          ]
        }
      ],
      wateringTechniques: [
        {
          technique: "Bottom Watering Method",
          steps: [
            "Add 1/4 inch water to collection tray",
            "Allow 15-30 minutes for absorption",
            "Check that growing medium is evenly moist",
            "Remove excess water if not absorbed",
            "Repeat as needed based on moisture levels"
          ],
          timing: "Daily during germination, every 1-2 days during growth",
          indicators: "Water when top surface appears dry but medium is still moist below"
        },
        {
          technique: "Misting for Germination",
          steps: [
            "Use fine mist spray bottle",
            "Spray lightly over seed surface",
            "Avoid creating puddles or runoff",
            "Maintain consistent surface moisture",
            "Switch to bottom watering after germination"
          ],
          timing: "2-3 times daily during germination phase only",
          indicators: "Surface should appear moist but not waterlogged"
        }
      ],
      qualityChecks: [
        {
          check: "Drainage Test",
          procedure: "Pour water on surface, should drain within 5-10 minutes",
          passFailCriteria: "Pass: Water drains freely, Fail: Standing water after 15 minutes"
        },
        {
          check: "Moisture Distribution",
          procedure: "Check moisture levels at multiple points across tray",
          passFailCriteria: "Pass: Even moisture throughout, Fail: Dry or soggy spots"
        },
        {
          check: "Medium Stability",
          procedure: "Gently press surface, should be firm but not compacted",
          passFailCriteria: "Pass: Springs back lightly, Fail: Too soft or too hard"
        }
      ]
    },

    {
      id: 5,
      type: "hands-on",
      title: "Complete Medium Setup Workshop",
      content: "Practice setting up complete growing systems with different medium types.",
      workshop: {
        title: "Multi-System Setup Challenge",
        objective: "Set up three different growing systems and compare their characteristics",
        duration: "90 minutes",
        systems: [
          {
            system: "Soil-Based System",
            timeAllocation: "30 minutes",
            tasks: [
              "Mix soil components according to recipe",
              "Adjust moisture to optimal level",
              "Fill and level growing trays",
              "Set up bottom watering system",
              "Test drainage and moisture distribution"
            ],
            evaluation: [
              "Proper ingredient ratios",
              "Optimal moisture content",
              "Even distribution in trays",
              "Effective drainage setup"
            ]
          },
          {
            system: "Coconut Coir System",
            timeAllocation: "25 minutes",
            tasks: [
              "Hydrate and prepare coir",
              "Test and adjust pH if needed",
              "Fill trays with prepared coir",
              "Set up watering system",
              "Document setup parameters"
            ],
            evaluation: [
              "Complete coir hydration",
              "Proper pH range (5.5-6.5)",
              "Even tray filling",
              "Functional watering system"
            ]
          },
          {
            system: "Hemp Mat System",
            timeAllocation: "20 minutes",
            tasks: [
              "Cut mats to proper size",
              "Pre-soak and prepare mats",
              "Install in trays correctly",
              "Test moisture retention",
              "Set up maintenance schedule"
            ],
            evaluation: [
              "Proper mat sizing and fit",
              "Adequate pre-soaking",
              "Correct installation",
              "Good moisture retention"
            ]
          }
        ],
        comparison: {
          title: "System Comparison Analysis",
          timeAllocation: "15 minutes",
          criteria: [
            "Setup time and complexity",
            "Initial cost and ongoing expenses",
            "Cleanliness and maintenance requirements",
            "Expected performance for different crops",
            "Suitability for your growing goals"
          ],
          deliverable: "Complete comparison chart with recommendations"
        }
      }
    },

    {
      id: 6,
      type: "summary",
      title: "Lesson 2 Summary and Assessment",
      content: "You've mastered the fundamentals of growing medium selection and setup. Let's review your achievements and prepare for the next lesson.",
      summary: {
        keyLearnings: [
          "Comprehensive comparison of growing medium options",
          "Proper preparation techniques for soil-based systems",
          "Setup procedures for soilless growing systems",
          "Drainage and watering system installation",
          "Quality control and troubleshooting methods"
        ],
        skillsAcquired: [
          "Medium selection based on specific requirements",
          "Soil mixing and preparation techniques",
          "Soilless system setup and management",
          "Drainage system design and installation",
          "Moisture management and monitoring"
        ],
        practicalExperience: [
          "Hands-on setup of multiple growing systems",
          "Comparative analysis of different mediums",
          "Troubleshooting common setup issues",
          "Quality assessment and optimization"
        ]
      },
      assessment: {
        title: "Practical Skills Assessment",
        tasks: [
          {
            task: "Medium Selection Challenge",
            description: "Given specific growing conditions and crop requirements, select and justify the best growing medium",
            criteria: [
              "Appropriate medium selection",
              "Clear justification of choice",
              "Understanding of trade-offs",
              "Cost-benefit analysis"
            ]
          },
          {
            task: "Setup Demonstration",
            description: "Set up a complete growing system from start to finish",
            criteria: [
              "Proper preparation techniques",
              "Correct installation procedures",
              "Functional drainage system",
              "Quality control checks completed"
            ]
          }
        ]
      },
      nextSteps: {
        title: "Preparing for Lesson 3: Optimal Growing Conditions",
        preview: "Now that you have your growing medium prepared, you'll learn to create and maintain the perfect environment for microgreen growth.",
        topics: [
          "Temperature control and monitoring",
          "Lighting requirements and setup",
          "Humidity management techniques",
          "Air circulation and ventilation"
        ],
        preparation: [
          "Have your growing systems ready",
          "Gather environmental monitoring tools",
          "Prepare lighting equipment",
          "Review your medium setup notes"
        ]
      }
    }
  ]
};

export default lesson2Content; 