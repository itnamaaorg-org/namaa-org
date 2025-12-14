'use client';

const MediaSection = () => {
  const mediaItems = [
    {
      source: 'الرأي',
      title: 'بريزات: العمل التطوعي بين الشباب يعزز التكاتف الاجتماعي',
      snippet: 'مندوباً عن سمو الأمير الحسين بن عبد الله الثاني ولي العهد رعى وزير الشباب الدكتور...',
      logo: '/cover.jpg',
    },
    {
      source: 'الدستور',
      title: 'جمعية نماء في الزرقاء الأولى عربيا في مجال التمكين الاقتصادي',
      snippet: 'فازت جمعية نماء للتنمية المجتمعية الأردنية ومقرها في محافظة الزرقاء بالمرك...',
      logo: '/cover.jpg',
    },
    {
      source: 'وكالة الأنباء الأردنية',
      title: 'جمعية نماء الأردنية تفوز بالمركز الأول عربيا بمسابقة قلادة الأمير محمد بن فهد',
      snippet: 'عمان 2 شباط (بترا) - فازت جمعية نماء الأردنية للتنمية المجتمعية بالمركز الأول...',
      logo: '/cover.jpg',
    },
  ];

  return (
    <div className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            أبرز القصص عن ما يقول الإعلام عن نماء
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-700">{item.source}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.snippet}
                </p>
                <a
                  href="/media"
                  className="text-[#94C83D] hover:text-[#7FB030] font-medium text-sm inline-flex items-center"
                >
                  شاهد الكل
                  <span className="mr-2">‹</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;

