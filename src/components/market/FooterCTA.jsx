import React from "react";
import Image from "next/image";
import CtaLogo from "../../assets/market/logo_cta.svg";
import BgCta from "../../assets/market/bg_footer_cta.png";
import ShimerButton from "./ShimerButton";
const FooterCTA = () => {
  return (
    <div className="px-4 sm:py-16 py-4">
    <div className="max-w-[1200px] mx-auto w-full relative p-[1px]  rounded-2xl">
      {/* Border gradient using pseudo-element */}
      <div 
        className="absolute inset-0 rounded-[32px] z-0"
        style={{
          background:"linear-gradient(72.6deg, rgba(6, 6, 24, 0.8) 16.59%, rgba(255, 255, 255, 0.32) 40.86%, rgba(255, 255, 255, 0.48) 48.95%, rgba(255, 255, 255, 0.64) 57.04%, rgba(255, 255, 255, 0.64) 61.08%, rgba(255, 255, 255, 0.48) 65.13%, rgba(255, 255, 255, 0.32) 73.22%, rgba(6, 6, 24, 0.8) 97.49%)",
          padding: "1px",
        }}
      >
        <div className="absolute inset-[2px] rounded-2xl bg-black"></div>
      </div>
      
      {/* Glowing effect */}
      <div
        className="absolute w-[350px] sm:w-[300px] h-[100px] sm:left-1/2 top-[5%] sm:-translate-x-1/2 -translate-y-1/4 rounded-full"
        style={{
          background: "#ffffff/40",
          filter: "blur(100px)",
          zIndex: "1"
        }}
      />
      
      {/* Content container */}
      <div className="w-full rounded-[32px] overflow-hidden relative z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${BgCta.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scaleY(-1)" // Flip the image vertically
          }}
        />
        
        {/* Semi-transparent overlay */}
        <div 
          className="absolute inset-0 z-10 rounded-[32px]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} // #000000B2
        />
        
        <div className="w-full px-4 lg:px-[142px] py-16 flex flex-col items-center justify-center relative z-20">
          <div className="flex items-center justify-center">
            <Image src={CtaLogo} alt="FutureBits Technology" className="md:w-[470px] w-full" />
          </div>

          <h1 className="font-montserrat text-center text-2xl md:text-[40px] md:leading-[54px] xl:text-5xl xl:leading-[74px] font-bold text-white mt-10 max-w-[900px]">
            Building smart tech solutions so you can focus on what truly matters. <span role="img" aria-label="rocket">🚀</span>
          </h1>
          
          <div className="flex justify-center items-center mt-16">
          <div className="relative">
          <ShimerButton size="lg" href="/book-call" className="text-[20px]">
            Book a Call
          </ShimerButton>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FooterCTA;