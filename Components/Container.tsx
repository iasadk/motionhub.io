import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export const Container = ({
  className,
  children,
  onMouseEnter,
  onMouseLeave
}: {
  className?: string;
  children: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  return <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{children}</div>;
};
