import React from 'react';
import { 
  FaFileContract, FaWater, FaLeaf, FaFlask, 
  FaChartLine, FaGlobe, FaCloud, FaHandHoldingDollar,
  FaMap, FaCity, FaTriangleExclamation, FaBell,
  FaShieldHalved, FaSatellite, FaDna, FaGear,
  FaClipboardCheck, FaGavel, FaDisplay, FaHeartPulse,
  FaDatabase, FaDroplet, FaBolt, FaSeedling,
  FaIndustry, FaRecycle, FaTrash, FaBoxesStacked, FaTruck, FaMountain, FaUsers, FaMicroscope, FaMicrochip, FaTractor
} from 'react-icons/fa6';

export const getJourneyData = (journeyId) => {
  const journeys = {
    'government-policy': {
      title: "Government & Policy",
      description: "Comprehensive monitoring and policy tools for environmental governance.",
      metrics: [
        {
          icon: React.createElement(FaFileContract),
          label: "Active Policies",
          value: "250+",
          trend: "+12%"
        },
        {
          icon: React.createElement(FaClipboardCheck),
          label: "Compliance Rate",
          value: "94.5%",
          trend: "+3.2%"
        },
        {
          icon: React.createElement(FaChartLine),
          label: "Implementation",
          value: "87.3%",
          trend: "+5.7%"
        },
        {
          icon: React.createElement(FaGavel),
          label: "Regulations",
          value: "1,250+",
          trend: "+8.4%"
        }
      ],
      features: [
        {
          id: 'policy-tools',
          name: "Policy Development Tools",
          icon: React.createElement(FaFileContract),
          description: "Create and manage environmental policies",
          status: "Active",
          progress: 85,
          tools: [
            "Policy Creator",
            "Version Control",
            "Approval Workflow",
            "Impact Assessment"
          ]
        },
        {
          id: 'compliance',
          name: "Compliance Monitoring",
          icon: React.createElement(FaClipboardCheck),
          description: "Track and enforce regulatory compliance",
          status: "Active",
          progress: 92,
          tools: [
            "Compliance Tracker",
            "Violation Reports",
            "Audit Tools",
            "Enforcement Actions"
          ]
        },
        {
          id: 'regulatory',
          name: "Regulatory Framework",
          icon: React.createElement(FaGavel),
          description: "Manage environmental regulations",
          status: "Active",
          progress: 78,
          tools: [
            "Regulation Database",
            "Amendment Tracking",
            "Jurisdiction Manager",
            "Compliance Guidelines"
          ]
        },
        {
          id: 'governance',
          name: "Governance Dashboard",
          icon: React.createElement(FaDisplay),
          description: "Monitor overall environmental governance",
          status: "Active",
          progress: 88,
          tools: [
            "Performance Metrics",
            "Resource Allocation",
            "Stakeholder Management",
            "Report Generator"
          ]
        }
      ]
    },
    'dynamic-earth-microbiome': {
      title: "Dynamic Earth Microbiome",
      description: "Advanced mapping of soil, ocean, and atmospheric microbiomes using hyperspectral imaging.",
      metrics: [
        {
          icon: React.createElement(FaDna),
          label: "Species Tracked",
          value: "1M+",
          trend: "+15%"
        },
        {
          icon: React.createElement(FaFlask),
          label: "Samples Analyzed",
          value: "500K",
          trend: "+22.3%"
        },
        {
          icon: React.createElement(FaGlobe),
          label: "Ecosystems",
          value: "850+",
          trend: "+18.7%"
        },
        {
          icon: React.createElement(FaSatellite),
          label: "Data Points",
          value: "10B+",
          trend: "+25.4%"
        }
      ],
      features: [
        {
          id: 'microbiome-analysis',
          name: "Microbiome Analysis",
          icon: React.createElement(FaDna),
          description: "Advanced analysis of environmental microbiomes",
          status: "Active",
          progress: 92,
          tools: [
            "Species Identification",
            "Population Dynamics",
            "Genetic Analysis",
            "Health Assessment"
          ]
        },
        {
          id: 'ecosystem-health',
          name: "Ecosystem Health Tracking",
          icon: React.createElement(FaHeartPulse),
          description: "Monitor ecosystem vitality in real-time",
          status: "Active",
          progress: 88,
          tools: [
            "Health Metrics",
            "Vitality Assessment",
            "Threat Detection",
            "Recovery Tracking"
          ]
        },
        {
          id: 'biodiversity-mapping',
          name: "Biodiversity Mapping",
          icon: React.createElement(FaLeaf),
          description: "Comprehensive biodiversity tracking",
          status: "Active",
          progress: 85,
          tools: [
            "Species Mapping",
            "Population Tracking",
            "Habitat Analysis",
            "Diversity Metrics"
          ]
        },
        {
          id: 'realtime-monitoring',
          name: "Real-time Monitoring",
          icon: React.createElement(FaChartLine),
          description: "Live environmental data tracking",
          status: "Active",
          progress: 90,
          tools: [
            "Live Data Feed",
            "Alert System",
            "Trend Analysis",
            "Report Generation"
          ]
        }
      ]
    },
    'biodiversity-monitoring': {
      title: "Biodiversity Monitoring",
      description: "Track and incentivize global biodiversity restoration efforts.",
      metrics: [
        {
          icon: React.createElement(FaLeaf),
          label: "Species Tracked",
          value: "2.5M+",
          trend: "+18%"
        },
        {
          icon: React.createElement(FaGlobe),
          label: "Habitats Monitored",
          value: "12K+",
          trend: "+15.3%"
        },
        {
          icon: React.createElement(FaChartLine),
          label: "Population Growth",
          value: "+22%",
          trend: "+5.7%"
        },
        {
          icon: React.createElement(FaShieldHalved),
          label: "Protected Areas",
          value: "850+",
          trend: "+12.4%"
        }
      ],
      features: [
        {
          id: 'species-tracking',
          name: "Species Tracking",
          icon: React.createElement(FaLeaf),
          description: "Advanced species monitoring and tracking",
          status: "Active",
          progress: 92,
          tools: [
            "Species Identification",
            "Movement Tracking",
            "Population Counting",
            "Behavior Analysis"
          ]
        },
        {
          id: 'habitat-monitoring',
          name: "Habitat Monitoring",
          icon: React.createElement(FaGlobe),
          description: "Comprehensive habitat health assessment",
          status: "Active",
          progress: 88,
          tools: [
            "Habitat Mapping",
            "Health Assessment",
            "Change Detection",
            "Risk Analysis"
          ]
        },
        {
          id: 'population-analysis',
          name: "Population Analysis",
          icon: React.createElement(FaChartLine),
          description: "Detailed population dynamics analysis",
          status: "Active",
          progress: 91,
          tools: [
            "Growth Tracking",
            "Distribution Analysis",
            "Migration Patterns",
            "Threat Assessment"
          ]
        },
        {
          id: 'conservation-planning',
          name: "Conservation Planning",
          icon: React.createElement(FaShieldHalved),
          description: "Strategic conservation planning tools",
          status: "Active",
          progress: 86,
          tools: [
            "Action Planning",
            "Resource Allocation",
            "Impact Assessment",
            "Progress Tracking"
          ]
        }
      ]
    },
    'carbon-sequestration': {
      title: "Carbon Sequestration",
      description: "Monitor and manage carbon emissions and sequestration projects. Track carbon credits and offset programs.",
      metrics: [
        {
          icon: React.createElement(FaCloud),
          label: "Carbon Sequestered",
          value: "50M+",
          trend: "+23%",
          unit: "Tons"
        },
        {
          icon: React.createElement(FaLeaf),
          label: "Active Projects",
          value: "2.8K",
          trend: "+15.3%"
        },
        {
          icon: React.createElement(FaHandHoldingDollar),
          label: "Carbon Credits",
          value: "12M+",
          trend: "+28.7%"
        },
        {
          icon: React.createElement(FaChartLine),
          label: "Offset Value",
          value: "$850M",
          trend: "+32.4%"
        }
      ],
      features: [
        {
          id: 'carbon-tracking',
          name: "Carbon Tracking",
          icon: React.createElement(FaCloud),
          description: "Real-time carbon emissions monitoring",
          status: "Active",
          progress: 94,
          tools: [
            "Emissions Monitoring",
            "Sequestration Tracking",
            "Performance Analysis",
            "Impact Assessment"
          ]
        },
        {
          id: 'offset-management',
          name: "Offset Management",
          icon: React.createElement(FaLeaf),
          description: "Comprehensive offset project management",
          status: "Active",
          progress: 88,
          tools: [
            "Project Portfolio",
            "Performance Tracking",
            "Risk Management",
            "Impact Reporting"
          ]
        },
        {
          id: 'project-monitoring',
          name: "Project Monitoring",
          icon: React.createElement(FaChartLine),
          description: "Detailed project performance tracking",
          status: "Active",
          progress: 91,
          tools: [
            "Real-time Monitoring",
            "Progress Tracking",
            "Resource Management",
            "Milestone Tracking"
          ]
        },
        {
          id: 'credit-trading',
          name: "Credit Trading",
          icon: React.createElement(FaHandHoldingDollar),
          description: "Carbon credit marketplace and trading",
          status: "Active",
          progress: 86,
          tools: [
            "Credit Exchange",
            "Market Analysis",
            "Portfolio Management",
            "Transaction History"
          ]
        }
      ]
    },
    'land-use-analysis': {
      title: "Land Use Analysis",
      description: "Historical and current land use analysis for informed policy making. Track changes and development patterns.",
      metrics: [
        {
          icon: React.createElement(FaMap),
          label: "Area Analyzed",
          value: "850M+",
          trend: "+18%",
          unit: "Hectares"
        },
        {
          icon: React.createElement(FaChartLine),
          label: "Changes Detected",
          value: "125K",
          trend: "+22.3%"
        },
        {
          icon: React.createElement(FaCity),
          label: "Development Plans",
          value: "3.2K",
          trend: "+15.7%"
        },
        {
          icon: React.createElement(FaDatabase),
          label: "Data Points",
          value: "15B+",
          trend: "+32.4%"
        }
      ],
      features: [
        {
          id: 'land-mapping',
          name: "Land Use Mapping",
          icon: React.createElement(FaMap),
          description: "Comprehensive land use classification and mapping",
          status: "Active",
          progress: 94,
          tools: [
            "Terrain Analysis",
            "Usage Classification",
            "Coverage Mapping",
            "Zone Planning"
          ]
        },
        {
          id: 'change-detection',
          name: "Change Detection",
          icon: React.createElement(FaChartLine),
          description: "Track and analyze land use changes over time",
          status: "Active",
          progress: 88,
          tools: [
            "Pattern Recognition",
            "Time Series Analysis",
            "Impact Assessment",
            "Trend Prediction"
          ]
        },
        {
          id: 'development-planning',
          name: "Development Planning",
          icon: React.createElement(FaCity),
          description: "Strategic land development planning tools",
          status: "Active",
          progress: 91,
          tools: [
            "Urban Planning",
            "Resource Allocation",
            "Impact Studies",
            "Zoning Tools"
          ]
        },
        {
          id: 'resource-management',
          name: "Resource Management",
          icon: React.createElement(FaLeaf),
          description: "Optimize resource allocation and management",
          status: "Active",
          progress: 86,
          tools: [
            "Resource Tracking",
            "Efficiency Analysis",
            "Distribution Planning",
            "Usage Optimization"
          ]
        }
      ]
    },
    'ecosystem-early-warning': {
      title: "Ecosystem Early Warning",
      description: "Early detection system for ecosystem degradation. Identify and prevent environmental threats.",
      metrics: [
        {
          icon: React.createElement(FaTriangleExclamation),
          label: "Active Alerts",
          value: "1.2K",
          trend: "-8%"
        },
        {
          icon: React.createElement(FaShieldHalved),
          label: "Threats Prevented",
          value: "850+",
          trend: "+25.3%"
        },
        {
          icon: React.createElement(FaChartLine),
          label: "Risk Score",
          value: "Low",
          trend: "-12.7%"
        },
        {
          icon: React.createElement(FaSatellite),
          label: "Monitoring Points",
          value: "25K+",
          trend: "+18.4%"
        }
      ],
      features: [
        {
          id: 'threat-detection',
          name: "Threat Detection",
          icon: React.createElement(FaTriangleExclamation),
          description: "Advanced environmental threat detection",
          status: "Active",
          progress: 96,
          tools: [
            "Pattern Recognition",
            "Anomaly Detection",
            "Threat Classification",
            "Impact Assessment"
          ]
        },
        {
          id: 'risk-assessment',
          name: "Risk Assessment",
          icon: React.createElement(FaShieldHalved),
          description: "Comprehensive ecosystem risk analysis",
          status: "Active",
          progress: 92,
          tools: [
            "Risk Scoring",
            "Vulnerability Analysis",
            "Trend Prediction",
            "Impact Modeling"
          ]
        },
        {
          id: 'alert-system',
          name: "Alert System",
          icon: React.createElement(FaBell),
          description: "Real-time environmental alert system",
          status: "Active",
          progress: 94,
          tools: [
            "Alert Management",
            "Notification System",
            "Response Coordination",
            "Stakeholder Communication"
          ]
        },
        {
          id: 'prevention-planning',
          name: "Prevention Planning",
          icon: React.createElement(FaGear),
          description: "Strategic threat prevention planning",
          status: "Active",
          progress: 88,
          tools: [
            "Prevention Strategies",
            "Resource Allocation",
            "Action Planning",
            "Effectiveness Tracking"
          ]
        }
      ]
    },
    'water-management': {
      title: "Water Management",
      description: "Comprehensive water resource monitoring and optimization system.",
      metrics: [
        {
          icon: React.createElement(FaWater),
          label: "Water Resources",
          value: "2.5B m³",
          trend: "+12%"
        },
        {
          icon: React.createElement(FaChartLine),
          label: "Usage Efficiency",
          value: "94.5%",
          trend: "+8.3%"
        },
        {
          icon: React.createElement(FaFlask),
          label: "Quality Index",
          value: "98.2%",
          trend: "+5.7%"
        },
        {
          icon: React.createElement(FaGlobe),
          label: "Coverage",
          value: "850+",
          trend: "+15.4%",
          unit: "Regions"
        }
      ],
      features: [
        {
          id: 'realtime-monitoring',
          name: "Real-time Monitoring",
          icon: React.createElement(FaWater),
          description: "Live water resource tracking and analysis",
          status: "Active",
          progress: 96,
          tools: [
            "Resource Tracking",
            "Flow Monitoring",
            "Level Analysis",
            "Real-time Alerts"
          ]
        },
        {
          id: 'usage-optimization',
          name: "Usage Optimization",
          icon: React.createElement(FaChartLine),
          description: "Optimize water resource allocation",
          status: "Active",
          progress: 92,
          tools: [
            "Usage Analytics",
            "Efficiency Tools",
            "Demand Forecasting",
            "Resource Planning"
          ]
        },
        {
          id: 'quality-analysis',
          name: "Quality Analysis",
          icon: React.createElement(FaFlask),
          description: "Comprehensive water quality monitoring",
          status: "Active",
          progress: 94,
          tools: [
            "Quality Testing",
            "Contamination Detection",
            "Treatment Monitoring",
            "Compliance Tracking"
          ]
        },
        {
          id: 'distribution-management',
          name: "Distribution Management",
          icon: React.createElement(FaGlobe),
          description: "Efficient water distribution system",
          status: "Active",
          progress: 88,
          tools: [
            "Network Management",
            "Supply Planning",
            "Infrastructure Monitoring",
            "Delivery Optimization"
          ]
        }
      ]
    },
    'orbital-desalination': {
      title: "Orbital Desalination",
      description: "Space-based monitoring of desalination facilities and water distribution.",
      metrics: [
        {
          icon: React.createElement(FaDroplet),
          label: "Water Processed",
          value: "850M m³",
          trend: "+18%"
        },
        {
          icon: React.createElement(FaBolt),
          label: "Energy Efficiency",
          value: "92.5%",
          trend: "+5.3%"
        },
        {
          icon: React.createElement(FaFlask),
          label: "Quality Score",
          value: "99.8%",
          trend: "+2.7%"
        },
        {
          icon: React.createElement(FaGlobe),
          label: "Facilities",
          value: "250+",
          trend: "+15.4%"
        }
      ],
      features: [
        {
          id: 'efficiency-tracking',
          name: "Efficiency Tracking",
          icon: React.createElement(FaChartLine),
          description: "Monitor and optimize facility performance",
          status: "Active",
          progress: 94,
          tools: [
            "Performance Analytics",
            "Resource Tracking",
            "Efficiency Metrics",
            "Cost Analysis"
          ]
        },
        {
          id: 'energy-optimization',
          name: "Energy Optimization",
          icon: React.createElement(FaBolt),
          description: "Optimize energy consumption and efficiency",
          status: "Active",
          progress: 89,
          tools: [
            "Energy Monitoring",
            "Usage Optimization",
            "Load Balancing",
            "Renewable Integration"
          ]
        },
        {
          id: 'quality-control',
          name: "Quality Control",
          icon: React.createElement(FaFlask),
          description: "Maintain water quality standards",
          status: "Active",
          progress: 96,
          tools: [
            "Quality Testing",
            "Purity Analysis",
            "Treatment Monitoring",
            "Standards Compliance"
          ]
        },
        {
          id: 'distribution-networks',
          name: "Distribution Networks",
          icon: React.createElement(FaGlobe),
          description: "Manage water distribution infrastructure",
          status: "Active",
          progress: 91,
          tools: [
            "Network Management",
            "Flow Control",
            "Infrastructure Monitoring",
            "Supply Planning"
          ]
        }
      ]
    },
    'renewable-energy': {
      title: "Renewable Energy",
      description: "Advanced mapping of solar, wind, and hydroelectric energy resources using hyperspectral imaging.",
      metrics: [
        {
          icon: React.createElement(FaBolt),
          label: "Energy Generated",
          value: "500 TWh",
          trend: "+28%"
        },
        {
          icon: React.createElement(FaChartLine),
          label: "Efficiency Rate",
          value: "95.8%",
          trend: "+12.3%"
        },
        {
          icon: React.createElement(FaSatellite),
          label: "Sites Monitored",
          value: "2.5K+",
          trend: "+15.7%"
        },
        {
          icon: React.createElement(FaGlobe),
          label: "Coverage",
          value: "180+",
          trend: "+22.4%",
          unit: "Countries"
        }
      ],
      features: [
        {
          id: 'energy-mapping',
          name: "Energy Mapping",
          icon: React.createElement(FaMap),
          description: "Comprehensive renewable resource mapping",
          status: "Active",
          progress: 94,
          tools: [
            "Resource Assessment",
            "Site Analysis",
            "Potential Mapping",
            "Suitability Studies"
          ]
        },
        {
          id: 'generation-tracking',
          name: "Generation Tracking",
          icon: React.createElement(FaBolt),
          description: "Real-time energy generation monitoring",
          status: "Active",
          progress: 96,
          tools: [
            "Output Monitoring",
            "Performance Analysis",
            "Forecasting",
            "Grid Integration"
          ]
        },
        {
          id: 'resource-optimization',
          name: "Resource Optimization",
          icon: React.createElement(FaChartLine),
          description: "Optimize renewable resource utilization",
          status: "Active",
          progress: 92,
          tools: [
            "Resource Planning",
            "Efficiency Analysis",
            "Load Management",
            "Storage Integration"
          ]
        },
        {
          id: 'energy-efficiency',
          name: "Energy Efficiency",
          icon: React.createElement(FaGear),
          description: "Maximize energy generation efficiency",
          status: "Active",
          progress: 90,
          tools: [
            "Performance Optimization",
            "Loss Reduction",
            "Maintenance Planning",
            "System Integration"
          ]
        }
      ]
    },
    'agriculture': {
      title: "Agriculture",
      description: "Advanced sustainable agriculture solutions using satellite data and AI for optimal farming practices.",
      metrics: [
        {
          icon: React.createElement(FaSeedling),
          label: "Area Monitored",
          value: "5.2M ha",
          trend: "+23%"
        },
        {
          icon: React.createElement(FaChartLine),
          label: "Yield Increase",
          value: "32.5%",
          trend: "+15.3%"
        },
        {
          icon: React.createElement(FaWater),
          label: "Resource Efficiency",
          value: "94.8%",
          trend: "+18.7%"
        },
        {
          icon: React.createElement(FaSatellite),
          label: "Active Farms",
          value: "25K+",
          trend: "+25.4%"
        }
      ],
      features: [
        {
          id: 'precision-farming',
          name: "Precision Farming",
          icon: React.createElement(FaSatellite),
          description: "AI-powered precision agriculture tools",
          status: "Active",
          progress: 94,
          tools: [
            "Field Mapping",
            "Soil Analysis",
            "Precision Planting",
            "Yield Optimization"
          ]
        },
        {
          id: 'crop-monitoring',
          name: "Crop Monitoring",
          icon: React.createElement(FaSeedling),
          description: "Real-time crop health monitoring",
          status: "Active",
          progress: 92,
          tools: [
            "Growth Tracking",
            "Health Assessment",
            "Disease Detection",
            "Stress Analysis"
          ]
        },
        {
          id: 'resource-optimization',
          name: "Resource Optimization",
          icon: React.createElement(FaWater),
          description: "Optimize resource usage and allocation",
          status: "Active",
          progress: 88,
          tools: [
            "Water Management",
            "Nutrient Planning",
            "Resource Tracking",
            "Usage Analytics"
          ]
        },
        {
          id: 'yield-prediction',
          name: "Yield Prediction",
          icon: React.createElement(FaChartLine),
          description: "AI-based yield forecasting",
          status: "Active",
          progress: 90,
          tools: [
            "Yield Forecasting",
            "Risk Assessment",
            "Market Analysis",
            "Harvest Planning"
          ]
        }
      ]
    },
    'industry': {
      title: "Industry",
      description: "Smart industrial solutions for sustainable manufacturing and production processes.",
      metrics: [
        {
          icon: React.createElement(FaIndustry),
          label: "Efficiency Gain",
          value: "45.2%",
          trend: "+18%"
        },
        {
          icon: React.createElement(FaBolt),
          label: "Energy Saved",
          value: "38.5%",
          trend: "+22.3%"
        },
        {
          icon: React.createElement(FaRecycle),
          label: "Waste Reduced",
          value: "62.8%",
          trend: "+15.7%"
        },
        {
          icon: React.createElement(FaCloud),
          label: "Emissions Cut",
          value: "42.4%",
          trend: "+28.4%"
        }
      ],
      features: [
        {
          id: 'process-optimization',
          name: "Process Optimization",
          icon: React.createElement(FaGear),
          description: "Optimize manufacturing processes",
          status: "Active",
          progress: 92,
          tools: [
            "Process Analysis",
            "Workflow Optimization",
            "Quality Control",
            "Performance Tracking"
          ]
        },
        {
          id: 'energy-efficiency',
          name: "Energy Efficiency",
          icon: React.createElement(FaBolt),
          description: "Improve energy usage efficiency",
          status: "Active",
          progress: 88,
          tools: [
            "Energy Monitoring",
            "Usage Optimization",
            "Peak Management",
            "Cost Reduction"
          ]
        },
        {
          id: 'waste-reduction',
          name: "Waste Reduction",
          icon: React.createElement(FaRecycle),
          description: "Minimize waste in production",
          status: "Active",
          progress: 90,
          tools: [
            "Waste Tracking",
            "Process Improvement",
            "Material Recovery",
            "Disposal Management"
          ]
        },
        {
          id: 'emissions-control',
          name: "Emissions Control",
          icon: React.createElement(FaCloud),
          description: "Monitor and reduce emissions",
          status: "Active",
          progress: 86,
          tools: [
            "Emissions Monitoring",
            "Reduction Planning",
            "Compliance Tracking",
            "Impact Assessment"
          ]
        }
      ]
    },
    'circular-economy': {
      title: "Circular Economy",
      description: "Implementation of circular economy principles in production and resource management.",
      metrics: [
        {
          icon: React.createElement(FaRecycle),
          label: "Material Recovery",
          value: "85.2%",
          trend: "+28%"
        },
        {
          icon: React.createElement(FaTrash),
          label: "Waste Reduced",
          value: "72.5%",
          trend: "+32.3%"
        },
        {
          icon: React.createElement(FaBoxesStacked),
          label: "Materials Recycled",
          value: "68.8%",
          trend: "+25.7%"
        },
        {
          icon: React.createElement(FaTruck),
          label: "Supply Chain",
          value: "92.4%",
          trend: "+18.4%"
        }
      ],
      features: [
        {
          id: 'resource-recovery',
          name: "Resource Recovery",
          icon: React.createElement(FaRecycle),
          description: "Maximize resource recovery",
          status: "Active",
          progress: 94,
          tools: [
            "Material Recovery",
            "Process Optimization",
            "Quality Control",
            "Value Assessment"
          ]
        },
        {
          id: 'waste-management',
          name: "Waste Management",
          icon: React.createElement(FaTrash),
          description: "Efficient waste management",
          status: "Active",
          progress: 88,
          tools: [
            "Waste Tracking",
            "Processing Systems",
            "Disposal Planning",
            "Cost Management"
          ]
        },
        {
          id: 'material-recycling',
          name: "Material Recycling",
          icon: React.createElement(FaBoxesStacked),
          description: "Advanced material recycling",
          status: "Active",
          progress: 90,
          tools: [
            "Material Processing",
            "Quality Testing",
            "Sorting Systems",
            "Recovery Analytics"
          ]
        },
        {
          id: 'supply-chain',
          name: "Supply Chain",
          icon: React.createElement(FaTruck),
          description: "Sustainable supply chain",
          status: "Active",
          progress: 86,
          tools: [
            "Chain Management",
            "Route Optimization",
            "Inventory Control",
            "Partner Network"
          ]
        }
      ]
    },
    'waste-management': {
      title: "Waste Management",
      description: "Advanced waste monitoring and management system for environmental protection.",
      metrics: [
        {
          icon: React.createElement(FaRecycle),
          label: "Waste Processed",
          value: "2.5M tons",
          trend: "+18%"
        },
        {
          icon: React.createElement(FaChartLine),
          label: "Efficiency Rate",
          value: "92.5%",
          trend: "+15.3%"
        },
        {
          icon: React.createElement(FaTrash),
          label: "Sites Monitored",
          value: "850+",
          trend: "+12.7%"
        },
        {
          icon: React.createElement(FaShieldHalved),
          label: "Compliance",
          value: "99.8%",
          trend: "+5.4%"
        }
      ],
      features: [
        {
          id: 'realtime-monitoring',
          name: "Real-time Monitoring",
          icon: React.createElement(FaChartLine),
          description: "Live waste monitoring and tracking",
          status: "Active",
          progress: 94,
          tools: [
            "Volume Tracking",
            "Type Analysis",
            "Flow Monitoring",
            "Alert System"
          ]
        },
        {
          id: 'waste-tracking',
          name: "Waste Tracking",
          icon: React.createElement(FaTrash),
          description: "Comprehensive waste tracking system",
          status: "Active",
          progress: 92,
          tools: [
            "Route Planning",
            "Collection Tracking",
            "Processing Status",
            "History Management"
          ]
        },
        {
          id: 'disposal-optimization',
          name: "Disposal Optimization",
          icon: React.createElement(FaRecycle),
          description: "Optimize waste disposal processes",
          status: "Active",
          progress: 88,
          tools: [
            "Method Selection",
            "Cost Optimization",
            "Environmental Impact",
            "Resource Recovery"
          ]
        },
        {
          id: 'compliance-management',
          name: "Compliance Management",
          icon: React.createElement(FaShieldHalved),
          description: "Ensure regulatory compliance",
          status: "Active",
          progress: 90,
          tools: [
            "Regulation Tracking",
            "Audit Management",
            "Report Generation",
            "Violation Prevention"
          ]
        }
      ]
    },
    'air-quality': {
      title: "Air Quality",
      description: "Comprehensive air quality monitoring and analysis platform.",
      metrics: [
        {
          icon: React.createElement(FaCloud),
          label: "Pollutants Tracked",
          value: "250+",
          trend: "-12%"
        },
        {
          icon: React.createElement(FaFlask),
          label: "Quality Score",
          value: "92.5%",
          trend: "+15.3%"
        },
        {
          icon: React.createElement(FaBell),
          label: "Active Alerts",
          value: "85",
          trend: "-8.7%"
        },
        {
          icon: React.createElement(FaHeartPulse),
          label: "Health Index",
          value: "Good",
          trend: "+5.4%"
        }
      ],
      features: [
        {
          id: 'pollutant-detection',
          name: "Pollutant Detection",
          icon: React.createElement(FaCloud),
          description: "Advanced pollutant monitoring and detection",
          status: "Active",
          progress: 94,
          tools: [
            "Pollutant Identification",
            "Concentration Analysis",
            "Source Tracking",
            "Trend Detection"
          ]
        },
        {
          id: 'quality-analysis',
          name: "Quality Analysis",
          icon: React.createElement(FaFlask),
          description: "Comprehensive air quality analysis",
          status: "Active",
          progress: 92,
          tools: [
            "Quality Assessment",
            "Data Analysis",
            "Impact Evaluation",
            "Reporting Tools"
          ]
        },
        {
          id: 'alert-system',
          name: "Alert System",
          icon: React.createElement(FaBell),
          description: "Real-time air quality alert system",
          status: "Active",
          progress: 88,
          tools: [
            "Alert Management",
            "Notification System",
            "Emergency Response",
            "Public Communication"
          ]
        },
        {
          id: 'health-impact',
          name: "Health Impact Assessment",
          icon: React.createElement(FaHeartPulse),
          description: "Health impact analysis and tracking",
          status: "Active",
          progress: 90,
          tools: [
            "Health Monitoring",
            "Risk Assessment",
            "Impact Analysis",
            "Population Studies"
          ]
        }
      ]
    },
    'soil-restoration': {
      title: "Soil Restoration",
      description: "Advanced soil health monitoring and restoration system.",
      metrics: [
        {
          icon: React.createElement(FaSeedling),
          label: "Area Restored",
          value: "2.5M ha",
          trend: "+18%"
        },
        {
          icon: React.createElement(FaFlask),
          label: "Health Score",
          value: "92.5%",
          trend: "+15.3%"
        },
        {
          icon: React.createElement(FaLeaf),
          label: "Sites Monitored",
          value: "850+",
          trend: "+12.7%"
        },
        {
          icon: React.createElement(FaChartLine),
          label: "Recovery Rate",
          value: "95.8%",
          trend: "+5.4%"
        }
      ],
      features: [
        {
          id: 'soil-analysis',
          name: "Soil Analysis",
          icon: React.createElement(FaFlask),
          description: "Comprehensive soil health analysis",
          status: "Active",
          progress: 94,
          tools: [
            "Nutrient Analysis",
            "Microbial Testing",
            "Chemical Assessment",
            "Physical Properties"
          ]
        },
        {
          id: 'restoration-planning',
          name: "Restoration Planning",
          icon: React.createElement(FaSeedling),
          description: "Strategic soil restoration planning",
          status: "Active",
          progress: 92,
          tools: [
            "Treatment Plans",
            "Resource Allocation",
            "Timeline Management",
            "Cost Analysis"
          ]
        },
        {
          id: 'progress-tracking',
          name: "Progress Tracking",
          icon: React.createElement(FaChartLine),
          description: "Monitor restoration progress",
          status: "Active",
          progress: 88,
          tools: [
            "Milestone Tracking",
            "Data Collection",
            "Progress Reports",
            "Impact Assessment"
          ]
        },
        {
          id: 'health-metrics',
          name: "Health Metrics",
          icon: React.createElement(FaLeaf),
          description: "Track soil health indicators",
          status: "Active",
          progress: 90,
          tools: [
            "Health Monitoring",
            "Quality Metrics",
            "Trend Analysis",
            "Performance Tracking"
          ]
        }
      ]
    },
    'urban-planning': {
      title: "Urban Planning",
      description: "Smart urban development and planning using satellite data.",
      metrics: [
        {
          icon: React.createElement(FaCity),
          label: "Cities Monitored",
          value: "1,250+",
          trend: "+22%"
        },
        {
          icon: React.createElement(FaMap),
          label: "Area Covered",
          value: "85K km²",
          trend: "+18.3%"
        },
        {
          icon: React.createElement(FaGear),
          label: "Infrastructure",
          value: "92.5%",
          trend: "+15.7%"
        },
        {
          icon: React.createElement(FaChartLine),
          label: "Sustainability",
          value: "88.4%",
          trend: "+25.4%"
        }
      ],
      features: [
        {
          id: 'city-mapping',
          name: "City Mapping",
          icon: React.createElement(FaMap),
          description: "Advanced urban area mapping and analysis",
          status: "Active",
          progress: 94,
          tools: [
            "3D City Modeling",
            "Land Use Analysis",
            "Density Mapping",
            "Change Detection"
          ]
        },
        {
          id: 'development-planning',
          name: "Development Planning",
          icon: React.createElement(FaCity),
          description: "Smart urban development planning",
          status: "Active",
          progress: 92,
          tools: [
            "Growth Modeling",
            "Impact Assessment",
            "Resource Planning",
            "Zoning Analysis"
          ]
        },
        {
          id: 'infrastructure-analysis',
          name: "Infrastructure Analysis",
          icon: React.createElement(FaGear),
          description: "Urban infrastructure monitoring and planning",
          status: "Active",
          progress: 88,
          tools: [
            "Asset Management",
            "Network Analysis",
            "Maintenance Planning",
            "Capacity Planning"
          ]
        },
        {
          id: 'sustainability-metrics',
          name: "Sustainability Metrics",
          icon: React.createElement(FaChartLine),
          description: "Urban sustainability tracking and analysis",
          status: "Active",
          progress: 90,
          tools: [
            "Energy Efficiency",
            "Green Space Analysis",
            "Emissions Tracking",
            "Resource Usage"
          ]
        }
      ]
    },
    'marine-protection': {
      title: "Marine Protection",
      description: "Advanced marine ecosystem monitoring and protection.",
      metrics: [
        {
          icon: React.createElement(FaWater),
          label: "Ocean Coverage",
          value: "25M km²",
          trend: "+28%"
        },
        {
          icon: React.createElement(FaLeaf),
          label: "Species Protected",
          value: "2,500+",
          trend: "+15.3%"
        },
        {
          icon: React.createElement(FaTrash),
          label: "Pollution Reduced",
          value: "75.8%",
          trend: "+32.7%"
        },
        {
          icon: React.createElement(FaShieldHalved),
          label: "Protected Areas",
          value: "850+",
          trend: "+18.4%"
        }
      ],
      features: [
        {
          id: 'ocean-monitoring',
          name: "Ocean Monitoring",
          icon: React.createElement(FaWater),
          description: "Real-time ocean ecosystem monitoring",
          status: "Active",
          progress: 94,
          tools: [
            "Water Quality Analysis",
            "Temperature Tracking",
            "Current Monitoring",
            "Depth Mapping"
          ]
        },
        {
          id: 'species-protection',
          name: "Species Protection",
          icon: React.createElement(FaLeaf),
          description: "Marine species monitoring and protection",
          status: "Active",
          progress: 92,
          tools: [
            "Population Tracking",
            "Migration Monitoring",
            "Habitat Protection",
            "Threat Assessment"
          ]
        },
        {
          id: 'pollution-control',
          name: "Pollution Control",
          icon: React.createElement(FaTrash),
          description: "Marine pollution monitoring and control",
          status: "Active",
          progress: 88,
          tools: [
            "Pollution Detection",
            "Source Tracking",
            "Clean-up Planning",
            "Prevention Measures"
          ]
        },
        {
          id: 'conservation-planning',
          name: "Conservation Planning",
          icon: React.createElement(FaShieldHalved),
          description: "Marine conservation strategy and implementation",
          status: "Active",
          progress: 90,
          tools: [
            "Area Planning",
            "Resource Management",
            "Stakeholder Engagement",
            "Impact Assessment"
          ]
        }
      ]
    },
    'coastal-management': {
      title: "Coastal Management",
      description: "Integrated coastal zone management and protection.",
      metrics: [
        {
          icon: React.createElement(FaMountain),
          label: "Coastline Monitored",
          value: "25,000 km",
          trend: "+28%"
        },
        {
          icon: React.createElement(FaWater),
          label: "Resources Protected",
          value: "850+",
          trend: "+15.3%"
        },
        {
          icon: React.createElement(FaCity),
          label: "Developments",
          value: "125",
          trend: "+12.7%"
        },
        {
          icon: React.createElement(FaTriangleExclamation),
          label: "Risk Mitigation",
          value: "92.4%",
          trend: "+18.4%"
        }
      ],
      features: [
        {
          id: 'erosion-control',
          name: "Erosion Control",
          icon: React.createElement(FaMountain),
          description: "Advanced coastal erosion monitoring and prevention",
          status: "Active",
          progress: 94,
          tools: [
            "Erosion Tracking",
            "Prevention Planning",
            "Impact Assessment",
            "Mitigation Measures"
          ]
        },
        {
          id: 'resource-management',
          name: "Resource Management",
          icon: React.createElement(FaWater),
          description: "Coastal resource monitoring and management",
          status: "Active",
          progress: 92,
          tools: [
            "Resource Mapping",
            "Usage Tracking",
            "Conservation Planning",
            "Sustainable Management"
          ]
        },
        {
          id: 'development-planning',
          name: "Development Planning",
          icon: React.createElement(FaCity),
          description: "Sustainable coastal development planning",
          status: "Active",
          progress: 88,
          tools: [
            "Zone Planning",
            "Impact Studies",
            "Stakeholder Management",
            "Compliance Tracking"
          ]
        },
        {
          id: 'risk-assessment',
          name: "Risk Assessment",
          icon: React.createElement(FaTriangleExclamation),
          description: "Comprehensive coastal risk evaluation",
          status: "Active",
          progress: 90,
          tools: [
            "Risk Analysis",
            "Threat Detection",
            "Emergency Planning",
            "Response Coordination"
          ]
        }
      ]
    },
    'research-innovation': {
      title: "Research & Innovation",
      description: "Advanced research and innovation platform.",
      metrics: [
        {
          icon: React.createElement(FaFlask),
          label: "Active Research",
          value: "2,500+",
          trend: "+28%"
        },
        {
          icon: React.createElement(FaChartLine),
          label: "Innovation Index",
          value: "92.5%",
          trend: "+15.3%"
        },
        {
          icon: React.createElement(FaUsers),
          label: "Collaborators",
          value: "15K+",
          trend: "+32.7%"
        },
        {
          icon: React.createElement(FaMicroscope),
          label: "Impact Score",
          value: "95.8%",
          trend: "+18.4%"
        }
      ],
      features: [
        {
          id: 'research-tools',
          name: "Research Tools",
          icon: React.createElement(FaFlask),
          description: "Advanced research and analysis tools",
          status: "Active",
          progress: 94,
          tools: [
            "Data Analysis",
            "Modeling Tools",
            "Research Platform",
            "Lab Integration"
          ]
        },
        {
          id: 'innovation-tracking',
          name: "Innovation Tracking",
          icon: React.createElement(FaChartLine),
          description: "Track and analyze innovation progress",
          status: "Active",
          progress: 92,
          tools: [
            "Progress Tracking",
            "Milestone Management",
            "Performance Analytics",
            "Trend Analysis"
          ]
        },
        {
          id: 'collaboration-platform',
          name: "Collaboration Platform",
          icon: React.createElement(FaUsers),
          description: "Global research collaboration platform",
          status: "Active",
          progress: 88,
          tools: [
            "Team Workspace",
            "Communication Tools",
            "Resource Sharing",
            "Project Management"
          ]
        },
        {
          id: 'impact-analysis',
          name: "Impact Analysis",
          icon: React.createElement(FaMicroscope),
          description: "Comprehensive research impact assessment",
          status: "Active",
          progress: 90,
          tools: [
            "Impact Metrics",
            "Outcome Analysis",
            "Value Assessment",
            "Report Generation"
          ]
        }
      ]
    },
    'biotech-research': {
      title: "Biotech Research",
      description: "Advanced biotechnology research and development.",
      metrics: [
        {
          icon: React.createElement(FaFlask),
          label: "Active Projects",
          value: "1,250+",
          trend: "+28%"
        },
        {
          icon: React.createElement(FaDna),
          label: "Research Success",
          value: "92.5%",
          trend: "+15.3%"
        },
        {
          icon: React.createElement(FaMicroscope),
          label: "Breakthroughs",
          value: "85+",
          trend: "+32.7%"
        },
        {
          icon: React.createElement(FaChartLine),
          label: "Impact Score",
          value: "95.8%",
          trend: "+18.4%"
        }
      ],
      features: [
        {
          id: 'research-tools',
          name: "Research Tools",
          icon: React.createElement(FaFlask),
          description: "Advanced biotechnology research tools",
          status: "Active",
          progress: 94,
          tools: [
            "Lab Integration",
            "Analysis Tools",
            "Research Platform",
            "Data Processing"
          ]
        },
        {
          id: 'biotechnology',
          name: "Biotechnology",
          icon: React.createElement(FaDna),
          description: "Cutting-edge biotechnology applications",
          status: "Active",
          progress: 92,
          tools: [
            "Gene Analysis",
            "Protein Studies",
            "Cell Research",
            "Molecular Tools"
          ]
        },
        {
          id: 'innovation-tracking',
          name: "Innovation Tracking",
          icon: React.createElement(FaChartLine),
          description: "Track and analyze research progress",
          status: "Active",
          progress: 88,
          tools: [
            "Progress Monitoring",
            "Milestone Tracking",
            "Performance Analytics",
            "Trend Analysis"
          ]
        },
        {
          id: 'impact-analysis',
          name: "Impact Analysis",
          icon: React.createElement(FaMicroscope),
          description: "Comprehensive research impact assessment",
          status: "Active",
          progress: 90,
          tools: [
            "Impact Metrics",
            "Outcome Analysis",
            "Value Assessment",
            "Report Generation"
          ]
        }
      ]
    },
    'space-technology': {
      title: "Space Technology",
      description: "Advanced space technology research and development.",
      metrics: [
        {
          icon: React.createElement(FaSatellite),
          label: "Active Satellites",
          value: "7,500+",
          trend: "+28%"
        },
        {
          icon: React.createElement(FaMicrochip),
          label: "Tech Success",
          value: "94.5%",
          trend: "+15.3%"
        },
        {
          icon: React.createElement(FaGlobe),
          label: "Coverage",
          value: "Global",
          trend: "+32.7%"
        },
        {
          icon: React.createElement(FaChartLine),
          label: "Impact Score",
          value: "96.8%",
          trend: "+18.4%"
        }
      ],
      features: [
        {
          id: 'research-tools',
          name: "Research Tools",
          icon: React.createElement(FaFlask),
          description: "Advanced space technology research tools",
          status: "Active",
          progress: 94,
          tools: [
            "Satellite Analysis",
            "Orbital Mechanics",
            "Space Weather",
            "Data Processing"
          ]
        },
        {
          id: 'space-technology',
          name: "Space Technology",
          icon: React.createElement(FaSatellite),
          description: "Cutting-edge space technology development",
          status: "Active",
          progress: 92,
          tools: [
            "Satellite Systems",
            "Communication Tech",
            "Propulsion Research",
            "Navigation Systems"
          ]
        },
        {
          id: 'innovation-tracking',
          name: "Innovation Tracking",
          icon: React.createElement(FaChartLine),
          description: "Track and analyze technology progress",
          status: "Active",
          progress: 88,
          tools: [
            "Progress Monitoring",
            "Milestone Tracking",
            "Performance Analytics",
            "Trend Analysis"
          ]
        },
        {
          id: 'impact-analysis',
          name: "Impact Analysis",
          icon: React.createElement(FaMicroscope),
          description: "Comprehensive technology impact assessment",
          status: "Active",
          progress: 90,
          tools: [
            "Impact Metrics",
            "Outcome Analysis",
            "Value Assessment",
            "Report Generation"
          ]
        }
      ]
    }
  };

  return journeys[journeyId] || {
    title: "Journey Dashboard",
    description: "Environmental monitoring and management platform",
    metrics: [],
    features: []
  };
}; 