"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaMediumM } from "react-icons/fa";
import { EImages } from "@/assets";
import { ScrollSnapComponent, SmoothScrollAnimation } from "@/components/ui";
import Link from "next/link";

import { motion } from "framer-motion";
import { MY_DATA3 } from "@/app/data";
import { MdEmail } from "react-icons/md";

export interface NavButtonProps {
  children: React.ReactNode;
  href: string;
  target?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ children, href, target }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.15, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="text-center px-3 border-b text-cyan-700 hover:text-cyan-600 font-bold border-cyan-700 hover:border-cyan-600 overflow-hidden"
    >
      <Link href={href} className="flex items-center justify-center h-full">
        {children}
      </Link>
    </motion.li>
  );
};
const IconCircleButton: React.FC<NavButtonProps> = ({
  children,
  href,
  target,
}) => {
  return (
    <motion.li
      whileHover={{ scale: 1.15, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-full w-10 h-10 flex justify-center items-center p-1 border border-cyan-800"
    >
      <Link href={href} target={target} className="text-cyan-800">
        {children}
      </Link>
    </motion.li>
  );
};

const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div className="h-10">
        <nav className="h-full flex items-center justify-end pt-2">
          <ul className="flex text-lg space-x-4 p-4 overflow-x-auto">
            <NavButton href="#me">Me</NavButton>
            <NavButton href="#experience">Experience</NavButton>
            <NavButton href="#skills">Skills</NavButton>
            <NavButton href="#contact">Contact</NavButton>
            <NavButton href="/my-resume">CV</NavButton>
          </ul>
        </nav>
      </div>
      <div className="h-[calc(100%-40px)]">
        <ScrollSnapComponent orientation="vertical" snapType="proximity">
          <div className={`h-full text-white relative mt-3`} id="me">
            <div className="flex items-center gap-4 flex-col md:flex-row">
              {showProfile ? (
                <SmoothScrollAnimation delay={0.1}>
                  <div className="w-64 h-64 mt-2 ml-2">
                    <Image
                      onClick={() => setShowProfile(false)}
                      alt="profile"
                      width={200}
                      height={350}
                      src={EImages.Profile}
                      className="rounded-full w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110 hover:translate-x-10 hover:translate-y-7 object-cover"
                    />
                  </div>
                </SmoothScrollAnimation>
              ) : (
                <SmoothScrollAnimation delay={0.1}>
                  <div
                    onClick={() => setShowProfile(true)}
                    className="mt-2 ml-2 w-64 h-64 rounded-full text-cyan-600 hover:text-cyan-700 transition-transform duration-500 ease-in-out transform hover:scale-110 hover:translate-x-10 hover:translate-y-7 bg-gray-700 flex justify-center items-center font-bold"
                  >
                    <span className="text-4xl">SM</span>
                  </div>
                </SmoothScrollAnimation>
              )}

              <div className="px-4">
                <SmoothScrollAnimation delay={0.2}>
                  <i className="text-2xl opacity-7 w-max">
                    I'am Shivam Maurya<span className="text-cyan-800">,</span>
                  </i>
                </SmoothScrollAnimation>
                <SmoothScrollAnimation delay={0.3}>
                  <h1 className="text-3xl font-bold w-max text-cyan-700">
                    Software Developer
                  </h1>
                </SmoothScrollAnimation>
                <SmoothScrollAnimation delay={0.4}>
                  <h4 className="text-lg text-cyan-100 mb-1">
                    Full stack software developer with 3 years of experience in
                    building and maintaining responsive websites in the
                    recruiting industry, utilizing popular web technologies.
                  </h4>
                </SmoothScrollAnimation>
                <SmoothScrollAnimation delay={0.6}>
                  <ul className="flex gap-3 items-center">
                    <IconCircleButton href={`mailto:${MY_DATA3.profile.email}`}>
                      <MdEmail fontSize={24} />
                    </IconCircleButton>
                    <IconCircleButton
                      href={MY_DATA3.profile.linkedIn}
                      target="black"
                    >
                      <FaLinkedin fontSize={24} />
                    </IconCircleButton>
                    <IconCircleButton
                      href={MY_DATA3.profile.gitHub}
                      target="black"
                    >
                      <FaGithub fontSize={24} />
                    </IconCircleButton>
                    <IconCircleButton
                      href={MY_DATA3.profile.medial}
                      target="black"
                    >
                      <span className="flex text-xl items-center">
                        <FaMediumM className="ml-[3px]" />
                        <span>.</span>
                      </span>
                    </IconCircleButton>
                  </ul>
                </SmoothScrollAnimation>
              </div>
            </div>
          </div>
          <div className="h-full" id="experience">
            <SmoothScrollAnimation delay={0.2}>
              <h1 className="text-center"> Experience updating...</h1>
            </SmoothScrollAnimation>
          </div>
          <div className="h-full" id="skills">
            <SmoothScrollAnimation delay={0.2}>
              <h1 className="text-center">Skills updating...</h1>
            </SmoothScrollAnimation>
          </div>
          <div className="h-full" id="contact">
            <SmoothScrollAnimation delay={0.2}>
              <h1 className="text-center">Contact updating...</h1>
            </SmoothScrollAnimation>
          </div>
        </ScrollSnapComponent>
      </div>
    </>
  );
};

export { Profile };
