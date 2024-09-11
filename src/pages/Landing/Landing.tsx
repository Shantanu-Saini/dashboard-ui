import Contact from "../../components/Contact/Contact"
import Faqs from "../../components/FAQs/Faqs"
import Features from "../../components/Features/Features"
import Hero from "../../components/Hero/Hero"

const Landing = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Faqs />
            <Contact />
        </div>
    )
}

export default Landing