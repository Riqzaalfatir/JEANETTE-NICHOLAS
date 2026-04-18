import React from "react";
import Image from "next/image";

const Thankyou = () => {
  return (
    <>
      {/* ===== MOBILE ===== */}
      <div
        className="relative w-full overflow-hidden lg:hidden"
        style={{ 
          aspectRatio: "390/680",
          boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.25)"
        }}
      >
        {/* BG CREAM */}
        <div className="absolute inset-0 bg-[#F8F0CC] z-0" />

        {/* ORNAMEN BUNGA KIRI */}
        <Image data-aos="fade-right"
          src="/images/thankyou/Ornament-BungaKiri.svg"
          alt=""
          width={400}
          height={400}
          className="absolute bottom-[9%] left-[6%] z-10 w-[77%] h-auto"
        />

        {/* ORNAMEN BUNGA KANAN */}
        <Image data-aos="fade-left"
          src="/images/thankyou/Ornament-BungaKanan.svg"
          alt=""
          width={250}
          height={250}
          className="absolute bottom-[7%] right-0 z-10 w-[64%] h-auto"
        />

        {/* ORNAMEN BUNGA TENGAH */}
        <Image data-aos="fade-in"
          src="/images/thankyou/Ornament-BungaTengah.svg"
          alt=""
          width={200}
          height={200}
          className="absolute bottom-[7%] right-[22%] z-10 w-[51%] h-auto"
        />

        {/* FRAME */}
        <img
          src="/images/thankyou/Bg-Thankyou.png"
          alt=""
          className="absolute pointer-events-none z-20"
          style={{
            top: "51%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "112%",
            height: "107%",
          }}
        />

        {/* CONTENT */}
        <div className="absolute inset-0 z-30 flex flex-col items-center text-center px-8">
          <h2 data-aos="fade-in" className="text-[6.2vw] font-david font-bold text-[#CD4964] mt-[63vw] uppercase">
            Thank you
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="mt-[4vw] text-[3.3vw] text-[#CD4964] font-cormorant">
            It would be a joy and honor for us <br /> 
            to have you join our celebration and share <br /> your blessings.
          </p>
        </div>
      </div>

      {/* ===== DESKTOP ===== */}
      <div
        className="relative hidden lg:block w-full overflow-hidden"
        style={{
          aspectRatio: "1512/1067",
          boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.25)",
        }}
      >
        {/* BG CREAM */}
        <div className="absolute inset-0 bg-[#F8F0CC] z-0" />

        {/* FRAME BG DESKTOP */}
        <img
          src="/images/thankyou/Bg-Dekstop.svg"
          alt=""
          className="absolute inset-0 w-full h-full pointer-events-none z-50 scale-x-105 scale-y-[1.03]"
          style={{ objectFit: "fill" }}
        />

        {/* ORNAMEN BUNGA KIRI */}
        <Image
          data-aos="fade-right"
          src="/images/thankyou/Ornament-BungaKiri.svg"
          alt=""
          width={400}
          height={400}
          className="absolute z-0 h-auto"
          style={{ bottom: "2vw", left: "27vw", width: "42vw" }}
        />

        {/* ORNAMEN BUNGA KANAN */}
        <Image
          data-aos="fade-left"
          src="/images/thankyou/Ornament-BungaKanan.svg"
          alt=""
          width={250}
          height={250}
          className="absolute z-40 h-auto"
          style={{ bottom: "5vw", right: "29vw", width: "25vw" }}
        />

        {/* ORNAMEN BUNGA TENGAH */}
        <Image
          data-aos="fade-in"
          src="/images/thankyou/Ornament-BungaTengah.svg"
          alt=""
          width={200}
          height={200}
          className="absolute z-40 h-auto"
          style={{ bottom: "0.5vw", right: "36vw", width: "26vw" }}
        />

        {/* CONTENT */}
        <div
          className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center"
          style={{ marginTop: "-18vw" }}
        >
          <h2
            data-aos="fade-in"
            className="font-david font-bold text-[#CD4964] uppercase"
            style={{ fontSize: "3.17vw" }}
          >
            Thank you
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[#CD4964] font-cormorant"
            style={{ fontSize: "1.32vw", marginTop: "1.3vw", lineHeight: "1.7vw" }}
          >
            It would be a joy and honor for us <br />
            to have you join our celebration and share <br /> your blessings.
          </p>
        </div>
      </div>
    </>
  );
};

export default Thankyou;