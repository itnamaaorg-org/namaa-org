import Footer from '@/components/Footer';

export const metadata = {
  title: 'مشروع رفقاء نماء - نماء',
  description: 'مشروع كفالة ورعاية الأيتام',
};

const RefaqaNamaaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-8">
            مشروع رفقاء نماء
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center text-4xl mb-6">
                🤝
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">عن المشروع</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                مشروع رفقاء نماء يهدف إلى تقديم نموذج مميز في كفالة ورعاية الأيتام. يعمل المشروع على توفير بيئة اجتماعية آمنة للأيتام، مع تقديم برامج تعليمية وتربوية وصحية شاملة تساهم في بناء شخصياتهم وتأهيلهم للمستقبل.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">أهداف المشروع</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تقديم نموذج مميز في كفالة ورعاية الأيتام</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">توفير بيئة اجتماعية آمنة للأيتام</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تقديم برامج تعليمية وتربوية وصحية شاملة</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">بناء شخصيات متوازنة ومستقلة</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تأهيل الأيتام للمستقبل ودمجهم في المجتمع</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">برامج المشروع</h3>
              <p className="text-lg text-gray-700 mb-4">
                يشمل المشروع برامج تعليمية لدعم التحصيل الأكاديمي، وبرامج تربوية لبناء القيم والمبادئ، وبرامج صحية للعناية بالصحة البدنية والنفسية، بالإضافة إلى أنشطة ترفيهية واجتماعية متنوعة.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RefaqaNamaaPage;

