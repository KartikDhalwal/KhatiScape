"use client";

import { blogPosts } from "@/app/data/blogs";
import { motion } from "framer-motion";
import Link from "next/link";



export default function BlogPage() {
  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-amber-800 mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Interior & Construction Blog
        </motion.h1>
        <motion.p
          className="text-center text-amber-600 mb-12 max-w-2xl mx-auto"
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
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <div className="text-xs text-gray-500 mb-2">
                  By {post.author} • {post.date}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-amber-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
