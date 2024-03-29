"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Personal/Navbar";
import NavbarNew from "@/Components/Personal/NavbarNewVariant";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import useDimensions from "@/hooks/useDimensions";
const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Framer + Tailwind components",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = usePathname();
  return (
    <html lang="en">
      <body className={"overflow-x-hidden overflow-y-hidden"}>
        <AnimatePresence mode="wait">
          <motion.div key={router}>
            <NavbarNew />
            {children}
            {/* <motion.div
              className="slide-in absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-black rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 0 }}
              exit={{ scale: 1 }}
              transition={{ duration: 1, ease: "linear" }}
            ></motion.div>
            <motion.div
              className={`slide-out absolute top-[-500px] left-[-1200px] w-[5000px] h-[5000px] bg-black rounded-full origin-[600px_00px]`}
              initial={{ scale: 1 }}
              animate={{ scale: 0 }}
              exit={{ scale: 0 }}
              transition={{ duration: 1, ease: "linear" }}
            ></motion.div> */}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
