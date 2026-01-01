'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function NewsPage() {
  const [newsList, setNewsList] = useState([]);
  const [mediaList, setMediaList] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [loadingMedia, setLoadingMedia] = useState(true);
  const [activeTab, setActiveTab] = useState('news'); // 'news' | 'media'

  useEffect(() => {
    fetchNews();
    fetchMedia();
  }, []);

  const fetchNews = async () => {
    try {
      setLoadingNews(true);
      const res = await fetch('/api/news');
      if (res.ok) {
        const data = await res.json();
        setNewsList(data);
      }
    } catch (err) {
      console.error('Error fetching news:', err);
    } finally {
      setLoadingNews(false);
    }
  };

  const fetchMedia = async () => {
    try {
      setLoadingMedia(true);
      const res = await fetch('/api/media');
      if (res.ok) {
        const data = await res.json();
        setMediaList(data);
      }
    } catch (err) {
      console.error('Error fetching media:', err);
    } finally {
      setLoadingMedia(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('ar-JO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-8">
            أخبار نماء الجمعية
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 text-center max-w-3xl mx-auto">
            نبقيكم على اطلاع بآخر أخبار نماء وشراكاتها ومبادراتها في التمكين الاقتصادي والاجتماعي.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-full bg-white shadow-md border border-gray-100 p-2">
              <button
                className={`px-6 py-2 text-sm md:text-base font-semibold rounded-full transition-all ${activeTab === 'news' ? 'bg-green-600 text-white shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
                onClick={() => setActiveTab('news')}
              >
                أخبارنا
              </button>
              <button
                className={`px-6 py-2 text-sm md:text-base font-semibold rounded-full transition-all ${activeTab === 'media' ? 'bg-green-600 text-white shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
                onClick={() => setActiveTab('media')}
              >
                نماء في الإعلام
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {activeTab === 'news' ? (
          loadingNews ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            </div>
          ) : newsList.length === 0 ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-12 text-center">
              <p className="text-xl text-gray-600">لا توجد أخبار حالياً</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsList.map((news) => (
                <Link
                  href={`/news/${news._id}`}
                  className="block bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {news.image && (
                    <div className="mb-4 overflow-hidden rounded-2xl border border-gray-100">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-52 object-cover"
                      />
                    </div>
                  )}
                  <div className="mb-4">
                    <span className="text-sm text-green-600 font-medium">
                      {formatDate(news.createdOn)}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
                    {news.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed line-clamp-4">
                    {news.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-green-700 font-semibold">
                    قراءة التفاصيل
                    <svg className="h-4 w-4 mr-1 rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          )
        ) : loadingMedia ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        ) : mediaList.length === 0 ? (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-12 text-center">
            <p className="text-xl text-gray-600">لا توجد مواد إعلامية حالياً</p>
          </div>
        ) : (
            <div className="space-y-6">
              {mediaList.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all"
                >
                  <div className="flex flex-col md:flex-row-reverse items-stretch gap-6 p-6 lg:p-8">
                    <div className="md:w-1/3">
                      <div className="w-full overflow-hidden border border-indigo-100 rounded-2xl">
                        <img
                          src={item.image || '/cover.jpg'}
                          alt={item.title}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold text-indigo-900 mb-4 leading-snug">
                        {item.title}
                      </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-indigo-900 text-white rounded-full font-semibold hover:bg-indigo-800 transition-colors"
                      >
                        مشاهدة الخبر
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
