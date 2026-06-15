import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import Magnet from "./Magnet";
import avatar from "../assets/avatar/madan-avatar.png";
import resume from "../assets/resume/Madan_KK_Resume.pdf";

export default function Hero() {
  return (
    <section className="hero" id="hero">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          HI, I'M
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {portfolioData.name}
        </motion.h1>
      <Magnet strength={12}>
        <motion.div
          className="avatar-wrapper cursor-target"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="avatar-glow"></div>

          <img
            src={avatar}
            alt="Madan Avatar"
            className="avatar"
          />
        </motion.div>
</Magnet>
        <motion.p
          className="hero-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {portfolioData.role}
        </motion.p>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          "{portfolioData.tagline}"
        </motion.p>

        <motion.div
           className="hero-buttons"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.2 }}
         >
           <a
             href={resume}
             download
             className="primary-btn cursor-target"
           >
             Download Resume
           </a>
         </motion.div>

       </motion.div>

       <div className="hero-bottom-fade"></div>
     </section>
  );
}