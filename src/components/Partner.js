"use client";

import { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { partnerLogos } from '@/lib/images';

const partners_arr = partnerLogos.map((logo, i) => ({ name: `Partner ${i + 1}`, logo }));
const repeated = [...partners_arr, ...partners_arr, ...partners_arr];
const DURATION_S = 40;
const PAUSE_MS = 3000;

const Partners = () => {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const offsetRef = useRef(0);
  const rafRef = useRef(null);
  const pauseTimerRef = useRef(null);
  const isPausedRef = useRef(false);
  const slotWidthRef = useRef(0);
  const speedRef = useRef(0);
  const [slotWidth, setSlotWidth] = useState(0);

  const measure = useCallback(() => {
    if (containerRef.current) {
      const count = window.innerWidth < 768 ? 2 : 3;
      const w = containerRef.current.offsetWidth / count;
      slotWidthRef.current = w;
      speedRef.current = (partners_arr.length * w) / (DURATION_S * 60);
      setSlotWidth(w);
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);

    const animate = () => {
      if (!isPausedRef.current && slotWidthRef.current > 0) {
        const sectionWidth = partners_arr.length * slotWidthRef.current;
        offsetRef.current += speedRef.current;
        if (offsetRef.current >= sectionWidth) {
          offsetRef.current -= sectionWidth;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(pauseTimerRef.current);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  const pauseAndResume = () => {
    isPausedRef.current = true;
    clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, PAUSE_MS);
  };

  const moveNext = () => {
    pauseAndResume();
    const sectionWidth = partners_arr.length * slotWidthRef.current;
    offsetRef.current = (offsetRef.current + slotWidthRef.current) % sectionWidth;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
    }
  };

  const movePrev = () => {
    pauseAndResume();
    const sectionWidth = partners_arr.length * slotWidthRef.current;
    offsetRef.current = (offsetRef.current - slotWidthRef.current + sectionWidth) % sectionWidth;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
    }
  };

  const trackWidth = slotWidth * repeated.length;

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

      <div className="relative flex items-center gap-2">
        <button
          onClick={movePrev}
          className="flex-shrink-0 w-10 h-10 bg-white border border-gray-200 rounded-full shadow flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        <div ref={containerRef} style={{ overflow: "hidden", width: "100%", direction: "ltr" }}>
          <div
            ref={trackRef}
            style={{
              display: "flex",
              width: trackWidth > 0 ? `${trackWidth}px` : "max-content",
              willChange: "transform",
            }}
          >
            {repeated.map((partner, index) => (
              <div
                key={index}
                style={{
                  flexShrink: 0,
                  width: slotWidth > 0 ? `${slotWidth}px` : "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 1.5rem",
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{ height: "128px", width: "100%", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={moveNext}
          className="flex-shrink-0 w-10 h-10 bg-white border border-gray-200 rounded-full shadow flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Partners;
