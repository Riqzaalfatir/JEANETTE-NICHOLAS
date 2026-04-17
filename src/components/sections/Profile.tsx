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
            <div
              data-aos="fade-in"
              className="w-[20%]"
            >
              <Image
                src="/images/profile/Logo-Provile.svg"
                alt="ornament"
                width={43}
                height={100}
                className="w-full h-auto"
              />
            </div>

            <h2
              data-aos="fade-up"
              style={{ fontSize: "3.33vw" }}
              className="font-cormorant text-[#7B552B] leading-4 mt-[9%]"
            >
              We are cordially inviting you to be part of <br />
              our engagement celebration
            </h2>
          </div>

          <div className="flex flex-col items-center -mt-[2%]">
            <p
             data-aos="fade-up" data-aos-delay="100"
               style={{ fontSize: "3.33vw" }}
              className="font-cormorant font-bold text-[#7B552B]"
            >
              Together with our families
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h1
              data-aos="fade-in" data-aos-delay="700"
              style={{ fontSize: "8vw" }}
              className="text-[#FF751F] font-signature -mt-[16%]"
            >
              Jeanette Natasha
            </h1>
            <p
            data-aos="fade-up" data-aos-delay="500"
              style={{ fontSize: "3.2vw" }}
              className="font-cormorant font-bold text-[#7B552B] mt-[8%]"
            >
              The Daughter of
            </p>
            <p
            data-aos="fade-up" data-aos-delay="700"
              style={{ fontSize: "3.2vw" }}
              className="font-cormorant text-[#7B552B] leading-4 mt-[10%]"
            >
              Mr. Na Eng Siang and <br />
              Mrs. Djuliawati Tan
            </p>
          </div>

          <div className="-mt-[6%]">
            <p
            data-aos="fade-up" data-aos-delay="900"
              style={{ fontSize: "3.2vw" }}
              className="font-cormorant font-bold italic text-[#7B552B]"
            >
              and
            </p>
          </div>

          <div className="flex flex-col items-center -mt-[8%]">
            <h1
          data-aos="fade-in" data-aos-delay="1500"
              style={{ fontSize: "8vw" }}
              className="text-[#FF751F] font-signature"
            >
              Nicholas Chua
            </h1>
            <p
               data-aos="fade-up" data-aos-delay="1300"
              style={{ fontSize: "3.2vw" }}
              className="font-cormorant font-bold text-[#7B552B] mt-[8%]"
            >
              The Son of
            </p>
            <p
              data-aos="fade-up" data-aos-delay="1350"
              style={{ fontSize: "3.2vw" }}
              className="font-cormorant text-[#7B552B] leading-4 mt-[7%]"
            >
              Mr. Chua Sui Hian and <br />
              Mrs. Go Lie Lien
            </p>
          </div>

          <div>
            <p
             data-aos="fade-in" 
              style={{ fontSize: "3.2vw" }}
              className="font-cormorant text-[#7B552B] leading-4"
            >
              our joy will be completed with <br />
              your presence and blessings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
