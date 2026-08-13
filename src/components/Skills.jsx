import { portfolioData } from "../data/portfolioData";
import FadeInSection from "./FadeInSection";
import "./SkillCube.css";

export default function Skills() {
  return (
    <FadeInSection>
      <section id="stacks" className="skills-section">
        {/* Title "STACKS" has been removed as requested */}
        <div className="stacks-grid">
          {portfolioData.stacks.map((skill, index) => {
            const isDarkLogo = ["Next.js", "GitHub", "Algorithms", "Scikit-Learn"].includes(skill.name);
            const logoClass = skill.name.toLowerCase().replace(/[^a-z0-9]/g, "");
            
            return (
              <div key={index} className="skill-grid-item cursor-target" title={skill.name}>
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className={`skill-static-logo ${logoClass} ${isDarkLogo ? "dark-logo" : ""}`} 
                />
              </div>
            );
          })}
        </div>
      </section>
    </FadeInSection>
  );
}