import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRocket, FaUserPlus, FaRightToBracket, 
  FaKey, FaEnvelope 
} from 'react-icons/fa6';

const authLinks = [
  {
    name: "Join Mission",
    path: "/join-mission",
    icon: <FaRocket />,
    description: "Start your sustainability journey",
    color: "from-emerald-600 to-teal-600"
  },
  {
    name: "Sign Up",
    path: "/signup",
    icon: <FaUserPlus />,
    description: "Create a new account",
    color: "from-blue-500 to-indigo-600"
  },
  {
    name: "Sign In",
    path: "/signin",
    icon: <FaRightToBracket />,
    description: "Access your account",
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Reset Password",
    path: "/forgot-password",
    icon: <FaKey />,
    description: "Recover your password",
    color: "from-amber-500 to-orange-600"
  },
  {
    name: "Verify Email",
    path: "/verify-email",
    icon: <FaEnvelope />,
    description: "Confirm your email",
    color: "from-cyan-500 to-blue-600"
  }
];

const AuthMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl overflow-hidden z-50"
        >
          <div className="p-4">
            <div className="grid gap-2">
              {authLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  onClick={onClose}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-10 h-10 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center text-white`}>
                    {link.icon}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{link.name}</div>
                    <div className="text-sm text-gray-500">{link.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthMenu; 