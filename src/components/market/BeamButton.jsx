import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { BorderBeam } from "../ui/beam";

const sizeStyles = {
  sm: {
    button: "w-[200px] h-[48px] text-[20px]",
    icon: "h-3 w-3 ml-1",
    beamSize: 35
  },
  md: {
    button: "w-48 h-12 text-base",
    icon: "h-3.5 w-3.5 ml-1.5",
    beamSize: 45
  },
  lg: {
    button: "w-60 h-14 text-xl",
    icon: "h-4 w-4 ml-2",
    beamSize: 55
  },
  xl: {
    button: "w-72 h-16 text-2xl",
    icon: "h-5 w-5 ml-2.5",
    beamSize: 65
  }
};

const colorVariants = {
  gradient: {
    background: "#FFFFFF",
    textColor: "text-[#000000CC]"
  },
  transparent: {
    background: "transparent",
    textColor: "text-white",
    border: "border-2 border-[#FFFFFFCC]"
  }
};

const BeamButton = ({ 
  size = "lg", 
  children = "Book a Call", 
  variant = "gradient" 
}) => {
  const currentSize = sizeStyles[size] || sizeStyles.lg;
  const currentVariant = colorVariants[variant] || colorVariants.gradient;
  
  return (
    <button
      className={`relative flex items-center rounded-full justify-center font-medium overflow-hidden ${currentSize.button} ${currentVariant.textColor} ${currentVariant.border || ''}`}
      style={{
        background: currentVariant.background,
      }}
    >
      {children}
      <ChevronRightIcon strokeWidth={3} className={currentSize.icon} />
      <BorderBeam
        duration={4}
        size={currentSize.beamSize}
        className="from-white via-white to-transparent"
      />
    </button>
  );
};

export default BeamButton;