'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '@/app/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-amber-900 md:text-4xl font-serif font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-amber-800 max-w-2xl mx-auto">
            Hear what our clients say about our work and service
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <TestimonialCard {...testimonials[currentIndex]} />
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-amber-100 transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-amber-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-amber-100 transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-amber-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}