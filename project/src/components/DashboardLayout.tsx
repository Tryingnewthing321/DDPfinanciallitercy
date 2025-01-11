import React from 'react';
import { Menu, User, Settings, HelpCircle, Upload, BookOpen, BarChart2 } from 'lucide-react';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            thoughtHOME
          </h1>
        </div>
        <nav className="mt-6">
          <NavItem icon={<BarChart2 />} text="Dashboard" active />
          <NavItem icon={<Upload />} text="Upload PDFs" />
          <NavItem icon={<User />} text="Profile" />
          <NavItem icon={<Settings />} text="Settings" />
          <NavItem icon={<HelpCircle />} text="FAQ" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {children}
      </main>
    </div>
  );
};

const NavItem: React.FC<{
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}> = ({ icon, text, active }) => (
  <div
    className={`flex items-center gap-3 px-6 py-3 cursor-pointer transition-colors ${
      active
        ? 'bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600'
        : 'text-gray-600 hover:bg-gray-50'
    }`}
  >
    {icon}
    <span className="font-medium">{text}</span>
  </div>
);

export default DashboardLayout;