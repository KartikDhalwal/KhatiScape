"use client";

import { useParams } from "next/navigation";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { blogPosts } from "@/app/data/blogs";
import Image from "next/image";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="p-10">Post not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-14">
      <SectionTitle title={post.title} subtitle="" />
      <div className="text-sm text-amber-500 mb-6">
        By {post.author} • {post.date}
      </div>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={800}
        className="w-full h-full object-cover"
      />
      <div className="whitespace-pre-line text-gray-700 leading-relaxed">
        {post.readMoreContent}
      </div>
    </div>
  );
}
