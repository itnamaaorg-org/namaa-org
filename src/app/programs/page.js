import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'برامجنا - نماء',
  description: 'برامج جمعية نماء للتنمية المجتمعية',
};

const programs = [
  {
    id: 'kafa-at',
    label: 'برنامج كفاءات لريادة الأعمال',
    href: '/programs/kafa-at',
    number: '01',
    tagline: 'من الفكرة إلى المشروع',
    summary: 'برنامج ريادي يحوّل أفكار الشباب إلى مشاريع حقيقية قابلة للنمو والاستثمار.',
    title: 'من الفكرة إلى الاستثمار: برنامجنا لريادة الأعمال يصنع رواد أعمال ناجحين',
    description: 'برنامج كفاءات هو مبادرة ريادية تنفذها جمعية نماء للتنمية المجتمعية بالشراكة مع جهات داعمة، ويستهدف الشباب الطامحين الراغبين في تأسيس مشاريعهم الخاصة. يعمل البرنامج على استقطاب الرياديين وتأهيلهم من خلال برنامج تدريبي متكامل يغطي مختلف مراحل تأسيس المشاريع.',
    videoId: '5Xe9C5Izshw',
    stages: [
      'مدخل إلى ريادة الأعمال',
      'ابتكار فكرة المشروع',
      'بناء النموذج التجاري',
      'دراسة السوق والمنافسين',
      'كتابة خطة العمل',
      'إدارة الموارد المالية',
      'التسويق والبيع',
      'عرض المشروع على المستثمرين',
      'إطلاق المشروع',
    ],
  },
  {
    id: 'community-entrepreneur',
    label: 'الريادي المجتمعي',
    href: '/programs/community-entrepreneur',
    number: '02',
    tagline: 'قيادة التغيير المجتمعي',
    summary: 'برنامج تطبيقي يطوّر مهارات الشباب في العمل التطوعي وتنفيذ مبادرات مؤثرة.',
    title: 'الريادي المجتمعي: نُعدّ جيلاً قادراً على قيادة التغيير',
    description: 'برنامج "الريادي المجتمعي" هو برنامج تدريبي تطبيقي يهدف إلى تطوير مهارات الشباب في مجال العمل التطوعي والخدمة المجتمعية، من خلال مزيج متكامل من التدريب النظري والتطبيق العملي.',
    videoId: 'bFlS7ecsWFo',
    stages: [
      'مقدمة في العمل التطوعي وأثره المجتمعي',
      'تطوير المهارات القيادية والتنظيمية',
      'تصميم المبادرات المجتمعية',
      'التطبيق الميداني وتنفيذ المبادرات',
      'بناء الشراكات مع مؤسسات المجتمع',
      'قياس الأثر وتقييم النتائج',
    ],
  },
  {
    id: 'community-entrepreneur-specialist',
    label: 'أخصائي الريادي المجتمعي',
    href: '/programs/community-entrepreneur-specialist',
    number: '03',
    tagline: 'تخصص عميق وأثر مستدام',
    summary: 'برنامج متخصص لتأهيل كوادر قادرة على تحليل المشكلات وتقديم حلول مجتمعية مبتكرة.',
    title: 'أخصائي الريادي المجتمعي: كوادر متخصصة لأثر مستدام',
    description: 'برنامج "أخصائي الريادة المجتمعية" هو برنامج تدريبي متخصص يهدف إلى تأهيل المشاركين بالمعارف والمهارات اللازمة للعمل في مجال الريادة المجتمعية وتقديم الاستشارات وبناء حلول مبتكرة.',
    videoId: 'bFlS7ecsWFo',
    stages: [
      'أسس الريادة المجتمعية والابتكار الاجتماعي',
      'تحليل المشكلات المجتمعية',
      'تصميم الحلول الإبداعية',
      'إدارة المشاريع ذات الأثر الاجتماعي',
      'تقديم الاستشارات المجتمعية',
      'بناء مبادرات مستدامة',
    ],
  },
  {
    id: 'international-volunteer-license',
    label: 'الرخصة الدولية للعمل التطوعي',
    href: '/programs/international-volunteer-license',
    number: '04',
    tagline: 'معتمد عربياً وعالمياً',
    summary: 'برنامج معتمد من الاتحاد العربي للعمل التطوعي يؤهّل المشاركين وفق معايير مهنية دولية.',
    title: 'الرخصة الدولية للعمل التطوعي: معتمدة عربياً وعالمياً',
    description: 'برنامج "الرخصة الدولية للعمل التطوعي" هو برنامج تدريبي معتمد من الاتحاد العربي للعمل التطوعي، يهدف إلى تأهيل المشاركين بالمعارف والمهارات اللازمة لممارسة العمل التطوعي باحترافية وفق أفضل الممارسات الدولية.',
    videoId: 'bFlS7ecsWFo',
    stages: [
      'مفاهيم العمل التطوعي الدولي وأخلاقياته',
      'معايير الجودة في البرامج التطوعية',
      'القيادة والعمل الجماعي في البيئات التطوعية',
      'تصميم وتنفيذ المبادرات التطوعية',
      'التخطيط وإدارة البرامج التطوعية',
      'تمثيل العمل التطوعي في المحافل المحلية والدولية',
    ],
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">

      {/* Hero */}
      <div className="relative pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            أربع برامج تصنع فرقاً
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            من خلال برامجنا الرئيسية، نمكّن الشباب، ونصنع أثراً مستداماً في المجتمع
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((p) => (
            <Link key={p.id} href={p.href}>
              <div className="text-right rounded-3xl p-8 flex flex-col gap-3 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-[#94C83D] bg-white/80 backdrop-blur-sm cursor-pointer h-full">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {p.label}
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-gray-500 flex-1">
                  {p.summary}
                </p>
                <div className="flex items-center gap-2 font-semibold text-sm mt-1 text-[#94C83D]">
                  <span>اقرأ المزيد ←</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
