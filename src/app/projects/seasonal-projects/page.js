import Footer from '@/components/Footer';
import SeasonalProjectsAccordion from '@/components/SeasonalProjectsAccordion';
import ProjectTabs from '@/components/ProjectTabs';

export const metadata = {
  title: 'المشاريع الموسمية - نماء',
  description: 'المشاريع الموسمية لجمعية نماء',
};

const SeasonalProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <ProjectTabs />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            المشاريع الموسمية
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">

          <div className="mb-10">
            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center text-4xl mb-6">
              🎁
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">عن المشاريع الموسمية</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              جمعية نماء للتنمية المجتمعية مؤسسة رائدة في العمل التطوعي والخدمي، تهدف إلى دعم الأسر والأفراد الأكثر حاجة، وتمكين المجتمع من خلال مشاريع تنموية وإنسانية تركز على تعزيز الكرامة الإنسانية، تنمية المهارات، وبناء مجتمع متكافل يسوده التضامن والتعاون.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              وتعمل الجمعية على تصميم حملات موسمية استراتيجية تلبي احتياجات المجتمع في كل فصل من السنة، لتكون نافذة أمل وفرصة للتغيير الإيجابي، وتعزز روح التطوع والعطاء بين جميع أفراد المجتمع.
            </p>
          </div>

          <SeasonalProjectsAccordion />

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SeasonalProjectsPage;
