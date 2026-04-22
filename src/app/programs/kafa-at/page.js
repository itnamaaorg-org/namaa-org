import Footer from '@/components/Footer';
import KafaatVideo from './KafaatVideo';
import ImageSlider from '@/components/ImageSlider';

const sliderImages = [
  'https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776851500/IMG_0087_vzeaqb.jpg',
  'https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776851501/IMG_0407_tenavv.jpg',
  'https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776851501/IMG_1247_ugh8vl.jpg',
  'https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776851501/IMG_0533_hs27s2.jpg',
  'https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776851502/IMG_1514_q7fcdh.jpg',
  'https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776851503/IMG_1538_yjitnt.jpg',
  'https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776851503/IMG_3231_vejmah.jpg',
];

export const metadata = {
  title: 'برنامج كفاءات - نماء',
  description: 'برنامج ريادي لتمكين الشباب من تأسيس مشاريعهم الخاصة',
};

const goals = [
  'تمكين الشباب الأردني من دخول مجال ريادة الأعمال بثقة وكفاءة.',
  'تطوير مهارات الرياديين في بناء وإدارة المشاريع الناشئة.',
  'دعم تحويل الأفكار الإبداعية إلى مشاريع قابلة للتطبيق والاستثمار.',
  'تعزيز ثقافة الابتكار والعمل الحر بين فئة الشباب.',
  'ربط الرياديين بالمستثمرين وبناء شراكات استراتيجية داعمة.',
  'المساهمة في الحد من البطالة من خلال توفير فرص عمل مستدامة.',
  'دعم الاقتصاد المحلي عبر مشاريع شبابية منتجة وقابلة للنمو.',
];

export default function KafaatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            برنامج كفاءات لريادة الأعمال
          </h1>
        </div>
      </div>

      <KafaatVideo />

      <div className="max-w-7xl mx-auto px-4 pb-20 space-y-6">

        {/* مقدمة — أبيض */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">مقدمة البرنامج</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            انطلقت فكرة برنامج كفاءات استجابةً للتحديات التي يواجهها الشباب الأردني، خاصة في ظل ارتفاع نسب البطالة وتزايد توجه الشباب نحو ريادة الأعمال كخيار مهني مستقبلي.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            وجاء البرنامج ليكون منصة داعمة تستثمر طاقات الشباب، وتحول أفكارهم إلى مشاريع حقيقية قادرة على إحداث أثر اقتصادي واجتماعي مستدام.
          </p>
        </div>

        {/* وصف — أخضر */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">وصف البرنامج</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            برنامج كفاءات هو مبادرة ريادية تنفذها جمعية نماء للتنمية المجتمعية بالشراكة مع جهات داعمة، ويستهدف الشباب الطموحين الراغبين في تأسيس مشاريعهم الخاصة.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            يعمل البرنامج على استقطاب الرياديين، وتأهيلهم من خلال برنامج تدريبي متكامل يغطي مختلف مراحل تأسيس المشاريع، بدءاً من تطوير الفكرة وبناء نموذج العمل، مروراً بدراسة السوق وإعداد الخطط التشغيلية، وصولاً إلى مهارات العرض والإقناع أمام المستثمرين.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            كما يوفر البرنامج بيئة حاضنة تتيح للمشاركين فرصة التواصل المباشر مع رجال الأعمال والممولين، بما يسهم في تحويل أفكارهم إلى مشاريع قائمة على أرض الواقع، ضمن إشراف مهني يضمن استدامتها ونموها.
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
