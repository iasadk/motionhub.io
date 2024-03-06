"use client";
import Link from "next/link";
import React, { useState } from "react";
import AnimatedLink from "../AnimatedWord";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
type Props = {};
// fixed top-0 left-0 right-0
const logoAnimation = {
  initial: {
    width: 60,
  },
  hover: {
    width: 110,
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
const NavbarNew = (props: Props) => {
  const [isHovered, setisHovered] = useState(false);

  return (
    <nav className="flex justify-center items-center px-2 py-4 ">
      <motion.div layout className="border rounded-full w-full sm:w-3/5 md:w-[75%] lg:w-[50%] px-1 py-1 border-[#ADADAD] uppercase flex justify-between items-center">
        {/* For Mobile */}
        <motion.div className="xs:hidden">
          <motion.span
            className={cn(
              "bg-[#FFA31A] rounded-full text-white font-poppins cursor-pointer flex justify-center w-8 h-8 items-center"
            )}
          >
            A
          </motion.span>
        </motion.div>

        {/* For Screen bigger or equals to 375px */}
        <motion.div
          onMouseEnter={() => setisHovered(true)}
          onMouseLeave={() => setisHovered(false)}
          className="hidden xs:block w-[110px]"
        >
          <motion.span
            variants={logoAnimation}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            className={cn(
              "bg-[#FFA31A] p-2 rounded-full text-white font-poppins cursor-pointer flex gap-1"
            )}
          >
            Asad
            <motion.span
              variants={hubAnimation}
              initial="initial"
              animate={isHovered ? "hover" : "initial"}
              className="text-black font-semibold"
            >
              khan
            </motion.span>
          </motion.span>
        </motion.div>

        <div className="hidden md:flex font-medium gap-1 items-center relative mr-[5rem]">
          <AnimatedLink
            title={"Masking Cursor"}
            onClick={(e) => {
              window.location.href = "/mask-cursor";
            }}
          />
          <IoIosArrowDown />
          <span className="absolute bottom-0 w-[calc(100%-18px)] h-[.05rem] bg-black/70" />
        </div>

        <div className="hidden md:flex font-medium gap-1 items-center border border-yellow-500 w-10 h-10 rounded-full justify-center">
          <MdArrowOutward className="w-4 h-4 text-[#FFA31A]"/>
        </div>

        {/* For Mobile screen 320px to 374px */}
        <div className="flex flex-col sm:hidden gap-1 items-center mr-2 font-normal font-poppins tracking-wide relative  rounded-full">
          <span className=" w-10 bg-[#FFA31A] h-[0.10rem] rounded-xl" />
          <span className=" w-10 bg-[#FFA31A] h-[.15rem] rounded-xl" />
        </div>
        {/* <div className="flex gap-3 items-center mr-2 font-normal font-poppins tracking-wide">
          <AnimatedLink
            title={"components"}
            onClick={(e) => {
              window.location.href = "/components";
            }}
          />
          <AnimatedLink
            title={"about"}
            onClick={(e) => {
              window.location.href = "/about";
            }}
          />
        </div> */}
      </motion.div>
    </nav>
  );
};

export default NavbarNew;
