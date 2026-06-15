import { useEffect, useState } from "react";
const sections = [
  { id: "about", label: "Know me" },
  { id: "stacks", label: "Stacks" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Connect" },
];

export default function Navbar() {
  const [active, setActive] =
    useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos =
        window.scrollY + 150;

      sections.forEach((section) => {
        const element =
          document.getElementById(section.id);

        if (!element) return;

        if (
          scrollPos >= element.offsetTop &&
          scrollPos <
            element.offsetTop +
              element.offsetHeight
        ) {
          setActive(section.id);
        }
      });
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

  return (
    <nav className="navbar">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`nav-link cursor-target ${
            active === section.id
              ? "active"
              : ""
          }`}
        >
          {section.label.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}