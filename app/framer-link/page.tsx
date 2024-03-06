import AnimatedLink from "@/Components/AnimatedWord";
import Link from "next/link";
import React from "react";

type Props = {};

const FramerLink = (props: Props) => {
  return (
    <div className="uppercase border-2 p-24">
      <div className="relative flex flex-col text-2xl">
        <AnimatedLink title="Home"/>
      </div>
    </div>
  );
};

export default FramerLink;
