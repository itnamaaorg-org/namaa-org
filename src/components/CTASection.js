import Link from 'next/link';

const CTASection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#0A2337] to-[#1a3d5a] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            كن جزءاً من رحلتنا
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            شارك بوقتك. موهبتك. أو خبرتك.. فكل مساهمة منك تقربنا من مستقبل شبابي أقوى ومجتمع أكثر تمكينا.
          </p>
          <Link href="/volunteer">
            <button className="bg-[#94C83D] hover:bg-[#7FB030] text-white px-10 py-4 rounded-lg font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              تطوع الآن
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;

