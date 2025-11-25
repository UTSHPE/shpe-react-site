// Leadership.jsx
import React, { useState } from "react";
import Footer from "../components/footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Longhorn from "../assets/web_design/longhorn_logo.png"
import team from "../assets/leadership/Leadershipteam.png"

const importAll = (r) => {
  let images = {};
  r.keys().forEach((key) => {
    images[key.replace('./', '')] = r(key);
  });
  return images;
};

const leadershipImages = importAll(
  require.context("../assets/leadership", false, /\.(png|jpe?g|svg)$/)
);

// Example placeholder profiles
const executiveBoard = [
  { name: "Genesis Aguirre", pronouns: "She/Her", role: "President", major: "Civil Engineering", image: "Genesis.png" },
  { name: "Alberto Rayon Cardenas", pronouns: "He/Him", role: "Vice President External", major: "Mechanical Engineering", image: "Alberto.png" },
  { name: "Julieta Rodriguez", pronouns: "She/Her", role: "Vice President Internal", major: "Computer Science", image: "Julieta.png" },
  { name: "Elysha Orozco", pronouns: "She/Her", role: "Secretary", major: "Petroleum Engineering", image: "Elysha.png" },
  { name: "Xitlali Cardenas", pronouns: "She/Her", role: "Treasurer", major: "Computer Science", image: "Xitlali.png" }
];

const boardOfDirectors = [
  { name: "David Jasso", pronouns: "He/Him", role: "Academic Director", major: "Chemical Engineering", image: "David.png" },
  { name: "Chris Garcia", pronouns: "He/Him", role: "Chapter Director", major: "Civil Engineering", image: "Chris.png" },
  { name: "Alejandro Ontiveros", pronouns: "He/Him", role: "Community Outreach Director", major: "Electrical & Computer Engineering", image: "Alejandro.png" },
  { name: "Yessenia Martin", pronouns: "She/Her", role: "Leadership Director", major: "Computer Science", image: "Yessenia.png" },
  { name: "Alexandra Galindo", pronouns: "She/Her", role: "Professional Director", major: "Electrical & Computer Engineering", image: "Alexandra.png" },
  { name: "Evelyn Flores", pronouns: "She/Her", role: "SHPEtina Director", major: "Aerospace Engineering", image: "Evelyn.png" },
  { name: "Kevin Contreras", pronouns: "He/Him", role: "Technical Director", major: "Mechanical Engineering", image: "Kevin.png" }
];

// ProfileCard with deck animation and spotlight effect
const ProfileCard = ({ member, index, hoveredCard, setHoveredCard, cardId, isInView }) => {
  const isHovered = hoveredCard === cardId;
  const isDimmed = hoveredCard !== null && hoveredCard !== cardId;

  return (
    <motion.div
      initial={{ 
        x: -100,
        y: -200,
        rotate: -15 + (index * 2),
        scale: 0.9,
        opacity: 0,
        zIndex: index
      }}
      animate={isInView ? { 
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: isDimmed ? 0.4 : 1,
        zIndex: isHovered ? 50 : index
      } : {
        x: -100,
        y: -200,
        rotate: -15 + (index * 2),
        scale: 0.9,
        opacity: 0,
        zIndex: index
      }}
      transition={{ 
        delay: index * 0.15,
        type: "spring",
        stiffness: 120,
        damping: 15,
        opacity: { duration: 0.3 }
      }}
      whileHover={{ 
        scale: 1.08,
        y: -10,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setHoveredCard(cardId)}
      onHoverEnd={() => setHoveredCard(null)}
      className="relative rounded-2xl overflow-hidden w-64 h-[420px] cursor-pointer shadow-lg glass-card flex flex-col"
      style={{ 
        backdropFilter: "blur(10px)", 
        background: "rgba(255, 255, 255, 0.15)",
        boxShadow: isHovered ? "0 20px 40px rgba(253, 101, 47, 0.4)" : "0 10px 30px rgba(0, 0, 0, 0.1)"
      }}
    >
      {/* Top gradient band */}
      <div className="h-16 w-full bg-gradient-to-r from-[#FD652F] to-[#72A9BE] rounded-t-2xl relative flex-shrink-0">
        {/* Longhorn logo */}
        <img
          src={Longhorn}
          alt="Longhorn Logo"
          className="absolute top-2 right-3 w-12 h-12 object-contain"
        />
      </div>

      {/* Profile Image */}
      <div className="mt-6 flex justify-center flex-shrink-0">
        <motion.img
          src={leadershipImages[member.image]}
          alt={member.name}
          className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-md"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Info */}
      <div className="p-6 text-center flex-grow flex flex-col justify-center">
        <h3 className="text-xl font-bold mb-1 text-[#001F5B]">{member.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{member.pronouns}</p>
        <p className="text-md font-semibold mb-1 text-[#FD652F]">{member.role}</p>
        <p className="text-sm text-gray-700">{member.major}</p>
      </div>
    </motion.div>
  );
};

// Section wrapper with scroll-triggered animation
const AnimatedSection = ({ children, className, bgColor = "transparent" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </motion.section>
  );
};

// Card grid with scroll detection
const CardGrid = ({ members, cardPrefix, hoveredCard, setHoveredCard }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.2 });

  return (
    <div ref={ref} className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
      {members.map((member, idx) => (
        <ProfileCard 
          key={idx} 
          member={member} 
          index={idx}
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
          cardId={`${cardPrefix}-${idx}`}
          isInView={isInView}
        />
      ))}
    </div>
  );
};

function Leadership() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-[#FCF0D6] text-gray-900 flex flex-col">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full py-32 md:py-40 px-6 bg-gradient-to-r from-[#FD652F] to-[#72A9BE] text-white flex flex-col md:flex-row items-center justify-center gap-10"
      >
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Meet UT-SHPE's 2025-2026 LeaderSHPE Team!
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl"
          >
            These are the amazing, determined individuals who make up our leaderSHPE team! Each
            of them carries vital responsibilities that sustain our chapter's vision and mission.
          </motion.p>
        </div>

        {/* Image */}
        <motion.img
          src={team}
          alt="UT-SHPE Team 2025-2026"
          className="md:w-1/2 w-full rounded-xl shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </motion.section>

      {/* Executive Board */}
      <AnimatedSection className="w-full py-16 px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#001F5B] mb-10 text-center"
        >
          Executive Board
        </motion.h2>
        <CardGrid 
          members={executiveBoard} 
          cardPrefix="exec"
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
        />
      </AnimatedSection>

      {/* Board of Directors */}
      <AnimatedSection className="w-full py-16 px-6" bgColor="white">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#001F5B] mb-10 text-center"
        >
          Board of Directors
        </motion.h2>
        <CardGrid 
          members={boardOfDirectors} 
          cardPrefix="director"
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
        />
      </AnimatedSection>

      <Footer />
    </div>
  );
}

export default Leadership;