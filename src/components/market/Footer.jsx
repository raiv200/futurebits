import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import { FiPhone } from "react-icons/fi";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail, MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full mx-auto text-white py-12 sm:py-20">
      <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row justify-between items-center sm:px-8 lg:px-12 xl:px-0">
        {/* Logo and Copyright Section - Left Side */}
        <div className="mb-6 md:mb-0">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <Image
                src={logo}
                alt="FutureBits Logo"
                className="w-[268px] h-[60px] sm:w-[258px] sm:h-[55px]"
              />
            </Link>
            <p className="hidden sm:flex sm:max-w-[350px]  lg:max-w-full mt-7 text-[14px] lg:text-[16px] font-normal font-poppins text-white/60 sm:px-6 lg:px-0 ">
              Copyright©2025 All rights reserved | Made with ❤️ & 💪 by
              Futurebits.
            </p>
          </div>
        </div>

        {/* Social Media and Contact - Right Side */}
        <div className="flex flex-col items-center sm:items-end lg:items-end mt-6 sm:mt-[25px] sm:pr-[30px] lg:pr-0  lg:mt-8">
          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-4">
            <Link
              href="tel:+971585165671"
              className="hover:text-blue-400 transition-colors"
            >
              <FiPhone className="w-[26px] h-[26px] sm:w-[20px] sm:h-[20px] lg:w-[26px] lg:h-[26px]" />
            </Link>
            <Link
              href="https://twitter.com"
              className="hover:text-blue-400 transition-colors"
            >
              <FaXTwitter className="w-[26px] h-[26px] sm:w-[20px] sm:h-[20px] lg:w-[26px] lg:h-[26px]" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="w-[26px] h-[26px] sm:w-[20px] sm:h-[20px] lg:w-[26px] lg:h-[26px]" />
            </Link>
            <Link
              href="mailto:admin@futurebits.tech"
              className="hover:text-blue-400 transition-colors"
            >
              <MdOutlineEmail className="mt-[-4px] w-[34px] h-[34px] sm:h-[24px] sm:w-[24px] lg:w-[34px] lg:h-[34px]" />
            </Link>
          </div>

          {/* Contact Details Below Icons */}
          <div className="text-[14px] lg:text-[16px] font-normal font-poppins text-white/60 ">
            <p>+971585165671 | admin@futurebits.tech</p>
          </div>
        </div>

        <p className="flex items-center text-center px-6 sm:hidden mt-10 text-[14px] lg:text-[16px] font-normal font-poppins text-white/60 ">
          Copyright©2025 All rights reserved | Made with ❤️ & 💪 by Futurebits.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
