'use client';

import { useState, useEffect } from 'react';
import { uploadImageToFirebase, MAX_IMAGE_SIZE_BYTES } from '@/lib/uploadImage';

export default function MediaManagement() {
  const [mediaList, setMediaList] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    createdOn: '',
    image: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [loadingMedia, setLoadingMedia] = useState(true);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      setLoadingMedia(true);
      const res = await fetch('/api/media');
      if (res.ok) {
        const data = await res.json();
        setMediaList(data);
      } else {
        setMessage('تعذر تحميل المواد الإعلامية.');
      }
    } catch (err) {
      setMessage('حدث خطأ أثناء تحميل المواد الإعلامية.');
    } finally {
      setLoadingMedia(false);
    }
  };

  const handleSelectMedia = (media) => {
    setSelectedMedia(media);
    setFormData({
      title: media.title,
      description: media.description,
      link: media.link,
      createdOn: media.createdOn ? new Date(media.createdOn).toISOString().slice(0, 16) : '',
      image: media.image || '',
    });
    setImageFile(null);
    setImagePreview(media.image || '');
    setMessage('');
  };

  const handleAddNew = () => {
    setSelectedMedia(null);
    setFormData({
      title: '',
      description: '',
      link: '',
      createdOn: '',
      image: '',
    });
    setImageFile(null);
    setImagePreview('');
    setMessage('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setImageFile(null);
      setImagePreview('');
      setFormData((prev) => ({ ...prev, image: '' }));
      return;
    }

    if (file.size > MAX_IMAGE_SIZE_BYTES) {
      setMessage('حجم الصورة أكبر من الحد المسموح (5MB).');
      setImageFile(null);
      setImagePreview('');
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setFormData((prev) => ({ ...prev, image: '' }));
    setMessage('');
  };

  const uploadImageIfNeeded = async () => {
    if (!imageFile) return formData.image || '';

    setUploading(true);
    try {
      const url = await uploadImageToFirebase(imageFile, 'media');
      return url;
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const imageUrl = await uploadImageIfNeeded();
      const url = selectedMedia ? `/api/media/${selectedMedia._id}` : '/api/media';
      const method = selectedMedia ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          link: formData.link,
          createdOn: formData.createdOn ? new Date(formData.createdOn) : undefined,
          image: imageUrl,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(selectedMedia ? 'تم تحديث المادة الإعلامية.' : 'تمت إضافة مادة إعلامية جديدة.');

        await fetchMedia();

        if (selectedMedia) {
          const updatedMedia = await fetch(`/api/media/${selectedMedia._id}`).then((r) => r.json());
          setSelectedMedia(updatedMedia);
          setFormData({
            title: updatedMedia.title,
            description: updatedMedia.description,
            link: updatedMedia.link,
            createdOn: updatedMedia.createdOn ? new Date(updatedMedia.createdOn).toISOString().slice(0, 16) : '',
            image: updatedMedia.image || '',
          });
          setImageFile(null);
          setImagePreview(updatedMedia.image || '');
        } else {
          handleAddNew();
        }
      } else {
        setMessage(`تعذر الحفظ: ${data.message || 'حدث خطأ غير متوقع'}`);
      }
    } catch (err) {
      setMessage('حدث خطأ أثناء حفظ البيانات. حاول مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (mediaId) => {
    if (!confirm('هل أنت متأكد من حذف هذه المادة الإعلامية؟')) return;

    setDeletingId(mediaId);
    setMessage('');

    try {
      const res = await fetch(`/api/media/${mediaId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setMessage('تم حذف المادة الإعلامية.');
        await fetchMedia();

        if (selectedMedia?._id === mediaId) {
          handleAddNew();
        }
      } else {
        const data = await res.json();
        setMessage(`تعذر الحذف: ${data.message || 'حدث خطأ غير متوقع'}`);
      }
    } catch (err) {
      setMessage('حدث خطأ أثناء حذف المادة الإعلامية.');
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
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {selectedMedia ? 'تعديل مادة إعلامية' : 'إضافة مادة إعلامية'}
              </h2>
              {selectedMedia && (
                <button
                  onClick={handleAddNew}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition-colors text-sm"
                >
                  إضافة جديدة
                </button>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-2 font-semibold text-gray-700">العنوان</label>
                <input
                  type="text"
                  name="title"
                  placeholder="أدخل العنوان هنا..."
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
                  placeholder="أدخل الوصف هنا..."
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  rows={6}
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700">الرابط</label>
                <input
                  type="url"
                  name="link"
                  placeholder="https://"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.link}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700">الصورة (اختياري)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full p-3 border border-dashed border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                />
                {imagePreview && (
                  <div className="mt-3 flex items-center gap-4">
                    <img
                      src={imagePreview}
                      alt="معاينة الصورة"
                      className="h-20 w-20 object-cover rounded-md border"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImageFile(null);
                        setImagePreview('');
                        setFormData((prev) => ({ ...prev, image: '' }));
                      }}
                      className="px-3 py-2 text-sm text-red-700 bg-red-100 hover:bg-red-200 rounded-md transition-colors"
                    >
                      إزالة الصورة
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700">تاريخ النشر (اختياري)</label>
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
                  disabled={loading || deletingId || uploading}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading || uploading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>{uploading ? 'جاري رفع الصورة...' : 'جاري الحفظ...'}</span>
                    </>
                  ) : (
                    <span>{selectedMedia ? 'تحديث' : 'إضافة'}</span>
                  )}
                </button>
                {selectedMedia && (
                  <button
                    type="button"
                    onClick={() => handleDelete(selectedMedia._id)}
                    disabled={loading || deletingId === selectedMedia._id}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[100px]"
                  >
                    {deletingId === selectedMedia._id ? (
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
                    message.startsWith('تم')
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

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">نماء في الإعلام</h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {mediaList.length}
              </span>
            </div>

            <div className="space-y-2 max-h-[calc(100vh-250px)] overflow-y-auto">
              {loadingMedia ? (
                <div className="flex items-center justify-center py-8">
                  <svg className="animate-spin h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : mediaList.length === 0 ? (
                <p className="text-center text-gray-500 py-8">لا توجد مواد إعلامية</p>
              ) : (
                mediaList.map((media) => (
                  <div
                    key={media._id}
                    onClick={() => !deletingId && handleSelectMedia(media)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      deletingId === media._id
                        ? 'opacity-50 cursor-not-allowed'
                        : 'cursor-pointer'
                    } ${
                      selectedMedia?._id === media._id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 min-w-0">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                          {media.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {media.description}
                        </p>
                        <p className="text-xs text-gray-400 truncate">{media.link}</p>
                        <p className="text-xs text-gray-400 mt-1">{formatDate(media.createdOn)}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {media.image && (
                          <img
                            src={media.image}
                            alt="صورة المادة الإعلامية"
                            className="h-12 w-16 object-cover rounded-md border"
                          />
                        )}
                        {deletingId === media._id && (
                          <svg className="animate-spin h-5 w-5 text-red-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
