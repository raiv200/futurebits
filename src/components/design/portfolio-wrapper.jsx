import React from "react";
import { PortfolioCard } from "./portfolio-card";
import navbarDiamond from "../../../public/navbar.svg";
import Image from "next/image";
import Particles from "../ui/particles";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";

const PortfolioWrapper = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="relative w-fit mx-auto  text-center">
        <Image
          src={navbarDiamond}
          width={32}
          height={32}
          alt=""
          className="w-8 h-8 absolute top-1/2 -translate-y-1/2 -right-[50px]"
        />
        <Image
          src={navbarDiamond}
          width={32}
          height={32}
          alt=""
          className="w-8 h-8 absolute top-1/2 -translate-y-1/2 -left-[50px]"
        />
        <div class="sm:max-w-[150px] sm:w-full absolute top-1/2 -right-[190px] lg:-right-[180px] bg-white opacity-20 w-full h-[2px] -translate-y-1/2"
        style={{
          background: "linear-gradient(-90deg, #000000 0%, rgba(255, 255, 255, 1) 47.22%)",
        }}


        ></div>
        <div class="sm:max-w-[150px] absolute top-1/2  -left-[190px]lg:-left-[180px] bg-white opacity-20 w-full h-[2px] -translate-y-1/2" style={{
          background: "linear-gradient(90deg, #000000 0%, rgba(255, 255, 255, 1) 47.22%)",
        }}></div>
        <AnimatedShinyText>

        <p className="uppercase text-lg font-semibold tracking-[0%] text-[#01B0EA]">
          OUR PORTFOLIO
        </p>
        </AnimatedShinyText>
      </div>
       <Particles quantity={30} ease={200}  refresh size={0.7} className="!z-40 absolute top-0 left-0 w-full h-full"/>
      {/* <div className="relative z-10 w-full h-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={40}
          speed={0.4}
          particleBaseSize={150}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
          sizeRandomness={0}
          cameraDistance={20}
        />
      </div> */}
      <div className="mt-10 overflow-hidden">
        <PortfolioCard />
      </div>
    </div>
  );
};

export default PortfolioWrapper;
