import Footer from '@/components/Footer';
import ValuesSection from '@/components/ValuesSection';
import VolunteerClubsSection from '@/components/VolunteerClubsSection';
import MediaSection from '@/components/MediaSection';
import CTASection from '@/components/CTASection';
import Image from 'next/image';

export const metadata = {
  title: 'من نحن - نماء',
  description:
    'جمعية تنموية شبابية غير ربحية، تأسست في الأردن في عام 2012، لتشارك بفعالية في الجهود الوطنية تجاه تمكين الشباب الأردني',
};

const goals = [
  'توجيه طاقات الشباب لخدمة الوطن.',
  'توفير بيئة حاضنة لاستثمار طاقات الشباب.',
  'نقل أحدث الممارسات العالمية للعمل الشبابي.',
  'غرس ثقافة التمكين لدى المؤسسات.',
  'تحقيق التنمية المستدامة.',
];

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50'>
      <div className='relative pt-32 pb-20 px-4'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-8 lg:[direction:ltr]'>
          <div className='order-1 flex justify-center lg:justify-start'>
            <div className='relative w-full max-w-[560px]'>
              <div className='relative overflow-hidden rounded-[28px] shadow-2xl bg-white/40'>
                <div className='absolute inset-0 z-10 bg-gradient-to-tr from-[#0A2337]/15 to-transparent' />

                <Image
                  src='/images/about-us.png'
                  alt='Hero'
                  width={1100}
                  height={800}
                  className='w-full h-auto translate-y-6 md:translate-y-10'
                  priority
                />
              </div>

              <div className='absolute -z-10 -left-8 top-6 w-28 h-28 rounded-full bg-[#94C83D]/12 blur-3xl' />
              <div className='absolute -z-10 -right-10 top-8 w-28 h-28 rounded-full bg-[#94C83D]/10 blur-3xl' />
            </div>
          </div>

          {/* ================= TEXT SIDE ================= */}
          <div className='order-2 text-right'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4'>
              شبابنا - طاقة لا تنطفئ، وإرادة لا تتوقف
            </h1>
            <p className='text-xl md:text-2xl text-gray-700 mb-6'>
              منذ أكثر من 10 سنوات
            </p>
            <p className='text-lg md:text-xl text-gray-600 max-w-3xl'>
              نحو مجتمع ممكن تقوده الريادة، وتبنى بالعمل التطوعي والشراكات
              الفاعلة.
            </p>
          </div>
        </div>
      </div>

      {/* ================= Main Content ================= */}
      <div className='max-w-7xl mx-auto px-4 pb-20'>
        {/* Introduction Section */}
        <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
            منذ 2012... نصنع قصة تمكين شبابية
          </h2>

          <div className='prose prose-lg max-w-none text-gray-700 leading-relaxed text-lg md:text-xl'>
            <p className='mb-6'>
              جمعية تنموية شبابية غير ربحية، تأسست في الأردن في عام 2012، لتشارك
              بفعالية في الجهود الوطنية تجاه تمكين الشباب الأردني وتعزيز دوره في
              تنمية المجتمع بكافة مكوناته من أطفال ونساء وأسر، وصولاً إلى رؤيتها
              شباب ريادي مجتمع ممكن.
            </p>

            <p className='mb-6'>
              وتنطلق في أعمالها من ست قيم مهنية راسخة تتمثل في المواطنة،
              والاستدامة، والفاعلية، والشراكة، والتميز، والتطوع.
            </p>

            <p className='mb-6'>
              تخطط الجمعية أنشطتها وفق مؤشرات التنمية المستدامة، وتعتمد في
              مشاريعها على الجهود التطوعية والشراكة مع القطاعين العام والخاص
              والقطاع الثالث.
            </p>

            <p>
              وقد حققت الجمعية الكثير من الإنجازات، وحظيت مشاريعها بتغطية متميزة
              في وسائل الإعلام.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className='bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center'>
            رسالتنـا
          </h2>

          <div className='bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10'>
            <p className='text-xl md:text-2xl text-gray-800 leading-relaxed text-center font-medium'>
              المشاركة الفاعلة في الجهود الوطنية تجاه تمكين الشباب الأردني في
              الريادة المجتمعية، والريادة الأكاديمية، وريادة الأعمال.
            </p>
          </div>
        </div>

        {/* Goals Section */}
        <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center'>
            أهـدافنـا
          </h2>

          <div className='space-y-4'>
            {goals.map((goal, i) => (
              <div
                key={i}
                className='flex items-start space-x-4 space-x-reverse'
              >
                <div className='w-2 h-2 bg-green-500 rounded-full mt-3' />
                <p className='text-lg md:text-xl text-gray-700'>{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ValuesSection />
      <VolunteerClubsSection />
      <MediaSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default AboutPage;
