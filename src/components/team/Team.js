// src/components/Team/Team.js

import "./css/Team.css";

import TeamMember from "./TeamMember";

import TylerPhoto from "./images/tyler.jpg";
import MicahaPhoto from "./images/micha.png";
import JermeyPhoto from "./images/jermey.png";

import {
  ClipboardList,
  TreePine,
  HardHat,
  Axe,
  ShieldCheck,
  Users,
  Leaf,
  Truck,
  ThumbsUp,
} from "lucide-react";

const team = [
  {
    name: "Tyler Youngblood",
    role: "Owner / Tree Care Specialist",
    image: TylerPhoto,
    summary:
      "Tyler handles bidding, tree health discussions, pruning, removals, and overall job oversight.",
    bio:
      "Tyler is the owner and lead tree care specialist at 803Tree. He meets with homeowners, bids jobs, discusses tree health, trims trees, and handles removals with a focus on safety and quality.",
    defaultFlipped: false,
    features: [
      {
        icon: ClipboardList,
        label: "Bidding &\nEstimates",
      },
      {
        icon: TreePine,
        label: "Tree Health\nExpert",
      },
      {
        icon: HardHat,
        label: "Full Service\nLead",
      },
    ],
  },
  {
    name: "Micha",
    role: "Climber / Grounds",
    image: MicahaPhoto,
    summary:
      "Micha is an experienced climber who brings skill, precision, and focus to every job.",
    bio:
      "Micha is one of our experienced climbers. From pruning to removals, he works efficiently and carefully to keep each property safe and looking its best.",
    defaultFlipped: false,
    features: [
      {
        icon: Leaf,
        label: "Expert\nClimber",
      },
      {
        icon: ShieldCheck,
        label: "Safety\nFocused",
      },
      {
        icon: Users,
        label: "Team\nPlayer",
      },
    ],
  },
  {
    name: "Jeremy",
    role: "Climber / Grounds",
    image: JermeyPhoto,
    summary:
      "Jeremy keeps the jobsite running smoothly with climbing support, cleanup, and equipment help.",
    bio:
      "Jeremy is a climber and grounds specialist who helps keep each job moving. He handles climbing work, cleanup, debris removal, and equipment operation with a strong work ethic.",
    defaultFlipped: true,
    features: [
      {
        icon: Leaf,
        label: "Climbing\nExpert",
      },
      {
        icon: Truck,
        label: "Grounds\nSpecialist",
      },
      {
        icon: ThumbsUp,
        label: "Dependable\n& Strong",
      },
    ],
  },
];

const Team = () => {
  return (
    <section className="team-section" id="team">
      <div className="team-inner">
        <div className="team-header">
          <p className="team-eyebrow">Our Team</p>

          <h2 className="team-title">The People Behind the Work</h2>

          <p className="team-text">
            Our team is the heart of 803Tree. With experience, training, and a
            passion for tree care, we show up ready to work safely,
            professionally, and with pride.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              summary={member.summary}
              bio={member.bio}
              features={member.features}
              defaultFlipped={member.defaultFlipped}
            />
          ))}
        </div>

        <div className="team-trust">
          <div className="team-trust-icon">
            <ShieldCheck size={34} strokeWidth={2.2} />
          </div>

          <div>
            <h3 className="team-trust-title">We take pride in our work</h3>
            <p className="team-trust-text">
              Safety, professionalism, and quality are not just words to us.
              They are how we do every job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;