import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Form Submitted!");
  };

  return (
    <div className="bg-black
     text-white py-16 px-6">
      {/* Heading */}
      <motion.h2
        className="text-center text-5xl font-bold mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h2>

      {/* Form & WebDrave Section */}
      <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {/* Form */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 bg-transparent border-2 border-gray-600 rounded-lg focus:outline-none focus:border-white text-white"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 bg-transparent border-2 border-white rounded-lg focus:outline-none focus:border-white text-white"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-400">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 mt-2 bg-transparent border-2 border-gray-600 rounded-lg focus:outline-none focus:border-white text-white"
                placeholder="Enter your message"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg hover:bg-gradient-to-l transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* WebDrave Shining Name & Logo Placeholder */}
        <motion.div
          className="bg-black backdrop-blur-lg p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center space-y-6">
            {/* Shining "WebDrave" Name */}

            {/* Logo Placeholder */}
            <div className="w-32 h-32 bg-black rounded-full flex justify-center items-center text-white font-bold text-xl">
              <img src="img/logo.svg" alt="" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
