import { useEffect, useState } from "react";
import FadeInSection from "./FadeInSection";
import { motion, AnimatePresence } from "framer-motion";

import portfolioImg from "../assets/projects/portfolio.png";
import mkhomesImg from "../assets/projects/mkhomes.png";
import routeImg from "../assets/projects/route-optimization.png";
import recipeImg from "../assets/projects/recipe-agent.png";
import fraudImg from "../assets/projects/car-fraud.png";
import oapsImg from "../assets/projects/oaps.png";
import magazineImg from "../assets/projects/tech-magazine.png";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Premium personal portfolio showcasing AI, Full Stack, UI/UX projects, interactive experiences and advanced animations.",
    tech: [
      "React",
      "Vite",
      "Framer Motion",
      "OGL",
    ],
    github: "https://github.com/Madankk-06/madan-portfolio",
    image: portfolioImg,
  },

  {
    title: "MK-Homes Smart UI",
    description:
      "Built a smart home dashboard featuring an AI chatbot, real-time power monitoring panel, and per-room appliance control system. Designed 6 pages including device management, user profile, and settings with a fully responsive UI.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Madankk-06/Mk-Homes-project",
    image: mkhomesImg,
  },

  {
    title: "Short Route Optimization",
    description:
      "This project implements a Shortest Route Optimization System similar to real-world ride-sharing and navigation platforms like Rapido, Uber, and Google Maps. The system uses Dijkstra’s Algorithm to compute the shortest path between locations represented as a weighted graph. It provides an efficient way to determine optimal routes, minimizing travel distance and improving decision-making. The project includes both a console-based system and a modern web interface using Streamlit, along with graph visualization and Google Maps integration for real-world relevance.",
    tech: [
      "Python",
      "Streamlit",
      "NetworkX",
      "Google Maps",
    ],
    github: "https://github.com/Madankk-06/shortest-route-optimization",
    image: routeImg,
  },

  {
    title: "Recipe Recommendation Agent",
    description:
      "Built a real-time recipe recommendation agent that accepts available ingredients and returns multi-cuisine dish options with preparation guides.Implemented a smart shopping list feature that auto-identifies missing ingredients from selected recipes. Included a user agreement and onboarding flow; tested with 20+ recipe combinations across 5 cuisine types.",
    tech: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/Madankk-06/Recipe-recommendation-agent",
    image: recipeImg,
  },

  {
    title: "Pricing Fraud Detection",
    description:
      "Engineered 12 predictive features (manufacturer, fuel type, mileage, engine size, vehicle age, pricing ratios, and usage metrics) from a dataset of 50,000 vehicle records to detect anomalous second-hand car pricing patterns. Implemented Isolation Forest, compared against Local Outlier Factor (LOF), Elliptic Envelope, and DBSCAN as benchmark anomaly detection models. Identified 2,450 high-risk pricing anomalies (5% of records) through ensemble anomaly detection techniques and statistical feature analysis.",
    tech: [
      "Python",
      "Scikit-Learn",
      "Pandas",
    ],
    github: "https://github.com/Madankk-06/Anomoly_Detection_Car_datas_Data-science",
    image: fraudImg,
  },

  {
    title: "Optimal Action Preparation System",
    description:
      "Optimal Action Preparation System (OAPS) is a UI/UX design project focused on addressing one of the most common challenges faced by students, professionals, and entrepreneurs: procrastination. The goal of the system is to provide users with a structured environment that helps them prepare, organize, prioritize, and execute tasks more effectively. Rather than simply managing tasks, OAPS focuses on preparing users for action, making it easier to begin and complete important work.",
    tech: [
      "Figma",
      "UI/UX",
    ],
    github: "https://github.com/Madankk-06/Optimal-Action-Preparation-System",
    image: oapsImg,
  },

  {
    title: "Technical Lifestyle Magazine",
    description:
      "Tech Lifestyle Magazine is a 12-page editorial publication designed and developed as part of an industry interaction and knowledge-sharing initiative. The magazine captures interviews, experiences, technical perspectives, and career insights from professionals working at Tech Mahindra, Electronic City, Bengaluru. It combines editorial storytelling with modern visual design to create an engaging and informative reading experience. This publication was independently conceptualized, designed, and compiled using Canva and Figm",
    tech: [
      "Canva",
      "Figma",
    ],
    github: "https://github.com/Madankk-06/Technical-Lifestyle-Magazine",
    image: magazineImg,
  },
];

