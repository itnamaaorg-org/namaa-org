import Footer from '@/components/Footer';
import RefaqaVideo from './RefaqaVideo';
import ProjectTabs from '@/components/ProjectTabs';

export const metadata = {
  title: 'مشروع رفقاء نماء - نماء',
  description: 'مشروع كفالة ورعاية الأيتام',
};

const RefaqaNamaaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50">
      <div className="relative pt-32 pb-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <ProjectTabs />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            مشروع رفقاء نماء
          </h1>
        </div>
      </div>

      <RefaqaVideo />

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center text-4xl mb-6">
                🤝
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">عن المشروع</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
يعمل مشروع رفقاء نماء لرعاية الأيتام على دعم الأيتام وأسرهم لتوفير حياة كريمة، من خلال تقديم برامج متكاملة تشمل الرعاية الصحية، النفسية، التعليمية والتربوية، إضافة إلى كفالة مالية تساعد في تلبية الاحتياجات الأساسية للأطفال وتأمين مستلزمات حياتهم اليومية.

              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">أهداف المشروع</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">  يهدف المشروع إلى تحسين جودة حياة الأيتام، وتعزيز استقرار أسرهم.   </p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">توفير الرعاية الشاملة اللازمة للأطفال الأيتام بما يضمن بيئة آمنة وداعمة.    </p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">     المساهمة في بناء وتطوير القدرات الشخصية للأطفال.</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تنمية وتعزيز مهاراتهم الاجتماعية لتمكينهم من الاندماج في المجتمع.</p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تمكين الأيتام من التغلب على التحديات المعيشية والنفسية ومواجهة صعوبات الحياة. </p>
                </li>
                <li className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">تعزيز القيم الدينية والأخلاقية لدى الأيتام، وترسيخ مبادئ الرحمة والتكافل، بما يسهم في بناء شخصية متوازنة قائمة على الأخلاق والإيمان.</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4"> آليات العمل والوسائل المستخدمة   </h3>
              <p className="text-lg text-gray-700 mb-4">
                  تبدأ مراحل تنفيذ المشروع بدراسة حالة كل يتيم وأسرته لتحديد احتياجاتهم الأساسية، ومن ثم تصميم برنامج رعاية متكامل يشمل الجوانب الصحية والنفسية والتعليمية والتربوية. بعد ذلك يتم متابعة تنفيذ البرامج بشكل مستمر لضمان تحقيق التأثير المرجو، مع تقديم الدعم المالي لتغطية الاحتياجات الأساسية، ومتابعة النمو والتطور للأطفال بشكل دوري.  
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RefaqaNamaaPage;

