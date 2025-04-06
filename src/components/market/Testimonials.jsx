"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import navbarDiamond from "../../../public/navbar.svg";
// Import assets
import avatar from "@/assets/landing-page-AI/testimonial.svg";
import quote from "@/assets/landing-page-AI/quote.svg";
import star from "@/assets/market/star.svg";
import BeamButton from "./BeamButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ShimerButton from "./ShimerButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import Particles from "../ui/particles";
// import Autoplay from "embla-carousel-autoplay"

// Testimonial data - keeping original structure but updating first item to match design
const testimonials = [
  {
    id: 1,
    content:
      "Our team is super happy with the design work. We love the transformation! Futurebits did an outstanding job! Highly responsive, and the website created for us is awesome",
    rating: 5,
    author: "Larsen Black",
    position: "Banker",
    avatar: avatar,
  },
  {
    id: 2,
    content:
      "Their choice of AI solutions has revolutionized our workflow, providing exceptional support and transforming how our customers interact with us.",
    rating: 5,
    author: "Laura Smith",
    position: "Bantech CTO",
    avatar: avatar,
  },
  {
    id: 3,
    content:
      "The implementation was seamless and the results were immediate. Our team productivity increased by 40% within the first month of deployment.",
    rating: 5,
    author: "Michael Chen",
    position: "InnovateTech Founder",
    avatar: avatar,
  },
  {
    id: 4,
    content:
      "We've tried multiple AI solutions before, but none delivered the precision and reliability we found with this team. Truly exceptional service.",
    rating: 5,
    author: "Sarah Johnson",
    position: "DataFlow Director",
    avatar: avatar,
  },
  {
    id: 5,
    content:
      "The custom AI model they built for our specific needs has transformed our customer service department. Response times cut in half, satisfaction up 60%.",
    rating: 5,
    author: "David Wilson",
    position: "Nexus Operations",
    avatar: avatar,
  },
];

// Star rating component - enhanced to match design
const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-2">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-[#F0C419] text-[28px]">
          <Image src={star} alt="Quote" className=" w-[12px] h-[12px] lg:w-[24px] lg:h-[24px]" />
        </span>
      ))}
    </div>
  );
};

// Single testimonial card component - updated styling to match design
const TestimonialCard = ({ testimonial }) => {
  return (
    <div 
    className="relative flex w-full h-[300px] sm:w-[400px] sm:h-[300px] lg:w-[580px] lg:h-[400px] lg:px-6 xl:w-[750px] xl:h-[450px] xl:px-6"
    
    >
      <div className="absolute tcard-gradient-market left-[40px] sm:left-[80px]  w-[80%]  h-[2px]"></div>

      <div className="flex flex-col justify-between overflow-hidden h-full px-[25px] py-[30px]  lg:px-[60px] lg:py-[30px] relative rounded-[32px]" style={{
        background: "linear-gradient(180deg, rgba(6, 6, 24, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)",
      }}>
        <p className="text-white/90 text-[14px] sm:text-[16px] sm:leading-[28px] lg:text-[20px] lg:leading-[38px] xl:text-[24px]  xl:leading-[44px] font-normal mb-8 sm:mb-10 lg:mb-6 z-10 relative">
          {testimonial.content}
        </p>

        <div className="mt-auto z-10 relative flex flex-col items-start">
          <StarRating rating={testimonial.rating} />

          <div className="flex w-full items-center justify-between mt-2 lg:mt-4">
            <div className="flex items-center ">
              <div className="flex items-center justify-center relative  w-[40px] h-[40px] lg:mt-2 lg:w-[80px] lg:h-[80px] rounded-full overflow-hidden mr-3">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className=" object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="text-white font-normal text-[13px] lg:text-[26px]">
                  {testimonial.author}
                </h4>
                <p className="text-white/50 text-[12px] lg:text-[18px]">
                  {testimonial.position}
                </p>
              </div>
            </div>

            <Image src={quote} alt="Quote" className="w-[50px] h-[50px] sm:h-[60px] sm:w-[60px] lg:w-[80px] lg:h-[80px] xl:w-[80px] xl:h-[80px] " />
          </div>
        </div>
      </div>
    </div>
  );
};

