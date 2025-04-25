import React from "react";

const StickyStackedCards = () => {
  const cards = [
    {
      tag: "Full Stack",
      title: "THE ARVAN",
      description:
        "A Modern And Elegant Website For Arvan, Showcasing High-End Fashion With A Minimal, Responsive Design That Highlights Products And Brand Identity.",
      image: "img/arvan.png",
    },
    {
      tag: "Three.JS",
      title: "LAND ROVER RE-DESIGN",
      description:
        "A Premium Redesign Concept For Range Rover – Stunning Visuals, Seamless Motion UX/UI, Smooth Transitions, And A Bold High-End Luxury Experience.",
      image: "img/range rover.png",
    },
    {
      tag: "GSAP",
      title: "ROYAL ENFIELD REDESIGN",
      description:
        "A Rugged Yet Refined Redesign For Royal Enfield – Built To Thrill. A Bold Visual Experience As Powerful As The Ride Itself.",
      image: "img/royal enfield.png",
    },
  ];

  return (
    <div className="relative bg-black min-h-[300vh] py-[10vh] px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-wide">
          OUR BEST WORKS
        </h1>
        <p className="text-white/70 text-lg md:text-xl mt-4">
          A showcase of our finest projects, blending creativity and technology.
        </p>
      </div>

      <div className="max-w-[95vw] mx-auto relative"> {/* Updated max-width to 95% of the screen */}
        {cards.map((card, i) => (
          <div
            key={i}
            className={`sticky top-[8vw] z-[${i + 1}] backdrop-blur-md bg-[#5B68E4]/5 bg-radial-gradient/50% border border-[#5B68E4] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-10 shadow-2xl`} 
            style={{
              minHeight: "480px",
              marginTop: i === 0 ? 0 : "8vh",
            }}
          >
            {/* Left Side - Text */}
            <div className="flex-1 flex flex-col justify-center space-y-5 text-white">
              <span className="inline-block border border-white/30 px-3 py-1 text-sm font-semibold rounded-md w-fit">
                {card.tag}
              </span>
              <h2 className="text-4xl font-extrabold">{card.title}</h2>
              <p className="text-white/70 leading-relaxed">{card.description}</p>
              <button className="mt-4 w-fit px-6 py-3 bg-[#5e5eff] hover:bg-[#7878ff] text-white text-sm font-semibold rounded-md transition-all duration-200">
                Visit The Site
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="rounded w-[30vw] flex-1 flex items-center justify-center overflow-hidden"> {/* Updated width */}
              <img
                src={card.image}
                alt={card.title}
                className="rounded-xl w-full h-auto border border-[#5B68E4] max-w-2xl object-cover transition-transform duration-300 transform hover:scale-105" 
                // Added transition and hover scale
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyStackedCards;