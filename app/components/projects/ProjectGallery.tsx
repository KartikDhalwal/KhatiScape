'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type ProjectGalleryProps = {
  images: string[];
};

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative">
      <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
        <Image
          src={images[currentImageIndex]}
          alt={`Project image ${currentImageIndex + 1}`}
          fill
          className="object-cover cursor-zoom-in"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      
      {images.length > 1 && (
        <div className="flex justify-between mt-4">
          <button
            onClick={prevImage}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
            aria-label="Previous image"
          >
            <ChevronLeft className="text-amber-600" />
          </button>
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-amber-600' : 'bg-gray-300'}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
            aria-label="Next image"
          >
            <ChevronRight className="text-amber-600" />
          </button>
        </div>
      )}
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white p-2"
            aria-label="Close modal"
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-6xl h-full max-h-screen">
            <Image
              src={images[currentImageIndex]}
              alt={`Project image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
                aria-label="Previous image"
              >
                <ChevronLeft className="text-amber-600" size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
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