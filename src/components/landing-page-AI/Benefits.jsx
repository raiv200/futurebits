"use client";
import circle from "@/assets/landing-page-AI/circle.png";
import Image from "next/image";
import meter from "@/assets/landing-page-AI/meter.svg";
import time from "@/assets/landing-page-AI/time.svg";
import customize from "@/assets/landing-page-AI/customize.svg";
import scale from "@/assets/landing-page-AI/scale.svg";
import accuracy from "@/assets/landing-page-AI/accuracy.svg";
import decision from "@/assets/landing-page-AI/decision.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import stars from "@/assets/landing-page-AI/stars.png";

// const BenefitCard = ({ icon, title, description, index }) => {
//   // Determine if this is an odd-indexed card for alternating backgrounds
//   const isOdd = index % 2 !== 0;
  
//   const cardRef = useRef(null);
//   const isInView = useInView(cardRef, { once: true });

//   return (
//     <div
//       className={` flex flex-col items-start justify-center relative space-y-[16px]  px-[40px] h-full ${
//         index === 1 ? "bg-grid-1" : index === 3  ? "bg-grid-2" : index === 5 ? 'bg-grid-3' : "bg-transparent"
//       }`}
//     >
//       <div className="icon-container mb-4 md:mb-6">
//         <div className="">
//           <Image
//             src={icon || "/placeholder.svg"}
//             alt={title}
//             width={60}
//             height={60}
//             className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
//           />
//         </div>
//       </div>
//       <div className="max-w-full space-y-3 font-poppins">
//         <h3 className="text-[24px]  font-semibold leading-[28px] text-[#FFFFFF]">{title}</h3>
//         <p className="font-poppins text-[#FFFFFF]/50 font-normal text-[16px] leading-[26px]">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

const BenefitCard = ({ icon, title, description, index }) => {
  // Determine if this is an odd-indexed card for alternating backgrounds
  const isOdd = index % 2 !== 0;
  
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <div
      ref={cardRef}
      className={`flex flex-col items-start justify-center relative space-y-[16px] px-[40px] h-full ${
        index === 1
          ? 'bg-grid-1'
          : index === 3
          ? 'bg-grid-2'
          : index === 5
          ? 'bg-grid-3'
          : 'bg-transparent'
      }`}
    >
      {/* Icon animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: 'easeOut' }}
        className="icon-container mb-4 md:mb-6"
      >
        <Image
          src={icon || '/placeholder.svg'}
          alt={title}
          width={60}
          height={60}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
        />
      </motion.div>

      {/* Text block animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
        className="max-w-full space-y-3 font-poppins"
      >
        <h3 className="text-[24px] font-semibold leading-[28px] text-[#FFFFFF]">
          {title}
        </h3>
        <p className="font-poppins text-[#FFFFFF]/50 font-normal text-[16px] leading-[26px]">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      icon: meter,
      title: "Enhanced User Engagement",
      description:
        "Deliver personalized experiences through AI-powered chat and tailored content",
    },
    {
      id: 2,
      icon: time,
      title: "Save Time & Costs",
      description:
        "Automate repetitive tasks & streamline workflows to cut inefficiencies and reduce operational costs",
    },
    {
      id: 3,
      icon: customize,
      title: "Customization",
      description:
        "Implement AI solutions designed to align with your specific business goals and requirements",
    },
    {
      id: 4,
      icon: scale,
      title: "Scale Faster",
      description:
        "Effortlessly grow your business with AI solutions that adapt to your evolving needs",
    },
    {
      id: 5,
      icon: accuracy,
      title: "Improved Accuracy",
      description:
        "Minimize errors and enhance precision in data processing and decision-making with AI-driven tools",
    },
    {
      id: 6,
      icon: decision,
      title: "Smarter Decisions",
      description:
        "Unlock actionable insights from your data to drive informed, data-driven decisions",
    },
  ];

  return (
    <section id="benefits-section" className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-20">
      {/* Top left gradient blob */}
      <div
        className="absolute top-[-150px] w-[250px] h-[250px] left-[-110px] sm:left-[-150px] sm:w-[450px] sm:h-[450px] z-0 bg-[#2E2688] blur-[250px]  rounded-full"
        
      ></div>
      
     
      
      
      
      {/* Top left rotating circle */}
      <div className="absolute top-[-100px] z-20 opacity-30 left-[-110px]  w-[200px] h-[200px] sm:left-[-250px]   sm:w-[400px] sm:h-[400px]">
        <div className="relative w-full h-full bg-transparent">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="base-one absolute w-full h-full rounded-full">
              <Image
                src={circle || "/placeholder.svg"}
                alt="Animated Circle"
                fill
                className="opacity-100 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-2 sm:px-4 relative z-20">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-1 mb-2 sm:mb-4">
            <span className="uppercase text-lg font-semibold tracking-[0%] bg-clip-text text-transparent bg-gradient-to-r from-[#01B0EA] to-[#2E2688]">
              BENEFITS
            </span>
            <Image src={stars} className="w-[30px] h-[30px]" alt="star" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-[60px] font-bold font-montserrat text-white">
            What AI can offer
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`
                relative h-[360px]
                ${index % 3 !== 2 ? "sm:border-r-[0.5px] border-white/20" : ""}
                ${index < 3 ? "border-b-[0.5px] sm:border-b-[0.5px] border-white/20" : ""}
                ${index >= 3 && index < 5 && index % 2 === 0 ? "sm:border-b-0 border-b-[0.5px] border-white/20 lg:border-b-0" : ""}
                ${index === 4 ? "sm:border-b-[0.5px] lg:border-b-0 border-white/20" : ""}
              `}
            >
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default BenefitsSection;