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
            fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
            letterSpacing: "8px",
            marginBottom: "15px",
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
            margin: "0 auto 20px",
            fontSize: "clamp(2rem, 13.5vw, 16rem)",
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
            fontSize="clamp(1.1rem, 3.5vw, 2.4rem)"
            textColor="#9ca3af"
            charset="alpha"
            flipsPerChar={8}
          />
        </motion.div>
      </motion.div>
      <div className="hero-bottom-fade"></div>
    </section>
  );
}