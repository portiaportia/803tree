// src/components/Footer/Footer.js

import "./css/Footer.css";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContactGroup from "./FooterContactGroup";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <FooterBrand />

          <FooterLinks
            title="Services"
            links={[
              { label: "Tree Removal", href: "/" },
              { label: "Tree Trimming", href: "/" },
              { label: "Stump Grinding", href: "/" },
              { label: "Emergency Service", href: "/" },
            ]}
          />

          <FooterContactGroup
            title="Contact"
            items={[
              { icon: "phone", text: "(803) 555-TREE", href: "tel:8035558733" },
              {
                icon: "map",
                text: "Serving Columbia, SC & Surrounding Areas",
              },
              {
                icon: "mail",
                text: "info@803tree.com",
                href: "mailto:info@803tree.com",
              },
            ]}
          />

          <FooterContactGroup
            title="Business Hours"
            items={[
              { icon: "clock", text: "Mon - Fri: 7:00 AM - 6:00 PM" },
              { icon: "clock", text: "Sat: 8:00 AM - 2:00 PM" },
              { icon: "clock", text: "Sun: Emergency Only" },
            ]}
          />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;