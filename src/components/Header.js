
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAboutDropdown = () => setIsAboutDropdownOpen(!isAboutDropdownOpen);
  
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
              <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
                الرئيسية
              </Link>
              
              {/* About Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleAboutDropdown}
                  className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
                >
                  <span className="cursor-pointer">عن نماء</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAboutDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 py-2">
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">من نحن</Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">رؤيتنا ورسالتنا</Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">فريق العمل</Link>
                  </div>
                )}
              </div>
              
              <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">برامجنا</Link>
              <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">مشاريعنا</Link>
              <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">حاضنة المبادرات</Link>
              <Link href="/admin/news" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">أخبارنا</Link>
            </nav>
            
            {/* Contact Button */}
            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg font-medium">
                تواصل معنا
              </button>
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
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-white/30 rounded-xl transition-colors">الرئيسية</Link>
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-white/30 rounded-xl transition-colors">عن نماء</Link>
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-white/30 rounded-xl transition-colors">برامجنا</Link>
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-white/30 rounded-xl transition-colors">مشاريعنا</Link>
              <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-white/30 rounded-xl transition-colors">خاصية المبادرات</Link>
              <Link href="/admin/news" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-white/30 rounded-xl transition-colors">أخبارنا</Link>
              <div className="px-3 py-2">
                <button className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-6 py-2 rounded-full transition-all duration-200 font-medium">
                  تواصل معنا
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
