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
  // FIX: explicit exit state so blur resets cleanly when once={false}
  exit: (direction) => ({
    opacity: 0,
    filter: "blur(8px)",
    y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
    x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
    scale: 0.97,
  }),
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
      // On narrow screens amount=0.15 fires too early — bump it on desktop
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
 *
 * Props:
 *   direction     "up" | "down" | "left" | "right"  (default "up")
 *   delay         number in seconds                  (default 0)
 *   duration      number in seconds                  (default 0.75)
 *   stagger       boolean — stagger direct children  (default false)
 *   staggerDelay  seconds between each child         (default 0.12)
 *   cascade       boolean — stagger DOM children of
 *                 a single wrapper without needing
 *                 an explicit array                  (default false)
 *   once          boolean — animate once or replay   (default true)
 *   amount        0–1 how much must be in view       (default 0.15)
 *   className     string
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

  const transition = {
    duration,
    ease: [0.22, 1, 0.36, 1],
    delay,
    filter: { duration: duration * 0.8 },
  };

  // ── reduced motion: opacity-only, no movement, no blur ───────────────────
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

  // ── cascade: wraps a single parent and staggers its DOM children ──────────
  // Use this when you can't pass an array but want sequential child animation.
  // e.g. <FadeInSection cascade><ul>...</ul></FadeInSection>
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
          variants={itemVariants}
          transition={transition}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  }

  // ── stagger: explicit array of children animate in sequence ───────────────
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
            variants={itemVariants}
            transition={transition}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // ── default: single section fade ─────────────────────────────────────────
  return (
    <motion.div
      className={className}
      custom={direction}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: resolvedAmount }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}