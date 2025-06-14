import { FaCircleQuestion, FaBook, FaHeadset } from 'react-icons/fa6';

const JourneyFooter = () => {
  return (
    <div className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            © 2024 Gaianova. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <button className="flex items-center space-x-2 hover:text-emerald-600 transition-colors">
              <FaCircleQuestion className="w-4 h-4" />
              <span>Help</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-emerald-600 transition-colors">
              <FaBook className="w-4 h-4" />
              <span>Documentation</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-emerald-600 transition-colors">
              <FaHeadset className="w-4 h-4" />
              <span>Support</span>
            </button>
          </div>
          <div className="text-sm text-gray-600">
            Version 1.0.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyFooter; 