import { FaMagnifyingGlass, FaBell, FaUser, FaGear, FaBars } from 'react-icons/fa6';
import { getJourneyData } from '@/data/journeyData';

const JourneyNavbar = ({ journeyId, onToggleSidebar }) => {
  const journeyData = getJourneyData(journeyId);

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={onToggleSidebar}
              className="absolute left-4 p-2 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
            >
              <FaBars className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="ml-12">
              <h1 className="text-xl font-bold text-gray-900">{journeyData.title}</h1>
              <p className="text-sm text-gray-600">{journeyData.description}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <FaMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <FaBell className="w-5 h-5 text-gray-600" />
            </button>
            
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <FaGear className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex items-center space-x-3 pl-4 border-l">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">John Doe</div>
                <div className="text-xs text-gray-500">Administrator</div>
              </div>
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <FaUser className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyNavbar; 