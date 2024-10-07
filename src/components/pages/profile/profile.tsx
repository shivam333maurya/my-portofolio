"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaJs,
  FaLinkedin,
  FaMediumM,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { EImages } from "@/assets";
import {
  CoolButton,
  CoolTooltip,
  SmoothScrollAnimation,
} from "@/components/ui";
import { MY_DATA3 } from "@/utils/data";
import { MdEmail } from "react-icons/md";
import { SiMui, SiNestjs, SiRedux, SiTailwindcss } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaGolang, FaJira } from "react-icons/fa6";

const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div className="h-10">
        <nav className="h-full flex items-center justify-end pt-2">
          <ul className="flex text-lg space-x-4 py-4 pl-4 overflow-x-auto pr-7">
            <CoolButton type="underlined" href="#me">
              Me
            </CoolButton>
            <CoolButton type="underlined" href="#experience">
              Experience
            </CoolButton>
            <CoolButton type="underlined" href="#skills">
              Skills
            </CoolButton>
            <CoolButton type="underlined" href="#contact">
              Contact
            </CoolButton>
            <CoolButton type="underlined" href="/my-resume">
              CV
            </CoolButton>
          </ul>
        </nav>
      </div>
      <div className="h-[calc(100%-40px)] overflow-y-auto overflow-x-hidden">
        <div className={`text-white relative mt-12`} id="me">
          <div className="flex items-center gap-4 flex-col md:flex-row">
            {showProfile ? (
              <SmoothScrollAnimation delay={0.1}>
                <div className="w-64 h-64 mt-2 ml-2">
                  <CoolTooltip text="Shivam Maurya">
                    <Image
                      onClick={() => setShowProfile(false)}
                      alt="profile"
                      width={200}
                      height={350}
                      src={EImages.Profile}
                      className="rounded-full w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110 hover:translate-x-10 hover:translate-y-7 object-cover"
                    />
                  </CoolTooltip>
                </div>
              </SmoothScrollAnimation>
            ) : (
              <SmoothScrollAnimation delay={0.1}>
                <div
                  onClick={() => setShowProfile(true)}
                  className="mt-2 ml-2 w-64 h-64 rounded-full text-cyan-600 hover:text-cyan-700 transition-transform duration-500 ease-in-out transform hover:scale-110 hover:translate-x-10 hover:translate-y-7 bg-gray-700 flex justify-center items-center font-bold"
                >
                  <CoolTooltip text="Shivam Maurya">
                    <span className="text-4xl">SM</span>
                  </CoolTooltip>
                </div>
              </SmoothScrollAnimation>
            )}

            <div className="px-4">
              <SmoothScrollAnimation delay={0.2}>
                <i className="text-2xl opacity-7 w-max">
                  I&apos;am Shivam Maurya
                  <span className="text-cyan-800">,</span>
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
                  building and maintaining responsive websites in the recruiting
                  industry, utilizing popular web technologies.
                </h4>
              </SmoothScrollAnimation>
              <SmoothScrollAnimation delay={0.6}>
                <ul className="flex gap-3 items-center">
                  <SmoothScrollAnimation delay={0.7}>
                    <CoolTooltip text="G-mail">
                      <CoolButton
                        type="circle"
                        href={MY_DATA3.profile.email}
                        email={true}
                      >
                        <MdEmail fontSize={24} />
                      </CoolButton>
                    </CoolTooltip>
                  </SmoothScrollAnimation>
                  <SmoothScrollAnimation delay={0.8}>
                    <CoolTooltip text="Linked In">
                      <CoolButton
                        type="circle"
                        href={MY_DATA3.profile.linkedIn}
                        target="black"
                      >
                        <FaLinkedin fontSize={24} />
                      </CoolButton>
                    </CoolTooltip>
                  </SmoothScrollAnimation>
                  <SmoothScrollAnimation delay={0.9}>
                    <CoolTooltip text="GitHub">
                      <CoolButton
                        type="circle"
                        href={MY_DATA3.profile.gitHub}
                        target="black"
                      >
                        <FaGithub fontSize={24} />
                      </CoolButton>
                    </CoolTooltip>
                  </SmoothScrollAnimation>
                  <SmoothScrollAnimation delay={1}>
                    <CoolTooltip text="Medial">
                      <CoolButton
                        type="circle"
                        href={MY_DATA3.profile.medial}
                        target="black"
                      >
                        <span className="flex text-xl items-center">
                          <FaMediumM className="ml-[3px]" />
                          <span>.</span>
                        </span>
                      </CoolButton>
                    </CoolTooltip>
                  </SmoothScrollAnimation>
                </ul>
              </SmoothScrollAnimation>
            </div>
          </div>
        </div>
        <div className="mt-12" id="experience">
          <SmoothScrollAnimation delay={0.2}>
            <ul className="flex flex-col-reverse items-center">
              <SmoothScrollAnimation delay={0.3}>
                <CoolTooltip text="Nextloop Technologies">
                  <CoolButton
                    type="plain"
                    href={MY_DATA3.experience[2].link}
                    target="black"
                  >
                    <Image
                      onClick={() => setShowProfile(false)}
                      alt="profile"
                      width={200}
                      height={100}
                      src={EImages.CompanyLogo1}
                      className="object-contain text-red-300 h-28 w-200"
                    />
                  </CoolButton>
                </CoolTooltip>
              </SmoothScrollAnimation>

              <SmoothScrollAnimation delay={0.4}>
                <CoolTooltip text="Bestpeers Infosystem">
                  <CoolButton
                    type="plain"
                    href={MY_DATA3.experience[1].link}
                    target="black"
                  >
                    <Image
                      onClick={() => setShowProfile(false)}
                      alt="profile"
                      width={200}
                      height={100}
                      src={EImages.CompanyLogo2}
                      className="object-contain h-28 w-200"
                    />
                  </CoolButton>
                </CoolTooltip>
              </SmoothScrollAnimation>
              {/* <SmoothScrollAnimation delay={0.4}>
                <CoolTooltip text="Precious Infosystem">
                  <CoolButton
                    type="plain"
                    href={MY_DATA3.experience[0].link}
                    target="black"
                  >
                    <h2 className="bg-gradient-to-r text-center from-blue-500 to-red-500 text-transparent bg-clip-text font-bold text-4xl">
                      Precious Infosystem
                    </h2>
                    
                  </CoolButton>
                </CoolTooltip>
              </SmoothScrollAnimation> */}
            </ul>
          </SmoothScrollAnimation>
        </div>
        <div className="mt-12" id="skills">
          <div className="pt-6 px-10">
            <SmoothScrollAnimation delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
                <SmoothScrollAnimation delay={0.5} initialX={-200}>
                  <div className="flex justify-center items-center bg-gray-900/50 p-4 rounded-lg">
                    <CoolTooltip text="HTML5">
                      <Image
                        onClick={() => setShowProfile(false)}
                        alt="html"
                        width={100}
                        height={78}
                        src={EImages.Html}
                        className="object-contain h-20 w-auto hover:animate-rotate-90"
                      />
                    </CoolTooltip>
                  </div>
                </SmoothScrollAnimation>
                <SmoothScrollAnimation delay={0.5} initialY={-200}>
                  <div className="flex justify-center items-center bg-gray-900/50 p-4 rounded-lg">
                    <CoolTooltip text="React">
                      <FaReact
                        color="#26C6DA"
                        fontSize={78}
                        className="text-cyan-700 hover:animate-rotate-90"
                      />
                    </CoolTooltip>
                  </div>
                </SmoothScrollAnimation>
                <SmoothScrollAnimation delay={0.5} initialY={-200}>
                  <div className="flex justify-center items-center bg-gray-900/50 p-4 rounded-lg">
                    <CoolTooltip text="Redux">
                      <SiRedux
                        color="#7E57C2"
                        fontSize={78}
                        className="text-cyan-700 hover:animate-rotate-90"
                      />
                    </CoolTooltip>
                  </div>
                </SmoothScrollAnimation>
                <SmoothScrollAnimation delay={0.5} initialX={200}>
                  <div className="flex justify-center items-center bg-gray-900/50 p-4 rounded-lg">
                    <CoolTooltip text="Next.js">
                      <RiNextjsLine
                        fontSize={78}
                        className="text-cyan-300 hover:animate-rotate-90"
                      />
                    </CoolTooltip>
                  </div>
                </SmoothScrollAnimation>
                <SmoothScrollAnimation delay={0.5} initialX={-200}>
                  <div className="flex justify-center items-center bg-gray-900/50 p-4 rounded-lg">
                    <CoolTooltip text="Node.js">
                      <FaNodeJs
                        color="#21A366"
                        fontSize={78}
                        className="text-cyan-700 hover:animate-rotate-90"
                      />
                    </CoolTooltip>
                  </div>
                </SmoothScrollAnimation>
                <SmoothScrollAnimation delay={0.5} initialY={-200}>
                  <div className="flex justify-center items-center bg-gray-900/50 p-4 rounded-lg">
                    <CoolTooltip text="Tailwind CSS">
                      <SiTailwindcss
                        color="#00ACC1"
                        fontSize={78}
                        className="text-cyan-700 hover:animate-rotate-90"
                      />
                    </CoolTooltip>
                  </div>
                </SmoothScrollAnimation>
                <SmoothScrollAnimation delay={0.5} initialY={200}>
                  <div className="flex justify-center items-center bg-gray-900/50 p-4 rounded-lg">
                    <CoolTooltip text="MUI">
                      <SiMui
                        color="#0288D1"
                        fontSize={74}
                        className="text-cyan-700 hover:animate-rotate-90"
                      />
                    </CoolTooltip>
                  </div>
                </SmoothScrollAnimation>
                <SmoothScrollAnimation delay={0.5} initialX={200}>
                  <div className="flex justify-center items-center bg-gray-900/50 p-4 rounded-lg">
                    <CoolTooltip text="Ant Design">
                      <AiOutlineAntDesign
                        fontSize={78}
                        className="text-cyan-700 hover:animate-rotate-90"
                      />
                    </CoolTooltip>
                  </div>
                </SmoothScrollAnimation>
                <SmoothScrollAnimation delay={0.5} initialX={-200}>
                  <div className="flex justify-center items-center bg-gray-900/50 p-4 rounded-lg">
                    <CoolTooltip text="Go">
                      <FaGolang
                        fontSize={78}
                        className="text-cyan-200 hover:animate-rotate-90"
                      />
                    </CoolTooltip>
                  </div>
                </SmoothScrollAnimation>
                <SmoothScrollAnimation delay={0.5} initialY={200}>
                  <div className="flex justify-center items-center bg-gray-900/50 p-4 rounded-lg">
                    <CoolTooltip text="NestJS">
                      <SiNestjs
                        color="#F50057"
                        fontSize={78}
                        className="text-cyan-700 hover:animate-rotate-90"
                      />
                    </CoolTooltip>
                  </div>
                </SmoothScrollAnimation>
                <SmoothScrollAnimation delay={0.5} initialY={200}>
                  <div className="flex justify-center items-center bg-gray-900/50 p-4 rounded-lg">
                    <CoolTooltip text="JavaScript">
                      <FaJs
                        color="#FFD600"
                        fontSize={78}
                        className="text-cyan-700 hover:animate-rotate-90"
                      />
                    </CoolTooltip>
                  </div>
                </SmoothScrollAnimation>
                <SmoothScrollAnimation delay={0.5} initialX={200}>
                  <div className="flex justify-center items-center bg-gray-900/50 p-4 rounded-lg">
                    <CoolTooltip text="Jira">
                      <FaJira
                        color="#2684FF"
                        fontSize={74}
                        className="text-cyan-700 hover:animate-rotate-90"
                      />
                    </CoolTooltip>
                  </div>
                </SmoothScrollAnimation>
              </div>
            </SmoothScrollAnimation>
          </div>
        </div>
        <div className="my-12" id="contact">
          <SmoothScrollAnimation delay={0.2}>
            <ul className="flex gap-3 items-center justify-center mb-3">
              <SmoothScrollAnimation delay={0.7}>
                <CoolTooltip text="G-mail">
                  <CoolButton
                    type="circle"
                    href={MY_DATA3.profile.email}
                    email={true}
                  >
                    <MdEmail fontSize={24} />
                  </CoolButton>
                </CoolTooltip>
              </SmoothScrollAnimation>
              <SmoothScrollAnimation delay={0.8}>
                <CoolTooltip text="Linked In">
                  <CoolButton
                    type="circle"
                    href={MY_DATA3.profile.linkedIn}
                    target="black"
                  >
                    <FaLinkedin fontSize={24} />
                  </CoolButton>
                </CoolTooltip>
              </SmoothScrollAnimation>
              <SmoothScrollAnimation delay={0.9}>
                <CoolTooltip text="GitHub">
                  <CoolButton
                    type="circle"
                    href={MY_DATA3.profile.gitHub}
                    target="black"
                  >
                    <FaGithub fontSize={24} />
                  </CoolButton>
                </CoolTooltip>
              </SmoothScrollAnimation>
              <SmoothScrollAnimation delay={1}>
                <CoolTooltip text="Medial">
                  <CoolButton
                    type="circle"
                    href={MY_DATA3.profile.medial}
                    target="black"
                  >
                    <span className="flex text-xl items-center">
                      <FaMediumM className="ml-[3px]" />
                      <span>.</span>
                    </span>
                  </CoolButton>
                </CoolTooltip>
              </SmoothScrollAnimation>
            </ul>
            <SmoothScrollAnimation delay={1}>
              <h1 className="text-center text-cyan-800">
                {MY_DATA3.profile.phone}
              </h1>
            </SmoothScrollAnimation>
          </SmoothScrollAnimation>
        </div>
      </div>
    </>
  );
};

export { Profile };
