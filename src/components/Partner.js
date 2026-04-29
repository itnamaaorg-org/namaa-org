"use client";

import { partnerLogos } from '@/lib/images';

const partners_arr = partnerLogos.map((logo, i) => ({ name: `Partner ${i + 1}`, logo }));

const Partners = () => {
  const repeated = [...partners_arr, ...partners_arr, ...partners_arr];

  return (
    <div style={{ backgroundColor: "#F9F9F9" }} className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          أبرز شركائنا
        </h2>
        <p className="text-xl md:text-2xl text-gray-700">
          أكثر من <span className="font-bold text-gray-900"> 100 شريك</span>{" "}
          يساهموا في صناعة رؤيتنا وتحقيق أهدافنا
        </p>
      </div>

      <div style={{ overflow: "hidden", width: "100%", direction: "ltr" }}>
        <div className="partners-track">
          {repeated.map((partner, index) => (
            <div key={index} style={{ flexShrink: 0, display: "flex", alignItems: "center", padding: "0 2.5rem" }}>
              <img
                src={partner.logo}
                alt={partner.name}
                style={{ height: "64px", width: "auto", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .partners-track {
          display: flex;
          width: max-content;
          animation: partners-scroll 60s linear infinite;
        }
        @keyframes partners-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};

export default Partners;
