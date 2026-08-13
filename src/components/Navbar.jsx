import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "Know me" },
  { id: "stacks", label: "Stacks" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Connect" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // detect intersecting sections centered in viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
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