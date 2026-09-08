import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface DevCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
  glow?: "emerald" | "purple" | "indigo" | "none";
}

export const DevCard: React.FC<DevCardProps> = ({
  children,
  className = "",
  delay = 0,
  hoverEffect = false,
  glow = "none",
  ...motionProps
}) => {
  const getGlowClass = () => {
    switch (glow) {
      case "emerald":
        return "hover:shadow-emerald-500/10 hover:border-emerald-500/40";
      case "purple":
        return "hover:shadow-purple-500/10 hover:border-purple-500/40";
      case "indigo":
        return "hover:shadow-indigo-500/10 hover:border-indigo-500/40";
      default:
        return "hover:border-[#2A354C]";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        hoverEffect
          ? {
              y: -3,
              transition: { duration: 0.2, ease: "easeOut" },
            }
          : undefined
      }
      className={`bg-[#0B111E] border border-[#1E2638] rounded-2xl transition-colors ${getGlowClass()} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
