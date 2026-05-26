import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Firewood from "../components/firewood/Firewood";
import WhyChooseSection from "../components/about/WhyChoose";
import Schedule from "../components/schedule/Schedule";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Firewood />
            <Schedule />
            <WhyChooseSection />
        </>
    )
};

export default Home;