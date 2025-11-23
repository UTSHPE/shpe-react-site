import React from 'react';
import CardNav from './CardNav';
import logo from '../../assets/web_design/navbar_logo.png';

export function Navbar() {
    const navItems = [
        {
            label: "About",
            bgColor: "#001F5B", // Navy
            textColor: "#FFFFFF",
            links: [
                { label: "About Us", href: "/about-us", ariaLabel: "About Us page" },
                { label: "Leadership", href: "/leadership", ariaLabel: "Leadership page" }
            ]
        },
        {
            label: "Engage",
            bgColor: "#0070C0", // Blue
            textColor: "#FFFFFF",
            links: [
                { label: "Sponsorship", href: "/sponsorship", ariaLabel: "Sponsorship page" },
                { label: "SHPEtinas", href: "/shpetinas", ariaLabel: "SHPEtinas page" },
                { label: "Membership", href: "/membership", ariaLabel: "Membership page" }
            ]
        },
        {
            label: "Resources",
            bgColor: "#FD652F", // Orange
            textColor: "#FFFFFF",
            links: [
                { label: "Resources", href: "/resources", ariaLabel: "Resources page" }
            ]
        }
    ];

    return (
        <CardNav
            logo={logo}
            logoAlt="UTSHPE Logo"
            logoHref='/'
            items={navItems}
            baseColor="#FFFF" // Cream background for the navbar base
            menuColor="#001F5B" // Navy text for menu items outside hover
            buttonBgColor="#001F5B" // Navy buttons
            buttonTextColor="#FFFFFF"
            ease="power3.out"
        />
    );
}

export default Navbar;
