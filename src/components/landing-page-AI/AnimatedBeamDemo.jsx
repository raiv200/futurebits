"use client"
import { useRef } from "react"
import { AnimatedBeam } from "@/components/magicui/animated-beam"

// L-shaped beam that creates a corner path between two points
function LBeam({
  start,
  corner,
  end,
  duration = 30, // Increased from 20 to 30
  delay = 0,
  startColor = "#01B0EA",
  stopColor = "#2E2688",
  thickness = 1,
}) {
  const containerRef = useRef(null)
  const startRef = useRef(null)
  const cornerRef = useRef(null)
  const endRef = useRef(null)

  return (
    <div className="absolute inset-0" ref={containerRef}>
      <div className="relative w-full h-full">
        <div ref={startRef} className={`absolute ${start}`} />
        <div ref={cornerRef} className={`absolute ${corner}`} />
        <div ref={endRef} className={`absolute ${end}`} />
      </div>
      {/* First segment: start to corner */}
      <AnimatedBeam
        duration={duration * 0.5}
        delay={delay}
        containerRef={containerRef}
        fromRef={startRef}
        toRef={cornerRef}
        gradientStartColor={startColor}
        gradientStopColor={stopColor}
        size={thickness}
      />
      {/* Second segment: corner to end */}
      <AnimatedBeam
        duration={duration * 0.5}
        delay={delay + duration * 0.5}
        containerRef={containerRef}
        fromRef={cornerRef}
        toRef={endRef}
        gradientStartColor={startColor}
        gradientStopColor={stopColor}
        size={thickness}
      />
    </div>
  )
}

// Regular straight beam (from original code)
function Beam({ 
  from, 
  to, 
  duration = 60, // Increased from 40 to 60
  delay = 0, 
  startColor = "#01B0EA", 
  stopColor = "#2E2688", 
  thickness = 2 
}) {
  const containerRef = useRef(null)
  const fromRef = useRef(null)
  const toRef = useRef(null)

  return (
    <div className="absolute inset-0" ref={containerRef}>
      <div className="relative w-full h-full">
        <div ref={fromRef} className={`absolute ${from}`} />
        <div ref={toRef} className={`absolute ${to}`} />
      </div>
      <AnimatedBeam
        duration={duration}
        delay={delay}
        containerRef={containerRef}
        fromRef={fromRef}
        toRef={toRef}
        gradientStartColor={startColor}
        gradientStopColor={stopColor}
        size={thickness}
      />
    </div>
  )
}

// Node component to create circuit connection points
function CircuitNode({ position, size = 3, color = "#01B0EA", pulse = false }) {
  return (
    <div
      className={`absolute ${position} w-${size} h-${size} rounded-full bg-${color} z-10 ${
        pulse ? "animate-pulse" : ""
      }`}
      style={{
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
        boxShadow: `0 0 ${size * 2}px ${color}`,
      }}
    />
  )
}

