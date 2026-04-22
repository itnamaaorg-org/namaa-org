'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = ({ images, teamName, title = 'من أنشطة الفريق' }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  if (!images || images.length === 0) return null;

  return (
    <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-12'>
      <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>
        {title}
      </h2>

      <div className='relative'>
        <div className='relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-md bg-gray-50'>
          <Image
            src={images[current]}
            alt={`${teamName} - نشاط ${current + 1}`}
            fill
            className='object-contain transition-opacity duration-300'
            priority={current === 0}
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className='absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200'
              aria-label='السابق'
            >
              <ChevronRight className='w-5 h-5 text-gray-700' />
            </button>

            <button
              onClick={next}
              className='absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200'
              aria-label='التالي'
            >
              <ChevronLeft className='w-5 h-5 text-gray-700' />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className='flex justify-center gap-2 mt-4'>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                i === current ? 'bg-green-500 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}

      <p className='text-center text-sm text-gray-400 mt-3'>
        {current + 1} / {images.length}
      </p>
    </div>
  );
};

export default ImageSlider;
