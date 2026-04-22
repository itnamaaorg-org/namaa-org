'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

const VolunteerVideo = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex justify-center px-4 mb-8">
      <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg relative bg-white">
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Lz8DioOxlOk?autoplay=1"
            title="برنامج الرخصة الدولية للعمل التطوعي"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full group"
          >
            <img
              src="https://res.cloudinary.com/dg8rxv7jr/image/upload/v1776854168/coverrukhsa_fpzotg.jpg"
              alt="برنامج الرخصة الدولية للعمل التطوعي"
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <Play className="w-7 h-7 text-white ml-1" fill="white" />
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default VolunteerVideo;
