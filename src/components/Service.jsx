import React from 'react';
import { FaCode, FaShieldAlt, FaChartLine, FaShoppingCart } from 'react-icons/fa';
import { FiLayout } from 'react-icons/fi';

const services = [
  {
    icon: <FaCode className="text-3xl" />,
    title: 'WEB DEVELOPMENT',
    description: 'From landing pages to complex sites we build fast, responsive, and scalable websites.',
  },
  {
    icon: <FiLayout className="text-3xl" />,
    title: 'UI/UX DESIGN',
    description: 'We design sleek, user-friendly interfaces that make every interaction smooth and enjoyable.',
  },
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: 'HOSTING & SECURITY SOLUTIONS',
    description: 'We provide reliable hosting with top-tier security to keep your site safe, fast, and always online.',
  },
  {
    icon: <FaChartLine className="text-3xl" />,
    title: 'SEO SOLUTIONS',
    description: 'We boost your visibility with smart SEO strategies that drive traffic and improve rankings.',
  },
  {
    icon: <FaShoppingCart className="text-3xl" />,
    title: 'E-COM SOLUTIONS',
    description: 'We build powerful, easy-to-manage online stores that turn visitors into loyal customers.',
  },
];

const ServicesSection = () => {
  return (
    <section data-scroll data-scroll-section
      data-scroll-speed="-0.1" className="bg-black text-white py-10 w-full">

      {/* First Row */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-6 px-4 md:px-12 lg:px-20 mb-10 w-full">
        {/* Right side - text block */}
        <div className="flex-shrink-0 w-full lg:w-[500px] h-[317px] pr-5 lg:ml-5 flex items-start justify-end text-right">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-indigo-400">↘ What We Offer</p>
            <h2 className="text-4xl font-light mt-2 leading-snug">
              <span className="text-indigo-400 font-semibold">WebDrave</span> delivers <br />
              <span className="text-indigo-400 font-semibold">creative</span>, custom-built <br />
              digital <span className="text-indigo-400 font-semibold">services</span> designed<br />
              to grow your <span className="text-indigo-400 font-semibold">business</span><br />
              and <span className="text-indigo-400 font-semibold">elevate</span> your brand.
            </h2>
          </div>
        </div>

        {/* Left side - First 2 boxes */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-6 lg:gap-12">
          {services.slice(0, 2).map((svc, i) => (
            <div
              key={i}
              className="relative w-full sm:w-[360px] h-[420px] p-6 border border-dashed border-indigo-400 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#5B68E4] transform scale-0 group-hover:scale-100 origin-bottom-right transition-transform duration-500 z-0" />
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="absolute top-6 left-6 text-indigo-400">{svc.icon}</div>
                <div className="mt-auto">
                  <h3 className="text-white font-semibold text-lg mb-2">{svc.title}</h3>
                  <p className="text-sm text-indigo-200 leading-relaxed">{svc.description}</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#5B68E4] transform rotate-45 origin-bottom-right"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-6 lg:gap-12 px-4 md:px-12 lg:px-20 mb-10 w-full">
        {services.slice(2).map((svc, i) => (
          <div
            key={i}
            className="relative w-full sm:w-[360px] h-[420px] p-6 border border-dashed border-indigo-400 rounded-lg overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[#5B68E4] transform scale-0 group-hover:scale-100 origin-bottom-right transition-transform duration-500 z-0" />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="absolute top-6 left-6 text-indigo-400">{svc.icon}</div>
              <div className="mt-auto">
                <h3 className="text-white font-semibold text-lg mb-2">{svc.title}</h3>
                <p className="text-sm text-indigo-200 leading-relaxed">{svc.description}</p>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#5B68E4] transform rotate-45 origin-bottom-right"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
