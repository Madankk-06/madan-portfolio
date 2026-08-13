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
            fontSize: "clamp(3rem, 15.2vw, 19rem)",
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

        {/* Animated Scroll Indicator (User custom CSS chevron design) */}
        <motion.div
          className="hero-scroll-container cursor-target"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="hero-scroll-chevron"></div>
          <div className="hero-scroll-chevron"></div>
          <div className="hero-scroll-chevron"></div>
          <span className="hero-scroll-text">Scroll down</span>
        </motion.div>
      </motion.div>
      <div className="hero-bottom-fade"></div>
    </section>
  );
}