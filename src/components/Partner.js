"use client";
const Partners = () => {
  const partners_arr = [
    { name: "Near East Foundation", logo: "https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776858143/image_xlj5lz.png" },
    { name: "Arab Volunteer Union", logo: "https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776858161/image9_lszz7f.png" },
    { name: "Al-Rikaa", logo: "https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776858144/image2_o5ml4j.png" },
    { name: "Barooj", logo: "https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776858124/image3_y6puzc.png" },
    { name: "Nahno", logo: "https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776858124/image4_vdxi4f.png" },
    { name: "Crown Prince Foundation", logo: "https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776858124/image5_dw2fqm.png" },
    { name: "Naua", logo: "https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776858125/image6_w4p2bo.png" },
    { name: "Social Impact Center", logo: "https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776858160/image7_krvna7.png" },
    { name: "Organization", logo: "https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776858143/image1_bjevi2.png" },
    { name: "Partner B", logo: "https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776858160/image8_bh1cpr.png" },
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
            أكثر من <span className="font-bold text-gray-900"> 100 شريك</span>{" "}
            يساهموا في صناعة رؤيتنا وتحقيق أهدافنا
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
