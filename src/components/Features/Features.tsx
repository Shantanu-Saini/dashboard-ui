import { featuresData } from "../../data/featuresData";

const Features = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8  sm:px-6 lg:px-8" data-aos='slide-up'>
            <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {featuresData.map((feature) => (
                    <div
                        key={feature.id}
                        className="p-6 bg-gray-50 border border-gray-200 shadow-md rounded-lg flex flex-col items-center text-center hover:scale-105 transition-all duration-200"
                    >
                        <div className="text-4xl mb-4 text-[#0134ec] animate-bounce"><feature.icon /></div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
