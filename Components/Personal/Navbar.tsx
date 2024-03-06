"use client";
import Link from "next/link";
import React, { useState } from "react";
import AnimatedLink from "../AnimatedWord";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
type Props = {};
// fixed top-0 left-0 right-0
const logoAnimation = {
  initial: {
    width: 80,
  },
  hover: {
    width: 115,
  },
};

const hubAnimation = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      delay: 0.1,
    },
  },
};
const Navbar = (props: Props) => {
  const [isHovered, setisHovered] = useState(false);
  
  return (
    <nav className="flex justify-center items-center px-2 py-4 ">
      <div className="border rounded-full w-full sm:w-3/5 md:w-[60%] lg:w-[40%] px-1 py-1 border-[#ADADAD] uppercase flex justify-between items-center">
        <motion.div
          onMouseEnter={() => setisHovered(true)}
          onMouseLeave={() => setisHovered(false)}
        >
          <motion.span
            variants={logoAnimation}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            className={cn(
              "bg-[#FFA31A] p-2 rounded-full text-white font-poppins cursor-pointer flex gap-1 items-center "
            )}
          >
            Motion
            <motion.span
              variants={hubAnimation}
              initial="initial"
              animate={isHovered ? "hover" : "initial"}
              className="text-black font-semibold"
            >
              hub
            </motion.span>
          </motion.span>
        </motion.div>

        <div className="flex gap-3 items-center mr-2 font-normal font-poppins tracking-wide">
          <AnimatedLink title={"components"} onClick={(e)=>{window.location.href = "/components"}}/>
          <AnimatedLink title={"about"} onClick={(e)=>{window.location.href = "/about"}}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
