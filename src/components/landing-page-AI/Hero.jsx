"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import Navbar from "./Navbar";
import rocket from "@/assets/landing-page-AI/rocket.png";
import BeamButton from "./BeamButton";
import LeftDecoration from "@/assets/landing-page-AI/LeftRectangle.svg";
import RightDecoration from "@/assets/landing-page-AI/RightRectangle.svg";
import GlowingPlanet from "@/assets/landing-page-AI/hero.svg";
import EarthShine from "./EarthShine";
import { Globe } from "../magicui/globe";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen sm:h-[800px]  xl:h-screen  flex flex-col text-white overflow-hidden">
      <Navbar />

      {/* Side decorations positioned absolutely but outside the content area */}
      <div className="hidden xl:flex absolute h-full left-0 top-0 z-0">
        <Image
          src={LeftDecoration}
          alt="Left decoration"
          className="h-full w-auto"
          width={100}
          height={500}
          style={{ objectFit: "cover", objectPosition: "left" }}
          priority
        />
      </div>

      <div className="hidden xl:flex absolute h-full right-0 top-0 z-0">
        <Image
          src={RightDecoration}
          alt="Right decoration"
          className="h-full w-auto"
          width={100}
          height={500}
          style={{ objectFit: "cover", objectPosition: "right" }}
          priority
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-[50px] sm:top-[120px] w-full h-full z-0"
      >
        <Image
          src={GlowingPlanet}
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Main content - fills the available space */}
      <div className="flex-grow flex items-center justify-center px-6 sm:px-10 lg:px-12 lg:pt-20 relative z-50">
        <div className="text-center w-full max-w-4xl mx-auto space-y-12 md:space-y-6 lg:space-y-8">
          <div className="w-full mx-auto">
            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-[36px] sm:text-[44px] lg:text-[56px]
              xl:text-[64px] font-bold tracking-tight leading-tight
              sm:leading-tight md:leading-tight lg:leading-[68px]
              xl:leading-[88px] font-montserrat"
            >
              {" "}
              Transform workflows with intelligent automation
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-[14px] sm:text-[18px] lg:text-[20px]  xl:text-[22px] text-[#FFFFFF]/50 font-normal  leading-[24px] sm:leading-[32px] lg:leading-[36px] text-center mt-4 md:mt-6 mx-auto max-w-3xl font-poppins"
            >
              AI solutions that automate, optimize, and drive business impact.
              From intelligent automation to custom AI models, we help
              businesses unlock the true power of AI.
            </motion.p>
          </div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className=" flex flex-col  px-[16px] sm:px-0 sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#work"
              className="w-full sm:w-[240px] inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-transparent hover:bg-white/20 px-6 py-3 text-[18px] sm:text-[18px] font-medium transition-all"
            >
              Recent Work
              <ChevronRightIcon strokeWidth={3} className="h-4 w-4 ml-1" />
            </Link>
            <Link href="#contact" className=" ">
              <BeamButton />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Gradient border at the bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, #060618 37.95%, #2E2688 52.58%, #01B0EA 57.46%, #FFFFFF 62.34%, #FFFFFF 64.77%, #01B0EA 67.21%, #2E2688 72.09%, #060618 86.72%)",
          height: "4px",
          width: "100%",
        }}
      ></div>
    </section>
  );
};

export default Hero;
