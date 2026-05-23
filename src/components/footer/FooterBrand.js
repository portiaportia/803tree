// src/components/Footer/FooterBrand.js

import logo from "../../images/logo.png";

const FooterBrand = () => {
  return (
    <div className="footer-brand">
      <a href="/" className="footer-logo" aria-label="803Tree home">
        <img src={logo} alt="803Tree logo" className="footer-logo-img" />
      </a>

      <p className="footer-text">
        Professional tree service in South Carolina. Licensed, insured, and committed to quality.
      </p>
    </div>
  );
};

export default FooterBrand;