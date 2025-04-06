"use client"

import React, { useRef } from "react";
import navbarDiamond from "@/assets/design/navbar.svg";
import CardLineSvg from "@/assets/design/lines.svg";
import P1 from "@/assets/design/lightnew.png";
import P2 from "@/assets/design/bulbnew.png";
import P3 from "@/assets/design/globnew.png";
import P4 from "@/assets/design/rocketnew.png";
import P5 from "@/assets/design/handshakenew.png";
import P6 from "@/assets/design/transparent.png";
import SpootLight from "@/assets/design/spotlight.png";
import Image from "next/image";
import Particles from "../ui/particles";
import { BorderBeam, BorderBeamDemo } from "../ui/beam";

import { MagicCard } from "../magicui/magic-card";
import { motion, useInView } from "framer-motion";

const services = [
  {
    img: P1,
    title: "On-Demand & Flexible",
    description:
      "Get what you need, when you need it—no long-term commitments.",
    span: 1,
    type: "NORMAL",
  },
  {
    img: P2,
    title: "Comprehensive Creative Solutions",
    description:
      "From design to strategy, we handle everything in-house, ensuring a cohesive and compelling output tailored to your goals.",
    span: 2,
    type: "GRADIENT",
  },
  {
    img: P3,
    title: "Personalized Support",
    description:
      "Expect meaningful discussions and regular updates to keep everything aligned.",
    span: 1,
    type: "NORMAL",
  },
  {
    img: P4,
    title: "Results-Driven Approach",
    description:
      "We focus on measurable impact, ensuring our work enhances engagement, conversions, and overall success—beyond just aesthetics.",
    span: 2,
    type: "GRADIENT",
  },
  {
    img: P5,
    title: "Seamless Collaboration",
    description: "Stay updated with fast iterations and open communication.",
    span: 1,
    type: "GRADIENT",
  },
  {
    img: P6,
    title: "Transparent Pricing",
    description: "No hidden costs, no surprises—just clear, upfront pricing.",
    span: 1,
    type: "GRADIENT",
  },
];

const Card = ({ service ,index }) => {
  return (
    <div
      style={{
        // background:"conic-gradient(from 134.07deg at 0.9% 2.98%, rgba(255, 255, 255, 0) 0deg, rgba(46, 38, 136, 0.2) 288deg, rgba(255, 255, 255, 0) 360deg)",
        background:
          " linear-gradient(331.79deg, rgba(1, 176, 234, 0.2) -2.38%, rgba(12, 10, 34, 0.2) 47.04%)",
        backdropFilter: "blur(42px)",
      }}
      className={`${
        service.type == "NORMAL" ? "" : ""
      }  px-5  sm:px-10 py-6 overflow-hidden border border-solid border-[#383847]/90   relative ${
        service.span == 2 ? "xl:col-span-3" : "xl:col-span-2"
      } group rounded-3xl lg:h-[420px] `}
    >
      <Image
        src={CardLineSvg}
        alt=""
        width={1000}
        height={1000}
        className="absolute top-0 left-0 max-w-[230px] w-full"
      />

      {service.type == "NORMAL" && (
        <Image
          src={SpootLight}
          alt=""
          width={1000}
          height={1000}
          className="absolute -top-[30px] w-[1000px] blur-xl h-[200px] left-0 "
        />
      )}
      {service.type == "NORMAL" && (
        <Image
          src={SpootLight}
          alt=""
          width={1000}
          height={1000}
          className="absolute top-[0px] w-[1000px] blur-xl h-[200px] rotate-[150deg]  right-0 "
        />
      )}
      <div className="flex justify-center items-center">
        <Image
          src={service.img.src}
          alt=""
          width={1000}
          height={1000}
          className="w-[150px] h-[150px] sm:max-w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[200px]  z-[60] object-contain"
        />
      </div>
      <p className="font-poppins text-[18px] sm:text-[20px] leading-[28px] mt-10  text-white font-medium">
        {service.title}
      </p>
      <p className="font-poppins text-[14px] sm:text-[16px] text-white/50 mt-3">
        {service.description}
      </p>

      <BorderBeamDemo
        size={150}
        delay={0}
        duration={5}
        colorFrom="#01B0EA"
        colorTo="#ffffff"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

const Benefits = () => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <div className="py-10 max-w-[1250px]  mx-auto w-full bg-[#08081E]">
      <div className="relative w-fit mx-auto  text-center">
        <Image
          src={navbarDiamond}
          width={32}
          height={32}
          alt=""
          className="w-8 h-8 absolute top-1/2 -translate-y-1/2 -right-[40px]"
        />
        <Image
          src={navbarDiamond}
          width={32}
          height={32}
          alt=""
          className="w-8 h-8 absolute top-1/2 -translate-y-1/2 -left-[40px]"
        />
        <div
          class="max-w-[150px] absolute top-1/2 -right-[120px] bg-white opacity-20 w-full h-[2px] -translate-y-1/2"
          style={{
            background:
              "linear-gradient(-90deg, #000000 0%, rgba(255, 255, 255, 1) 47.22%)",
          }}
        ></div>
        <div
          class="max-w-[150px] absolute top-1/2 -left-[120px] bg-white opacity-20 w-full h-[2px] -translate-y-1/2"
          style={{
            background:
              "linear-gradient(90deg, #000000 0%, rgba(255, 255, 255, 1) 47.22%)",
          }}
        ></div>
        <span className="uppercase text-lg font-semibold tracking-[0%] text-[#01B0EA] ">
          BENEFITS
        </span>
      </div>
      <h2 className="mt-4 sm:mt-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-[60px] font-bold text-center font-montserrat text-white">
        Why Futurebits
      </h2>
      <div className="relative mt-10">
        <Particles
          quantity={30}
          ease={200}
          refresh
          size={0.7}
          className="!z-10 absolute top-0 left-0 w-full h-full"
        />
        <div
          ref={cardRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-7 gap-x-4 gap-y-6 "
        >
          {services.map((service, index) => {
            let initial = { opacity: 0, y: 50 };
            if (index === 0) {
              initial = { opacity: 0, x: -50, y: 50 }; // From left-bottom
            } else if (index === 1) {
              initial = { opacity: 0, x: 50, y: 50 }; // From right-bottom
            }

            return (
              <motion.div
                key={service.id}
                initial={initial}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className={` ${
                  service.span == 2 ? "xl:col-span-3" : "xl:col-span-2"
                } rounded-3xl lg:h-[420px]`}
              >
                <Card key={index} service={service} index={index} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
