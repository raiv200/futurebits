"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import navbarDiamond from "../../../public/navbar.svg";
// Import assets
import avatar from "@/assets/landing-page-AI/testimonial.svg"
import quote from "@/assets/landing-page-AI/quote.svg"

// Testimonial data - keeping original structure but updating first item to match design
const testimonials = [
  {
    id: 1,
    content:
      "Our team is super happy with the design work. We love the transformation! Futurebits did an outstanding job! Highly responsive, and the website created for us is awesome",
    rating: 5,
    author: "Larsen Black",
    position: "Banker",
    avatar: avatar,
  },
  {
    id: 2,
    content:
      "Their choice of AI solutions has revolutionized our workflow, providing exceptional support and transforming how our customers interact with us.",
    rating: 5,
    author: "Laura Smith",
    position: "Bantech CTO",
    avatar: avatar,
  },
  {
    id: 3,
    content:
      "The implementation was seamless and the results were immediate. Our team productivity increased by 40% within the first month of deployment.",
    rating: 5,
    author: "Michael Chen",
    position: "InnovateTech Founder",
    avatar: avatar,
  },
  {
    id: 4,
    content:
      "We've tried multiple AI solutions before, but none delivered the precision and reliability we found with this team. Truly exceptional service.",
    rating: 5,
    author: "Sarah Johnson",
    position: "DataFlow Director",
    avatar: avatar,
  },
  {
    id: 5,
    content:
      "The custom AI model they built for our specific needs has transformed our customer service department. Response times cut in half, satisfaction up 60%.",
    rating: 5,
    author: "David Wilson",
    position: "Nexus Operations",
    avatar: avatar,
  },
]

// Star rating component - enhanced to match design
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-xl">
          ★
        </span>
      ))}
    </div>
  )
}

// Single testimonial card component - updated styling to match design
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card flex min-w-[700px] h-auto px-6 mx-4">
      <div
        className="rounded-lg overflow-hidden h-full p-8 md:p-12 relative testimonial-card-border"
      >
        {/* Quote icons in corners */}
        <div className="absolute bottom-6 right-6 opacity-30">
          <Image src={quote} alt="Quote" width={40} height={40} />
        </div>
        <p className="text-white/90 text-lg md:text-2xl leading-normal font-normal mb-6 z-10 relative">
          {testimonial.content}
        </p>

        <div className="mt-auto z-10 relative flex flex-col items-start">
          <StarRating rating={testimonial.rating} />

          <div className="flex items-center mt-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-white font-medium text-lg">{testimonial.author}</h4>
              <p className="text-white/50 text-sm">{testimonial.position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Dot indicator component - updated to match design with different active/inactive images
const DotIndicator = ({ total, active, handleDotClick }) => {
  return (
    <div className="flex justify-center gap-4 mt-12">
      {[...Array(total)].map((_, i) => (
        <button
          key={i}
          onClick={() => handleDotClick(i)}
          className="focus:outline-none"
          aria-label={`Go to slide ${i + 1}`}
        >
          {active === i ? (
            // Active dot - filled circle
            <div className="w-3 h-3 bg-white rounded-full"></div>
          ) : (
            // Inactive dot - outlined circle
            <div className="w-3 h-3 border border-white/40 rounded-full"></div>
          )}
        </button>
      ))}
    </div>
  )
}

// Main testimonials carousel component
export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const marqueeRef = useRef(null)
  const totalSlides = testimonials.length
  
  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index)
    if (marqueeRef.current) {
      const slideWidth = marqueeRef.current.scrollWidth / (totalSlides * 2)
      const scrollPosition = index * slideWidth
      marqueeRef.current.scrollLeft = scrollPosition
    }
  }

  // Marquee animation effect
  useEffect(() => {
    let animationId = null
    let scrollPos = 0
    const speed = 0.5 // adjust for faster/slower scroll

    const animateMarquee = () => {
      if (marqueeRef.current && !isHovered) {
        scrollPos += speed
        
        // Reset when we've scrolled through half the items (to create infinite loop effect)
        if (scrollPos >= marqueeRef.current.scrollWidth / 2) {
          scrollPos = 0
        }
        
        marqueeRef.current.scrollLeft = scrollPos
        
        // Update current index based on scroll position
        const newIndex = Math.floor((scrollPos / (marqueeRef.current.scrollWidth / 2)) * totalSlides) % totalSlides
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex)
        }
      }
      animationId = requestAnimationFrame(animateMarquee)
    }

    animationId = requestAnimationFrame(animateMarquee)
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isHovered, totalSlides, currentIndex])

  return (
    <section className="relative py-24 dark-background">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="relative w-fit mx-auto  text-center">
                <Image
                  src={navbarDiamond}
                  width={32}
                  height={32}
                  alt=""
                  className="w-8 h-8 absolute top-1/2 -translate-y-1/2 -right-[40px]"
                />
                <Image
                  src={navbarDiamond}
                  width={32}
                  height={32}
                  alt=""
                  className="w-8 h-8 absolute top-1/2 -translate-y-1/2 -left-[40px]"
                />
                <div class="max-w-[150px] absolute top-1/2 -right-[120px] bg-white opacity-20 w-full h-[2px] -translate-y-1/2" style={{
                  background: "linear-gradient(-90deg, #000000 0%, rgba(255, 255, 255, 1) 47.22%)",
                }}></div>
                <div class="max-w-[150px] absolute top-1/2 -left-[120px] bg-white opacity-20 w-full h-[2px] -translate-y-1/2"  style={{
                  background: "linear-gradient(90deg, #000000 0%, rgba(255, 255, 255, 1) 47.22%)",
                }}></div>
                <p className="text-[#01B0EA] text-xl font-montserrat">BENEFITS</p>
              </div>
              <h2 className="sm:text-4xl text-2xl font-semibold text-white opacity-80 font-montserrat text-center mt-6">
                Why Futurebits
              </h2>

        {/* Marquee Carousel Component */}
        <div className="overflow-hidden mx-auto max-w-6xl">
          <div 
            ref={marqueeRef}
            className="flex overflow-x-auto hide-scrollbar transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              scrollBehavior: 'smooth'
            }}
          >
            {/* Double the testimonials to create seamless infinite scroll effect */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Navigation dots */}
          <DotIndicator 
            total={testimonials.length} 
            active={currentIndex} 
            handleDotClick={handleDotClick} 
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#01B0EA] to-[#2E2688] text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-opacity duration-300 flex items-center gap-2"
          >
            Book a Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* CSS for styling */}
      <style jsx global>{`
        .dark-background {
          background-color: #050314;
          background-image: radial-gradient(circle at top right, rgba(46, 38, 136, 0.1), transparent 400px);
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .testimonial-card-border {
          background: linear-gradient(180deg, rgba(6, 6, 24, 0.2) 0%, rgba(1, 176, 234, 0.1) 100%);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          position: relative;
        }
        
        .testimonial-card-border::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #060618 5.74%, #2E2688 21.94%, #01B0EA 38.13%, #FFFFFF 46.23%, #01B0EA 54.33%, #2E2688 70.52%, #060618 86.72%);
        }
        
        .testimonial-card {
          transition: transform 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  )
}