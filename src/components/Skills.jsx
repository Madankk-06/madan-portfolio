import { useState, useEffect } from "react";
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

export default function Skills() {
  const [activeIndices, setActiveIndices] = useState(new Set());
  const [cols, setCols] = useState(5);

  useEffect(() => {
    const updateCols = () => {
      const width = window.innerWidth;
      if (width <= 768) setCols(3);
      else if (width <= 1024) setCols(4);
      else setCols(5);
    };

    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const handleHover = (index) => {
    const x1 = index % cols;
    const y1 = Math.floor(index / cols);
    const totalItems = portfolioData.stacks.length;

    for (let i = 0; i < totalItems; i++) {
      const x2 = i % cols;
      const y2 = Math.floor(i / cols);
      const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
      
      const delay = distance * 85; 
      
      setTimeout(() => {
        setActiveIndices(prev => new Set([...prev, i]));
        setTimeout(() => {
          setActiveIndices(prev => {
            const next = new Set(prev);
            next.delete(i);
            return next;
          });
        }, 250); 
      }, delay);
    }
  };

  return (
    <FadeInSection>
      <section id="stacks" className="skills-section">
        <h2 className="section-title">
          STACKS
        </h2>

        <div className="stacks-3d-grid">
          {portfolioData.stacks.map((skill, index) => (
            <SkillCube 
              key={skill.name} 
              skill={skill} 
              isHovered={activeIndices.has(index)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => setActiveIndices(new Set())}
            />
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}