// UnderConstruction.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCog } from "react-icons/fa"; // Gear icon
import logo from "../assets/web_design/SHPE_logo.png"; // Your logo

function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#FD652F] to-[#72A9BE] text-white px-6 relative overflow-hidden">

      {/* Rotating Gear */}
      <motion.div
        className="relative mb-12 flex items-center justify-center drop-shadow-2xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      >
        <FaCog className="h-40 w-40 text-white/90" /> {/* Bigger gear */}

        {/* Pulsing Logo inside gear */}
        <motion.img
          src={logo}
          alt="SHPE Logo"
          className="absolute h-14 w-14 object-contain"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-4 text-center drop-shadow-lg"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Under Construction
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl text-center max-w-xl mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We’re building something awesome! Check back soon for updates.
      </motion.p>

      {/* Animated dots */}
      <motion.div
        className="flex gap-2 mb-8"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, staggerChildren: 0.2 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="h-3 w-3 bg-white rounded-full"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default UnderConstruction;
