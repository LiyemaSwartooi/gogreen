import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Privacy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 prose prose-emerald max-w-none">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, enroll in courses, or contact us for support.
          </p>
          <ul>
            <li>Personal information (name, email, phone number)</li>
            <li>Payment information (processed securely through third-party providers)</li>
            <li>Course progress and learning analytics</li>
            <li>Communication preferences</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our educational services</li>
            <li>Process payments and transactions</li>
            <li>Send course updates and educational content</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Analyze usage patterns to enhance user experience</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>5. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Update or correct your information</li>
            <li>Delete your account and associated data</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>7. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at privacy@gogreen.com
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Privacy; 