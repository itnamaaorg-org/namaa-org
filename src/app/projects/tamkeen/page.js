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

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center text-4xl mb-6">
                💪
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">عن المشروع</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                مشروع تمكين يعمل على تمكين الأسر العفيفة من خلال إقامة مشاريع صغيرة مدرة للدخل. يهدف المشروع إلى تحقيق الاكتفاء الذاتي للأسر المستفيدة وتحسين الوضع الاجتماعي والاقتصادي لها، مما يساهم في بناء مجتمع أكثر استقرارًا وازدهارًا.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">أهداف المشروع</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تمكين الأسر العفيفة اقتصادياً</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">إقامة مشاريع صغيرة مدرة للدخل</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تحقيق الاكتفاء الذاتي للأسر المستفيدة</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تحسين الوضع الاجتماعي والاقتصادي</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">بناء قدرات الأسر في إدارة المشاريع</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">أنشطة المشروع</h3>
              <p className="text-lg text-gray-700 mb-4">
                يشمل المشروع تقديم الدعم المالي والفني للأسر، وورش عمل في إدارة المشاريع الصغيرة، ومتابعة مستمرة لضمان نجاح المشاريع واستدامتها.
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

