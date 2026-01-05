import Footer from '@/components/Footer';
import ValuesSection from '@/components/ValuesSection';
import VolunteerClubsSection from '@/components/VolunteerClubsSection';
import MediaSection from '@/components/MediaSection';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'من نحن - نماء',
  description: 'جمعية تنموية شبابية غير ربحية، تأسست في الأردن في عام 2012، لتشارك بفعالية في الجهود الوطنية تجاه تمكين الشباب الأردني',
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-4">
            شبابنا - طاقة لا تنطفئ، وإرادة لا تتوقف
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 text-center mb-8">
            منذ أكثر من 10 سنوات
          </p>
          <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto">
            نحو مجتمع ممكن تقوده الريادة، وتبنى بالعمل التطوعي والشراكات الفاعلة.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Introduction Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            منذ 2012... نصنع قصة تمكين شبابية
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-lg md:text-xl">
            <p className="mb-6">

جمعية تنموية شبابية غير ربحية، تأسست في الأردن في عام 2012، لتشارك بفعالية في الجهود الوطنية تجاه تمكين الشباب الأردني وتعزيز دوره في تنمية المجتمع بكافة مكوناته من أطفال ونساء وأسر ، وصولا الى رؤيتها شباب ريادي مجتمع ممكن .

            </p>
            <p className="mb-6">
 وتنطلق في أعمالها من ست قيم مهنية راسخة تتمثل في المواطنة، والاستدامة، والفاعلية، والشراكة، والتميز، والتطوع.

            </p>
            <p className="mb-6">
تخطط الجمعية أنشطتها وفقا لمؤشرات التنمية المستدامة، وتعتمد في مشاريعها على الجهود التطوعية والشراكة مع القطاعين العام والخاص والقطاع الثالث. وتسعى لتقديم نموذج جديد في مجال الريادة المجتمعية.

            </p>
            <p>
وقد حققت الجمعية الكثير من الإنجازات، وحظيت مشاريعها بتغطية متميزة في وسائل الإعلام، وشهد بتميز أعمالها العديد من الخبراء والمتخصصين.

            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            رسالتنـا
          </h2>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed text-center font-medium">
              المشاركة الفاعلة في الجهود الوطنية تجاه تمكين الشباب الأردني في الريادة المجتمعية، والريادة الأكاديمية، وريادة الأعمال.
            </p>
          </div>
        </div>

        {/* Goals Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            أهـدافنـا
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                توجيه طاقات الشباب لخدمة الوطن.
              </p>
            </div>
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                توفير بيئة حاضنة لاستثمار طاقات الشباب وإبداعاتهم، وتحقيق تطلعاتهم.
              </p>
            </div>
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                نقل أحدث الممارسات العالمية في مجال العمل التنموي الشبابي إلى الأردن.
              </p>
            </div>
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                غرس وتعزيز ثقافة تمكين الشباب لدى رجال الأعمال والمؤسسات المانحة.
              </p>
            </div>
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                الإسهام في تحقيق التنمية المستدامة في الأردن بما يتصل بتنمية الشباب والمجتمع.
              </p>
            </div>
          </div>
        </div>


      </div>

      <ValuesSection />
      <VolunteerClubsSection />
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default AboutPage;

