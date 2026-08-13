import { useEffect, useRef } from "react";
import "./ProjectsCube.css";
import SmokyButton from "./SmokyButton";
import FadeInSection from "./FadeInSection";

import toolkitImg from "../assets/projects/toolkit.jpg";
import routingImg from "../assets/projects/routing.jpg";
import anomalyImg from "../assets/projects/anomaly.jpg";
import sentimentImg from "../assets/projects/sentiment.jpg";
import signatureImg from "../assets/projects/signature.jpg";
import translatorImg from "../assets/projects/translator.jpg";

/* ─── project data ─── */
const PROJECTS = [
  {
    name: "TOOLKIT",
    faceName: "TOOLKIT",
    tag: "01 — Developer Tools",
    heading: "TOOLKIT\n APPLICATION",
    description:
      "Developed an AI-powered productivity platform integrating 70+ smart tools with intelligent data analysis, real-time insights, and personalized workflow automation.",
    tech: ["React", "TypeScript", "Firebase", "Three.js"],
    github: "https://github.com/Madankk-06/TOOLKIT",
    image: toolkitImg,
  },
  {
    name: "Route Optimization",
    faceName: "ROUTES",
    tag: "02 — Short Route",
    heading: "Last-Mile Routing \n Analyst",
    description:
      "Computed shortest travel paths over a Bengaluru road-network graph and integrated the GoogleMaps API for live visualization, reducing the routing time.",
    tech: ["Python", "Streamlit", "NetworkX", "GMap"],
    github: "https://github.com/Madankk-06/shortest-route-optimization",
    image: routingImg,
  },
  {
    name: "Anomaly Detection",
    faceName: "ANOMALY",
    tag: "03 — Machine Learning",
    heading: " Price Anomalie \n Detector",
    description:
      "Engineered 12 predictive features from 50K vehicle records to detect anomalous pricing patterns. Analysed statistical methods and unsupervised anomaly detection to flag irregular pricing patterns, validated findings with data visualizations.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    github:
      "https://github.com/Madankk-06/Anomoly_Detection_Car_datas_Data-science",
    image: anomalyImg,
  },
  {
    name: "Youtube comment analysis",
    faceName: "Opinion and Vibe Checker",
    tag: "04 — Deep Learning",
    heading: "Opinion and\n Vibe Checker",
    description:
      "Built an end-to-end data pipeline pulling comment data via API, cleaning and structuring it in MySQL, and NLP sentiment classification to surface actionable audience insights on a dashboard.",
    tech: ["Python", "API V3", "NLTK", "MySQL"],
    github: "https://github.com/Madankk-06/Mk-Homes-project",
    image: sentimentImg,
  },
  {
    name: "Signature Audit",
    faceName: "AUDIT",
    tag: "05 — Computer Vision",
    heading: "BANK CHEQUE \n AUDIT SYSTEM",
    description:
      "Intelligent bank cheque signature verification system leveraging computer vision and deep learning to authenticate signatures and detect potential fraud.",
    tech: ["Python", "OpenCV", "Deep Learning"],
    github:
      "https://github.com/Madankk-06/Bank-Cheque-Signature-Audit-System",
    image: signatureImg,
  },
  {
    name: "Realtime Transcriper",
    faceName: "CAR DATA",
    tag: "06 — Natural Language Processing",
    heading: "EchoLingo",
    description:
      "Realtime local language translator mobile application, 100% Offline, Customized Voice Synthesis, Organic Light Glassmorphic UI.",
    tech: ["Java", "Neural Opus-MT", "Android SDK"],
    github:
      "https://github.com/Madankk-06/EchoLingo-Realtime-Translator",
    image: translatorImg,
  },
];

