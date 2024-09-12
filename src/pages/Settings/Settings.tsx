import { useState } from "react";
import { BsGear } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Profile from "../../components/Profile/Profile";
import Password from "../../components/Password/Password";

const Settings = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar Mobile */}
      <button
        className="md:hidden fixed z-50 top-20 left-4 p-2 bg-gray-100 rounded-full shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 sm:z-30 w-2/3 md:w-1/6 bg-gray-200 px-12 py-10 transform md:relative md:translate-x-0 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex items-center space-x-3 mb-8">
          <BsGear className="text-3xl text-gray-800" />
          <span className="text-xl font-semibold text-gray-800">Settings</span>
        </div>

        <ul className="space-y-4 mb-8">
          <li
            className={`cursor-pointer text-gray-600 hover:text-gray-800 ${activeSection === 'profile' && 'font-bold text-gray-800'
              }`}
            onClick={() => {
              setActiveSection('profile');
              setIsSidebarOpen(false);
            }}
          >
            Profile
          </li>
          <li
            className={`cursor-pointer text-gray-600 hover:text-gray-800 ${activeSection === 'password' && 'font-bold text-gray-800'
              }`}
            onClick={() => {
              setActiveSection('password');
              setIsSidebarOpen(false);
            }}
          >
            Password
          </li>
        </ul>

        <div className="flex items-center space-x-2 mt-auto text-red-500 cursor-pointer">
          <FaPowerOff />
          <button className="text-sm font-semibold">Logout</button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-8 ml-0 md:ml-1/6 bg-gray-100">
        {activeSection === 'profile' ? <Profile /> : <Password />}
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Settings;
