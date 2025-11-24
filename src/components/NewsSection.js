'use client';

import { useState } from 'react';
import Link from 'next/link';

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const newsItems = [
    {
      title: 'نماء تنظم ورشة تدريبية لتعزيز القيادة وتوزيع الأدوار في الفرق التطوعية النسائية',
      image: '/cover.jpg',
    },
    {
      title: 'جمعية نماء تحتفل بمرور 10 سنوات من العطاء والتمكين',
      image: '/cover.jpg',
    },
    {
      title: 'إطلاق برنامج جديد لدعم رواد الأعمال الشباب',
      image: '/cover.jpg',
    },
  ];

  const nextNews = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevNews = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <div className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            آخر أخبارنا
          </h2>
          <p className="text-lg text-gray-600">
            تابع أحدث المستجدات والمبادرات والفعاليات من قلب الجمعية
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-green-100 to-teal-100 relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2">
                    {news.title}
                  </h3>
                  <Link
                    href="/news"
                    className="text-[#94C83D] hover:text-[#7FB030] font-medium inline-flex items-center"
                  >
                    اقرأ المزيد
                    <span className="mr-2">‹</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevNews}
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <span className="text-gray-600">‹</span>
          </button>
          <button
            onClick={nextNews}
            className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <span className="text-gray-600">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;