export function CircuitBackground() {
  // Different color themes with more tech-inspired colors
  const blueTheme = { start: "#01B0EA", stop: "#2E2688" }
  const greenTheme = { start: "#00FFC6", stop: "#0055FF" }
  const purpleTheme = { start: "#FF6CFF", stop: "#6C63FF" }
  const yellowTheme = { start: "#FFFF00", stop: "#FF0055" }
  const cyanTheme = { start: "#00FFFF", stop: "#0088FF" }
  const orangeTheme = { start: "#FF9900", stop: "#FF3300" }

  // Multiplier to slow down all animations
  const slowFactor = 4.5

  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Main CPU-like central hub with L-shaped connections */}
      <LBeam
        start="top-[45%] left-[40%]"
        corner="top-[45%] left-[60%]"
        end="top-[55%] left-[60%]"
        delay={0}
        duration={12 * slowFactor} // Increased from 7
        startColor={blueTheme.start}
        stopColor={blueTheme.stop}
        thickness={1.5}
      />
      <LBeam
        start="top-[55%] left-[60%]"
        corner="top-[55%] left-[40%]"
        end="top-[45%] left-[40%]"
        delay={6 * slowFactor} // Increased from 3.5
        duration={12 * slowFactor} // Increased from 7
        startColor={blueTheme.start}
        stopColor={blueTheme.stop}
        thickness={1.5}
      />

      {/* Left circuit branch with L-shaped paths */}
      <LBeam
        start="top-[50%] left-[40%]"
        corner="top-[50%] left-[25%]"
        end="top-[35%] left-[25%]"
        delay={2 * slowFactor} // Increased from 1.2
        duration={10 * slowFactor} // Increased from 6
        startColor={greenTheme.start}
        stopColor={greenTheme.stop}
        thickness={1.2}
      />
      <LBeam
        start="top-[35%] left-[25%]"
        corner="top-[35%] left-[15%]"
        end="top-[50%] left-[15%]"
        delay={7 * slowFactor} // Increased from 4.2
        duration={10 * slowFactor} // Increased from 6
        startColor={greenTheme.start}
        stopColor={greenTheme.stop}
        thickness={1.2}
      />
      <LBeam
        start="top-[50%] left-[15%]"
        corner="top-[65%] left-[15%]"
        end="top-[65%] left-[30%]"
        delay={12 * slowFactor} // Increased from 7.2
        duration={10 * slowFactor} // Increased from 6
        startColor={greenTheme.start}
        stopColor={greenTheme.stop}
        thickness={1.2}
      />

      {/* Right circuit branch with L-shaped paths */}
      <LBeam
        start="top-[50%] left-[60%]"
        corner="top-[50%] left-[75%]"
        end="top-[35%] left-[75%]"
        delay={1.7 * slowFactor} // Increased from 1.0
        duration={11 * slowFactor} // Increased from 6.5
        startColor={yellowTheme.start}
        stopColor={yellowTheme.stop}
        thickness={1.2}
      />
      <LBeam
        start="top-[35%] left-[75%]"
        corner="top-[35%] left-[85%]"
        end="top-[50%] left-[85%]"
        delay={7.5 * slowFactor} // Increased from 4.5
        duration={11 * slowFactor} // Increased from 6.5
        startColor={yellowTheme.start}
        stopColor={yellowTheme.stop}
        thickness={1.2}
      />
      <LBeam
        start="top-[50%] left-[85%]"
        corner="top-[65%] left-[85%]"
        end="top-[65%] left-[70%]"
        delay={13.5 * slowFactor} // Increased from 8.0
        duration={11 * slowFactor} // Increased from 6.5
        startColor={yellowTheme.start}
        stopColor={yellowTheme.stop}
        thickness={1.2}
      />

      {/* Top circuit paths */}
      <LBeam
        start="top-[25%] left-[30%]"
        corner="top-[25%] left-[50%]"
        end="top-[35%] left-[50%]"
        delay={3.5 * slowFactor} // Increased from 2.0
        duration={8 * slowFactor} // Increased from 5
        startColor={cyanTheme.start}
        stopColor={cyanTheme.stop}
        thickness={1}
      />
      <LBeam
        start="top-[25%] left-[70%]"
        corner="top-[25%] left-[50%]"
        end="top-[35%] left-[50%]"
        delay={7.5 * slowFactor} // Increased from 4.5
        duration={8 * slowFactor} // Increased from 5
        startColor={cyanTheme.start}
        stopColor={cyanTheme.stop}
        thickness={1}
      />
      <Beam
        from="top-[35%] left-[50%]"
        to="top-[45%] left-[50%]"
        delay={11.5 * slowFactor} // Increased from 7.0
        duration={5 * slowFactor} // Increased from 3
        startColor={cyanTheme.start}
        stopColor={cyanTheme.stop}
        thickness={1}
      />

      {/* Bottom circuit paths */}
      <LBeam
        start="top-[65%] left-[30%]"
        corner="top-[75%] left-[30%]"
        end="top-[75%] left-[50%]"
        delay={17 * slowFactor} // Increased from 10.2
        duration={9 * slowFactor} // Increased from 5.5
        startColor={orangeTheme.start}
        stopColor={orangeTheme.stop}
        thickness={1}
      />
      <LBeam
        start="top-[65%] left-[70%]"
        corner="top-[75%] left-[70%]"
        end="top-[75%] left-[50%]"
        delay={19.5 * slowFactor} // Increased from 11.7
        duration={9 * slowFactor} // Increased from 5.5
        startColor={orangeTheme.start}
        stopColor={orangeTheme.stop}
        thickness={1}
      />
      <Beam
        from="top-[75%] left-[50%]"
        to="top-[65%] left-[50%]"
        delay={23.5 * slowFactor} // Increased from 14.2
        duration={5 * slowFactor} // Increased from 3
        startColor={orangeTheme.start}
        stopColor={orangeTheme.stop}
        thickness={1}
      />
      <Beam
        from="top-[65%] left-[50%]"
        to="top-[55%] left-[50%]"
        delay={26 * slowFactor} // Increased from 15.7
        duration={5 * slowFactor} // Increased from 3
        startColor={purpleTheme.start}
        stopColor={purpleTheme.stop}
        thickness={1}
      />

      {/* Microchip-like grid in the center */}
      <Beam
        from="top-[47%] left-[45%]"
        to="top-[47%] left-[55%]"
        delay={2.5 * slowFactor} // Increased from 1.5
        duration={7 * slowFactor} // Increased from 4
        startColor={purpleTheme.start}
        stopColor={purpleTheme.stop}
        thickness={0.8}
      />
      <Beam
        from="top-[49%] left-[45%]"
        to="top-[49%] left-[55%]"
        delay={4.2 * slowFactor} // Increased from 2.5
        duration={7 * slowFactor} // Increased from 4
        startColor={purpleTheme.start}
        stopColor={purpleTheme.stop}
        thickness={0.8}
      />
      <Beam
        from="top-[51%] left-[45%]"
        to="top-[51%] left-[55%]"
        delay={5.8 * slowFactor} // Increased from 3.5
        duration={7 * slowFactor} // Increased from 4
        startColor={purpleTheme.start}
        stopColor={purpleTheme.stop}
        thickness={0.8}
      />
      <Beam
        from="top-[53%] left-[45%]"
        to="top-[53%] left-[55%]"
        delay={7.5 * slowFactor} // Increased from 4.5
        duration={7 * slowFactor} // Increased from 4
        startColor={purpleTheme.start}
        stopColor={purpleTheme.stop}
        thickness={0.8}
      />

      {/* Additional diagonal connections */}
      <Beam
        from="top-[40%] left-[35%]"
        to="top-[45%] left-[40%]"
        delay={8.3 * slowFactor} // Increased from 5.0
        duration={5 * slowFactor} // Increased from 3
        startColor={greenTheme.start}
        stopColor={greenTheme.stop}
        thickness={1}
      />
      <Beam
        from="top-[40%] left-[65%]"
        to="top-[45%] left-[60%]"
        delay={9.2 * slowFactor} // Increased from 5.5
        duration={5 * slowFactor} // Increased from 3
        startColor={yellowTheme.start}
        stopColor={yellowTheme.stop}
        thickness={1}
      />
      <Beam
        from="top-[60%] left-[40%]"
        to="top-[65%] left-[45%]"
        delay={10 * slowFactor} // Increased from 6.0
        duration={5 * slowFactor} // Increased from 3
        startColor={orangeTheme.start}
        stopColor={orangeTheme.stop}
        thickness={1}
      />
      <Beam
        from="top-[60%] left-[60%]"
        to="top-[65%] left-[55%]"
        delay={10.8 * slowFactor} // Increased from 6.5
        duration={5 * slowFactor} // Increased from 3
        startColor={orangeTheme.start}
        stopColor={orangeTheme.stop}
        thickness={1}
      />

      {/* Circuit nodes/connection points */}
      <CircuitNode position="top-[45%] left-[40%]" size={4} color={blueTheme.start} pulse={true} />
      <CircuitNode position="top-[45%] left-[60%]" size={4} color={blueTheme.start} pulse={true} />
      <CircuitNode position="top-[55%] left-[60%]" size={4} color={blueTheme.start} pulse={true} />
      <CircuitNode position="top-[55%] left-[40%]" size={4} color={blueTheme.start} pulse={true} />
      
      <CircuitNode position="top-[50%] left-[40%]" size={3} color={greenTheme.start} />
      <CircuitNode position="top-[50%] left-[25%]" size={3} color={greenTheme.start} />
      <CircuitNode position="top-[35%] left-[25%]" size={3} color={greenTheme.start} />
      <CircuitNode position="top-[35%] left-[15%]" size={3} color={greenTheme.start} />
      <CircuitNode position="top-[50%] left-[15%]" size={3} color={greenTheme.start} />
      <CircuitNode position="top-[65%] left-[15%]" size={3} color={greenTheme.start} />
      <CircuitNode position="top-[65%] left-[30%]" size={3} color={greenTheme.start} />
      
      <CircuitNode position="top-[50%] left-[60%]" size={3} color={yellowTheme.start} />
      <CircuitNode position="top-[50%] left-[75%]" size={3} color={yellowTheme.start} />
      <CircuitNode position="top-[35%] left-[75%]" size={3} color={yellowTheme.start} />
      <CircuitNode position="top-[35%] left-[85%]" size={3} color={yellowTheme.start} />
      <CircuitNode position="top-[50%] left-[85%]" size={3} color={yellowTheme.start} />
      <CircuitNode position="top-[65%] left-[85%]" size={3} color={yellowTheme.start} />
      <CircuitNode position="top-[65%] left-[70%]" size={3} color={yellowTheme.start} />
      
      <CircuitNode position="top-[25%] left-[30%]" size={3} color={cyanTheme.start} />
      <CircuitNode position="top-[25%] left-[50%]" size={3} color={cyanTheme.start} />
      <CircuitNode position="top-[25%] left-[70%]" size={3} color={cyanTheme.start} />
      <CircuitNode position="top-[35%] left-[50%]" size={3} color={cyanTheme.start} />
      <CircuitNode position="top-[45%] left-[50%]" size={3} color={cyanTheme.start} />
      
      <CircuitNode position="top-[65%] left-[30%]" size={3} color={orangeTheme.start} />
      <CircuitNode position="top-[75%] left-[30%]" size={3} color={orangeTheme.start} />
      <CircuitNode position="top-[75%] left-[50%]" size={3} color={orangeTheme.start} />
      <CircuitNode position="top-[75%] left-[70%]" size={3} color={orangeTheme.start} />
      <CircuitNode position="top-[65%] left-[70%]" size={3} color={orangeTheme.start} />
      <CircuitNode position="top-[65%] left-[50%]" size={3} color={orangeTheme.start} />
      <CircuitNode position="top-[55%] left-[50%]" size={3} color={purpleTheme.start} />
    </div>
  )
}









