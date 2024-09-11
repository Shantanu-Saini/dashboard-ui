import { heroData } from "../../data/heroData";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen mx-auto px-4 sm:px-6 lg:px-8 bg-landing bg-center bg-no-repeat bg-fixed bg-cover">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl text-center tracking-wide text-white">
                {heroData.title}
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" data-aos='slide-up'>
                    {" "}
                    {heroData.highlightedText}
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-300 max-w-4xl" data-aos='slide-up'>
                {heroData.description}
            </p>
            <div className="flex justify-center my-10" data-aos='slide-up'>
                <a
                    href={heroData.buttonLink}
                    className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-white transition-transform duration-300 ease-in-out hover:from-orange-800 hover:to-orange-500"
                >
                    {heroData.buttonText}
                </a>
            </div>

        </div>
    );
};

export default Hero;
