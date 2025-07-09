import ProjectCard from '@/app/components/ui/ProjectCard';
import { projects } from '@/app/data/projects';

export default function ProjectsPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl text-amber-800 md:text-5xl font-serif font-bold mb-4">
            Our Portfolio
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of completed projects that reflect our design philosophy and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}