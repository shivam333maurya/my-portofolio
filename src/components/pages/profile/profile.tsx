"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaMediumM } from "react-icons/fa";
import { EImages } from "@/assets";
import {
  CoolButton,
  CoolTooltip,
  ScrollSnapComponent,
  SmoothScrollAnimation,
} from "@/components/ui";
import { MY_DATA3 } from "@/utils/data";
import { MdEmail } from "react-icons/md";

const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div className="h-10">
        <nav className="h-full flex items-center justify-end pt-2">
          <ul className="flex text-lg space-x-4 p-4 overflow-x-auto">
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
      <div className="h-[calc(100%-40px)]">
        <ScrollSnapComponent orientation="vertical" snapType="proximity">
          <div className={`h-full text-white relative mt-3`} id="me">
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
                    building and maintaining responsive websites in the
                    recruiting industry, utilizing popular web technologies.
                  </h4>
                </SmoothScrollAnimation>
                <SmoothScrollAnimation delay={0.6}>
                  <ul className="flex gap-3 items-center">
                    <SmoothScrollAnimation delay={0.7}>
                      <CoolTooltip text="G-mail">
                        <CoolButton
                          type="circle"
                          href={`mailto:${MY_DATA3.profile.email}`}
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
          <div className="h-full" id="experience">
            <SmoothScrollAnimation delay={0.2}>
              <ul className="transform flex flex-col items-center translate-y-1/2">
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
                        className="object-contain h-28 w-200"
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
                <SmoothScrollAnimation delay={0.4}>
                  <CoolTooltip text="Precious Infosystem">
                    <CoolButton
                      type="plain"
                      href={MY_DATA3.experience[0].link}
                      target="black"
                    >
                      <Image
                        onClick={() => setShowProfile(false)}
                        alt="profile"
                        width={200}
                        height={100}
                        src={EImages.CompanyLogo3}
                        className="object-contain h-28 w-200"
                      />
                    </CoolButton>
                  </CoolTooltip>
                </SmoothScrollAnimation>
              </ul>
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
