"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import logo from "@/assets/landing-page-AI/FutureBits.svg"
import BeamButton from "./BeamButton"
import stars from "@/assets/landing-page-AI/stars.png";

export default function Feature() {
  return (
    <section className="relative w-full bg-black  flex justify-center items-center overflow-hidden">
      <div
        className="relative w-full max-w-full py-[72px] md:py-[121px] flex flex-col items-center justify-center z-10 border-t-4 border-b-4 border-transparent px-4"
        style={{
          borderImageSource:
            "linear-gradient(102.72deg, #060618 0.34%, #2E2688 29.9%, #01B0EA 39.75%, #FFFFFF 49.6%, #FFFFFF 54.53%, #01B0EA 59.45%, #2E2688 69.31%, #060618 98.86%)",
          borderImageSlice: "1",
          borderImageWidth: "4px 0",
        }}
      >
        <div className="relative flex flex-col items-center mb-10">

          {/* Logo */}
          <div className="flex flex-col items-center">
            <Image
              src={logo || "/placeholder.svg"}
              alt="Futurebits Logo"
              className="object-contain max-w-[220px] max-h-[84px] sm:max-w-[320px] sm:max-h-[80px] lg:max-w-[420px] lg:max-h-[114px] "
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center w-full">
          <h1 className="font-montserrat font-bold text-[20px] sm:text-[40px] sm:leading-[52px] lg:leading-[60px] text-center text-white mb-[52px] sm:mb-[82px] ">
            Let AI handle the heavy lifting
            <br />
            while you focus on what
            <br />
            truly matters. <span className="inline-block">
            <Image src={stars} className="w-[40px] h-[40px] rotate-[-180deg] " alt="star" />
            </span>
          </h1>

          <BeamButton

          className="w-[250px] sm:w-[220px]"
          
          />
        </div>
      </div>
    </section>
  )
}

