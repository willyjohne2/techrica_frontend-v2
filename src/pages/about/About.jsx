import { useState, useEffect } from "react";
import MemberCard from "../../components/ui/MemberCard";
import "./About.css";

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
            role: "Marketing Manager",
            bio: "Passionate about creating beautiful user interfaces with React.",
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            portfolioUrl: "https://alexjohnson.dev",
            skills: ["React", "JavaScript", "CSS", "UI/UX"],
          },
          {
            id: 2,
            name: "Wilson Maina",
            role: "Chief Development Officer",
            bio: "Expert in building scalable server-side applications.",
            image:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            portfolioUrl: "https://mariagarcia.dev",
            skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
          },
          {
            id: 3,
            name: "Mike",
            role: "AI Specialist",
            bio: "Creating intelligent solutions with machine learning.",
            image:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
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
          {
            id: 5,
            name: "Mike",
            role: "Frontend Developer",
            bio: "Passionate about creating beautiful user interfaces with React.",
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            portfolioUrl: "https://alexjohnson.dev",
            skills: [
              "React",
              "JavaScript",
              "CSS",
              "UI/UX",
              "TypeScript",
              "Express.js",
            ],
          },
          {
            id: 6,
            name: "John",
            role: "Full Stack Developer",
            bio: "Full Stack Developer passionate about building scalable, user-focused web applications. Experienced in React, Node.js, and modern JavaScript technologies, I specialize in creating seamless frontend experiences backed by robust backend systems. I enjoy turning complex problems into simple, elegant solutions.",
            image:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            portfolioUrl: "https://mariagarcia.dev",
            skills: [
              "React",
              "JavaScript",
              "CSS",
              "UI/UX",
              "TypeScript",
              "Express.js",
            ],
          },
          {
            id: 7,
            name: "Arribion",
            role: "Developer",
            bio: "Product Design & Mobile Development. I have a passion for creating intuitive and engaging user experiences. With expertise in React Native and a strong background in UI/UX design, I specialize in building mobile applications that are both visually appealing and highly functional. I enjoy collaborating with cross-functional teams to bring innovative ideas to life.",
            image:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            portfolioUrl: "https://mariagarcia.dev",
            skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleMemberClick = (member) => {
    if (member.portfolioUrl) {
      window.open(member.portfolioUrl, "_blank");
    }
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="highlight">Techrica</span>
            </h1>
            <p className="hero-subtitle">
              Techrica is a forward-thinking technology company driven by
              innovation, creativity, and excellence. We specialize in building
              modern, scalable, and user-focused digital solutions that empower
              businesses and individuals to thrive in the digital world.
            </p>
            <p className="hero-subtitle">
              Our team of passionate developers, designers, and strategists work
              collaboratively to transform ideas into powerful digital
              experiences. From responsive websites and eCommerce platforms to
              custom web applications, we combine technical expertise with
              creative design to deliver results that exceed expectations.
            </p>
            <p className="hero-subtitle">
              At Techrica, we believe technology should be accessible,
              efficient, and impactful. Our mission is to help brands grow,
              innovate, and succeed through smart and reliable digital
              solutions.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Team Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values Section */}
      <section className="mv-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Driving Digital Excellence</h2>
            <p className="section-description">
              We combine technical expertise with creative design to deliver
              exceptional results
            </p>
          </div>

          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with cutting-edge digital solutions that
                drive growth, enhance efficiency, and create meaningful impact.
              </p>
            </div>

            <div className="mv-card vision">
              <div className="mv-icon">✨</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading partner for digital transformation, recognized
                for innovation, quality, and client success worldwide.
              </p>
            </div>

            <div className="mv-card values">
              <div className="mv-icon">💎</div>
              <h3>Core Values</h3>
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

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Team</span>
            <h2 className="section-title">Meet the Experts</h2>
            <p className="section-description">
              Click on any team member to view their portfolio and connect with
              them
            </p>
          </div>

          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading team members...</p>
            </div>
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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's collaborate and bring your ideas to life</p>
            <button className="cta-button">Get in Touch</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
