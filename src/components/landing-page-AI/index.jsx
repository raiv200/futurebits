import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Image from "next/image";
import Engaged from "./Engaged";
import ServicesSection from "./services";
import WorkSection from "./Work";
import BenefitsSection from "./Benefits";
import TestimonialsSection from "./Testimonials";
import ProjectsSection from "./ProjectSection";
import Feature from "./Feature";
// import hero from "../../../public/hero.png";
import HeroBg from "../../assets/landing-page-AI/hero.png";
import AboutMe from "./AboutMe";
import TestimonialsCarousel from "./TestimonialCarousel";
import { Globe } from "../magicui/globe";

export default function LandingPageAI() {
  return (
    <div className="bg-[#060719]" id="ai">
      <div>
      <Hero />
      </div>
      <Engaged />
      <ServicesSection />

      <BenefitsSection />
      <ProjectsSection />

      <TestimonialsCarousel />

      <AboutMe />
      <Feature />
      <Footer />
    </div>
  );
}
