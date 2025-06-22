export const lesson1Content = {
  lessonInfo: {
    id: 9,
    module: "Harvest Methods",
    title: "Harvest Timing and Indicators",
    description: "Learn to identify the perfect time to harvest your microgreens and recognize key harvest indicators.",
    estimatedTime: "45 minutes",
    difficulty: "Intermediate",
    totalSlides: 7
  },

  slides: [
    {
      id: 0,
      type: "introduction",
      title: "Welcome to Lesson 1: Harvest Timing and Indicators",
      content: "Proper harvest timing is crucial for optimal flavor, nutrition, and market value. Learn to recognize when your microgreens are ready for harvest.",
      keyPoints: [
        "Growth stage indicators",
        "Visual harvest cues",
        "Timing considerations",
        "Quality assessment"
      ],
      learningObjectives: [
        "Identify optimal harvest stages",
        "Recognize visual maturity indicators",
        "Understand timing factors",
        "Assess crop readiness"
      ]
    },
    {
      id: 1,
      type: "technique",
      title: "Growth Stage Indicators",
      content: "Learn to identify different growth stages and their relationship to harvest timing.",
      stages: {
        primary: [
          {
            stage: "Cotyledon Stage",
            description: "First leaves have emerged and expanded",
            characteristics: [
              "Seed leaves fully developed",
              "Bright, uniform color",
              "Strong, upright stems",
              "No true leaves present"
            ],
            harvestConsiderations: [
              "Ideal for delicate varieties",
              "Maximum tenderness",
              "Mild flavor profile",
              "Higher market value"
            ],
            timing: "7-10 days for most varieties"
          },
          {
            stage: "First True Leaves",
            description: "True leaves beginning to emerge",
            characteristics: [
              "Small true leaves visible",
              "Cotyledons still healthy",
              "Increased height",
              "Developing flavor"
            ],
            harvestConsiderations: [
              "Stronger flavor development",
              "Higher nutrient content",
              "Good texture balance",
              "Extended shelf life"
            ],
            timing: "10-15 days for most varieties"
          },
          {
            stage: "Mature Microgreens",
            description: "True leaves well developed",
            characteristics: [
              "Multiple true leaves",
              "Full flavor development",
              "Maximum height",
              "Peak nutrient content"
            ],
            harvestConsiderations: [
              "Strongest flavor profile",
              "Maximum nutrient density",
              "Firmer texture",
              "May be less tender"
            ],
            timing: "15-21 days for most varieties"
          }
        ],
        varietySpecific: {
          fast: {
            examples: ["Radish", "Arugula", "Mustard"],
            timing: "5-7 days",
            indicators: [
              "Rapid vertical growth",
              "Quick color development",
              "Early leaf expansion"
            ]
          },
          medium: {
            examples: ["Basil", "Kale", "Cilantro"],
            timing: "10-14 days",
            indicators: [
              "Moderate growth rate",
              "Gradual leaf development",
              "Consistent color formation"
            ]
          },
          slow: {
            examples: ["Parsley", "Chives", "Fennel"],
            timing: "15-21 days",
            indicators: [
              "Slower vertical growth",
              "Extended leaf development",
              "Complex flavor formation"
            ]
          }
        }
      }
    },
    {
      id: 2,
      type: "technique",
      title: "Visual Harvest Indicators",
      content: "Master the visual cues that indicate harvest readiness.",
      indicators: {
        physical: [
          {
            aspect: "Leaf Development",
            optimal: [
              "Fully expanded cotyledons",
              "Uniform size across crop",
              "Healthy green color",
              "No yellowing or damage"
            ],
            suboptimal: [
              "Uneven development",
              "Yellowing leaves",
              "Signs of stress",
              "Irregular growth"
            ]
          },
          {
            aspect: "Stem Strength",
            optimal: [
              "Strong, upright stems",
              "No legginess",
              "Good resistance when bent",
              "Uniform height"
            ],
            suboptimal: [
              "Weak or spindly stems",
              "Excessive legginess",
              "Easy breakage",
              "Irregular height"
            ]
          },
          {
            aspect: "Color Intensity",
            optimal: [
              "Deep, vibrant colors",
              "Uniform coloration",
              "Variety-specific hues",
              "No discoloration"
            ],
            suboptimal: [
              "Pale or faded colors",
              "Irregular patches",
              "Browning edges",
              "Stress-induced coloring"
            ]
          }
        ],
        environmental: [
          {
            factor: "Light Exposure",
            impact: "Affects color development and stem strength",
            considerations: [
              "Even light distribution",
              "Proper day length",
              "Light intensity",
              "Color response"
            ]
          },
          {
            factor: "Temperature",
            impact: "Influences growth rate and quality",
            considerations: [
              "Consistent temperature",
              "Optimal range maintenance",
              "Stress prevention",
              "Growth rate monitoring"
            ]
          },
          {
            factor: "Humidity",
            impact: "Affects leaf development and health",
            considerations: [
              "Proper moisture levels",
              "Disease prevention",
              "Transpiration balance",
              "Quality maintenance"
            ]
          }
        ]
      }
    },
    {
      id: 3,
      type: "hands-on",
      title: "Harvest Readiness Assessment",
      content: "Practice evaluating microgreens for harvest readiness.",
      workshop: {
        title: "Crop Assessment Practice",
        duration: "30 minutes",
        setup: {
          materials: [
            "Various microgreen varieties",
            "Magnifying glass",
            "Measurement tools",
            "Recording sheets",
            "Sample collection containers",
            "Quality assessment guide"
          ],
          safety: [
            "Clean hands and tools",
            "Proper lighting",
            "Careful handling",
            "Documentation materials"
          ]
        },
        exercises: [
          {
            name: "Visual Inspection",
            steps: [
              "Examine leaf development",
              "Check stem strength",
              "Assess color quality",
              "Document observations"
            ]
          },
          {
            name: "Physical Testing",
            steps: [
              "Test stem strength",
              "Check leaf texture",
              "Measure height",
              "Record findings"
            ]
          }
        ]
      }
    },
    {
      id: 4,
      type: "calculation",
      title: "Harvest Timing Calculations",
      content: "Learn to calculate optimal harvest windows and timing factors.",
      calculations: [
        {
          concept: "Growth Rate Calculation",
          formula: "Days to Harvest = Base Rate + Environmental Adjustment",
          explanation: "Calculate expected harvest date based on variety and conditions",
          example: {
            variety: "Radish microgreens",
            baseRate: "7 days",
            adjustment: "+1 day (winter)",
            calculation: "7 + 1 = 8 days to harvest"
          }
        },
        {
          concept: "Harvest Window",
          formula: "Optimal Window = Peak Readiness ± Flexibility Days",
          explanation: "Calculate the ideal harvest window for maximum quality",
          example: {
            peakDay: "Day 10",
            flexibility: "±1 day",
            window: "Days 9-11",
            notes: "Adjust based on market timing"
          }
        }
      ]
    },
    {
      id: 5,
      type: "quality",
      title: "Quality Assessment",
      content: "Learn to evaluate crop quality and readiness for market.",
      assessment: {
        criteria: [
          {
            aspect: "Visual Quality",
            standards: [
              "Uniform height and development",
              "Vibrant, consistent color",
              "No damage or disease",
              "Proper leaf expansion"
            ],
            measurement: "Visual inspection and documentation",
            acceptableRange: "90% or better uniformity"
          },
          {
            aspect: "Physical Quality",
            standards: [
              "Strong stem structure",
              "Crisp, turgid leaves",
              "Clean, healthy appearance",
              "No signs of stress"
            ],
            measurement: "Physical handling and testing",
            acceptableRange: "Firm stems, no wilting"
          },
          {
            aspect: "Size Requirements",
            standards: [
              "Height within target range",
              "Leaf size appropriate",
              "Consistent across crop",
              "Market-appropriate"
            ],
            measurement: "Height and size measurements",
            acceptableRange: "±0.5 inch from target"
          }
        ],
        documentation: {
          required: [
            "Harvest date and time",
            "Variety information",
            "Quality metrics",
            "Environmental conditions"
          ],
          format: [
            "Digital records",
            "Photo documentation",
            "Batch tracking",
            "Quality scores"
          ]
        }
      }
    },
    {
      id: 6,
      type: "summary",
      title: "Lesson 1 Summary and Assessment",
      content: "Review your understanding of harvest timing and indicators.",
      summary: {
        keyLearnings: [
          "Growth stage identification",
          "Visual harvest indicators",
          "Timing calculations",
          "Quality assessment methods",
          "Documentation practices"
        ],
        skillsAcquired: [
          "Crop readiness evaluation",
          "Harvest timing determination",
          "Quality assessment",
          "Record keeping",
          "Decision making"
        ],
        practicalExperience: [
          "Visual inspection techniques",
          "Physical testing methods",
          "Timing calculations",
          "Quality assessment"
        ]
      },
      assessment: {
        title: "Harvest Timing Assessment",
        tasks: [
          {
            task: "Crop Evaluation",
            description: "Evaluate sample crops for harvest readiness",
            criteria: [
              "Accurate stage identification",
              "Proper indicator assessment",
              "Correct timing determination",
              "Quality evaluation"
            ]
          },
          {
            task: "Documentation Practice",
            description: "Complete harvest readiness documentation",
            criteria: [
              "Thorough record keeping",
              "Accurate measurements",
              "Clear documentation",
              "Proper formatting"
            ]
          }
        ]
      },
      nextSteps: {
        title: "Preparing for Lesson 2: Harvesting Techniques",
        preview: "Next, you'll learn proper harvesting methods and tools for different microgreen varieties.",
        topics: [
          "Harvesting tools and equipment",
          "Cutting techniques",
          "Post-harvest handling",
          "Storage preparation"
        ],
        preparation: [
          "Review timing indicators",
          "Gather harvesting tools",
          "Prepare work area",
          "Review safety procedures"
        ]
      }
    }
  ]
};

export default lesson1Content; 