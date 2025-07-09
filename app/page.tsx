import FeaturedProjects from "./components/home/FeaturedProjects";
import HeroSection from "./components/home/HeroSection";
import ServicesOverview from "./components/home/ServicesOverview";
import Testimonials from "./components/home/Testimonials";
import WorkflowSection from "./components/WorkflowSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-amber-900 md:text-4xl font-serif font-bold mb-4">
              Our Services
            </h2>
            <p className="text-amber-800 max-w-2xl mx-auto">
              Comprehensive design solutions tailored to your unique needs and
              preferences.
            </p>
          </div>
          <ServicesOverview />
        </div>
      </section>
      <WorkflowSection />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-amber-900 md:text-4xl font-serif font-bold mb-4">
              Our Featured Projects
            </h2>
            <p className="text-amber-800 max-w-2xl mx-auto">
              Explore our portfolio of exceptional design projects that showcase
              our creativity and attention to detail.
            </p>
          </div>
          <FeaturedProjects />
        </div>
      </section>

      <Testimonials />
    </>
  );
}
