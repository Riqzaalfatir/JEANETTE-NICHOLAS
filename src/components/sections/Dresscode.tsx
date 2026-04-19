import React from "react";
import Image from "next/image";

const Dresscode = () => {
  return (
    <>
      {/* ===== MOBILE ===== */}
      <div
        className="relative w-full overflow-hidden lg:hidden"
        style={{
          aspectRatio: "390/573",
          boxShadow: "4px 1px 17px 0px rgba(0,0,0,0.85)",
        }}
      >
        {/* BG CREAM */}
        <div className="absolute inset-0 bg-[#F8F0CC] z-0" />

        {/* FRAME BG */}
        <img
          src="/images/dresscode/Ornament-Bg.svg"
          alt=""
          className="absolute pointer-events-none  z-50"
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
          data-aos="fade-right"
          src="/images/dresscode/Ornament-BungaKiri.svg"
          alt=""
          width={200}
          height={200}
          className="absolute bottom-[11%] left-0 z-20 w-[53%] h-auto"
        />

        {/* ORNAMEN BUNGA KANAN */}
        <Image
          data-aos="fade-left"
          src="/images/dresscode/Ornament-BungaKanan.svg"
          alt=""
          width={250}
          height={250}
          className="absolute bottom-[7.5%] right-0 z-40 w-[53%] h-auto"
        />

        {/* ORNAMEN BUNGA TENGAH */}
        <Image
          data-aos="fade-in"
          src="/images/dresscode/Ornament-BungaTengah.svg"
          alt=""
          width={250}
          height={250}
          className="absolute bottom-[6%] right-[16%] z-30 w-[41%] h-auto"
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
          <h2
            data-aos="fade-in"
            className="text-[6.2vw] font-david font-bold text-[#CD4964] mt-[32vw]"
          >
            DRESSCODE
          </h2>
          <p
            data-aos="fade-in"
            data-aos-delay="100"
            className="mt-[8%] text-[3.33vw] text-[#CD4964] font-cormorant leading-4"
          >
            we would sincerely appreciate
            <br />
            your presence in
            <br />
            peranakan kebaya / cheongsam / batik attire
          </p>
          <div className="-mt-[2%]">
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

      {/* ===== DESKTOP ===== */}
    {/* ===== DESKTOP ===== */}
      <div
        className="relative hidden lg:block w-full overflow-hidden"
        style={{
          aspectRatio: "1440/865",
          boxShadow: "4px 1px 17px 0px rgba(0,0,0,0.85)",
        }}
      >
        {/* BG CREAM */}
        <div className="absolute inset-0 bg-[#F8F0CC] z-0" />

        {/* FRAME BG DESKTOP */}
        <img
          src="/images/dresscode/Ornament-Dekstop.svg"
          alt=""
          className="absolute inset-0 w-full h-full pointer-events-none z-50 scale-x-110 scale-y-105"
          style={{ objectFit: "fill" }}
        />

        {/* ORNAMEN BUNGA KIRI */}
      {/* ORNAMEN BUNGA KIRI */}
        <Image
          // data-aos="fade-right"
          src="/images/dresscode/Ornament-BungaKiri.svg"
          alt=""
          width={200}
          height={200}
          className="absolute z-10 h-auto"
          style={{ bottom: "4.9vw", left: "29vw", width: "22vw" }}
        />

        {/* ORNAMEN BUNGA KANAN */}
        <Image
          // data-aos="fade-left"
          src="/images/dresscode/Ornament-BungaKanan.svg"
          alt=""
          width={250}
          height={250}
          className="absolute z-40 h-auto"
          style={{ bottom: "3.5vw", right: "29.5vw", width: "22vw" }}
        />

        {/* ORNAMEN BUNGA TENGAH */}
        <Image
          // data-aos="fade-in"
          src="/images/dresscode/Ornament-BungaTengah.svg"
          alt=""
          width={250}
          height={250}
          className="absolute z-30 h-auto"
          style={{ bottom: "3vw", right: "38.5vw", width: "14vw" }}
        />

        {/* ORNAMEN GUCI */}
        <Image
          src="/images/dresscode/Ornament-Guci.svg"
          alt=""
          width={140}
          height={140}
          className="absolute left-1/2 -translate-x-1/2 z-0 h-auto"
          style={{ bottom: "0.1vw", width: "14vw" }}
        />

        {/* CONTENT */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center"
          style={{ marginTop: "-4vw" }}
        >
          <h2
            data-aos="fade-in"
            className="font-david font-bold text-[#CD4964]"
            style={{ fontSize: "3.33vw" }}
          >
            DRESSCODE
          </h2>
          <p
            data-aos="fade-in"
            data-aos-delay="100"
            className="text-[#CD4964] font-cormorant"
            style={{ fontSize: "1.39vw", marginTop: "1vw", lineHeight: "2vw" }}
          >
            We would sincerely appreciate
            <br />
            your presence in
            <br />
            Peranakan kebaya / Cheongsam / Batik attire
          </p>
          <div style={{ marginTop: "-0.2vw" }}>
            <Image
              src="/images/dresscode/Ornament-Orang.svg"
              alt="dresscode"
              width={210}
              height={210}
              className="object-contain"
              style={{ width: "15vw", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dresscode;