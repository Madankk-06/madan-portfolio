import { motion } from "framer-motion";
import SplitFlapText from "./SplitFlapText";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%"
        }}
      >
        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: "clamp(1.4rem, 3.2vw, 2.5rem)",
            letterSpacing: "12px",
            marginBottom: "10px",
            textTransform: "uppercase",
            color: "#9ca3af",
            fontWeight: 600
          }}
        >
          HELLO I'M
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            margin: "0 auto 10px",
            fontSize: "clamp(3.2rem, 16vw, 15.5rem)",
            lineHeight: "0.85"
          }}
        >
          MADAN KK
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            margin: "10px auto 0",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            overflow: "hidden"
          }}
        >
          <SplitFlapText
            words={[' WELCOME TO MY PORTFOLIO', '    HAPPY TO CONNECT ']}
            cycleDelay={3000}
            padTo={20}
            fontSize="clamp(1.3rem, 4.2vw, 2.8rem)"
            textColor="#9ca3af"
            charset="alpha"
            flipsPerChar={8}
          />
        </motion.div>

        {/* Animated Scroll Indicator (Transformed from user's chevron reference) */}
        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            marginTop: "60px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <svg
            width="36"
            height="54"
            viewBox="0 0 36 54"
            fill="none"
            stroke="#f2ff00"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hero-scroll-arrows"
          >
            <path className="arrow-1" d="M 4,4 L 32,4 L 18,18 Z" />
            <path className="arrow-2" d="M 4,20 L 32,20 L 18,34 Z" />
            <path className="arrow-3" d="M 4,36 L 32,36 L 18,50 Z" />
          </svg>
        </motion.div>
      </motion.div>
      <div className="hero-bottom-fade"></div>
    </section>
  );
}