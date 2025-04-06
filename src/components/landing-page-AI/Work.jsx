"use client";
import Image from "next/image";

// Assuming we have these icons/images in the assets folder
import analyzeIcon from "@/assets/landing-page-AI/analyze-icon.svg";
import buildIcon from "@/assets/landing-page-AI/build-icon.svg";
import maintainIcon from "@/assets/landing-page-AI/maintain-icon.svg";
import circle from "@/assets/landing-page-AI/circle.png";

const ServiceCard = ({ icon, title, description, stepNumber }) => (
  <div className="relative w-full max-w-[338px] h-auto rounded-[10px]">
    {/* Image Container */}
    <div className="w-full h-[200px] flex items-center justify-center">
      <Image
        src={icon || "/placeholder.svg"}
        alt={title}
        width={338}
        height={200}
        className="object-contain"
      />
    </div>

    {/* Step Number */}
    <div
      className="absolute top-[205px] left-[28px] text-[46px] font-bold 
      bg-clip-text text-transparent 
      bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)]"
      style={{ fontFamily: "montserrat" }}
    >
      {stepNumber < 10 ? `0${stepNumber}` : stepNumber}
    </div>

    {/* Blue Diamond */}
    <div className="absolute top-[245px] left-[0px]">
      <svg
        width="42"
        height="43"
        viewBox="0 0 42 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_615_4445)">
          <rect
            width="9.89948"
            height="9.89948"
            transform="matrix(0.707106 0.707108 -0.707106 0.707108 21 14.5527)"
            fill="#01B0EA"
          />
        </g>
        <rect
          width="9.89948"
          height="9.89948"
          transform="matrix(0.707106 0.707108 -0.707106 0.707108 21 14.5527)"
          fill="#01B0EA"
        />
        <defs>
          <filter
            id="filter0_f_615_4445"
            x="0"
            y="0.552734"
            width="42"
            height="42"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="7"
              result="effect1_foregroundBlur_615_4445"
            />
          </filter>
        </defs>
      </svg>
    </div>

    {/* Content */}
    <div className="px-[35px] mt-[46px] pb-6">
      <h3 className="text-[24px] font-semibold font-poppins text-white mb-4">
        {title}
      </h3>
      <p className="text-[18px] font-normal font-poppins text-[rgba(255,255,255,0.5)] leading-[28px]">
        {description}
      </p>
    </div>
  </div>
);

const WorkSection = () => {
  const services = [
    {
      id: 1,
      icon: analyzeIcon,
      title: "🔍 Analyze",
      description:
        "We identify where AI can create the biggest impact in your business",
    },
    {
      id: 2,
      icon: buildIcon,
      title: "⚙️ Build & Implement",
      description:
        "Our AI engineers develop custom, scalable AI models and automation tailored to your needs",
    },
    {
      id: 3,
      icon: maintainIcon,
      title: "📈 Maintain & Improve",
      description:
        "We optimize and continuously enhance AI solutions to ensure lasting impact",
    },
  ];

  return (
    <section className="relative py-[68px] px-4 bg-transparent">
      <div className="absolute top-[-600px] right-0 w-[729px] h-[729px] bg-[#2E2688] rounded-full blur-[100px] opacity-30 z-0 overflow-hidden" />
      <div className="absolute bottom-[-500px] left-0 md:left-[-100px] md:w-[729px] md:h-[729px] bg-[#2E2688] opacity-30 rounded-full blur-[100px] overflow-hidden"></div>
      <div className="absolute left-[-300px] bottom-[-300px] transform -translate-y-[30%] translate-x-[20%] z-0 opacity-30 w-[436px] h-[436px]">
        <div className="relative w-full h-full bg-transparent">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="aa base-one absolute w-full h-full rounded-full overflow-hidden">
              <Image
                src={circle}
                alt="Animated Circle"
                fill
                className="opacity-80 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main container with animated border */}
      <div className="max-w-[1297px] mx-auto relative z-0">
        {/* Animated border container */}
        <div className="animated-border-container relative rounded-[32px]">
          {/* Animated border element */}
          <div className="animated-border absolute inset-0 rounded-[32px]"></div>

          {/* Content container */}
          <div
            className="relative z-40 rounded-[32px] py-[65px] px-[91px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(46, 38, 136, 0.3) 0%, rgba(6, 6, 24, 0.3) 100%)",
              backdropFilter: "blur(42px)",
            }}
          >
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <span className="uppercase text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#01B0EA] to-[#2E2688]">
                  HOW WE WORK
                </span>
                <span className="text-yellow-400">✨</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-12 flex items-center justify-center gap-3">
                <span className="text-yellow-300">💡</span> A Simple & Effective
                Process
              </h2>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative justify-items-center">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  stepNumber={index + 1}
                />
              ))}
            </div>

            {/* CTA Button - Positioned over the bottom border */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-25px] z-20">
              <button
                className="bg-gradient-to-r from-[#01B0EA] to-[#2E2688] 
                text-white font-semibold py-3 px-8 rounded-full 
                hover:opacity-90 transition-opacity duration-300 flex items-center gap-2"
              >
                Book a Call
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          20% {
            opacity: 20%;
          }
          50% {
            opacity: 90%;
            z-index: 10;
          }
          75% {
            opacity: 20%;
          }
          to {
            transform: rotate(360deg);
            z-index: -10;
          }
        }

        .base-one {
          animation: rotation 30s infinite linear;
          z-index: 0;
        }

        /* Animated border styles */
        .animated-border-container {
          background: linear-gradient(
            180deg,
            rgba(46, 38, 136, 0.3) 0%,
            rgba(6, 6, 24, 0.3) 100%
          );
          padding: 4px; /* Border thickness */
        }

        .animated-border {
          border-radius: 32px;
          background: linear-gradient(
            90deg,
            #060618 5.74%,
            #2e2688 21.94%,
            #01b0ea 38.13%,
            #ffffff 46.23%,
            #01b0ea 54.33%,
            #2e2688 70.52%,
            #060618 86.72%
          );
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          padding: 4px;
          position: absolute;
          inset: 0;
        }

        @keyframes borderAnimation {
          0% {
            clip-path: polygon(0% 0%, 4px 0%, 4px 100%, 0% 100%);
          }
          25% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 4px, 0% 4px);
          }
          50% {
            clip-path: polygon(
              calc(100% - 4px) 0%,
              100% 0%,
              100% 100%,
              calc(100% - 4px) 100%
            );
          }
          75% {
            clip-path: polygon(
              0% calc(100% - 4px),
              100% calc(100% - 4px),
              100% 100%,
              0% 100%
            );
          }
          100% {
            clip-path: polygon(0% 0%, 4px 0%, 4px 100%, 0% 100%);
          }
        }

        .animated-border::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 32px;
          background: linear-gradient(
            90deg,
            #060618 5.74%,
            #2e2688 21.94%,
            #01b0ea 38.13%,
            #ffffff 46.23%,
            #01b0ea 54.33%,
            #2e2688 70.52%,
            #060618 86.72%
          );
          animation: borderAnimation 4s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default WorkSection;
