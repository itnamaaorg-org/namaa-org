'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { seasonalImages } from '@/lib/images';

const MiniSlider = ({ images, label }) => {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) return null;
  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));
  return (
    <div className="w-3/4 mx-auto">
      <div className="relative w-full rounded-xl overflow-hidden shadow-md aspect-video bg-gray-100">
        <img
          src={images[current]}
          alt={`صورة ${current + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/80 hover:bg-white rounded-full shadow flex items-center justify-center transition-all">
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
            <button onClick={next} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/80 hover:bg-white rounded-full shadow flex items-center justify-center transition-all">
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
          </>
        )}
      </div>
      <p className="text-center text-xs text-gray-400 mt-1">{current + 1} / {images.length}</p>
    </div>
  );
};

const campaigns = [
  {
    id: 'ramadan',
    title: 'حملة رمضانك عطاء',
    icon: '🌙',
    description: 'حملة سنوية تحتفي بروح الشهر الفضيل، وتهدف إلى إدخال الفرح والبهجة على قلوب الأطفال والأسر العفيفة، مع تقديم الدعم الغذائي والمعيشي للأسر الأكثر حاجة، وتعزيز ثقافة التكافل الاجتماعي.',
    goals: [
      'إدخال السرور على الأطفال الأيتام والأسر العفيفة خلال شهر رمضان.',
      'توفير الدعم الغذائي والمعيشي للأسر الأكثر حاجة.',
      'تمكين الأسر من تحسين وضعها الاقتصادي عبر مشاريع مدرة للدخل.',
      'تعزيز روح التطوع والمشاركة المجتمعية بين جميع فئات المجتمع.',
    ],
    projects: [
      {
        id: 'wishes',
        title: 'مشروع تحقيق أمنيات الأيتام',
        description: 'مشروع مختص بتحقيق أمنيات الأطفال الأيتام من خلال سؤال كل طفل عن أمنية يتمنى تحقيقها، والعمل على توفير هذه الأمنيات ومفاجأتهم بها قبل عيد الفطر لإدخال السرور على قلوبهم.',
        images: seasonalImages.wishes,
      },
      {
        id: 'meals',
        title: 'مشروع وجبات الخير',
        description: 'مشروع مختص بتوزيع وجبات الطعام الجاهزة على العائلات العفيفة طوال شهر رمضان، بالإضافة إلى إقامة إفطارات خيرية لكافة فئات المجتمع، بما في ذلك الأطفال ذوي الاحتياجات الخاصة، المسنين، وعمال الوطن.',
        videoId: 'MLAI0_ATWLw',
        images: seasonalImages.meals,
      },
      {
        id: 'food-boxes',
        title: 'مشروع الطرود الغذائية',
        description: 'مشروع مختص بتوزيع الطرود الغذائية المتكاملة التي تلبي احتياجات الأسر الأساسية طوال شهر رمضان المبارك.',
      },
      {
        id: 'eid-clothes',
        title: 'مشروع كسوة العيد',
        description: 'مشروع مختص بتأمين ملابس العيد للأطفال الأيتام وأبناء الأسر العفيفة، مع اصطحاب الأطفال للتسوق وشراء الملابس التي تناسبهم، بالإضافة إلى تنظيم زيارة لمدينة الألعاب وإقامة إفطار جماعي.',
        images: seasonalImages.eidClothes,
      },
      {
        id: 'eid-gift',
        title: 'مشروع عيدية الأيتام',
        description: 'مشروع مختص بتقديم مبلغ مالي للأطفال الأيتام لمساعدتهم في شراء مستلزمات العيد قبل أيام العيد المبارك.',
      },
      {
        id: 'charity-market',
        title: 'السوق الخيري للخضار والفواكه والمواد الغذائية',
        description: 'مشروع مختص بإقامة معرض خيري يحتوي على أصناف متنوعة من الخضار والفواكه والمواد الغذائية الأساسية، حيث تتسوق الأسر العفيفة ضمن سقف محدد وبطريقة منظمة يديرها المتطوعون.',
        videoId: 'KOvWpFk5ISA',

        images: seasonalImages.charityMarket,
      },
    ],
  },
  {
    id: 'dafa',
    title: 'حملة دفء وعطاء',
    icon: '🧥',
    description: 'حملة تهدف إلى مساعدة الأسر الأكثر حاجة خلال فصل الشتاء، من خلال توفير مستلزمات التدفئة، الكسوة، والطعام، لضمان حياة كريمة للأطفال والأسر خلال الأشهر الشتوية الباردة.',
    goals: [
      'حماية الأسر والأطفال من برد الشتاء القارس.',
      'تقديم الدعم المادي والمعنوي للأسر العفيفة لمواجهة التحديات الشتوية.',
      'تعزيز قيم التضامن والتكافل الاجتماعي بين المتطوعين والمجتمع.',
      'توفير مستلزمات شتوية وأدوات تدفئة لضمان حياة آمنة ومريحة للأسر العفيفة.',
    ],
    projects: [
      {
        id: 'renovation',
        title: 'مشروع ترميم المنازل',
        description: 'مشروع مختص بصيانة وترميم منازل الأسر العفيفة التي تعاني من تهالك البناء وفقدان البنية التحتية، لضمان بيئة آمنة للسكن.',
      },
      {
        id: 'winter-clothes',
        title: 'مشروع كسوة الشتاء',
        description: 'مشروع مختص بتوفير ملابس شتوية ثقيلة للأطفال تحميهم من برد الشتاء القارس.',
      },
      {
        id: 'winter-food',
        title: 'مشروع الطرود الغذائية الشتوية',
        description: 'مشروع مختص بتأمين المستلزمات الغذائية الأساسية للأسر العفيفة خلال فصل الشتاء.',
      },
      {
        id: 'warmth',
        title: 'مشروع دفء (كاز وحرام)',
        description: 'مشروع مختص بتقديم وقود التدفئة (الكاز والحرامات) للأسر المحتاجة لمساعدتهم في مواجهة الظروف المادية الصعبة خلال الشتاء.',
      },
      {
        id: 'hands',
        title: 'مشروع من إيدك دفيهم',
        description: 'مشروع مختص بتوفير مستلزمات الأطفال الشتوية الصغيرة مثل الجوارب، القفازات، القبعات، واللفحات المصنوعة من الصوف (الكروشيه)، لضمان راحتهم ودفئهم.',
      },
    ],
  },
  {
    id: 'school',
    title: 'حملة العودة إلى المدارس',
    icon: '🎒',
    description: 'حملة تهدف إلى تجهيز الطلاب الأيتام للعام الدراسي الجديد، من خلال توفير المستلزمات المدرسية الأساسية، الحقائب، والزي المدرسي، مع تعزيز ثقافة التعليم وأهمية التحصيل الدراسي لدى الطلاب.',
    goals: [
      'تمكين الطلاب من العودة إلى المدارس بكامل استعداداتهم.',
      'دعم الأسر العفيفة لتوفير مستلزمات أبنائهم التعليمية.',
      'تعزيز التعليم وتشجيع الطلاب على التحصيل العلمي.',
    ],
    projects: [
      {
        id: 'bags',
        title: 'مشروع تجهيز الحقائب والمستلزمات المدرسية',
        description: 'مشروع مختص بتوفير جميع الأدوات المدرسية الأساسية للطلاب.',
      },
      {
        id: 'financial-support',
        title: 'مشروع الدعم المالي والمادي للأسر',
        description: 'مشروع مختص بمساعدة الأسر بمبلغ مالي لتجهيز أبنائها للعام الدراسي.',
      },
      {
        id: 'awareness',
        title: 'مشروع برامج التوعية التعليمية',
        description: 'مشروع مختص بتنظيم برامج وأنشطة لتعزيز روح التعلم والمسؤولية لدى الطلاب.',
      },
    ],
  },
  {
    id: 'eid',
    title: 'حملة العيد',
    icon: '🎉',
    description: 'حملة تهدف إلى إدخال الفرح والبهجة لقلوب الأطفال والأسر خلال عيد الفطر وعيد الأضحى المبارك، من خلال تقديم الهدايا، تنظيم الفعاليات الترفيهية، والأنشطة المجتمعية.',
    goals: [
      'إدخال السرور والبهجة على الأطفال والأسر المحتاجة خلال أيام العيد.',
      'تعزيز روح المشاركة المجتمعية والتطوع بين أفراد المجتمع.',
      'تنظيم فعاليات ترفيهية واجتماعية لجميع فئات المجتمع.',
    ],
    projects: [
      {
        id: 'family-greet',
        title: 'مشروع معايدة الأسر',
        description: 'مشروع مختص بتقديم معايدات نقدية للأسر المستحقة خلال عيد الفطر وعيد الأضحى، بهدف دعمهم في تلبية احتياجات العيد وإدخال الفرحة والسرور على قلوبهم.',
      },
      {
        id: 'orphan-greet',
        title: 'مشروع معايدة الأيتام',
        description: 'مشروع مختص بإدخال السرور على الأطفال الأيتام من خلال تقديم الهدايا والمعايدات خلال أيام العيد.',
      },
      {
        id: 'eid-bus',
        title: 'مشروع باص العيد',
        description: 'مشروع مختص بتقديم فعاليات ترفيهية للأطفال خلال أيام العيد ومشاركتهم فرحة العيد.',
      },
      {
        id: 'carnival',
        title: 'مشروع كرنفال العيد',
        description: 'مشروع مختص بتنظيم كرنفالات مليئة بالأنشطة الترفيهية للأطفال من خلال الشخصيات الكرتونية والمهرجية والرسم على الوجوه.',
      },
    ],
  },
  {
    id: 'adha',
    title: 'حملة الأضاحي',
    icon: '🐑',
    description: 'حملة تهدف إلى توزيع لحوم الأضاحي على الأسر المستحقة خلال أيام عيد الأضحى، لتخفيف الأعباء عنهم وتوفير الدعم الغذائي لهم، وفق المعايير الشرعية والصحية.',
    goals: [
      'تخفيف الأعباء عن الأسر المستحقة ومساندتهم لتلبية احتياجاتهم الغذائية خلال عيد الأضحى.',
      'إدخال الفرحة والسرور على قلوب الأطفال والأسر المحتاجة.',
      'تعزيز قيم التضامن والتكافل الاجتماعي وروح العطاء بين أفراد المجتمع.',
    ],
    projects: [],
  },
];

const VideoPlayer = ({ videoId }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full rounded-xl overflow-hidden shadow-md aspect-video relative bg-gray-900">
        {playing ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full flex items-center justify-center group"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="video thumbnail"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
            />
            <div className="relative z-10 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white text-xl ml-1">▶</span>
            </div>
          </button>
        )}
      </div>
    </div>
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
          className="rounded-2xl border-2 border-green-200 overflow-hidden"
        >
          <button
            onClick={() => toggleCampaign(campaign.id)}
            className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-teal-50 hover:brightness-95 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{campaign.icon}</span>
              <span className="text-xl font-bold text-gray-900">{campaign.title}</span>
            </div>
            <span
              className="text-gray-600 text-xl transition-transform duration-300"
              style={{ transform: openCampaign === campaign.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              ▼
            </span>
          </button>

          {openCampaign === campaign.id && (
            <div className="p-6 bg-white space-y-6">

              <p className="text-gray-700 leading-relaxed">{campaign.description}</p>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">أهداف الحملة</h4>
                <ul className="space-y-2">
                  {campaign.goals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {campaign.projects.length > 0 && (
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">مشاريع الحملة</h4>
                  <div className="space-y-3">
                    {campaign.projects.map((project) => (
                      <div key={project.id} className="rounded-xl border border-gray-200 overflow-hidden">
                        <button
                          onClick={() => toggleProject(project.id)}
                          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-all"
                        >
                          <span className="text-base font-semibold text-gray-800 text-right">{project.title}</span>
                          <span
                            className="text-gray-500 flex-shrink-0 mr-3 transition-transform duration-300"
                            style={{ transform: openProject === project.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          >
                            ▼
                          </span>
                        </button>

                        {openProject === project.id && (
                          <div className="p-5 bg-white">
                            <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                            {project.videoId && project.images && project.images.length > 0 ? (
                              <div className="grid grid-cols-2 gap-4 items-start">
                                <VideoPlayer videoId={project.videoId} />
                                <MiniSlider images={project.images} label={project.imagesLabel} />
                              </div>
                            ) : (
                              <>
                                {project.videoId && <VideoPlayer videoId={project.videoId} />}
                                {project.images && project.images.length > 0 && (
                                  <MiniSlider images={project.images} label={project.imagesLabel} />
                                )}
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SeasonalProjectsAccordion;
