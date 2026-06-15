import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer id="footer">

      <div className="footer-glow"></div>

      <div className="footer-top">

        {/* Left */}
        <div className="footer-brand">

          <h3>Madan KK</h3>

          <p className="footer-role">
            Gen AI Engineer & Full Stack Developer
          </p>

          <p className="footer-description">
            Building AI-powered applications,
            modern web experiences and scalable systems.
          </p>

        </div>

        {/* Center */}
        <div className="footer-links">

          <h4>Quick Links</h4>

          <a href="#about">
            Know me
          </a>

          <a href="#stacks">
            Stacks
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#experience">
            Experience
          </a>

          <a href="#contact">
            Connect
          </a>

        </div>

        {/* Right */}
        <div className="footer-connect">

          <h4>Connect</h4>

          <a
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href={portfolioData.leetcode}
            target="_blank"
            rel="noreferrer"
          >
            LeetCode
          </a>

          <a
            href={`mailto:${portfolioData.email}`}
          >
            Email Me
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

    </footer>
  );
}