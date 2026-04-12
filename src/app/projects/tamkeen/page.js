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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">أهداف المشروع</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700"> يهدف المشروع إلى الإسهام في خفض نسب الفقر في المجتمع.  </p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">  العمل على تقليل معدلات البطالة في المملكة الأردنية الهاشمية.</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">يمتد أثر المشروع ليشمل خمس محافظات داخل المملكة.</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700"> تعزيز قدرة الأسر على الاعتماد على ذاتها.  </p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">  تحقيق العيش الكريم من خلال توفير دخل شهري ثابت للأسر المستفيدة.</p>
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

