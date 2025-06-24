import { notFound } from 'next/navigation';
import ProjectGallery from '@/app/components/projects/ProjectGallery';
import ProjectDetails from '@/app/components/projects/ProjectDetails';
import { projects } from '@/app/data/projects';

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
          {project.title}
        </h1>
        <p className="text-amber-600 text-lg mb-8">{project.category}</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProjectGallery images={project.images} />
          <ProjectDetails 
            description={project.description}
            location={project.location}
            size={project.size}
            completed={project.completed}
            features={project.features}
          />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | DesignStudio`,
    description: project.description,
  };
}