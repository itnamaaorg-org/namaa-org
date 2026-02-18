"use client";
const Partners = () => {
  const partners_arr = [
    { name: "Near East Foundation", logo: "/image.png" },
    { name: "Tamayuz", logo: "/image1.png" },
    { name: "Al-Rikaa", logo: "/image2.png" },
    { name: "Barooj", logo: "/image3.png" },
    { name: "Nahno", logo: "/image4.png" },
    { name: "Crown Prince Foundation", logo: "/image5.png" },
    { name: "Naua", logo: "/image6.png" },
    { name: "Social Impact Center", logo: "/image7.png" },
    { name: "Organization", logo: "/image8.png" },
    { name: "Partner B", logo: "/image9.png" },
  ];

  return (
    <div
      style={{ backgroundColor: "#F9F9F9" }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-16"
    >
      <div className="w-full max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            أبرز شركائنا
          </h2>
          <p className="text-xl md:text-2xl text-gray-700">
            أكثر من <span className="font-bold text-gray-900">34 شريك</span>{" "}
            يساهمون في تحقيق رؤيتنا
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-12">
          {partners_arr.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 rounded-lg duration-300"
            >
              <div className="text-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-30 h-30 mx-auto mb-2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
