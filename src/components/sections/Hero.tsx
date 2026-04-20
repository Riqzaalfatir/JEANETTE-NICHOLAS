import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="hero">
      {/* ===== MOBILE ===== */}
      <div
        className="relative w-full overflow-hidden lg:hidden"
        style={{ aspectRatio: "390/854" }}
      >
        <Image
          src="/images/hero/Bg-Hero.K.webp"
          alt="Background Hero"
          fill
          className="object-cover object-bottom"
          priority
        />

        <motion.div
          className="absolute top-[7%] left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/images/hero/Ornament-Hero.svg"
            alt="ornament"
            width={85}
            height={110}
          />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-end items-center pb-[28%] text-center z-10">
          <p data-aos="fade-up" className="text-white font-cormorant font-semibold text-[16px]">
            The Sangjit of
          </p>
          <motion.h1 data-aos="fade-up" data-aos-delay="100" className="text-white font-david text-[28px]">
            JEANETTE & NICHOLAS
          </motion.h1>
          <p data-aos="fade-up" data-aos-delay="300" className="text-white font-cormorant font-bold text-[13px]">
            SATURDAY, 16 MAY 2026
          </p>
        </div>
      </div>

      {/* ===== DESKTOP ===== */}
      <div
        className="relative hidden lg:block w-full overflow-hidden"
        style={{ aspectRatio: "1512/945" }}
      >
        <Image
          src="/images/hero/Bg-Dekstop.K.webp"
          alt="Background Hero"
          fill
          className="object-cover object-top"
          priority
        />

        <div
          className="absolute inset-0 flex flex-col justify-end items-center text-center z-10 leading-none"
          style={{ paddingBottom: "7.5vw" }}
        >
          <p
            data-aos="fade-up"
            className="text-white font-cormorant font-semibold [text-shadow:1px_1px_2.9px_#000000]"
            style={{ fontSize: "1.59vw", marginBottom: "0.99vw" }}
          >
            The Sangjit of
          </p>
          <motion.h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white font-david"
            style={{ fontSize: "4.23vw", marginBottom: "1.32vw" }}
          >
            JEANETTE & NICHOLAS
          </motion.h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-white font-cormorant font-bold"
            style={{ fontSize: "1.59vw" }}
          >
            SATURDAY, 16 MAY 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;