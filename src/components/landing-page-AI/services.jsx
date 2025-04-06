"use client";
import Image from "next/image";

// Assuming we have these icons/images in the assets folder
// You'll need to replace these with your actual asset paths
import chatbotIcon from "@/assets/landing-page-AI/chatbot-demo.svg";
import workflowIcon from "@/assets/landing-page-AI/workflow-demo.svg";
import contentIcon from "@/assets/landing-page-AI/content-demo.svg";
import llmIcon from "@/assets/landing-page-AI/llm-demo.png";
import aiConsultingIcon from "@/assets/landing-page-AI/ai-consulting-demo.png";
import circle from "@/assets/landing-page-AI/circle.png";
import patternImage from "@/assets/landing-page-AI/pattern.svg";
import AnimatedButton from "./AnimatedButton";
import { BorderBeam } from "../ui/beam";
import BeamButton from "./BeamButton";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import stars from "@/assets/landing-page-AI/stars.png";

const ServiceCard = ({
  title,
  description,
  icon,
  borderStyle,
  fullWidthImage,
  
}) => (
  

  
  <div
    className="p-[2px] rounded-3xl relative z-10 h-full font-poppins card-gred-1 "
    // style={{
    //   background: borderStyle.gradient,
    // }}
  >
    <div className="bg-[#0D0D0D] rounded-3xl h-full flex flex-col">
      {/* Pattern in top right */}
      <div className="absolute top-0 right-0">
        <Image
          src={patternImage || "/placeholder.svg"}
          alt="Pattern"
          width={180}
          height={200}
          className="opacity-100"
        />
      </div>

      <div className="flex flex-col h-full font-poppins">
        <div className="p-4 sm:p-6 md:p-8">
          <h3 className="text-base sm:text-lg leading-[28px] font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="text-[#FFFFFF80] text-xs sm:text-sm">{description}</p>
        </div>
        <div
          className={`mt-0 rounded-lg ${
            fullWidthImage ? "px-0 pb-4" : "px-4 sm:px-6 md:px-8 pb-4"
          }`}
        >
          <Image
            src={icon || "/placeholder.svg"}
            alt={`${title} illustration`}
            width={500}
            height={300}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
   
  </div>
);
const ServicesSection = () => {
  const borderStyles = {
    card1: {
      gradient:
        "linear-gradient(106.97deg, #060618 6.84%, #2E2688 31.15%, #01B0EA 39.25%, #FFFFFF 47.35%, #FFFFFF 51.4%, #01B0EA 55.45%, #2E2688 63.56%, #060618 87.86%)",
    },
    card2: {
      gradient:
        "linear-gradient(146.26deg, #060618 20.4%, #2E2688 38.27%, #01B0EA 44.23%, #FFFFFF 50.19%, #FFFFFF 53.17%, #01B0EA 56.14%, #2E2688 62.1%, #060618 79.98%)",
    },
    card3: {
      gradient:
        "linear-gradient(104.29deg, #060618 0%, #2E2688 30%, #01B0EA 40%, #FFFFFF 50%, #FFFFFF 55%, #01B0EA 60%, #2E2688 70%, #060618 100%)",
    },
    card4: {
      gradient:
        "linear-gradient(54.79deg, #060618 0%, #2E2688 30%, #01B0EA 40%, #FFFFFF 50%, #FFFFFF 55%, #01B0EA 60%, #2E2688 70%, #060618 100%)",
    },
    card5: {
      gradient:
        "linear-gradient(180deg, #060618 0%, #2E2688 30%, #01B0EA 40%, #FFFFFF 50%, #FFFFFF 55%, #01B0EA 60%, #2E2688 70%, #060618 100%)",
    },
  };

  const services = [
    {
      id: 1,
      title: "🔥 Automate Your Workflow",
      description:
        "Reduce manual effort, streamline operations, and let AI handle the heavy lifting.",
      icon: contentIcon,
      borderStyle: borderStyles.card1,
    },
    {
      id: 2,
      title: "🔍 LLM Development & Custom AI Models",
      description:
        "Build tailor-made AI models that enhance data analysis, decision-making, and automation.",
      icon: llmIcon,
      borderStyle: borderStyles.card2,
    },
    {
      id: 3,
      title: "🤖 Smart AI Assistants",
      description:
        "Develop advanced AI-driven chatbots and assistants that elevate customer experiences.",
      icon: chatbotIcon,
      borderStyle: borderStyles.card3,
    },
    {
      id: 4,
      title: "📝 AI-Powered Content & Personalization",
      description:
        "Generate high-quality content at scale, personalized for your audience.",
      icon: workflowIcon,
      borderStyle: borderStyles.card4,
    },
    {
      id: 5,
      title: "📊 AI Consulting & Strategy",
      description:
        "Work with our AI experts to design, develop, and deploy custom AI solutions that fit your business goals.",
      icon: aiConsultingIcon,
      borderStyle: borderStyles.card5,
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  

  return (
    <section  className="relative py-20 px-6 sm:py-20 sm:px-10 lg:py-28 lg:px-[30px] xl:px-[80px] overflow-x-hidden">
      <div className="absolute top-10 left-0 w-[550px] h-[550px] rounded-full  bg-[#2E2688] blur-[250px]"></div>
      <div className="absolute top-[440px] -right-20 w-[550px] h-[550px] rounded-full  bg-[#2E2688] blur-[500px] "></div>

      <div>
        <div
          className="absolute top-1/2 right-0 w-[300px] md:w-[600px] -translate-y-[40%] translate-x-[30%] h-[300px] md:h-[600px] bg-[#2E2688] opacity-20 rounded-full z-0 backdrop-blur-[580px]"
          style={{
            filter: "blur(120px)",
            opacity: 0.4,
          }}
        ></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-[40%] translate-x-[30%] z-20 opacity-50 w-[268px] h-[268px] md:w-[536px] md:h-[536px] overflow-hidden">
          <div className="relative w-full h-full bg-transparent">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="aa base-one absolute w-full h-full rounded-full overflow-hidden">
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
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-1 mb-2 sm:mb-4">
            <span className="uppercase text-base sm:text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#01B0EA] to-[#2E2688]">
              OUR AI SERVICES
            </span>
            {/* <span className="text-yellow-400">✨</span> */}
            <Image src={stars} className="w-[30px] h-[30px]" alt="star" />
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl leading-[1.3] md:leading-[60px] font-bold text-[#FFFFFF] mb-6 sm:mb-8 md:mb-12"
            style={{
              fontFamily: "Montserrat",
            }}
          >
            Built for Real Business Impact
          </h2>
        </div>

        {/* Services grid - first 2 cards */}
        <div  className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-6 mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-0 lg:px-10 xl:px-20 font-poppins">
          {/* {services.slice(0, 2).map((service) => (
            <div key={service.id}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                borderStyle={service.borderStyle}
                fullWidthImage={true}
                
              />
            </div>
          ))} */}

{services.slice(0,2).map((service, index) => {
        let initial = { opacity: 0, y: 50 };
        if (index === 0) {
          initial = { opacity: 0, x: -50, y: 50 }; // From left-bottom
        } else if (index === 1) {
          initial = { opacity: 0, x: 50, y: 50 }; // From right-bottom
        }

        return (
          <motion.div
            key={service.id}
            initial={initial}
            animate={
              isInView
                ? { opacity: 1, x: 0, y: 0 }
                : initial
            }
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: 'easeOut',
            }}
            className={service.id === 3 ? "sm:col-span-2 md:col-span-1" : ""}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              borderStyle={service.borderStyle}
              fullWidthImage={false}
            />
          </motion.div>
        );
      })}
        </div>

        {/* Services grid - next 3 cards in second row */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 px-2 sm:px-0 lg:px-10 xl:px-16 font-poppins">
          {/* {services.slice(2).map((service) => (
            <div
              key={service.id}
              className={service.id === 3 ? "sm:col-span-2 md:col-span-1" : ""}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                borderStyle={service.borderStyle}
                fullWidthImage={false} // Last three cards get fullWidthImage=false
              />
            </div>
          ))} */}

{services.slice(2).map((service, index) => {
        let initial = { opacity: 0, y: 50 };
        if (index === 0) {
          initial = { opacity: 0, x: -50, y: 50 }; // From left-bottom
        } else if (index === 1) {
          initial = { opacity: 0, x: 50, y: 50 }; // From right-bottom
        }

        return (
          <motion.div
            key={service.id}
            initial={initial}
            animate={
              isInView
                ? { opacity: 1, x: 0, y: 0 }
                : initial
            }
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: 'easeOut',
            }}
            className={service.id === 3 ? "sm:col-span-2 md:col-span-1" : ""}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              borderStyle={service.borderStyle}
              fullWidthImage={false}
            />
          </motion.div>
        );
      })}
        </div>

        {/* CTA Button */}
        {/* <div className="flex justify-center items-center text-center mt-8 sm:mt-10 md:mt-12">
          <AnimatedButton>Let's Build Together!</AnimatedButton>
        </div> */}
        <div className="w-full flex items-center justify-center mt-16 ">
          <BeamButton title="Let's Build Together!" className="w-[300px]" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
