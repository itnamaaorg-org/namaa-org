import Footer from '@/components/Footer';
import { awardImages } from '@/lib/images';

export const metadata = {
  title: 'الجوائز والأوسمة - نماء',
  description: 'جوائز وأوسمة جمعية نماء للتنمية المجتمعية',
};

const awards = [
  {
    year: '2016',
    title: 'وسام اليوم العربي للتطوع',
    body: 'الاتحاد العربي للعمل التطوعي',
    description: 'حصدت الجمعية وسام اليوم العربي للتطوع لعام 2016 على مستوى الوطن العربي، تقديراً لجهودها في نشر ثقافة العمل التطوعي وترسيخ القيم الإنسانية وتعزيز المبادرات المجتمعية الهادفة.',
    image: awardImages.arabVolunteerDay2016,
  },
  {
    year: '2019',
    title: 'جائزة بادر التطوعية',
    body: 'المركز الأول على مستوى المؤسسات المجتمعية',
    description: 'حصدت الجمعية المركز الأول على مستوى المؤسسات المجتمعية في مجال التمكين، ضمن مسابقة بادر التطوعية، تقديراً لجهودها في تمكين الشباب وتعزيز المسؤولية المجتمعية وترسيخ ثقافة التطوع في الأردن.',
    image: awardImages.badr2019,
  },
  {
    year: '2023',
    title: 'قلادة الأمير محمد بن فهد العالمية',
    body: 'المركز الأول على مستوى الوطن العربي',
    description: 'حصدت الجمعية المركز الأول على مستوى الوطن العربي في النسخة الرابعة من مسابقة قلادة الأمير محمد بن فهد العالمية، ضمن مجال التمكين الاقتصادي لفئة المنظمات والجمعيات غير الربحية.',
    image: awardImages.princeMohammedBinFahd,
  },
  {
    year: '2024',
    title: 'وسام المبادرات العربية الملهمة',
    body: 'جوائز الملهمين العرب – دبي',
    description: 'حصدت الجمعية من خلال مبادرة تمكين وسام المبادرات العربية الملهمة لعام 2024، تقديراً لما حققته المبادرة من أثر ملموس في مجال التمكين المجتمعي والتنمية المستدامة.',
    image: awardImages.wisam2024,
  },
  {
    year: '2024',
    title: 'جائزة أفضل مشروع ملهم',
    body: 'مؤتمر عمران السنوي – إسطنبول',
    description: 'حصدت الجمعية جائزة أفضل مشروع ملهم في مجال التنمية وخدمة المجتمع عن مشروع رفقاء نماء لرعاية الأيتام، تقديراً لأثر المشروع في تقديم الرعاية الشاملة للأيتام وتعزيز قيم التكافل والتنمية المستدامة.',
    image: awardImages.inspiring2024,
  },
];

const AwardsPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50'>

      {/* Hero */}
      <div className='relative pt-32 pb-20 px-4'>
        <div className='max-w-7xl mx-auto text-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
            الجوائز والأوسمة
          </h1>
          <p className='text-xl md:text-2xl text-[#94C83D] font-semibold'>
            تقدير وطني وعربي على مسيرة نماء
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 pb-20'>

        {/* Intro */}
        <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12'>
          <div className='space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed'>
            <p>
              حصدت جمعية نماء للتنمية المجتمعية منذ انطلاقتها سلسلة من الجوائز والأوسمة المحلية والعربية، التي جاءت تتويجاً لمسيرتها في خدمة المجتمع وتنفيذ البرامج التنموية المستدامة، إلى جانب دورها البارز في تمكين الشباب، وتعزيز ثقافة العمل التطوعي، ودعم الفئات الأكثر احتياجاً.
            </p>
            <p>
              وتعكس هذه الجوائز مستوى التميز المؤسسي الذي وصلت إليه الجمعية، وثقة الجهات المحلية والإقليمية بقدرتها على إحداث أثر حقيقي ومستدام في المجتمع.
            </p>
            <p>
              وقد مثّلت هذه الإنجازات محطات مضيئة في مسيرة الجمعية، وأسهمت في ترسيخ حضورها كنموذج ريادي في العمل المجتمعي والإنساني، كما تؤكد نجاح رؤيتها المتمثلة في شباب ريادي ومجتمع ممكن.
            </p>
          </div>
        </div>

        {/* Awards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {awards.map((award, i) => (
            <div
              key={i}
              className={`rounded-3xl shadow-xl overflow-hidden flex flex-col bg-gradient-to-br from-green-50 to-teal-50 ${
                i === awards.length - 1 && awards.length % 2 !== 0
                  ? 'md:col-span-2 md:max-w-2xl md:mx-auto md:w-full'
                  : ''
              }`}
            >
              {/* صورة الجائزة */}
              <div className='relative h-72 w-full bg-gray-100'>
                <img
                  src={award.image}
                  alt={award.title}
                  className='w-full h-full object-cover object-top'
                />
                <span className='absolute top-3 left-3 bg-[#94C83D] text-white text-sm font-bold px-4 py-1 rounded-full'>
                  {award.year}
                </span>
              </div>
              {/* النص */}
              <div className='p-8 flex flex-col gap-2'>
                <h3 className='text-xl font-bold text-gray-900'>{award.title}</h3>
                <p className='text-sm font-medium text-[#94C83D]'>{award.body}</p>
                <p className='text-gray-700 leading-relaxed mt-1'>{award.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default AwardsPage;
