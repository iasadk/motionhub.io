import { componetsPageData } from "@/Constants/ComponentsPageData";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen relative">
        <div className="text-center lg:leading-[120px]">
          <p className="font-gramond text-[40px] md:text-[60px] lg:text-[100px] text-center mt-12">
            Supercharge Your
          </p>
          <p className="font-gramond text-[40px] md:text-[60px] lg:text-[100px] text-center">Application</p>
        </div>
        <p className="font-poppins text-[12px] md:text-[20px] xl:w-[40%] xl:mx-auto text-center mt-12">
          MotionHub.io: Where Framer Motion meets Tailwind CSS for seamless
          frontend magic.
        </p>
        {/* <div className="absolute bottom-[-1000px] sm:left-[-500px] w-[1200px] h-[1200px] blur-[500px] rounded-full bg-gradient-to-r from-amber-200 to-yellow-500 z-[-1]"/>
        <div className="absolute top-[-1100px] sm:right-[-800px] w-[1200px] h-[1200px] blur-[500px] rounded-full bg-gradient-to-r from-amber-200 to-yellow-500 z-[-1]"/> */}
        {/* <div className="absolute bottom-[-80px] md:bottom-[-150px] md:left-0 md:right-0 right-2 blur-[120px] md:blur-[400px]  w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-r from-amber-200 to-yellow-500 z-[-1] bg-red-600"/> */}
      </main>
    </>
  );
}
