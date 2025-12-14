import Footer from '@/components/Footer';

export const metadata = {
  title: 'برنامج الرخصة الدولية للعمل التطوعي - نماء',
  description: 'برنامج الرخصة الدولية للعمل التطوعي - شهادة معترف بها دوليًا',
};

const InternationalVolunteerLicensePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-8">
            برنامج الرخصة الدولية للعمل التطوعي
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center text-4xl mb-6">
                🏆
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">عن البرنامج</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                برنامج الرخصة الدولية للعمل التطوعي يوفر شهادة معترف بها دوليًا في مجال العمل التطوعي. يساعد هذا البرنامج المتطوعين على تطوير مهاراتهم والحصول على اعتماد مهني يؤهلهم للعمل في مختلف المجالات التطوعية محليًا ودوليًا.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">مميزات الرخصة</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">شهادة معترف بها دوليًا</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تطوير المهارات التطوعية الاحترافية</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">فتح آفاق جديدة للعمل التطوعي</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">إضافة قيمة للملف الشخصي المهني</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">الانضمام إلى شبكة عالمية من المتطوعين المعتمدين</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">متطلبات الحصول على الرخصة</h3>
              <p className="text-lg text-gray-700 mb-4">
                إكمال برنامج التدريب المطلوب، والمشاركة الفعالة في الأنشطة التطوعية، واجتياز التقييمات المقررة.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InternationalVolunteerLicensePage;

