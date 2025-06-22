export const lesson1Content = {
  lessonInfo: {
    id: 1,
    module: "Growing Techniques",
    title: "Seed Selection and Preparation",
    description: "Master the foundation of successful microgreens by learning proper seed selection and preparation techniques.",
    estimatedTime: "45 minutes",
    difficulty: "Beginner",
    totalSlides: 8
  },

  slides: [
    {
      id: 0,
      type: "introduction",
      title: "Welcome to Lesson 1: Seed Selection and Preparation",
      content: "The foundation of successful microgreens starts with choosing the right seeds and preparing them properly for optimal germination. In this comprehensive lesson, you'll master every aspect of seed selection and preparation.",
      keyPoints: [
        "Learn to identify high-quality microgreen seeds",
        "Understand different seed varieties and their characteristics",
        "Master pre-treatment and preparation techniques",
        "Calculate proper seeding densities for optimal growth"
      ],
      learningObjectives: [
        "Identify quality seeds suitable for microgreen production",
        "Understand storage requirements for maintaining seed viability",
        "Apply proper pre-soaking and preparation methods",
        "Calculate seeding rates for different varieties and tray sizes"
      ]
    },

    {
      id: 1,
      type: "theory",
      title: "Understanding Microgreen Seeds",
      content: "Not all seeds are created equal when it comes to microgreen production. Understanding the characteristics that make seeds suitable for microgreens is crucial for success.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      sections: [
        {
          heading: "What Makes a Good Microgreen Seed?",
          content: "Quality microgreen seeds have specific characteristics that ensure successful germination and growth.",
          points: [
            "High germination rate (85% or higher)",
            "Uniform size for even growth",
            "Free from chemical treatments",
            "Fresh with recent harvest dates",
            "Proper storage conditions maintained"
          ]
        },
        {
          heading: "Seed Categories for Microgreens",
          content: "Different seed types require different approaches and have varying characteristics.",
          categories: [
            {
              type: "Small Seeds",
              examples: ["Arugula", "Kale", "Mustard", "Radish"],
              characteristics: ["Quick germination", "Dense planting", "No pre-soaking needed"],
              density: "1-2 oz per 10x20 tray"
            },
            {
              type: "Medium Seeds", 
              examples: ["Broccoli", "Cabbage", "Cauliflower"],
              characteristics: ["Moderate germination time", "Standard density", "Optional pre-soaking"],
              density: "2-3 oz per 10x20 tray"
            },
            {
              type: "Large Seeds",
              examples: ["Peas", "Sunflowers", "Beans"],
              characteristics: ["Slower germination", "Lower density", "Requires pre-soaking"],
              density: "3-4 oz per 10x20 tray"
            }
          ]
        }
      ],
      quiz: {
        question: "What is the minimum acceptable germination rate for microgreen seeds?",
        options: ["70%", "80%", "85%", "90%"],
        correct: 2,
        explanation: "A germination rate of 85% or higher ensures consistent, dense growth and reduces gaps in your microgreen trays."
      }
    },

    {
      id: 2,
      type: "practical",
      title: "Seed Quality Assessment",
      content: "Learn hands-on techniques to evaluate seed quality before purchasing or planting.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      practicalSteps: [
        {
          step: 1,
          title: "Visual Inspection",
          description: "Examine seeds for physical quality indicators",
          instructions: [
            "Look for uniform size and color",
            "Check for cracks, holes, or damage",
            "Ensure seeds are plump and well-formed",
            "Avoid discolored or shriveled seeds"
          ],
          tips: [
            "Use a magnifying glass for small seeds",
            "Compare with known good quality samples",
            "Reject batches with >10% damaged seeds"
          ]
        },
        {
          step: 2,
          title: "Germination Test",
          description: "Test a sample to verify germination rate",
          instructions: [
            "Count out 100 seeds randomly",
            "Place on damp paper towel in container",
            "Keep at room temperature (70-75°F)",
            "Count germinated seeds after 3-5 days"
          ],
          tips: [
            "Use distilled water to avoid chlorine",
            "Keep consistently moist but not waterlogged",
            "Test each new seed batch before large plantings"
          ]
        },
        {
          step: 3,
          title: "Storage Assessment",
          description: "Evaluate how seeds have been stored",
          instructions: [
            "Check packaging dates and expiration",
            "Ensure seeds were stored in cool, dry conditions",
            "Look for signs of moisture damage or mold",
            "Verify proper labeling and variety information"
          ],
          tips: [
            "Avoid seeds stored in hot, humid conditions",
            "Choose suppliers with proper storage facilities",
            "Buy from reputable microgreen seed suppliers"
          ]
        }
      ],
      exercise: {
        title: "Seed Quality Evaluation Lab",
        description: "Practice evaluating different seed samples for quality",
        materials: ["Various seed samples", "Magnifying glass", "Paper towels", "Containers", "Water"],
        timeRequired: "30 minutes",
        steps: [
          "Obtain 3 different seed varieties",
          "Perform visual inspection on each",
          "Set up germination tests",
          "Document findings and quality ratings"
        ]
      }
    },

    {
      id: 3,
      type: "technique",
      title: "Pre-Soaking Techniques",
      content: "Master the art of pre-soaking seeds to improve germination rates and timing.",
      image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      techniques: [
        {
          name: "Standard Water Soak",
          bestFor: ["Peas", "Sunflowers", "Beans", "Chickpeas"],
          method: {
            duration: "8-12 hours",
            temperature: "Room temperature (65-75°F)",
            ratio: "1:3 seeds to water ratio",
            steps: [
              "Rinse seeds in clean water",
              "Place in bowl with room temperature water",
              "Soak for recommended time",
              "Drain and rinse before planting"
            ]
          },
          benefits: [
            "Faster germination (24-48 hours sooner)",
            "More uniform emergence",
            "Higher germination rates",
            "Reduced risk of seed rot"
          ],
          warnings: [
            "Don't over-soak (causes seed rot)",
            "Use clean, filtered water",
            "Plant immediately after soaking",
            "Not suitable for small seeds"
          ]
        },
        {
          name: "Hydrogen Peroxide Soak",
          bestFor: ["Seeds with hard coats", "Older seeds", "Problem germination"],
          method: {
            duration: "15-30 minutes",
            solution: "1 tsp 3% H2O2 per cup water",
            steps: [
              "Mix hydrogen peroxide solution",
              "Soak seeds for specified time",
              "Rinse thoroughly with clean water",
              "Proceed with normal planting"
            ]
          },
          benefits: [
            "Breaks down seed coat inhibitors",
            "Reduces fungal contamination",
            "Improves germination of difficult seeds",
            "Sanitizes seed surface"
          ]
        }
      ],
      troubleshooting: [
        {
          problem: "Seeds floating during soak",
          cause: "Low-quality or hollow seeds",
          solution: "Remove floating seeds, they likely won't germinate"
        },
        {
          problem: "Sour smell during soaking",
          cause: "Bacterial contamination",
          solution: "Discard batch, use fresh water and clean containers"
        },
        {
          problem: "Seeds splitting or cracking",
          cause: "Over-soaking or too warm water",
          solution: "Reduce soak time, use cooler water"
        }
      ]
    },

    {
      id: 4,
      type: "calculation",
      title: "Seeding Density Calculations",
      content: "Learn to calculate proper seeding densities for optimal microgreen production.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      calculations: [
        {
          concept: "Basic Density Formula",
          formula: "Seeds per tray = Tray area × Seeds per square inch",
          explanation: "Calculate how many seeds fit in your growing area for optimal density",
          example: {
            traySize: "10x20 inch tray (200 sq inches)",
            seedType: "Radish microgreens",
            density: "8-10 seeds per square inch",
            calculation: "200 × 9 = 1,800 seeds",
            weight: "Approximately 1.5-2 oz of radish seeds"
          }
        },
        {
          concept: "Weight-Based Calculations",
          explanation: "Most commercial recommendations are given by weight",
          conversions: [
            {
              variety: "Arugula",
              seedsPerOz: "~15,000",
              recommendedOz: "1-1.5 oz per 10x20 tray",
              density: "Dense carpet, no gaps"
            },
            {
              variety: "Peas",
              seedsPerOz: "~200-300",
              recommendedOz: "3-4 oz per 10x20 tray",
              density: "Single layer, touching"
            },
            {
              variety: "Sunflower",
              seedsPerOz: "~400-500",
              recommendedOz: "2-3 oz per 10x20 tray",
              density: "Single layer, slight gaps"
            }
          ]
        }
      ],
      practiceProblems: [
        {
          problem: "You have a 5x5 inch tray and want to grow broccoli microgreens. How many seeds do you need?",
          given: "Tray: 5x5 inches, Broccoli density: 6-8 seeds per sq inch",
          solution: "25 sq inches × 7 seeds = 175 seeds (approximately 0.3 oz)",
          steps: [
            "Calculate tray area: 5 × 5 = 25 sq inches",
            "Use average density: 7 seeds per sq inch",
            "Multiply: 25 × 7 = 175 seeds needed"
          ]
        }
      ],
      tools: [
        "Digital scale (0.1g precision)",
        "Calculator or smartphone app",
        "Measuring tape or ruler",
        "Seed counting tray (optional)",
        "Reference charts for seed weights"
      ]
    },

    {
      id: 5,
      type: "hands-on",
      title: "Seed Preparation Workshop",
      content: "Put your knowledge into practice with a complete seed preparation session.",
      workshop: {
        title: "Complete Seed Preparation Session",
        objective: "Prepare seeds for three different microgreen varieties",
        duration: "60 minutes",
        materials: [
          "3 seed varieties (1 small, 1 medium, 1 large)",
          "Digital scale",
          "Measuring containers",
          "Soaking bowls",
          "Clean water",
          "Paper towels",
          "Labels",
          "Growing trays"
        ],
        phases: [
          {
            phase: "Planning Phase (10 minutes)",
            tasks: [
              "Select three seed varieties",
              "Calculate seeding densities",
              "Determine which seeds need pre-soaking",
              "Prepare workspace and materials"
            ]
          },
          {
            phase: "Quality Assessment (15 minutes)",
            tasks: [
              "Perform visual inspection of all seeds",
              "Document any quality concerns",
              "Set up germination tests if needed",
              "Make go/no-go decisions for each variety"
            ]
          },
          {
            phase: "Pre-Treatment (20 minutes)",
            tasks: [
              "Begin soaking process for large seeds",
              "Prepare small seeds for direct planting",
              "Set timers for soaking duration",
              "Organize seeds by planting schedule"
            ]
          },
          {
            phase: "Final Preparation (15 minutes)",
            tasks: [
              "Drain and rinse soaked seeds",
              "Measure final quantities for planting",
              "Label all prepared seed batches",
              "Clean and organize workspace"
            ]
          }
        ],
        checkpoints: [
          "All seeds visually inspected and approved",
          "Correct quantities calculated and measured",
          "Appropriate pre-treatment applied",
          "Seeds ready for immediate planting",
          "Workspace clean and organized"
        ]
      }
    },

    {
      id: 6,
      type: "troubleshooting",
      title: "Common Seed Problems and Solutions",
      content: "Learn to identify and solve common seed-related issues before they impact your harvest.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      problems: [
        {
          issue: "Poor Germination Rate",
          symptoms: ["Patchy growth", "Many empty spots", "Less than 70% germination"],
          causes: [
            "Old or improperly stored seeds",
            "Incorrect moisture levels",
            "Wrong temperature conditions",
            "Contaminated growing medium"
          ],
          solutions: [
            "Test seed viability before large plantings",
            "Maintain consistent moisture without waterlogging",
            "Keep temperature between 65-75°F",
            "Use sterile growing medium and clean water"
          ],
          prevention: [
            "Buy from reputable suppliers",
            "Store seeds properly (cool, dry, dark)",
            "Use seeds within recommended timeframe",
            "Maintain clean growing environment"
          ]
        },
        {
          issue: "Uneven Germination",
          symptoms: ["Some areas dense, others sparse", "Different growth heights", "Staggered emergence"],
          causes: [
            "Uneven seed distribution",
            "Inconsistent moisture",
            "Temperature variations",
            "Mixed seed ages or varieties"
          ],
          solutions: [
            "Use proper seeding techniques",
            "Ensure even watering coverage",
            "Maintain stable temperature",
            "Use seeds from same batch/date"
          ]
        },
        {
          issue: "Seed Rot or Mold",
          symptoms: ["Fuzzy growth on seeds", "Sour smell", "Slimy texture", "Dark discoloration"],
          causes: [
            "Overwatering or poor drainage",
            "High humidity with poor air circulation",
            "Contaminated seeds or growing medium",
            "Too warm temperatures"
          ],
          solutions: [
            "Improve drainage and reduce watering",
            "Increase air circulation",
            "Use hydrogen peroxide treatment",
            "Lower temperature to 65-70°F"
          ]
        }
      ],
      diagnosticGuide: {
        title: "Quick Diagnostic Checklist",
        steps: [
          "Check seed age and storage conditions",
          "Verify germination rate with test sample",
          "Assess moisture levels and drainage",
          "Monitor temperature consistency",
          "Inspect for signs of contamination",
          "Review seeding density and distribution"
        ]
      }
    },

    {
      id: 7,
      type: "summary",
      title: "Lesson 1 Summary and Next Steps",
      content: "Congratulations! You've completed the comprehensive seed selection and preparation lesson. Let's review what you've learned and prepare for the next lesson.",
      summary: {
        keyLearnings: [
          "How to identify and select high-quality microgreen seeds",
          "Understanding different seed categories and their requirements",
          "Proper pre-soaking techniques for improved germination",
          "Calculating optimal seeding densities for different varieties",
          "Troubleshooting common seed-related problems"
        ],
        skillsAcquired: [
          "Seed quality assessment techniques",
          "Pre-treatment and preparation methods",
          "Density calculations for optimal growth",
          "Problem identification and solution strategies"
        ],
        practicalExperience: [
          "Hands-on seed evaluation",
          "Complete preparation workshop",
          "Troubleshooting real scenarios",
          "Quality control processes"
        ]
      },
      assessment: {
        title: "Knowledge Check",
        questions: [
          {
            question: "What is the minimum acceptable germination rate for microgreen seeds?",
            type: "multiple-choice",
            options: ["70%", "80%", "85%", "90%"],
            correct: 2
          },
          {
            question: "Which seeds typically require pre-soaking?",
            type: "multiple-choice", 
            options: ["Small seeds like arugula", "Medium seeds like broccoli", "Large seeds like peas", "All seeds equally"],
            correct: 2
          },
          {
            question: "Calculate the approximate seed weight needed for a 10x20 tray of radish microgreens.",
            type: "calculation",
            answer: "1.5-2 oz",
            explanation: "200 sq inches × 9 seeds per sq inch = 1,800 seeds ≈ 1.5-2 oz"
          }
        ]
      },
      nextSteps: {
        title: "Preparing for Lesson 2: Growing Medium Setup",
        preview: "In the next lesson, you'll learn how to prepare the perfect growing environment for your carefully selected seeds.",
        topics: [
          "Choosing the right growing medium",
          "Preparing soil-based and soilless systems",
          "Sterilization and contamination prevention",
          "Setting up drainage and watering systems"
        ],
        preparation: [
          "Review your seed selection notes",
          "Gather growing medium materials",
          "Prepare your growing space",
          "Have your selected seeds ready for planting"
        ]
      }
    }
  ]
};

export default lesson1Content; 