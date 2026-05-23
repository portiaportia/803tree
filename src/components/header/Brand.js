import "./css/Brand.css";
import logo from "../../images/logo.png";

export default function Brand() {
  return (
    <a href="/" className="brand" aria-label="803Tree home">
      <img src={logo} alt="803Tree logo" className="brand-logo" />
    </a>
  );
}