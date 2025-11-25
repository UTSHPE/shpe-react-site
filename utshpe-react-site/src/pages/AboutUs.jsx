import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import Footer from "../components/footer";
import ByLaws from "../assets/aboutus/2025-2026 UT SHPE Bylaws.pdf"
import Constitution from "../assets/aboutus/2025-2026 UT SHPE Constitution.pdf"

function AboutUs() {
  // Dynamically import all aboutus images
  const importAll = (r) => {
    let images = {};
    r.keys().forEach((key) => {
      images[key.replace('./', '')] = r(key);
    });
    return images;
  };

  const aboutusImages = importAll(
    require.context("../assets/aboutus", false, /\.(png|jpe?g|svg)$/)
  );

  const [selectedPillar, setSelectedPillar] = useState({
    title: "Academic Development",
    body: "The Academic Development pillar focuses on study success and connecting members to chapter & campus resources.",
    img: aboutusImages["Academic.jpg"],
    alt: "Academic Photo",
  });

  const pillars = [
    {
      title: "Academic Development",
      body: "The Academic Development pillar focuses on study success and connecting members to chapter & campus resources.",
      icon: aboutusImages["AcademicDevIcon.png"],
      img: aboutusImages["Academic.jpg"],
      alt: "Academic Photo",
    },
    {
      title: "Chapter Development",
      body: "Chapter Development focuses on growing chapter operations, community, and student engagement.",
      icon: aboutusImages["ChapterDevIcon.png"],
      img: aboutusImages["Chapter.jpg"],
      alt: "Chapter Photo",
    },
    {
      title: "Community Outreach",
      body: "Community Outreach emphasizes giving back to Austin and the Hispanic community through STEM programs.",
      icon: aboutusImages["CommunityOutreachIcon.png"],
      img: aboutusImages["ChapterOutreach.jpg"],
      alt: "Community Photo",
    },
    {
      title: "Leadership Development",
      body: "Leadership Development strengthens skills to prepare members for leadership roles on campus and beyond.",
      icon: aboutusImages["LeadershipIcon.png"],
      img: aboutusImages["Leadership.jpg"],
      alt: "Leadership Photo",
    },
    {
      title: "Professional Development",
      body: "Professional Development prepares members for careers through workshops, mentorship, and networking.",
      icon: aboutusImages["ProfessionalDevIcon.png"],
      img: aboutusImages["ProfessionalDevelopment.png"],
      alt: "Professional Photo",
    },
    {
      title: "Technical Development",
      body: "Technical Development provides opportunities to build technical skills in STEM fields through hands-on projects.",
      icon: aboutusImages["TechnicalDevIcon.png"],
      img: aboutusImages["technicaldevelopment.png"],
      alt: "Technical Photo",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#FCF0D6] text-gray-900 relative">
      <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-24">

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 items-center">
          {/* Mission */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={aboutusImages["Aboutpic1.jpg"]}
              alt="Mission"
              className="rounded-xl shadow-xl w-full h-64 md:h-80 object-cover cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(0,0,0,0.25)" }}
              transition={{ duration: 0.3 }}
            />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#001F5B]">Our Mission</h2>
              <p className="text-lg md:text-xl">
                Our mission is to change lives by empowering the Hispanic community to reach its fullest potential 
                and make a lasting impact on the world through STEM awareness, access, support, and development.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img
              src={aboutusImages["Aboutpic2.jpg"]}
              alt="Vision"
              className="rounded-xl shadow-xl w-full h-64 md:h-80 object-cover cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(0,0,0,0.25)" }}
              transition={{ duration: 0.3 }}
            />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#001F5B]">Our Vision</h2>
              <p className="text-lg md:text-xl">
                SHPE's vision is a world where Hispanics are highly valued and influential 
                as the leading innovators, scientists, mathematicians, and engineers.
              </p>
            </div>
          </motion.div>
        </section>

        {/* UT SHPE in Numbers */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[#001F5B]">UT SHPE in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-3xl font-extrabold text-orange-600 mb-2">
                <CountUp end={300} duration={2} />+
              </h3>
              <p>Active Members</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-3xl font-extrabold text-orange-600 mb-2">
                <CountUp end={210} duration={2} />+
              </h3>
              <p>Average General Meeting Attendance</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-3xl font-extrabold text-orange-600 mb-2">
                <CountUp end={35} duration={2} />+
              </h3>
              <p>Social & Networking Events Each Year</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-3xl font-extrabold text-orange-600 mb-2">
                <CountUp end={30} duration={2} />+
              </h3>
              <p>Corporate Workshops & Tech Events</p>
            </div>
          </div>
        </motion.section>

        {/* Six Pillars */}
        <section>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[#001F5B] text-center">The 6 Pillars</h2>
          <div className="md:flex gap-12 items-start">
            {/* Tabs */}
            <div className="flex flex-col gap-4 md:w-1/3">
              {pillars.map((pillar) => (
                <motion.button
                  key={pillar.title}
                  onClick={() => setSelectedPillar(pillar)}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 p-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-orange-300/50 ${
                    selectedPillar.title === pillar.title ? "bg-orange-100" : "bg-white"
                  }`}
                >
                  <img src={pillar.icon} alt="" className="w-8 h-8" />
                  <span className="font-semibold">{pillar.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Pillar Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPillar.title}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="md:w-2/3 bg-white rounded-xl shadow-xl p-6"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedPillar.title}</h3>
                <p className="text-lg">{selectedPillar.body}</p>
                <motion.img
                  src={selectedPillar.img}
                  alt={selectedPillar.alt}
                  className="mt-4 rounded-xl shadow-md w-full max-h-96 object-cover"
                  whileHover={{ scale: 1.03, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* History Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#001F5B]">Our History</h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-6">
            UT SHPE was founded in 1982 as a subcommittee of the organization Pi Sigma Pi.
            Today our 300+ member chapter is known for building a thriving Hispanic community of
            mathematicians, scientists, and engineers. Our chapter is known for leadership, technical
            development, chapter growth, academic development, professional development, and 
            our community outreach throughout Austin. Today we continue that mission, supporting students, 
            connecting with industry, and giving back through service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={ByLaws} className="btn-outline px-6 py-2 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition">
              Bylaws
            </a>
            <a href={Constitution} className="btn-outline px-6 py-2 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition">
              Constitution
            </a>
            <a href="https://give.utexas.edu/?menu=OGPENCS&solicit=ESL&response=DJ0ESL=ENDS&comments=Society%20of%20Hispanic%20Professional%20Engineers%20%28SHPE%29%20Account:%2030-2116-8093" className="btn-outline px-6 py-2 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition">
              Donate
            </a>
          </div>
        </motion.section>

      </main>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-10 right-10 bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </motion.button>

      <Footer />
    </div>
  );
}

export default AboutUs;
