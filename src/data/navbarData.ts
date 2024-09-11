import { FaFire } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

export const navLinks = [
    { path: "/", label: "Home" },
    { path: "/dashboard", label: "Analytics" },
    { path: "/settings", label: "Settings" },
];

export const icons = {
    logo: FaFire,
    menu: GiHamburgerMenu,
    close: RxCross2
};
