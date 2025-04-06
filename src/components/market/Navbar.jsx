"use client";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiBars3 } from "react-icons/hi2";
import logo from "../../../public/logo.svg";
import { usePathname } from "next/navigation";
import ShimerButton from "./ShimerButton";
const NavItems = [
  { label: "Market", url: "/market" },
  { label: "Design", url: "/design" },
  { label: "AI", url: "/ai" },
];

// Custom Diamond component that handles both regular and glowing states
const NavDiamond = ({ isActive }) => {
  return (
    <div
      className={`rotate-45 transition-all duration-300 mr-2 ${
        isActive
          ? "w-[10px] h-[10px] bg-[#D9D9D9] scale-[1.02]"
          : "w-[9.5px] h-[9.5px] bg-transparent"
      }`}
    >
      {isActive && (
        <span className="absolute blur-[5px] bg-[#ffffff] w-[10px] h-[10px]"></span>
      )}
    </div>
  );
};

const NavLink = ({ href, children, className, isActive }) => {
  return (
    <Link
      href={href}
      className={`${className || ""} ${isActive ? "text-white" : "text-white/50"}`}
    >
      {/* Replace Image with custom diamond component */}
      <div className="flex items-center">
        <NavDiamond isActive={isActive} />
        {children}
      </div>
    </Link>
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
        <div className="flex flex-col divide-y-2 divide-white/20">
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

        <div className="w-full px-6 sm:px-12">
        <ShimerButton
            size="sm"
            href="/book-call"
            className="text-[20px] tracking-tighter"
          >
            Book a Call
          </ShimerButton>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

const Navbar = () => {
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

  // Calculate border position based on active link - but only when pathname changes
  useEffect(() => {
    // Find the active index
    const activeIndex = NavItems.findIndex(item => item.url === pathname);
    
    if (activeIndex === -1) return; // No active item

    // Use setTimeout to ensure DOM is fully rendered
    setTimeout(() => {
      const activeElement = document.querySelector(`a[href="${pathname}"]`);
      
      if (activeElement && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const activeRect = activeElement.getBoundingClientRect();
        
        // Calculate center of active element
        const activeCenter = activeRect.left + (activeRect.width / 2);
        
        // Calculate relative position
        const relativeCenter = activeCenter - containerRect.left;
        
        // Set position centered on the active link
        const position = relativeCenter - (borderPosition.width / 1.65);
        
        // Update position
        setBorderPosition(prev => ({
          ...prev,
          activeLinkId: activeIndex,
          position: position
        }));
      }
    }, 0);
  }, [pathname]); // Only recalculate when pathname changes

  return (
    <nav className="w-full lg:max-w-[950px] xl:min-w-[1100px] z-10 mx-auto rounded-b-[32px]">
      <div
        ref={containerRef}
        className="w-full h-auto mx-auto px-4 sm:px-6 lg:px-12 lg:py-4 py-3 lg:rounded-b-[32px] relative z-10 bg-[linear-gradient(180deg,rgba(6,6,24,0.2)_0%,rgba(255,255,255,0.08)_1%)]"
        style={{
          backdropFilter: "blur(1px)",
        }}
      >
        {/* Border gradient - positioned based on active link */}
        {borderPosition.activeLinkId !== null && (
          <div
            className="lg:block hidden absolute bottom-0 h-1 transition-all duration-300"
            style={{
              left: `${borderPosition.position}px`,
              width: `${borderPosition.width}px`,
              borderBottom: "4px solid",
              borderImageSource:
                "linear-gradient(90deg, #060618 37.95%, #2E2688 52.58%, #01B0EA 57.46%, #FFFFFF 62.34%, #FFFFFF 64.77%, #01B0EA 67.21%, #2E2688 72.09%, #060618 86.72%)",
              borderImageSlice: "1",
            }}
          ></div>
        )}

        <div className="flex w-full justify-between items-center">
          <div className="flex items-center space-x-1 sm:space-x-3">
            <div className="flex lg:hidden items-center">
              <MobileNavigation navItems={NavItems} currentPath={pathname} />
            </div>
            <div className="">
              <Link href="/">
                <div className="flex items-center">
                  <Image
                    src={logo}
                    alt="FutureBits logo"
                    className="h-[35px] -ml-[15px] sm:ml-0 sm:h-[50px] sm:w-[210px]"
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-[40px] xl:space-x-[60px] font-light text-[22px]">
            {NavItems.map((item, index) => {
              const isActive = pathname === item.url;
              return (
                <NavLink
                  key={item.label}
                  href={item.url}
                  className="text-[20px] flex items-center font-normal font-poppins"
                  isActive={isActive}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>

          <ShimerButton size="sm" href="/book-call" className="text-[20px]">
            Book a Call
          </ShimerButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;