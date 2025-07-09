import Link from 'next/link';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  slug: string;
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  category,
  slug,
}: ProjectCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <Link 
            href={`/projects/${slug}`} 
            className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium bg-amber-600 px-6 py-2 rounded-md"
          >
            View Project
          </Link>
        </div>
      </div>
      <div className="p-6 bg-white">
        <span className="text-amber-800 text-sm font-medium">{category}</span>
        <h3 className="text-xl font-serif text-amber-700 font-bold mt-1 mb-2">{title}</h3>
        <p className="text-gray-600 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}