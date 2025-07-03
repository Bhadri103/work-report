import React, { useState } from 'react';
import { Module } from '../data/modules';
import ImageViewer from './ImageViewer';

interface ModuleSectionProps {
  module: Module;
  index: number;
}

const ModuleSection: React.FC<ModuleSectionProps> = ({ module, index }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageViewer = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % module.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + module.images.length) % module.images.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl"></div>
      
      {/* Floating Animation Elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full animate-bounce"></div>
      
      <div className="relative p-8 md:p-12">
        {/* Module Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg">
            <module.icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-100">{module.title}</h2>
            <p className="text-emerald-400 mt-1 font-medium">{module.subtitle}</p>
          </div>
        </div>

        {/* Module Description */}
        <div className="mb-8">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">{module.description}</p>
          
          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {module.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-start space-x-3 group">
                <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 shadow-lg"></div>
                <span className="text-gray-300 group-hover:text-gray-100 transition-colors duration-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshot Gallery */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-100 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
            Screenshots
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {module.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-emerald-500/50"
                onClick={() => openImageViewer(imageIndex)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-8 h-8 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-emerald-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div> 
      </div>

      {/* Image Viewer Modal */}
      {isViewerOpen && (
        <ImageViewer
          images={module.images}
          currentIndex={currentImageIndex}
          onClose={closeImageViewer}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
};

export default ModuleSection;