import Footer from '@/components/Footer';

export const metadata = {
  title: 'حاضنة المبادرات - نماء',
  description: 'دعم الجمعية للمبادرات والأفكار التطوعية التي تخدم المجتمع المحلي',
};

const InitiativesIncubatorPage = () => {
  const initiatives = [
    { name: 'مبادرة إعلامي مدرسي', description: 'مبادرة لتدريب الطلاب على الإعلام المدرسي' },
    { name: 'مبادرة النفسية البيضاء', description: 'مبادرة للدعم النفسي والاجتماعي' },
    { name: 'مبادرة مساكن الفقراء', description: 'مبادرة لتحسين ظروف السكن للمحتاجين' },
    { name: 'مبادرة الحارة النموذجية', description: 'مبادرة لتطوير الأحياء والمجتمعات المحلية' },
    { name: 'مبادرة من حقي أتعلم', description: 'مبادرة لدعم التعليم والتحصيل الأكاديمي' },
    { name: 'مبادرة باص العيد', description: 'مبادرة لتوفير وسائل نقل للأطفال في الأعياد' },
    { name: 'مبادرة قيم مول', description: 'مبادرة لتعزيز القيم الإيجابية في المجتمع' },
    { name: 'تحقيق أمنيات الأطفال الأيتام', description: 'مبادرة لتحقيق أحلام وأمنيات الأطفال الأيتام' },
    { name: 'ترميم المنازل', description: 'مبادرة لترميم وتحسين منازل الأسر المحتاجة' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-8">
            حاضنة المبادرات
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 text-center max-w-3xl mx-auto">
            دعم الجمعية للمبادرات والأفكار التطوعية التي تخدم المجتمع المحلي وتساعده على التنمية المستدامة
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* About Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">عن الحاضنة</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              تقوم جمعية نماء بتبني ودعم المبادرات والأفكار التطوعية التي تخدم المجتمع المحلي وتساعده على التنمية المستدامة. نحن نؤمن بأن كل فكرة يمكن أن تصنع فرقًا، ونوفر الدعم والموارد اللازمة لتحويل هذه الأفكار إلى واقع ملموس.
            </p>
          </div>
        </div>

        {/* Goals */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">أهداف الحاضنة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">دعم الأفكار والمبادرات التطوعية المبتكرة</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">توفير الموارد والتوجيه اللازم للمبادرات</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">تحويل الأفكار إلى مشاريع قابلة للتنفيذ</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">بناء شبكة من المبادرين والمبدعين</p>
              </div>
            </div>
          </div>
        </div>

        {/* Initiatives Examples */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">أمثلة على المبادرات المدعومة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{initiative.name}</h3>
                <p className="text-gray-700">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">كيفية تقديم مبادرة</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex items-start space-x-4 space-x-reverse bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <p className="text-lg text-gray-700">قم بإعداد خطة مفصلة لمبادرتك تتضمن الأهداف والأنشطة</p>
            </div>
            <div className="flex items-start space-x-4 space-x-reverse bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <p className="text-lg text-gray-700">تواصل معنا عبر البريد الإلكتروني أو الهاتف</p>
            </div>
            <div className="flex items-start space-x-4 space-x-reverse bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <p className="text-lg text-gray-700">سنقوم بمراجعة مبادرتك وتقديم الدعم المناسب</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InitiativesIncubatorPage;

