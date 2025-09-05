import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  items: Array<{
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    video?: string;
  }>;
}

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  currentIndex,
  onPrevious,
  onNext,
  items
}) => {
  const currentItem = items[currentIndex];

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isOpen) return;

    switch (event.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        onPrevious();
        break;
      case 'ArrowRight':
        onNext();
        break;
    }
  }, [isOpen, onClose, onPrevious, onNext]);

  // Prevent background scroll and handle keyboard events
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      const focusableElements = document.querySelectorAll(
        '[data-lightbox] button, [data-lightbox] [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      if (firstElement) {
        firstElement.focus();
      }
    }
  }, [isOpen, currentIndex]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      data-lightbox
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-90"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-6xl max-h-full flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl animate-zoomIn">
        {/* Media Area */}
        <div className="flex-1 relative bg-gray-100 min-h-[300px] lg:min-h-[500px]">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-cover"
          />
          
          {/* Play button overlay for videos */}
          {currentItem.video && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="p-4 bg-[accent] text-white rounded-full hover:bg-[#e55a4d] transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[accent] focus:ring-opacity-50"
                onClick={() => window.open(currentItem.video, '_blank')}
                aria-label="Play video"
              >
                <Play className="h-8 w-8" />
              </button>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="w-full lg:w-96 p-8 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-sm font-medium text-[accent] mb-2 block">
                {currentItem.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                {currentItem.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[accent] focus:ring-offset-2 rounded-lg"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Description */}
          <div className="flex-1 mb-8">
            <p className="text-gray-600 leading-relaxed">
              {currentItem.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={onPrevious}
              disabled={currentIndex === 0}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-[accent] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[accent] focus:ring-offset-2 rounded-lg transition-colors duration-200"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Previous
            </button>

            <span className="text-sm text-gray-500">
              {currentIndex + 1} of {items.length}
            </span>

            <button
              onClick={onNext}
              disabled={currentIndex === items.length - 1}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-[accent] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[accent] focus:ring-offset-2 rounded-lg transition-colors duration-200"
              aria-label="Next project"
            >
              Next
              <ChevronRight className="h-5 w-5 ml-1" />
            </button>
          </div>

          {/* Project Counter */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex space-x-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const diff = index - currentIndex;
                    if (diff > 0) {
                      for (let i = 0; i < diff; i++) onNext();
                    } else if (diff < 0) {
                      for (let i = 0; i < Math.abs(diff); i++) onPrevious();
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[accent] focus:ring-offset-2 ${
                    index === currentIndex
                      ? 'bg-[accent]'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;