import { portfolioData } from "../data/portfolioData";
import FadeInSection from "./FadeInSection";
import LogoLoop from "./LogoLoop";
import "./SkillCube.css";

export default function Skills() {
  // Format the data array as expected by the default LogoLoop renderer (src, alt, title)
  const formattedStacks = portfolioData.stacks.map(skill => {
    const isDarkLogo = ["Next.js", "GitHub", "Algorithms", "Scikit-Learn"].includes(skill.name);
    return {
      src: skill.logo,
      alt: skill.name,
      title: skill.name,
      // Pass a custom class parameter if we want to filter or style them specifically
      className: isDarkLogo ? "dark-logo" : ""
    };
  });

  // Split stacks into two rows for dual scrolling direction visual effect
  const midPoint = Math.ceil(formattedStacks.length / 2);
  const row1 = formattedStacks.slice(0, midPoint);
  const row2 = formattedStacks.slice(midPoint);

  return (
    <FadeInSection>
      <section id="stacks" className="skills-section">
        <h2 className="section-title">
          STACKS
        </h2>

        <div className="skills-marquee-container" style={{ margin: "4rem auto 0" }}>
          {/* Row 1: Scrolling Left */}
          <LogoLoop 
            logos={row1}
            speed={60}
            direction="left"
            logoHeight={56}
            gap={64}
            fadeOut={true}
            fadeOutColor="#0c0c0c"
            ariaLabel="Technical skills row one"
          />

          {/* Row 2: Scrolling Right */}
          <LogoLoop 
            logos={row2}
            speed={60}
            direction="right"
            logoHeight={56}
            gap={64}
            fadeOut={true}
            fadeOutColor="#0c0c0c"
            ariaLabel="Technical skills row two"
          />
        </div>
      </section>
    </FadeInSection>
  );
}