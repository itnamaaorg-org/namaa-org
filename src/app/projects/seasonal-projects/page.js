import Footer from '@/components/Footer';
import SeasonalProjectsAccordion from '@/components/SeasonalProjectsAccordion';

export const metadata = {
  title: 'المشاريع الموسمية - نماء',
  description: 'المشاريع الموسمية لجمعية نماء',
};

const SeasonalProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-8">
            المشاريع الموسمية
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
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                جمعية نماء للتنمية المجتمعية هي مؤسسة رائدة في العمل التطوعي والخدمي، تهدف إلى دعم الأسر والأفراد الأكثر حاجة، وتمكين المجتمع من خلال مشاريع تنموية وإنسانية تركز على تعزيز الكرامة الإنسانية، تنمية المهارات، وبناء مجتمع متكافل يسوده التضامن والتعاون.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                وتعمل الجمعية على تصميم حملات موسمية استراتيجية تلبي احتياجات المجتمع في كل فصل من السنة، لتكون نافذة أمل وفرصة للتغيير الإيجابي، وتعزز روح التطوع والعطاء بين جميع أفراد المجتمع.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">حملة رمضانك عطاء</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  حملة رمضانك عطاء هي مبادرة سنوية تحتفي بروح الشهر الفضيل، وتهدف إلى إدخال الفرح والبهجة على قلوب الأطفال والأسر العفيفة، مع تقديم الدعم الغذائي والمعيشي للأسر الأكثر حاجة، وتعزيز ثقافة التكافل الاجتماعي.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">أهداف الحملة</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">إدخال السرور على الأطفال الأيتام والأسر العفيفة خلال شهر رمضان.</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">توفير الدعم الغذائي والمعيشي للأسر الأكثر حاجة.</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تمكين الأسر من تحسين وضعها الاقتصادي عبر مشاريع مدرة للدخل.</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تعزيز روح التطوع والمشاركة المجتمعية بين جميع فئات المجتمع.</p>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 mb-8">
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

            
            <SeasonalProjectsAccordion />

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SeasonalProjectsPage;
