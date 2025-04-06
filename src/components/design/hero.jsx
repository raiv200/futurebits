"use client"

import React from "react";
import { IoIosStar } from "react-icons/io";
import Button from "../landing-page-AI/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import navbarDiamond from "../../../public/navbar.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import POne from "../../../public/design/profiles/profile1.png";
import PTwo from "../../../public/design/profiles/profile2.png";
import PThree from "../../../public/design/profiles/profile3.png";
import PFour from "../../../public/design/profiles/profile4.png";
import PFive from "../../../public/design/profiles/profile5.png";
import PSix from "../../../public/design/profiles/profile6.png";
import LightingStar from "../../../public/design/hero/starlight.png";
import StarImg from "../../../public/design/hero/star.svg";
import { BorderBeam } from "../ui/beam";
import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import BeamButton from "./BeamButton";
import DesignNavbar from "./DesignNavbar";

export const AnimatedBorderButtonBlue = ({
  children = "sdf",
  href,
  className,
}) => {
  return (
    <Link
      href={"https://cal.com/futurebits/design?duration=30"}
      className="!w-fit"
    >
      <div className="relative ">
        {/* Border container */}
        <div className="absolute left-0 top-0 rounded-full border-animated p-[1.5px]">
          {/* Content inside the border */}
          <Button
            // variant='figma'
            size="navbarButton"
            className={`relative z-10 lg:max-w-[220px] h-12 transition-all duration-300  hover:brightness-110 font-semibold leading-[100%] text-lg ${
              className || ""
            }`}
          >
            {children}
          </Button>
        </div>

        {/* Animation style */}
        <style jsx global>{`
          .border-animated {
            position: relative;
            overflow: hidden;
          }

          .border-animated::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              90deg,
              #060618 0%,
              #2e2688 30%,
              #01b0ea 45%,
              #ffffff 50%,
              #01b0ea 55%,
              #2e2688 70%,
              #060618 100%
            );
            background-size: 300% 100%;
            border-radius: 9999px;
            animation: moveGradient 3s linear infinite;
          }

          .border-animated::after {
            content: "";
            position: absolute;
            top: 1.5px;
            left: 1.5px;
            right: 1.5px;
            bottom: 1.5px;
            background-color: rgba(6, 6, 24, 1);
            border-radius: 9999px;
            z-index: 1;
          }

          @keyframes moveGradient {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
        `}</style>
      </div>
    </Link>
  );
};

const PrfolieLists = [
  {
    img: POne,
    alt: "Profile 1",
  },
  {
    img: PTwo,
    alt: "Profile 2",
  },
  {
    img: PThree,
    alt: "Profile 3",
  },
  {
    img: PFour,
    alt: "Profile 4",
  },
  {
    img: PFive,
    alt: "Profile 5",
  },
  {
    img: PSix,
    alt: "Profile 6",
  },
];

const Hero = () => {
  return (
    <section className=" w-full flex flex-col z-10 mx-auto gap-5 ">
      <DesignNavbar />

      <div className="w-full mt-[50px] lg:mt-[80px] lg:max-w-[1250px] mx-auto ">
        <motion.div
          className=" flex w-full flex-col  sm:flex-row gap-4 items-center justify-center mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center -space-x-4 "
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {PrfolieLists.map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
              >
                <Image
                  src={_.img}
                  alt={_.alt}
                  width={1000}
                  height={1000}
                  className={` w-[45px] sm:w-[35px] lg:w-[45px]  aspect-square rounded-full object-cover cursor-pointer`}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex flex-col gap-1 "
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex gap-1 items-center sm:justify-normal justify-center">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
                  >
                    <Image src={StarImg} className="w-[18px] h-[18px] sm:w-[12px] sm:h-[12px] lg:w-[18px] lg:h-[18px]" alt="star" />
                    {/* <IoIosStar className="text-[#F0C419]" size={18} /> */}
                  </motion.div>
                ))}
            </div>
            <p className="opacity-80  text-[18px] sm:text-[14px] lg:text-[18px] text-white font-poppins">
              Trusted by Top Leading Companies
            </p>
          </motion.div>
        </motion.div>

        <div className="w-full xl:min-w-[1250px] relative">
          <motion.div
            className="w-full hidden sm:block left-0 absolute -top-[75px] h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, #000000 0%, rgba(255, 255, 255, 0.4) 50%, #000000 100%)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* <BorderBeam reverse={"false"} colorFrom="#ffffff" colorTo="#ffff10" /> */}
          </motion.div>
          <motion.div
            className="h-[480px] z-0 hidden animatedLine sm:block absolute -top-[110px] left-[60px] lg:left-[130px] w-[2px] opacity-50"
            style={{
              background:
                "linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0.4) 50%, #000000 100%)",
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <BorderBeam reverse={"false"} colorFrom="#ffffff" colorTo="#ffff10" /> */}
          </motion.div>
          <motion.div
            className="w-full hidden sm:block left-0 absolute top-[20px] h-[2px] "
            style={{
              background:
                "linear-gradient(90deg, #000000 0%, rgba(255, 255, 255, 0.4) 50%, #000000 100%)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* <BorderBeam reverse={"false"} colorFrom="#ffffff" colorTo="#ffff10" /> */}
          </motion.div>
          <motion.div
            className="h-[480px] z-0 line animatedLine hidden sm:block absolute -top-[110px] left-[120px] lg:left-[210px] w-[2px] opacity-50"
            style={{
              background:
                "linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0.4) 50%, #000000 100%)",
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* <BorderBeam reverse={"false"} colorFrom="#ffffff" colorTo="#ffff10" /> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="hidden sm:block"
          >
            <Image
              src={navbarDiamond}
              width={32}
              height={32}
              alt=""
              className="w-8 h-8 z-20 absolute top-[5px] left-[105px] lg:left-[195px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="hidden sm:block"
          >
            <Image
              src={navbarDiamond}
              width={32}
              height={32}
              alt=""
              className="w-8 h-8 z-20 absolute top-[5px] right-[105px] lg:right-[195px]"
            />
          </motion.div>
          
          <motion.div
            className="h-[480px] z-0 animatedLine hidden sm:block absolute -top-[110px] right-[120px] lg:right-[210px] w-[2px] opacity-50"
            style={{
              background:
                "linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0.4) 50%, #000000 100%)",
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* <BorderBeam reverse={"false"} colorFrom="#ffffff" colorTo="#ffff10" /> */}
          </motion.div>
          <motion.div
            className="w-full hidden sm:block  absolute -bottom-[220px] h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, #000000 0%, rgba(255, 255, 255, 0.4) 50%, #000000 100%)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* <BorderBeam reverse={"false"} colorFrom="#ffffff" colorTo="#ffff10" /> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="hidden sm:block"
          >
            <Image
              src={navbarDiamond}
              width={32}
              height={32}
              alt=""
              className="w-8 h-8 z-20 absolute top-[202px] left-[105px] lg:left-[195px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.95 }}
            className="hidden sm:block"
          >
            <Image
              src={navbarDiamond}
              width={32}
              height={32}
              alt=""
              className="w-8 h-8 z-20 absolute top-[202px] right-[105px] lg:right-[195px]"
            />
          </motion.div>
          <motion.div
            className="h-[480px] z-0 hidden animatedLine sm:block absolute -top-[110px] right-[60px] lg:right-[130px] w-[2px] opacity-50"
            style={{
              background:
                "linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0.4) 50%, #000000 100%)",
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {/* <BorderBeam reverse={"false"} colorFrom="#ffffff" colorTo="#ffff10" /> */}
          </motion.div>
        </div>

        <motion.div
          className=""
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h1 className="mt-8 sm:mt-16  text-[26px] leading-[36px] sm:text-[38px] sm:leading-[36px] lg:text-[44px] md:leading-[56px] xl:text-[58px] xl:mt-8 font-bold xl:leading-[76px] text-center sm:tracking-normal text-white relative font-montserrat">
            Your Design & Tech <br />
            <span className="relative inline-block xl:ml-[-80px]">
              Partner for Growth.
              <Image
                src={LightingStar}
                width={60}
                height={60}
                alt="lighting star"
                style={{ transform: "scaleX(-1)" }}
                className="absolute bottom-2 rotate-[-45deg] -right-[40px] sm:-right-[70px] max-w-[40px] sm:max-w-[60px] w-full "
              />
            </span>
          </h1>
        </motion.div>

        <motion.div
          className="font-poppins font-light text-[16px] mt-6 sm:mt-20  sm:text-[18px] text-white/50 lg:leading-[30px] px-[30px] sm:px-[30px] max-w-[650px] w-full mx-auto  text-center xl:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          We believe that design isn't just about looking good—it's
          <br className="sm:block hidden" /> about achieving your business
          goals. Let's design
          <br className="sm:block hidden" /> something that works for you.
        </motion.div>
      </div>

      <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      
      className=" flex flex-col mt-8 sm:mt-8 lg:mt- xl:mt-5  px-[16px] sm:px-0 sm:flex-row gap-4 justify-center">
        <Link
          href="#work"
          className="w-full sm:w-[240px] inline-flex items-center justify-center gap-2 rounded-full border text-white border-white/30 bg-transparent hover:bg-white/20 px-6 py-3 text-[18px] sm:text-[18px] font-medium transition-all"
        >
          Recent Work
          <ChevronRightIcon strokeWidth={3} className="h-4 w-4 ml-1" />
        </Link>
        <Link href="#contact" className=" ">
          <BeamButton />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
