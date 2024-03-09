"use client";
import useMousePosition from "@/hooks/useMousePosition";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/Components/Container";

const Page = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const MASK_SIZE = isHovered ? 500 : 40;
  return (
    <Container className="relative h-[90vh] max-w-screen flex border-2 justify-center items-center advantGradeFont ">
      <motion.div
        animate={{
          WebkitMaskPosition: isHovered
            ? `${x - 250}px ${y - 300}px`
            : `${x - 20}px ${y - 100}px`,
          WebkitMaskSize: `${MASK_SIZE}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
        className="w-full h-full flex items-center justify-center absolute xl:leading-[5rem] top-0 mask"
      >
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-[20px] md:text-[40px] lg:text-[40px] xl:text-[60px] w-full lg:w-[64%] xl:w-[60%] mx-auto"
        >
          A visual designer - with skills that haven&apos;t been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>
      <div className="w-full h-full flex justify-center items-center xl:leading-[5rem]">
        <p className="text-[20px] md:text-[40px] lg:text-[40px] xl:text-[60px] w-full lg:w-[64%] xl:w-[60%] mx-auto ">
          I&apos;m a
          <span className="text-[#EC4E39] mx-4">selectively skilled</span>
          product designer with strong focus on producing high quality &
          impactful digital experience.
        </p>
      </div>
    </Container>
  );
};

export default Page;
