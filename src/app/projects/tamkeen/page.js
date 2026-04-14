import Footer from '@/components/Footer';

export const metadata = {
  title: 'مشروع تمكين - نماء',
  description: 'مشروع تمكين الأسر العفيفة من خلال المشاريع الصغيرة',
};

const TamkeenPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-8">
            مشروع تمكين
          </h1>
        </div>
      </div>

     <div className="mb-6 flex justify-center">
         <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg">
       <iframe
         className="w-full h-full"
         src="https://www.youtube.com/embed/SiZuyDgyDQE"
         title="Tamkeen Video"
         allowFullScreen
        ></iframe>
      </div>
   </div>
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center text-4xl mb-6">
                💪
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">عن المشروع</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              </p>يعمل المشروع على مساعدة الأسر بالاعتماد على نفسها في تأمين قوت يومها من خلال توفير الدعم المالي لها لامتلاك مشروع يساهم في تحسين مستوى دخلها ومساعدتها للخروج من دائرة العوز والحاجة إلى الاكتفاء الذاتي.

            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">مبررات المشروع</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">شدة المعاناة التي تعيشها الأسر الفقيرة، خاصة تلك التي تعاني من الفقر الشديد.</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">ارتفاع الأعباء المالية اللازمة لتأمين الاحتياجات اليومية الأساسية.</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">الضغوط النفسية على أرباب الأسر نتيجة قلة الموارد والدخل، وما يترتب عليها من آثار سلبية متعددة.</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">امتلاك الأسر الفقيرة القدرة على العمل والإنتاج، مع نقص في الدعم المادي والاجتماعي اللازم.</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تأثير الظروف الاقتصادية الصعبة على استقرار الأسرة، مما قد يؤدي إلى التفكك أو الطلاق.</p>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">أهداف المشروع</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تمكين الأسر المستهدفة من امتلاك مصادر دخل مستدامة تُحسّن من مستوى معيشتها.</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تعزيز قدرة الأسر على إدارة مشاريع إنتاجية ناجحة وتحقيق الاكتفاء الذاتي.</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">ضمان استمرارية المشاريع وتحقيق أثر اقتصادي ملموس على المدى الطويل.</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تنفيذ زيارات ميدانية دورية لمتابعة تقدم المشاريع وتقييم أثرها.</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4"> آليات العمل والوسائل المستخدمة:</h3>
              <p className="text-lg text-gray-700 mb-4">
               تبدأ مراحل تنفيذ المشروع بدراسة حالة الأسرة المتقدمة، والقيام بدراسة جدوى مالية للمشروع لضمان نجاحه، ومن ثم تدريب المستفيد على إدارة المشروع، ليصار إلى تنفيذ المشروع ومتابعته بشكل مستمر لإنجاحه.

ولضمان التقدم باتجاه الغاية من مشاريع تمكين واستمراريتها يتم إبرام اتفاقية بين الجمعية والمستفيد في المحكمة المختصة للحفاظ على المشروع وعدم التصرف بأمواله لمدة خمس سنوات.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">عوامل التميز في آليات عمل المشروع:</h3>
              <p className="text-lg text-gray-700 mb-4">
               يتخذ المشروع مسار القروض الحسنة، حيث يسدد المستفيد الأقساط من مسار القروض بمبالغ رمزية شهرية ليعاد تدويرها للاستفادة منها بإنشاء مشاريع جديدة.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TamkeenPage;

