import { 
  FaLeaf, FaSolarPanel, FaRecycle, FaSeedling, FaWind, FaDroplet,
  FaSatellite, FaMicrochip, FaGlobe, FaChartLine, FaServer, FaShieldHeart,
  FaEarthAmericas, FaCloudSun, FaWater, FaIndustry
} from 'react-icons/fa6';

export const homeFeatures = [
  {
    icon: FaSatellite,
    title: "Satellite Technology",
    description: "Leveraging 7,500+ satellites for comprehensive Earth monitoring and environmental protection.",
    stats: ["7.5K+", "Satellites", "24/7"]
  },
  {
    icon: FaMicrochip,
    title: "AI & Automation",
    description: "Advanced AI systems for environmental monitoring, prediction, and resource optimization.",
    stats: ["Real-time", "AI-Driven", "Automated"]
  },
  {
    icon: FaGlobe,
    title: "Global Coverage",
    description: "Complete Earth observation from microbiomes to atmospheric conditions.",
    stats: ["100%", "Coverage", "Global"]
  },
  {
    icon: FaChartLine,
    title: "Impact Analytics",
    description: "Real-time tracking and analysis of environmental metrics and sustainability goals.",
    stats: ["Big Data", "Analytics", "Insights"]
  }
];

export const coreFeatures = [
  {
    icon: FaServer,
    title: "Real-Time Monitoring",
    description: "Continuous satellite-based monitoring of environmental conditions and resource usage.",
    category: "Technology"
  },
  {
    icon: FaShieldHeart,
    title: "Ecosystem Protection",
    description: "Advanced systems for biodiversity preservation and ecosystem restoration.",
    category: "Environment"
  },
  {
    icon: FaEarthAmericas,
    title: "Global Solutions",
    description: "Worldwide deployment of sustainable technologies and practices.",
    category: "Scale"
  }
];

export const environmentalSolutions = [
  {
    icon: FaWater,
    title: "Water Management",
    description: "Smart water resource monitoring and optimization.",
    metrics: { value: "500M", unit: "Liters", label: "Saved" }
  },
  {
    icon: FaCloudSun,
    title: "Climate Action",
    description: "Advanced climate monitoring and mitigation strategies.",
    metrics: { value: "40%", unit: "Reduction", label: "CO2" }
  },
  {
    icon: FaIndustry,
    title: "Industrial Efficiency",
    description: "Optimizing industrial processes for sustainability.",
    metrics: { value: "85%", unit: "Efficiency", label: "Increase" }
  }
];

export const sustainabilityInitiatives = [
  {
    icon: FaLeaf,
    title: "Eco-Friendly Practices",
    description: "Implementing sustainable practices for minimal environmental impact.",
    impact: "50% Carbon Reduction"
  },
  {
    icon: FaWind,
    title: "Clean Energy",
    description: "Renewable energy solutions reducing fossil fuel dependency.",
    impact: "100% Green Power"
  },
  {
    icon: FaSeedling,
    title: "Biodiversity",
    description: "Protecting and restoring natural habitats worldwide.",
    impact: "2M+ Species Protected"
  },
  {
    icon: FaDroplet,
    title: "Water Conservation",
    description: "Innovative solutions for water management and conservation.",
    impact: "500M Liters Saved"
  }
];
