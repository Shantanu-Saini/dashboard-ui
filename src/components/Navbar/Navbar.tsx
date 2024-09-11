import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, icons } from "../../data/navbarData";

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const location = useLocation();
    const { logo: Logo, menu: MenuIcon, close: CloseIcon } = icons;

    const isActive = (path: string) => location.pathname === path;

    const linkClass = (path: string) =>
        `transition hover:text-gray-500/75 ${isActive(path) ? 'font-bold text-gray-800' : 'text-gray-800'}`;

    return (
        <header className="sticky top-0 z-40 py-3 backdrop-blur-lg border-b border-neutral-700/80 shadow-md">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 cursor-pointer">
                        <Link className="block text-gray-800" to='/'>
                            <Logo className="text-4xl" />
                        </Link>
                        <h1 className="text-xl font-medium text-gray-800">LOGO</h1>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex items-center space-x-6 text-base">
                            {navLinks.map(({ path, label }) => (
                                <li key={path}>
                                    <Link className={linkClass(path)} to={path}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex md:hidden items-center gap-4">
                        <div className="hidden sm:flex">
                            <a
                                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-800 hover:text-gray-800/75"
                                href="#"
                            >
                                Register
                            </a>
                        </div>

                        <button
                            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/ z-50"
                            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                        >
                            {isNavbarOpen ? <CloseIcon className="text-2xl" /> : <MenuIcon className="text-2xl" />}
                        </button>
                    </div>
                    <div
                        className={`fixed inset-y-0 right-0 z-40 w-2/3 bg-gray-100 px-6 py-10 transform transition-transform duration-300 ease-in-out min-h-screen md:hidden ${isNavbarOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        <ul className="flex flex-col items-center space-y-3 text-base">
                            {navLinks.map(({ path, label }) => (
                                <li key={path} onClick={() => setIsNavbarOpen(false)}>
                                    <Link className={linkClass(path)} to={path}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
