'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type ProjectGalleryProps = {
  images: string[];
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentImageIndex]);

  // Swipe gestures for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextImage();
    }
    if (touchStart - touchEnd < -50) {
      prevImage();
    }
  };

  return (
    <div className="relative w-full">
      {/* Main Image */}
      <div 
        className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden shadow-md"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[currentImageIndex]}
          alt={`Project image ${currentImageIndex + 1}`}
          fill
          className="object-cover cursor-zoom-in transition-opacity duration-300"
          onClick={() => setIsModalOpen(true)}
          priority={currentImageIndex === 0}
          quality={85}
        />
      </div>
      
      {/* Navigation Dots - Mobile */}
      {images.length > 1 && isMobile && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === index ? 'bg-amber-600 w-4' : 'bg-gray-300'}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Navigation Arrows - Desktop */}
      {images.length > 1 && !isMobile && (
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevImage}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition hover:scale-105"
            aria-label="Previous image"
          >
            <ChevronLeft className="text-amber-600 w-6 h-6" />
          </button>
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentImageIndex === index ? 'bg-amber-600' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition hover:scale-105"
            aria-label="Next image"
          >
            <ChevronRight className="text-amber-600 w-6 h-6" />
          </button>
        </div>
      )}
      
      {/* Modal View */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition"
            aria-label="Close modal"
          >
            <X size={32} />
          </button>
          <div 
            className="relative w-full max-w-6xl h-full max-h-screen"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={images[currentImageIndex]}
              alt={`Project image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 p-2 rounded-full bg-white bg-opacity-80 shadow-md hover:bg-opacity-100 transition hover:scale-105 sm:left-8"
                aria-label="Previous image"
              >
                <ChevronLeft className="text-amber-600" size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 p-2 rounded-full bg-white bg-opacity-80 shadow-md hover:bg-opacity-100 transition hover:scale-105 sm:right-8"
                aria-label="Next image"
              >
                <ChevronRight className="text-amber-600" size={32} />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}