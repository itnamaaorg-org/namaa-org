import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'مشاريعنا - نماء',
  description: 'مشاريع جمعية نماء التنموية',
};

const ProjectsPage = () => {
  const projects = [
    {
      title: 'مشروع تمكين',
      description: 'يعمل على تمكين الأسر العفيفة من خلال إقامة مشاريع صغيرة مدرة للدخل، بهدف تحقيق الاكتفاء الذاتي وتحسين الوضع الاجتماعي والاقتصادي.',
      link: '/projects/tamkeen',
      icon: '💪',
    },
    {
      title: 'مشروع رفقاء نماء',
      description: 'يهدف إلى تقديم نموذج مميز في كفالة ورعاية الأيتام، من خلال توفير بيئة اجتماعية آمنة وبرامج تعليمية وتربوية وصحية.',
      link: '/projects/refaqa-namaa',
      icon: '🤝',
    },
    {
      title: 'المشاريع الموسيمية',
      description: 'تشمل حملات مثل "دفء وعطاء" لتوزيع المستلزمات الأساسية في فصل الشتاء، ومشاريع رمضان لتقديم المساعدات خلال شهر رمضان المبارك.',
      link: '/projects/seasonal-projects',
      icon: '🎁',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-8">
            مشاريعنا
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 text-center max-w-3xl mx-auto">
            مشاريع تنموية تهدف إلى تمكين المجتمع وتحقيق أثر إيجابي مستدام
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center text-4xl mb-4">
                  {project.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex items-center justify-center text-green-600 font-medium group-hover:translate-x-2 transition-transform">
                <span>تعرف على المزيد</span>
                <span className="mr-2">‹</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsPage;

