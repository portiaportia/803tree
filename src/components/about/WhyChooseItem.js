// src/components/WhyChoose/WhyChooseItem.js

import "./css/WhyChooseItem.css";

const WhyChooseItem = ({ Icon, title, text }) => {
  return (
    <article className="why-item">

      <div className="why-item-icon">
        <Icon size={24} strokeWidth={2.4} />
      </div>

      <div className="why-item-content">

        <h3 className="why-item-title">
          {title}
        </h3>

        <p className="why-item-text">
          {text}
        </p>

      </div>

    </article>
  );
};

export default WhyChooseItem;