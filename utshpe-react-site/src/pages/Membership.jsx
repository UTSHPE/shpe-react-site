// Membership.jsx
import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";

// Import images
import mem1 from "../assets/membership/membership1.jpg";
import mem2 from "../assets/membership/membership2.jpg";
import mem3 from "../assets/membership/membership3.jpg";
import mem4 from "../assets/membership/membership4.jpg";
import mem5 from "../assets/membership/membership5.jpg";
import mem6 from "../assets/membership/membership6.jpg";
import mem7 from "../assets/membership/membership7.jpg";
import memberOfMonthImg from "../assets/membership/Memberofmonth.png";
import officerOfMonthImg from "../assets/membership/officerofthemonth.jpg";

const slideshowImages = [mem1, mem2, mem3, mem4, mem5, mem6, mem7];

function Membership() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const joinSteps = [
    {
      title: "Fill out the membership form",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSefYEFS5tTWalPaEtvPx3zCT-vfP-uMf6iC-OQVeqNwporoNg/viewform?usp=header",
    },
    { title: "Pay membership dues" },
    { title: "Join our Slack and follow Instagram to stay updated" },
    { title: "Get involved and attend events!" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FCF0D6] text-gray-900">
      {/* HERO */}
      <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-r from-[#FD652F] to-[#72A9BE] text-white flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div
          className="md:w-1/2 max-w-xl text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Join the UTSHPE Familia!
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Find your familia, grow your skills, and get plugged into opportunities across UT and beyond!
          </p>
          <ul className="space-y-2 list-disc ml-5 text-lg">
            <li>Sponsored General Meetings</li>
            <li>Professional development events</li>
            <li>Mentorship & leadership opportunities</li>
            <li>Recruiting & company info sessions</li>
            <li>Study nights, socials, and outreach</li>
          </ul>
        </motion.div>

        {/* Slideshow */}
        <motion.div
          className="md:w-1/2 max-w-xl rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={slideshowImages[currentSlide]}
            alt="Membership slideshow"
            className="w-full h-96 object-cover rounded-3xl"
          />
        </motion.div>
      </section>

      {/* JOIN STEPS */}
      <motion.section
        className="py-16 px-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#001F5B]">
          How to Join
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {joinSteps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="font-bold text-lg mb-2">{i + 1}. {step.title}</h3>
              {step.link && (
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FD652F] underline hover:text-[#72A9BE]"
                >
                  Click here
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SPOTLIGHTS */}
      <motion.section
        className="py-16 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-[#001F5B]">
          Member Spotlights
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Member */}
          <motion.div className="bg-white rounded-3xl shadow-lg overflow-hidden" whileHover={{ scale: 1.05 }}>
            <div className="bg-[#FD652F] text-white px-4 py-1 font-semibold">Member of the Month</div>
            <img src={memberOfMonthImg} alt="Nolan Perez" className="w-full h-64 object-cover" />
            <div className="p-4 text-left">
              <h3 className="font-bold text-xl text-[#001F5B]">Nolan Perez</h3>
              <p className="text-gray-600">Petroleum Engineering • Class of 2029</p>
              <p className="mt-2"><strong>Hometown:</strong> Houston TX</p>
              <p><strong>Fun Fact:</strong> I'm ambidextrous</p>
            </div>
          </motion.div>

          {/* Officer */}
          <motion.div className="bg-white rounded-3xl shadow-lg overflow-hidden" whileHover={{ scale: 1.05 }}>
            <div className="bg-[#72A9BE] text-white px-4 py-1 font-semibold">Officer of the Month</div>
            <img src={officerOfMonthImg} alt="Alejandro Ontiveros" className="w-full h-64 object-cover" />
            <div className="p-4 text-left">
              <h3 className="font-bold text-xl text-[#001F5B]">Alejandro Ontiveros</h3>
              <p className="text-gray-600">Community Outreach Director • Class of 2026</p>
              <p className="mt-2"><strong>Hometown:</strong> Eagle Pass TX</p>
              <p><strong>Fun Fact:</strong> I got a bean stuck in my ear in Kindergarten</p>
            </div>
          </motion.div>

          {/* Instagram Embed */}
          <motion.div className="bg-white rounded-3xl shadow-lg p-4 flex flex-col items-center justify-center" whileHover={{ scale: 1.03 }}>
            <h3 className="font-bold text-xl text-[#001F5B] mb-4">Latest on Instagram</h3>
            <blockquote class="instagram-media"
                              data-instgrm-permalink="https://www.instagram.com/p/DQvCJhziZSq/?hl=en&img_index=1"
                              data-instgrm-version="14"
                                style={{ background: "#fff", border: 0, margin: 0, padding: 0, width: "100%" }}>
            </blockquote>
          </motion.div>
        </div>
        <script async src="https://www.instagram.com/embed.js"></script>
      </motion.section>

      <Footer />
    </div>
  );
}

export default Membership;
