import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-100 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-amber-900">KhatiScape</h3>
            <p className="text-gray-600 hover:text-black">
              Inspired  from Tradition, <br/> Build for Tomorrow 
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-4 text-amber-900">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-black transition">About Us</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-black transition">Services</Link></li>
              <li><Link href="/projects" className="text-gray-600 hover:text-black transition">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-black transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-4 text-amber-900">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-600 hover:text-black transition">Interior Design</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-black transition">Architecture</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-black transition">PMC(Project Management Consultant)</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-black transition">Consultation</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-black transition">TurnKey</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-4 text-amber-900">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <Link href="https://www.instagram.com/khatiscape_architects_interior?igsh=MTRoMWtxMXhhbWNjOQ==" className="text-gray-600 hover:text-black transition">
                <Facebook size={20} />
              </Link>
              <Link href="https://www.instagram.com/khatiscape_architects_interior?igsh=MTRoMWtxMXhhbWNjOQ==" className="text-gray-600 hover:text-black transition">
                <Instagram size={20} />
              </Link>
              <Link href="https://www.instagram.com/khatiscape_architects_interior?igsh=MTRoMWtxMXhhbWNjOQ==" className="text-gray-600 hover:text-black transition">
                <Twitter size={20} />
              </Link>
              <Link href="https://www.instagram.com/khatiscape_architects_interior?igsh=MTRoMWtxMXhhbWNjOQ==" className="text-gray-600 hover:text-black transition">
                <Linkedin size={20} />
              </Link>
            </div>
            <p className="text-gray-600 hover:text-black">rahul.jangid@khatiscape.com</p>
            <p className="text-gray-600 hover:text-black">+91 (907) 9472-171</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-600 hover:text-black">
          <p>© 2025 DesignStudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}