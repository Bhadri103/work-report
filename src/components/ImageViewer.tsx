import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Image {
  src: string;
  alt: string;
}

interface ImageViewerProps {
  images: Image[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-60 bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/80 rounded-full p-2 transition-all duration-200 border border-gray-700"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/80 rounded-full p-3 transition-all duration-200 border border-gray-700"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/80 rounded-full p-3 transition-all duration-200 border border-gray-700"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Image Container - Limited Height */}
      <div className="relative w-full h-full max-w-6xl max-h-[80vh] flex items-center justify-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-gray-700"
        />
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-gray-700">
          <span className="text-emerald-400 font-medium">{currentIndex + 1}</span>
          <span className="text-gray-400 mx-2">/</span>
          <span className="text-gray-300">{images.length}</span>
        </div>
      )}

      {/* Image Title */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-center max-w-2xl px-4">
        <h3 className="text-lg font-semibold bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
          {images[currentIndex].alt}
        </h3>
      </div>
    </div>
  );
};

export default ImageViewer;