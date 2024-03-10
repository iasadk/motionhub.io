"use client";
import { Container } from "@/Components/Container";
import useMousePosition from "@/hooks/useMousePosition";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
type Props = {};

const Page = (props: Props) => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const CURSOR_SIZE = !isHovered ? 30 : 400;
  // const CURSOR_ADJUSTER = !isHovered ? 15 : 150;
  console.log(CURSOR_SIZE);
  const variants = {
    default: {
      x: x - 15,
      y: y - 15,
      width: CURSOR_SIZE,
      height: CURSOR_SIZE,
    },
    hover: {
      x: x - 200,
      y: y - 200,
      width: CURSOR_SIZE,
      height: CURSOR_SIZE,
    },
  };
  return (
    <Container className="bg-[#222222] max-w-screen h-screen flex justify-center items-center relative">
        <motion.div
          className={cn(
            "fixed bg-[#c32d27] rounded-full top-0 left-0 z-20 pointer-events-none ",
            isHovered ? "blur-[20px]" : "blur-[2px]"
          )}
          variants={variants}
          animate={!isHovered ? "default" : "hover"}
          transition={{ ease: "backOut"}}
        />
        <motion.div
          className={cn(
            "fixed bg-[#f5c63f] rounded-full top-0 left-0 z-20  pointer-events-none",
            isHovered ? "blur-[20px]" : "blur-[2px]"
          )}
          variants={variants}
          animate={!isHovered ? "default" : "hover"}
          transition={{ ease: "backOut"}}
          
        />
        <motion.div
          className={cn(
            "fixed bg-[#263251] rounded-full top-0 left-0 z-30  pointer-events-none",
            isHovered ? "blur-[20px]" : "blur-[2px]"
          )}
          variants={variants}
          animate={!isHovered ? "default" : "hover"}
          transition={{ ease: "backOut"}}
          
        />
        <motion.div
          className={cn(
            "fixed bg-[#356fdb]/50 rounded-full top-0 left-0 z-30 mix-blend-difference pointer-events-none",
            isHovered ? "blur-[20px]" : "blur-[2px]"
          )}
          variants={variants}
          animate={!isHovered ? "default" : "hover"}
          transition={{ ease: "backOut"}}
          
        />
      <Container
        className="advantGradeFont text-white text-[80px] text-center z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        The quick brown fox jumps over the lazy
      </Container>
    </Container>
  );
};

export default Page;
