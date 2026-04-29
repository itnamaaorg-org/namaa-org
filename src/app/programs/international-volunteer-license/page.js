import Footer from '@/components/Footer';
import VolunteerVideo from './VolunteerVideo';
import ImageSlider from '@/components/ImageSlider';
import { programSliders } from '@/lib/images';

const sliderImages = programSliders.volunteer;

export const metadata = {
  title: 'برنامج الرخصة الدولية للعمل التطوعي - نماء',
  description: 'برنامج تدريبي معتمد من الاتحاد العربي للعمل التطوعي',
};

const goals = [
  'تأهيل المشاركين وفق معايير دولية معتمدة في العمل التطوعي.',
  'تنمية مهارات القيادة والعمل الجماعي في البيئات التطوعية المختلفة.',
  'تمكين المشاركين من تصميم وتنفيذ مبادرات تطوعية ذات أثر مستدام.',
  'تعزيز ثقافة العمل التطوعي المنظم على المستويين المحلي والدولي.',
  'إعداد كوادر قادرة على تمثيل العمل التطوعي باحترافية في مختلف المحافل.',
  'تطوير قدرات المشاركين في التخطيط وإدارة البرامج والمشاريع التطوعية.',
];

export default function InternationalVolunteerLicensePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            الرخصة الدولية للعمل التطوعي
          </h1>
        </div>
      </div>

      <VolunteerVideo />

      <div className="max-w-7xl mx-auto px-4 pb-20 space-y-6">

        {/* مقدمة — أبيض */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">مقدمة البرنامج</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            انطلاقاً من أهمية العمل التطوعي كأحد الركائز الأساسية في تنمية المجتمعات، وعلى المستوى الدولي، جاء برنامج &quot;الرخصة الدولية للعمل التطوعي&quot; ليُسهم في إعداد كوادر مؤهلة وفق معايير مهنية عالمية، تمكنهم من المشاركة الفاعلة في العمل المجتمعي.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            ويتميّز البرنامج بكونه معتمداً من الاتحاد العربي للعمل التطوعي، مما يعزز من موثوقيته وقيمته المهنية.
          </p>
        </div>

        {/* وصف — أخضر */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">وصف البرنامج</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            برنامج &quot;الرخصة الدولية للعمل التطوعي&quot; هو برنامج تدريبي معتمد يهدف إلى تأهيل المشاركين بالمعارف والمهارات اللازمة لممارسة العمل التطوعي باحترافية، وفق أفضل الممارسات الدولية.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            يركز البرنامج على تطوير قدرات المشاركين في إدارة المبادرات التطوعية، والتخطيط للمشاريع المجتمعية، والعمل ضمن فرق بكفاءة، إضافة إلى تعزيز فهمهم لأخلاقيات العمل التطوعي وأثره في تحقيق التنمية المستدامة، بما يؤهلهم للعمل في بيئات محلية ودولية.
          </p>
        </div>

        {/* أهداف — أبيض */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">أهداف البرنامج</h2>
          <ul className="space-y-4">
            {goals.map((goal, i) => (
              <li key={i} className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">{goal}</p>
              </li>
            ))}
          </ul>
        </div>

        <ImageSlider images={sliderImages} title="من أنشطة البرنامج" />
      </div>
      <Footer />
    </div>
  );
}
