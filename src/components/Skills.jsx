import { useState, useEffect, useCallback } from "react";
import { portfolioData } from "../data/portfolioData";
import FadeInSection from "./FadeInSection";
import "./SkillCube.css";

function SkillCube({ skill, isHovered, onMouseEnter, onMouseLeave }) {
  const isDarkLogo = ["Next.js", "GitHub", "Algorithms", "Scikit-Learn"].includes(skill.name);
  
  return (
    <div 
      className="cube-wrapper"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="cube-container">
        <div className={`cube cursor-target ${isHovered ? "is-hovered" : ""}`}>
          <div className="cube-face face-front">
            <img 
              src={skill.logo} 
              alt={skill.name} 
              className={`cube-logo ${isDarkLogo ? "dark-logo" : ""}`} 
            />
          </div>
          <div className="cube-face face-back"></div>
          <div className="cube-face face-right"></div>
          <div className="cube-face face-left"></div>
          <div className="cube-face face-top"></div>
          <div className="cube-face face-bottom"></div>
        </div>
      </div>
      <span className="skill-name-floating">{skill.name}</span>
    </div>
  );
}

const STACK_CATEGORIES = [
  {
    name: "Languages & Foundations",
    icon: "bi bi-braces",
    skillNames: ["Java", "Python", "JavaScript", "Algorithms"]
  },
  {
    name: "Artificial Intelligence & ML",
    icon: "bi bi-cpu",
    skillNames: ["Gen AI", "NLP", "R - Learning", "ADK", "PyTorch", "Scikit-Learn", "Jupyter"]
  },
  {
    name: "Frameworks & Design",
    icon: "bi bi-window-sidebar",
    skillNames: ["React.js", "Next.js", "Vite", "Figma"]
  },
  {
    name: "Back-End & Databases",
    icon: "bi bi-database",
    skillNames: ["Node.js", "REST APIs", "MySQL", "MongoDB", "Firebase", "Supabase"]
  },
  {
    name: "Cloud & Dev Tools",
    icon: "bi bi-cloud",
    skillNames: ["Google Cloud", "AWS", "Git", "GitHub"]
  }
];

export default function Skills() {
  const [activeSkills, setActiveSkills] = useState(new Set());

  // Group stacks dynamically from portfolioData
  const categories = STACK_CATEGORIES.map(cat => ({
    ...cat,
    items: cat.skillNames.map(name => 
      portfolioData.stacks.find(s => s.name === name)
    ).filter(Boolean)
  }));

  // Impressive 1D horizontal row-ripple wave animation
  const handleHover = useCallback((categoryIndex, itemIndex) => {
    const category = categories[categoryIndex];
    if (!category) return;
    const totalItems = category.items.length;

    for (let i = 0; i < totalItems; i++) {
      const distance = Math.abs(itemIndex - i);
      const delay = distance * 85; // 85ms delay per step along the row
      const skillName = category.items[i].name;

      setTimeout(() => {
        setActiveSkills(prev => new Set([...prev, skillName]));
        setTimeout(() => {
          setActiveSkills(prev => {
            const next = new Set(prev);
            next.delete(skillName);
            return next;
          });
        }, 250); 
      }, delay);
    }
  }, [categories]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    // Trigger a gentle wave in a random category every 4.5s on mobile
    const interval = setInterval(() => {
      const randomCatIdx = Math.floor(Math.random() * categories.length);
      const category = categories[randomCatIdx];
      if (category && category.items.length > 0) {
        const randomItemIdx = Math.floor(Math.random() * category.items.length);
        handleHover(randomCatIdx, randomItemIdx);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [categories, handleHover]);

  return (
    <FadeInSection>
      <section id="stacks" className="skills-section">
        <h2 className="section-title">
          STACKS
        </h2>

        <div className="stacks-categories-container">
          {categories.map((cat, catIdx) => (
            <div key={cat.name} className="stacks-category-group">
              <div className="stacks-category-header">
                <i className={cat.icon}></i>
                <h3>{cat.name}</h3>
                <div className="stacks-category-line"></div>
              </div>

              <div className="stacks-3d-grid">
                {cat.items.map((skill, itemIdx) => (
                  <SkillCube 
                    key={skill.name} 
                    skill={skill} 
                    isHovered={activeSkills.has(skill.name)}
                    onMouseEnter={() => handleHover(catIdx, itemIdx)}
                    onMouseLeave={() => setActiveSkills(new Set())}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}