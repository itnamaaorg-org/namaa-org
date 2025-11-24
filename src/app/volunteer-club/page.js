import Footer from '@/components/Footer';

export const metadata = {
  title: 'نادي نماء التطوعي - نماء',
  description: 'نادي نماء التطوعي - منصة تجمع المتطوعين لتنظيم وتنفيذ أنشطة تطوعية متنوعة',
};

const VolunteerClubPage = () => {
  const teams = [
    { name: 'فريق تمكين', description: 'يعمل على مشاريع تمكين الأسر والمجتمعات' },
    { name: 'فريق الأيتام (رفقاء نماء)', description: 'يرعى ويدعم الأيتام في مختلف المجالات' },
    { name: 'فريق المبادرات التطوعية', description: 'ينظم وينفذ المبادرات التطوعية المتنوعة' },
    { name: 'الفريق الطبي', description: 'يقدم الخدمات الطبية والصحية للمجتمع' },
    { name: 'الفريق الإعلامي', description: 'يتولى التغطية الإعلامية لأنشطة الجمعية' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-8">
            نادي نماء التطوعي
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 text-center max-w-3xl mx-auto">
            منصة تجمع المتطوعين لتنظيم وتنفيذ أنشطة تطوعية متنوعة تخدم المجتمع
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* About Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">عن النادي</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              نادي نماء التطوعي هو منصة تجمع المتطوعين من مختلف الفئات العمرية والخلفيات لتنظيم وتنفيذ أنشطة تطوعية متنوعة تخدم المجتمع المحلي. يهدف النادي إلى تفعيل طاقات الشباب وتوجيهها لخدمة الوطن والمجتمع.
            </p>
          </div>
        </div>

        {/* Goals Section */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">الأهداف العامة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">الإسهام في البناء المجتمعي</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">غرس القيم الاجتماعية الصالحة</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">تدريب الشباب وتفعيل طاقاتهم</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">بناء فرق متخصصة</p>
              </div>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">الفئة المستهدفة</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            الشباب من كلا الجنسين الراغبين في العمل التطوعي من سن 18 - 35 في الزرقاء.
          </p>
        </div>

        {/* Teams Section */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">الفرق التطوعية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{team.name}</h3>
                <p className="text-gray-700">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VolunteerClubPage;

