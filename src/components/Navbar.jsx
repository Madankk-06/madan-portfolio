import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "Know me" },
  // { id: "stacks", label: "Stacks" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Connect" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ratios = {};

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        ratios[entry.target.id] = entry.intersectionRatio;
      });

      // Find the section currently occupying the largest area of the viewport
      let maxRatio = 0;
      let maxSectionId = "";

      sections.forEach((section) => {
        const ratio = ratios[section.id] || 0;
        if (ratio > maxRatio) {
          maxRatio = ratio;
          maxSectionId = section.id;
        }
      });

      if (maxSectionId) {
        setActive(maxSectionId);
      }
    };

    // Use multiple thresholds to check section coverage continuously during scrolls
    const observerOptions = {
      root: null,
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    // Fallback boundaries handler (top of page and bottom of page)
    const handleScrollFallback = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      if (winHeight + scrollY >= docHeight - 80) {
        setActive("contact");
        return;
      }

      if (scrollY < 150) {
        setActive("about");
        return;
      }
    };

    window.addEventListener("scroll", handleScrollFallback, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollFallback);
    };
  }, []);

  return (
    <nav className="navbar">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`nav-link cursor-target ${
            active === section.id ? "active" : ""
          }`}
        >
          {section.label.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}