import React from "react";
import { BorderBeam } from "../ui/beam";
import navbarDiamond from "../../../public/navbar.svg";
import bgGred from "../../../public/design/bggrediant.png";
import spotLight from "../../../public/design/spotlight.png";
import darkGred from "../../../public/design/darkgred.png";
import Image from "next/image";
import Particles from "../ui/particles";
import { AnimatedBorderButtonBlue } from "./hero";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Marquee } from "../ui/marquee";
import LightingStar from "../../../public/design/hero/starlight.png";
import { ChevronRightIcon } from "lucide-react";
import BeamButton from "./BeamButton";

import stars from "@/assets/landing-page-AI/stars.png";

const Card = ({ service, className = "" }) => {
  return (
    <div
      className={`
    ${className} 
    font-medium
    px-5
    sm:px-10
    lg:px-6
    xl:px-10
    py-3
    text-[14px]
    sm:text-[20px]
    text-center 
    text-white
    relative
    rounded-2xl
    overflow-hidden font-montserrat
    bg-gradient-to-b 
    from-[rgba(51,51,51,0.6)] 
    to-[rgba(27,27,27,0)]
  `}
      // style={{
      //   borderWidth: "3px",
      //   borderStyle: "solid",
      //   borderImageSource:
      //     "linear-gradient(143.63deg, rgba(255, 255, 255, 0.05) 5.04%, rgba(1, 176, 234, 0.2) 23.38%, rgba(46, 38, 136, 0.6) 31.31%, rgba(1, 176, 234, 0.1) 39.25%, rgba(255, 255, 255, 0.05) 57.59%)",
      //   borderImageSlice: 1,
      // }}
    >
      <div
        style={{
          content: "",
          position: "absolute",
          inset: 0,
          borderRadius: "16px", // Same as parent
          padding: "3px", // Border width
          background:
            "linear-gradient(143.63deg, rgba(255, 255, 255, 0.05) 5.04%, rgba(1, 176, 234, 0.2) 23.38%, rgba(46, 38, 136, 0.6) 31.31%, rgba(1, 176, 234, 0.1) 39.25%, rgba(255, 255, 255, 0.05) 57.59%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        }}
      />
      {service}
    </div>
  );
};

const Offering = () => {
  const services = [
    {
      category: "Logos",
      subcategories: [
        "Logos",
        "UX Design",
        "App Design",
        "UX Research",
        "Iconography",
      ],
    },
    {
      category: "UI/UX Design",
      subcategories: [
        "UI Design",
        "Web Design",
        "Landing Page",
        "UX Auditing",
        "Dashboard Design",
      ],
    },
    { category: "Additional", subcategories: ["Wireframing & Prototyping"] },
  ];
  return (
    <div className="relative  w-full mt-4 lg:px-8 xl:px-0 bg-[#08081E]">
      <Image
        src={spotLight}
        alt=""
        width={300}
        height={1000}
        className="md:block hidden h-[300px] absolute -top-[50px] sm:top-[260px] lg:-top-[50px] left-0 "
      />
      <div className="max-w-[1250px] relative  w-full  mx-auto overflow-hidden">
        <Particles
          quantity={30}
          ease={200}
          refresh
          size={0.7}
          className="!z-40 absolute top-0 left-0 w-full h-full"
        />
        <div className="flex flex-col-reverse sm:px-20 lg:px-0 lg:flex-row relative gap-16 sm:gap-16 lg:gap-12 xl:gap-16 w-full justify-center items-center">
          {/* <Image
            src={darkGred}
            alt=""
            width={100}
            height={100}
            className="w-full absolute hidden md:opacity-50 lg:opacity-100 md:block  z-10 max-w-[725px] -top-6 left-0 md:left-12 blur-md"
          /> */}

          {/* <Image
            src={darkGred}
            alt=""
            width={100}
            height={100}
            className="w-full absolute hidden md:opacity-50 lg:opacity-100 md:block  z-20 max-w-[725px] rotate-180 -bottom-10 blur-md left-0 md:left-12"
          /> */}
          <div className="relative flex w-full">

          
          <Marquee
            pauseOnHover
            vertical
            className="[--duration:20s] w-full h-[500px]"
          >
            <div className="grid  grid-cols-2 w-full gap-x-4 gap-y-6">
              {services[0].subcategories.map((service, index) => {
                return <Card className="py-5" key={index} service={service} />;
              })}
              {services[1].subcategories.map((service, index) => {
                return <Card className="py-5" key={index} service={service} />;
              })}
              {services[2].subcategories.map((service, index) => {
                return (
                  <Card
                    key={index}
                    service={service}
                    className="!col-span-2 py-5"
                  />
                );
              })}
            </div>
          </Marquee>

          <div className="pointer-events-none absolute top-0 w-full h-[100px] bg-gradient-to-b from-[#08081E]"></div>
          <div className="pointer-events-none absolute bottom-0 w-full h-[100px] bg-gradient-to-t from-[#08081E]"></div>

          </div>

          <div className="w-full px-8 sm:pr-10 lg:px-0 xl:px-8 relative flex flex-col gap-6 sm:gap-8 lg:gap-4 xl:gap-8">
            <div className="z-10 relative w-fit text-left">
              <Image
                src={navbarDiamond}
                width={32}
                height={32}
                alt=""
                className="w-8 h-8 absolute top-1/2 -translate-y-1/2 -right-[40px]"
              />

              <div
                class="max-w-[150px]  absolute top-1/2 -right-[140px] bg-white opacity-20 w-full h-[2px] -translate-y-1/2 !z-50"
                style={{
                  background:
                    "linear-gradient(-90deg, #000000 0%, rgba(255, 255, 255, 1) 47.22%)",
                }}
              ></div>

              <p className="uppercase text-lg font-semibold tracking-[0%] bg-clip-text text-transparent bg-gradient-to-r from-[#01B0EA] to-[#01B0EA]/90">
                OFFERINGS
              </p>
            </div>
            <p className="z-10 text-white text-[32px] leading-[44px] sm:text-[40px] lg:text-[32px] xl:text-[40px] sm:leading-[60px]  font-bold font-montserrat ">
              All Your Design Needs, Handled in
              <span className="relative">
                <span className="opacity-50 ml-[5px] ">One Place</span>{" "}
          
              </span>
              <span className="inline-block">

                <Image src={stars} className="w-[40px] h-[40px]" alt="star" />
              </span>
              
            </p>

            <div className="hidden lg:flex h-[100px] w-[100px] bg-[#01B0EA] rounded-full blur-[80px]  absolute top-[70px] left-[120px] z-0"/>
            {/* <Image
              src={bgGred}
              alt=""
              width={100}
              height={100}
              className="w-full hidden lg:flex absolute top-1/2 -translate-y-1/2 z-10 -left-[250px]"
            /> */}

            <BeamButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offering;
