import React from "react";
import Link from 'next/link';
import Button from "./landing-page-AI/Button";

export const AnimatedBorderButton = ({ children, href, className }) => {
  return (
    <Link href={"https://cal.com/futurebits/design?duration=30"}>
      <div className="relative">
        {/* Border container */}
        <div className="absolute -inset-0 rounded-full border-animated p-[1.5px]">
          {/* Content inside the border */}
          <Button 
            variant='figma' 
            size='navbarButton' 
            className={`relative z-10 lg:max-w-[220px] h-12 transition-all duration-300 hover:scale-105 hover:brightness-110 font-semibold leading-[100%] text-lg ${className || ''}`}
          >
            {children}
          </Button>
        </div>
        
        {/* Animation style
        <style jsx global>{`
          .border-animated {
            position: relative;
            overflow: hidden;
          }
          
          .border-animated::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, 
              #060618 0%, 
              #2E2688 30%, 
              #01B0EA 45%, 
              #FFFFFF 50%, 
              #01B0EA 55%, 
              #2E2688 70%, 
              #060618 100%
            );
            background-size: 300% 100%;
            border-radius: 9999px;
            animation: moveGradient 3s linear infinite;
          }
          
          .border-animated::after {
            content: '';
            position: absolute;
            top: 1.5px;
            left: 1.5px;
            right: 1.5px;
            bottom: 1.5px;
            background-color: rgba(6, 6, 24, 1);
            border-radius: 9999px;
            z-index: 1;
          }
          
          @keyframes moveGradient {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
        `}</style> */}
      </div>
    </Link>
  );
};