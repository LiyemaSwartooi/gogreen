import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLock, FaArrowLeft } from 'react-icons/fa6';

const ResetPassword = () => {
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
            <h2 className="text-2xl font-bold text-gray-900">Create New Password</h2>
            <p className="text-gray-600">Enter your new password below</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">New Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter new password"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-xl font-medium hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300">
              Reset Password
            </button>
          </form>

          <div className="mt-6 text-center">
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
    </motion.div>
  );
};

export default ResetPassword;