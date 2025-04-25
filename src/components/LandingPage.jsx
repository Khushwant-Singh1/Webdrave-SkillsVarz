import React from 'react';
import { ArrowRight } from 'lucide-react';
import CircularText from './CircularText';
import Video from './video';

const Landingpage = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden text-white flex items-center justify-center">
      {/* Background (abstract flowing design) */}
      <div className="absolute inset-0 z-0 opacity-60">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="videos/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-2">
          Creative Web Design Agency!!
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-8 max-w-5xl">
          CREATIVE MINDS. POWERFUL CODE. WELCOME TO WEBDRAVE.
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-black px-6 py-3 flex items-center gap-2 rounded-full hover:bg-gray-100 transition">
            <ArrowRight size={18} /> Contact
          </button>
          <button className="bg-white text-black px-6 py-3 flex items-center gap-2 rounded-full hover:bg-gray-100 transition">
            <ArrowRight size={18} /> Explore us
          </button>
        </div>
      </div>
      <Video/>

      {/* Scroll text circle */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center">
        <CircularText
          text="SCROLL*DOWN*SCROLL*DOWN*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class "
        />
      </div>
    </section>
  );
};

export default Landingpage;
