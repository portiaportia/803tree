import "./css/ServiceCard.css";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <article className="service-card">

      <img
        className="service-card-icon"
        src={icon}
        alt={title}
      />

      <div className="service-card-content">

        <h3 className="service-card-title">
          {title}
        </h3>

        <p className="service-card-text">
          {description}
        </p>

      </div>

    </article>
  );
};

export default ServiceCard;