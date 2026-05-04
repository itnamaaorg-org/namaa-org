import Link from 'next/link';
import Footer from '@/components/Footer';
import { initiatives } from '@/lib/initiativesData';

export const metadata = {
  title: 'حاضنة المبادرات - نماء',
  description: 'دعم الجمعية للمبادرات والأفكار التطوعية التي تخدم المجتمع المحلي',
};

const InitiativesIncubatorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-8">
            حاضنة المبادرات
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* About Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">عن الحاضنة</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              تعمل جمعية نماء للتنمية المجتمعية من خلال حاضنتها على تبني ودعم المبادرات والأفكار التطوعية التي تستجيب لاحتياجات المجتمع المحلي وتسهم في تحقيق تنميته المستدامة. وانطلاقًا من إيمانها بأن كل فكرة تحمل فرصة حقيقية للتغيير، توفر الحاضنة بيئة داعمة تُمكّن أصحاب المبادرات من تطوير أفكارهم وتحويلها إلى مشاريع واقعية ذات أثر ملموس.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              كما تقدم الحاضنة مجموعة من أشكال الدعم، تشمل الإرشاد والتوجيه، وبناء القدرات، وتوفير الموارد، وربط المبادرين بالشبكات والشركاء، بما يعزز فرص نجاح مبادراتهم واستدامتها، ويسهم في بناء مجتمع أكثر وعيًا وقدرة على التطور.
            </p>
          </div>
        </div>

        {/* Goals */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">أهداف الحاضنة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'دعم الأفكار والمبادرات التطوعية المبتكرة ذات الأثر المجتمعي',
              'توفير الإرشاد والتوجيه والموارد اللازمة لتطوير المبادرات',
              'تحويل الأفكار إلى مشاريع عملية قابلة للتنفيذ والاستدامة',
              'بناء شبكة من المبادرين والمبدعين وتعزيز التعاون بينهم',
              'المساهمة في تنمية المجتمع من خلال حلول مبتكرة ومستدامة',
            ].map((goal, i, arr) => (
              <div
                key={i}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6${i === arr.length - 1 && arr.length % 2 !== 0 ? ' md:col-span-2 md:max-w-xl md:mx-auto md:w-full' : ''}`}
              >
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">{goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Initiatives Examples */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">حكايات نجاح من الميدان</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative) => (
              <Link
                key={initiative.slug}
                href={`/initiatives-incubator/${initiative.slug}`}
                className="group bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {initiative.name}
                </h3>
                <p className="text-gray-700 mb-4">{initiative.shortDescription}</p>
                <span className="inline-flex items-center gap-1 text-green-700 text-sm font-medium">
                  اقرأ المزيد
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* How to Apply */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">كيفية تقديم مبادرة</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              'إعداد خطة واضحة ومفصلة للمبادرة، تتضمن الأهداف، والفئة المستهدفة، والأنشطة المقترحة.',
              'التواصل مع الجمعية عبر البريد الإلكتروني أو الهاتف لتقديم المبادرة.',
              'تقوم الجهة المختصة بمراجعة المبادرة وتقييمها وفق معايير محددة.',
              'التواصل مع صاحب المبادرة لتقديم الملاحظات والتوجيهات اللازمة (إن وجدت).',
              'اعتماد المبادرة وبدء تقديم الدعم المناسب لتنفيذها على أرض الواقع.',
            ].map((step, i) => (
              <div key={i} className="flex items-start space-x-4 space-x-reverse bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">{i + 1}</div>
                <p className="text-lg text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InitiativesIncubatorPage;