const ALL_PROJECTS = [
  ...PROJECTS,
  {
    name: "madan-portfolio",
    heading: "Portfolio Website",
    description: "Premium personal portfolio website showcasing Generative AI applications, interactive elements, 3D shader backgrounds, and full-stack tools with standard SEO and clean visual optimization.",
    tech: ["React", "Vite", "Framer Motion", "OGL"],
    github: "https://github.com/Madankk-06/madan-portfolio"
  },
  {
    name: "Recipe-recommendation-agent",
    heading: "Recipe Recommendation Agent",
    description: "Built a real-time recipe recommendation agent that accepts available ingredients and returns multi-cuisine dish options with preparation guides. Implemented a smart shopping list feature.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Madankk-06/Recipe-recommendation-agent"
  },
  {
    name: "Optimal-Action-Preparation-System",
    heading: "Optimal Action Preparation System (OAPS)",
    description: "Optimal Action Preparation System (OAPS) is a UI/UX design project focused on addressing one of the most common challenges faced by students, professionals, and entrepreneurs: procrastination.",
    tech: ["Figma", "UI/UX"],
    github: "https://github.com/Madankk-06/Optimal-Action-Preparation-System"
  },
  {
    name: "Mk-Homes-project",
    heading: "MK Homes Smart UI",
    description: "Smart home dashboard featuring an AI chatbot, real-time power monitoring, and per-room appliance control with 6 fully responsive pages.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Madankk-06/Mk-Homes-project"
  },
  {
    name: "Quiz-system-helps-professionals",
    heading: "Quiz System Helps Professionals",
    description: "An interactive assessment platform designed to help professionals test their skills, track technical proficiency, and identify domain knowledge gaps through customized quizes.",
    tech: ["Java", "OOP & File handling", "Swing"],
    github: "https://github.com/Madankk-06/OnlineQuizSystem"
  },
  {
    name: "GradePredictor",
    heading: "Student Grade Predictor",
    description: "A predictive machine learning application that forecasts student academic performance and final grades based on demographic, social, and academic history variables.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Flask"],
    github: "https://github.com/Madankk-06/GradePredictor"
  }
];

/* ─── constants ─── */
const FACE_ORDER = ["top", "front", "right", "back", "left", "bottom"];

const STOPS = [
  { rx: 90, ry: 0 },
  { rx: 0, ry: 0 },
  { rx: 0, ry: -90 },
  { rx: 0, ry: -180 },
  { rx: 0, ry: -270 },
  { rx: -90, ry: -360 },
];

const easeIO = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

