import Footer from '@/components/Footer';
import SpecialistVideo from './SpecialistVideo';
import ImageSlider from '@/components/ImageSlider';
import { programSliders } from '@/lib/images';

const sliderImages = programSliders.specialist;

export const metadata = {
  title: 'برنامج أخصائي الريادي المجتمعي - نماء',
  description: 'برنامج تدريبي متخصص لتأهيل أخصائيين في الريادة المجتمعية',
};

const goals = [
  'تأهيل كوادر متخصصة في مجال الريادة المجتمعية.',
  'تنمية مهارات تحليل المشكلات وإيجاد حلول مبتكرة.',
  'تمكين المشاركين من تصميم وإدارة مبادرات مجتمعية فعالة.',
  'تعزيز ثقافة الابتكار والعمل المجتمعي المستدام.',
  'تطوير قدرات المشاركين في تقديم الاستشارات في المجال.',
  'دعم بناء مبادرات ذات أثر اجتماعي ملموس ومستدام.',
];

export default function CommunityEntrepreneurSpecialistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            برنامج أخصائي الريادي المجتمعي
          </h1>
        </div>
      </div>

      <SpecialistVideo />

      <div className="max-w-7xl mx-auto px-4 pb-20 space-y-6">

        {/* مقدمة — أبيض */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">مقدمة البرنامج</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            انطلاقاً من أهمية الريادة المجتمعية في إيجاد حلول مستدامة للتحديات الاجتماعية، جاء برنامج &quot;أخصائي الريادة المجتمعية&quot; ليُسهم في إعداد كوادر شبابية قادرة على إحداث تغيير إيجابي في مجتمعاتهم، من خلال تبني أفكار مبتكرة وتحويلها إلى مبادرات عملية ذات أثر.
          </p>
        </div>

        {/* وصف — أخضر */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">وصف البرنامج</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            برنامج &quot;أخصائي الريادة المجتمعية&quot; هو برنامج تدريبي متخصص يهدف إلى تأهيل المشاركين بالمعارف والمهارات اللازمة للعمل في مجال الريادة المجتمعية.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            يركز البرنامج على تطوير قدرات المشاركين في تحليل المشكلات المجتمعية، وتصميم مبادرات إبداعية، وإدارة المشاريع ذات الأثر الاجتماعي، إضافة إلى تمكينهم من تقديم الاستشارات وبناء حلول مبتكرة تسهم في تنمية المجتمع.
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
