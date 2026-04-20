import React from "react";
import Image from "next/image";

const Dresscode = () => {
  return (
    <div id="dresscode">
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
          src="/images/dresscode/FrameMobile.webp"
          alt=""
          className="absolute pointer-events-none  z-50"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "110%",
            height: "107%",
          }}
        />

        {/* ORNAMEN BUNGA KIRI */}
        <Image
          // data-aos="fade-right"
          src="/images/dresscode/BungaKiri.webp"
          alt=""
          width={200}
          height={200}
          className="absolute bottom-[10.5%] -left-11 z-20 w-[65%] h-auto"
        />

        {/* ORNAMEN BUNGA KANAN */}
        <Image
          // data-aos="fade-left"
          src="/images/dresscode/BungaKanan..webp"
          alt=""
          width={250}
          height={250}
          className="absolute bottom-[8%] -right-[26%] z-40 w-[80%] h-auto"
        />

        {/* ORNAMEN BUNGA TENGAH */}
        <Image
          // data-aos="fade-in"
          src="/images/dresscode/BungaTengah.webp"
          alt=""
          width={250}
          height={250}
          className="absolute bottom-[5%] right-[21%] z-30 w-[38%] h-auto"
        />

        {/* ORNAMEN GUCI */}
        <Image
          src="/images/dresscode/Guci.K.png"
          alt=""
          width={140}
          height={140}
          className="absolute bottom-[2%] left-1/2 -translate-x-1/2 z-10 w-[36%] h-auto"
        />

        {/* CONTENT */}
        <div className="absolute inset-0 z-30 flex flex-col items-center text-center px-8 leading-none">
          <h2
            data-aos="fade-in"
            className="text-[6.2vw] font-david font-bold text-[#CD4964] mt-[28vw]"
          >
            DRESSCODE
          </h2>
          <p
            data-aos="fade-in"
            data-aos-delay="100"
            className="mt-[7.5%] text-[3.33vw] text-[#CD4964] font-cormorant leading-4"
          >
            We would sincerely appreciate
            <br />
            your presence in
            <br />
            Peranakan kebaya / Cheongsam / Batik attire
          </p>
          <div className="-mt-[1%]">
            <Image
            data-aos="fade-in"
            data-aos-delay="150"
              src="/images/dresscode/Orang..png"
              alt="dresscode"
              width={210}
              height={210}
              className="object-contain w-[41vw]"
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
          src="/images/dresscode/Ornament-BgDekstop.webp"
          alt=""
          className="absolute inset-0 w-full h-full pointer-events-none z-50 scale-x-100 scale-y-105"
          style={{ objectFit: "fill" }}
        />

        {/* ORNAMEN BUNGA KIRI */}
      {/* ORNAMEN BUNGA KIRI */}
        <Image
          // data-aos="fade-right"
          src="/images/dresscode/BungaKiri.webp"
          alt=""
          width={200}
          height={200}
          className="absolute z-10 h-auto"
          style={{ bottom: "6vw", left: "24.7vw", width: "26vw" }}
        />
        <Image
          // data-aos="fade-left"
          src="/images/dresscode/BungaKanan..webp"
          alt=""
          width={250}
          height={250}
          className="absolute z-40 h-auto"
          style={{ bottom: "4.5vw", right: "20vw", width: "30vw" }}
        />
        

        {/* ORNAMEN BUNGA TENGAH */}
        <Image
          // data-aos="fade-in"
          src="/images/dresscode/BungaTengah.webp"
          alt=""
          width={250}
          height={250}
          className="absolute z-30 h-auto"
          style={{ bottom: "3vw", right: "37.5vw", width: "14vw" }}
        />

        {/* ORNAMEN GUCI */}
        <Image
          src="/images/dresscode/Guci.K.png"
          alt=""
          width={140}
          height={140}
          className="absolute left-1/2 -translate-x-1/2 z-0 h-auto"
          style={{ bottom: "0vw", width: "15vw" }}
        />

        {/* CONTENT */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center"
          style={{ marginTop: "-5vw" }}
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
            style={{ fontSize: "1.39vw", marginTop: "1.3vw", lineHeight: "2vw" }}
          >
            We would sincerely appreciate
            <br />
            your presence in
            <br />
            Peranakan kebaya / Cheongsam / Batik attire
          </p>
          <div style={{ marginTop: "-0.3vw" }}>
            <Image
              data-aos="fade-in"
              data-aos-delay="150"
              src="/images/dresscode/Orang..png"
              alt="dresscode"
              width={210}
              height={210}
              className="object-contain"
              style={{ width: "14.5vw", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dresscode;