// "use client";
// import React, { useRef } from "react";
// import { AnimatedBeam } from "@/components/magicui/animated-beam";

// // Single beam between two points with delay option
// function Beam({
//   from,
//   to,
//   duration = 8,
//   delay = 0,
//   startColor = "#01B0EA",
//   stopColor = "#2E2688",
//   thickness = 1,
// }) {
//   const containerRef = useRef(null);
//   const fromRef = useRef(null);
//   const toRef = useRef(null);
  
//   return (
//     <div className="absolute inset-0" ref={containerRef}>
//       <div className="relative w-full h-full">
//         <div ref={fromRef} className={`absolute ${from}`} />
//         <div ref={toRef} className={`absolute ${to}`} />
//       </div>
//       <AnimatedBeam
//         duration={duration}
//         delay={delay}
//         containerRef={containerRef}
//         fromRef={fromRef}
//         toRef={toRef}
//         gradientStartColor={startColor}
//         gradientStopColor={stopColor}
//         size={thickness}
//       />
//     </div>
//   );
// }

// export function CircuitBackground() {
//   // Different color themes
//   const blueTheme = { start: "#01B0EA", stop: "#2E2688" };
//   const greenTheme = { start: "#00FFC6", stop: "#0055FF" };
//   const purpleTheme = { start: "#FF6CFF", stop: "#6C63FF" };
//   const yellowTheme = { start: "#FFFF00", stop: "#FF0055" };

