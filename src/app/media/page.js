import Footer from '@/components/Footer';

export const metadata = {
  title: 'نماء في الاعلام - نماء',
  description: 'تغطية إعلامية لأنشطة ومشاريع جمعية نماء',
};

const MediaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-8">
            نماء في الاعلام
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 text-center max-w-3xl mx-auto">
            تغطية إعلامية لأنشطة ومشاريع جمعية نماء في وسائل الإعلام المختلفة
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Introduction */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">التغطية الإعلامية</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              حظيت مشاريع وأنشطة جمعية نماء بتغطية متميزة في وسائل الإعلام المختلفة. تسعى الجمعية إلى إبراز إنجازاتها ومشاريعها من خلال التغطية الإعلامية الشاملة التي تسلط الضوء على الأثر الإيجابي الذي تحققه في المجتمع.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              شهد بتميز أعمال الجمعية العديد من الخبراء والمتخصصين، مما يعكس جودة المشاريع والبرامج التي تنفذها.
            </p>
          </div>
        </div>

        {/* Media Coverage Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
              📺
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">التلفزيون</h3>
            <p className="text-gray-700 leading-relaxed">
              تغطية شاملة لأنشطة الجمعية في القنوات التلفزيونية المحلية والإقليمية
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
              📻
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">الإذاعة</h3>
            <p className="text-gray-700 leading-relaxed">
              برامج إذاعية تتناول مشاريع وأنشطة الجمعية وأثرها في المجتمع
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
              📰
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">الصحف والمجلات</h3>
            <p className="text-gray-700 leading-relaxed">
              مقالات وتقارير صحفية عن إنجازات ومشاريع الجمعية
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
              🌐
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">المواقع الإلكترونية</h3>
            <p className="text-gray-700 leading-relaxed">
              تغطية إلكترونية واسعة لأنشطة الجمعية عبر المواقع الإخبارية والمنصات الرقمية
            </p>
          </div>
        </div>

        {/* Media Highlights */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">أبرز التغطيات</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
              <p className="text-gray-700 text-lg">
                تغطية شاملة لمشاريع الجمعية في مختلف وسائل الإعلام المحلية والإقليمية
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
              <p className="text-gray-700 text-lg">
                تقارير إعلامية عن إنجازات الجمعية وتأثيرها الإيجابي في المجتمع
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
              <p className="text-gray-700 text-lg">
                لقاءات مع فريق الجمعية والمستفيدين من برامجها ومشاريعها
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MediaPage;

