import { useState } from "react";
import { faqData } from "../../data/faqData";

const Faqs = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-fit min-w-full mx-auto my-8 px-2 sm:px-6 lg:px-8 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6" data-aos='slide-up'>FAQ</h1>
            <div className="space-y-4 bg-white p-8 sm:w-5/6 w-full">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        data-aos='slide-up'
                        className="border-s-4 border-green-500 bg-gray-50 p-6 transition-all duration-300 ease-in-out"
                    >
                        <div
                            className="flex cursor-pointer items-center justify-between gap-1.5"
                            onClick={() => toggleQuestion(index)}
                        >
                            <h2 className="text-lg font-medium text-gray-900">{faq.question}</h2>

                            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`size-5 shrink-0 transition-transform duration-300 ${openIndex === index ? '-rotate-45' : 'rotate-0'
                                        }`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </div>

                        {openIndex === index && (
                            <p className="mt-4 leading-relaxed text-gray-700">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faqs;
