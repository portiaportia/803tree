// src/components/WhyChoose/WhyChooseSection.js

import "./css/WhyChoose.css";
import { MapPinned, Wrench } from "lucide-react";
import WhyChooseItem from "./WhyChooseItem";

const items = [
  {
    Icon: MapPinned,
    title: "Local & Reliable",
    text: "Based in the area and committed to showing up on time.",
  },
  {
    Icon: Wrench,
    title: "Fully Equipped",
    text: "We have the tools and equipment to handle jobs of any size.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="why-section" id="about">
      <div className="why-inner">

        <div className="why-intro">

          <h2 className="why-title">
            Why Choose 803 Tree?
          </h2>

          <p className="why-text">
            803 Tree, LLC provides professional tree removal, tree pruning, hazardous tree mitigation, storm cleanup, forestry mulching, and stump grinding throughout the Midlands of South Carolina. 
          </p>
          <p className="why-text">
            We specialize in difficult-access projects using advanced equipment, including spider lifts and compact machinery that minimize impact to your property. 
          </p>
          <p className="why-text">  
            Whether you need a hazardous tree removed, structural pruning to improve tree health, or land cleared with forestry mulching, our experienced team is committed to safe, ethical tree care and exceptional cleanup.
          </p>

        </div>

        <div className="why-items">
          {items.map((item) => (
            <WhyChooseItem
              key={item.title}
              Icon={item.Icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;