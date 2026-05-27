import "./Hero.css";
import HeroFeature from "./HeroFeature";

import { ShieldCheck, TreePine, Clock3 } from "lucide-react";

import heroImageDesktop from "./hero.png";
import heroImageMobile from "./hero-mobile.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image hero-image-desktop">
        <img
          src={heroImageDesktop}
          alt="Tree worker cutting tree with chainsaw"
        />
      </div>

      <div className="hero-image hero-image-mobile">
        <img
          src={heroImageMobile}
          alt="Tree climber working high in a tree"
        />
      </div>

      <div className="container">
        <div className="hero-content">
          <p className="hero-eyebrow">Professional Tree Service</p>

          <h1 className="hero-title">
            South Carolina
            <br />
            Tree Care Experts
          </h1>

          <p className="hero-text">
            Quality tree services you can trust — keeping your property safe,
            clean, and beautiful.
          </p>

          <div className="hero-actions">
            <a href="#estimate" className="hero-cta">
              Schedule a Free Estimate
            </a>

            <a href="tel:8034023736" className="hero-phone">
              Call (803) 402-3736
            </a>
          </div>

          <div className="hero-features">
            <HeroFeature
              icon={ShieldCheck}
              topText="Licensed"
              bottomText="& Insured"
            />

            <HeroFeature
              icon={TreePine}
              topText="Local &"
              bottomText="Reliable"
            />

            <HeroFeature
              icon={Clock3}
              topText="24/7"
              bottomText="Emergency Service"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;