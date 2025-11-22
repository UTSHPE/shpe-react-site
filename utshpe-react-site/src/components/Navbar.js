import React from 'react';
import CardNav from './navbar/CardNav';
import logo from '../assets/web_design/navbar_logo.png'; // adjust path

export function Navbar() {
    const navItems = [
    {
      label: "About",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "About Us", href: "/about-us", ariaLabel: "About Us page" },
        { label: "Leadership", href: "/leadership", ariaLabel: "Leadership page" }
      ]
    },
    {
      label: "Engage",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Sponsorship", href: "/sponsorship", ariaLabel: "Sponsorship page" },
        { label: "SHPEtinas", href: "/shpetinas", ariaLabel: "SHPEtinas page" },
        { label: "Membership", href: "/membership", ariaLabel: "Membership page" }
      ]
    },
    {
      label: "Resources",
      bgColor: "#3A2F4D",
      textColor: "#fff",
      links: [
        { label: "Resources", href: "/resources", ariaLabel: "Resources page" }
      ]
    }
  ];


  return (
    <CardNav
      logo={logo}
      logoAlt="UTSHPE Logo"
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
