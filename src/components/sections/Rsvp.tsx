"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Attend from "../popup/Attend";

const Rsvp = () => {
  const waHelpdesk = () => {
    const nomorHp = "6283102851438";
    const pesan = `Hello, I need help with RSVPing my invitations. Please help me. Thank you.`;
    const url = `https://wa.me/${nomorHp}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  const [status, setStatus] = useState<"attend" | "not">("attend");
  const [guest, setGuest] = useState(1);
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div id="rsvp">
      {/* ===== MOBILE ===== */}
      <div className="relative w-full overflow-hidden lg:hidden">
        {/* BG */}
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

        {/* Ornamen bunga kanan atas */}
        <Image
          // data-aos="fade-in"
          src="/images/rsvp/BungaDekstopAtas.png"
          alt="flower top"
          width={200}
          height={160}
          className="absolute top-0 -right-[21vw] z-30 w-[77%] h-auto"
        />

        {/* Ornamen bunga kiri bawah */}
        <Image
          // data-aos="fade-in"
          src="/images/rsvp/BungaDekstopBawah.png"
          alt="flower bottom"
          width={200}
          height={160}
          className="absolute -bottom-1 -left-[29vw] z-30 w-[86%] h-auto"
        />

        {/* Container putih */}
        <div
          className="relative z-20 bg-[#FEFFF9] mx-[25px] mt-[48px] text-center pb-[40%]"
          style={{ boxShadow: "0px 4px 5px 5px rgba(0,0,0,0.40)" }}
        >
          <h2
            data-aos="fade-in"
            className="font-david pt-[67px] font-bold text-[24px] text-[#CD4964]"
          >
            RSVP
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-[35px] font-cormorant text-[13px] text-[#CD4964]"
          >
            Dear Mr./Mrs./Ms.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-[25px] font-cormorant text-[13px] font-bold text-[#CD4964]"
          >
            .............
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-[34px] font-cormorant text-[13px] text-[#CD4964]"
          >
            Kindly confirm your attendance before <br />
            <span className="font-bold">02 May 2026</span>
          </p>
          <div className="flex justify-center gap-6 mt-[31px]">
            <button
              data-aos="fade-right"
              data-aos-delay="400"
              onClick={() => {
                setStatus("attend");
                setOpenPopup(true);
              }}
              className={`font-cormorant font-semibold text-[13px] w-[90px] h-[30px] rounded-full uppercase ${status === "attend" ? "bg-[#F9732A] text-[#FEFBF0]" : "border-[#F9732A] border-[0.5px] text-[#FF751F] bg-transparent"}`}
            >
              ATTEND
            </button>
            <button
              data-aos="fade-left"
              data-aos-delay="400"
              onClick={() => setStatus("not")}
              className={`font-cormorant font-semibold text-[13px] w-[90px] h-[30px] rounded-full uppercase ${status === "not" ? "bg-[#F9732A] text-[#FEFBF0]" : "border-[#F9732A] border-[0.5px] text-[#FF751F] bg-transparent"}`}
            >
              NOT ATTEND
            </button>
          </div>
          <p
            data-aos="fade-in"
            data-aos-delay="500"
            className="mt-[43px] font-cormorant text-[13px] text-[#CD4964]"
          >
            ARE YOU SURE?
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="600"
            className="mt-[43px] font-cormorant text-[13px] bg-[#F9732A] text-[#FEFBF0] font-semibold w-[200px] h-[30px] rounded-full"
          >
            CONFIRM NOT ATTEND
          </button>
          <p
            data-aos="fade-up"
            data-aos-delay="700"
            className="mt-[43px] font-cormorant text-[13px] text-[#CD4964]"
          >
            Having trouble with RSVP?
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="800"
            onClick={waHelpdesk}
            className="mt-[22px] mx-auto font-cormorant text-[13px] bg-[#F9732A] text-[#FEFBF0] font-semibold w-[200px] h-[30px] rounded-full flex items-center justify-center gap-1"
          >
            <Image
              src="/images/rsvp/lonceng.svg"
              alt="wa"
              width={18}
              height={23}
              className="w-[20px] object-contain"
            />
            CHAT HELPDESK TEAM
          </button>
        </div>
      </div>

      {/* ===== DESKTOP ===== */}
      <div
        className="relative hidden lg:block w-full overflow-hidden"
        style={{ aspectRatio: "1512/1169" }}
      >
        {/* BG */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/rsvp/Bg-Rsvp.K.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "54.22vw",
          }}
        />

        {/* Ornamen bunga kanan atas — posisi sesuai gambar, tidak di pojok */}
        <Image
          // data-aos="fade-in"
          src="/images/rsvp/BungaDekstopAtas.png"
          alt="flower top"
          width={200}
          height={160}
          className="absolute z-30 h-auto"
          style={{ top: "1", right: "15vw", width: "36vw" }}
        />

        {/* Ornamen bunga kiri bawah — posisi sesuai gambar */}
        <Image
          // data-aos="fade-in"
          src="/images/rsvp/BungaDekstopBawah.png"
          alt="flower bottom"
          width={200}
          height={160}
          className="absolute z-30 h-auto"
          style={{ bottom: "-1vw", left: "12vw", width: "41vw" }}
        />

        {/* Card putih */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bg-[#FEFFF9] text-center z-20"
          style={{
            boxShadow: "0px 4px 5px 5px rgba(0,0,0,0.40)",
            width: "38.23vw",
            height: "71.56vw",
            top: "3.24vw",
          }}
        >
          <h2
            data-aos="fade-in"
            className="font-david font-bold text-[#CD4964]"
            style={{ paddingTop: "10vw", fontSize: "3.17vw" }}
          >
            RSVP
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-cormorant text-[#CD4964]"
            style={{ marginTop: "0.7vw", fontSize: "1.32vw" }}
          >
            Dear Mr./Mrs./Ms.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-cormorant font-bold text-[#CD4964]"
            style={{ marginTop: "1.65vw", fontSize: "1.32vw" }}
          >
            .............
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="font-cormorant text-[#CD4964]"
            style={{
              marginTop: "2vw",
              fontSize: "1.32vw",
              lineHeight: "1.85vw",
            }}
          >
            Kindly confirm your attendance before <br />
            <span className="font-bold">02 May 2026</span>
          </p>

          <div
            className="flex justify-center"
            style={{ gap: "1.5vw", marginTop: "3.05vw" }}
          >
            <button
              data-aos="fade-right"
              data-aos-delay="400"
              onClick={() => {
                setStatus("attend");
                setOpenPopup(true);
              }}
              className={`font-cormorant font-semibold rounded-full uppercase ${status === "attend" ? "bg-[#F9732A] text-[#FEFBF0]" : "border-[#F9732A] border-[0.5px] text-[#FF751F] bg-transparent"}`}
              style={{ fontSize: "1.32vw", width: "10.12vw", height: "2.65vw" }}
            >
              ATTEND
            </button>
            <button
              data-aos="fade-left"
              data-aos-delay="400"
              onClick={() => setStatus("not")}
              className={`font-cormorant font-semibold rounded-full uppercase ${status === "not" ? "bg-[#F9732A] text-[#FEFBF0]" : "border-[#F9732A] border-[0.5px] text-[#FF751F] bg-transparent"}`}
              style={{ fontSize: "1.32vw", width: "10.12vw", height: "2.65vw" }}
            >
              NOT ATTEND
            </button>
          </div>

          <p
            data-aos="fade-in"
            data-aos-delay="500"
            className="font-cormorant text-[#CD4964]"
            style={{ marginTop: "3.84vw", fontSize: "1.32vw" }}
          >
            ARE YOU SURE?
          </p>

          <button
            data-aos="fade-up"
            data-aos-delay="600"
            className="font-cormorant bg-[#F9732A] text-[#FEFBF0] font-semibold rounded-full"
            style={{
              marginTop: "3.84vw",
              fontSize: "1.32vw",
              width: "21.83vw",
              height: "2.65vw",
            }}
          >
            CONFIRM NOT ATTEND
          </button>

          <p
            data-aos="fade-up"
            data-aos-delay="700"
            className="font-cormorant text-[#CD4964]"
            style={{ marginTop: "2.84vw", fontSize: "1.32vw" }}
          >
            Having trouble with RSVP?
          </p>

          <button
            data-aos="fade-up"
            data-aos-delay="800"
            onClick={waHelpdesk}
            className="mx-auto font-cormorant bg-[#F9732A] text-[#FEFBF0] font-semibold rounded-full flex items-center justify-center"
            style={{
              marginTop: "2vw",
              fontSize: "1.32vw",
              width: "21.83vw",
              height: "2.65vw",
              gap: "0.4vw",
            }}
          >
            <Image
              src="/images/rsvp/lonceng.svg"
              alt="wa"
              width={18}
              height={23}
              style={{ width: "1.7vw", height: "auto" }}
            />
            CHAT HELPDESK TEAM
          </button>
        </div>
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {openPopup && (
          <Attend setOpenPopup={setOpenPopup} waHelpdesk={waHelpdesk} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Rsvp;
