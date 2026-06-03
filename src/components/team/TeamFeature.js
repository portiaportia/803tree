// src/components/TeamFeature/TeamFeature.js

import "./css/TeamFeature.css";

const TeamFeature = ({ icon: Icon, label }) => {
  return (
    <div className="team-feature">
      <div className="team-feature-icon">
        <Icon size={22} strokeWidth={2} />
      </div>

      <span className="team-feature-label">{label}</span>
    </div>
  );
};

export default TeamFeature;