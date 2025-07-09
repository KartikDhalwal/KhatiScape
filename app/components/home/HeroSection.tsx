'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-100">
      <div className="absolute inset-0">
        <Image
          src="/hom1.png"
          alt="Luxury interior design"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif font-bold mb-6"
        >
          Transforming Spaces, <br /> Creating Dreams
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Premium interior design and architectural solutions tailored to your vision
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button variant="primary" href="/projects">
            View Our Work
          </Button>
          <Button variant="secondary" href="/contact">
            Get a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}