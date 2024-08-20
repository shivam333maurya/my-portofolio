"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavButtonProps } from "@/components/pages/profile/profile";

const NavButton: React.FC<NavButtonProps> = ({ children, href, target }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="text-center py-2 px-3 mb-3 border text-cyan-700 hover:text-cyan-600 font-bold border-cyan-700 hover:border-cyan-600 overflow-hidden"
    >
      <Link href={href} className="flex items-center justify-center h-full">
        {children}
      </Link>
    </motion.li>
  );
};

export default function MyResume() {
  return (
    <main className="p-3">
      <nav className="flex justify-center">
        <ul className="text-center w-26">
          <NavButton href={"/my-resume-1"}>Layout-1</NavButton>
          <NavButton href={"/my-resume-2"}>Layout-2</NavButton>
          <NavButton href={"/my-resume-3"}>Layout-3</NavButton>
          <NavButton href={"/"}>Me</NavButton>
        </ul>
      </nav>
    </main>
  );
}
