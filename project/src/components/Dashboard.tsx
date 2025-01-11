import React from 'react';
import { Upload as UploadIcon, Book, Clock, Award, ChevronRight } from 'lucide-react';
import ProgressChart from './ProgressChart';
import UploadModal from './UploadModal';

const Dashboard = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = React.useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <UploadIcon className="h-5 w-5" />
          Upload PDF
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<Book className="h-8 w-8 text-blue-500" />}
          title="Total Quizzes"
          value="24"
        />
        <StatCard
          icon={<Clock className="h-8 w-8 text-green-500" />}
          title="Study Time"
          value="32h"
        />
        <StatCard
          icon={<Award className="h-8 w-8 text-purple-500" />}
          title="Avg. Score"
          value="85%"
        />
      </div>

      {/* Progress Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Learning Progress</h3>
        <ProgressChart />
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </div>
      </div>

      {/* Upload Modal */}
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </div>
  );
};

const StatCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
}> = ({ icon, title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-gray-50 rounded-lg">{icon}</div>
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  </div>
);

const ActivityItem: React.FC<{
  title: string;
  time: string;
  type: string;
}> = ({ title, time, type }) => (
  <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
    <div>
      <h4 className="font-medium text-gray-800">{title}</h4>
      <p className="text-sm text-gray-500">{time}</p>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">{type}</span>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </div>
  </div>
);

const recentActivities = [
  {
    title: "Machine Learning Basics Quiz",
    time: "2 hours ago",
    type: "Quiz Completed"
  },
  {
    title: "Data Structures PDF",
    time: "5 hours ago",
    type: "File Upload"
  },
  {
    title: "Algorithm Analysis",
    time: "1 day ago",
    type: "Quiz Started"
  }
];

export default Dashboard;