/* ─── component ─── */
export default function Projects() {
  const galleryRef = useRef(null);
  const stickyRef = useRef(null);
  const cubeRef = useRef(null);
  const cardsRef = useRef([]);
  const dotsRef = useRef([]);
  const captionNumRef = useRef(null);
  const captionNameRef = useRef(null);
  const hudPctRef = useRef(null);
  const hudFillRef = useRef(null);
  const hudNameRef = useRef(null);

  useEffect(() => {
    let raf;
    let lastNow = performance.now();
    let lastIdx = -1;

    const getProgress = () => {
      const el = galleryRef.current;
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return 0;
      return Math.max(0, Math.min(1, -rect.top / scrollable));
    };

    let smooth = getProgress();

    const updateActive = (idx) => {
      if (idx === lastIdx) return;
      lastIdx = idx;

      cardsRef.current.forEach((card, i) => {
        if (card) card.classList.toggle("pcube-card-active", i === idx);
      });

      dotsRef.current.forEach((dot, i) => {
        if (dot) dot.classList.toggle("active", i === idx);
      });

      if (captionNumRef.current)
        captionNumRef.current.textContent = String(idx + 1).padStart(2, "0");
      if (captionNameRef.current)
        captionNameRef.current.textContent = PROJECTS[idx].heading.replace(/\s*\n\s*/g, " ");
      if (hudNameRef.current)
        hudNameRef.current.textContent = PROJECTS[idx].heading.replace(/\s*\n\s*/g, " ");
    };

    const frame = (now) => {
      raf = requestAnimationFrame(frame);

      const dt = Math.min((now - lastNow) / 1000, 0.05);
      lastNow = now;

      const tgt = getProgress();
      smooth += (tgt - smooth) * (1 - Math.exp(-dt * 8));
      smooth = Math.max(0, Math.min(1, smooth));

      /* ── check active state ── */
      const el = galleryRef.current;
      if (el && stickyRef.current) {
        const rect = el.getBoundingClientRect();
        const scrollable = el.offsetHeight - window.innerHeight;
        const isActive = rect.top <= 10 && rect.top >= -(scrollable + 10);
        stickyRef.current.classList.toggle("pcube-active", isActive);
      }

      /* ── rotate cube ── */
      const N = STOPS.length;
      const t = smooth * (N - 1);
      const i = Math.min(Math.floor(t), N - 2);
      const f = easeIO(t - i);
      const a = STOPS[i];
      const b = STOPS[i + 1];
      const rx = a.rx + (b.rx - a.rx) * f;
      const ry = a.ry + (b.ry - a.ry) * f;

      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      }

      /* ── HUD ── */
      const pct = Math.round(smooth * 100);
      if (hudPctRef.current)
        hudPctRef.current.textContent = String(pct).padStart(3, "0") + "%";
      if (hudFillRef.current) hudFillRef.current.style.width = `${pct}%`;

      /* ── active project ── */
      const idx = Math.min(
        PROJECTS.length - 1,
        Math.round(smooth * (PROJECTS.length - 1))
      );
      updateActive(idx);
    };

    updateActive(0);
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleDotClick = (idx) => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const galleryTop = gallery.getBoundingClientRect().top + window.scrollY;
    const scrollable = gallery.offsetHeight - window.innerHeight;
    const progress = idx / (PROJECTS.length - 1);
    const targetY = galleryTop + progress * scrollable;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <section id="projects">
      <FadeInSection once={true}>
        <h2 className="section-title">Projects</h2>
      </FadeInSection>

      {/* ── Cube Gallery ── */}
      <div
        className="pcube-gallery"
        ref={galleryRef}
        style={{ height: `${PROJECTS.length * 100}vh` }}
      >
        <div className="pcube-sticky" ref={stickyRef}>
          {/* 3D Scene */}
          <div className="pcube-scene">
            <div className="pcube" ref={cubeRef}>
              {PROJECTS.map((p, i) => (
                <div key={i} className="pcube-face" data-face={FACE_ORDER[i]}>
                  {p.image && <img src={p.image} alt={p.name} />}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="pcube-dots">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                ref={(el) => (dotsRef.current[i] = el)}
                className={`pcube-dot ${i === 0 ? "active" : ""}`}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          {/* Face Caption */}
          <div className="pcube-caption">
            <span className="pcube-caption-num" ref={captionNumRef}>
              01
            </span>
            <span className="pcube-caption-name" ref={captionNameRef}>
              {PROJECTS[0].heading.replace(/\s*\n\s*/g, " ")}
            </span>
          </div>

          {/* Progress HUD */}
          <div className="pcube-hud">
            <span ref={hudPctRef}>000%</span>
            <div className="pcube-hud-bar">
              <div className="pcube-hud-fill" ref={hudFillRef} />
            </div>
            <div className="pcube-hud-name" ref={hudNameRef}>
              {PROJECTS[0].heading.replace(/\s*\n\s*/g, " ")}
            </div>
          </div>
        </div>

        {/* Scrollable text cards overlay */}
        <div className="pcube-scroll-container">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className={`pcube-section ${i % 2 !== 0 ? "right-align" : ""}`}
            >
              <div
                ref={(el) => (cardsRef.current[i] = el)}
                className={`pcube-card ${i % 2 !== 0 ? "right" : ""}`}
              >
                <div className="pcube-card-line" />
                <div className="pcube-card-tag">{p.tag}</div>
                <h3 className="pcube-card-title">{p.heading}</h3>
                <p className="pcube-card-desc">{p.description}</p>
                <div className="pcube-card-tech">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: "1.5rem",
                    display: "flex",
                    justifyContent: i % 2 !== 0 ? "flex-end" : "flex-start"
                  }}
                >
                  <SmokyButton
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW
                  </SmokyButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── All Projects Grid ── */}
      <FadeInSection once={true} amount={0.1}>
        <div className="pcube-all-section">
          <h3 className="pcube-all-title">Browse More</h3>
          <div className="pcube-all-grid">
            {ALL_PROJECTS.map((p, i) => (
              <a
                key={i}
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pcube-all-card"
              >
                <span className="pcube-all-card-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4>{p.heading.replace(/\s*\n\s*/g, " ")}</h4>
                <p>{p.description}</p>
                <div className="pcube-all-card-tech">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}