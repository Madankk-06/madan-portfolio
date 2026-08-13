import FadeInSection from "./FadeInSection";
import DossierCard from "./DossierCard";
import "./About.css";

export default function About() {
  return (
    <FadeInSection>
      <section id="about">
        <h2 className="section-title">KNOW ME</h2>
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <DossierCard />
        </div>
      </section>
    </FadeInSection>
  );
}