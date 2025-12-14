const ValuesSection = () => {
  const values = [
    { name: 'المواطنة', icon: '🏛️' },
    { name: 'الاستدامة', icon: '🌱' },
    { name: 'الفاعلية', icon: '💪' },
    { name: 'الشراكة', icon: '🤲' },
    { name: 'التميز', icon: '⭐' },
    { name: 'التطوع', icon: '🤝' },
  ];

  return (
    <div className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            قيمنا
          </h2>
          <p className="text-lg text-gray-600">
            ننطلق في أعمالنا من ست قيم مهنية راسخة
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#94C83D] rounded-full flex items-center justify-center text-3xl mb-4 shadow-lg">
                  <span>{value.icon}</span>
                </div>
                <p className="text-lg font-medium text-gray-900">{value.name}</p>
                {index < values.length - 1 && (
                  <div className="hidden md:block absolute w-12 h-0.5 bg-gray-300" style={{ position: 'relative', left: '50%', marginTop: '-2.5rem' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;

