'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

const initialForm = {
  fullName: '',
  birthDate: '',
  city: '',
  address: '',
  phone: '',
  email: '',
  gender: '',
  education: '',
  isStudying: '',
  university: '',
  major: '',
  isWorking: '',
  jobTitle: '',
  desiredTeam: '',
  notes: '',
};

const VolunteerPage = () => {
  const [formData, setFormData] = useState(initialForm);
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
        body: JSON.stringify({
          ...formData,
          isStudying: formData.isStudying === 'yes',
          isWorking: formData.isWorking === 'yes',
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ تم استلام طلب التطوع بنجاح! سنراجع بياناتك ونتواصل معك قريبًا.');
        setFormData(initialForm);
      } else {
        setMessage(`⚠️ ${data.message || 'تعذر إرسال الطلب، حاول مرة أخرى.'}`);
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-4">
            تطوع معنا
          </h1>
          <p className="text-lg md:text-xl text-blue-900 text-center max-w-3xl mx-auto">
            نموذج تسجيل في نادي نماء التطوعي
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">الاسم الرباعي *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">تاريخ الميلاد *</label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">المدينة *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">عنوان السكن بالتفصيل *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">رقم الهاتف *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">الإيميل *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">الجنس *</label>
              <div className="flex gap-6">
                {['ذكر', 'أنثى'].map((option) => (
                  <label key={option} className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value={option}
                      checked={formData.gender === option}
                      onChange={handleInputChange}
                      required
                      disabled={loading}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">المؤهل العلمي *</label>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">هل تدرس حاليًا؟ *</label>
              <div className="flex gap-6">
                {[
                  { value: 'yes', label: 'نعم' },
                  { value: 'no', label: 'لا' },
                ].map((option) => (
                  <label key={option.value} className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="isStudying"
                      value={option.value}
                      checked={formData.isStudying === option.value}
                      onChange={handleInputChange}
                      required
                      disabled={loading}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">الجامعة</label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">التخصص</label>
                <input
                  type="text"
                  name="major"
                  value={formData.major}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">هل تعمل حاليًا؟ *</label>
              <div className="flex gap-6">
                {[
                  { value: 'yes', label: 'نعم' },
                  { value: 'no', label: 'لا' },
                ].map((option) => (
                  <label key={option.value} className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="isWorking"
                      value={option.value}
                      checked={formData.isWorking === option.value}
                      onChange={handleInputChange}
                      required
                      disabled={loading}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">الوظيفة</label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">الفريق المتخصص الذي ترغب التطوع به *</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'الفريق الطبي',
                  'الفريق التنموي',
                  'الفريق الإعلامي',
                  'فريق البرامج',
                  'الفريق التكنولوجي',
                  'الفريق الإداري',
                  'أرغب بالانضمام لفريق متخصص',
                ].map((option) => (
                  <label key={option} className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="desiredTeam"
                      value={option}
                      checked={formData.desiredTeam === option}
                      onChange={handleInputChange}
                      required
                      disabled={loading}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">ملاحظات إضافية</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
              {loading ? 'جاري إرسال الطلب...' : 'إرسال طلب التطوع'}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VolunteerPage;