//   return (
//     <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
//       {/* Central Hub - "Powered By" section */}
//       <Beam 
//         from="top-[45%] left-[40%]" 
//         to="top-[45%] left-[60%]" 
//         delay={0} 
//         duration={7} 
//         startColor={blueTheme.start} 
//         stopColor={blueTheme.stop}
//         thickness={1.2}
//       />
//       <Beam 
//         from="top-[45%] left-[60%]" 
//         to="top-[55%] left-[60%]" 
//         delay={0.3} 
//         duration={7} 
//         startColor={blueTheme.start} 
//         stopColor={blueTheme.stop}
//         thickness={1.2}
//       />
//       <Beam 
//         from="top-[55%] left-[60%]" 
//         to="top-[55%] left-[40%]" 
//         delay={0.6} 
//         duration={7} 
//         startColor={blueTheme.start} 
//         stopColor={blueTheme.stop}
//         thickness={1.2}
//       />
//       <Beam 
//         from="top-[55%] left-[40%]" 
//         to="top-[45%] left-[40%]" 
//         delay={0.9} 
//         duration={7} 
//         startColor={blueTheme.start} 
//         stopColor={blueTheme.stop}
//         thickness={1.2}
//       />

//       {/* Left Technology Branch (React) */}
//       <Beam 
//         from="top-[50%] left-[40%]" 
//         to="top-[50%] left-[30%]" 
//         delay={1.2} 
//         duration={6} 
//         startColor={greenTheme.start} 
//         stopColor={greenTheme.stop}
//       />
//       <Beam 
//         from="top-[50%] left-[30%]" 
//         to="top-[50%] left-[20%]" 
//         delay={1.5} 
//         duration={6} 
//         startColor={greenTheme.start} 
//         stopColor={greenTheme.stop}
//       />
//       <Beam 
//         from="top-[50%] left-[20%]" 
//         to="top-[60%] left-[20%]" 
//         delay={1.8} 
//         duration={6} 
//         startColor={greenTheme.start} 
//         stopColor={greenTheme.stop}
//       />
//       <Beam 
//         from="top-[60%] left-[20%]" 
//         to="top-[70%] left-[20%]" 
//         delay={2.1} 
//         duration={6} 
//         startColor={greenTheme.start} 
//         stopColor={greenTheme.stop}
//       />

