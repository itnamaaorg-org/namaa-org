import React from "react";

const LeftArrowIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-800"
  >
    <path
      d="M19 12H5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 19L5 12L12 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ImpactSection = () => {
  return (
    <div
      dir="rtl"
      className="bg-[#FCFEFD] min-h-screen w-full flex items-start justify-center pt-28 p-8 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='p' width='100' height='100' patternUnits='userSpaceOnUse' patternTransform='rotate(45)'%3E%3Cpath id='a' data-color='outline' fill='none' stroke='%23E5F3E9' stroke-width='1.5' d='M0 0 L50 50 M50 0 L0 50'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23p)' width='100%25' height='100%25'/%3E%3C/svg%3E")`,
          opacity: 0.6,
        }}
      ></div>

      <div className="container mx-auto px-4 z-10 max-w-6xl">
        <div className="flex flex-col gap-20">
          {/* Top Section */}
          <div
            className="flex flex-col lg:flex-row justify-between items-center gap-6 relative
             bg-[url('/images/line8.png')] bg-no-repeat
             bg-[position:right_top_-20px] sm:bg-right-top
             bg-[length:140%] sm:bg-[length:120%] md:bg-[length:90%] lg:bg-[length:70%]"
          >
            <div className="text-right">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                طاقتك تصنع - الأثر مع
              </h1>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mt-2">
                كل خطوة.
              </h1>
            </div>

            <div className="flex items-center gap-4 whitespace-nowrap">
              <button className="bg-[#94C83D] text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg shadow-lime-500/30 hover:bg-lime-600 transition-colors">
                تطوع معنا
              </button>
              <div className="text-right">
                <p className="text-gray-700 font-medium text-sm">
                  في دقائق - انضم الى
                </p>
                <p className="text-gray-700 font-medium text-sm">2000+ متطوع</p>
              </div>
              <LeftArrowIcon />
            </div>
          </div>

          {/* Bottom Section - Cards */}
          <div className="flex justify-center items-center gap-[6px]">
            {/* Card 1: Volunteer Campaigns */}
            <div className="relative flex justify-center">
              <div className="w-full md:w-64 h-72 rounded-3xl bg-gradient-to-br from-[#A4E0B2] to-[#6DD3C8] p-6 text-right relative overflow-hidden shadow-2xl">
                <span className="absolute -bottom-10 -left-5 text-[14rem] font-extrabold text-white opacity-25 select-none pointer-events-none">
                  295
                </span>
                <div className="relative z-10">
                  <p className="text-6xl font-extrabold text-gray-800">+295</p>
                  <p className="text-2xl text-gray-700 mt-2">حملات تطوعية</p>
                </div>
                <div className="absolute bottom-0 right-0 w-full h-3/4">
                  <img
                    src="/images/image12.png"
                    alt="Volunteer campaign"
                    className="absolute bottom-0 -left-16 w-full h-full object-contain"
                    style={{ filter: "grayscale(100%)" }}
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Locations */}
            <div className="relative flex justify-center">
              <div className="relative w-full md:w-56 h-80">
                <img
                  src="/images/Map.png"
                  alt="مواقع عملنا"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Card 3: Group Photo */}
            <div className="relative flex justify-center">
              <div className="w-full h-64 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/image13.png"
                  alt="A group of five smiling young girls outdoors, looking towards the right."
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card 4: 300k Beneficiaries */}
            <div className="relative flex justify-center ">
              <div className="w-full md:w-52 h-72 bg-[#94C83D] rounded-[10rem] flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                <div
                  className="absolute inset-0 z-0 opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='208' height='288' viewBox='0 0 208 288' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='f1' x='-50%25' y='-50%25' width='200%25' height='200%25'%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3C/filter%3E%3C/defs%3E%3Cpath d='M-20 144 C 50 100, 150 180, 228 144' stroke='%23000' stroke-width='1.5' fill='none'/%3E%3Cpath d='M-20 164 C 50 120, 150 200, 228 164' stroke='%23000' stroke-width='1.5' fill='none'/%3E%3Cpath d='M-20 184 C 50 140, 150 220, 228 184' stroke='%23000' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="relative z-10 text-gray-800">
                  <span className="text-6xl font-extrabold block">300</span>
                  <span className="text-5xl font-extrabold block leading-none">
                    الف
                  </span>
                  <span className="text-lg font-medium mt-4 block">مستفيد</span>
                </div>
              </div>
            </div>
          </div>
          {/* End Cards */}
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
