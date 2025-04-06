"use client";
import Image from "next/image";

import circle from "@/assets/landing-page-AI/circle.png";
import patternImage from "@/assets/landing-page-AI/pattern.svg";
import quote from "@/assets/landing-page-AI/quote.svg";
import AayushImg from "@/assets/landing-page-AI/aayush_kucheria.png";
import AboutMeImg from "@/assets/landing-page-AI/about_me_mobile.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutMe = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const topCircleRef = useRef(null);
const isTopCircleInView = useInView(topCircleRef, { once: true });

  return (
    <section className="relative py-28 h-[990px] lg:px-[80px]  sm:h-[1120px] lg:h-[920px] overflow-hidden">
      {/* <div className="absolute top-0 left-0 w-[140px] h-[140px] rounded-full  bg-[#2E2688] blur-[50px]"></div> */}
      {/* <div className="absolute top-[440px] -right-20 w-[550px] h-[550px] rounded-full  bg-[#2E2688] blur-[500px] "></div> */}

      <div className="container h-full sm:max-w-[700px] sm:h-[700px] lg:h-[480px] xl:max-w-[1100px] 2xl:max-w-[1200px] 3xl:max-w-[1400px] mx-auto px-4 relative z-20">
        <motion.div 
          ref={topCircleRef}
          initial={{ opacity: 0, scale: 0.7, x: 200 }}
          animate={isTopCircleInView ? { opacity: 1, scale: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:block">

          <div className="absolute right-[-20px] top-[-50px] transform  z-50 opacity-50 w-[110px] h-[110px]">
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

          <div className="absolute right-[-20px] top-[-50px] w-[110px] h-[110px] rounded-full  z-50 bg-[#2E2688] blur-[50px]"></div>
        </motion.div>

        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay:0.5, duration: 0.6, ease: "easeOut" }}
          className="p-[1px] rounded-3xl w-full sm:w-[85%] sm:mx-auto lg:w-full relative z-10 h-full font-poppins"
          style={{
            background:
              "linear-gradient(106.97deg, #060618 6.84%, #2E2688 31.15%, #01B0EA 39.25%, #FFFFFF 47.35%, #FFFFFF 51.4%, #01B0EA 55.45%, #2E2688 63.56%, #060618 87.86%)",
          }}
        >
          <div className="bg-[#0D0D0D] rounded-3xl h-full flex flex-col lg:flex-row  overflow-hidden">
            <div className="w-full   lg:w-[30%] h-full">
              <div className="h-full  ">
                <Image
                  src={AayushImg}
                  alt="Aayush Kucheria"
                  className=" hidden lg:flex w-full h-[250px] sm:h-[360px] lg:h-full "
                />
                <Image
                  src={AboutMeImg}
                  alt="Aayush Kucheria"
                  className=" w-full h-[300px] sm:h-[350px] lg:hidden "
                />
              </div>
            </div>

            <div className="w-full h-full  lg:w-[70%] font-montserrat flex flex-col justify-center px-[20px] sm:px-[40px] space-y-6 lg:space-y-16 lg:px-0 lg:pl-[70px] lg:pr-[80px] py-[60px]">
              <div className=" flex flex-col space-y-6 text-[12px] lg:text-[16px] leading-[22px]  lg:leading-[30px] font-normal text-white/80 ">
                <p>
                  Building AI solutions at FutureBits while researching AI
                  safety and human-AI interaction. I develop custom AI solutions
                  using machine learning and LLMs, with past work in LLM
                  behavior, AI in healthcare, and mathematical modeling.
                </p>
                <p>
                  I’m interested in AI education, safety, and human-centered
                  applications. Open to discussing business challenges or
                  collaborating on AI safety research.
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-[18px] lg:text-[24px] font-semibold  leading-[22px] lg:leading-[30px] text-white">
                  - Aayush Kucheria
                </span>
                <span className="text-[12px] lg:text-[16px] font-normal leading-[22px]   lg:leading-[30px] text-white/50">
                  AI Solutions Lead at FutureBits | AI Safety | Human-AI
                  Interface Design
                </span>
              </div>
            </div>

           
              <Image
                src={quote}
                alt="Quote"
                className="absolute right-4 bottom-2 sm:right-5 sm:bottom-5 lg:right-10 lg:bottom-10 rotate-[180deg] w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[100px] lg:h-[100px]  "
                />
           
          </div>
        </motion.div>
      </div>

      {/* bottom center gradient blob */}
      <div className="flex items-center justify-center w-full h-[400px] absolute bottom-0 left-0  ">
        <div className="absolute bottom-[-120px] w-[200px] h-[200px]   sm:bottom-[-210px]  sm:w-[400px] sm:h-[400px] z-0 bg-[#2E2688] blur-[140px]  rounded-full"></div>

        <div className="absolute bottom-[-120px] w-[200px] h-[200px] z-20 opacity-70 sm:bottom-[-210px]  sm:w-[400px] sm:h-[400px]">
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
      </div>
    </section>
  );
};

export default AboutMe;
