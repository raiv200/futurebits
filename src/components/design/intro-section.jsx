import React from "react";
import LogoImg from "../../../public/design/futurebits_logo.png";
import Image from "next/image";
import Particles from "../ui/particles";
import BeamButton from "./BeamButton";
import { LampContainer } from "../ui/lamp";
import stars from "@/assets/landing-page-AI/stars.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const IntroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const buttonRef = useRef(null);
  const isButtonInView = useInView(buttonRef, { once: true });

  return (
    <LampContainer className="w-full bg-[#060619]  overflow-hidden flex flex-col px-8 sm:px-4 relative z-50">
      <div className="">
        <div className="absolute top-0 left-0 !z-20 w-full h-[600px]">
          <Particles
            quantity={30}
            ease={200}
            refresh
            size={0.7}
            className="!z-40"
          />
        </div>
        <div className="max-w-[1250px] mx-auto flex justify-center items-center w-full z-20">
          <div className="flex flex-col items-center">
            <Image
              src={LogoImg}
              alt="Futurebits Logo"
              className="object-contain max-w-[220px] max-h-[84px] sm:max-w-[320px] sm:max-h-[80px] lg:max-w-[420px] lg:max-h-[114px] "
            />
          </div>
        </div>

        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mt-16 max-w-[750px] mx-auto font-montserrat font-bold text-[20px] sm:text-[38px] sm:leading-[52px] lg:leading-[60px] text-center text-white mb-[52px] sm:mb-[82px]">
            Let’s Build Something Powerful — A Design That Engages, Converts,
            and
            <span className="relative ml-[8px]">
              <span className="opacity-50">Drives Sales Effortlessly</span>{" "}
            </span>
            <span className="inline-block">
              <Image
                src={stars}
                className="w-[40px] h-[40px] rotate-[180deg]"
                alt="star"
              />
            </span>
          </p>
        </motion.div>
      </div>
      <motion.div
        ref={buttonRef}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={isButtonInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-20  w-full flex justify-center items-center "
      >
        <BeamButton />
      </motion.div>
    </LampContainer>
  );
};

export default IntroSection;
