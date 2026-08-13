import FadeInSection from "./FadeInSection";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const experiences = [
  {
    role: "INTERNSHIP",
    company: "FacePrep Campus",
    period: "Nov 2024 - Jun 2025",
    description: "During my internship at FacePrep Campus, I optimized the client pipeline and conversion strategies for over 50 weekly prospects. I facilitated complex client coordination and operational leadership while analyzing market trends to improve high-value customer engagement. Additionally, I tracked and managed a pipeline of 100+ weekly prospects using spreadsheet-based tracking and response patterns to prioritize outreach toward higher-intent leads."
  },
  {
    role: "UI/UX DEVELOPER [ONLINE]",
    company: "L&T EduTech",
    period: "Apr 2023 - Jun 2023",
    description: "As a UI/UX Developer at L&T EduTech, I engineered user-centric digital products using advanced UX research methodologies. I developed high-fidelity wireframes and interactive prototypes for complex systems, conducted thorough usability analyses to enhance performance, and collaborated on cross-platform design systems to ensure visual consistency."
  },
  {
    role: "CONTENT CREATOR",
    company: "Digital Newspaper",
    period: "Mar 2023 - Dec 2023",
    description: "In my role as a Content Creator for the Digital Newspaper, I curated publication content focusing on institutional achievements and events. I verified and organized multi-source data to ensure editorial credibility, authored high-impact articles for timely publication across digital media channels, and managed digital distribution and cross-departmental information sourcing."
  }
];

export default function Experience() {
  return (
    <FadeInSection>
      <section id="experience">
        <h2 className="section-title">
          EXPERIENCE
        </h2>
        
        <div className="experience-stack-wrapper">
          <ScrollStack 
            useWindowScroll={true} 
            itemDistance={208} 
            itemScale={0.03}
            itemStackDistance={30}
            stackPosition="20%"
            scaleEndPosition="10%"
            baseScale={0.85}
            blurAmount={0}
          >
            {experiences.map((exp, index) => (
              <ScrollStackItem 
                key={exp.role} 
                itemClassName={`experience-stack-card card-theme-${index} cursor-target`}
              >
                <div className="experience-header">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <span>{exp.period}</span>
                </div>
                <p className="experience-description-text">
                  {exp.description}
                </p>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>
    </FadeInSection>
  );
}