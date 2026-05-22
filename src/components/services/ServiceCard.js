import "./css/ServiceCard.css";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <article className="service-card">
      <div>
        <img className="service-card-icon" src={icon} img={title}/>
      </div>

      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-text">{description}</p>
    </article>
  );
};

export default ServiceCard;