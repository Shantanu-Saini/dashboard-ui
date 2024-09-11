import { FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const footerData = {
    logo: "Shopkart",
    description: "Discover a seamless shopping experience with our vast collection of products. Shop now and transform the way you find your favorites from fashion to gadgets!",
    aboutLinks: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "History", href: "#" },
        { label: "Our Team", href: "#" }
    ],
    supportLinks: [
        { label: "FAQs", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Live Chat", href: "#" }
    ],
    socialLinks: [
        { icon: FaFacebook, href: "#", ariaLabel: "Facebook" },
        { icon: FaInstagram, href: "#", ariaLabel: "Instagram" },
        { icon: FaXTwitter, href: "#", ariaLabel: "X Twitter" },
        { icon: FaLinkedinIn, href: "#", ariaLabel: "LinkedIn" }
    ],
    copyright: "© Company 2024. All rights reserved."
};