const slides = [
  {
    content: (
      <TestimonialCard
        key={`${testimonials[0].id}`}
        testimonial={testimonials[0]}
      />
    ),
  },
  {
    content: (
      <TestimonialCard
        key={`${testimonials[1].id}`}
        testimonial={testimonials[1]}
      />
    ),
  },
  {
    content: (
      <TestimonialCard
        key={`${testimonials[2].id}`}
        testimonial={testimonials[2]}
      />
    ),
  },
  {
    content: (
      <TestimonialCard
        key={`${testimonials[3].id}`}
        testimonial={testimonials[3]}
      />
    ),
  },
  {
    content: (
      <TestimonialCard
        key={`${testimonials[4].id}`}
        testimonial={testimonials[4]}
      />
    ),
  },
];

// Main testimonials carousel component
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-24">
    <div
        className="xl:block hidden absolute left-[-14%]  top-[5%]  w-[400px] h-[45px] "
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(40deg) translateX(60%)",
        }}
      ></div>

      {/* Right glowing vector effect as shown in image */}
      <div
        className="xl:block hidden absolute lg:right-[-22%] xl:right-[-14%] -top-[-8%]  w-[400px] h-[45px] z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(-40deg) translateX(-60%)",
        }}
      ></div>
      <div
        className="xl:block hidden absolute top-[0%] right-0 w-[200px] md:w-[400px]  h-[200px] md:h-[400px] opacity-100 rounded-full z-0 bg-[#2670881A]"
        style={{
          filter: "blur(90px)",
        }}
      ></div>
      <div
        className="xl:block hidden absolute top-[0%] left-0 w-[200px] md:w-[400px] h-[300px] md:h-[400px] opacity-100 rounded-full z-0"
        style={{
          filter: "blur(90px)",
          background: "#2670881A",
        }}
      ></div>
      <div className="w-full  px-4 relative z-10">
        <div className="relative w-fit mx-auto  text-center">
          <p className="uppercase text-base sm:text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF]/60 to-[#999999]/60">
            TESTIMONIALS
          </p>
        </div>

        <h2 className="text-[20px] sm:text-[38px] sm:leading-[60px] font-bold text-white  font-montserrat text-center mt-6">
          What people say about us
        </h2>

        <div className="flex w-full justify-center items-center  z-20">
          <div className="relative w-full h-full items-center  mx-auto z-20">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={120}
              slidesPerView={2}
              loop={true}
              centeredSlides={true}
              autoplay={{ delay: 5000 }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className=" w-full h-full flex  "
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 0 }, // 1 slide for mobile
                520: { slidesPerView: 2, spaceBetween: 120 }, // 2 slides for tablets & desktops
              }}
            >
              {slides.map((slide, index) => (
                <>
                  <SwiperSlide
                    key={index}
                    className={`${
                      index === activeIndex
                        ? "sm:my-20 lg:my-20 opacity-100"
                        : " opacity-70"
                    }  my-10 relative transition-opacity duration-300 ease-linear 0 flex items-center justify-center`}
                  >
                    {index === activeIndex && (
                      <div className="left-[35%] top-[10px] sm:left-[45%] sm:-top-[40px] h-[120px] w-[120px] absolute  rounded-full blur-[90px] sm:blur-[90px] lg:blur-[80px]  z-50"></div>
                    )}
                    {slide.content}
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
            <div className="flex items-center w-full  absolute -bottom-[40px]  justify-center mt-4 gap-5">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={` rotate-45 transition-all duration-300 ${
                    index === activeIndex
                      ? "w-[10px] h-[10px] bg-[#D9D9D9] scale-[1.02]"
                      : "w-[9.5px] h-[9.5px] bg-[#D9D9D9]/20"
                  }`}>

                  <span className={`${index === activeIndex ? 'absolute blur-[5px] bg-[#ffffff]' : '' }  w-[10px] h-[10px]`}>
                  </span>

                </div>
              ))}
            </div>
          </div>
        </div>
        {/* CTA Button */}
        <div className=" mt-[100px] w-full flex justify-center items-center ">
        <ShimerButton size="lg" href="/book-call" className="text-[20px]">
            Book a Call
          </ShimerButton>
        </div>
      </div>
    </section>
  );
}
