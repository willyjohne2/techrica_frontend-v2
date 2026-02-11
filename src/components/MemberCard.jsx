import React from "react";
import "../styles/main.css";

const MemberCard = ({ member, onClick }) => {
  const handleClick = () => {
    if (member.portfolioUrl) {
      window.open(member.portfolioUrl, "_blank");
    } else if (onClick) {
      onClick(member);
    }
  };

  return (
    <div className="member-card" onClick={handleClick}>
      <div className="member-image">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <p className="member-bio">{member.bio}</p>
        <div className="member-skills">
          {member.skills?.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .member-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
          cursor: pointer;
          height: 100%;
        }
        .member-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
        }
        .member-image {
          height: 250px;
          overflow: hidden;
        }
        .member-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        .member-card:hover .member-image img {
          transform: scale(1.05);
        }
        .member-info {
          padding: 1.5rem;
        }
        .member-name {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--dark);
        }
        .member-role {
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .member-bio {
          color: var(--gray);
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }
        .member-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .skill-tag {
          background-color: var(--light-gray);
          color: var(--dark);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .member-image {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default MemberCard;
