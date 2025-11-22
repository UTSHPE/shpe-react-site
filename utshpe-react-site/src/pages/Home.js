import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

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
  // Check if intro has been shown in this session
  const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
  
  if (hasSeenIntro) {
    // Skip intro, show main content immediately
    setShowVideo(false);
    setShowLogoIntro(false);
    setShowMainContent(true);
    return;
  }

  let videoTimer;
  let logoTimer;

  // Play video for 5s, then logo animation for 2.8s, then show main content
  videoTimer = setTimeout(() => {
    setShowVideo(false);
    setShowLogoIntro(true);

    logoTimer = setTimeout(() => {
      setShowLogoIntro(false);
      setShowMainContent(true);
      // Mark intro as seen for this session
      sessionStorage.setItem('hasSeenIntro', 'true');
    }, 2800);
  }, 5000);

    return () => {
      clearTimeout(videoTimer);
      clearTimeout(logoTimer);
    };
  }, []);



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


          {/* Upcoming Events Section (with Swiper Carousel) */}
          <section className="w-full py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-center px-6 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl"></div>
            
            <div className="max-w-5xl mx-auto relative z-10">
            <div className="mb-12">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Upcoming Events
              </h2>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Join us for our latest events and activities. Swipe, click, or use the arrows to explore!
              </p>
            </div>

            <div className="relative">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[EffectCoverflow, Autoplay, Navigation]}
              className="py-12 events-swiper"
            >
              {eventCarousel.map((item, index) => (
                <SwiperSlide key={index} style={{ width: '280px' }} className="sm:!w-[350px]">
                  <div className="flex flex-col items-center">
                    <div className="relative group">
                      <img
                        src={item.image}
                        alt={item.title}
                        onClick={() => setExpandedImage(item.image)}
                        className="w-64 sm:w-80 md:w-[22rem] rounded-2xl shadow-2xl cursor-pointer transition-all duration-300 hover:shadow-orange-300/50 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    <div className="text-center mt-6 px-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-1.5 rounded-full">
                        <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm sm:text-base font-semibold text-orange-700">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation Buttons */}
            <button className="swiper-button-prev-custom absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="swiper-button-next-custom absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            </div>

            </div>

            {expandedImage && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6 md:p-8" onClick={() => setExpandedImage(null)}>
            <img src={expandedImage} alt="Expanded event" className="max-w-[95vw] sm:max-w-2xl max-h-[85vh] sm:max-h-[90vh] w-auto h-auto object-contain rounded-xl shadow-2xl" />
            </div>
            )}
            
            <style>
              {`
                .events-swiper {
                  padding-left: 60px !important;
                  padding-right: 60px !important;
                }
                .events-swiper .swiper-button-next,
                .events-swiper .swiper-button-prev {
                  color: #ea580c;
                  background: white;
                  width: 50px;
                  height: 50px;
                  border-radius: 50%;
                  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                  transition: all 0.3s ease;
                  top: 50%;
                  transform: translateY(-50%);
                }
                .events-swiper .swiper-button-next {
                  right: 0;
                }
                .events-swiper .swiper-button-prev {
                  left: 0;
                }
                .events-swiper .swiper-button-next:hover,
                .events-swiper .swiper-button-prev:hover {
                  background: #ea580c;
                  color: white;
                  transform: translateY(-50%) scale(1.1);
                }
                .events-swiper .swiper-button-next:after,
                .events-swiper .swiper-button-prev:after {
                  font-size: 20px;
                  font-weight: bold;
                }
                @media (max-width: 640px) {
                  .events-swiper {
                    padding-left: 40px !important;
                    padding-right: 40px !important;
                  }
                  .events-swiper .swiper-button-next,
                  .events-swiper .swiper-button-prev {
                    width: 40px;
                    height: 40px;
                  }
                  .events-swiper .swiper-button-next:after,
                  .events-swiper .swiper-button-prev:after {
                    font-size: 16px;
                  }
                }
              `}
            </style>
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
