import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

// ─── variants ────────────────────────────────────────────────────────────────

const itemVariants = {
  hidden: (direction) => ({
    opacity: 0,
    filter: "blur(8px)",
    y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
    x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
    scale: 0.97,
  }),
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    x: 0,
    scale: 1,
  },
  exit: (direction) => ({
    opacity: 0,
    filter: "blur(8px)",
    y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
    x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
    scale: 0.97,
  }),
};

// Impressive mobile specific spring perspective reveal
const mobileItemVariants = {
  hidden: () => ({
    opacity: 0,
    scale: 0.88,
    rotateX: 10,
    y: 35,
    filter: "blur(4px)",
  }),
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.88,
    y: 35,
  },
};

const containerVariants = (staggerDelay) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.05,
    },
  },
  exit: {},
});

// ─── mobile viewport threshold ───────────────────────────────────────────────

function useViewportAmount(amount) {
  const [resolved, setResolved] = useState(amount);

  useEffect(() => {
    const check = () => {
      setResolved(window.innerWidth < 768 ? Math.min(amount, 0.1) : amount);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [amount]);

  return resolved;
}

// ─── component ───────────────────────────────────────────────────────────────

/**
 * FadeInSection
 */
export default function FadeInSection({
  children,
  direction = "up",
  delay = 0,
  duration = 0.75,
  stagger = false,
  staggerDelay = 0.12,
  cascade = false,
  once = true,
  amount = 0.15,
  className = "",
}) {
  const reducedMotion = useReducedMotion();
  const resolvedAmount = useViewportAmount(amount);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const transition = {
    duration,
    ease: [0.22, 1, 0.36, 1],
    delay,
    filter: { duration: duration * 0.8 },
  };

  const activeVariants = isMobile ? mobileItemVariants : itemVariants;

  // ── reduced motion ────────────────────────────────────────────────────────
  if (reducedMotion) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once, amount: resolvedAmount }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  // ── cascade ───────────────────────────────────────────────────────────────
  if (cascade) {
    return (
      <motion.div
        className={className}
        variants={containerVariants(staggerDelay)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: resolvedAmount }}
        style={{ "--fade-duration": `${duration}s` }}
      >
        <motion.div
          custom={direction}
          variants={activeVariants}
          transition={isMobile ? undefined : transition}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  }

  // ── stagger ───────────────────────────────────────────────────────────────
  if (stagger) {
    const kids = Array.isArray(children) ? children : [children];
    return (
      <motion.div
        className={className}
        variants={containerVariants(staggerDelay)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: resolvedAmount }}
      >
        {kids.map((child, i) => (
          <motion.div
            key={i}
            custom={direction}
            variants={activeVariants}
            transition={isMobile ? undefined : transition}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // ── default ──────────────────────────────────────────────────────────────
  return (
    <motion.div
      className={className}
      custom={direction}
      variants={activeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: resolvedAmount }}
      transition={isMobile ? undefined : transition}
    >
      {children}
    </motion.div>
  );
}