import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Profile = () => {
  return (
<div className="relative w-full  mx-auto overflow-hidden flex items-center justify-center aspect-[390/725]">
    
      <img
        src="/images/profile/Bg-Profile.png"
        alt=""
        className="absolute pointer-events-none z-0"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -42%)",
          width: "100%",
          height: "119%",
          objectPosition: "left top",
        }}
      />

      {/* CONTENT */}
      {/* Card putih */}
      <div
        className="relative w-[88%] bg-[#FEFFF9] leading-none overflow-hidden"
        style={{
          aspectRatio: "340/630",
          boxShadow: "2px 3px 3px 2px rgba(0,0,0,0.50)",
        }}
      >
        {/* Frame emas */}
        <Image
          src="/images/profile/Ornament-Emas.svg"
          alt="frame"
          fill
          className="object-fill pointer-events-none z-0"
        />

        <div className="relative z-10 w-full h-full pt-[15%] pb-[20%]  flex flex-col items-center text-center justify-between">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.0 }}
              className="w-[20%]"
            >
              <Image
                src="/images/profile/Logo-Provile.svg"
                alt="ornament"
                width={43}
                height={100}
                className="w-full h-auto"
              />
            </motion.div>

            <motion.h2
              style={{ fontSize: "3.2vw" }}
              className="font-cormorant text-[#7B552B] leading-4 mt-[9%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              We are cordially inviting you to be part of <br />
              our engagement celebration
            </motion.h2>
          </div>

          <div className="flex flex-col items-center -mt-[5%]">
            <motion.p
             initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              style={{ fontSize: "3.2vw" }}
              className="font-cormorant font-bold text-[#7B552B]"
            >
              Together with our families
            </motion.p>
          </div>

          <div className="flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              style={{ fontSize: "8vw" }}
              className="text-[#FF751F] font-signature -mt-[16%]"
            >
              Jeanette Natasha
            </motion.h1>
            <motion.p
             initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              style={{ fontSize: "3.2vw" }}
              className="font-cormorant font-bold text-[#7B552B] mt-[8%]"
            >
              The Daughter of
            </motion.p>
            <motion.p
             initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
              style={{ fontSize: "3.2vw" }}
              className="font-cormorant text-[#7B552B] leading-4 mt-[10%]"
            >
              Mr. Na Eng Siang and <br />
              Mrs. Djuliawati Tan
            </motion.p>
          </div>

          <div className="-mt-[8%]">
            <motion.p
             initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.11 }}
              style={{ fontSize: "3.2vw" }}
              className="font-cormorant font-bold italic text-[#7B552B]"
            >
              and
            </motion.p>
          </div>

          <div className="flex flex-col items-center -mt-[8%]">
            <motion.h1
           initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.13 }}
              style={{ fontSize: "8vw" }}
              className="text-[#FF751F] font-signature"
            >
              Nicholas Chua
            </motion.h1>
            <motion.p
             initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              style={{ fontSize: "3.2vw" }}
              className="font-cormorant font-bold text-[#7B552B] mt-[8%]"
            >
              The Son of
            </motion.p>
            <motion.p
             initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.17 }}
              style={{ fontSize: "3.2vw" }}
              className="font-cormorant text-[#7B552B] leading-4 mt-[7%]"
            >
              Mr. Chua Sui Hian and <br />
              Mrs. Go Lie Lien
            </motion.p>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.19 }}
              style={{ fontSize: "3.2vw" }}
              className="font-cormorant text-[#7B552B] leading-4"
            >
              our joy will be completed with <br />
              your presence and blessings
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
