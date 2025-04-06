import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { BorderBeam } from "../ui/beam";

const CircuitBeam = () => {
  return (
    <div className="relative border-l-[1px] border-t-[1px] h-[400px] w-[600px] border-white/10">
      <BorderBeam
        duration={4}
        size={100}
        className=" from-[#01B0EA]/80 via-[#FFFFFF] to-[#01B0EA]/80"
      />
    </div>
  );
};

export default CircuitBeam;
