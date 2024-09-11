import { footerData } from "../../data/footerData";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8  sm:px-6 lg:px-8">
                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                    <div className="mx-auto max-w-sm lg:max-w-none">
                        <h1 className="text-3xl font-semibold text-center sm:text-start">{footerData.logo}</h1>
                        <p className="mt-4 text-center text-gray-50 lg:text-left lg:text-lg">
                            {footerData.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
                        <div>
                            <strong className="font-medium text-white"> Links </strong>
                            <ul className="mt-6 space-y-1">
                                {footerData.aboutLinks.map(({ label, href }) => (
                                    <li key={label}>
                                        <a className="text-gray-50 transition hover:text-gray-300" href={href}>
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <strong className="font-medium text-white"> Support </strong>
                            <ul className="mt-6 space-y-1">
                                {footerData.supportLinks.map(({ label, href }) => (
                                    <li key={label}>
                                        <a className="text-gray-50 transition hover:text-gray-300" href={href}>
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <strong className="font-medium text-white"> Social Media </strong>
                            <div className="mt-6 flex justify-center gap-4 lg:justify-start text-xl">
                                {footerData.socialLinks.map(({ icon: Icon, href, ariaLabel }) => (
                                    <a
                                        key={ariaLabel}
                                        className="text-gray5 transition hover:text-gray-300"
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={ariaLabel}
                                    >
                                        <Icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-100 pt-8">
                    <p className="text-center text-xs/relaxed text-gray-100">
                        {footerData.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
