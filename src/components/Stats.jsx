import FadeInSection from "./FadeInSection";

export default function Stats() {
  return (
    <FadeInSection>
      <section id="stats">

        <h2 className="section-title">
          Achievements
        </h2>

        <div className="stats-grid">

          <div className="stat-card cursor-target">
            <span className="stat-label">Production Ready</span>
            <h3>12+</h3>
            <p>Enterprise Projects</p>
          </div>

          <div className="stat-card cursor-target">
            <span className="stat-label">Tech Ecosystem</span>
            <h3>25+</h3>
            <p>Modern Frameworks</p>
          </div>

          <div className="stat-card cursor-target">
            <span className="stat-label">Validated Expertise</span>
            <h3>18+</h3>
            <p>Professional Accreditations</p>
          </div>

          <div className="stat-card cursor-target">
            <span className="stat-label">Engineering Focus</span>
            <h3>1000+</h3>
            <p>Commit Contributions</p>
          </div>

        </div>

      </section>
    </FadeInSection>
  );
}