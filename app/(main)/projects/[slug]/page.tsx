import { notFound } from 'next/navigation';
import { projects } from '@/app/data/projects';
import { ProjectGallery } from '@/app/components/projects/ProjectGallery';
import { ProjectDetails } from '@/app/components/projects/ProjectDetails';

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
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-amber-900 font-serif font-bold mb-1 sm:mb-2">
            {project.title}
          </h1>
          <p className="text-amber-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
            {project.category}
          </p>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <ProjectGallery images={project.images} />
          </div>
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
    title: `${project.title} | KhatiScape`,
    description: project.description,
    openGraph: {
      images: project.images.length > 0 ? [project.images[0]] : [],
    },
  };
}