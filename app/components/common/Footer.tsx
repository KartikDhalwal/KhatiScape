import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">DesignStudio</h3>
            <p className="text-gray-400">
              Transforming spaces into works of art through innovative design and architecture.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Interior Design</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Architecture</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Space Planning</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Consultation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </Link>
            </div>
            <p className="text-gray-400">info@designstudio.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} DesignStudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}