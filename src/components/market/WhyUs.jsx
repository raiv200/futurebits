"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ShimerButton from "./ShimerButton";
import "swiper/css";
import "swiper/css/pagination";

// Import placeholder images - replace with your actual paths
import humanMachineIcon from "@/assets/market/human-machine-icon.svg";
import automationIcon from "@/assets/market/automation-icon.svg";
import partnershipIcon from "@/assets/market/partnership-icon.svg";
import futurebitsLogo from "@/assets/market/futurebits-logo.svg";

const FeatureCircle = ({ title, description, icon, position, isActive }) => {
  // Position classes with explicit dimensions and more specific positioning for desktop
  const positionClasses = {
    left: "lg:absolute lg:left-24 lg:-bottom-[15%] lg:transform lg:-translate-x-1/2",
    bottom: "lg:absolute lg:-bottom-[15%] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:translate-y-1/2",
    right: "lg:absolute lg:right-20 lg:-bottom-[32%] lg:transform lg:translate-x-1/2 lg:-translate-y-1/2"
  };

  return (
    <div className={`${positionClasses[position]} w-full lg:w-[320px] mb-16 lg:mb-0 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
      <div className="flex flex-col items-center text-center">
        {/* Circular image with explicit styling */}
        <div className="relative w-32 h-32 lg:w-40 lg:h-40 mb-8 lg:mb-[54px] rounded-full flex items-center justify-center overflow-hidden">
          <Image
            src={icon}
            alt={`${title} illustration`}
            width={160}
            height={160}
            className="w-full h-full object-contain p-2"
            priority
          />
        </div>

        {/* Title and description */}
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-[#FFFFFFB0] text-base leading-[26px]">
          {description}
        </p>
      </div>
    </div>
  );
};

const WhyUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const features = [
    {
      id: 1,
      title: "Human-Machine Synergy",
      description: "Harness the power of human intuition combined with advanced automation techniques to unlock new realms of wealth creation.",
      icon: humanMachineIcon,
      position: "left"
    },
    {
      id: 2,
      title: "Automation",
      description: "From Indian equities to Crypto currency, if it's electronically tradable, we automate it, so providing you with unparalleled efficiency and agility.",
      icon: automationIcon,
      position: "bottom"
    },
    {
      id: 3,
      title: "Trusted Partnerships",
      description: "We collaborate with leading exchanges and brokers globally, ensuring the highest standards of security and reliability for your investments.",
      icon: partnershipIcon,
      position: "right"
    },
  ];

  const slides = features.map(feature => ({
    content: (
      <FeatureCircle
        key={feature.id}
        title={feature.title}
        description={feature.description}
        icon={feature.icon}
        position={feature.position}
      />
    )
  }));

  return (
    <section className="py-16 sm:mb-20 mb-0 relative font-poppins overflow-visible">
      {/* Background effects */}
      <div
        className="xl:block hidden absolute xl:left-[-20%] top-[0%] -translate-y-1/2 w-[250px] sm:w-[410px] h-[30px] sm:h-[65px] z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(45deg) translateX(60%)",
        }}
      ></div>

      <div
        className="xl:block hidden absolute right-[-15%] xl:right-[-12%] top-[0%] -translate-y-1/2 w-[250px] lg:w-[340px] xl:w-[410px] h-[30px] xl:h-[65px] z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(-40deg) translateX(-60%)",
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header for mobile */}
        <div className="sm:hidden block text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="uppercase text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#999999]">
              WHY US
            </span>
          </div>
          <h2 className="text-3xl md:text-[38px] leading-[60px] font-bold text-white font-montserrat">
            What Sets us Apart?
          </h2>
        </div>

        {/* Mobile view - carousel */}
        <div className="block lg:hidden">
          {/* Central Logo for mobile */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              {/* Background gradient circle with updated border */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full" style={{
                background: "linear-gradient(180deg, rgba(6, 6, 24, 0.2) 0.11%, rgba(255, 255, 255, 0.1) 100%)",
                backdropFilter:"blur(42px)"
              }}></div>
              {/* Logo container */}
              <div className="relative w-[200px] h-[200px] rounded-full flex items-center justify-center z-20">
                <Image
                  src={futurebitsLogo}
                  alt="FUTUREBITS TECHNOLOGY"
                  width={140}
                  height={120}
                  className="object-contain p-4 z-30"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Carousel for features on mobile */}
          <div className="relative w-full h-full items-center mx-auto z-20">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              centeredSlides={true}
              autoplay={{ delay: 5000 }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full h-full flex"
            >
              {features.map((feature, index) => (
                <SwiperSlide
                  key={index}
                  className={`${
                    index === activeIndex
                      ? "opacity-100"
                      : "opacity-70"
                  } my-10 relative transition-opacity duration-300 ease-linear flex items-center justify-center`}
                >
                  {index === activeIndex && (
                    <div className="left-[35%] top-[10px] h-[120px] w-[120px] absolute rounded-full blur-[90px] z-50"></div>
                  )}
                  <FeatureCircle
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    position={feature.position}
                    isActive={index === activeIndex}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Pagination indicators */}
            <div className="flex items-center w-full absolute -bottom-[40px] justify-center mt-4 gap-5">
              {features.map((_, index) => (
                <div
                  key={index}
                  className={`rotate-45 transition-all duration-300 ${
                    index === activeIndex
                      ? "w-[10px] h-[10px] bg-[#D9D9D9] scale-[1.02]"
                      : "w-[9.5px] h-[9.5px] bg-[#D9D9D9]/20"
                  }`}
                >
                  <span className={`${index === activeIndex ? 'absolute blur-[5px] bg-[#ffffff]' : ''} w-[10px] h-[10px]`}>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop view - circular layout */}
        <div className="hidden lg:flex justify-center items-center mb-40 pt-20 pb-40 lg:h-[1450px] overflow-hidden">
          {/* Outer circle - updated to conic gradient that shows only at the bottom */}
          <div 
            className="relative w-[900px] h-[900px] rounded-full"
            style={{
              background: "linear-gradient(90.4deg, rgba(6, 6, 24, 0.3) 0.3%, rgba(255, 255, 255, 0.3) 10.44%, rgba(255, 255, 255, 0.24) 30.73%, rgba(255, 255, 255, 0.3) 51.02%, rgba(255, 255, 255, 0.24) 71.31%, rgba(255, 255, 255, 0.18) 91.59%, rgba(6, 6, 24, 0.3) 101.74%)",
              boxShadow: "0 0 0 1px transparent",
              border: "1px solid",
              borderColor: "transparent",
              backgroundImage: "linear-gradient(#080808, #080808), conic-gradient(from 360deg at 50% 50%, #060618 0%, #060618 25%, rgba(6, 6, 24, 0.3) 30%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.24) 45%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.24) 55%, rgba(255, 255, 255, 0.18) 60%, rgba(6, 6, 24, 0.3) 65%, #060618 70%, #060618 100%)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box"
            }}
          >
            {/* Inner circle with similar approach but different size */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
              style={{
                background: "linear-gradient(90.4deg, rgba(6, 6, 24, 0.3) 0.3%, rgba(255, 255, 255, 0.3) 10.44%, rgba(255, 255, 255, 0.24) 30.73%, rgba(255, 255, 255, 0.3) 51.02%, rgba(255, 255, 255, 0.24) 71.31%, rgba(255, 255, 255, 0.18) 91.59%, rgba(6, 6, 24, 0.3) 101.74%)",
                boxShadow: "0 0 0 1px transparent",
                border: "1px solid",
                borderColor: "transparent",
                backgroundImage: "linear-gradient(#080808, #080808), conic-gradient(from 366deg at 50% 50%, #060618 0%, #060618 25%, rgba(6, 6, 24, 0.3) 30%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.24) 45%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.24) 55%, rgba(255, 255, 255, 0.18) 60%, rgba(6, 6, 24, 0.3) 65%, #060618 70%, #060618 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box"
              }}
            >
              {/* Section header moved inside the inner circle - desktop only */}
              <div className="absolute top-[0%] left-1/2 -translate-x-1/2 text-center w-full px-8">
                <div className="inline-flex items-center justify-center mb-4">
                  <span className="uppercase text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#999999]">
                    WHY US
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white font-montserrat">
                  What Sets us Apart?
                </h2>
              </div>
            </div>
            
            {/* Central Logo - with updated conic gradient border */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Logo background with conic gradient border */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full z-20" 
                style={{
                  background: "linear-gradient(180deg, rgba(6, 6, 24, 0.2) 0.11%, rgba(255, 255, 255, 0.1) 100%)",
                  backdropFilter: "blur(42px)",
                  border: "1px solid",
                  borderColor: "transparent",
                  backgroundImage: "linear-gradient(), conic-gradient(from 360deg at 50% 50%, #060618 0%, #060618 25%, rgba(6, 6, 24, 0.3) 30%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.24) 45%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.24) 55%, rgba(255, 255, 255, 0.18) 60%, rgba(6, 6, 24, 0.3) 65%, #060618 70%, #060618 100%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box"
                }}
              ></div>
              
              {/* Logo container with highest z-index */}
              <div className="relative w-[400px] h-[400px] rounded-full flex items-center justify-center z-30">
                <Image
                  src={futurebitsLogo}
                  alt="FUTUREBITS TECHNOLOGY"
                  width={228}
                  height={200}
                  className="object-contain p-4 z-40"
                  priority
                />
              </div>
            </div>
            
            {/* Features arranged in a circular pattern */}
            {features.map((feature) => (
              <FeatureCircle
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                position={feature.position}
              />
            ))}
          </div>
        </div>
        
        {/* Button positioned correctly for both mobile and desktop */}
        <div className="flex justify-center items-center mt-[115px] sm:mt-0">
          <div className="relative ">
          <ShimerButton size="lg" href="/book-call" className="text-[20px]">
            Book a Call
          </ShimerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;