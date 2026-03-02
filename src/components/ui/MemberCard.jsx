import React from "react";
import "./MemberCard.css";

const MemberCard = ({ member, onClick }) => {
  const handleClick = () => {
    if (member.portfolioUrl) {
      window.open(member.portfolioUrl, "_blank");
    } else if (onClick) {
      onClick(member);
    }
  };

  return (
    <div onClick={handleClick} className="member-card">
      <div className="member-card-image">
        <img src={member.image} alt={member.name} className="member-card-img" />
      </div>
      <div className="member-card-content">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <p className="member-bio">{member.bio}</p>
        <div className="skills-container">
          {member.skills?.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
