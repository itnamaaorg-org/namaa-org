import { notFound } from 'next/navigation';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ImageSlider from '@/components/ImageSlider';
import { initiatives } from '@/lib/initiativesData';

export function generateStaticParams() {
  return initiatives.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }) {
  const initiative = initiatives.find((i) => i.slug === params.slug);
  if (!initiative) return {};
  return {
    title: `${initiative.name} - نماء`,
    description: initiative.shortDescription,
  };
}

const InitiativeDetailPage = ({ params }) => {
  const initiative = initiatives.find((i) => i.slug === params.slug);
  if (!initiative) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/initiatives-incubator"
            className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 transition-colors mb-8 font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            العودة إلى حاضنة المبادرات
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {initiative.name}
          </h1>
          <p className="text-xl text-gray-600">{initiative.shortDescription}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-20 space-y-10">
        {/* About */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">عن المبادرة</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{initiative.description}</p>
        </div>

        {/* Image Slider */}
        {initiative.images && initiative.images.length > 0 && (
          <ImageSlider
            images={initiative.images}
            teamName={initiative.name}
            title="من صور المبادرة"
          />
        )}

        {/* Goals */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">أهداف المبادرة</h2>
          <ul className="space-y-4">
            {initiative.goals.map((goal, i) => (
              <li key={i} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-5">
                <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-lg text-gray-700 pt-0.5">{goal}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InitiativeDetailPage;
