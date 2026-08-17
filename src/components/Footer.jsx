import { portfolioData } from "../data/portfolioData";
import FadeInSection from "./FadeInSection";

export default function Footer() {
  return (
    <footer id="footer">
      <FadeInSection once={true} amount={0.1}>
        <div className="footer-glow"></div>

        <div className="footer-top">

          {/* Left */}
          <div className="footer-brand">

            <h3>MADAN KK</h3>

            <p className="footer-role">
              GENERATIVE AI ENGINEER
            </p>

            <p className="footer-description">
              ENGINEERING INTELLIGENT SYSTEMS TODAY, FOR THE PROBLEMS THE WORLD WILL FACE TOMORROW. I WORK WHERE LOGIC BECOMES PRODUCT, WHERE MODELS MEET CODE, DATA MEETS DECISIONS, AND IDEAS BECOME EXPERIENCES.
            </p>

          </div>

          {/* Center */}
          <div className="footer-links">

            <h4>QUICK LINKS</h4>

            <a href="#about">
              KNOW ME
            </a>


            <a href="#projects">
              PROJECTS
            </a>

            <a href="#experience">
              EXPERIENCE
            </a>

            <a href="#contact">
              CONNECT
            </a>

          </div>

          {/* Right */}
          <div className="footer-connect">

            <h4>CONTACT</h4>

            <a
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>

            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>

            <a
              href={portfolioData.leetcode}
              target="_blank"
              rel="noreferrer"
            >
              LEETCODE
            </a>

            <a
              href={`mailto:${portfolioData.email}`}
            >
              EMAIL
            </a>

          </div>

        </div>

        {/* <div className="footer-divider"></div> */}

        <div className="footer-final">

          <span>
           
          </span>

          <span >
            
          </span>

          <span>
            React • Vite • Framer Motion • OGL | © 2026 Madan KK | Designed & Developed by Madan KK
          </span>

          <span >
            
          </span>
          <span>
            
          </span>

        </div>
      </FadeInSection>
    </footer>
  );
}