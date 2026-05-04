'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

const clubDropdownItems = [
  { label: 'تعريف النادي', href: '/volunteer-club#about' },
  { label: 'الرؤية', href: '/volunteer-club#vision' },
  { label: 'ميثاق الشرف', href: '/volunteer-club#charter' },
  { label: 'مراتب التطوع', href: '/volunteer-club#ranks' },
];

const clubTeamItems = [
  { label: 'فريق الحملات والمبادرات', href: '/volunteer-club/campaigns' },
  { label: 'فريق رفقاء نماء', href: '/volunteer-club/companions' },
  { label: 'فريق تمكين', href: '/volunteer-club/empowerment' },
  { label: 'الفريق الطبي', href: '/volunteer-club/medical' },
  { label: 'الفريق الإعلامي', href: '/volunteer-club/media' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClubOpen, setIsClubOpen] = useState(false);
  const [isMobileClubOpen, setIsMobileClubOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const pathname = usePathname();

  const handleClubMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsClubOpen(true);
  };

  const handleClubMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setIsClubOpen(false), 200);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileClubOpen(false);
  };

  return (
    <header className='fixed top-4 left-4 right-4 z-50'>
      <div className='max-w-7xl mx-auto bg-white/20 backdrop-blur-2xl rounded-none sm:rounded-full border border-white/30 shadow-lg'>
        <div className='px-6 sm:px-8 lg:px-12'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center space-x-2'>
              <img src='/logo.png' alt='namaa logo' className='h-10' />
            </div>

            <nav className='hidden md:flex items-center space-x-6'>
              <Link
                href='/'
                className={`text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium ${
                  pathname === '/' ? 'text-green-800' : ''
                }`}
              >
                الرئيسية
              </Link>

              <Link
                href='/about'
                className={`text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium ${
                  pathname === '/about' ? 'text-green-800' : ''
                }`}
              >
                من نحن
              </Link>

              <Link
                href='/programs'
                className={`text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium ${
                  pathname === '/programs' ? 'text-green-800' : ''
                }`}
              >
                برامجنا
              </Link>

              <Link
                href='/projects'
                className={`text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium ${
                  pathname === '/projects' ? 'text-green-800' : ''
                }`}
              >
                المشاريع
              </Link>

              <Link
                href='/initiatives-incubator'
                className={`text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium ${
                  pathname === '/initiatives-incubator' ? 'text-green-800' : ''
                }`}
              >
                حاضنة المبادرات
              </Link>

              <Link
                href='/news'
                className={`text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium ${
                  pathname === '/news' ? 'text-green-800' : ''
                }`}
              >
                أخبارنا
              </Link>

              <Link
                href='/awards'
                className={`text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium ${
                  pathname === '/awards' ? 'text-green-800' : ''
                }`}
              >
                الجوائز والأوسمة
              </Link>

              {/* Club Dropdown - Desktop */}
              <div
                className='relative'
                onMouseEnter={handleClubMouseEnter}
                onMouseLeave={handleClubMouseLeave}
              >
                <Link
                  href="/volunteer-club"
                  className={`flex items-center gap-1 text-gray-700 hover:text-green-800 transition-colors duration-200 font-medium ${
                    pathname.startsWith('/volunteer-club') ? 'text-green-800' : ''
                  }`}
                >
                  نادي نماء التطوعي
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isClubOpen ? 'rotate-180' : ''}`} />
                </Link>

                {isClubOpen && (
                  <div
                    className='absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50'
                    onMouseEnter={handleClubMouseEnter}
                    onMouseLeave={handleClubMouseLeave}
                  >
                    {clubDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className='block px-4 py-2 text-gray-700 hover:text-green-800 hover:bg-green-50 transition-colors duration-150 text-sm'
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className='my-2 border-t border-gray-100' />
                    {clubTeamItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className='block px-4 py-2 text-gray-700 hover:text-green-800 hover:bg-green-50 transition-colors duration-150 text-sm'
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <div
              className='hidden md:flex items-center space-x-3 space-x-reverse'
              dir='ltr'
            >
              <Link href='/volunteer'>
                <button className='bg-[#94C83D] hover:bg-[#7FB030] text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium'>
                  انضم متطوعًا
                </button>
              </Link>
              <Link href='/contact'>
                <button className='bg-transparent border-2 border-[#94C83D] text-[#94C83D] hover:bg-[#94C83D] hover:text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium'>
                  تواصل معنا
                </button>
              </Link>
            </div>

            <div className='md:hidden'>
              <button
                onClick={toggleMenu}
                className='text-gray-700 hover:text-green-600 transition-colors duration-200'
              >
                {isMenuOpen ? (
                  <X className='w-6 h-6' />
                ) : (
                  <Menu className='w-6 h-6' />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className='md:hidden bg-white/20 backdrop-blur-md rounded-b-3xl border-t border-white/30 mt-2'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <Link
                href='/'
                onClick={closeMenu}
                className={`block px-3 py-2 text-gray-700 hover:text-green-800 hover:bg-white/30 rounded-xl transition-colors ${
                  pathname === '/' ? 'text-green-800' : ''
                }`}
              >
                الرئيسية
              </Link>

              <Link
                href='/about'
                onClick={closeMenu}
                className={`block px-3 py-2 text-gray-700 hover:text-green-800 hover:bg-white/30 rounded-xl transition-colors ${
                  pathname === '/about' ? 'text-green-800' : ''
                }`}
              >
                من نحن
              </Link>

              <Link
                href='/programs'
                onClick={closeMenu}
                className={`block px-3 py-2 text-gray-700 hover:text-green-800 hover:bg-white/30 rounded-xl transition-colors ${
                  pathname === '/programs' ? 'text-green-800' : ''
                }`}
              >
                برامجنا
              </Link>

              <Link
                href='/projects'
                onClick={closeMenu}
                className={`block px-3 py-2 text-gray-700 hover:text-green-800 hover:bg-white/30 rounded-xl transition-colors ${
                  pathname === '/projects' ? 'text-green-800' : ''
                }`}
              >
                المشاريع
              </Link>

              <Link
                href='/initiatives-incubator'
                onClick={closeMenu}
                className={`block px-3 py-2 text-gray-700 hover:text-green-800 hover:bg-white/30 rounded-xl transition-colors ${
                  pathname === '/initiatives-incubator' ? 'text-green-800' : ''
                }`}
              >
                حاضنة المبادرات
              </Link>

              <Link
                href='/news'
                onClick={closeMenu}
                className={`block px-3 py-2 text-gray-700 hover:text-green-800 hover:bg-white/30 rounded-xl transition-colors ${
                  pathname === '/news' ? 'text-green-800' : ''
                }`}
              >
                أخبارنا
              </Link>

              <Link
                href='/awards'
                onClick={closeMenu}
                className={`block px-3 py-2 text-gray-700 hover:text-green-800 hover:bg-white/30 rounded-xl transition-colors ${
                  pathname === '/awards' ? 'text-green-800' : ''
                }`}
              >
                الجوائز والأوسمة
              </Link>

              {/* Club Dropdown - Mobile */}
              <div>
                <button
                  onClick={() => setIsMobileClubOpen((prev) => !prev)}
                  className={`flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-green-800 hover:bg-white/30 rounded-xl transition-colors ${
                    pathname.startsWith('/volunteer-club') ? 'text-green-800' : ''
                  }`}
                >
                  نادي نماء التطوعي
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileClubOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMobileClubOpen && (
                  <div className='mr-4 mt-1 border-r-2 border-green-200 pr-3 space-y-1'>
                    {clubDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className='block px-3 py-1.5 text-sm text-gray-700 hover:text-green-800 hover:bg-white/30 rounded-lg transition-colors'
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className='my-1 border-t border-white/30' />
                    {clubTeamItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className='block px-3 py-1.5 text-sm text-gray-700 hover:text-green-800 hover:bg-white/30 rounded-lg transition-colors'
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className='px-3 py-2 space-y-2'>
                <Link href='/volunteer' onClick={closeMenu}>
                  <button className='w-full bg-[#94C83D] hover:bg-[#7FB030] text-white px-6 py-2 mb-2 rounded-lg transition-all duration-200 font-medium'>
                    انضم متطوعًا
                  </button>
                </Link>

                <Link href='/contact' onClick={closeMenu}>
                  <button className='w-full bg-transparent border-2 border-[#94C83D] text-[#94C83D] hover:bg-[#94C83D] hover:text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium'>
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
