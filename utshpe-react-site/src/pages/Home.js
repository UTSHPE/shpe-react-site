import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      {/* Hero Title */}
      <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4">
        Welcome to UTSHPE React Dev Site
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-foreground/70 max-w-xl mb-8">
        We're building something awesome for our organization. Stay tuned for updates!
      </p>

      {/* Button */}
      <a
        href="/about"
        className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition"
      >
        Learn More
      </a>
    </div>
  );
}

export default Home;