import React, { useState } from 'react';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: 'اتصل بنا - نماء',
  description: 'معلومات الاتصال بجمعية نماء',
};

const LIMITS = {
  name: 60,
  subject: 80,
  message: 800,
};

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    let nextValue = value;

    if (field === 'name') nextValue = value.slice(0, LIMITS.name);
    if (field === 'subject') nextValue = value.slice(0, LIMITS.subject);
    if (field === 'message') nextValue = value.slice(0, LIMITS.message);

    setForm((prev) => ({ ...prev, [field]: nextValue }));
  };

  const validate = (data) => {
    const nextErrors = {};

    if (!data.name.trim()) nextErrors.name = 'الاسم مطلوب';
    else if (data.name.trim().length > LIMITS.name)
      nextErrors.name = `الحد الأقصى ${LIMITS.name} حرف`;

    if (!data.email.trim()) nextErrors.email = 'البريد الإلكتروني مطلوب';
    else {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());
      if (!emailOk) nextErrors.email = 'البريد الإلكتروني غير صحيح';
    }

    if (!data.subject.trim()) nextErrors.subject = 'الموضوع مطلوب';
    else if (data.subject.trim().length > LIMITS.subject)
      nextErrors.subject = `الحد الأقصى ${LIMITS.subject} حرف`;

    if (!data.message.trim()) nextErrors.message = 'الرسالة مطلوبة';
    else if (data.message.trim().length > LIMITS.message)
      nextErrors.message = `الحد الأقصى ${LIMITS.message} حرف`;

    return nextErrors;
  };

  const onBlurField = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (Object.keys(nextErrors).length) return;
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50'>
      <div className='relative pt-32 pb-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-8'>
            اتصل بنا
          </h1>
          <p className='text-xl md:text-2xl text-gray-700 text-center max-w-3xl mx-auto'>
            نحن هنا للإجابة على استفساراتك ومساعدتك
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 pb-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          {/* Contact Information */}
          <div className='space-y-6'>
            <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8'>
              <div className='flex items-start space-x-4 space-x-reverse mb-6'>
                <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <MapPin className='w-6 h-6 text-green-600' />
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    العنوان
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    الزرقاء الجديدة - شارع 36 - مجمع سامح مول - الطابق الثاني
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8'>
              <div className='flex items-start space-x-4 space-x-reverse mb-6'>
                <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Phone className='w-6 h-6 text-green-600' />
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    الهاتف
                  </h3>
                  <a
                    href='tel:053851335'
                    className='text-green-600 hover:text-green-700 text-lg'
                  >
                    (05) 3851335
                  </a>
                </div>
              </div>
            </div>

            <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8'>
              <div className='flex items-start space-x-4 space-x-reverse mb-6'>
                <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Mail className='w-6 h-6 text-green-600' />
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    البريد الإلكتروني
                  </h3>
                  <a
                    href='mailto:info@namaa-ngo.org'
                    className='text-green-600 hover:text-green-700 text-lg'
                  >
                    info@namaa-ngo.org
                  </a>
                </div>
              </div>
            </div>

            <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8'>
              <div className='flex items-start space-x-4 space-x-reverse mb-6'>
                <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Clock className='w-6 h-6 text-green-600' />
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    ساعات العمل
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    الأحد - الخميس: 9:00 صباحًا – 4:00 مساءً
                    <br />
                    الجمعة: مغلق
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8'>
            <h2 className='text-3xl font-bold text-gray-900 mb-8'>
              أرسل لنا رسالة
            </h2>

            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label className='block text-gray-700 font-medium mb-2'>
                  الاسم
                </label>
                <input
                  type='text'
                  value={form.name}
                  onChange={(e) => setField('name', e.target.value)}
                  onBlur={() => onBlurField('name')}
                  required
                  maxLength={LIMITS.name}
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                  placeholder='أدخل اسمك'
                />
                <div className='flex items-center justify-between mt-1'>
                  {touched.name && errors.name ? (
                    <p className='text-sm text-red-600'>{errors.name}</p>
                  ) : (
                    <span />
                  )}
                  <p className='text-xs text-gray-500'>
                    {form.name.length}/{LIMITS.name}
                  </p>
                </div>
              </div>

              <div>
                <label className='block text-gray-700 font-medium mb-2'>
                  البريد الإلكتروني
                </label>
                <input
                  type='email'
                  value={form.email}
                  onChange={(e) => setField('email', e.target.value)}
                  onBlur={() => onBlurField('email')}
                  required
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                  placeholder='namaa@gmail.com'
                />
                {touched.email && errors.email ? (
                  <p className='mt-1 text-sm text-red-600'>{errors.email}</p>
                ) : null}
              </div>

              <div>
                <label className='block text-gray-700 font-medium mb-2'>
                  الموضوع
                </label>
                <input
                  type='text'
                  value={form.subject}
                  onChange={(e) => setField('subject', e.target.value)}
                  onBlur={() => onBlurField('subject')}
                  required
                  maxLength={LIMITS.subject}
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                  placeholder='موضوع الرسالة'
                />
                <div className='flex items-center justify-between mt-1'>
                  {touched.subject && errors.subject ? (
                    <p className='text-sm text-red-600'>{errors.subject}</p>
                  ) : (
                    <span />
                  )}
                  <p className='text-xs text-gray-500'>
                    {form.subject.length}/{LIMITS.subject}
                  </p>
                </div>
              </div>

              <div>
                <label className='block text-gray-700 font-medium mb-2'>
                  الرسالة
                </label>
                <textarea
                  rows='5'
                  value={form.message}
                  onChange={(e) => setField('message', e.target.value)}
                  onBlur={() => onBlurField('message')}
                  required
                  maxLength={LIMITS.message}
                  className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent'
                  placeholder='اكتب رسالتك هنا...'
                />
                <div className='flex items-center justify-between mt-1'>
                  {touched.message && errors.message ? (
                    <p className='text-sm text-red-600'>{errors.message}</p>
                  ) : (
                    <span />
                  )}
                  <p className='text-xs text-gray-500'>
                    {form.message.length}/{LIMITS.message}
                  </p>
                </div>
              </div>

              <button
                type='submit'
                className='w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 transform hover:scale-105 shadow-lg'
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
