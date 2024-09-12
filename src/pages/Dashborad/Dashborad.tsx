import { useState } from "react";
import Sales from "../../components/Sales/Sales";
import Categories from "../../components/Categories/Categories";
import Users from "../../components/Users/Users";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Sales", "Categories", "Users"];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen mx-auto px-1 sm:px-6 lg:px-8 space-y-8 pb-16 pt-8 bg-gray-100">
      {/* Tabs to select */}
      <div className="w-5/6 border rounded-md p-2 sm:text-lg text-sm bg-gray-50">
        <ul className="flex items-center justify-around">
          {tabs.map((tab, index) => (
            <li
              key={tab}
              className={`cursor-pointer py-2 px-4 ${activeTab === index ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* Content of selected tab */}
      <div className="w-5/6">
        {activeTab === 0 && <Sales />}
        {activeTab === 1 && <Categories />}
        {activeTab === 2 && <Users />}
      </div>
    </div>
  );
};

export default Dashboard;
