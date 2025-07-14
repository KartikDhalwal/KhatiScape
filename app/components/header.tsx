"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [textColour, setTextColour] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleReplaceRoute = (path: string) => {
    router.replace(path);
  };
  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0) {
      setTextColour(true);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Disable body scroll when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMobileMenu = (path: string) => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
    handleReplaceRoute(path);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        mobileMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-toggle")
      ) {
        closeMobileMenu('');
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex h-[10%]">
          <Image
            src="/logo-05.png"
            alt="Company Logo"
            width={200}
            height={108}
            className="lg:-ml-[75%]"
            priority
          />
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl cursor-pointer menu-toggle"
          onClick={toggleMobileMenu}
          role="button"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <FaTimes className="text-gray-800" />
          ) : (
            <FaBars
              className={
                !scrolled && !textColour ? "text-white" : "text-gray-800"
              }
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul
            className={`flex items-center gap-6 md:gap-8 ${
              !scrolled && !textColour ? "text-white" : "text-gray-700"
            }`}
          >
            <li
              className="hover:text-amber-600 transition-colors duration-200 cursor-pointer"
              onClick={() => handleReplaceRoute("/")}
            >
              Home
            </li>
            <li
              className="hover:text-amber-600 transition-colors duration-200 cursor-pointer"
              onClick={() => handleReplaceRoute("/about")}
            >
              About Us
            </li>
            <li
              className="hover:text-amber-600 transition-colors duration-200 cursor-pointer"
              onClick={() => handleReplaceRoute("/services")}
            >
              Services
            </li>
            <li
              className="hover:text-amber-600 transition-colors duration-200 cursor-pointer"
              onClick={() => handleReplaceRoute("/contact")}
            >
              Contact Us
            </li>
            <li
              className="hover:text-amber-600 transition-colors duration-200 cursor-pointer"
              onClick={() => handleReplaceRoute("/blog")}
            >
              Blog
            </li>
          </ul>
        </nav>

        {/* Mobile Side Drawer */}
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => closeMobileMenu("")}
          />

          {/* Drawer Content */}
          <div
            className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out mobile-menu ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4 flex justify-end">
              <button
                onClick={() => closeMobileMenu("")}
                className="text-gray-800 hover:text-amber-600 transition-colors"
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <nav className="p-6">
              <ul className="flex flex-col gap-6 text-gray-800">
                <li
                  onClick={() => closeMobileMenu("/")}
                  className="block py-2 text-lg hover:text-amber-600 transition-colors duration-200"
                >
                  Home
                </li>
                <li
                  onClick={() => closeMobileMenu("/about")}
                  className="block py-2 text-lg hover:text-amber-600 transition-colors duration-200"
                >
                  About Us
                </li>
                <li
                  onClick={() => closeMobileMenu("/services")}
                  className="block py-2 text-lg hover:text-amber-600 transition-colors duration-200"
                >
                  Services
                </li>
                <li
                  onClick={() => closeMobileMenu("/contact")}
                  className="block py-2 text-lg hover:text-amber-600 transition-colors duration-200"
                >
                  Contact Us
                </li>
                <li
                  onClick={() => closeMobileMenu("/blog")}
                  className="block py-2 text-lg hover:text-amber-600 transition-colors duration-200"
                >
                  Blog
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
