import FadeInSection from "./FadeInSection";
import Stack from "./ExperienceStack";

const experiences = [
  {
    role: "Inside Sales Associate",
    company: "FacePrep Campus",
    period: "Nov 2024 - Jun 2025",
    points: [
      "Optimized client pipeline and conversion strategies for 50+ weekly prospects.",
      "Spearheaded business development and revenue generation initiatives.",
      "Facilitated complex client coordination and operational leadership.",
      "Analyzed market trends to improve high-value customer engagement."
    ],
  },

  {
    role: "UI/UX Developer [Online]",
    company: "L&T EduTech",
    period: "Apr 2023 - Jun 2023",
    points: [
      "Engineered user-centric digital products using advanced UX research methodologies.",
      "Developed high-fidelity wireframes and interactive prototypes for complex systems.",
      "Conducted thorough usability analysis to enhance accessibility and performance.",
      "Collaborated on design systems to ensure cross-platform visual consistency."
    ],
  },

  {
    role: "Content Creator",
    company: "Digital Newspaper",
    period: "Mar 2023 - Dec 2023",
    points: [
      "Curated digital publication content focusing on institutional achievements and events.",
      "Verified and organized multi-source data to ensure editorial credibility.",
      "Authored high-impact articles for timely publication across digital media channels.",
      "Managed digital distribution and cross-departmental information sourcing."
    ],
  },
];

export default function Experience() {
  const cards = experiences.map(
    (exp, index) => (
      <div
        key={exp.role}
        className={`experience-stack-card card-theme-${index} cursor-target`}
      >
        <div className="experience-header">
          <h3>{exp.role}</h3>

          <h4>{exp.company}</h4>

          <span>{exp.period}</span>
        </div>

        <ul>
          {exp.points.map((point) => (
            <li key={point}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    )
  );

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
            randomRotation={true}
            sendToBackOnClick={true}
            sensitivity={120}
          />
        </div>
      </section>
    </FadeInSection>
  );
}