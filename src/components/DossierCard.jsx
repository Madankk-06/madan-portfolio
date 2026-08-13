import { useState, useRef, useEffect } from "react";
import AboutImg from "../assets/madan-suit.jpg";
import resumePdf from "../assets/resume/Madan_KK_Resume.pdf";
import { portfolioData } from "../data/portfolioData";
import SmokyButton from "./SmokyButton";
import "./DossierCard.css";

export default function DossierCard() {
  const [activeTab, setActiveTab] = useState("main");
  const [tabNumber, setTabNumber] = useState("01");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [isVolumeOpen, setIsVolumeOpen] = useState(false);

  const audioRef = useRef(null);

  const handleTabChange = (tabId, tabNum) => {
    setActiveTab(tabId);
    setTabNumber(tabNum);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((err) => console.log("Audio play blocked:", err));
      setIsPlaying(true);
    }
  };

  const toggleVolumePanel = () => {
    setIsVolumeOpen(!isVolumeOpen);
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="dossier-root">
      <div className="dossier-bg">
        {/* LEFT IMAGE PANEL */}
        <div className="dossier-imgSide">
          <div className="dossier-imgBox">
            <img src={AboutImg} alt="Madan KK Portrait" />
          </div>

          <div className="dossier-sideStar">✦</div>
          <div className="dossier-sideQuote">I Speak in Data and Think like AI</div>

          <div className="dossier-sideCaption">
            <b>Madan KK</b>
            <span>FULL STACK DEVELOPER</span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="dossier-bigTitleBg"></div>
        <div className="dossier-bigTitle">
          <span>Madan</span>
        </div>

        {/* Page number */}
        <div className="dossier-number">{tabNumber}</div>

        {/* RIGHT CONTENT */}
        <div className="dossier-content">
          {/* Top Bar with player and quote */}
          <div className="dossier-topline">
            {/* Music Player */}
            <div className={`dossier-musicBox ${isPlaying ? "playing" : ""} ${isVolumeOpen ? "volumeOpen" : ""}`}>
              <button className="dossier-musicPlay" onClick={toggleMusic}>
                {isPlaying ? "❚❚" : "▶"}
              </button>

              <div className="dossier-musicInfo">
                <b>Imagine Dragons</b>
                <span>Believer</span>
                <div className="dossier-musicBars">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>

              <button className="dossier-volumeToggle" onClick={toggleVolumePanel}>
                VOL
              </button>

              <div className="dossier-volumePanel">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </div>

              <audio
                ref={audioRef}
                src="/Believer_song.mp3"
                loop
              />
            </div>

            <div className="dossier-quote">
              "The only History that is worth a damn is the history i make today."
            </div>
          </div>

          {/* ======================================================
               MAIN PAGE
          ====================================================== */}
          <div className={`dossier-page ${activeTab === "main" ? "active" : ""}`} id="main">
            <div className="dossier-pageScroll allow-default-cursor">
              <h1>Main</h1>
              <h2>identity / origin / focus</h2>

              <div className="dossier-info-grid">
                <div className="dossier-dossierName">
                  <b>Full Name</b>
                  <span>Madan KK</span>
                  <SmokyButton href={resumePdf} download="Madan_KK_Resume.pdf">
                    Resume
                  </SmokyButton>
                </div>

                <div className="dossier-dossierMeta">
                  <p>
                    <b>Role</b>
                    <span>Full Stack Developer</span>
                  </p>
                  <p>
                    <b>Degree</b>
                    <span>MCA (Generative AI)</span>
                  </p>
                  <p>
                    <b>Location</b>
                    <span>Bengaluru, India</span>
                  </p>
                  <p>
                    <b>Specialty</b>
                    <span>Product based thinking</span>
                  </p>
                  <p>
                    <b>Email</b>
                    <span>{portfolioData.email}</span>
                  </p>
                </div>
              </div>

              <div className="dossier-introCard">
                <b>Executive Summary</b>
                <p>
                  An ambitious Generative AI and Data Analytics professional who turns real-world challenges into practical, automated, and high-value technology solutions.
                </p>
              </div>

              <div className="dossier-text">
                <p>
                I'm specialized in combining engineering innovation with data analytics insights. With hands-on expertise in Python, Java, SQL, React.js, and Google Cloud, I have built production-ready tools ranging from custom ML prediction systems to multi-agent workflow engines.
                </p>
                <p>
                  Driven to create scalable, intelligent products that make a measurable impact on business efficiency, workflows, and the technology industry at large.
                </p>
              </div>
            </div>
          </div>

          {/* ======================================================
               EDUCATION PAGE
          ====================================================== */}
          <div className={`dossier-page ${activeTab === "education" ? "active" : ""}`} id="education">
            <div className="dossier-pageScroll allow-default-cursor">
              <h1>Education</h1>
              <h2>academics / core focus / training</h2>

              <div className="dossier-eduFeature no-img">
                <div>
                  <b>Master of Computer Applications (Generative AI)</b>
                  <h3>Alliance University, Bengaluru [2025 - Present]</h3>
                  <p>
                    Developing advanced capabilities in Generative AI, Large Language Models (LLMs), prompt engineering workflows, Retrieval-Augmented Generation (RAG), and cloud architecture integrations.
                  </p>
                </div>
              </div>

              <div className="dossier-eduRow no-img">
                <div className="dossier-eduTextCard">
                  <b>Bachelor of Science (Computer Science)</b>
                  <h3>KPR College of Arts Science and Research, CBE [2025]</h3>
                  <p>
                    CGPA: 7.6 | Acquired fundamental knowledge in database administration (MySQL), data structures, OOP design patterns (Java), software engineering methods, and exploratory Python data analytics.
                  </p>
                </div>
              </div>

              <div className="dossier-eduRow no-img">
                <div className="dossier-eduTextCard">
                  <b>Higher Secondary Certificate</b>
                  <h3>Literacy Mission Matric Hr Sec School, Coimbatore [2022]</h3>
                  <p>
                    Percentage: 78.3% | Completed higher secondary education focusing on computer science, mathematics, and physics.
                  </p>
                </div>
              </div>

              <div className="dossier-eduRow no-img">
                <div className="dossier-eduTextCard">
                  <b>Secondary School Certificate</b>
                  <h3>Literacy Mission Matric Hr Sec School, Coimbatore [2020]</h3>
                  <p>
                    Percentage: 71.4% | Completed general secondary education with strong foundational performance.
                  </p>
                </div>
              </div>



              <div className="dossier-eduNotes">
                <div>
                  <b>Standout Project</b>
                  <p>
                    Developed DataSage, a premium productivity ecosystem integrating over 70+ AI tools and automated data analytics modules.
                  </p>
                </div>
                <div>
                  <b>Key Research Areas</b>
                  <p>
                    Neural network models, prompt sequence chaining, RAG vector search indices, and autonomous agent orchestration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================
               CERTIFICATIONS PAGE
          ====================================================== */}
          <div className={`dossier-page ${activeTab === "certifications" ? "active" : ""}`} id="certifications">
            <div className="dossier-pageScroll allow-default-cursor">
              <h1>Certifications</h1>
              <h2>credentials / courses / specialties</h2>

              <div className="dossier-certList">
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/87DRMQUGOVJO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Generative AI for Everyone</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/AWB50RC945N3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Fundamentals of Reinforcement Learning</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/3U3FLKS649NI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Natural Language Processing with Classification and Vector Spaces</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/579ZM7BSNXAG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Computer Networks and Network Security</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/BP9KDLPETCJ2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Introduction to Software Engineering</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/D93RJUPOI6SQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Neural Networks and Deep Learning</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/BAHOO4AJ0W9Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Java Programming for Beginners</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/YILM3DNI62ZB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Advanced Data Structures and Algorithms</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/L8AFFM4165XR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Introduction to Databases</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/B9P4ZL4IU23N"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Python GUI Development: Design & Build Apps</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/ASL0K64RCZOC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Machine Learning with Python & Statistics</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/A1DTUCAZIR26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Applied Statistics for Data Analytics</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/TOGOJ74GOW9U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Google Sheets - Advanced Topics</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/2P2LXXJTBAP1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Attract and Engage Customers with Digital Marketing</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/L0EHM9V3QIL2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Advanced Prompt Engineering for Everyone</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/7L3LP5ZEJBFE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>User Interface Design and Prototyping</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/2JCRKC3GD06J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Data Analysis Using Python</span>
                </a>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/0R0WB1Z52E7M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-certLinkItem cursor-target"
                >
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Introduction to Front-End Development</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT NAVIGATION */}
        <div className="dossier-nav">
          <button
            className={activeTab === "main" ? "active" : ""}
            onClick={() => handleTabChange("main", "01")}
          >
            <span>Main</span>
          </button>
          <button
            className={activeTab === "education" ? "active" : ""}
            onClick={() => handleTabChange("education", "02")}
          >
            <span>Education</span>
          </button>
          <button
            className={activeTab === "certifications" ? "active" : ""}
            onClick={() => handleTabChange("certifications", "03")}
          >
            <span>Certifications</span>
          </button>
        </div>
      </div>
    </div>
  );
}
