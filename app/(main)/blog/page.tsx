"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    slug: "modern-kitchen-trends-2025",
    title: "Top 7 Modern Kitchen Trends in 2025",
    description: "Explore cutting-edge kitchen designs, modular layouts, and material choices that are redefining urban homes.",
    date: "June 10, 2025",
    author: "Shape Interiors",
    image: "A luxurious and modern bedroom with a central king-sized upholstered bed in light beige, complemented .jpg",
  },
  {
    slug: "home-renovation-checklist",
    title: "Your Ultimate Home Renovation Checklist",
    description: "Planning a renovation? Here’s a checklist to stay organized and avoid unexpected costs.",
    date: "May 28, 2025",
    author: "Shape Build Co.",
    image: "A stylish and modern bedroom interior featuring a sleek TV wall unit. The center of the wall has a fla.jpg",
  },
  {
    slug: "interior-lighting-guide",
    title: "Lighting Matters: Interior Lighting Guide for Every Room",
    description: "Get the lighting right for mood, function, and style with this room-by-room guide.",
    date: "April 15, 2025",
    author: "Design Sense Team",
    image: "carosal_4.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Interior & Construction Blog
        </motion.h1>
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get inspiration, tips, and insights on home interiors, renovations, and smart space planning from industry experts.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <div className="text-xs text-gray-500 mb-2">
                  By {post.author} • {post.date}
                </div>
                <span
                //   href={`/blog/${post.slug}`}
                  className="inline-block text-indigo-600 font-medium hover:underline"
                >
                  Read More →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
