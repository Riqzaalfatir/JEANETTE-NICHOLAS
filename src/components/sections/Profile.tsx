import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <>
      {/* ===== MOBILE ===== */}
      <div className="relative w-full mx-auto overflow-hidden flex items-center justify-center aspect-[390/725] lg:hidden">
        <img
          src="/images/profile/Bg-Profile.K.png"
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
        <div
          className="relative w-[88%] aspect-[340/630] bg-[#FEFFF9] leading-none overflow-hidden"
          style={{ boxShadow: "0px 4px 5px 5px rgba(0,0,0,0.40)" }}
        >
          <Image src="/images/profile/Ornament-Emas.svg" alt="frame" fill className="object-fill pointer-events-none z-0" />
          <div className="relative z-10 w-full h-full pt-[15%] pb-[20%] flex flex-col items-center text-center justify-between">
            <div className="flex flex-col items-center">
              <div data-aos="fade-in" className="w-[25%]">
                <Image src="/images/profile/Logo-Provile.svg" alt="ornament" width={48} height={110} className="w-full h-auto" />
              </div>
              <h2 data-aos="fade-up" className="font-cormorant text-[3.33vw] text-[#7B552B] leading-4 mt-[9%]">
                We are cordially inviting you <br />to be part of our sangjit ceremony
              </h2>
            </div>
            <div className="flex flex-col items-center -mt-[2%]">
              <p data-aos="fade-up" data-aos-delay="100" className="font-cormorant text-[3.33vw] font-bold text-[#7B552B]">
                Together with our families
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h1 data-aos="fade-in" data-aos-delay="700" className="text-[#FF751F] text-[8vw] font-signature -mt-[16%]">Jeanette Natasha</h1>
              <p data-aos="fade-up" data-aos-delay="500" className="font-cormorant text-[3.2vw] font-bold text-[#7B552B] mt-[8%]">The Daughter of</p>
              <p data-aos="fade-up" data-aos-delay="700" className="font-cormorant text-[3.2vw] text-[#7B552B] leading-4 mt-[10%]">
                Mr. Na Eng Siang and <br /> Mrs. Djuliawati Tan
              </p>
            </div>
            <div className="-mt-[6%]">
              <p data-aos="fade-up" data-aos-delay="900" className="font-cormorant text-[3.2vw] font-bold italic text-[#7B552B]">and</p>
            </div>
            <div className="flex flex-col items-center -mt-[8%]">
              <h1 data-aos="fade-in" data-aos-delay="1500" className="text-[#FF751F] text-[8vw] font-signature">Nicholas Chua</h1>
              <p data-aos="fade-up" data-aos-delay="1300" className="font-cormorant text-[3.2vw] font-bold text-[#7B552B] mt-[8%]">The Son of</p>
              <p data-aos="fade-up" data-aos-delay="1350" className="font-cormorant text-[3.2vw] text-[#7B552B] leading-4 mt-[7%]">
                Mr. Chua Sui Hian and <br /> Mrs. Go Lie Lien
              </p>
            </div>
            <div>
              <p data-aos="fade-up" data-aos-delay="1350" className="font-cormorant text-[3.2vw] text-[#7B552B] leading-4">
                our joy will be completed <br /> with your presence and blessings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP ===== */}
      <div className="relative hidden lg:block w-full overflow-hidden" style={{ aspectRatio: "1512/1052" }}>
        {/* BG */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/profile/Bg-Dekstop.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "54.22vw",
          }}
        />

        {/* Card putih */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FEFFF9] leading-none overflow-hidden"
          style={{ width: "37.96vw", height: "59.39vw", boxShadow: "0px 4px 5px 5px rgba(0,0,0,0.40)" }}
        >
          <Image src="/images/profile/Ornament-Emas.svg" alt="frame" fill className="object-fill pointer-events-none z-0 scale-x-[1.18]" />

          {/* Wrapper utama pakai motion — trigger saat card masuk viewport */}
          <motion.div
            className="relative z-10 w-full h-full flex flex-col items-center text-center justify-between"
            style={{ paddingTop: "5.09vw", paddingBottom: "5.09vw" }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.25 } },
            }}
          >
            {/* Logo + h2 */}
            <motion.div
              className="flex flex-col items-center"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            >
              <div style={{ width: "3.5vw" }}>
                <Image src="/images/profile/Logo-Provile.svg" alt="ornament" width={43} height={100} className="w-full h-auto" />
              </div>
              <h2 className="font-cormorant text-[#7B552B]" style={{ fontSize: "1.32vw", lineHeight: "1.85vw", marginTop: "2vw" }}>
                We are cordially inviting you <br />to be part of our sangjit ceremony
              </h2>
            </motion.div>

            {/* Together with our families */}
            <motion.div
              className="flex flex-col items-center"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            >
              <p className="font-cormorant font-bold text-[#7B552B]" style={{ fontSize: "1.32vw" }}>
                Together with our families
              </p>
            </motion.div>

            {/* Jeanette */}
            <motion.div
              className="flex flex-col items-center"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            >
              <h1 className="text-[#FF751F] font-signature" style={{ fontSize: "2.78vw" }}>Jeanette Natasha</h1>
              <p className="font-cormorant font-bold text-[#7B552B]" style={{ fontSize: "1.32vw", marginTop: "1.12vw" }}>The Daughter of</p>
              <p className="font-cormorant text-[#7B552B]" style={{ fontSize: "1.4vw", lineHeight: "1.7vw", marginTop: "0.99vw" }}>
                Mr. Na Eng Siang and <br /> Mrs. Djuliawati Tan
              </p>
            </motion.div>

            {/* and */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            >
              <p className="font-cormorant font-bold italic text-[#7B552B]" style={{ fontSize: "1.32vw" }}>and</p>
            </motion.div>

            {/* Nicholas */}
            <motion.div
              className="flex flex-col items-center"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            >
              <h1 className="text-[#FF751F] font-signature" style={{ fontSize: "2.78vw" }}>Nicholas Chua</h1>
              <p className="font-cormorant font-bold text-[#7B552B]" style={{ fontSize: "1.32vw", marginTop: "1.72vw" }}>The Son of</p>
              <p className="font-cormorant text-[#7B552B]" style={{ fontSize: "1.4vw", lineHeight: "1.7vw", marginTop: "0.99vw" }}>
                Mr. Chua Sui Hian and <br /> Mrs. Go Lie Lien
              </p>
            </motion.div>

            {/* Closing */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            >
              <p className="font-cormorant text-[#7B552B]" style={{ fontSize: "1.32vw", lineHeight: "1.85vw", marginBottom: "1.3vw" }}>
                our joy will be completed <br /> with your presence and blessings
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Profile;