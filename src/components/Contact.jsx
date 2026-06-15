import FadeInSection from "./FadeInSection";
import { portfolioData } from "../data/portfolioData";

import githubLogo from "../assets/contact/github.png";
import linkedinLogo from "../assets/contact/linkedin.png";
import instagramLogo from "../assets/contact/instagram.png";
import leetcodeLogo from "../assets/contact/leetcode.png";

import avatar from "../assets/avatar/contact-madan.png";
import Magnet from "./Magnet";

export default function Contact() {
  return (
    <FadeInSection>
      <section id="contact">

        <h2 className="section-title">
          Connect
        </h2>

        <div className="contact-main">

          {/* LEFT SIDE */}
          <div className="contact-left">

            <div className="contact-content">

              <h2 className="contact-heading">
                GET IN TOUCH
              </h2>

              <p className="contact-subtitle">
                Contact me for services
              </p>

              <a
                href={`mailto:${portfolioData.email}`}
                className="send-btn cursor-target"
              >
                SEND MAIL
              </a>

            </div>

            <div className="social-section">

              <h4>Reach me through : </h4>

              <div className="social-grid">

                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-item cursor-target"
                >
                  <img
                    src={githubLogo}
                    alt="GitHub"
                  />
                  <span><b>GitHub</b></span>
                </a>

                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-item cursor-target"
                >
                  <img
                    src={linkedinLogo}
                    alt="LinkedIn"
                  />
                  <span><b>LinkedIn</b></span>
                </a>

                <a
                  href="https://www.instagram.com/__.madan___?igsh=NThiOGZvMndlZG9x"
                  target="_blank"
                  rel="noreferrer"
                  className="social-item cursor-target"
                >
                  <img
                    src={instagramLogo}
                    alt="Instagram"
                  />
                  <span><b>Instagram</b></span>
                </a>

                <a
                  href="https://leetcode.com/u/madankk-04122004/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-item cursor-target"
                >
                  <img
                    src={leetcodeLogo}
                    alt="LeetCode"
                  />
                  <span><b>LeetCode</b></span>
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
           <div className="contact-right">
             <Magnet strength={15}>
               <img
                 src={avatar}
                 alt="Madan"
                 className="contact-avatar cursor-target"
               />
             </Magnet>
           </div>

        </div>

      </section>
    </FadeInSection>
  );
}