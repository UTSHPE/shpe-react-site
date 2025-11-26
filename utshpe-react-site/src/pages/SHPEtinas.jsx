// Shpetinas.jsx
import React, { useState } from "react";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import mainImg from "../assets/shpetinas/shpetinasmain.JPG";
import merchImg from "../assets/shpetinas/shpetinamerch.png";
import monthImg from "../assets/shpetinas/shpetinaofmonth.jpg";

// Slideshow images
const importAll = (r) => {
  let images = {};
  r.keys().forEach((key) => {
    images[key.replace('./', '')] = r(key);
  });
  return images;
};

const slideshowImages = importAll(
  require.context("../assets/shpetinas", false, /shpetinaslideshow.*\.(png|jpe?g|jpg)$/)
);

const committee = [
  { name: "Evelyn Flores", role: "SHPEtina Director", image: "Eve_shpetina.jpg" },
  { name: "Natalia Morales", role: "Fundraising Coordinator Chair", image: "NataliaMorales.jpg" },
  { name: "Destiny Licon", role: "Finance Coordinator Chair", image: "Destiny.jpg" },
  { name: "Natalia Martinez", role: "Marketing Chair", image: "NataliaMartinez.jpg" },
  { name: "Lizbeth Garcia", role: "Publicity Chair", image: "Lizbeth.jpg" },
  { name: "Lourdes Ybarra", role: "Internal Affairs Liaison Chair", image: "Lou.jpg" }
];

const Highlight = ({ icon, title, desc }) => (
  <li className="flex gap-3 items-start p-2">
    <i className={`${icon} text-pink-600 text-xl mt-1`}></i>
    <div>
      <strong>{title}</strong><br />
      {desc}
    </div>
  </li>
);

function Shpetinas() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgs = Object.values(slideshowImages);

  // Auto-slide
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imgs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imgs.length]);

  return (
    <div className="min-h-screen bg-[#FFF4F7] text-gray-900 flex flex-col">
      {/* HERO - UPDATED */ }
      <section className="relative w-full py-28 px-6 overflow-hidden bg-gradient-to-br from-pink-500 via-pink-400 to-pink-300 text-white flex flex-col items-center justify-center">
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-white/20 rounded-full blur-xl"
          animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200/20 rounded-full blur-xl"
          animate={{ y: [0, 25, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-extrabold tracking-wide text-center font-[cursive] drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] animate-[sparkle_2s_ease-in-out_infinite]"
        >
          SHPEtinas
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-xl md:text-2xl font-light text-pink-50 max-w-2xl text-center"
        >
          Empowering Latinas in STEM through community, leadership, and sisterhood.
        </motion.p>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 80 }}
          className="relative z-10 mt-10 w-full max-w-4xl"
        >
          <motion.img
            src={mainImg}
            alt="SHPEtinas Group"
            className="rounded-3xl shadow-2xl w-full"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Animated Ribbon Background */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1200 300"
        >
          {/* Ribbon path */}
          <motion.path
            d="M0 150 Q300 50 600 150 T1200 150" // smooth wave
            fill="none"
            stroke="#ffffff44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1800"
            strokeDashoffset="1800"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />

          {/* Hearts along the ribbon */}
          <motion.text
            x="150"
            y="150"
            fontSize="32"
            fill="#ffffff77"
            animate={{ y: [150, 140, 150] }}
            transition={{ duration: 2, repeat: Infinity }}
          >❤️</motion.text>
          <motion.text
            x="450"
            y="80"
            fontSize="32"
            fill="#ffffff77"
            animate={{ y: [80, 70, 80] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          >💗</motion.text>
          <motion.text
            x="750"
            y="150"
            fontSize="32"
            fill="#ffffff77"
            animate={{ y: [150, 165, 150] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >💕</motion.text>
          <motion.text
            x="1050"
            y="80"
            fontSize="32"
            fill="#ffffff77"
            animate={{ y: [80, 65, 80] }}
            transition={{ duration: 2.6, repeat: Infinity }}
          >💞</motion.text>
        </motion.svg>
      </section>

      {/* ABOUT */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-10 py-16 px-6 max-w-6xl mx-auto"
      >
        <div className="bg-pink-100 p-10 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-pink-700 mb-4">About SHPEtinas</h2>
          <p className="text-lg leading-relaxed mb-4">
            The SHPEtinas program exists to accelerate and affirm Latina representation at every
            level of STEM leadership by recognizing the unique perspectives of our members.
            Empowering women, fostering meaningful connections, and providing unwavering support.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            {['Fostering Connections', 'Empowering Women', 'Providing Support'].map((c) => (
              <span key={c} className="bg-pink-300 text-pink-900 px-3 py-1 rounded-full text-sm font-medium">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <aside className="bg-white p-10 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold text-pink-600 mb-4">Program Highlights</h3>
          <ul className="space-y-4">
            <Highlight icon="fa-solid fa-user-group" title="Mentorship Network" desc="Connect with mentors and peer support systems." />
            <Highlight icon="fa-solid fa-chalkboard-user" title="Workshops" desc="Grow professional and leadership skills." />
            <Highlight icon="fa-solid fa-award" title="Recognition" desc="Celebrate achievements and academic excellence." />
            <Highlight icon="fa-solid fa-heart" title="Sisterhood" desc="Lasting friendships and community." />
          </ul>
        </aside>
      </motion.section>

      {/* COMMITTEE */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-pink-700 mb-6">SHPEtinas Committee</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {committee.map((m, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
              <img src={require(`../assets/shpetinas/${m.image}`)} alt={m.name} className="w-full h-60 object-cover rounded-xl" />
              <h3 className="mt-4 text-xl font-bold text-pink-700">{m.name}</h3>
              <p className="text-gray-600">{m.role}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* EVENTS SLIDESHOW */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-6">Our Events</h2>
        <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <img
            src={imgs[currentIndex]}
            alt="Event slideshow"
            className="w-full h-[400px] object-cover transition-all duration-500"
          />
        </div>
      </section>

      {/* MERCH + SHPEtina of the Month */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-16 px-6 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
      >
        <article className="bg-pink-50 p-8 rounded-3xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-pink-700 mb-4">Our Merch</h3>
          <img src={merchImg} alt="Merch" className="rounded-xl shadow-md" />
        </article>

        <aside className="bg-white p-8 rounded-3xl shadow-lg text-center">
          <span className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold">SHPEtina of the Month</span>
          <img src={monthImg} alt="SHPEtina of the Month" className="rounded-xl shadow-md w-full mt-4" />
          <h3 className="text-xl font-bold text-pink-700 mt-4">Kimberly Rodriguez</h3>
          <p className="text-gray-700">Mechanical Engineering • Class of 2029</p>
          <ul className="mt-4 text-left mx-auto w-fit text-gray-700">
            <li><strong>Hometown:</strong> Brownsville, TX</li>
            <li><strong>Fun Fact:</strong> Started her own bakery!</li>
          </ul>
        </aside>
      </motion.section>

      <Footer theme="shpetinas"/>
    </div>
  );
}

export default Shpetinas;
