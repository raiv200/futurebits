import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { ShimmerButton } from "../magicui/shimmer-button"; // Assuming ShimmerButton is in the same directory

const sizeStyles = {
  sm: {
    button: "sm:w-[200px] sm:h-[56px] w-[120px] h-[36px]", // Increased height
    icon: "h-3 w-3 ml-1",
    shimmerColor: "#ffffff",
    shimmerSize: "0.1em", // Increased shimmer height
    shimmerDuration: "2.5s"
  },
  md: {
    button: "w-48 h-16", // Increased height
    icon: "h-3.5 w-3.5 ml-1.5",
    shimmerColor: "#ffffff",
    shimmerSize: "0.1em", // Increased shimmer height
    shimmerDuration: "3s"
  },
  lg: {
    button: "sm:w-60 sm:h-[58px] w-[170px] h-[46px]", // Increased height
    icon: "h-4 w-4 ml-2",
    shimmerColor: "#060618",
    shimmerSize: "0.1em", // Increased shimmer height
    shimmerDuration: "3.5s"
  },
  xl: {
    button: "w-72 h-24", // Increased height
    icon: "h-5 w-5 ml-2.5",
    shimmerColor: "#ffffff",
    shimmerSize: "0.1em", // Increased shimmer height
    shimmerDuration: "4s"
  }
};

const colorVariants = {
  gradient: {
    background: "#FFFFFF",
    textColor: "text-black"
  },
  transparent: {
    background: "transparent",
    textColor: "text-white",
    border: "border-2 border-[#FFFFFF]"
  }
};

const ShimerButton = ({ 
  size = "lg", 
  children = "Book a Call", 
  variant = "gradient" 
}) => {
  const currentSize = sizeStyles[size] || sizeStyles.lg;
  const currentVariant = colorVariants[variant] || colorVariants.gradient;
  
  return (
    <ShimmerButton
      className={`${currentSize.button} ${currentVariant.textColor} ${currentVariant.border || ''} font-semibold sm:text-xl text-sm`} // Added font-bold and text-xl (20px)
      shimmerColor={currentSize.shimmerColor}
      shimmerSize={currentSize.shimmerSize}
      shimmerDuration={currentSize.shimmerDuration}
      background={currentVariant.background}
      borderRadius="100px"
    >
      <div className="flex items-center justify-center">
        {children}
        <ChevronRightIcon strokeWidth={3} className={currentSize.icon} />
      </div>
    </ShimmerButton>
  );
};

export default ShimerButton;