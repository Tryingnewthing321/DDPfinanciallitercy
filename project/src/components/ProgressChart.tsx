import React from 'react';

const ProgressChart = () => {
  // This is a simplified chart component
  // In a real application, you'd want to use a charting library like Chart.js or Recharts
  return (
    <div className="h-64 flex items-end justify-between gap-2">
      {[65, 80, 45, 90, 75, 60, 85].map((height, index) => (
        <div key={index} className="w-full">
          <div
            className="bg-indigo-600 rounded-t-lg transition-all duration-500"
            style={{ height: `${height}%` }}
          />
          <div className="text-center mt-2 text-sm text-gray-600">
            Day {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressChart;