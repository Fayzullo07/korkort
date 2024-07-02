import Faq from "../components/Faq/Fat"
import Features from "../components/Features/Features"
import FooterHero from "../components/FooterHero/FooterHero"
import Hero from "../components/Hero/Hero"
import Insights from "../components/Insights/Insights"
import Potential from "../components/Potential/Potential"
import PricePlans from "../components/PricePlans/PricePlans"
import Testimonials from "../components/Testimonials/Testimonials"

const Home = () => {
    return (
        <>
            <Hero />
            <Potential />
            <Features />
            <Testimonials />
            <PricePlans />
            <Insights />
            <Faq />
            <FooterHero />
        </>
    )
}

export default Home