//       {/* Middle Technology Branch (Turbopack) */}
//       <Beam 
//         from="top-[50%] left-[50%]" 
//         to="top-[65%] left-[50%]" 
//         delay={0.8} 
//         duration={5} 
//         startColor={purpleTheme.start} 
//         stopColor={purpleTheme.stop}
//       />
//       <Beam 
//         from="top-[65%] left-[50%]" 
//         to="top-[70%] left-[50%]" 
//         delay={1.2} 
//         duration={5} 
//         startColor={purpleTheme.start} 
//         stopColor={purpleTheme.stop}
//       />

//       {/* Right Technology Branch (SWC) */}
//       <Beam 
//         from="top-[50%] left-[60%]" 
//         to="top-[50%] left-[70%]" 
//         delay={1.0} 
//         duration={6.5} 
//         startColor={yellowTheme.start} 
//         stopColor={yellowTheme.stop}
//       />
//       <Beam 
//         from="top-[50%] left-[70%]" 
//         to="top-[50%] left-[80%]" 
//         delay={1.4} 
//         duration={6.5} 
//         startColor={yellowTheme.start} 
//         stopColor={yellowTheme.stop}
//       />
//       <Beam 
//         from="top-[50%] left-[80%]" 
//         to="top-[60%] left-[80%]" 
//         delay={1.8} 
//         duration={6.5} 
//         startColor={yellowTheme.start} 
//         stopColor={yellowTheme.stop}
//       />
//       <Beam 
//         from="top-[60%] left-[80%]" 
//         to="top-[70%] left-[80%]" 
//         delay={2.2} 
//         duration={6.5} 
//         startColor={yellowTheme.start} 
//         stopColor={yellowTheme.stop}
//       />

