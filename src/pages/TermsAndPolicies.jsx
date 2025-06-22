import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, FaShield, FaUserShield, FaFileContract,
  FaGavel, FaHandshake, FaLeaf, FaTriangleExclamation,
  FaEnvelope, FaPhone, FaGlobe, FaCalendarDays
} from 'react-icons/fa6';

const TermsAndPolicies = () => {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <FaHandshake className="w-5 h-5" />,
      content: [
        'By accessing and using Go-Green\'s microgreens platform, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'These terms apply to all users of the platform, including farmers, customers, and visitors.'
      ]
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: <FaLeaf className="w-5 h-5" />,
      content: [
        'Go-Green provides microgreens cultivation training, starter kits, and business development resources.',
        'We offer educational content, community support, and marketplace services for urban farming.',
        'Our platform connects aspiring farmers with resources, mentorship, and market opportunities.',
        'Services may be modified, suspended, or discontinued at any time without prior notice.'
      ]
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: <FaUserShield className="w-5 h-5" />,
      content: [
        'You are responsible for maintaining the confidentiality of your account information.',
        'You must provide accurate, current, and complete information during registration.',
        'You agree not to use the platform for any unlawful or prohibited activities.',
        'You are responsible for all activities that occur under your account.',
        'You must notify us immediately of any unauthorized use of your account.'
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy & Data Protection',
      icon: <FaShield className="w-5 h-5" />,
      content: [
        'We collect and process personal information in accordance with our Privacy Policy.',
        'Your personal data is used to provide and improve our services.',
        'We implement appropriate security measures to protect your information.',
        'We do not sell, trade, or share your personal information with third parties without consent.',
        'You have the right to access, update, or delete your personal information.'
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: <FaFileContract className="w-5 h-5" />,
      content: [
        'All content on the Go-Green platform is owned by Go-Green or its licensors.',
        'You may not reproduce, distribute, or create derivative works without permission.',
        'User-generated content remains the property of the user but grants us usage rights.',
        'We respect intellectual property rights and expect users to do the same.'
      ]
    },
    {
      id: 'limitation',
      title: 'Limitation of Liability',
      icon: <FaTriangleExclamation className="w-5 h-5" />,
      content: [
        'Go-Green is not liable for any indirect, incidental, or consequential damages.',
        'Our liability is limited to the amount paid for our services.',
        'We do not guarantee specific results from using our platform or training programs.',
        'Users assume responsibility for their farming activities and business decisions.'
      ]
    },
    {
      id: 'termination',
      title: 'Account Termination',
      icon: <FaGavel className="w-5 h-5" />,
      content: [
        'We may terminate or suspend accounts that violate these terms.',
        'You may cancel your account at any time by contacting us.',
        'Upon termination, your right to use the platform ceases immediately.',
        'Certain provisions of these terms will survive termination.'
      ]
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      icon: <FaCalendarDays className="w-5 h-5" />,
      content: [
        'We reserve the right to modify these terms at any time.',
        'Changes will be posted on this page with an updated effective date.',
        'Continued use of the platform constitutes acceptance of modified terms.',
        'We encourage users to review these terms periodically.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-emerald-100/50 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link 
              to="/signup"
              className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Sign Up</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 shadow-lg">
              <FaFileContract className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Terms and Policies
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using our platform. 
            These terms govern your use of Go-Green's microgreens services and community.
          </p>
          
          <div className="mt-6 text-sm text-gray-500">
            <p>Last updated: January 2025</p>
            <p>Effective date: January 2025</p>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-emerald-100/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-3 text-white shadow-lg">
                  {section.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>
              
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
            <p className="text-emerald-100 leading-relaxed">
              If you have any questions about these Terms and Policies, please don't hesitate to contact us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-white/20 rounded-lg p-3">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-emerald-100 text-sm">support@gogreen.co.za</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-white/20 rounded-lg p-3">
                <FaPhone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-emerald-100 text-sm">+27 11 123 4567</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-white/20 rounded-lg p-3">
                <FaGlobe className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Website</p>
                <p className="text-emerald-100 text-sm">www.gogreen.co.za</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/signup"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-xl hover:from-emerald-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaHandshake className="w-4 h-4 mr-2" />
            I Accept - Create Account
          </Link>
          
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-emerald-500 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300"
          >
            Return to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndPolicies; 