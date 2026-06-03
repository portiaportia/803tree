import { useState } from "react";
import { Leaf } from "lucide-react";
import TeamFeature from "./TeamFeature";
import "./css/TeamMember.css";

const TeamMember = ({
  image,
  name,
  role,
  summary,
  bio,
  features,
  defaultFlipped = false,
}) => {
  const [isFlipped, setIsFlipped] = useState(defaultFlipped);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };

  // className={`team-member-card ${isFlipped ? "is-flipped" : ""}`}

  return (
    <article
      className="team-member-card is-flipped"
      role="button"
      tabIndex={0}
      aria-label={`Flip card for ${name}`}
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
    >
      <div className="team-member-card-inner">
        <div className="team-member-card-face team-member-card-front">
          <div className="team-member-photo">
            <img src={image} alt={name} />
            <div className="team-member-photo-overlay" />
          </div>

          <div className="team-member-info">
            <h3 className="team-member-name">{name}</h3>
            <p className="team-member-role">{role}</p>
            <p className="team-member-summary">{summary}</p>
          </div>

          <div className="team-member-features">
            {features.map((feature) => (
              <TeamFeature
                key={feature.label}
                icon={feature.icon}
                label={feature.label}
              />
            ))}
          </div>
        </div>

        <div className="team-member-card-face team-member-card-back">
          <div className="team-member-back-mark">
            <Leaf size={40} strokeWidth={1.9} />
          </div>

          <p className="team-member-back-kicker">{role}</p>
          <h3 className="team-member-back-title">{name}</h3>
          <p className="team-member-back-text">{bio}</p>
        </div>
      </div>
    </article>
  );
};

export default TeamMember;