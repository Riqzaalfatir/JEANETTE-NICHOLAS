import React from "react";
import Image from "next/image";

const Dresscode = () => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ 
        aspectRatio: "390/573",
        boxShadow: "4px 1px 17px 0px rgba(0,0,0,0.85)"
      }}
    >
      {/* BG CREAM */}
      <div className="absolute inset-0 bg-[#F8F0CC] z-0" />

      {/* FRAME BG */}
      <img
        src="/images/dresscode/Ornament-Bg.svg"
        alt=""
        className="absolute pointer-events-none z-50"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "110%",
          height: "112%",
        }}
      />

      {/* ORNAMEN BUNGA KIRI */}
      <Image
        src="/images/dresscode/Ornament-BungaKiri.svg"
        alt=""
        width={200}
        height={200}
        className="absolute bottom-[11%] left-0 z-20 w-[54%] h-auto"
      />

      {/* ORNAMEN BUNGA KANAN */}
      <Image
        src="/images/dresscode/Ornament-BungaKanan.svg"
        alt=""
        width={250}
        height={250}
        className="absolute bottom-[7%] -right-2 z-30 w-[56%] h-auto"
      />

      {/* ORNAMEN BUNGA TENGAH */}
      <Image
        src="/images/dresscode/Ornament-BungaTengah.svg"
        alt=""
        width={250}
        height={250}
        className="absolute bottom-[6%] right-[16%] z-40 w-[41%] h-auto"
      />

      {/* ORNAMEN GUCI */}
      <Image
        src="/images/dresscode/Ornament-Guci.svg"
        alt=""
        width={140}
        height={140}
        className="absolute bottom-[1%] left-1/2 -translate-x-1/2 z-10 w-[36%] h-auto"
      />

      {/* CONTENT */}
      <div className="absolute inset-0 z-30 flex flex-col items-center text-center px-8 leading-none">
        <h2 className="text-[6.2vw] font-david font-bold text-[#CD4964] mt-[32vw]">
          DRESSCODE
        </h2>
        <p className="mt-[8%] text-[3.33vw] text-[#CD4964] font-cormorant">
          we would sincerely appreciate<br />
          your presence in<br />
          peranakan kebaya / cheongsam / batik attire
        </p>
        <div className="mt-0">
          <Image
            src="/images/dresscode/Ornament-Orang.svg"
            alt="dresscode"
            width={210}
            height={210}
            className="object-contain w-[40vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default Dresscode;