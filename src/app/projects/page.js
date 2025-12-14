'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  const projects = {
    tamkeen: {
      id: 'tamkeen',
      title: 'مشروع تمكين',
      description:
        'برنامج يركز على التمكين الاقتصادي والمهني عبر التدريب والتوظيف ودعم المشاريع الصغيرة، مع مرافقة مستمرة للمستفيدين.',
      link: '/projects/tamkeen',
      icon: '🛠️',
    },
    'refaqa-namaa': {
      id: 'refaqa-namaa',
      title: 'مشروع رفقاء نماء',
      description:
        'مبادرة تضامن مجتمعي لتقديم الدعم للأسر المحتاجة بالشراكة مع المتطوعين والمؤسسات الداعمة، وخلق شبكة حماية اجتماعية.',
      link: '/projects/refaqa-namaa',
      icon: '🤝',
    },
    'seasonal-projects': {
      id: 'seasonal-projects',
      title: 'المشاريع الموسمية',
      description:
        'حملات موسمية للأعياد والمناسبات تشمل الغذاء والكساء والمستلزمات الأساسية، مع آليات توزيع عادلة وشفافة.',
      link: '/projects/seasonal-projects',
      icon: '🎁',
    },
  };

  const [activeProject, setActiveProject] = useState('tamkeen');
  const current = projects[activeProject] || projects.tamkeen;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      {/* Hero Section */}
      <div className="relative pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-8">
            مشاريعنا
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 text-center max-w-3xl mx-auto">
            لمحة سريعة عن مشاريع نماء الرئيسية، مع روابط للاطلاع على التفاصيل الكاملة.
          </p>
        </div>
      </div>

      {/* FAB-like tabs */}
      <div className="max-w-7xl mx-auto px-4 pb-6">
        <div className="flex flex-wrap justify-center gap-3">
          {Object.values(projects).map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project.id)}
              className={`px-5 py-3 rounded-full border transition-all shadow-sm ${
                activeProject === project.id
                  ? 'bg-green-600 text-white border-green-600 shadow-lg'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-green-300 hover:text-green-700'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      {/* Project detail */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl">
              {current.icon}
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{current.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{current.description}</p>
              <Link
                href={current.link}
                className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800"
              >
                اطلع على التفاصيل
                <svg className="h-4 w-4 mr-1 rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
