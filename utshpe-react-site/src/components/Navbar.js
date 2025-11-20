import React from 'react';
import CardNav from './navbar/CardNav';
import logo from '../assets/web_design/navbar_logo.png'; // adjust path

export function Navbar() {
  const navItems = [
    {
      label: "Home",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Home", href: "/", ariaLabel: "Go to Home" }
      ]
    },
    {
      label: "About",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Company", href: "/company", ariaLabel: "Company page" },
        { label: "Careers", href: "/careers", ariaLabel: "Careers page" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "/projects/featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href: "/projects/case-studies", ariaLabel: "Case Studies" }
      ]
    }
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={navItems}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
}

export default Navbar;
