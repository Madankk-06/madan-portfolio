import mkLogo from "../assets/logo/mk-logo.png";
import resumePdf from "../assets/resume/Madan_KK_Resume.pdf";
import { portfolioData } from "../data/portfolioData";
import FadeInSection from "./FadeInSection";
import SmokyButton from "./SmokyButton";
import "./Contact.css";

export default function Contact() {
  return (
    <FadeInSection>
      <section id="contact">
        <h2 className="section-title">CONNECT</h2>

        <article className="connect-post">
          {/* Left Column: Avatar Image */}
          <div className="connect-left">
            <div className="connect-avatar">
              <img src={mkLogo} alt="Madan Portrait" />
              <div className="info">
                Generative AI Developer with a Business Brain
              </div>
            </div>
          </div>

          {/* Right Column: Connection info and buttons */}
          <div className="connect-right">

            <div className="connect-content-center">
              <h3 className="connect-name">MADAN KK</h3>
              <p className="connect-subtitle">
                GEN AI ENGINEER & FULL STACK DEVELOPER
              </p>

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

                {/* Mail */}
                <SmokyButton
                  href={`mailto:${portfolioData.email}`}
                  title="Email"
                  isCircle={true}
                >
                  <i className="bi bi-envelope-fill"></i>
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