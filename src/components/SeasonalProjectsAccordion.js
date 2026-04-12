'use client';

import { useState } from 'react';

const campaigns = [
  {
    id: 'dafa',
    title: 'حملة دفء وعطاء',
    icon: '🧥',
    color: 'from-green-50 to-teal-50',
    borderColor: 'border-green-200',
    projects: [
      {
        id: 'clothes',
        title: 'توزيع الملابس الشتوية',
        icon: '👕',
        description: 'توزيع الملابس الشتوية الدافئة على الأسر المحتاجة وتأمين احتياجاتهم الأساسية في فصل الشتاء.',
        details: ['توزيع ملابس للأطفال والكبار', 'تأمين البطانيات والأغطية', 'الوصول لأكثر من 200 أسرة'],
      },
      {
        id: 'food',
        title: 'توزيع المواد الغذائية',
        icon: '🛒',
        description: 'تأمين سلال غذائية متكاملة للأسر المحتاجة خلال فصل الشتاء.',
        details: ['سلال غذائية متكاملة', 'مواد تدفئة أساسية', 'توزيع منظم وعادل'],
      },
    ],
  },
  {
    id: 'ramadan',
    title: 'حملة رمضانك عطاء',
    icon: '🌙',
    color: 'from-green-50 to-teal-50',
    borderColor: 'border-green-200',
    projects: [
      {
        id: 'luqma',
        title: 'لقمة هنية',
        icon: '🍽️',
        description: 'مشروع يهدف إلى تأمين وجبات إفطار رمضانية للأسر المحتاجة طوال شهر رمضان.',
        details: ['وجبات إفطار يومية', 'تغطية كاملة لشهر رمضان', 'خدمة مئات الأسر'],
        videoId: 'MLAI0_ATWLw',
      },
      {
        id: 'market',
        title: 'سوق الخير',
        icon: '🛍️',
        description: 'سوق خيري يتيح للأسر المحتاجة الحصول على احتياجاتهم الرمضانية بكرامة.',
        details: ['مواد غذائية متنوعة', 'ملابس العيد للأطفال', 'بيئة كريمة ومحترمة'],
        videoId: 'KOvWpFk5ISA',
      },
    ],
  },
];

const VideoPlayer = ({ videoId }) => {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="mt-4 rounded-xl overflow-hidden aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="mt-4 w-full relative rounded-xl overflow-hidden bg-gray-900 aspect-video flex items-center justify-center group"
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt="video thumbnail"
        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
      />
      <div className="relative z-10 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
        <span className="text-white text-2xl ml-1">▶</span>
      </div>
    </button>
  );
};

const SeasonalProjectsAccordion = () => {
  const [openCampaign, setOpenCampaign] = useState(null);
  const [openProject, setOpenProject] = useState(null);

  const toggleCampaign = (id) => {
    setOpenCampaign(openCampaign === id ? null : id);
    setOpenProject(null);
  };

  const toggleProject = (id) => {
    setOpenProject(openProject === id ? null : id);
  };

  return (
    <div className="mt-8 space-y-4" dir="rtl">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">تفاصيل الحملات والمشاريع</h3>

      {campaigns.map((campaign) => (
        <div
          key={campaign.id}
          className={`rounded-2xl border-2 ${campaign.borderColor} overflow-hidden`}
        >
          <button
            onClick={() => toggleCampaign(campaign.id)}
            className={`w-full flex items-center justify-between p-6 bg-gradient-to-r ${campaign.color} hover:brightness-95 transition-all`}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{campaign.icon}</span>
              <span className="text-xl font-bold text-gray-900">{campaign.title}</span>
            </div>
            <span className="text-gray-600 text-xl transition-transform duration-300"
              style={{ transform: openCampaign === campaign.id ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              ▼
            </span>
          </button>

          {openCampaign === campaign.id && (
            <div className="p-4 space-y-3 bg-white">
              {campaign.projects.map((project) => (
                <div key={project.id} className="rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{project.icon}</span>
                      <span className="text-lg font-semibold text-gray-800">{project.title}</span>
                    </div>
                    <span className="text-gray-500 transition-transform duration-300"
                      style={{ transform: openProject === project.id ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      ▼
                    </span>
                  </button>

                  {openProject === project.id && (
                    <div className="p-5 bg-white">
                      <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                      <ul className="space-y-2 mb-4">
                        {project.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      {project.videoId && <VideoPlayer videoId={project.videoId} />}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SeasonalProjectsAccordion;
