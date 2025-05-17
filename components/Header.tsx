'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/koitrans.png"
              alt="KOI Event Logo"
              width={80}
              height={80}
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => scrollToSection('hero')}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/KOIEventSponsorluk2025.pdf"
              target="_blank"
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-[#B31E1E]' : 'text-white hover:text-gray-300'}`}
            >
              Sponsorluk Dosyası
            </Link>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-[#B31E1E]' : 'text-white hover:text-gray-300'}`}
            >
              Hakkımızda
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-[#B31E1E]' : 'text-white hover:text-gray-300'}`}
            >
              Etkinlikler
            </button>
            <button
              onClick={() => scrollToSection('upcoming')}
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-[#B31E1E]' : 'text-white hover:text-gray-300'}`}
            >
              Yaklaşan Etkinlik
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-[#B31E1E]' : 'text-white hover:text-gray-300'}`}
            >
              İletişim
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/KOIEventSponsorluk2025.pdf"
                target="_blank"
                className="block w-full text-left px-3 py-2 text-gray-800 hover:text-[#B31E1E] font-medium"
              >
                Sponsorluk Dosyası
              </Link>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-800 hover:text-[#B31E1E] font-medium"
              >
                Hakkımızda
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="block w-full text-left px-3 py-2 text-gray-800 hover:text-[#B31E1E] font-medium"
              >
                Etkinlikler
              </button>
              <button
                onClick={() => scrollToSection('upcoming')}
                className="block w-full text-left px-3 py-2 text-gray-800 hover:text-[#B31E1E] font-medium"
              >
                Yaklaşan Etkinlik
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-800 hover:text-[#B31E1E] font-medium"
              >
                İletişim
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 