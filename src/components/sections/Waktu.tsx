import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Waktu = () => {
  return (
    <>
      {/* ===== MOBILE ===== */}
      <div className="relative w-full h-[641px] flex justify-center items-center overflow-hidden lg:hidden">
        {/* BACKGROUND */}
        <Image
          src="/images/waktu/Bg-Waktu.png"
          alt="bg"
          fill
          priority
          className="object-cover object-bottom"
        />

        {/* LAMPU ATAS */}
        <div className="absolute top-0 left-0 w-full h-[120px] z-10">
          <motion.div
            className="absolute -left-[0%] -top-6"
            style={{ transformOrigin: "top center" }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          >
            <Image src="/images/waktu/Ornament-Biru.svg" alt="" width={155} height={110} />
          </motion.div>

          <motion.div
            className="absolute left-[22%] -top-[60px]"
            style={{ transformOrigin: "top center" }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <Image src="/images/waktu/Ornament-Merah.svg" alt="" width={85} height={110} />
          </motion.div>

          <motion.div
            className="absolute right-[20%] -top-[60px]"
            style={{ transformOrigin: "top center" }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <Image src="/images/waktu/Ornament-Merah.svg" alt="" width={85} height={110} />
          </motion.div>

          <motion.div
            className="absolute -right-[14%] -top-6"
            style={{ transformOrigin: "top center" }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <Image src="/images/waktu/Ornament-Biru.svg" alt="" width={155} height={110} />
          </motion.div>
        </div>

        {/* WRAPPER */}
        <div className="relative w-full mt-[135px] max-w-[375px] h-[580px] flex justify-center items-center">
          <Image src="/images/waktu/Ornament-Bg.svg" alt="panel" fill className="object-contain" />
          <div className="absolute inset-0 flex flex-col items-center pt-[98px] text-center px-6 leading-none">
            <div data-aos="fade-in" className="flex items-baseline text-center gap-6 text-[#CD4964]">
              <span className="text-[24px] font-cormorant font-semibold">MAY</span>
              <div className="w-[2px] h-[22px] bg-[#CD4964]" />
              <span className="text-[64px] font-semibold font-cormorant leading-none">16</span>
              <div className="w-[2px] h-[22px] bg-[#CD4964]" />
              <span className="text-[24px] font-cormorant font-semibold">2026</span>
            </div>
            <div className="flex gap-3 mt-[4%] text-[#CD4964]">
              <div data-aos="fade-right" className="w-[22px] mt-[15px] h-[2px] bg-[#CD4964]" />
              <p data-aos="fade-up" className="text-[24px] font-semibold font-cormorant">11.00 WIB</p>
              <div data-aos="fade-left" className="w-[22px] h-[2px] mt-[15px] bg-[#CD4964]" />
            </div>
            <p data-aos="fade-up" data-aos-delay="100" className="mt-[43px] text-[16px] font-bold text-[#CD4964] font-david">SANGJIT CEREMONY</p>
            <p data-aos="fade-up" data-aos-delay="300" className="mt-[20px] text-[13px] font-cormorant text-[#CD4964] font-bold leading-4">
              Royal Dynasty Restaurant <br /> 2nd Floor
            </p>
            <p data-aos="fade-up" data-aos-delay="500" className="mt-[25px] text-[13px] font-cormorant text-[#CD4964]">
              Jl. Jend. Sudirman No.232A, Bandung
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="660"
              onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Jl.%20Jendral%20Sudirman%20No.%20232A%20Bandung", "_blank")}
              className="mt-[36px] bg-[#FF751F] text-white w-[160px] h-[30px] rounded-full text-[13px] font-bold font-cormorant"
            >
              GOOGLE MAPS
            </button>
          </div>
        </div>

        <Image src="/images/waktu/Ornament-Guci.svg" alt="guci" width={120} height={120} className="absolute -bottom-0 right-0" />
        <Image src="/images/waktu/Ornament-BungaKiri.svg" alt="bunga kiri" width={195} height={140} className="absolute -bottom-2 left-0" />
        <Image src="/images/waktu/Ornament-BungaKnan.svg" alt="bunga kanan" width={200} height={200} className="absolute -bottom-0 right-0" />
        <Image src="/images/waktu/Ornament-BungaMawaKanan.svg" alt="bunga kanan" width={100} height={100} className="absolute -bottom-2 right-0" />
      </div>

      {/* ===== DESKTOP ===== */}
      <div
        className="relative hidden lg:block w-full overflow-hidden"
        style={{ aspectRatio: "1512/945" }}
      >
        {/* BACKGROUND */}
        <Image
          src="/images/waktu/Bg-Dekstop.svg"
          alt="bg"
          fill
          priority
          className="object-cover object-[50%_78%]"
        />

        {/* LAMPU ATAS */}
        <div className="absolute top-0 left-0 w-full z-10">
          <motion.div
            className="absolute left-[4%] -top-[4vw]"
            style={{ transformOrigin: "top center" }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          >
            <Image src="/images/waktu/Ornament-Biru.svg" alt="" width={155} height={110} style={{ width: "25.79vw", height: "auto" }} />
          </motion.div>

          <motion.div
            className="absolute left-[20%]"
            style={{ transformOrigin: "top center", top: "-7.94vw" }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <Image src="/images/waktu/Ornament-Merah.svg" alt="" width={85} height={110} style={{ width: "12.57vw", height: "auto" }} />
          </motion.div>

          <motion.div
            className="absolute right-[20%]"
            style={{ transformOrigin: "top center", top: "-8.6vw" }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <Image src="/images/waktu/Ornament-Merah.svg" alt="" width={85} height={110} style={{ width: "12.57vw", height: "auto" }} />
          </motion.div>

          <motion.div
            className="absolute -right-[4%]"
            style={{ transformOrigin: "top center", top: "-4.5vw" }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <Image src="/images/waktu/Ornament-Biru.svg" alt="" width={155} height={110} style={{ width: "25.79vw", height: "auto" }} />
          </motion.div>
        </div>

        {/* WRAPPER */}
        <div
          className="relative flex justify-center items-center pt-5"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "45vw",
            height: "85%",
            marginTop: "0.5vw",
          }}
        >
          <Image src="/images/waktu/Ornament-Bg.svg" alt="panel" fill className="object-contain scale-y-110" />

          {/* CONTENT */}
        <motion.div
  className="absolute inset-0 flex flex-col items-center text-center leading-none"
  style={{ paddingTop: "7vw" }}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  variants={{
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  }}
>
  {/* DATE */}
  <motion.div
    className="flex items-baseline text-center text-[#CD4964]"
    style={{ gap: "2.25vw" }}
    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 1 } } }}
  >
    <span className="font-cormorant font-semibold" style={{ fontSize: "3.17vw" }}>MAY</span>
    <div style={{ width: "0.17vw", height: "1.8vw", backgroundColor: "#CD4964" }} />
    <span className="font-semibold font-cormorant leading-none" style={{ fontSize: "6.35vw" }}>16</span>
    <div style={{ width: "0.17vw", height: "1.8vw", backgroundColor: "#CD4964" }} />
    <span className="font-cormorant font-semibold" style={{ fontSize: "3.17vw" }}>2026</span>
  </motion.div>

  {/* TIME */}
  <motion.div
    className="flex text-[#CD4964]"
    style={{ gap: "1.5vw", marginTop: "0.66vw" }}
    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 1 } } }}
  >
    <div style={{ width: "1.85vw", height: "0.13vw", backgroundColor: "#CD4964", marginTop: "1vw" }} />
    <p className="font-semibold font-cormorant" style={{ fontSize: "2.12vw" }}>11.00 WIB</p>
    <div style={{ width: "1.85vw", height: "0.13vw", backgroundColor: "#CD4964", marginTop: "1vw" }} />
  </motion.div>

  {/* TITLE */}
  <motion.p
    className="font-bold text-[#CD4964] font-david"
    style={{ marginTop: "4.56vw", fontSize: "1.46vw" }}
    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 1 } } }}
  >
    SANGJIT CEREMONY
  </motion.p>

  {/* LOCATION */}
  <motion.p
    className="font-cormorant text-[#CD4964] font-bold"
    style={{ marginTop: "3.64vw", fontSize: "1.32vw", lineHeight: "1.85vw" }}
    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 1 } } }}
  >
    Royal Dynasty Restaurant <br /> 2nd Floor
  </motion.p>

  <motion.p
    className="font-cormorant text-[#CD4964]"
    style={{ marginTop: "2.98vw", fontSize: "1.32vw" }}
    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 1 } } }}
  >
    Jl. Jend. Sudirman No.232A, Bandung
  </motion.p>

  {/* BUTTON */}
  <motion.button
    onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Jl.%20Jendral%20Sudirman%20No.%20232A%20Bandung", "_blank")}
    className="bg-[#FF751F] text-white rounded-full font-bold font-cormorant"
    style={{ marginTop: "2.38vw", width: "14.81vw", height: "2.65vw", fontSize: "1.32vw" }}
    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 1 } } }}
  >
    GOOGLE MAPS
  </motion.button>

</motion.div>
        </div>

        {/* ORNAMEN BAWAH */}
        <Image src="/images/waktu/Guci-Dekstop.svg" alt="guci" width={120} height={120} className="absolute -bottom-0 right-0 h-auto" style={{ width: "19.53vw" }} />
        <Image src="/images/waktu/Ornament-BungaKiri.svg" alt="bunga kiri" width={195} height={140} className="absolute -bottom-6 left-0 h-auto" style={{ width: "24.47vw" }} />
        <Image src="/images/waktu/Ornament-BungaKnan.svg" alt="bunga kanan" width={200} height={200} className="absolute -bottom-0 right-11 h-auto" style={{ width: "34.07vw" }} />
        <Image src="/images/waktu/Bunga-KananDekstop.svg" alt="bunga kanan" width={100} height={100} className="absolute -bottom-2 right-0 h-auto" style={{ width: "14vw" }} />
      </div>
    </>
  );
};

export default Waktu;