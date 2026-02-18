import React from "react";
import Link from "next/link";
import Image from "next/image";

const CTASection = () => {
  return (
    <div dir="rtl" className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[48px] shadow-2xl">
            <div className="absolute inset-0">
              <Image
                src="/images/Join-us.png"
                alt="Join us background"
                fill
                priority
                className="object-cover scale-[1.08]"
                style={{ objectPosition: "50% 55%" }}
              />

              <div className="absolute inset-0 bg-[#0A2337]/20" />
            </div>

            <div className="relative z-10 px-6 md:px-16 py-14 md:py-20 text-center text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
                كن جزءاً من رحلتنا
              </h2>

              <p className="text-base md:text-xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto">
                شارك بوقتك. موهبتك. أو خبرتك.. فكل مساهمة منك تقربنا من مستقبل
                شبابي أقوى ومجتمع أكثر تمكينا.
              </p>

              <Link href="/volunteer">
                <button className="bg-[#94C83D] hover:bg-[#7FB030] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  تطوع الآن
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
