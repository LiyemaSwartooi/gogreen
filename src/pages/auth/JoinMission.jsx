import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaSatellite, FaLeaf, FaGlobe, FaUsers,
  FaLightbulb, FaCode, FaChartLine, FaHandshake,
  FaGraduationCap, FaMicrochip, FaFlask, FaEarthAmericas
} from 'react-icons/fa6';

const roles = [
  {
    title: "Youth Leader",
    description: "Lead and inspire other young urban farmers",
    icon: <FaUsers className="w-8 h-8" />,
    skills: ["Leadership", "Communication", "Community Building"],
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "Urban Farmer",
    description: "Master microgreens cultivation techniques",
    icon: <FaLeaf className="w-8 h-8" />,
    skills: ["Farming", "Sustainability", "Operations"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Business Developer",
    description: "Help grow and scale urban farming ventures",
    icon: <FaChartLine className="w-8 h-8" />,
    skills: ["Marketing", "Sales", "Strategy"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Innovation Lead",
    description: "Drive technological advances in urban farming",
    icon: <FaLightbulb className="w-8 h-8" />,
    skills: ["Innovation", "Technology", "Research"],
    color: "from-amber-500 to-orange-500"
  }
];

const projects = [
  {
    title: "Youth Training",
    description: "Comprehensive urban farming education program",
    icon: <FaGraduationCap className="w-6 h-6" />,
    impact: "500+ Graduates"
  },
  {
    title: "Community Gardens",
    description: "Establishing urban farms in communities",
    icon: <FaGlobe className="w-6 h-6" />,
    impact: "50+ Gardens"
  },
  {
    title: "Market Access",
    description: "Connecting farmers with local businesses",
    icon: <FaHandshake className="w-6 h-6" />,
    impact: "100+ Partners"
  },
  {
    title: "Innovation Hub",
    description: "Developing new farming technologies",
    icon: <FaFlask className="w-6 h-6" />,
    impact: "15+ Innovations"
  }
];

const JoinMission = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-emerald-50/50" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute bottom-1/3 -left-1/4 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-2/3 right-1/3 w-96 h-96 bg-purple-200/30 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Mission to
            <span className="block bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              Empower Youth Through Urban Farming
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Be part of a movement that's creating sustainable livelihoods through innovative urban farming solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { value: "500+", label: "Youth Trained" },
              { value: "50+", label: "Urban Gardens" },
              { value: "100+", label: "Business Partners" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roles Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Join As A</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-r ${role.color} rounded-xl p-4 text-white shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
                    {role.icon}
                  </div>
                  <div className="mt-8 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {role.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {role.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Initiatives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg p-3 text-white w-12 h-12 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="font-semibold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                  {project.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-10 blur-2xl rounded-2xl" />
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl text-center relative">
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white transform hover:scale-110 transition-transform duration-300">
              <FaHandshake className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join our community of young urban farmers and start your journey towards a sustainable future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/signup"
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                Start Your Journey
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-full font-medium hover:bg-emerald-50 transform hover:scale-[1.02] transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JoinMission;