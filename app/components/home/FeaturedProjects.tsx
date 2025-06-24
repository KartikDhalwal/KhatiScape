import { projects } from '@/app/data/projects';
import ProjectCard from '../ui/ProjectCard';

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProjects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  );
}