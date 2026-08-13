import { useState, useRef } from "react";
import mkLogo from "../assets/logo/mk-logo.png";
import resumePdf from "../assets/resume/Madan_KK_Resume.pdf";
import { portfolioData } from "../data/portfolioData";
import FadeInSection from "./FadeInSection";
import SmokyButton from "./SmokyButton";
import "./Contact.css";

export default function Contact() {
  const [message, setMessage] = useState("CONTACT THROUGH PORTFOLIO");
  const cardRef = useRef(null);

  const handleConnect = () => {
    const email = portfolioData.email || "madankk2004@gmail.com";
    const subject = encodeURIComponent("CONTACT THROUGH PORTFOLIO");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    // Disable 3D tilt effect on mobile touch screens to avoid scrolling jumps
    if (window.innerWidth <= 768) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 10; // max 10 degrees tilt
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <FadeInSection>
      <section id="contact">
        <h2 className="section-title">CONNECT</h2>

        <article
          className="connect-post"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Column: Avatar Image */}
          <div className="connect-left">
            <div className="connect-avatar">
              <img src={mkLogo} alt="Madan Portrait" />
              <div className="info">
                GENERATIVE AI DEVELOPER WIHT A BUSINESS BRAIN
              </div>
            </div>
          </div>

          {/* Right Column: Connection info, chat input, and buttons */}
          <div className="connect-right">
            <div className="connect-content-center">
              <h3 className="connect-name">MADAN KK</h3>
              <p className="connect-subtitle">
                GENERATIVE AI ENGINEER
              </p>

              {/* Chat Input Bar */}
              <div className="connect-chat-bar">
                <input
                  type="text"
                  className="connect-chat-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                />
                <button
                  className="connect-chat-btn cursor-target"
                  onClick={handleConnect}
                >
                  CONNECT
                </button>
              </div>

              {/* Social Bar (Mail button removed) */}
              <div className="connect-social-bar">
                {/* LinkedIn */}
                <SmokyButton
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  isCircle={true}
                >
                  <i className="bi bi-linkedin"></i>
                </SmokyButton>

                {/* GitHub */}
                <SmokyButton
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  isCircle={true}
                >
                  <i className="bi bi-github"></i>
                </SmokyButton>

                {/* Instagram */}
                <SmokyButton
                  href="https://www.instagram.com/__.madan___?igsh=NThiOGZvMndlZG9x"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  isCircle={true}
                >
                  <i className="bi bi-instagram"></i>
                </SmokyButton>

                {/* Resume */}
                <SmokyButton
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Resume"
                  isCircle={true}
                >
                  <i className="bi bi-file-earmark-pdf-fill"></i>
                </SmokyButton>
              </div>
            </div>
          </div>
        </article>
      </section>
    </FadeInSection>
  );
}