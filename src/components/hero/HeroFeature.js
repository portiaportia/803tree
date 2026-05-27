const HeroFeature = ({ icon: Icon, topText, bottomText }) => {
  return (
    <div className="hero-feature">
      {Icon ? <Icon size={22} /> : null}

      <span>
        {topText}
        <br />
        {bottomText}
      </span>
    </div>
  );
};

export default HeroFeature;