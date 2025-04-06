import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { BorderBeam } from "../ui/beam";
import { ShimmerButton } from "../magicui/shimmer-button";

// const BeamButton = ({
//   title="Book a Call",
//   className="w-full sm:w-[200px]",
// }) => {
//   return (
//     <button
//       className={`relative  flex items-center rounded-full  justify-center font-medium text-[18px] sm:text-[18px]  overflow-hidden ${className} h-[55px] text-white bg-[#01B0EA]`}
//     >
//       {title}
//       <ChevronRightIcon strokeWidth={3} className="h-4 w-4 ml-2" />
//       <BorderBeam
//         duration={4}
//         size={55}
//         // className=" from-white via-white to-transparent"
//         className=" from-[#01B0EA]/80 via-[#FFFFFF] to-[#01B0EA]/80"
//       />
//     </button>
//   );
// };

// export default BeamButton;


// Shimmer button 
const BeamButton = ({
  title="Book a Call",
  className="w-full sm:w-[240px]",
}) => {
  return (
    <ShimmerButton 
    background="#01B0EA"
    className={` font-medium text-[18px] sm:text-[18px]  ${className} h-[55px] `}>
      
        {title}
      <ChevronRightIcon strokeWidth={3} className="h-4 w-4 ml-1" />
    </ShimmerButton>
  );
};

export default BeamButton;

