import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import Image from "next/image";
import P1 from "../../../public/design/portfolio/Agrivijay_after.png";
import P2 from "../../../public/design/portfolio/Auragreen.png";

import P3 from "../../../public/design/portfolio/Brisil.png";

import P4 from "../../../public/design/portfolio/Bubblenutwash_After.png";

import P5 from "../../../public/design/portfolio/Earth_tatva_afterr.png";

import P6 from "../../../public/design/portfolio/Eco_femme.png";

import P7 from "../../../public/design/portfolio/Ekam.png";
import P8 from "../../../public/design/portfolio/MInimines_hero_after.png";
import P9 from "../../../public/design/portfolio/revy_after.png";
import P10 from "../../../public/design/portfolio/start_upcycling_now_after.png";
import P11 from "../../../public/design/portfolio/Vaayu_after.png";

const reviews = [
  {
    live: "Jack",
    txt: "@jack",
    img: P1,
  },
  {
    live: "Jack1",
    txt: "@jack1",
    img: P2,
  },
  {
    live: "Jack2",
    txt: "@jack2",
    img: P3,
  },
  {
    live: "Jack3",
    txt: "@jack3",
    img: P4,
  },
  {
    live: "Jack4",
    txt: "@jack4",
    img: P5,
  },
  {
    live: "Jack5",
    txt: "@jack5",
    img: P6,
  },
  {
    live: "Jack6",
    txt: "@jack6",
    img: P7,
  },
  {
    live: "Jack7",
    txt: "@jack7",
    img: P8,
  },
  {
    live: "Jack8",
    txt: "@jack8",
    img: P9,
  },
  {
    live: "Jack9",
    txt: "@jack9",
    img: P10,
  },
  {
    live: "Jack10",
    txt: "@jack10",
    img: P11,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({ img, live, txt }) => {
  return (
    
      <div className="rounded-xl overflow-hidden ">
        <img src={img.src} alt={live} className="w-full h-full object-cover" />
      </div>
    
  );
};

export function PortfolioCard() {
  return (
    <div className="relative flex w-full  items-center justify-center overflow-hidden  ">
      <Marquee reverse className="[--duration:60s] py-[40px]">
        {firstRow.map((review,index) => (
          <div key={index}
          style={{ background: "linear-gradient(116.82deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 100%)"}}  
          className="p-[5px]  rounded-2xl max-w-[200px]  md:max-w-[500px]  w-full h-full  hover:scale-[1.06] transition-all duration-300 ease-in">
            
          <ReviewCard key={review.live} {...review} />
          </div>
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div> */}
      {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
    </div>
  );
}
