"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [textColour, setTextColour] = useState<boolean>(false);
  useEffect(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    if (segments.length > 0) {
      setTextColour(true);
    }
  }, [location?.pathname]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {" "}
        <div className="flex h-[10%]">
          <Image
            src="/logo-05.png"
            alt="Company Logo"
            width={200} // Set explicit width
            height={108} // Set explicit height (match your logo's aspect ratio)
            className="-ml-[75%]"
            priority
          />
        </div>
        <nav>
          <ul
            className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent px-4 py-6 md:p-0 transition-transform duration-300 ${
              mobileMenuOpen
                ? "translate-y-0"
                : "-translate-y-full md:translate-y-0"
            } ${
              !scrolled && !textColour
                ? "text-white"
                : "text-gray-700 hover:text-amber-600"
            }`}
          >
            <li>
              <Link href="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="about" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="services" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="contact" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="blog">Blog</Link>
            </li>
          </ul>
          <div
            className="md:hidden text-2xl text-gray-800 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            role="button"
            aria-label="Toggle Menu"
          >
            <FaBars />
          </div>
        </nav>
      </div>
    </header>
  );
}
