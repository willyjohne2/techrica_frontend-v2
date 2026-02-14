import  { useState, useEffect } from "react";
import MemberCard from "../../components/ui/MemberCard";

const About = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/members");
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error("Error fetching members:", error);
        // Fallback data
        setMembers([
          {
            id: 1,
            name: "Davine Olouch",
            role: "Frontend Developer",
            bio: "Passionate about creating beautiful user interfaces with React.",
            image: "https://via.placeholder.com/400x400",
            portfolioUrl: "https://alexjohnson.dev",
            skills: ["React", "JavaScript", "CSS", "UI/UX"],
          },
          {
            id: 2,
            name: "Pope",
            role: "Backend Engineer",
            bio: "Expert in building scalable server-side applications.",
            image: "https://via.placeholder.com/400x400",
            portfolioUrl: "https://mariagarcia.dev",
            skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
          },
          {
            id: 3,
            name: "Mike",
            role: "AI Specialist",
            bio: "Creating intelligent solutions with machine learning.",
            image: "https://via.placeholder.com/400x400",
            portfolioUrl: "https://davidkim.ai",
            skills: ["Python", "TensorFlow", "ML", "Data Science"],
          },
          {
            id: 4,
            name: "Tony",
            role: "Full Stack Developer",
            bio: "Bridging frontend and backend for complete solutions.",
            image: "https://via.placeholder.com/400x400",
            portfolioUrl: "https://tonyrodriguez.dev",
            skills: ["React", "Node.js", "MongoDB", "GraphQL"],
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleMemberClick = (member) => {
    // Could navigate to member profile page
    console.log("Clicked member:", member);
    // For now, just log. You can implement routing to /team/:id later
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Techrica</h1>
            <p className="hero-subtitle">
              We're a team of passionate developers, designers, and innovators
              dedicated to creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="section">
        <div className="container">
          <div className="company-info">
            <div className="info-block">
              <h2>Our Mission</h2>
              <p>
                To empower businesses with cutting-edge digital solutions that
                drive growth, enhance efficiency, and create meaningful impact.
              </p>
            </div>
            <div className="info-block">
              <h2>Our Vision</h2>
              <p>
                To be the leading partner for digital transformation, recognized
                for innovation, quality, and client success.
              </p>
            </div>
            <div className="info-block">
              <h2>Core Values</h2>
              <ul className="values-list">
                <li>Innovation & Creativity</li>
                <li>Quality & Excellence</li>
                <li>Client Success</li>
                <li>Collaboration & Teamwork</li>
                <li>Continuous Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Click on any team member to view their portfolio
          </p>

          {loading ? (
            <div className="loading">Loading team members...</div>
          ) : (
            <div className="team-grid">
              {members.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  onClick={handleMemberClick}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .about-hero {
          padding: 160px 0 80px;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: white;
          text-align: center;
        }
        .about-hero h1 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          max-width: 700px;
          margin: 0 auto;
          color: #cbd5e1;
          line-height: 1.6;
        }
        .company-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }
        .info-block {
          padding: 2rem;
        }
        .info-block h2 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.75rem;
        }
        .info-block p {
          color: var(--gray);
          line-height: 1.7;
        }
        .values-list {
          list-style: none;
          padding-left: 0;
        }
        .values-list li {
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--light-gray);
          color: var(--dark);
          position: relative;
          padding-left: 1.5rem;
        }
        .values-list li:before {
          content: "✓";
          color: var(--secondary);
          position: absolute;
          left: 0;
          font-weight: bold;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .loading {
          text-align: center;
          padding: 3rem;
          color: var(--gray);
        }
        @media (max-width: 768px) {
          .about-hero {
            padding: 140px 0 60px;
          }
          .about-hero h1 {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
          .company-info {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
