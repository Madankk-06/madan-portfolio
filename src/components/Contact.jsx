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

                {/* LeetCode */}
                <SmokyButton
                  href={portfolioData.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LeetCode"
                  isCircle={true}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ width: "1.65rem", height: "1.65rem", display: "inline-block", verticalAlign: "middle" }}
                  >
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.82L17.06 10.12c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
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