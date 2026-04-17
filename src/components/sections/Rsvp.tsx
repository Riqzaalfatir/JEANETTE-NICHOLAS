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
    <>
      <div className="relative w-full overflow-hidden">
        {/* BG */}
        <img
          src="/images/profile/Bg-Profile.png"
          alt=""
          className="absolute pointer-events-none z-0"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -46%)",
            width: "100%",
            height: "110%",
            objectPosition: "left top",
          }}
        />

        {/* Ornamen bunga kanan atas */}
        <Image data-aos="fade-in"
          src="/images/rsvp/Ornament-BungaAtas.svg"
          alt="flower top"
          width={200}
          height={160}
          className="absolute top-0 right-0 z-30 w-[56%] h-auto"
        />

        {/* Ornamen bunga kiri bawah */}
        <Image data-aos="fade-in"
          src="/images/rsvp/Ornament-BungaBawah.svg"
          alt="flower bottom"
          width={200}
          height={160}
          className="absolute -bottom-2 left-0 z-30 w-[50%] h-auto"
        />

        {/* Container putih — tinggi ngikutin konten */}
        <div className="relative z-20 bg-[#FEFFF9] mx-[25px] mt-[48px] shadow-md text-center pb-[40%]">
          <h2 data-aos="fade-in" className="font-david pt-[67px] font-bold text-[24px] text-[#CD4964]">
            RSVP
          </h2>

          <p data-aos="fade-up" data-aos-delay="100" className="mt-[35px] font-cormorant text-[13px] text-[#CD4964]">
            Dear Mr./Mrs./Ms.
          </p>

          <p data-aos="fade-up" data-aos-delay="300" className="mt-[25px] font-cormorant text-[13px] font-bold text-[#CD4964]">
            .............
          </p>

          <p data-aos="fade-up" data-aos-delay="500" className="mt-[34px] font-cormorant text-[13px] text-[#CD4964]">
            Kindly confirm your attendance before <br />
            <span className="font-bold">02 May 2026</span>
          </p>

          <div className="flex justify-center gap-4 mt-[31px]">
            <button data-aos="fade-right" data-aos-delay="700"
              onClick={() => {
                setStatus("attend");
                setOpenPopup(true);
              }}
              className={`font-cormorant font-semibold text-[13px] w-[90px] h-[30px] rounded-full uppercase ${
                status === "attend"
                  ? "bg-[#F9732A] text-[#FEFBF0]"
                  : "border-[#F9732A] border-[0.5px] text-[#FF751F] bg-transparent"
              }`}
            >
              ATTEND
            </button>

            <button data-aos="fade-left" data-aos-delay="700"
              onClick={() => {
                setStatus("not");
              }}
              className={`font-cormorant font-semibold text-[13px] w-[90px] h-[30px] rounded-full uppercase ${
                status === "not"
                  ? "bg-[#F9732A] text-[#FEFBF0]"
                  : "border-[#F9732A] border-[0.5px] text-[#FF751F] bg-transparent"
              }`}
            >
              NOT ATTEND
            </button>
          </div>
          <p data-aos="fade-in" data-aos-delay="1100" className="mt-[43px] font-cormorant text-[13px] text-[#CD4964]">
            ARE YOU SURE?
          </p>

          <button data-aos="fade-up" data-aos-delay="1100" className="mt-[43px] font-cormorant text-[13px] bg-[#F9732A] text-[#FEFBF0] font-semibold w-[200px] h-[30px] rounded-full">
            CONFIRM NOT ATTEND
          </button>

          <p data-aos="fade-in" data-aos-delay="1500" className="mt-[43px] font-cormorant text-[13px] text-[#CD4964]">
            Having trouble with RSVP?
          </p>

          <button data-aos="fade-up" data-aos-delay="1500" onClick={waHelpdesk} className="mt-[22px] mx-auto font-cormorant text-[13px] bg-[#F9732A] text-[#FEFBF0] font-semibold w-[200px] h-[30px] rounded-full flex items-center justify-center gap-1">
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

      {/* POPUP UNTUK BUTTON ATTEND */}
      <AnimatePresence>
        {openPopup && (
          <Attend setOpenPopup={setOpenPopup} waHelpdesk={waHelpdesk} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Rsvp;
