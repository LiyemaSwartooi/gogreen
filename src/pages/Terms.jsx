import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 md:pt-20 overflow-x-hidden w-full min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/30"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/signup"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-4"
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Sign Up
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 prose prose-emerald max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Go Green Microgreens platform, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Go Green provides educational content, training programs, and resources for microgreens cultivation and urban farming business development.
          </p>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>Provide accurate and complete registration information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Use the platform in accordance with applicable laws</li>
            <li>Respect intellectual property rights</li>
          </ul>

          <h2>4. Training Programs</h2>
          <p>
            Our training programs are designed for educational purposes. Results may vary based on individual effort, market conditions, and other factors.
          </p>

          <h2>5. Payment Terms</h2>
          <ul>
            <li>Payments for courses and kits are processed securely</li>
            <li>Refund policy available upon request</li>
            <li>Prices subject to change with notice</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            All content, materials, and resources provided through Go Green are protected by copyright and other intellectual property laws.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            Go Green shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our platform.
          </p>

          <h2>8. Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at legal@gogreen.com
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Terms; 