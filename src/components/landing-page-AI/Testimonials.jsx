"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

// Import assets
import avatar from "@/assets/landing-page-AI/testimonial.svg"
import quote from "@/assets/landing-page-AI/quote.svg"

// Testimonial data
const testimonials = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt ut mauris eget imperdiet turpis orci in cras varius. Sagittis enim vestibulum in nulla eget sed bibendum.",
    rating: 5,
    author: "John Alley",
    position: "Partical Space CEO",
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

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-xl">
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  )
}

// Single testimonial card component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card flex-shrink-0 px-12 w-full md:w-[350px] lg:w-[820px] lg:h-[520px]">
      <div
        className="rounded-lg overflow-hidden h-full p-16 relative testimonial-card-border"
      >
        {/* Quote image on right */}
        <div className="absolute bottom-6 right-6 opacity-30">
          <Image src={quote} alt="Quote" width={40} height={40} />
        </div>

        <p className="text-white/90 text-base md:text-[28px] leading-[48px] font-poppins font-normal mb-6 z-10 relative">
          {testimonial.content}
        </p>

        <div className="mt-auto z-10 relative flex flex-col items-start">
          <StarRating rating={testimonial.rating} />

          <div className="flex items-center mt-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-white font-medium text-base">{testimonial.author}</h4>
              <p className="text-white/50 text-sm">{testimonial.position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Dot indicator component
const DotIndicator = ({ total, active, handleDotClick }) => {
  return (
    <div className="flex justify-center gap-3 mt-8">
      {[...Array(total)].map((_, i) => (
        <button
          key={i}
          onClick={() => handleDotClick(i)}
          className="focus:outline-none"
          aria-label={`Go to slide ${i + 1}`}
        >
          <div 
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              active === i ? "bg-white scale-125" : "bg-white/40"
            }`}
          ></div>
        </button>
      ))}
    </div>
  )
}

// Main testimonials carousel component
export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const scrollRef = useRef(null)
  const timerRef = useRef(null)
  const totalSlides = testimonials.length

  // Handle dot click
  const handleDotClick = (index) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (scrollRef.current) {
      const scrollPosition = currentIndex * (scrollRef.current.scrollWidth / totalSlides)
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }

    // Reset animation flag after scroll completes
    const timeout = setTimeout(() => {
      setIsAnimating(false)
    }, 500)

    return () => clearTimeout(timeout)
  }, [currentIndex, totalSlides])

  // Auto-advance timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!isAnimating) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
      }
    }, 5000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isAnimating, totalSlides])

  // Handle scroll event to update currentIndex based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current && !isAnimating) {
        const scrollLeft = scrollRef.current.scrollLeft
        const itemWidth = scrollRef.current.scrollWidth / totalSlides
        const newIndex = Math.round(scrollLeft / itemWidth)
        
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex)
        }
      }
    }

    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll)
      }
    }
  }, [currentIndex, totalSlides, isAnimating])

  return (
    <section className="relative py-24">
    <div className="absolute top-1/2 right-0 w-[300px] md:w-[600px] -translate-y-[0%] translate-x-[30%] h-[300px] md:h-[600px] bg-[#2E2688] opacity-20 rounded-full z-0 backdrop-blur-[580px]" style={{
          filter: "blur(120px)",
          opacity:0.4
        }}></div>
        <div className="absolute top-1/2 left-0 w-[300px] md:w-[600px] -translate-y-[70%] translate-x-[0%] h-[300px] md:h-[600px] bg-[#2E2688] opacity-20 rounded-full z-0 backdrop-blur-[580px]" style={{
          filter: "blur(120px)",
          opacity:0.4
        }}></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="uppercase text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#01B0EA] to-[#2E2688]">
              TESTIMONIALS
            </span>
            <span className="text-yellow-300">✨</span>
          </div>

          <h2 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
            <span className="flex items-center">
            What People say about us
            </span>
          </h2>
        </div>

        {/* Custom Carousel Component */}
        <div className="overflow-hidden mx-auto max-w-6xl">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto hide-scrollbar transition-all duration-300"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth'
            }}
          >
            {/* Extra testimonials at beginning for continuous loop effect */}
            <TestimonialCard testimonial={testimonials[testimonials.length - 1]} />
            
            {/* Main testimonials */}
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
            
            {/* Extra testimonial at end for continuous loop effect */}
            <TestimonialCard testimonial={testimonials[0]} />
          </div>
          
          {/* Navigation dots */}
          <DotIndicator 
            total={testimonials.length} 
            active={currentIndex % testimonials.length} 
            handleDotClick={handleDotClick} 
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#01B0EA] to-[#2E2688] text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-opacity duration-300 flex items-center gap-2"
          >
            Book a Call Today!
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
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .testimonial-card-border {
          background: linear-gradient(180deg, rgba(6, 6, 24, 0.1) 0%, rgba(1, 176, 234, 0.1) 100%);
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
        
        @media (min-width: 768px) {
          .testimonial-card {
            min-width: 350px;
          }
        }
        
        @media (min-width: 1024px) {
          .testimonial-card {
            min-width: 450px;
          }
        }
      `}</style>
    </section>
  )
}