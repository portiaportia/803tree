// src/components/Footer/FooterLinks.js

const FooterLinks = ({ title, links }) => {
  return (
    <div className="footer-column">
      <h3 className="footer-heading">{title}</h3>

      {links.map((link) => (
        <a key={link.label} href={link.href} className="footer-link">
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;