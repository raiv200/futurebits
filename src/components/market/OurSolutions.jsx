import React from "react";
import BeamButton from "./BeamButton";
import ShimerButton from "./ShimerButton";

// Data extracted to top level
const data = [
  {
    text: "Backtesting",
    desc: "Backtesting evaluates trading strategy performance using historical data.",
  },
  {
    text: "Forward Testing",
    desc: "Forward testing is live-trialing a trading strategy without real money.",
  },
  {
    text: "Live Strategies",
    desc: "Live strategies are real-time trading tactics using actual money.",
  },
  {
    text: "Real-time Monitor",
    desc: "Real-time monitoring is actively watching live market data.",
  },
  {
    text: "Advance Reports",
    desc: "Advance reports offer detailed insights from thorough data analysis.",
  },
  {
    text: "Research",
    desc: "Trading research is analyzing market data to inform decisions.",
  },
  {
    text: "Consulting",
    desc: "Trading consulting offers expert guidance on market strategies.",
  },
  {
    text: "System Monitoring",
    desc: "Keeping an eye on trading systems for optimal performance.",
  },
  {
    text: "TradingView Customs",
    desc: "Customizing TradingView means adjusting tools to fit your trading style.",
  },
  {
    text: "Tech Maintenance",
    desc: "Tech maintenance in trading ensures smooth operations of trading systems.",
  },
  {
    text: "Anything else",
    desc: "Eager to venture into new trading opportunities!",
  },
];

// Separated card component for reusability
const SolutionCard = ({ item, index }) => {
  return (
    <div
      key={index}
      className="w-full mx-auto rounded-xl hover:-translate-y-2 hover:-skew-x-1 hover:scale-105 transition-all duration-300 ease-in-out border border-transparent group"
      style={{
        background:
          "linear-gradient(180deg, rgba(27, 27, 27, 0) 0%, rgba(51, 51, 51, 0.6) 100%)",
      }}
    >
      <div className="h-full relative">
        {/* Gradient border using pseudo-element for better compatibility */}
        <div
          className="absolute inset-0 rounded-xl opacity-40 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 49.4%, rgba(1, 176, 234, 0.2) 100%)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        ></div>

        {/* Blue hover glow */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 46.4%, rgba(255, 255, 255, 0.3) 100%)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        ></div>

        {/* Title tab with text-lg by default and 22px on hover */}
        <div className="absolute top-0 left-2 -mt-5 bg-[#080808] px-3 py-1">
          <h3 className="text-white text-lg font-semibold transition-all duration-300 group-hover:text-[22px]">
            {item.text}
          </h3>
        </div>

        {/* Content */}
        <div className="pt-[37px] pb-[32px] pl-[36px] pr-[20px]">
          <p className="text-[#FFFFFF99] text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main component
const OurSolutions = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-20 py-24 relative">
      {/* Section Title */}
      <div
        className="xl:block hidden absolute left-[-25%]  -top-[5%]  w-[350px] h-[45px] z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(40deg) translateX(60%)",
        }}
      ></div>

      {/* Right glowing vector effect as shown in image */}
      <div
        className="xl:block hidden absolute lg:right-[-22%] xl:right-[-25%] -top-[5%]  w-[410px] h-[45px] z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(-30deg) translateX(-60%)",
        }}
      ></div>
      <div
        className="xl:block hidden absolute top-[20%] right-0 w-[200px] md:w-[100px]  h-[200px] md:h-[400px] opacity-100 rounded-full z-0 bg-[#2670881A]"
        style={{
          filter: "blur(90px)",
        }}
      ></div>
      <div
        className="xl:block hidden absolute top-[20%] left-0 w-[200px] md:w-[100px] h-[300px] md:h-[400px] opacity-100 rounded-full z-0"
        style={{
          filter: "blur(90px)",
          background: "#2670881A",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-20">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="uppercase text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#999999]">
              Our Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-[38px] leading-[1.3] md:leading-[60px] font-bold text-white font-montserrat">
            1 Partner, Endless Solutions
          </h2>
        </div>

        {/* Cards Grid - Modified gap to be 24px horizontal and 42px vertical */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            columnGap: "24px",
            rowGap: "42px",
          }}
        >
          {data.map((item, index) => (
            <SolutionCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Book a Call Button */}
        <div className="flex justify-center mt-16">
          <ShimerButton size="lg" href="/book-call" className="text-[20px]">
            Book a Call
          </ShimerButton>
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;
