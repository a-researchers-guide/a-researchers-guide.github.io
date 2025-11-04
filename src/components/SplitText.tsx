import React from "react";
import { motion, type Variants, type Easing } from "framer-motion";

export interface SplitTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  textAlign?: React.CSSProperties["textAlign"];
  stagger?: number;
  delay?: number;
  duration?: number;
  ease?: Easing | Easing[];
  from?: Variants["hidden"];
  to?: Variants["visible"];
  animationDelay?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  tag = "p",
  textAlign = "center",
  stagger = 0.02,
  delay = 0,
  duration = 0.4,
  ease = "backOut",
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
}) => {
  const Tag = tag;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: from,
    visible: {
      ...to,
      transition: { duration, ease },
    },
  };

  return (
    <Tag
      className={`overflow-hidden whitespace-normal ${className}`}
      style={{ textAlign, willChange: "transform, opacity" }}
    >
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-hidden
        style={{ display: "inline" }}
      >
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={childVariants}
                className="inline-block"
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
            {wordIndex < text.split(" ").length - 1 ? "\u00A0" : ""}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default SplitText;
