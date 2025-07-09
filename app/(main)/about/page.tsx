import SectionTitle from "@/app/components/ui/SectionTitle";
import Image from "next/image";

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
            <h3 className="text-2xl text-red-500 font-serif font-bold mb-6">
              Creating Beautiful Spaces Since 2023  
            </h3>
            <p className="text-gray-700 mb-4">
              At Khatiscape, we believe that simplicity is the ultimate form of
              sophistication. Rooted in the principles of minimalism, our
              approach to architecture and interior design focuses on clarity,
              balance, and intentional space-making. We design environments that
              breathe — open, uncluttered, and deeply connected to their
              function and context. Every line, material, and texture is
              thoughtfully chosen to create a quiet elegance that speaks through
              subtlety rather than excess.
            </p>
            <p className="text-gray-700 mb-6">
              From serene residential spaces to
              refined commercial interiors, our work is guided by the idea that
              less truly is more. By stripping away the unnecessary, we uncover
              the essential — creating spaces that are calm, purposeful, and
              timeless. At Khatiscape, we don’t just design buildings; we shape
              experiences rooted in stillness, light, and meaningful simplicity.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-serif font-bold text-amber-600 mb-2">
                  10+
                </h4>
                <p className="text-gray-700">Completed Projects</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-serif font-bold text-amber-600 mb-2">15+</h4>
                <p className="text-gray-700">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/create a elegant and simple interior room with false ceiling, bed with side table, carpet and other in.jpg"
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
