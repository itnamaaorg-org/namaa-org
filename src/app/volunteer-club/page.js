import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { clubInfo, vision, charter, ranks, teams } from '@/lib/volunteerClubData';

export const metadata = {
  title: 'نادي نماء التطوعي - نماء',
  description: 'نادي نماء التطوعي - منصة تجمع المتطوعين لتنظيم وتنفيذ أنشطة تطوعية متنوعة',
};

const VolunteerClubPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50'>
      {/* Hero */}
      <div className='relative pt-32 pb-20 px-4'>
        <div className='max-w-7xl mx-auto text-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
            {clubInfo.title}
          </h1>
          <p className='text-xl md:text-2xl text-[#94C83D] font-semibold'>
            &ldquo;{clubInfo.slogan}&rdquo;
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 pb-20'>

        {/* تعريف النادي */}
        <div id='about' className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>
            عن النادي
          </h2>
          <div className='space-y-4'>
            {clubInfo.about.map((paragraph, i) => (
              <p key={i} className='text-lg md:text-xl text-gray-700 leading-relaxed'>
                {paragraph}
              </p>
            ))}
          </div>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-green-50/60 rounded-2xl p-6'>
              <h3 className='text-lg font-bold text-gray-900 mb-3'>الفئة المستهدفة</h3>
              <p className='text-gray-700 leading-relaxed'>{clubInfo.targetAudience}</p>
            </div>
            <div className='bg-green-50/60 rounded-2xl p-6'>
              <h3 className='text-lg font-bold text-gray-900 mb-3'>التدريب والتأهيل</h3>
              <p className='text-gray-700 leading-relaxed'>{clubInfo.training}</p>
            </div>
          </div>
        </div>

        {/* الرؤية */}
        <div id='vision' className='bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center'>
            الرؤية والأهداف
          </h2>
          <div className='bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10'>
            <p className='text-xl md:text-2xl text-gray-800 leading-relaxed text-center font-medium'>
              {vision}
            </p>
          </div>
        </div>

        {/* ميثاق الشرف */}
        <div id='charter' className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            ميثاق الشرف
          </h2>
          <p className='text-lg text-gray-600 mb-8'>{charter.intro}</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {charter.images.map((item) => (
              <div key={item.src} className='rounded-2xl overflow-hidden shadow-lg'>
                <p className='text-center font-bold text-gray-900 py-3 bg-green-50'>
                  {item.title}
                </p>
                <div className='relative w-full aspect-[4/3]'>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className='object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* مراتب التطوع */}
        <div id='ranks' className='bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center'>
            مراتب التطوع
          </h2>
          <div className='flex flex-wrap justify-center gap-4'>
            {ranks.map((rank) => (
              <div
                key={rank.level}
                className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-3 min-w-[140px] shadow-md'
              >
                <div className='w-10 h-10 rounded-full bg-[#94C83D] flex items-center justify-center text-white font-bold text-lg'>
                  {rank.level}
                </div>
                <p className='text-gray-900 font-semibold text-center'>{rank.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* الفرق */}
        <div id='teams' className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center'>
            الفرق التطوعية
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {teams.map((team) => (
              <Link
                key={team.slug}
                href={`/volunteer-club/${team.slug}`}
                className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group'
              >
                <div className='h-72 relative'>
                  <Image
                    src={team.logo}
                    alt={team.name}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>{team.name}</h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>{team.shortDescription}</p>
                  <p className='mt-4 text-[#94C83D] font-medium text-sm'>اعرف أكثر ←</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      <CTASection />
      <Footer />
    </div>
  );
};

export default VolunteerClubPage;
