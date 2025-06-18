import React from 'react';
import { FaUsers, FaFileInvoiceDollar, FaChartLine, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const stats = [
    { id: 1, name: 'Total Users', value: '120', icon: FaUsers, color: 'bg-blue-500' },
    { id: 2, name: 'Total Invoices', value: '1,432', icon: FaFileInvoiceDollar, color: 'bg-green-500' },
    { id: 3, name: 'Monthly Revenue', value: '$24,500', icon: FaChartLine, color: 'bg-purple-500' },
    { id: 4, name: 'System Status', value: 'Healthy', icon: FaCog, color: 'bg-yellow-500' },
  ];

  const adminFeatures = [
    { 
      id: 1, 
      name: 'User Management', 
      description: 'Manage user accounts, roles, and permissions',
      path: '/admin/users',
      icon: FaUsers 
    },
    { 
      id: 2, 
      name: 'Invoice Overview', 
      description: 'View and manage all system invoices',
      path: '/admin/invoices',
      icon: FaFileInvoiceDollar 
    },
    { 
      id: 3, 
      name: 'Analytics', 
      description: 'View system statistics and reports',
      path: '/admin/analytics',
      icon: FaChartLine 
    },
    { 
      id: 4, 
      name: 'Settings', 
      description: 'Configure system settings and preferences',
      path: '/admin/settings',
      icon: FaCog 
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to the admin control panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
          >
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {adminFeatures.map((feature) => (
          <Link
            key={feature.id}
            to={feature.path}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <feature.icon className="h-8 w-8 text-indigo-600 group-hover:text-indigo-700" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                  {feature.name}
                </h3>
                <p className="mt-1 text-gray-600">{feature.description}</p>
              </div>
              <div className="ml-auto">
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard