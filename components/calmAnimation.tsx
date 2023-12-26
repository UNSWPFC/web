"use client";

import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import calmAnimation from "../public/illustrations/calmAnimation.json";
import { motion } from "framer-motion";

const LottieAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adjustContainerHeight = () => {
      const container = containerRef.current;
      if (container) {
        const width = container.offsetWidth;
        const aspectRatio = 16 / 9;
        const height = (width / aspectRatio) * 1.5;
        container.style.height = `${height}px`;
      }
    };

    adjustContainerHeight();
    window.addEventListener("resize", adjustContainerHeight);

    return () => {
      window.removeEventListener("resize", adjustContainerHeight);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0,
          ease: "easeInOut",
          scale: {
            type: "spring",
          },
        }}
      >
        <Lottie animationData={calmAnimation} loop autoplay />
      </motion.div>
    </div>
  );
};

export default LottieAnimation;
