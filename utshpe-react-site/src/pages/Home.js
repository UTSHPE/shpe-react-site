import React, { useEffect, useState } from "react";
import logo from "../assets/web_design/navbar_logo.png";
import blankBevoVideo from "../assets/web_design/BlankBevo.mp4"; // Your intro video

// Placeholder imports
import carousel1 from "../assets/flyers/Event1.jpg";
import carousel2 from "../assets/flyers/Event2.png";
import carousel3 from "../assets/flyers/Eventweek.png";
import officeHoursImg from "../assets/leadership/LeadershipOH.png";

function Home() {
  const [showVideo, setShowVideo] = useState(true);
  const [showLogoIntro, setShowLogoIntro] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const [eventsIndex, setEventsIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);


  const eventCarousel = [
    {
      image: carousel1,
      title: "SHPE's 7th General Meeting",
      date: "Nov 19, 2025",
    },
    {
      image: carousel2,
      title: "SHPESGiving Potluck",
      date: "Nov 20, 2025",
    },
    {
      image: carousel3,
      title: "Event Week",
      date: "Jan 15, 2026",
    },
  ];



  useEffect(() => {
  let videoTimer;
  let logoTimer;
  let eventTimer;

  // Play video for 5s, then logo animation for 2.8s, then show main content
  videoTimer = setTimeout(() => {
    setShowVideo(false);
    setShowLogoIntro(true);

    logoTimer = setTimeout(() => {
      setShowLogoIntro(false);
      setShowMainContent(true);
    }, 2800); // logo animation duration
  }, 5000);

  // Event carousel auto-advance
  eventTimer = setInterval(() => {
    setEventsIndex((prev) => (prev + 1) % eventCarousel.length);
  }, 5000);

  return () => {
    clearTimeout(videoTimer);
    clearTimeout(logoTimer);
    clearInterval(eventTimer);
  };
}, [eventCarousel.length]);



  return (
    <>
      <style>
        {`
          @keyframes smoothIntro {
            0% { opacity: 0; transform: scale(0.75); filter: blur(8px); }
            40% { opacity: 1; transform: scale(1); filter: blur(0); }
            70% { opacity: 1; transform: scale(1); filter: blur(0); }
            100% { opacity: 0; transform: scale(1.18); filter: blur(4px); }
          }
          .intro-animation { animation: smoothIntro 2.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        `}
      </style>

      <div className="min-h-screen w-full bg-[#fffdf0] text-gray-900 relative flex items-center justify-center overflow-hidden">

        {/* FULLSCREEN VIDEO */}
        {showVideo && (
          <video
            src={blankBevoVideo}
            autoPlay
            muted
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
        )}

        {/* LOGO ANIMATION */}
        {showLogoIntro && (
          <img
            src={logo}
            alt="Intro Logo"
            className="w-auto h-auto absolute z-20 inset-0 m-auto intro-animation"
          />
        )}

        {/* MAIN CONTENT */}
        {showMainContent && (
          <main className="w-full flex flex-col gap-24 mt-12">


          {/* Hero Section (Static) */}
          <section className="w-full py-20 flex flex-col items-center text-center px-6">
          <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-3">UT SHPE</h2>
          <h3 className="text-2xl mb-4 text-gray-700">The University of Texas at Austin</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our mission is to empower Hispanic students in STEM through community, mentorship,
          and professional development.
          </p>
          </div>
          </section>


          {/* Upcoming Events Section (with Carousel Images) */}
          <section className="w-full py-20 bg-yellow-50 text-center px-6">
            <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Upcoming Events</h2>


            <div className="relative h-96 flex flex-col items-center justify-center">
            {eventCarousel.map((item, index) => (
            <div
            key={index}
            className={`absolute flex flex-col items-center transition-opacity duration-700 ${
            index === eventsIndex ? "opacity-100" : "opacity-0"
            }`}
            >
            <img
            src={item.image}
            alt={item.title}
            onClick={() => setExpandedImage(item.image)}
            className="w-64 sm:w-80 md:w-96 h-auto object-cover cursor-pointer rounded-xl shadow-lg mb-4 hover:scale-105 transition-transform"
            />
            <h3 className="text-3xl font-semibold">{item.title}</h3>
            <p className="text-xl text-gray-700">{item.date}</p>
            </div>
            ))}
            </div>
            </div>


            {expandedImage && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setExpandedImage(null)}>
            <img src={expandedImage} alt="Expanded event" className="max-w-3xl w-full rounded-xl shadow-2xl" />
            </div>
            )}
            </section>


          {/* Calendar Section */}
          <section className="w-full py-20 bg-yellow-50 text-center px-6">
          <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Calendar</h2>
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-xl">
          <iframe
          src="https://calendar.google.com/calendar/embed?height=500&wkst=1&bgcolor=%23EF6C00&ctz=America%2FChicago&showTabs=1&showPrint=0&mode=MONTH&showTz=0&src=ZmU5YjhvZnFxb2wxcXQ1bjYxYjZvajNvNGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E67C73"
          style={{ border: 0 }}
          className="w-full h-full"
          frameBorder="0"
          scrolling="no"
          title="UT SHPE Google Calendar"
          ></iframe>
          </div>
          </div>
          </section>


          {/* Office Hours Section */}
          <section className="w-full py-20 text-center px-6">
          <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Office Hours</h2>
          <img
          src={officeHoursImg}
          alt="Office Hours"
          className="mx-auto w-full sm:w-3/4 rounded-xl shadow-xl"
          />
          </div>
          </section>


          </main>
      )}
      </div>
    </>
  );
}

export default Home;
