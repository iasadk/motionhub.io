"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
type Props = {
  title: string;
  onClick?: React.MouseEventHandler
};

const AnimatedLink = ({ title, onClick }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer overflow-hidden"
    >
      <AnimatedWord title={title} animation={letterAnimation} isHovered={isHovered}/>
      <div className="absolute top-0">
        <AnimatedWord title={title} animation={letterAnimationTwo} isHovered={isHovered} onClick={onClick}/>
      </div>
    </motion.div>
  );
};

const titleAnimation = {
  rest: {
    transition: {
      staggeredChildren: 1,
    },
  },
  hover: {
    transition: {
      staggeredChildren: 1,
    },
  },
};
const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.1,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const letterAnimationTwo = {
  rest: {
    y: 30,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};
const AnimatedWord = ({
  title,
  animation,
  isHovered,
  onClick
}: {
  title: string;
  animation: any;
  isHovered: boolean,
  onClick?: React.MouseEventHandler,
}) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="whitespace-nowrap relative"
      onClick={onClick}
    >
      {title.split("").map((char, i) =>
        char === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <motion.span
            variants={animation}
            key={i}
            className="relative inline-block whitespace-nowrap"
          >
            {char}
          </motion.span>
        )
      )}
    </motion.span>
  );
};
export default AnimatedLink;
