"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const BasicOfFramer = (props: Props) => {
  const scaleValue = Array.from({ length: 20 }, (_, i) => 1 + i * 0.1);
  const final = scaleValue.concat(scaleValue.reverse());
  console.log(scaleValue);
  return (
    <motion.div
      //   animate={{
      //     scale: final,
      //     // rotate: [0, 0, 270, 270, 0],
      //     borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      //   }}
      // transition={{
      //   duration: 1,
      //   ease: "easeInOut",
      // //   times: [0, 0.2, 0.5, 0.8, 1],
      //   repeat: Infinity,
      //   repeatDelay: 1,
      // }}
      whileTap={{
        scale: 2,
        borderRadius: "10%",
      }}
      whileInView={{
        scale: 2,
      }}
      viewport={{ once: true }}
      onViewportEnter={(e) => console.log(e)}
      className="w-[200px] h-[200px] bg-amber-50"
    />
  );
};

export default BasicOfFramer;
