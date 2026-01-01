import Footer from '@/components/Footer';

export const metadata = {
  title: 'المشاريع الموسيمية - نماء',
  description: 'المشاريع الموسمية لجمعية نماء',
};

const SeasonalProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-8">
            المشاريع الموسيمية
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center text-4xl mb-6">
                🎁
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">عن المشاريع الموسمية</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                المشاريع الموسمية هي مبادرات تطوعية وخيرية تنفذ في مواسم محددة من السنة. تشمل هذه المشاريع حملات متنوعة تهدف إلى تقديم الدعم والمساعدة للمحتاجين في أوقات محددة، مثل فصل الشتاء وشهر رمضان المبارك.
              </p>
            </div>

            <div className="space-y-8 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">حملة &rdquo;دفء وعطاء&rdquo;</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  حملة موسمية تنفذ في فصل الشتاء لتوزيع المستلزمات الأساسية على الأسر المحتاجة. تشمل الحملة توزيع الملابس الشتوية، البطانيات، والمواد الغذائية الأساسية لمساعدة الأسر على مواجهة برد الشتاء.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">مشاريع رمضان</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  مشاريع خيرية تنفذ خلال شهر رمضان المبارك لتقديم المساعدات الغذائية والمالية للأسر المحتاجة. تشمل المشاريع توزيع سلال غذائية، وجبات إفطار جماعية، ومساعدات مالية لمساعدة الأسر على قضاء الشهر الكريم بكرامة.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">أهداف المشاريع الموسمية</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تقديم الدعم للمحتاجين في المواسم الخاصة</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تعزيز روح التكافل والتضامن الاجتماعي</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">استغلال المواسم الدينية والاجتماعية لخدمة المجتمع</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SeasonalProjectsPage;

