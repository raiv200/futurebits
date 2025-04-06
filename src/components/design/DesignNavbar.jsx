"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import navbarDiamond from "../../../public/navbar.svg";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { BorderBeam } from "../ui/beam";
import { ChevronRightIcon } from "lucide-react";
import BeamButton from "./BeamButton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiBars3 } from "react-icons/hi2";
import { ShimmerButton } from "../magicui/shimmer-button";

const NavItems = [
  // { label: "Market", url: "/market" },
  // { label: "Design", url: "/design" },
  // { label: "AI", url: "/" },
];

// Custom Diamond component that handles both regular and glowing states
const NavDiamond = ({ isActive }) => {
  return (
    <div
      className={`rotate-45 transition-all duration-300 mr-3 ${
        isActive
          ? "w-[10px] h-[10px] bg-[#D9D9D9] scale-[1.02]"
          : "w-[9.5px] h-[9.5px] bg-transparent"
      }`}
    >
      {isActive ? (
        <span className="absolute blur-[5px] bg-[#ffffff] w-[10px] h-[10px] "></span>
      ) : (
        <span className="absolute  bg-[#ffffff]/20 w-[10px] h-[10px] "></span>
      )}
    </div>
  );
};

const MobileNavigation = ({ navItems, currentPath }) => (
  <Sheet>
    <SheetTrigger className="">
      <HiBars3 className="text-white h-[35px] w-[35px] sm:h-[40px] sm:w-[40px]" />
    </SheetTrigger>
    <SheetContent
      side="left"
      className="bg-black/95 text-white border-gray-800 p-0"
    >
      <div className="flex flex-col gap-10 mt-20 ">
        <div className="flex flex-col   divide-y-2 divide-white/20">
          {navItems.map((item) => {
            const isActive = currentPath === item.url;
            return (
              <Link
                key={item.label}
                href={item.url}
                className={`text-xl px-6 sm:px-12 py-4 ${
                  isActive ? "text-white" : "text-white/50"
                } hover:text-white/80 transition-colors flex items-center`}
              >
                <NavDiamond isActive={isActive} />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="w-full  px-6 sm:px-12">
          {/* <button
            className={`relative min-w-[250px] flex items-center rounded-full  justify-center font-medium text-[12px] sm:text-[18px]  overflow-hidden  px-[14px] h-[40px] sm:px-[20px] sm:h-[45px] text-white bg-[#01B0EA]`}
          >
            Book a call
            <ChevronRightIcon strokeWidth={3} className="h-4 w-4 ml-1" />
            <BorderBeam
              duration={4}
              size={55}
              className=" from-[#01B0EA]/80 via-[#FFFFFF] to-[#01B0EA]/80"
            />
          </button> */}

          <ShimmerButton
            background="#01B0EA"
            className={`relative min-w-[250px] flex items-center rounded-full  justify-center font-medium text-[12px] sm:text-[18px]  overflow-hidden  px-[14px] h-[40px] sm:px-[20px] sm:h-[45px] text-white bg-[#01B0EA] `}
          >
            Book a call
            <ChevronRightIcon strokeWidth={3} className="h-4 w-4 ml-1" />
          </ShimmerButton>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

const NavLink = React.forwardRef(
  ({ href, children, className, isActive }, ref) => (
    <Link
      href={href}
      ref={ref}
      className={`${className || ""} ${
        isActive ? "text-white" : "text-white/50"
      }`}
    >
      <div className="flex items-center">
        <NavDiamond isActive={isActive} />
        {children}
      </div>
    </Link>
  )
);

NavLink.displayName = "NavLink";
const DesignNavbar = () => {
  const pathname = usePathname();

  const containerRef = useRef(null);
  const navLinksRef = useRef([]);
  const [borderPosition, setBorderPosition] = useState({
    activeLinkId: null,
    position: 0,
    width: 500, // Default width
  });

  // Store refs for each nav link
  const setNavLinkRef = (index, el) => {
    navLinksRef.current[index] = el;
  };

  useEffect(() => {
    const activeIndex = NavItems.findIndex((item) => item.url === pathname);
    if (activeIndex === -1) return;

    setTimeout(() => {
      const activeElement = navLinksRef.current[activeIndex];
      if (activeElement && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const activeRect = activeElement.getBoundingClientRect();

        const activeCenter = activeRect.left + activeRect.width / 2;
        const relativeCenter = activeCenter - containerRect.left;
        const position = relativeCenter - borderPosition.width / 1.65;

        setBorderPosition((prev) => ({
          ...prev,
          activeLinkId: activeIndex,
          position: position,
        }));
      }
    }, 0);
  }, [pathname]);

  return (
    <nav className="w-full lg:max-w-[950px] xl:min-w-[1100px] z-50 mx-auto rounded-b-[32px]">
      <div
        ref={containerRef}
        className="w-full h-auto mx-auto px-4 sm:px-6 lg:px-12 lg:py-4 py-3 lg:rounded-b-[32px] relative z-50 bg-[linear-gradient(180deg,rgba(6,6,24,0.2)_0%,rgba(255,255,255,0.08)_1%)]"
        style={{
          backdropFilter: "blur(1px)",
        }}
      >
        {/* Border gradient - positioned based on hovered link */}
        {/* {borderPosition.activeLinkId !== null && (
          <div
            className="absolute bottom-0 h-1 transition-all duration-300"
            style={{
              left: `10px`,
              width: `1000px`,
              borderBottom: "3px solid",
              borderImageSource:
                "linear-gradient(90deg, #060618 37.95%, #2E2688 52.58%, #01B0EA 57.46%, #FFFFFF 62.34%, #FFFFFF 64.77%, #01B0EA 67.21%, #2E2688 72.09%, #060618 86.72%)",
              borderImageSlice: "1",
            }}
          ></div>
        )} */}

{/* {borderPosition.activeLinkId !== null && ( */}
          <div
            className="absolute hidden lg:block lg:w-[800px] xl:w-full bottom-0 h-1 transition-all duration-300"
            style={{
              left: `10px`,
              borderBottom: "3px solid",
              borderImageSource:
                "linear-gradient(90deg, #060618 37.95%, #2E2688 52.58%, #01B0EA 57.46%, #FFFFFF 62.34%, #FFFFFF 64.77%, #01B0EA 67.21%, #2E2688 72.09%, #060618 86.72%)",
              borderImageSlice: "1",
            }}
          ></div>
        {/* )} */}


        <div className="flex w-full justify-between items-center">
          <div className="flex items-center space-x-1 sm:space-x-3">
            {/* <div className="flex lg:hidden items-center">
              <MobileNavigation navItems={NavItems} currentPath={pathname} />
            </div> */}
            <div className="">
              <Link href="/">
                <div className="flex items-center">
                  <Image
                    src={logo}
                    alt="FutureBits logo"
                    className="h-[35px] -ml-[15px] sm:ml-0  sm:h-[50px] sm:w-[210px] "
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-[40px] xl:space-x-[60px] font-light text-[22px] ">
            {NavItems.map((item, index) => {
              const isActive = pathname === item.url;
              return (
                <NavLink
                  key={item.label}
                  href={item.url}
                  className="text-[20px] flex items-center font-normal font-poppins"
                  isActive={isActive}
                  ref={(el) => setNavLinkRef(index, el)} // Set the ref here
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>

          {/* <button
            className={`relative  flex items-center rounded-full  justify-center font-medium text-[12px] sm:text-[18px]  overflow-hidden  px-[14px] h-[40px] sm:px-[20px] sm:h-[45px] text-white bg-[#01B0EA]`}
          >
            Book a call
            <ChevronRightIcon strokeWidth={3} className="h-4 w-4 ml-1" />
            <BorderBeam
              duration={4}
              size={55}
              className=" from-[#01B0EA]/80 via-[#FFFFFF] to-[#01B0EA]/80"
            />
          </button> */}

          <ShimmerButton
            background="#01B0EA"
            className={` relative flex items-center rounded-full justify-center font-medium text-[12px] sm:text-[18px] overflow-hidden px-[14px] h-[40px] sm:px-[20px] sm:h-[45px] text-white bg-[#01B0EA] `}
          >
            Book a call
            <ChevronRightIcon strokeWidth={3} className="h-4 w-4 ml-1" />
          </ShimmerButton>
        </div>
      </div>
    </nav>
  );
};

export default DesignNavbar;
