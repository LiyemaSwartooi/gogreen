import { motion } from 'framer-motion';
import { 
  FaUsers, FaEarthAmericas, FaLightbulb, FaSatellite, 
  FaMicrochip, FaChartLine, FaLeaf, FaHandshake,
  FaGithub, FaLinkedin, FaTwitter
} from 'react-icons/fa6';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';

const stats = [
  { value: '7,500+', label: 'Satellites Integrated' },
  { value: '105+', label: 'Solution Journeys' },
  { value: '150+', label: 'Countries Covered' },
  { value: '24/7', label: 'Global Monitoring' }
];

const teamMembers = [
  {
    name: "Liyema Swartbooi",
    image: "/assets/images/img1 (2).jpg",
    role: "Head Researcher & Lead Developer",
    qualifications: "Diploma in Information Communication Technology in Application Development",
    description: [
      "• Head Researcher and Lead Developer",
      "• Satellite Technology Integration Specialist",
      "• Application Development Expert",
      "• Project Editor and Technical Lead"
    ]
  },
  {
    name: "Christopher Kruger",
    image: "/assets/images/img1 (1).jpg",
    role: "Research & Development Specialist",
    qualifications: "Diploma in Information Communication Technology in Application Development",
    description: [
      "• Research and Development Lead",
      "• Satellite Technologies Developer",
      "• Technical Editor",
      "• Technology Alignment Specialist"
    ]
  },
  {
    name: "Hailey",
    image: "/assets/images/img1 (3).jpg",
    role: "Content & Education Specialist",
    qualifications: "Bachelor of Education specializing in English Home Language",
    description: [
      "• Video Production Lead",
      "• Content Editor and Writer",
      "• Educational Content Developer",
      "• Technical Documentation Specialist"
    ]
  }
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 md:pt-20 overflow-x-hidden w-full"
    >
      {/* Hero Section */}
      <section className="relative py-8 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white">
          <motion.div
                          className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-emerald-200/30 rounded-full filter blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
                          className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-blue-200/30 rounded-full filter blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Pioneering the Future of{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Environmental Technology
                </span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8">
                Gaianova combines advanced satellite technology, AI, and autonomous systems 
                to address critical sustainability challenges and create a more equitable world.
              </p>
              <Button 
                variant="primary" 
                size="lg"
                icon={<FaHandshake className="w-5 h-5" />}
              >
                Join Our Mission
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating a sustainable future through innovative technology and global collaboration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaSatellite className="w-8 h-8" />,
                title: "Space Technology",
                description: "Leveraging satellite networks for comprehensive Earth monitoring."
              },
              {
                icon: <FaMicrochip className="w-8 h-8" />,
                title: "AI & Innovation",
                description: "Advanced algorithms for environmental pattern recognition."
              },
              {
                icon: <FaChartLine className="w-8 h-8" />,
                title: "Global Impact",
                description: "Measurable results in sustainability and conservation."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="text-emerald-600 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our mission for a sustainable future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaUsers className="w-8 h-8" />,
                title: "Community",
                description: "Building strong global partnerships"
              },
              {
                icon: <FaEarthAmericas className="w-8 h-8" />,
                title: "Sustainability",
                description: "Protecting our planet's future"
              },
              {
                icon: <FaLightbulb className="w-8 h-8" />,
                title: "Innovation",
                description: "Pioneering new solutions"
              },
              {
                icon: <FaLeaf className="w-8 h-8" />,
                title: "Impact",
                description: "Creating measurable change"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-emerald-100 rounded-full p-4 mx-auto mb-6 w-16 h-16 flex items-center justify-center text-emerald-600">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Team of Innovators
            </h2>
            <p className="text-xl text-gray-600">
              Meet the passionate minds behind Gaianova, working together to create a sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-xl">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-white/90">{member.role}</p>
                  </div>
                </div>
                <p className="text-emerald-600 font-medium mb-2">
                  {member.qualifications}
                </p>
                <p className="text-gray-600">
                  {member.description.map((point, idx) => (
                    <div key={idx} className="mb-1">
                      {point}
                    </div>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