export default function Projects() {
  const [active, setActive] =
    useState(0);

  const [rotation, setRotation] =
    useState(0);

  const [isHovered, setIsHovered] =
    useState(false);

  const [hoveredCard, setHoveredCard] =
    useState(null);

  const [direction, setDirection] =
    useState(-1);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setRotation(
        (prev) =>
          prev +
          direction *
            (360 / projects.length)
      );

      if (direction === -1) {
        setActive(
          (prev) =>
            (prev + 1) %
            projects.length
        );
      } else {
        setActive(
          (prev) =>
            (prev -
              1 +
              projects.length) %
            projects.length
        );
      }
    }, 2000);

    return () =>
      clearInterval(interval);
  }, [isHovered, direction]);

  const rotateLeft = () => {
    setDirection(1);

    setRotation(
      (prev) =>
        prev +
        (360 / projects.length)
    );

    setActive(
      (prev) =>
        (prev -
          1 +
          projects.length) %
        projects.length
    );
  };

  const rotateRight = () => {
    setDirection(-1);

    setRotation(
      (prev) =>
        prev -
        (360 / projects.length)
    );

    setActive(
      (prev) =>
        (prev + 1) %
        projects.length
    );
  };

  const selectedProject =
    projects[active];

  return (
    <FadeInSection>
      <section id="projects">
        <h2 className="section-title">
          PROJECTS
        </h2>

        <div className="projects-carousel-wrapper">

          <button
            className="carousel-btn"
            onClick={rotateLeft}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className="projects-carousel"
            onMouseEnter={() =>
              setIsHovered(true)
            }
            onMouseLeave={() =>
              setIsHovered(false)
            }
          >
            {projects.map(
              (
                project,
                index
              ) => {
                const angle =
                  index *
                    (360 /
                      projects.length) +
                  rotation;

                return (
                  <div
                    key={project.title}
                    className={`carousel-card cursor-target ${
                      active === index
                        ? "active"
                        : ""
                    } ${
                      hoveredCard ===
                      index
                        ? "hovered"
                        : ""
                    }`}
                    onMouseEnter={() =>
                      setHoveredCard(
                        index
                      )
                    }
                    onMouseLeave={() =>
                      setHoveredCard(
                        null
                      )
                    }
                    onClick={() => {
                      setActive(
                        index
                      );

                      setRotation(
                        -index *
                          (360 /
                            projects.length)
                      );
                    }}
                    style={{
                      transform: `
                        rotateY(${angle}deg)
                        translateZ(${
                          windowWidth < 768
                            ? (hoveredCard === index ? 240 : 200)
                            : (hoveredCard === index ? 450 : 360)
                        }px)
                        scale(${
                          hoveredCard ===
                          index
                            ? 1.08
                            : 1
                        })
                      `,
                    }}
                  >
                    <img
                      src={
                        project.image
                      }
                      alt={
                        project.title
                      }
                    />

                    <div className="card-reflection"></div>

                    <div className="card-overlay">
                      {
                        project.title
                      }
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <button
            className="carousel-btn"
            onClick={rotateRight}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

        </div>

        <div className="project-details">

          <h3>
            {
              selectedProject.title
            }
          </h3>

          <p>
            {
              selectedProject.description
            }
          </p>

          <div className="project-tech">
            {selectedProject.tech.map(
              (tech) => (
                <span key={tech}>
                  {tech}
                </span>
              )
            )}
          </div>

          <a
            href={
              selectedProject.github
            }
            target="_blank"
            rel="noreferrer"
            className="project-btn cursor-target"
          >
            View Project
          </a>

        </div>
      </section>
    </FadeInSection>
  );
}