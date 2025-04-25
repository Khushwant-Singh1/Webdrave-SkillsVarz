import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Vision Inc.",
    quote: "WebDrave brought our dream to life. Visually stunning work!",
  },
  {
    name: "Sara Blaze",
    role: "Creative Director, Ember Studio",
    quote: "Their design game is unmatched. Beautiful and functional.",
  },
  {
    name: "Liam Gray",
    role: "Founder, NextSpace",
    quote: "Truly futuristic! Loved every scroll and click.",
  },
  {
    name: "Maya Stern",
    role: "Marketing Lead, BloomCo",
    quote: "Exceeded expectations. Their animations? Chef’s kiss!",
  },
  {
    name: "Raj Khanna",
    role: "CTO, DevVerse",
    quote: "Responsive, creative, and professional. Highly recommend!",
  },
];

const InfiniteTestimonials = () => {
  return (
    <div className="overflow-hidden bg-black text-white py-16">
      <h2 className="text-center text-4xl font-bold mb-12">Testimonials</h2>
      <div className="relative w-full">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-xs bg-white/10 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:scale-105 transition-transform duration-300"
            >
              <p className="italic mb-4 text-lg text-gray-300">"{item.quote}"</p>
              <div className="text-sm text-gray-400">
                <strong className="text-white">{item.name}</strong> <br />
                {item.role}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteTestimonials;
