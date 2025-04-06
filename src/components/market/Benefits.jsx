"use client";
import Image from "next/image";
import ShimerButton from "./ShimerButton";
// Import placeholder images - replace with your actual paths
import speedIcon from "@/assets/market/speed-icon.png";
import objectiveIcon from "@/assets/market/objective-icon.png";
import alwaysOnIcon from "@/assets/market/always-on-icon.png";
import patternImage from "@/assets/landing-page-AI/pattern.svg";

const BenefitCard = ({ title, description, icon, gradient }) => (
    <div
      className="p-[0.5px] rounded-3xl relative z-10 h-full font-poppins"
      style={{
        background: gradient,
      }}
    >
      {/* Card content with dark background */}
      <div className="bg-[#0D0D0D] rounded-3xl h-full flex flex-col ">
        <div className="absolute bottom-0 right-0">
          <Image
            src={patternImage || "/placeholder.svg"}
            alt="Pattern"
            width={180}
            height={200}
            className="opacity-100"
            style={{ transform: "scaleY(-1)" }}
          />
        </div>
        {/* Image Container */}
        <div className="relative w-full h-full mx-auto px-12 pt-12">
          <div className="relative w-full h-full z-10">
            <Image
              src={icon || "/placeholder.svg"}
              alt={`${title} illustration`}
              width={300}
              height={220}
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-[#FFFFFFB0] font-normal tracking-tighter text-base leading-[26px]">
            {description}
          </p>
        </div>

        {/* Grid pattern overlay for background */}
        <div className="absolute inset-0 z-[-1] opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
      </div>
    </div>
);

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Efficiency & Speed",
      description:
        "Automated trading executes orders at lightning speed, seizing opportunities in real-time with precision.",
      icon: speedIcon,
      gradient:"linear-gradient(106.97deg, #060618 6.84%, rgba(255, 255, 255, 0.6) 31.15%, rgba(255, 255, 255, 0.8) 39.25%, #FFFFFF 47.35%, rgba(255, 255, 255, 0.8) 55.45%, rgba(255, 255, 255, 0.6) 63.56%, #060618 87.86%)",
      
    },
    {
      id: 2,
      title: "Objective Trading",
      description:
        "Remove human biases and emotions from the equation, ensuring consistent and disciplined trading decisions.",
      icon: objectiveIcon,
      gradient:"linear-gradient(146.26deg, #060618 20.4%, rgba(255, 255, 255, 0.6) 38.27%, rgba(255, 255, 255, 0.8) 44.23%, #FFFFFF 50.19%, rgba(255, 255, 255, 0.8) 56.14%, rgba(255, 255, 255, 0.6) 62.1%, #060618 79.98%)"
    },
    {
      id: 3,
      title: "Always-On Trading",
      description:
        "Trade non-stop, across time zones with our automated systems.",
      icon: alwaysOnIcon,
      gradient:"linear-gradient(180deg, #060618 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.6) 60%, rgba(255, 255, 255, 0.4) 70%, #060618 100%)",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto relative py-20 md:py-28 font-poppins">
      <div
        className="xl:block hidden absolute left-[-30%]  top-[10%] -translate-y-1/2 w-[410px] h-[45px] z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(45deg) translateX(60%)",
        }}
      ></div>

      {/* Right glowing vector effect as shown in image */}
      <div
        className="xl:block hidden absolute xl:right-[-30%] xl:top-[10%] right-[-8%] top-[15%] -translate-y-1/2 w-[200px] h-[45px] xl:w-[410px] xl:h-[45px] z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(-45deg) translateX(-60%)",
        }}
      ></div>
      <div
        className="xl:block hidden absolute top-1/2 right-0 w-[200px] xl:w-[400px] -translate-y-[40%] translate-x-[30%] h-[200px] xl:h-[400px] opacity-100 rounded-full z-0 bg-[#FFFFFF1A]"
        style={{
          filter: "blur(90px)",
        }}
      ></div>
      <div
        className="xl:block hidden absolute top-1/2 left-0 w-[200px] md:w-[400px] -translate-y-[40%] translate-x-[-30%] h-[300px] md:h-[400px] opacity-100 rounded-full z-0 bg-[#FFFFFF1A]"
        style={{
          filter: "blur(90px)",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-20">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="uppercase text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#999999]">
              BENEFITS
            </span>
          </div>
          <h2 className="text-3xl md:text-[38px] leading-[1.3] md:leading-[60px] font-bold text-white font-montserrat">
            Automate to Elevate !
          </h2>
        </div>

        {/* Benefits grid - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-poppins">
          {benefits.map((benefit) => (
            <div key={benefit.id}>
              <BenefitCard
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                gradient={benefit.gradient}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center items-center mt-16">
          <div className="relative">
          <ShimerButton size="lg" href="/book-call" className="text-[20px]">
            Book a Call
          </ShimerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;