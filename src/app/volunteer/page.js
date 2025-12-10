'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredField: '',
    message: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

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
      const res = await fetch('/api/volunteer-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ تم إرسال طلب التطوع بنجاح! سنتواصل معك قريباً.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          preferredField: '',
          message: '',
        });
      } else {
        setMessage(`⚠️ ${data.message || 'فشل إرسال الطلب. حاول مرة أخرى.'}`);
      }
    } catch (err) {
      setMessage('⚠️ حدث خطأ. حاول مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-8">
            تطوع معنا
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 text-center max-w-3xl mx-auto">
            دعوة للشباب للانضمام إلى فرق العمل التطوعي والمساهمة في المبادرات المجتمعية
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Introduction */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">لماذا التطوع معنا؟</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              التطوع مع جمعية نماء هو فرصة مميزة للمساهمة في بناء مجتمع أفضل وتطوير مهاراتك الشخصية والمهنية. نحن نؤمن بأن كل فرد لديه القدرة على إحداث فرق إيجابي في المجتمع.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">فوائد التطوع</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-4">
                🌟
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">تطوير المهارات</h3>
              <p className="text-gray-700">اكتسب مهارات جديدة في القيادة، التواصل، وإدارة المشاريع</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-4">
                🤝
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">بناء الشبكات</h3>
              <p className="text-gray-700">تعرف على أشخاص جدد وابن شبكة علاقات مهنية واجتماعية</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-4">
                💪
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">إحداث أثر إيجابي</h3>
              <p className="text-gray-700">ساهم في تحسين حياة الآخرين وبناء مجتمع أفضل</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-4">
                🎓
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">التعلم المستمر</h3>
              <p className="text-gray-700">احصل على تدريب وتأهيل في مختلف المجالات التطوعية</p>
            </div>
          </div>
        </div>

        {/* Volunteer Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">انضم إلينا</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">الاسم الكامل</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="أدخل اسمك الكامل"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="example@email.com"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">رقم الهاتف</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="07XXXXXXXX"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">المجال التطوعي المفضل</label>
              <select
                name="preferredField"
                value={formData.preferredField}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                disabled={loading}
              >
                <option value="">اختر المجال</option>
                <option value="فريق تمكين">فريق تمكين</option>
                <option value="فريق الأيتام (رفقاء نماء)">فريق الأيتام (رفقاء نماء)</option>
                <option value="فريق المبادرات التطوعية">فريق المبادرات التطوعية</option>
                <option value="الفريق الطبي">الفريق الطبي</option>
                <option value="الفريق الإعلامي">الفريق الإعلامي</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">رسالة</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="أخبرنا عن دوافعك للانضمام إلينا..."
                required
                disabled={loading}
              ></textarea>
            </div>
            
            {message && (
              <div
                className={`p-4 rounded-xl ${
                  message.startsWith('✅')
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {message}
              </div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? 'جاري الإرسال...' : 'إرسال طلب التطوع'}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VolunteerPage;

