import React from "react";

function Footer({ theme = "default" }) {

  // THEMES
  const themes = {
    default: {
      bg: "bg-[#001F5B]",
      bar: "bg-[#FD652F]",
      heading: "#FD652F",
      text: "#FCF0D6",
      label: "#72A9BE",
      icon: "#FCF0D6",
      iconHover: "#FD652F",
      copyright: "#72A9BE",
    },
    shpetinas: {
      bg: "bg-[#FFE6EE]",
      bar: "bg-pink-400",
      heading: "#C2185B",
      text: "#9D4766",
      label: "#C2185B",
      icon: "#B85C85",
      iconHover: "#C2185B",
      copyright: "#C2185B",
    }
  };

  const t = themes[theme];

  return (
    <footer className={`relative w-full ${t.bg} pt-14 pb-10 mt-20 overflow-hidden text-white`}>

      {/* Top bar */}
      <div className={`absolute inset-x-0 top-0 h-[3px] ${t.bar} animate-pulse`} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

        {/* LEFT */}
        <div>
          <h3 className="text-2xl font-bold" style={{ color: t.heading }}>
            UT SHPE
          </h3>
          <p className="text-sm mt-2" style={{ color: t.text }}>
            Empowering Hispanic students in STEM through community, mentorship,
            and professional development.
          </p>
        </div>

        {/* CENTER */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold" style={{ color: t.heading }}>
            Contact Us
          </h4>

          <p className="text-sm" style={{ color: t.text }}>
            <span className="font-medium" style={{ color: t.label }}>
              Primary Email:
            </span>{" "}
            <a href="mailto:shpe.ut.president@gmail.com" className="hover:opacity-100 opacity-80 transition">
              shpe.ut.president@gmail.com
            </a>
          </p>

          <p className="text-sm" style={{ color: t.text }}>
            <span className="font-medium" style={{ color: t.label }}>
              Corporate Email:
            </span>{" "}
            <a href="mailto:utshpe@gmail.com" className="hover:opacity-100 opacity-80 transition">
              utshpe@gmail.com
            </a>
          </p>

          <a
            href="https://linktr.ee/utshpe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 font-semibold transition"
            style={{ color: t.heading }}
          >
            Visit our Linktree →
          </a>
        </div>

        {/* RIGHT — Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-3" style={{ color: t.heading }}>
            Follow Us
          </h4>

          <div className="flex justify-center md:justify-start gap-6 text-3xl">
            {[
              { link: "https://www.facebook.com/shpeut/", icon: "fa-facebook-square" },
              { link: "https://twitter.com/utshpe?lang=en", icon: "fa-x-twitter" },
              { link: "https://www.tiktok.com/@utshpe", icon: "fa-tiktok" },
              { link: "https://www.instagram.com/utshpe/?hl=en", icon: "fa-instagram" },
              { link: "https://www.linkedin.com/company/utshpe", icon: "fa-linkedin" },
              { link: "https://github.com/UTSHPE", icon: "fa-github-square" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                className="footer-icon"
                aria-label={s.icon}
                style={{ color: t.icon }}
              >
                <i className={`fa-brands ${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="text-center text-sm mt-10" style={{ color: t.copyright }}>
        © {new Date().getFullYear()} UT SHPE. All Rights Reserved.
      </div>

      {/* Icon Hover Animation */}
      <style>
        {`
          .footer-icon {
            transition: transform 0.25s ease, color 0.25s ease;
          }
          .footer-icon:hover {
            transform: translateY(-4px) scale(1.2);
            color: ${t.iconHover};
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
