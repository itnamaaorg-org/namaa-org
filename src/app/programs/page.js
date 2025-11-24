'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState('kafa-at');

  const tabs = [
    { id: 'kafa-at', label: 'كفاءات', href: '/programs/kafa-at' },
    { id: 'community-entrepreneur', label: 'الريادي المجتمعي', href: '/programs/community-entrepreneur' },
    { id: 'community-entrepreneur-specialist', label: 'اخصائي الريادي المجتمعي', href: '/programs/community-entrepreneur-specialist' },
    { id: 'international-volunteer-license', label: 'الرخصة الدولية للعمل التطوعي', href: '/programs/international-volunteer-license' },
  ];

  const programContent = {
    'kafa-at': {
      title: 'من الفكرة إلى الاستثمار: برنامجنا لريادة الأعمال يصنع رواد أعمال ناجحين',
      description: 'برنامج كفاءات هو برنامج متخصص في مجال ريادة الأعمال، يستهدف الشباب الأردني الطامح لإنشاء مشروعه الخاص. يقدم البرنامج تدريبًا شاملاً على مهارات ريادة الأعمال التجارية، من خلال ورش عمل متخصصة وبرامج تأهيلية تساعد الشباب على تحويل أفكارهم إلى مشاريع ناجحة.',
      stages: [
        'مدخل إلى ريادة الأعمال',
        'ابتكار فكرة المشروع',
        'بناء نموذج التجاري',
        'دراسة السوق والمنافسين',
        'كتابة خطة العمل',
        'إدارة الموارد المالية',
        'التسويق والبيع',
        'عرض المشروع على المستثمرين',
        'إطلاق المشروع',
      ],
    },
  };

  const currentContent = programContent[activeTab] || programContent['kafa-at'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      {/* Hero Section */}
      <div className="relative pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-8">
            ثلاث مسارات تصنع فرقاً
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 text-center max-w-3xl mx-auto">
            من خلال برامجنا الرئيسية، تمكّن الشباب ونصنع أثراً مستداماً في المجتمع
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex flex-wrap justify-center gap-4 border-b-2 border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-lg transition-colors relative ${
                activeTab === tab.id
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#94C83D] rounded-t-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Program Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {currentContent.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            {currentContent.description}
          </p>

          {/* Video Section */}
          <div className="mb-8 rounded-2xl overflow-hidden">
            <div className="relative w-full h-0 pb-[56.25%] bg-gray-200">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/5Xe9C5Izshw?si=GW75DNQcYud-1VVm"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Program Stages */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">مراحل البرنامج</h3>
            <ol className="space-y-4">
              {currentContent.stages.map((stage, index) => (
                <li key={index} className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#94C83D] text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg text-gray-700 pt-1">{stage}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="relative h-48 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl overflow-hidden"
              >
                <img
                  src={`/image${item}.png`}
                  alt={`Gallery ${item}`}
                  className="w-full h-full object-cover"
                />
                {item === 6 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold">
                    +9
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
