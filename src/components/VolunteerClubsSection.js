"use client";

import { useEffect, useState } from "react";

const VolunteerClubsSection = () => {
  const clubs = [
    {
      title: "الفريق الطبي",
      description: "يقوم الفريق على تقديم الخدمات الطبية والصحية داخل الأردن..",
      image: "/nama15.jpeg",
    },
    {
      title: "فريق المبادرات التطوعية",
      description:
        "يقوم الفريق على تنفيذ الحملات التطوعية الموسمية وإدارتها (رمضان، الشتاء، ال...)",
      image: "/nama17.jpeg",
    },
    {
      title: "فريق الأيتام (رفقاء نماء)",
      description:
        "يقوم الفريق على دراسة طلبات انضمام الأطفال الأيتام للكفالة ليتم بعدها تجهيز...",
      image: "/nama14.jpeg",
    },
    {
      title: "فريق تمكين",
      description:
        "يقوم الفريق على دراسة طلبات الاسر المتقدمة للحصول على مشاريع إنتاجية. ..",
      image: "/nama16.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2); // موبايل : فريقين

  // تحديد كم كارد يظهر حسب حجم الشاشة
  useEffect(() => {
    const updateVisibleCount = () => {
      const w = window.innerWidth;
      if (w >= 1024) setVisibleCount(4);
      else if (w >= 768) setVisibleCount(2);
      else setVisibleCount(2); // mobile
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const visibleClubs = Array.from(
    { length: Math.min(visibleCount, clubs.length) },
    (_, i) => {
      return clubs[(currentIndex + i) % clubs.length];
    },
  );

  const nextClub = () => {
    setCurrentIndex((prev) => (prev + 1) % clubs.length);
  };

  const prevClub = () => {
    setCurrentIndex((prev) => (prev - 1 + clubs.length) % clubs.length);
  };

  const showArrows = clubs.length > visibleCount;

  return (
    <div
      className="w-full bg-gradient-to-br from-green-50 to-teal-50 py-16 lg:py-24"
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            تعرف على أنديتنا الخمسة التي تجمع الشغف، العطاء، والإبداع
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div
            className={`grid gap-6 ${
              visibleCount === 4 ? "grid-cols-4" : "grid-cols-2"
            }`}
          >
            {visibleClubs.map((club, index) => (
              <div
                key={`${club.title}-${index}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-green-100 to-teal-100 relative">
                  <img
                    src={club.image}
                    alt={club.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {club.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {club.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {showArrows && (
            <>
              <button
                onClick={prevClub}
                className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous"
              >
                <span className="text-gray-600 text-2xl leading-none">‹</span>
              </button>

              <button
                onClick={nextClub}
                className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next"
              >
                <span className="text-gray-600 text-2xl leading-none">›</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VolunteerClubsSection;
