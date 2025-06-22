import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaArrowLeft, FaLeaf } from 'react-icons/fa6';

const VerifyEmail = () => {
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
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-20 relative">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="relative mx-auto mb-6 w-24 h-24">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-green-200 rounded-full animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-emerald-600 to-green-500 rounded-full p-6 flex items-center justify-center text-white">
                <FaEnvelope className="w-10 h-10" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Verify Your Email</h2>
            <p className="text-gray-600 mt-2">
              We've sent a verification link to your email address. Check your inbox and click the link to start your urban farming journey.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="flex items-center space-x-3 text-emerald-700">
                <FaLeaf className="w-5 h-5" />
                <p className="text-sm">
                  Once verified, you'll get access to:
                </p>
              </div>
              <ul className="mt-2 space-y-1 text-sm text-gray-600 pl-8">
                <li>• Complete training program</li>
                <li>• Business partner network</li>
                <li>• Support resources</li>
              </ul>
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-xl font-medium hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300">
              Resend Verification Email
            </button>

            <div className="text-center">
              <Link 
                to="/signin" 
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transform hover:translate-x-1 transition-transform duration-300"
              >
                <FaArrowLeft className="mr-2" />
                Back to Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VerifyEmail;