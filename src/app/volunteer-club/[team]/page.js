import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import ImageSlider from '@/components/ImageSlider';
import { teams } from '@/lib/volunteerClubData';

export async function generateStaticParams() {
  return teams.map((team) => ({ team: team.slug }));
}

export async function generateMetadata({ params }) {
  const team = teams.find((t) => t.slug === params.team);
  if (!team) return {};
  return {
    title: `${team.name} - نادي نماء التطوعي`,
    description: team.shortDescription,
  };
}

function getTeamImages(slug) {
  const folderPath = path.join(process.cwd(), 'public', 'images', slug);
  try {
    const files = fs.readdirSync(folderPath);
    return files
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f) && f !== `${slug}.jpg`)
      .map((f) => `/images/${slug}/${f}`);
  } catch {
    return [];
  }
}

const TeamPage = ({ params }) => {
  const team = teams.find((t) => t.slug === params.team);

  if (!team) notFound();

  const activityImages = team.images ?? getTeamImages(team.slug);

  return (
    <div className='min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50'>
      {/* Hero */}
      <div className='relative pt-32 pb-20 px-4'>
        <div className='max-w-7xl mx-auto text-center'>
          <div className='flex justify-center mb-8'>
            <div className='relative w-48 h-48 rounded-3xl shadow-xl overflow-hidden'>
              <Image
                src={team.logo}
                alt={team.name}
                fill
                className='object-cover'
              />
            </div>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            {team.name}
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            {team.shortDescription}
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 pb-20'>

        <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
            عن الفريق
          </h2>
          <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>
            {team.fullDescription}
          </p>
        </div>

        <div className='bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center'>
            أهداف الفريق
          </h2>
          <div className='space-y-4'>
            {team.goals.map((goal, i) => (
              <div key={i} className='flex items-start space-x-4 space-x-reverse'>
                <div className='w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0' />
                <p className='text-lg md:text-xl text-gray-700'>{goal}</p>
              </div>
            ))}
          </div>
        </div>

        <ImageSlider images={activityImages} teamName={team.name} />

        <div className='text-center'>
          <Link href='/volunteer-club'>
            <button className='bg-transparent border-2 border-[#94C83D] text-[#94C83D] hover:bg-[#94C83D] hover:text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium'>
              العودة لنادي نماء التطوعي
            </button>
          </Link>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default TeamPage;
