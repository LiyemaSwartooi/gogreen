import { Link } from 'react-router-dom';
import { 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin,
  FaSeedling, FaLightbulb, FaStore, FaChartLine,
  FaHandshake, FaTag, FaBook, FaGraduationCap, FaLeaf,
  FaBlog, FaNewspaper, FaBuilding, FaGlobe,
  FaShieldHalved, FaFileContract, FaCookie,
  FaUsers, FaRocket, FaEnvelope
} from 'react-icons/fa6';

const Footer = () => {
  const mainLinks = [
    { name: 'Starter Kits', path: '/starter-kits', icon: <FaSeedling /> },
    { name: 'Training', path: '/training', icon: <FaGraduationCap /> },
    { name: 'Marketplace', path: '/marketplace', icon: <FaStore /> },
    { name: 'About', path: '/about', icon: <FaUsers /> }
  ];

  const resourceLinks = [
    { name: 'Growing Guide', path: '/guide', icon: <FaBook /> },
    { name: 'Success Stories', path: '/success-stories', icon: <FaLeaf /> },
    { name: 'Business Tips', path: '/business-tips', icon: <FaLightbulb /> },
    { name: 'Blog', path: '/blog', icon: <FaBlog /> },
    { name: 'News', path: '/news', icon: <FaNewspaper /> }
  ];

  const companyLinks = [
    { 
      name: 'About Us', 
      path: '/about', 
      icon: <FaUsers />,
      description: 'Our mission and team'
    },
    { 
      name: 'Partners', 
      path: '/partners', 
      icon: <FaHandshake />,
      description: 'Join our network'
    },
    { 
      name: 'Contact', 
      path: '/contact', 
      icon: <FaEnvelope />,
      description: 'Get in touch with us'
    }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy', icon: <FaShieldHalved /> },
    { name: 'Terms of Service', path: '/terms', icon: <FaFileContract /> },
    { name: 'Cookie Policy', path: '/cookies', icon: <FaCookie /> }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/images/4cf473bf-3d31-4a77-ad4e-bb545d122b89-removebg-preview.png" 
                alt="Go Green" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Go Green
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering youth through smart urban farming and sustainable microgreens cultivation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors transform hover:scale-110">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Main Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Main
            </h3>
            <ul className="space-y-2">
              {mainLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-all duration-300 group text-sm"
                  >
                    <span className="transform group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-all duration-300 group text-sm"
                  >
                    <span className="transform group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="group"
                  >
                    <div className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-all duration-300 text-sm">
                      <span className="transform group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <p className="text-xs text-gray-500 group-hover:text-emerald-400/70">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs">
              &copy; {new Date().getFullYear()} Go Green. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {legalLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="text-gray-400 hover:text-emerald-400 text-xs flex items-center space-x-1 group"
                >
                  <span className="transform group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
