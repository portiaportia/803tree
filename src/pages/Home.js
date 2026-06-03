import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Firewood from "../components/firewood/Firewood";
import WhyChooseSection from "../components/about/WhyChoose";
import Schedule from "../components/schedule/Schedule";
import Team from "../components/team/Team";

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Firewood />
            <Team />
            <Schedule />
            <WhyChooseSection />
        </>
    )
};

export default Home;