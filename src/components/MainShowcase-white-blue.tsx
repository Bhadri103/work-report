import React from 'react';
import { ShoppingCart, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ModuleSection from './ModuleSection';
import { modules } from '../data/modules';

const MainShowcase: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">POS System</h1>
                <p className="text-sm text-gray-600">Project Showcase</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            POS System
            <span className="block text-2xl md:text-3xl font-normal mt-2 text-blue-100">
              Project Showcase
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Developed by <span className="font-semibold">Karthik & Bhadri</span>
          </p>
          <p className="text-lg mb-8 text-blue-200">
            Duration: June 2025 – Present
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed">
              A complete Point of Sale system tailored for restaurant operations, including billing, 
              inventory management, kitchen ticketing, comprehensive reports, customer & vendor management, 
              and advanced analytics dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {modules.map((module, index) => (
            <ModuleSection key={module.id} module={module} index={index} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-gray-600">
            © 2025 POS System Project. Developed by Karthik & Bhadri.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainShowcase;