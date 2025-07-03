import React from 'react';
import { ChevronRight, Calendar, Users, BarChart3, ShoppingCart, Package, FileText, Settings, Star, Zap, Shield, Globe, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ModuleSection from './ModuleSection';
import { modules } from '../data/modules';

const MainShowcase: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-900/50 backdrop-blur-md shadow-lg border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-100">POS System</h1>
                <p className="text-sm text-gray-400">Project Showcase</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors hover:bg-gray-800 px-3 py-2 rounded-lg"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.1),transparent)] "></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.1),transparent)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(16,185,129,0.05),transparent)]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-15 animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-emerald-400 text-sm font-medium">
              <Zap className="w-4 h-4" />
              Live Project Showcase
            </div>
            
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                POS System
              </h1>
              <p className="text-2xl md:text-3xl font-light text-emerald-400">
                Next-Generation Restaurant Solution
              </p>
            </div>
            
            {/* Developers Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-3 px-6 py-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-full">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold">K</div>
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">B</div>
                </div>
                <span className="text-gray-300">Karthik & Bhadri</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-full text-gray-400">
                <Calendar className="w-4 h-4" />
                June 2025 – Present
              </div>
            </div>
            
            {/* Description */}
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
                A comprehensive Point of Sale ecosystem designed for modern restaurants, featuring 
                <span className="text-emerald-400 font-medium"> advanced billing</span>, 
                <span className="text-emerald-400 font-medium"> intelligent inventory</span>, 
                <span className="text-emerald-400 font-medium"> seamless kitchen operations</span>, and 
                <span className="text-emerald-400 font-medium"> powerful analytics</span>.
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
              {[
                { icon: Shield, text: "Secure" },
                { icon: Zap, text: "Fast" },
                { icon: Globe, text: "Cloud-Based" },
                { icon: Star, text: "Premium" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-3 bg-gray-800/20 backdrop-blur-sm border border-gray-700 rounded-lg hover:bg-gray-800/30 transition-colors">
                  <feature.icon className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">System Modules</h2>
          <p className="text-gray-400 text-lg">Explore the comprehensive features that power our POS system</p>
        </div>
        
        <div className="space-y-24">
          {modules.map((module, index) => (
            <ModuleSection key={module.id} module={module} index={index} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-md border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-gray-400">
            © 2025 POS System Project. Developed by Karthik & Bhadri.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainShowcase;