"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../landing-page-AI/Button";
import StarImg from "../../../public/design/hero/star.svg";
import hero from "@/assets/market/hero.svg";
// Profile images
import POne from "../../../public/design/profiles/profile1.png";
import PTwo from "../../../public/design/profiles/profile2.png";
import PThree from "../../../public/design/profiles/profile3.png";
import PFour from "../../../public/design/profiles/profile4.png";
import PFive from "../../../public/design/profiles/profile5.png";
import PSix from "../../../public/design/profiles/profile6.png";
import Navbar from "../landing-page-AI/Navbar";
import BeamButton from "./BeamButton";
import { ChevronRightIcon } from "lucide-react";
import ShimmerButton from "./ShimerButton";

// Animated text options
const animatedWords = ["Trading", "Analysis", "Strategy"];

export const AnimatedBorderButtonBlue = ({
  children = "Button Text",
  href,
  className,
}) => {
  return (
    <Link
      href={href || "https://cal.com/futurebits/design?duration=30"}
      className="!w-fit"
    >
      <div className="relative">
        {/* Border container */}
        <div className="absolute left-0 top-0 rounded-full border-animated p-[1.5px]">
          {/* Content inside the border */}
          <Button
            size="navbarButton"
            className={`relative z-10 lg:max-w-[220px] h-12 transition-all duration-300 hover:scale-105 hover:brightness-110 font-semibold leading-[100%] text-lg ${
              className || ""
            }`}
          >
            {children}
          </Button>
        </div>
      </div>
    </Link>
  );
};

const ProfileAvatars = () => {
  const profiles = [
    { img: POne, alt: "Profile 1" },
    { img: PTwo, alt: "Profile 2" },
    { img: PThree, alt: "Profile 3" },
    { img: PFour, alt: "Profile 4" },
    { img: PFive, alt: "Profile 5" },
    { img: PSix, alt: "Profile 6" },
  ];

  return (
    <motion.div
      className="flex items-center -space-x-4"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {profiles.map((profile, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
        >
          <Image
            src={profile.img}
            alt={profile.alt}
            width={1000}
            height={1000}
            className="w-[45px] aspect-square rounded-full object-cover cursor-pointer"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

const RatingStars = () => {
  return (
    <motion.div
      className="flex gap-1 items-center sm:justify-normal justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
          >
            <Image src={StarImg} width={18} height={18} alt="star" />
          </motion.div>
        ))}
    </motion.div>
  );
};

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const word = animatedWords[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayWord(word.substring(0, displayWord.length + 1));

        if (displayWord.length === word.length) {
          // Wait a bit when word is complete
          setTypingSpeed(1500);
          setIsDeleting(true);
        } else {
          setTypingSpeed(150);
        }
      } else {
        setDisplayWord(word.substring(0, displayWord.length - 1));

        if (displayWord.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % animatedWords.length);
          setTypingSpeed(500);
        } else {
          setTypingSpeed(50);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentWordIndex, displayWord, isDeleting, typingSpeed]);

  return (
    <section className="relative w-full h-screen">
      {/* Background with image and gradient overlay */}
      <div className="absolute inset-0 z-10">
        {/* Background image */}
        <div
          className="inset-0 opacity-100 bg-auto sm:bg-cover sm:bg-center"
          style={{
            backgroundImage: `url(${hero.src})`,
            width: "100%",
            height: "100%",
          }}
        />

        {/* Gradient overlay - dark only, no white */}
        <div
          className="absolute inset-0 "
          style={{
            background:
              "linear-gradient(180deg, #000000 62.59%, rgba(0, 0, 0, 0.3) 100%);",
          }}
        />
      </div>

      {/* Content container */}
      <div className="max-w-[1180px] w-full flex flex-col z-10 mx-auto gap-5 md:py-24 py-16 px-4 relative space-y-3 md:space-y-6">
        {/* Trust indicators */}
        <motion.div
          className="flex w-full flex-col sm:flex-row gap-4 items-center justify-center mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ProfileAvatars />
          <motion.div
            className="flex flex-col gap-1"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <RatingStars />
            <p className="opacity-80 text-white font-poppins">
              Trusted by Top Leading Companies
            </p>
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h1 className="text-xl md:text-[36px] md:leading-[56px] lg:text-[44px] xl:text-[61px] font-bold xl:leading-[88px] text-center text-white relative font-montserrat">
            Boost your{" "}
            <span className="relative inline-block">
              {/* Ellipse gradient blur effect behind the animated text */}
              <div
                className="lg:w-[236px] lg:h-[103px] w-[100px] h-[53px]"
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "-15px",
                  background:
                    "#FFFFFF4D",
                  filter: "blur(47px)",
                  zIndex: "-1",
                }}
              />

              {displayWord}

              {/* White vertical rectangle with glowing effect at the end of the word */}
              {/* {displayWord.length > 0 && (
                <div
                  className="lg:w-[9px] lg:h-[65px] mt-[30px] w-[8px] h-[50px]"
                  style={{
                    position: "absolute",
                    left:
                      window.innerWidth >= 1024
                        ? displayWord.length * 34 + "px"
                        : displayWord.length * 0 + "px",
                    top: "-22px",
                    background: "#FFFFFF",
                    borderRadius: "40px",
                    zIndex: "1",
                    boxShadow:
                      "0 0 15px 5px rgba(255, 255, 255, 0.2)",
                    animation: "pulse infinite",
                  }}
                />
              )} */}
            </span>{" "}
            Performance
            <br />
            with Technology & Automation
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="xl:max-w-[750px] max-w-[700px] w-full mx-auto text-sm sm:text-base lg:text-lg text-[#FFFFFF80] text-center leading-[32px]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Transform your wealth-building strategies with FutureBits - where
          expert human insights are amplified with effective and efficient
          automations.
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex items-center justify-center flex-col sm:flex-row gap-4 sm:gap-8 mt-14"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link
            href="#work"
            className="w-[170px] text-white sm:w-[240px] inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#ffffff] bg-transparent hover:bg-white/20 px-6 py-3 text-[14px] sm:text-[18px] font-semibold transition-all"
          >
            Recent Work
            <ChevronRightIcon strokeWidth={3} className="h-4 w-4 ml-1" />
          </Link>
          <ShimmerButton
            size="lg"
            href="/book-call"
            className="text-[20px]"
          >
            Book a Call
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
