import Link from 'next/link';
import { Play } from 'lucide-react';

function Ourjourney() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-green-600 text-sm md:text-base font-medium mb-4">
              تمكين + أثر
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-8 px-4">
              منصة أردنية ريادية، تجمع الشباب لصناعة أثر<br className="hidden md:block" />
              حقيقي ومستدام.
            </h1>
            <Link href="/projects">
              <button className="bg-[#94C83D] hover:bg-[#7FB030] text-white px-8 py-3 rounded-lg font-medium text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                تصفح مشاريعنا
              </button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-16 lg:mt-24">
            <div className="order-2 lg:order-2 text-center lg:text-right px-4">
              <p className="text-green-600 font-medium text-sm md:text-base mb-3">
                من نحن
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                رحلتنا نحو شباب ريادي
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                نحن جمعية تنموية شبابية غير ربحية، تأسست في الأردن في عام 2012، لتشارك بفعالية في الجهود الوطنية تجاه تمكين الشباب الأردني وتعزيز دوره في تنمية المجتمع بكافة مكوناته من أطفال ونساء وأسر، وصولا الى رؤيتها في شباب ريادي مجتمع ممكن.
              </p>
              <a href="/about" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-base md:text-lg group">
                <span className="ml-2">تعرف علينا أكثر</span>
                <span className="transform group-hover:-translate-x-1 transition-transform">&gt;</span>
              </a>
            </div>

            <div className="order-1 lg:order-1 px-4">
              <div className="relative rounded-3xl  p-0 lg:p-8 md:p-12  max-w-lg mx-auto lg:max-w-none">
                <iframe className="w-full lg:w-[560px] aspect-video" src="https://www.youtube.com/embed/bFlS7ecsWFo?si=_TnF-66XgyRmwSml" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourjourney;
