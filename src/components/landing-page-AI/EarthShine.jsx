import React from "react";

const EarthShine = () => {
  return (
    <div className="relative w-full h-[300px] flex justify-center items-center bg-black overflow-hidden">
      {/* Earth Body */}
      <div className="absolute bottom-0 w-[500px] h-[250px] bg-black rounded-full"></div>
      
      {/* Glow Effect */}
      <div className="absolute top-[-100px] w-[600px] h-[300px] rounded-full bg-gradient-to-b from-blue-500 to-transparent opacity-70 blur-3xl"></div>
    </div>
  );
};

export default EarthShine;
