'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto bg-white/20 backdrop-blur-2xl rounded-none sm:rounded-full border border-white/30 shadow-lg">
        <div className="px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/nama-logo.png" alt="namaa logo" className="h-10"/>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
                الرئيسية
              </Link>
              
              <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
                من نحن
              </Link>
              
              <Link href="/programs" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
                برامجنا
              </Link>
              
              <Link href="/projects" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
                المشاريع
              </Link>
              
              <Link href="/initiatives-incubator" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">حاضنة المبادرات</Link>
              <Link href="/news" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">أخبارنا</Link>
            </nav>
            
            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-3 space-x-reverse" dir="ltr">
              <Link href="/volunteer">
                <button className="bg-[#94C83D] hover:bg-[#7FB030] text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium">
                  انضم متطوعًا
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-transparent border-2 border-[#94C83D] text-[#94C83D] hover:bg-[#94C83D] hover:text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium">
                  تواصل معنا
                </button>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-green-600 transition-colors duration-200">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/20 backdrop-blur-md rounded-b-3xl border-t border-white/30 mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-white/30 rounded-xl transition-colors">الرئيسية</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-white/30 rounded-xl transition-colors">من نحن</Link>
              <Link href="/programs" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-white/30 rounded-xl transition-colors">برامجنا</Link>
              <Link href="/projects" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-white/30 rounded-xl transition-colors">المشاريع</Link>
              <Link href="/initiatives-incubator" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-white/30 rounded-xl transition-colors">حاضنة المبادرات</Link>
              <Link href="/news" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-white/30 rounded-xl transition-colors">أخبارنا</Link>
              <div className="px-3 py-2 space-y-2">
                <Link href="/volunteer">
                  <button className="w-full bg-[#94C83D] hover:bg-[#7FB030] text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium">
                    انضم متطوعًا
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="w-full bg-transparent border-2 border-[#94C83D] text-[#94C83D] hover:bg-[#94C83D] hover:text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium">
                    تواصل معنا
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
