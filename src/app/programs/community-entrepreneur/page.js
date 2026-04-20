import Footer from '@/components/Footer';

export const metadata = {
  title: 'برنامج الريادي المجتمعي - نماء',
  description: 'برنامج تدريبي تطبيقي لتطوير مهارات الشباب في العمل التطوعي والخدمة المجتمعية',
};

const goals = [
  'تأهيل الشباب بالمهارات الأساسية في العمل التطوعي والخدمة المجتمعية.',
  'تنمية القدرات القيادية والعملية لدى المشاركين.',
  'تمكين الشباب من ابتكار وتنفيذ مبادرات مجتمعية مؤثرة.',
  'تعزيز ثقافة العمل التطوعي والانتماء والمسؤولية المجتمعية.',
  'دعم الشباب المبادرين وتوجيههم نحو تطوير مشاريعهم.',
  'رفد المؤسسات المجتمعية بكفاءات شبابية مؤهلة.',
  'توفير بيئة تطبيقية حاضنة للمبادرات ضمن نادي نماء التطوعي.',
];

export default function CommunityEntrepreneurPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            برنامج الريادي المجتمعي
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20 space-y-6">

        {/* مقدمة — أبيض */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">مقدمة البرنامج</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            انطلاقاً من أهمية العمل التطوعي كأحد أهم أدوات التنمية المجتمعية، ودوره في تمكين الشباب وتعزيز مشاركتهم الفاعلة، جاء برنامج "الريادي المجتمعي" ليكون منصة تدريبية تسهم في إعداد جيل قادر على قيادة المبادرات المجتمعية وإحداث أثر إيجابي ومستدام.
          </p>
        </div>

        {/* وصف — أخضر */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">وصف البرنامج</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            برنامج "الريادي المجتمعي" هو برنامج تدريبي تطبيقي يهدف إلى تطوير مهارات الشباب في مجال العمل التطوعي والخدمة المجتمعية، من خلال مزيج متكامل من التدريب النظري والتطبيق العملي.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            يعمل البرنامج على تمكين المشاركين من تصميم وتنفيذ مبادرات مجتمعية مبتكرة، وتعزيز قدراتهم القيادية والتنظيمية، إضافة إلى تهيئتهم للتفاعل مع مؤسسات المجتمع وبناء شراكات فعالة تدعم مشاريعهم.
          </p>
        </div>

        {/* أهداف — أبيض */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">أهداف البرنامج</h2>
          <ul className="space-y-4">
            {goals.map((goal, i) => (
              <li key={i} className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">{goal}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
      <Footer />
    </div>
  );
}
