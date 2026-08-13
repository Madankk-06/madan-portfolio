import { portfolioData } from "../data/portfolioData";
import FadeInSection from "./FadeInSection";
import LogoLoop from "./LogoLoop";
import "./SkillCube.css";

export default function Skills() {
  // Split stacks into two rows for dual scrolling direction visual effect
  const midPoint = Math.ceil(portfolioData.stacks.length / 2);
  const row1 = portfolioData.stacks.slice(0, midPoint);
  const row2 = portfolioData.stacks.slice(midPoint);

  const renderSkillItem = (skill) => {
    const isDarkLogo = ["Next.js", "GitHub", "Algorithms", "Scikit-Learn"].includes(skill.name);
    // Create a clean class name from the skill name for targeted colorful CSS filters
    const logoClass = skill.name.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    return (
      <img 
        src={skill.logo} 
        alt={skill.name} 
        className={`skill-marquee-logo ${logoClass} ${isDarkLogo ? "dark-logo" : ""}`} 
      />
    );
  };

  return (
    <FadeInSection>
      <section id="stacks" className="skills-section">
        <h2 className="section-title">
          STACKS
        </h2>

        <div className="skills-marquee-container">
          {/* Row 1: Scrolling Left */}
          <LogoLoop 
            logos={row1}
            speed={60}
            direction="left"
            logoHeight={85}
            gap={64}
            fadeOut={true}
            fadeOutColor="#0c0c0c"
            renderItem={renderSkillItem}
            ariaLabel="Technical skills row one"
          />

          {/* Row 2: Scrolling Right */}
          <LogoLoop 
            logos={row2}
            speed={60}
            direction="right"
            logoHeight={85}
            gap={64}
            fadeOut={true}
            fadeOutColor="#0c0c0c"
            renderItem={renderSkillItem}
            ariaLabel="Technical skills row two"
          />
        </div>
      </section>
    </FadeInSection>
  );
}