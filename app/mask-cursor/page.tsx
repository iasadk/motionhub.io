"use client";
import useMousePosition from "@/hooks/useMousePosition";
import React, { useState } from "react";
import { motion } from "framer-motion";
type Props = {};

const Page = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const MASK_SIZE = isHovered ? 500 : 40;
  const MASK_ADJUSTER = isHovered ? 0.5 : 2.2;
  return (
    <main className="h-[100vh] w-full flex justify-center items-center flex-col p-5 advantGradeFont">
      {/* Mask Div */}
      <motion.div
        animate={{
          WebkitMaskPosition: isHovered
            ? `${x - MASK_SIZE / 1.9}px ${y - MASK_SIZE / 1.5}px`
            : `${x - MASK_SIZE / MASK_ADJUSTER}px ${
                y - MASK_SIZE * MASK_ADJUSTER
              }px`,
          WebkitMaskSize: `${MASK_SIZE}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
        className="w-full h-full flex items-center justify-center absolute xl:leading-[5rem] mask"
      >
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-[20px] md:text-[40px] lg:text-[40px] xl:text-[60px] w-full lg:w-[64%] xl:w-[50%] mx-auto"
        >
          A visual designer - with skills that haven&apos;t been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>
      <div className="w-full h-full flex justify-center items-center xl:leading-[5rem]">
        <p className="text-[20px] md:text-[40px] lg:text-[40px] xl:text-[60px] w-full lg:w-[64%] xl:w-[55%] mx-auto ">
          I&apos;m a
          <span className="text-[#EC4E39] mx-4">selectively skilled</span>
          product designer with strong focus on producing high quality &
          impactful digital experience.
        </p>
      </div>
    </main>
  );
};

export default Page;