//       {/* Connecting lines between the technology branches */}
//       <Beam 
//         from="top-[70%] left-[20%]" 
//         to="top-[70%] left-[35%]" 
//         delay={2.4} 
//         duration={8} 
//         startColor={greenTheme.start} 
//         stopColor={greenTheme.stop}
//       />
//       <Beam 
//         from="top-[70%] left-[35%]" 
//         to="top-[70%] left-[50%]" 
//         delay={2.8} 
//         duration={8} 
//         startColor={purpleTheme.start} 
//         stopColor={purpleTheme.stop}
//       />
//       <Beam 
//         from="top-[70%] left-[50%]" 
//         to="top-[70%] left-[65%]" 
//         delay={3.2} 
//         duration={8} 
//         startColor={purpleTheme.start} 
//         stopColor={purpleTheme.stop}
//       />
//       <Beam 
//         from="top-[70%] left-[65%]" 
//         to="top-[70%] left-[80%]" 
//         delay={3.6} 
//         duration={8} 
//         startColor={yellowTheme.start} 
//         stopColor={yellowTheme.stop}
//       />

//       {/* Top connections - like the diagram in the image */}
//       <Beam 
//         from="top-[30%] left-[35%]" 
//         to="top-[30%] left-[65%]" 
//         delay={0.4} 
//         duration={9} 
//         startColor={blueTheme.start} 
//         stopColor={blueTheme.stop}
//       />
//       <Beam 
//         from="top-[30%] left-[35%]" 
//         to="top-[40%] left-[35%]" 
//         delay={0.8} 
//         duration={7} 
//         startColor={blueTheme.start} 
//         stopColor={blueTheme.stop}
//       />
//       <Beam 
//         from="top-[40%] left-[35%]" 
//         to="top-[45%] left-[40%]" 
//         delay={1.2} 
//         duration={6} 
//         startColor={blueTheme.start} 
//         stopColor={blueTheme.stop}
//       />
//       <Beam 
//         from="top-[30%] left-[65%]" 
//         to="top-[40%] left-[65%]" 
//         delay={0.8} 
//         duration={7} 
//         startColor={blueTheme.start} 
//         stopColor={blueTheme.stop}
//       />
//       <Beam 
//         from="top-[40%] left-[65%]" 
//         to="top-[45%] left-[60%]" 
//         delay={1.2} 
//         duration={6} 
//         startColor={blueTheme.start} 
//         stopColor={blueTheme.stop}
//       />

//       {/* Diagonal flows - data pulses */}
//       <Beam 
//         from="top-[35%] left-[30%]" 
//         to="top-[50%] left-[45%]" 
//         delay={2.0} 
//         duration={5} 
//         startColor={greenTheme.start} 
//         stopColor={greenTheme.stop}
//       />
//       <Beam 
//         from="top-[35%] left-[70%]" 
//         to="top-[50%] left-[55%]" 
//         delay={1.6} 
//         duration={5} 
//         startColor={yellowTheme.start} 
//         stopColor={yellowTheme.stop}
//       />
//       <Beam 
//         from="top-[65%] left-[25%]" 
//         to="top-[50%] left-[45%]" 
//         delay={1.8} 
//         duration={5.5} 
//         startColor={greenTheme.start} 
//         stopColor={greenTheme.stop}
//       />
//       <Beam 
//         from="top-[65%] left-[75%]" 
//         to="top-[50%] left-[55%]" 
//         delay={2.2} 
//         duration={5.5} 
//         startColor={yellowTheme.start} 
//         stopColor={yellowTheme.stop}
//       />
//     </div>
//   );
// }








// "use client";

// import React, { forwardRef, useRef } from "react";

// import { AnimatedBeam } from "@/components/magicui/animated-beam";

// export function AnimatedBeamDemo() {
//   const containerRef = useRef(null);
//   const div1Ref = useRef(null);
//   const div2Ref = useRef(null);


//   return (
//     <div
//       className="relative flex w-full max-w-[1000px] items-center justify-center overflow-hidden p-10"
//       ref={containerRef}
//     >
//       <div className="flex size-full flex-col items-stretch justify-between gap-10">
//         <div className="flex flex-row justify-between">
//           <div ref={div1Ref}></div>
//           <div ref={div2Ref}></div>
//         </div>
//       </div>

//       <AnimatedBeam
//         duration={8}
//         containerRef={containerRef}
//         fromRef={div1Ref}
//         toRef={div2Ref}
//         gradientStartColor="#01B0EA"
//         gradientStopColor="#2E2688"
//       />
//     </div>
//   );
// }
