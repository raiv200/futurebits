"use client";

import Image from "next/image";
import Particles from "@/components/ui/particles";
import { motion } from "framer-motion";
import ImgHero from "../../../public/design/light.png";
import Hero from "@/components/design/hero";
import PortfolioWrapper from "@/components/design/portfolio-wrapper";
import Offering from "@/components/design/offering";
import Benefits from "@/components/design/benefits";
import IntroSection from "@/components/design/intro-section";
import Footer from "@/components/design/Footer";
import TestimonialsCarousel from "@/components/design/TestimonialCarousel";

export default function DesignPage() {
  return (
    <section className="w-full bg-[#08081E]">
      <main className="w-full px-0 sm:px-10 h-screen relative md:px-0 flex justify-center">
        <div className="max-w-[1000px] w-full absolute -top-8 left-1/2 transform -translate-x-1/2 h-full">
          <Particles
            quantity={30}
            ease={80}
            vx={0.1}
            vy={0.2}
            refresh
            size={0.7}
            className="!z-40 inset-0"
          />
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute top-[85px] sm:top-[70px] xl:top-[75px] left-0 z-[5] w-full h-full"
          >
            <Image
              src={ImgHero.src}
              width={1000}
              height={1000}
              alt="assets"
              className="z-0 w-full"
            />
          </motion.div>
        </div>
        <div className="z-10 w-full">
          <Hero />
        </div>
      </main>

      <div className="mt-10 xl:mt-0 md:mt-[-300px] lg:mt-[-600px]  md:px-0 bg-[#08081E]">
        <PortfolioWrapper />
      </div>
      {/* <div className="mt-0 sm:mt-20  px-4 sm:px-20">
        <Companies />
      </div> */}
      <div className=" mt-20 sm:mt-36 w-full  md:px-0 bg-[#08081E]">
        <Offering />
      </div>
      <div className="w-full mt-10 sm:mt-10 bg-[#08081E] px-8 sm:px-20">
        <Benefits />
      </div>

      <TestimonialsCarousel />
      <div className="w-full ">
        <IntroSection />
      </div>

      <Footer />
    </section>
  );
}
