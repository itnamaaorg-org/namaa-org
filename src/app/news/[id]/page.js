'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function NewsDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [liking, setLiking] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commenting, setCommenting] = useState(false);

  useEffect(() => {
    if (!params?.id) return;
    const loadNews = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/news/${params.id}`);
        if (!res.ok) {
          setError('تعذر تحميل الخبر');
          return;
        }
        const data = await res.json();
        setNews(data);
      } catch (err) {
        setError('حدث خطأ أثناء تحميل الخبر');
      } finally {
        setLoading(false);
      }
    };
    loadNews();
    loadComments();
  }, [params?.id]);

  const loadComments = async () => {
    if (!params?.id) return;
    try {
      const res = await fetch(`/api/news/${params.id}/comments`);
      if (res.ok) {
        const data = await res.json();
        setComments(data);
      }
    } catch (err) {
      // ignore
    }
  };

  const handleLike = async () => {
    if (!params?.id || liking) return;
    setLiking(true);
    try {
      await fetch(`/api/news/${params.id}/like`, { method: 'POST' });
      setNews((prev) => (prev ? { ...prev, likes: (prev.likes || 0) + 1 } : prev));
    } finally {
      setLiking(false);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim() || commenting) return;
    setCommenting(true);
    try {
      const res = await fetch(`/api/news/${params.id}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: commentAuthor, text: commentText }),
      });
      if (res.ok) {
        setCommentText('');
        setCommentAuthor('');
        await loadComments();
        setNews((prev) => (prev ? { ...prev, commentsCount: (prev.commentsCount || 0) + 1 } : prev));
      }
    } finally {
      setCommenting(false);
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
      <div className="max-w-4xl mx-auto px-4 pt-28 pb-16">
        <button
          onClick={() => router.back()}
          className="text-green-700 hover:text-green-800 font-semibold mb-6 inline-flex items-center"
        >
          <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          عودة
        </button>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        ) : error ? (
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center text-red-700">{error}</div>
        ) : !news ? (
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center text-gray-600">الخبر غير موجود</div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {news.image && (
              <div className="h-72 md:h-96 bg-gray-100">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-8 md:p-10 space-y-4">
              <span className="text-sm text-green-600 font-medium">{formatDate(news.createdOn)}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">{news.title}</h1>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{news.description}</p>
              <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={handleLike}
                  disabled={liking}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-full border border-green-100 transition-colors disabled:opacity-50"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>{news.likes || 0}</span>
                </button>
                <div className="text-sm text-gray-600">
                  {news.commentsCount || 0} تعليق{(news.commentsCount || 0) !== 1 ? '' : ''}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 p-8 md:p-10 space-y-6">
              <h2 className="text-xl font-bold text-gray-900">التعليقات</h2>
              <form onSubmit={handleAddComment} className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="الاسم (اختياري)"
                    value={commentAuthor}
                    onChange={(e) => setCommentAuthor(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <textarea
                    placeholder="أضف تعليقك"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 md:col-span-2"
                    rows={3}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={commenting}
                  className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition-colors disabled:opacity-50"
                >
                  {commenting ? 'جاري الإرسال...' : 'إضافة تعليق'}
                </button>
              </form>

              <div className="space-y-4">
                {comments.length === 0 ? (
                  <p className="text-gray-600">لا توجد تعليقات بعد.</p>
                ) : (
                  comments.map((comment) => (
                    <div key={comment._id} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800">{comment.author || 'مستخدم'}</span>
                        <span className="text-xs text-gray-500">{formatDate(comment.createdAt)}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{comment.text}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
