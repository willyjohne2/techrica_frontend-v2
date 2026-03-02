import { useState, useEffect } from "react";
import MemberCard from "../../components/ui/MemberCard";
import { useNavigate } from "react-router-dom";
import "./About.css";
import Florant from "../../assets/Florant.jpeg";
import Josphat from "../../assets/Josphat.jpg";
import Job from "../../assets/Job.jpeg";
import Davine from "../../assets/Davine.jpeg";
import Wilson from "../../assets/Wilson.jpeg";
import Benson from "../../assets/Benson.jpg";
import Michael from "../../assets/Michael.jpg";

const About = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
    const fetchMembers = async () => {
        try {
            const response = await fetch(`${API_URL}/api/members/`);        const data = await response.json();
        const membersData = Array.isArray(data) ? data : data.results || [];
        setMembers(membersData);
      } catch (error) {
        console.error("Error fetching members:", error);
        // Fallback data
        setMembers([
          {
            id: 1,
            name: "Davine Olouch",
            role: "Chief Executive Officer",
            bio: "Chief Executive Officer providing strategic leadership and vision for the organization. Davine drives growth, fosters innovation, and builds strong partnerships while ensuring the company stays aligned with its mission and long-term objectives.",
            image: Davine,
            portfolioUrl: "https://alexjohnson.dev",
            skills: [
              "Leadership",
              "Strategic Planning",
              "Business Development",
              "Decision Making",
            ],
          },

          {
            id: 2,
            name: "Wilson Maina",
            role: "Chief Development Officer",
            bio: "Chief Development Officer, lead's in the design and delivery of scalable, high-performance server-side systems. He oversees the technical strategy, guides the development team, and ensures that solutions are reliable, secure, and built to support growth. With strong expertise in Node.js, Python, PostgreSQL, and AWS, he focuses on building robust backend architectures that power efficient and innovative digital products.",
            image: Wilson,
            portfolioUrl: "https://mariagarcia.dev",
            skills: [
              "Backend Development",
              "Investment in Emerging Technologies",
              "Database Management",
              "High-Caliber Code Quality",
              "API Design & Development",
              "Scalability & Performance Optimization",
            ],
          },
          {
            id: 3,
            name: "Josphat Omondi",
            role: "Chief Financial Officer",
            bio: "Chief Financial Officer responsible for overseeing financial strategy, budgeting, and sustainable growth. Josphat ensures sound financial planning, risk management, and efficient resource allocation to support the organization’s long-term success.",
            image: Josphat,
            portfolioUrl: "https://yourportfolio.com",
            skills: [
              "Frontend Development",
              "Strategic Marketing & Brand Development",
              "Software Engineering & Web Development",
              "System Design & Architecture",
              "Business Process Automation",
              "UI/UX Design & Product Thinking",
            ],
          },

          {
            id: 4,

            name: "Job Otieno",
            role: "Chief Product Officer",
            bio: "As Marketing Director, I lead the company’s marketing strategy to build brand visibility, drive customer growth, and increase revenue through effective digital and market-driven campaigns.",
            image: Job,
            portfolioUrl: "https://tonyrodriguez.dev",
            skills: [
              "Strategic Marketing & Brand Development",
              "System Design & Architecture",
              "Business Process Automation",
              "UI/UX Design & Product Thinking",
              "Data Analysis & Performance Tracking",
              "Project Management & Team Collaboration",
              "User Research & Customer Insights",
              "Prduct Roadmapping"
            ],
          },
          {
            id: 5,
            name: "Michael Destiny",
            role: "Chief Operating Officer",
            bio: "Passionate about creating beautiful user interfaces with React.",
            image: Michael, // replace with actual image import
            portfolioUrl: "https://alexjohnson.dev",
            skills: [
              "Backend Development",
              "Internal Processing Automation",
              "Team Coordination",
              "Project Delivery & Timelines",
              "Quality of Excution",
              "Operational Efficiency",
            ],
          },
          {
            id: 7,
            name: "John Warui",
            role: "Chief Innovation Officer",
            bio: "Chief Innovation Officer focused on driving technological advancement and strategic growth. Joh leads innovation initiatives, explores emerging technologies, and transforms bold ideas into impactful digital solutions that position the company ahead of industry trends.",
            image: Florant, // replace with actual image import
            portfolioUrl: "https://yourportfolio.com",
            skills: [
              "Frontend Development",
              "Backend Development",
              "Innovation Strategy",
              "Product Development",
              "Emerging Technologies",
              "Leadership",
              "Digital Transformation",
            ],
          },

          {
          id: 8,
          name: "Benson Okwemba",
          role: "Chief Technology Officer",
          bio: "Driving the company’s cybersecurity strategy to protect digital assets and ensure data privacy. Benson implements robust security measures, conducts risk assessments, and stays ahead of emerging threats to safeguard the organization’s information and maintain trust with clients.",
          image: Benson, // replace with actual image import
          portfolioUrl: "https://yourportfolio.com",
          skills: ["Frontend Development", 
            "Backend Development", 
            "Cloud Computing", 
            "Cybersecurity", 
            "DevOps",
            "Software Architecture",
            "System Design",
            "Security and Standards Compliance",
            "New Tech Adoption and Integration",
          ],
           },

          // {
          //   id: 7,
          //   name: "Arribion",
          //   role: "Developer",
          //   bio: "Product Design & Mobile Development. I have a passion for creating intuitive and engaging user experiences. With expertise in React Native and a strong background in UI/UX design, I specialize in building mobile applications that are both visually appealing and highly functional. I enjoy collaborating with cross-functional teams to bring innovative ideas to life.",
          //   image:
          //     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
          //   portfolioUrl: "https://mariagarcia.dev",
          //   skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
          // },
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
              We are a forward-thinking technology company focused on delivering
              innovative, scalable, and user-centric digital solutions.
            </p>

            <p className="hero-description">
              Our team of passionate developers, designers, and strategists work
              collaboratively to transform ideas into impactful digital products —
              from responsive websites and e-commerce platforms to powerful custom
              web applications.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>

              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Experts</span>
              </div>

              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years</span>
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

            <button className="cta-button" onClick={() => navigate("/contact")}>
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
