import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "390/854" }}
      >
        <Image
          src="/images/hero/Bg-Hero.jpg"
          alt="Background Hero"
          fill
          className="object-cover object-bottom"
          priority
        />

        {/* <div className='absolute inset-0 bg-black/30' /> */}

          {/* Logo / Ornament — fade in */}
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


        {/* CONTENT */}

        <div className="absolute inset-0 flex flex-col justify-end items-center pb-[28%] text-center z-10">
            <motion.p
            className="text-white font-cormorant font-semibold text-[16px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            The Sangjit of
          </motion.p>

          <motion.h1
            className="text-white font-david text-[28px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.9 }}
          >
            JEANETTE & NICHOLAS
          </motion.h1>

          <p className="text-white font-cormorant font-bold text-[13px]">
            SATURDAY, 16 MAY 2026
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
