import React from "react";
import { CircuitBoard, Boxes, Rocket, Flame } from "lucide-react";
import Image from "next/image";
import TOne from "../../../public/design/trusted/truusted1.png";
import TTwo from "../../../public/design/trusted/truusted2.png";
import TThree from "../../../public/design/trusted/truusted3.png";
import TFour from "../../../public/design/trusted/truusted4.png";

const CompanyLogos = [
  {
    src: TOne,
    alt: "Company Logo 1",
  },
  {
    src: TTwo,
    alt: "Company Logo 2",
  },
  {
    src: TThree,
    alt: "Company Logo 3",
  },
  {
    src: TFour,
    alt: "Company Logo 4",
  },
];

const Companies = () => {
  return (
    <div className="text-white py-10">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <p className="text-white opacity-50 ">Trusted by Leading Companies</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12  mt-6">
          {/* Company logos represented by Lucide icons with custom styling */}
          {CompanyLogos.map((logo, index) => {
            return (
              <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={190}
              height={100}
              className="max-w-[190px] w-full"
            />
            )
          })}
        </div>
      </section>
    </div>
  );
};

export default Companies;
