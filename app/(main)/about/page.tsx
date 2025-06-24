import SectionTitle from '@/app/components/ui/SectionTitle';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Story" 
          subtitle="Discover the passion behind DesignStudio"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Creating Beautiful Spaces Since 2010</h3>
            <p className="text-gray-700 mb-4">
              Founded by award-winning designer Jane Smith, DesignStudio has been transforming spaces across 
              the country for over a decade. What started as a small boutique firm has grown into a 
              nationally recognized design practice.
            </p>
            <p className="text-gray-700 mb-6">
              Our philosophy centers on creating spaces that are not only beautiful but also functional 
              and tailored to our clients' lifestyles. We believe good design should enhance daily life 
              and stand the test of time.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-serif font-bold text-amber-600 mb-2">50+</h4>
                <p className="text-gray-700">Completed Projects</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-serif font-bold text-amber-600 mb-2">12</h4>
                <p className="text-gray-700">Industry Awards</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Our team working"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}