import React, { useEffect, useState } from "react";
import logo from "../assets/web_design/navbar_logo.png";

function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes smoothIntro {
            0% {
              opacity: 0;
              transform: scale(0.75);
              filter: blur(8px);
            }

            40% {
              opacity: 1;
              transform: scale(1);
              filter: blur(0);
            }

            /* Hold the clear logo longer */
            70% {
              opacity: 1;
              transform: scale(1); /* tiny breathing effect (optional) */
              filter: blur(0);
            }

            /* Fade + final zoom */
            100% {
              opacity: 0;
              transform: scale(1.18);
              filter: blur(4px);
            }
          }
          .intro-animation {
            animation: smoothIntro 2.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
        `}
      </style>

      <div className="relative min-h-[80vh] flex items-center justify-center px-6">
        
        {/* INTRO LOGO */}
        {showIntro && (
          <img
            src={logo}
            alt="Intro Logo"
            className="
              w-auto h-auto
              absolute z-20
              intro-animation
            "
          />
        )}

        {/* MAIN CONTENT */}
        <div
          className={`flex flex-col items-center justify-center text-center transition-opacity duration-700 ${
            showIntro ? "opacity-0" : "opacity-100"
          }`}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4">
            Welcome to UTSHPE React Dev Site
          </h1>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-xl mb-8">
            We're building something awesome for our organization. Stay tuned for updates!
          </p>

          <a
            href="/about"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
