import { useEffect, useRef, useState } from "react";
import { portfolioData } from "../data/portfolioData";
import FadeInSection from "./FadeInSection";

export default function About() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect =
        sectionRef.current.getBoundingClientRect();

      const start =
        window.innerHeight * 0.35;

      const end =
        -window.innerHeight * 0.45;

      const percentage = Math.min(
        Math.max(
          (start - rect.top) /
            (start - end),
          0
        ),
        1
      );

      setProgress(percentage);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const text = portfolioData.about;

  return (
    <FadeInSection>
      <section
        id="about"
        ref={sectionRef}
      >
        <h2 className="section-title">
          KNOW ME
        </h2>

        <div className="about-reveal">
          <div className="about-text">
          {text.split("").map(
            (char, index) => {
              const revealPoint =
                (index / text.length) * 0.95;

              return (
                <span
                  key={index}
                  className={
                    progress > revealPoint
                      ? "char-active"
                      : "char-inactive"
                  }
                >
                  {char}
                </span>
              );
            }
          )}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}