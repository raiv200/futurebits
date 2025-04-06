"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  index1,
  index2,
  index3,
  index4,
  index5,
  index6,
  index7,
  index8,
  index9,
  index10,
  index11,
  index12,
  index13,
} from "@/assets/landing-page-AI/index";
import LeftDecoration from "@/assets/landing-page-AI/LeftRectangle.svg";
import RightDecoration from "@/assets/landing-page-AI/RightRectangle.svg";

import { motion, useInView } from "framer-motion";

const Engaged = () => {
  // Define logo groups with consistent dimensions
  const logoGroups = [
    // First row
    [
      { src: index1, alt: "Elements of AI" },
      { src: index2, alt: "interdisciplinary-college" },
      { src: index3, alt: "futurice" },
      { src: index4, alt: "tutke" },
    ],
    // Second row
    [
      { src: index5, alt: "PARTIAL SPACE" },
      { src: index6, alt: "Apart" },
      { src: index7, alt: "Swissaisafetycamp" },
      { src: index8, alt: "BlueDot Impact" },
    ],
    // Third row
    [
      { src: index9, alt: "Aalto University" },
      { src: index10, alt: "European Network for AI Safety" },
      { src: index11, alt: "Orion Pharma" },
      { src: index12, alt: "University of Helsinki" },
      { src: index13, alt: "AISC" },
    ],
  ];

  // Split logos into two rows for medium screen animation
  const mdLogoRows = [
    [...logoGroups[0], ...logoGroups[1]], // First row for md screens
    [...logoGroups[2], ...logoGroups[0].slice(0, 2)], // Second row for md screens
  ];

  // Flatten all logos into a single array for mobile view
  const allLogos = [
    { src: index1, alt: "Elements of AI" },
    { src: index2, alt: "interdisciplinary-college" },
    { src: index3, alt: "futurice" },
    { src: index4, alt: "tutke" },

    { src: index5, alt: "PARTIAL SPACE" },
    { src: index6, alt: "Apart" },
    { src: index7, alt: "Swissaisafetycamp" },
    { src: index8, alt: "BlueDot Impact" },

    { src: index9, alt: "Aalto University" },
    { src: index10, alt: "European Network for AI Safety" },
    { src: index11, alt: "Orion Pharma" },
    { src: index12, alt: "University of Helsinki" },
    { src: index13, alt: "AISC" },
  ];

  // State to store animation durations
  const [animationDurations, setAnimationDurations] = useState({
    mobile: 0.2,
    mdRow1: 0.1,
    mdRow2: 0.1,
  });

  // Update animation durations based on content width
  useEffect(() => {
    const updateAnimationDurations = () => {
      const mobileContent = document.querySelector(".mobile-marquee-content");
      const mdRow1Content = document.querySelector(".md-row1-marquee-content");
      const mdRow2Content = document.querySelector(".md-row2-marquee-content");

      if (mobileContent && mdRow1Content && mdRow2Content) {
        // Calculate durations based on content width (pixels ÷ speed in pixels per second)
        const pixelsPerSecond = 45000;

        setAnimationDurations({
          mobile: Math.max(15, mobileContent.scrollWidth / pixelsPerSecond),
          mdRow1: Math.max(20, mdRow1Content.scrollWidth / pixelsPerSecond),
          mdRow2: Math.max(20, mdRow2Content.scrollWidth / pixelsPerSecond),
        });
      }
    };

    // Initial update and listen for resize
    updateAnimationDurations();
    window.addEventListener("resize", updateAnimationDurations);

    return () => {
      window.removeEventListener("resize", updateAnimationDurations);
    };
  }, []);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div className="relative bg-black py-20 md:py-32">
      {/* Background gradient/glow */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[829px] md:h-[629px] bg-[#2E2688] opacity-30 rounded-full z-0"
        style={{ filter: "blur(80px)", transform: "translate(-30%, 90%)" }}
      ></div>

      {/* Side decorations positioned absolutely but outside the content area */}
      <div className="absolute h-full left-0 top-0 z-0">
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

      <div className="absolute h-full right-0 top-0 z-0">
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

      {/* Content container with proper padding */}
      <div className="max-w-6xl mx-auto px-8 md:px-16 relative z-10">
        {/* Heading - centered with more space below */}
        <h2 className="font-poppins text-center text-[20px] fotn-normal text-white/50 leading-[30px] mb-16">
          Our AI lead is engaged with leading AI safety and research communities
        </h2>

        {/* CSS-based animations */}
        <style jsx>{`
          /* Keyframes for left-to-right continuous animation */
          @keyframes marqueeLeftToRight {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes marqueeRightToLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          /* Marquee container and content */
          .marquee {
            position: relative;
            width: 100%;
            overflow: hidden;
          }

          /* Animation settings for different screens */
          .mobile-marquee-content {
            display: flex;
            animation: marqueeLeftToRight ${animationDurations.mobile}s linear
              infinite;
          }

          .md-row1-marquee-content {
            display: flex;
            animation: marqueeLeftToRight ${animationDurations.mdRow1}s linear
              infinite;
          }

          .md-row2-marquee-content {
            display: flex;
            animation: marqueeLeftToRight ${animationDurations.mdRow2}s linear
              infinite;
          }
        `}</style>

        {/* Mobile scrolling logos (visible on small screens only) */}
        <div className="sm:hidden overflow-hidden">
          <div className="marquee">
            <div className="mobile-marquee-content">
              {/* Original logos */}
              {allLogos.map((logo, index) => (
                <div
                  key={`mobile-logo-${index}`}
                  className="flex-shrink-0 mx-6"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={0}
                    height={45}
                    style={{
                      height: "45px",
                      width: "auto",
                      filter: "brightness(1)",
                    }}
                    className="object-contain"
                  />
                </div>
              ))}
              {/* Duplicate logos for seamless loop */}
              {allLogos.map((logo, index) => (
                <div
                  key={`mobile-logo-dup-${index}`}
                  className="flex-shrink-0 mx-6"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={0}
                    height={45}
                    style={{
                      height: "45px",
                      width: "auto",
                      filter: "brightness(1)",
                    }}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Medium screen two-row animation (visible from sm to lg) */}
        <div className="hidden sm:block lg:hidden">
          {/* First row */}
          <div className="mb-12 overflow-hidden">
            <div className="marquee">
              <div className="md-row1-marquee-content">
                {/* First row logos */}
                {mdLogoRows[0].map((logo, index) => (
                  <div
                    key={`md-row1-logo-${index}`}
                    className="flex-shrink-0 mx-8"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={0}
                      height={45}
                      style={{
                        height: "45px",
                        width: "auto",
                        filter: "brightness(1)",
                      }}
                      className="object-contain"
                    />
                  </div>
                ))}
                {/* Duplicate logos for seamless loop */}
                {mdLogoRows[0].map((logo, index) => (
                  <div
                    key={`md-row1-logo-dup-${index}`}
                    className="flex-shrink-0 mx-8"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={0}
                      height={45}
                      style={{
                        height: "45px",
                        width: "auto",
                        filter: "brightness(1)",
                      }}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="overflow-hidden">
            <div className="marquee">
              <div className="md-row2-marquee-content">
                {/* Second row logos */}
                {mdLogoRows[1].map((logo, index) => (
                  <div
                    key={`md-row2-logo-${index}`}
                    className="flex-shrink-0 mx-8"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={0}
                      height={45}
                      style={{
                        height: "45px",
                        width: "auto",
                        filter: "brightness(1)",
                      }}
                      className="object-contain"
                    />
                  </div>
                ))}
                {/* Duplicate logos for seamless loop */}
                {mdLogoRows[1].map((logo, index) => (
                  <div
                    key={`md-row2-logo-dup-${index}`}
                    className="flex-shrink-0 mx-8"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={0}
                      height={45}
                      style={{
                        height: "45px",
                        width: "auto",
                        filter: "brightness(1)",
                      }}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Large screen static logo grid (visible on lg screens and up) */}
        <div  ref={containerRef} className="hidden lg:flex lg:flex-col space-y-16 lg:space-y-9 px-4">
          {/* Map each row of logos */}
          {logoGroups.map((group, groupIndex) => (
            <div
              key={`group-${groupIndex}`}
              className="flex flex-wrap justify-center items-center gap-x-12 lg:gap-x-12 gap-y-10"
            >
              {/* Map each logo in the row */}
              {group.map((logo, logoIndex) => {
            const delay = (groupIndex * group.length + logoIndex) * 0.2; // stagger delay

            return (
              <motion.div
                key={`logo-${groupIndex}-${logoIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.4,
                  delay,
                  ease: 'easeOut',
                }}
                className="flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={0}
                  height={45}
                  style={{
                    height: 'auto',
                    width: 'auto',
                    maxHeight: '45px',
                    filter: 'brightness(1)',
                  }}
                  className="object-contain w-auto h-auto"
                />
              </motion.div>
            );
          })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Engaged;
