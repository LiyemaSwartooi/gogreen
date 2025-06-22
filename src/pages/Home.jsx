import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import StarterKits from '../components/home/StarterKits';
import Training from '../components/home/Training';
import Marketplace from '../components/home/Marketplace';
import About from '../components/home/About';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative overflow-x-hidden"
    >
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-emerald-200/30 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] bg-blue-200/30 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] bg-purple-200/30 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
        </div>
        {/* Decorative Grid Pattern - Responsive */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] md:bg-[size:20px_20px] lg:bg-[size:24px_24px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen w-full">
        <Hero />
        <StarterKits />
        <Training />
        <Marketplace />
        <About />
      </div>
    </motion.div>
  );
};

export default Home;
