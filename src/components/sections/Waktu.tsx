import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Waktu = () => {
  return (
    <div id="waktu">
      {/* ===== MOBILE ===== */}
      <div className="relative w-full aspect-[390/641] mx-auto overflow-hidden flex items-center justify-center lg:hidden">
        {/* BACKGROUND */}
        <Image
          src="/images/waktu/Bg-Waktu.png"
          alt="bg"
          fill
          priority
          className="object-cover object-bottom"
        />

        {/* LAMPU ATAS */}
        <div
          className="absolute top-0 left-0 w-full z-10"
          style={{ height: "30.77vw" }}
        >
          <motion.div
            className="absolute -left-[5%]"
            style={{ transformOrigin: "top center", top: "-0vw" }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
          >
            <Image
              src="/images/waktu/LampuBiru.webp"
              alt=""
              width={165}
              height={110}
              style={{ width: "44vw", height: "auto" }}
            />
          </motion.div>

          <motion.div
            className="absolute left-[22%]"
            style={{ transformOrigin: "top center", top: "-0vw" }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          >
            <Image
              src="/images/waktu/LampuMerah.webp"
              alt=""
              width={85}
              height={110}
              style={{ width: "20vw", height: "auto" }}
            />
          </motion.div>

          <motion.div
            className="absolute right-[20.5%]"
            style={{ transformOrigin: "top center", top: "-0vw" }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            <Image
              src="/images/waktu/LampuMerah.webp"
              alt=""
              width={85}
              height={110}
              style={{ width: "20vw", height: "auto" }}
            />
          </motion.div>

          <motion.div
            className="absolute -right-[12%]"
            style={{ transformOrigin: "top center", top: "-0vw" }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            <Image
              src="/images/waktu/LampuBiru.webp"
              alt=""
              width={165}
              height={110}
              style={{ width: "44vw", height: "auto" }}
            />
          </motion.div>
        </div>

        {/* WRAPPER */}
        <div
          className="relative w-full flex justify-center items-center"
          style={{
            marginTop: "33.85vw",
            maxWidth: "96.15vw",
            height: "148.72vw",
          }}
        >
          <Image
            src="/images/waktu/Ornament-Bg.svg"
            alt="panel"
            fill
            className="object-contain"
          />
          <div
            className="absolute inset-0 flex flex-col items-center text-center leading-none"
            style={{
              paddingTop: "28.13vw",
              paddingLeft: "1.54vw",
              paddingRight: "1.54vw",
            }}
          >
            {/* DATE */}
            <div
              data-aos="fade-in"
              className="flex items-baseline text-center text-[#CD4964]"
              style={{ gap: "6vw" }}
            >
              <span
                className="font-cormorant font-semibold"
                style={{ fontSize: "6.15vw" }}
              >
                MAY
              </span>
              <div
                className="w-[2px] bg-[#CD4964]"
                style={{ height: "5.64vw" }}
              />
              <span
                className="font-semibold font-cormorant leading-none"
                style={{ fontSize: "16.41vw" }}
              >
                16
              </span>
              <div
                className="w-[2px] bg-[#CD4964]"
                style={{ height: "5.64vw" }}
              />
              <span
                className="font-cormorant font-semibold"
                style={{ fontSize: "6.15vw" }}
              >
                2026
              </span>
            </div>

            {/* TIME */}
            <div
              className="flex text-[#CD4964]"
              style={{ gap: "4vw", marginTop: "4%" }}
            >
              <div
                data-aos="fade-right"
                className="bg-[#CD4964]"
                style={{ width: "5.64vw", height: "2px", marginTop: "3.85vw" }}
              />
              <p
                data-aos="fade-up"
                className="font-semibold font-cormorant"
                style={{ fontSize: "6.15vw" }}
              >
                11.00 WIB
              </p>
              <div
                data-aos="fade-left"
                className="bg-[#CD4964]"
                style={{ width: "5.64vw", height: "2px", marginTop: "3.85vw" }}
              />
            </div>

            {/* TITLE */}
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-bold text-[#CD4964] font-david"
              style={{ marginTop: "11.03vw", fontSize: "4.1vw" }}
            >
              SANGJIT CEREMONY
            </p>

            {/* LOCATION */}
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-cormorant text-[#CD4964] font-bold leading-4 md:leading-8"
              style={{ marginTop: "5.13vw", fontSize: "3.33vw" }}
            >
              Royal Dynasty Restaurant <br /> 2nd Floor
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="font-cormorant text-[#CD4964]"
              style={{ marginTop: "6.41vw", fontSize: "3.33vw" }}
            >
              Jl. Jend. Sudirman No.232A, Bandung
            </p>

            {/* BUTTON */}
            <button
              data-aos="fade-up"
              data-aos-delay="660"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/search/?api=1&query=Jl.%20Jendral%20Sudirman%20No.%20232A%20Bandung",
                  "_blank",
                )
              }
              className="bg-[#FF751F] text-white rounded-full font-bold font-cormorant"
              style={{
                marginTop: "9.23vw",
                width: "41.03vw",
                height: "7.69vw",
                fontSize: "3.33vw",
              }}
            >
              GOOGLE MAPS
            </button>
          </div>
        </div>

        {/* ORNAMEN BAWAH */}
        <Image
          src="/images/waktu/Ornament-Guci.K.png"
          alt="guci"
          width={290}
          height={290}
          className="absolute -bottom-0"
          style={{ right: "-6vw", width: "36.2vw", height: "auto" }}
        />
        <Image
          src="/images/waktu/BungaKiri..webp"
          alt="bunga kiri"
          width={290}
          height={290}
          className="absolute -bottom-1"
          style={{ left: "-3.5%", width: "50vw", height: "auto" }}
        />
        <Image
          src="/images/waktu/BungaKanan.webp"
          alt="bunga kanan"
          width={290}
          height={290}
          className="absolute -bottom-0"
          style={{ right: "2vw", width: "48vw", height: "auto" }}
        />
        <Image
          src="/images/waktu/BungaKananKecil.webp"
          alt="bunga kanan"
          width={110}
          height={110}
          className="absolute -bottom-1"
          style={{ right: "-0.77vw", width: "28.21vw", height: "auto" }}
        />
      </div>

      {/* ===== DESKTOP ===== */}
      <div
        className="relative hidden lg:block w-full overflow-hidden z-10"
        style={{
          aspectRatio: "1512/945",
          boxShadow: "0px 4.44px 11.44px 0px rgba(0,0,0,0.73)",
        }}
      >
        {/* BACKGROUND */}
        <Image
          src="/images/waktu/Bg-Waktu.webp"
          alt="bg"
          fill
          priority
          className="object-cover object-center"
        />

        {/* LAMPU ATAS */}
        <div className="absolute top-0 left-0 w-full z-10">
          <motion.div
            className="absolute -left-[3.5%] -top-[0.2vw]"
            style={{ transformOrigin: "top center" }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
          >
            <Image
              src="/images/waktu/LampuBDekstop.svg"
              alt=""
              width={155}
              height={110}
              style={{ width: "29vw", height: "auto" }}
            />
          </motion.div>

          <motion.div
            className="absolute left-[18.5%]"
            style={{ transformOrigin: "top center", top: "0vw" }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          >
            <Image
              src="/images/waktu/LampuMerah.svg"
              alt=""
              width={85}
              height={110}
              style={{ width: "13vw", height: "auto" }}
            />
          </motion.div>

          <motion.div
            className="absolute right-[18.5%]"
            style={{ transformOrigin: "top center", top: "0vw" }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            <Image
              src="/images/waktu/LampuMerah.svg"
              alt=""
              width={85}
              height={110}
              style={{ width: "13vw", height: "auto" }}
            />
          </motion.div>

          <motion.div
            className="absolute right-[0%]"
            style={{ transformOrigin: "top center", top: "-0.2vw" }}
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            <Image
              src="/images/waktu/LampuBDekstop.svg"
              alt=""
              width={155}
              height={110}
              style={{ width: "29vw", height: "auto" }}
            />
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
            width: "47vw",
            height: "85%",
            marginTop: "0.5vw",
          }}
        >
          <Image
            src="/images/waktu/Ornament-Bg.svg"
            alt="panel"
            fill
            className="object-contain scale-y-110 scale-x-110"
          />

          {/* CONTENT */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center text-center leading-none"
            style={{ paddingTop: "7vw" }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.25 } },
            }}
          >
            {/* DATE */}
            <motion.div
              className="flex items-baseline text-center text-[#CD4964]"
              style={{ gap: "2.6vw" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 1 } },
              }}
            >
              <span
                className="font-cormorant font-semibold"
                style={{ fontSize: "3.17vw" }}
              >
                MAY
              </span>
              <div
                style={{
                  width: "0.17vw",
                  height: "1.8vw",
                  backgroundColor: "#CD4964",
                }}
              />
              <span
                className="font-semibold font-cormorant leading-none"
                style={{ fontSize: "6.35vw" }}
              >
                16
              </span>
              <div
                style={{
                  width: "0.17vw",
                  height: "1.8vw",
                  backgroundColor: "#CD4964",
                }}
              />
              <span
                className="font-cormorant font-semibold"
                style={{ fontSize: "3.17vw" }}
              >
                2026
              </span>
            </motion.div>

            {/* TIME */}
            <motion.div
              className="flex text-[#CD4964]"
              style={{ gap: "1.5vw", marginTop: "0.66vw" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 1 } },
              }}
            >
              <div
                style={{
                  width: "1.9vw",
                  height: "0.15vw",
                  backgroundColor: "#CD4964",
                  marginTop: "1vw",
                }}
                className=""
              />
              <p
                className="font-semibold font-cormorant"
                style={{ fontSize: "2.12vw" }}
              >
                11.00 WIB
              </p>
              <div
                style={{
                  width: "1.9vw",
                  height: "0.15vw",
                  backgroundColor: "#CD4964",
                  marginTop: "1vw",
                }}
              />
            </motion.div>

            {/* TITLE */}
            <motion.p
              className="font-bold text-[#CD4964] font-david"
              style={{ marginTop: "4.56vw", fontSize: "1.46vw" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 1 } },
              }}
            >
              SANGJIT CEREMONY
            </motion.p>

            {/* LOCATION */}
            <motion.p
              className="font-cormorant text-[#CD4964] font-bold"
              style={{
                marginTop: "3.64vw",
                fontSize: "1.32vw",
                lineHeight: "1.85vw",
              }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 1 } },
              }}
            >
              Royal Dynasty Restaurant <br /> 2nd Floor
            </motion.p>

            <motion.p
              className="font-cormorant text-[#CD4964]"
              style={{ marginTop: "2.98vw", fontSize: "1.32vw" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 1 } },
              }}
            >
              Jl. Jend. Sudirman No.232A, Bandung
            </motion.p>

            {/* BUTTON */}
            <motion.button
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/search/?api=1&query=Jl.%20Jendral%20Sudirman%20No.%20232A%20Bandung",
                  "_blank",
                )
              }
              className="bg-[#FF751F] text-white rounded-full font-bold font-cormorant"
              style={{
                marginTop: "2.6vw",
                width: "14.81vw",
                height: "2.65vw",
                fontSize: "1.32vw",
              }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 1 } },
              }}
            >
              GOOGLE MAPS
            </motion.button>
          </motion.div>
        </div>

        {/* ORNAMEN BAWAH */}
        <Image
          src="/images/waktu/Guci.svg"
          alt="guci"
          width={120}
          height={120}
          className="absolute -bottom-0 right-0 h-auto"
          style={{ width: "19.53vw" }}
        />
        <Image
          src="/images/waktu/BungaKiri.svg"
          alt="bunga kiri"
          width={195}
          height={140}
          className="absolute -bottom-3 -left-19  h-auto"
          style={{ width: "27vw" }}
        />

        <Image
          src="/images/waktu/BungaKanan.svg"
          alt="bunga kanan"
          width={200}
          height={200}
          className="absolute -bottom-0 right-7 h-auto"
          style={{ width: "36vw" }}
        />
        <Image
          src="/images/waktu/BungaKecil.svg"
          alt="bunga kanan"
          width={100}
          height={100}
          className="absolute -bottom-2 right-0 h-auto"
          style={{ width: "14vw" }}
        />
      </div>
    </div>
  );
};

export default Waktu;
