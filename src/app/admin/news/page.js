'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminNewsPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/admin/dashboard');
  }, [router]);
  
  return null;
  const [newsList, setNewsList] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    createdOn: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [loadingNews, setLoadingNews] = useState(true);

  // Load news from API
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoadingNews(true);
      const res = await fetch('/api/news');
      if (res.ok) {
        const data = await res.json();
        setNewsList(data);
      } else {
        setMessage('⚠️ فشل تحميل الأخبار');
      }
    } catch (err) {
      setMessage('⚠️ حدث خطأ أثناء تحميل الأخبار');
    } finally {
      setLoadingNews(false);
    }
  };

  const handleSelectNews = (news) => {
    setSelectedNews(news);
    setIsEditing(true);
    setFormData({
      title: news.title,
      description: news.description,
      createdOn: news.createdOn ? new Date(news.createdOn).toISOString().slice(0, 16) : '',
    });
    setMessage('');
  };

  const handleAddNew = () => {
    setSelectedNews(null);
    setIsEditing(false);
    setFormData({
      title: '',
      description: '',
      createdOn: '',
    });
    setMessage('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const url = selectedNews ? `/api/news/${selectedNews._id}` : '/api/news';
      const method = selectedNews ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          createdOn: formData.createdOn ? new Date(formData.createdOn) : undefined,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(selectedNews ? '✅ تم تحديث الخبر بنجاح!' : '✅ تم إضافة الخبر بنجاح!');
        
        // Refresh news list from API
        await fetchNews();
        
        // If editing, update selected news with new data
        if (selectedNews) {
          const updatedNews = await fetch(`/api/news/${selectedNews._id}`).then(r => r.json());
          setSelectedNews(updatedNews);
          setFormData({
            title: updatedNews.title,
            description: updatedNews.description,
            createdOn: updatedNews.createdOn ? new Date(updatedNews.createdOn).toISOString().slice(0, 16) : '',
          });
        } else {
          // Reset form after adding new
          handleAddNew();
        }
      } else {
        setMessage(`⚠️ ${data.message || 'حدث خطأ'}`);
      }
    } catch (err) {
      console.log(err);
      
      setMessage('⚠️ حدث خطأ. حاول مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (newsId) => {
    if (!confirm('هل أنت متأكد من حذف هذا الخبر؟')) return;

    setDeletingId(newsId);
    setMessage('');

    try {
      const res = await fetch(`/api/news/${newsId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setMessage('✅ تم حذف الخبر بنجاح!');
        // Refresh news list from API
        await fetchNews();
        
        // If deleted news was selected, reset form
        if (selectedNews?._id === newsId) {
          handleAddNew();
        }
      } else {
        const data = await res.json();
        setMessage(`⚠️ ${data.message || 'فشل حذف الخبر'}`);
      }
    } catch (err) {
      setMessage('⚠️ حدث خطأ أثناء الحذف');
    } finally {
      setDeletingId(null);
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
    <div dir="rtl" className="min-h-screen bg-gray-50 p-6 pt-25">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">إدارة الأخبار</h1>
          <p className="text-gray-600">إدارة وإضافة وتعديل الأخبار</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {selectedNews ? 'تعديل الخبر' : 'إضافة خبر جديد'}
                </h2>
                {selectedNews && (
                  <button
                    onClick={handleAddNew}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition-colors text-sm"
                  >
                    إضافة جديد
                  </button>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">العنوان</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="اكتب العنوان هنا..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">الوصف</label>
                  <textarea
                    name="description"
                    placeholder="اكتب الوصف هنا..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                    rows={8}
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">تاريخ ووقت الإنشاء (اختياري)</label>
                  <input
                    type="datetime-local"
                    name="createdOn"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.createdOn}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={loading || deletingId}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>جاري الحفظ...</span>
                      </>
                    ) : (
                      <span>{selectedNews ? 'تحديث' : 'إضافة'}</span>
                    )}
                  </button>
                  {selectedNews && (
                    <button
                      type="button"
                      onClick={() => handleDelete(selectedNews._id)}
                      disabled={loading || deletingId === selectedNews._id}
                      className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[100px]"
                    >
                      {deletingId === selectedNews._id ? (
                        <>
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>جاري الحذف...</span>
                        </>
                      ) : (
                        <span>حذف</span>
                      )}
                    </button>
                  )}
                </div>

                {message && (
                  <div
                    className={`p-4 rounded-md ${
                      message.startsWith('✅')
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Sidebar - News List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">قائمة الأخبار</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {newsList.length}
                </span>
              </div>

              <div className="space-y-2 max-h-[calc(100vh-250px)] overflow-y-auto">
                {loadingNews ? (
                  <div className="flex items-center justify-center py-8">
                    <svg className="animate-spin h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                ) : newsList.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">لا توجد أخبار</p>
                ) : (
                  newsList.map((news) => (
                    <div
                      key={news._id}
                      onClick={() => !deletingId && handleSelectNews(news)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        deletingId === news._id
                          ? 'opacity-50 cursor-not-allowed'
                          : 'cursor-pointer'
                      } ${
                        selectedNews?._id === news._id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                            {news.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                            {news.description}
                          </p>
                          <p className="text-xs text-gray-400">{formatDate(news.createdOn)}</p>
                        </div>
                        {deletingId === news._id && (
                          <svg className="animate-spin h-5 w-5 text-red-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

