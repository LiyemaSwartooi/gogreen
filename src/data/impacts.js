import { 
  FaTreeCity, FaGlobe, FaHandHoldingHeart, FaSatellite,
  FaMicrochip, FaChartLine, FaShieldHeart, FaEarthAmericas,
  FaIndustry, FaWater, FaLeaf
} from 'react-icons/fa6';

export const impactMetrics = [
  {
    metric: '7.5K+',
    label: 'Satellites Integrated',
    icon: FaSatellite,
    color: 'from-blue-500 to-indigo-600',
    description: 'Global network of environmental monitoring satellites'
  },
  {
    metric: '105+',
    label: 'Solution Journeys',
    icon: FaGlobe,
    color: 'from-emerald-500 to-teal-600',
    description: 'Comprehensive sustainability solutions'
  },
  {
    metric: '24/7',
    label: 'Global Monitoring',
    icon: FaChartLine,
    color: 'from-purple-500 to-pink-600',
    description: 'Continuous environmental surveillance'
  }
];

export const environmentalImpact = [
  {
    category: 'Ecosystem Health',
    metrics: [
      { value: '2M+', label: 'Species Protected' },
      { value: '500K', label: 'Hectares Restored' },
      { value: '95%', label: 'Monitoring Coverage' }
    ],
    icon: FaLeaf
  },
  {
    category: 'Resource Management',
    metrics: [
      { value: '60%', label: 'Water Efficiency' },
      { value: '85%', label: 'Energy Optimization' },
      { value: '40%', label: 'Waste Reduction' }
    ],
    icon: FaWater
  },
  {
    category: 'Industrial Impact',
    metrics: [
      { value: '50%', label: 'Carbon Reduction' },
      { value: '75%', label: 'Process Efficiency' },
      { value: '90%', label: 'Compliance Rate' }
    ],
    icon: FaIndustry
  }
];

export const timeline = [
  {
    year: "2023",
    title: "Platform Launch",
    description: "Global deployment of satellite monitoring network",
    icon: FaSatellite
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Advanced environmental analytics and prediction",
    icon: FaMicrochip
  },
  {
    year: "2025",
    title: "Global Scale",
    description: "Worldwide implementation of sustainability solutions",
    icon: FaEarthAmericas
  }
];

export const sustainabilityGoals = {
  current: [
    { metric: '50%', label: 'Carbon Reduction' },
    { metric: '85%', label: 'Resource Efficiency' },
    { metric: '95%', label: 'Environmental Coverage' }
  ],
  future: [
    { metric: '75%', label: 'Carbon Reduction Target' },
    { metric: '100%', label: 'Renewable Energy' },
    { metric: '0%', label: 'Waste Generation' }
  ]
};
