import React from 'react';
import Navbar from './components/Dashboard/Navbar';
import Sidebar from './components/Dashboard/Sidebar';
import MainSection from './components/Dashboard/MainSection';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <Navbar />
      <div className="flex">
        <Sidebar className="w-1/4" />
        <MainSection className="w-3/4 p-4" />
      </div>
    </div>
  );
};

export default Dashboard;
