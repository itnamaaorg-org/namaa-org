'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError('');
        const res = await fetch('/api/news');
        if (!res.ok) {
          throw new Error('تعذر تحميل الأخبار');
        }
        const data = await res.json();
        setNewsItems(data.slice(0, 3));
      } catch (err) {
        setError('تعذر تحميل الأخبار حالياً.');
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            آخر أخبارنا
          </h2>
          <p className="text-lg text-gray-600">
            نظرة على أحدث الأخبار والمنجزات التي تعمل عليها نماء.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-600"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-8">{error}</div>
          ) : newsItems.length === 0 ? (
            <div className="text-center text-gray-600 py-8">لا توجد أخبار حالياً</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((news) => (
                <div
                  key={news._id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {news.image && (
                    <div className="h-48 bg-gradient-to-br from-green-100 to-teal-100 relative">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2">
                      {news.title}
                    </h3>
                    <Link
                      href={`/news/${news._id}`}
                      className="text-[#94C83D] hover:text-[#7FB030] font-medium inline-flex items-center"
                    >
                      قراءة التفاصيل
                      <span className="mr-2">›</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
