import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { contactData } from "../../data/contactData";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex flex-col items-center justify-center mx-auto px-2 sm:px-6 lg:px-8" data-aos='slide-up'>
            <h1 className="text-3xl font-bold mb-6">{contactData.title}</h1>
            <form onSubmit={handleSubmit} className="bg-white p-8 sm:w-3/4 w-full">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        {contactData.fields.name.label}
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder={contactData.fields.name.placeholder}
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none bg-gray-50"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        {contactData.fields.email.label}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder={contactData.fields.email.placeholder}
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none bg-gray-50"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        {contactData.fields.message.label}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder={contactData.fields.message.placeholder}
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none bg-gray-50"
                        required
                    />
                </div>
                <div className="w-full flex items-center justify-center">
                    <button
                        type="submit"
                        className="flex items-center justify-center px-4 py-2 bg-[#0134ec] text-white font-medium rounded-md hover:bg-blue-600 transition"
                    >
                        <FaPaperPlane className="mr-2" />
                        {contactData.buttonText}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
