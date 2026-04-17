import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Waktu = () => {
  const swayVariants = {
    animate: {
      rotate: [-3, 3, -3], // goyang ±3 derajat
      y: [0, -6, 0], // naik-turun sedikit
      transition: {
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="relative w-full h-[641px] flex justify-center items-center overflow-hidden">
      {/* BACKGROUND */}
      <Image
        src="/images/waktu/Bg-Waktu.png"
        alt="bg"
        fill
        priority
        className="object-cover object-bottom"
      />

      {/* LAMPU ATAS (KELUAR DARI PANEL) */}
      <div className="absolute top-0 left-0 w-full h-[120px] z-10">
        {/* KIRI BESAR - sudah ada sebelumnya */}
        <motion.div
          className="absolute -left-[0%] -top-6"
          style={{ transformOrigin: "top center" }}
          animate={{ rotate: [-1.5, 1.5, -1.5] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 0,
          }}
        >
          <Image
            src="/images/waktu/Ornament-Biru.svg"
            alt=""
            width={155}
            height={110}
          />
        </motion.div>

        {/* KIRI KECIL */}
        <motion.div
          className="absolute left-[22%] -top-[60px]"
          style={{ transformOrigin: "top center" }}
          animate={{ rotate: [-1.5, 1.5, -1.5] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 0.8,
          }}
        >
          <Image
            src="/images/waktu/Ornament-Merah.svg"
            alt=""
            width={85}
            height={110}
          />
        </motion.div>

        {/* KANAN KECIL */}
        <motion.div
          className="absolute right-[20%] -top-[60px]"
          style={{ transformOrigin: "top center" }}
          animate={{ rotate: [-1.5, 1.5, -1.5] }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 1.5,
          }}
        >
          <Image
            src="/images/waktu/Ornament-Merah.svg"
            alt=""
            width={85}
            height={110}
          />
        </motion.div>

        {/* KANAN BESAR */}
        <motion.div
          className="absolute -right-[14%] -top-6"
          style={{ transformOrigin: "top center" }}
          animate={{ rotate: [-1.5, 1.5, -1.5] }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 0.4,
          }}
        >
          <Image
            src="/images/waktu/Ornament-Biru.svg"
            alt=""
            width={155}
            height={110}
          />
        </motion.div>
      </div>

      {/* WRAPPER */}
      <div className="relative w-full mt-[135px] max-w-[375px] h-[580px] flex justify-center items-center">
        {/* PANEL */}
        <Image
          src="/images/waktu/Ornament-Bg.svg"
          alt="panel"
          fill
          className="object-contain"
        />

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center pt-[98px] text-center px-6 leading-none">
          {/* DATE */}
          <div data-aos="fade-in" className="flex items-baseline  text-center gap-6 text-[#CD4964] ">
            <span className="text-[24px] font-cormorant font-semibold">
              MAY
            </span>

            {/* GARIS */}
            <div className="w-[2px] h-[22px] bg-[#CD4964]" />

            <span className="text-[64px] font-semibold font-cormorant leading-none">
              16
            </span>

            {/* GARIS */}
            <div  className="w-[2px] h-[22px] bg-[#CD4964]" />

            <span className="text-[24px] font-cormorant font-semibold">
              2026
            </span>
          </div>

          {/* TIME */}
          <div className="flex  gap-3 mt-[4%] text-[#CD4964]">
            <div data-aos="fade-right" className="w-[22px] mt-[15px] h-[2px] bg-[#CD4964]" />

            <p data-aos="fade-up" className="text-[24px] font-semibold font-cormorant ">
              11.00 WIB
            </p>

            <div data-aos="fade-left" className="w-[22px] h-[2px] mt-[15px]  bg-[#CD4964]" />
          </div>

          {/* TITLE */}
          <p data-aos="fade-up" data-aos-delay="100" className="mt-[43px] text-[16px] font-bold  text-[#CD4964] font-david">
            SANGJIT CEREMONY
          </p>

          {/* LOCATION */}
          <p data-aos="fade-up" data-aos-delay="300" className="mt-[20px] text-[13px] font-cormorant text-[#CD4964] font-bold leading-4">
            Royal Dynasty Restaurant <br />
            2nd Floor
          </p>

          <p data-aos="fade-up" data-aos-delay="500" className="mt-[25px]  text-[13px] font-cormorant text-[#CD4964]">
            Jl. Jend. Sudirman No.232A, Bandung
          </p>

          {/* BUTTON */}
          <button data-aos="fade-in" data-aos-delay="660"
            onClick={() => {
              const url =
                "https://www.google.com/maps/search/?api=1&query=Jl.%20Jendral%20Sudirman%20No.%20232A%20Bandung";
              window.open(url, "_blank");
            }}
            className="mt-[36px] bg-[#FF751F] text-white w-[160px] h-[30px] rounded-full text-[13px] font-bold font-cormorant"
          >
            GOOGLE MAPS
          </button>
        </div>

        {/* ORNAMEN BAWAH */}
      </div>

      <Image  data-aos="fade-in" 
        src="/images/waktu/Ornament-Guci.svg"
        alt="guci"
        width={120}
        height={120}
        className="absolute -bottom-0 right-0"
      />

      <Image  data-aos="fade-in" 
        src="/images/waktu/Ornament-BungaKiri.svg"
        alt="bunga kiri"
        width={195}
        height={140}
        className="absolute -bottom-2 left-0"
      />

      <Image data-aos="fade-in" 
        src="/images/waktu/Ornament-BungaKnan.svg"
        alt="bunga kanan"
        width={200}
        height={200}
        className="absolute -bottom-0 right-0"
      />

      <Image data-aos="fade-in" 
        src="/images/waktu/Ornament-BungaMawaKanan.svg"
        alt="bunga kanan"
        width={100}
        height={100}
        className="absolute -bottom-2 right-0"
      />
    </div>
  );
};

export default Waktu;
