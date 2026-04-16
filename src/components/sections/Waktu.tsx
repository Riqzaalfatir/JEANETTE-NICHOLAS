import React from "react";
import Image from "next/image";

const Waktu = () => {
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
        {/* KIRI */}
        <Image
          src="/images/waktu/Ornament-Biru.svg"
          alt=""
          width={155}
          height={110}
          className="absolute -left-[0%] -top-6"
        />

        <Image
          src="/images/waktu/Ornament-Merah.svg"
          alt=""
          width={85}
          height={110}
          className="absolute left-[22%] -top-[60px]"
        />

        {/* KANAN */}
        <Image
          src="/images/waktu/Ornament-Merah.svg"
          alt=""
          width={85}
          height={110}
          className="absolute right-[20%] -top-[60px]"
        />

        <Image
          src="/images/waktu/Ornament-Biru.svg"
          alt=""
          width={155}
          height={110}
          className="absolute -right-[14%] -top-6"
        />
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
        <div className="absolute inset-0 flex flex-col items-center pt-[90px] text-center px-6 leading-none">
          {/* DATE */}
          <div className="flex items-baseline  text-center gap-6 text-[#CD4964] ">
            <span className="text-[24px] font-cormorant font-semibold">
              MAY
            </span>

            {/* GARIS */}
            <div className="w-[2px] h-[22px] bg-[#CD4964]" />

            <span className="text-[64px] font-semibold font-cormorant leading-none">
              16
            </span>

            {/* GARIS */}
            <div className="w-[2px] h-[22px] bg-[#CD4964]" />

            <span className="text-[24px] font-cormorant font-semibold">
              2026
            </span>
          </div>

          {/* TIME */}
          <div className="flex  gap-3 mt-[20px] text-[#CD4964]">
            <div className="w-[22px] mt-[15px] h-[2px] bg-[#CD4964]" />

            <p className="text-[24px] font-semibold font-cormorant ">11.00 WIB</p>

            <div className="w-[22px] h-[2px] mt-[15px]  bg-[#CD4964]" />
          </div>

          {/* TITLE */}
          <p className="mt-[43px] text-[16px] font-bold  text-[#CD4964] font-david">
            SANGJIT CEREMONY
          </p>

          {/* LOCATION */}
          <p className="mt-[20px] text-[13px] font-cormorant text-[#CD4964] font-bold leading-4">
            Royal Dynasty Restaurant <br />
            2nd Floor
          </p>

          <p className="mt-[25px]  text-[13px] font-cormorant text-[#CD4964]">
            Jl. Jend. Sudirman No.232A, Bandung
          </p>

          {/* BUTTON */}
          <button className="mt-[36px] bg-[#FF751F] text-white w-[160px] h-[30px] rounded-full text-[13px] font-bold font-cormorant">
            GOOGLE MAPS
          </button>
        </div>

        {/* ORNAMEN BAWAH */}
      </div>

      <Image
        src="/images/waktu/Ornament-Guci.svg"
        alt="guci"
        width={120}
        height={120}
        className="absolute -bottom-0 right-0"
      />

      <Image
        src="/images/waktu/Ornament-BungaKiri.svg"
        alt="bunga kiri"
        width={195}
        height={140}
        className="absolute -bottom-2 left-0"
      />

      <Image
        src="/images/waktu/Ornament-BungaKnan.svg"
        alt="bunga kanan"
        width={190}
        height={190}
        className="absolute -bottom-0 right-0"
      />

      <Image
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
