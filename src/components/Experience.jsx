import FadeInSection from "./FadeInSection";
import Stack from "./ExperienceStack";

const experiences = [
  {
    role: "INTERNSHIP",
    company: "FacePrep Campus",
    period: "Nov 2024 - Jun 2025",
    description: "During my internship at FacePrep Campus, I optimized the client acquisition pipeline by tracking and managing a weekly database of over 100 prospects. Through data-driven analysis of follow-up timing and engagement patterns, I spearheaded strategic coordination and operational leadership efforts that directly elevated customer conversion rates and enhanced client relationships."
  },
  {
    role: "UI/UX DEVELOPER [ONLINE]",
    company: "L&T EduTech",
    period: "Apr 2023 - Jun 2023",
    description: "As an online UI/UX Developer at L&T EduTech, I engineered user-centric digital systems using advanced UX research and usability analysis methodologies. I developed high-fidelity wireframes and interactive prototypes, while collaborating on cohesive design systems to ensure seamless accessibility, visual consistency, and elevated performance across multiple platforms."
  },
  {
    role: "CONTENT CREATOR",
    company: "Digital Newspaper",
    period: "Mar 2023 - Dec 2023",
    description: "Serving as a Content Creator for the Digital Newspaper, I authored high-impact articles and curated publication content highlighting institutional achievements. By verifying and structuring multi-source data to ensure editorial credibility, I managed timely digital distribution and cross-departmental information channels to drive reader engagement."
  }
];

export default function Experience() {
  const cards = experiences.map((exp, index) => (
    <div
      key={exp.role}
      className={`experience-stack-card card-theme-${index} cursor-target`}
    >
      <div className="experience-header">
        <h3>{exp.role}</h3>
        <h4>{exp.company}</h4>
        <span>{exp.period}</span>
      </div>
      <p className="experience-desc">
        {exp.description}
      </p>
    </div>
  ));

  return (
    <FadeInSection>
      <section id="experience">
        <h2 className="section-title">
          EXPERIENCE
        </h2>
        <div className="experience-stack-wrapper">
          <Stack
            cards={cards}
            autoplay={true}
            autoplayDelay={4500}
            pauseOnHover={true}
            sendToBackOnClick={true}
            sensitivity={120}
          />
        </div>
      </section>
    </FadeInSection>
  );
}