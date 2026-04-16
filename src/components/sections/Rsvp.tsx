import React from "react";
import Image from "next/image";

const Rsvp = () => {
  return (
    <>
      <section className="relative w-full min-h-[740px] overflow-hidden bg-pattern flex flex-col">
        <Image
          src="/images/profile/Bg-Profile.png"
          alt="background"
          fill
          className="object-cover object-top"
        />

        {/* Ornamen bunga kanan atas */}
        <Image
          src="/images/rsvp/Ornament-BungaAtas.svg"
          alt="flower top"
          width={200}
          height={160}
          className="absolute top-0 right-0 z-30 w-[220px] h-auto"
        />

        {/* Ornamen bunga kiri bawah */}
        <Image
          src="/images/rsvp/Ornament-BungaBawah.svg"
          alt="flower bottom"
          width={200}
          height={160}
          className="absolute bottom-0 left-0 z-30 w-[160px] h-auto"
        />

        {/* Container putih */}
<div className="relative z-20 bg-[#FEFFF9] mx-[25px] mt-[49px] h-[720px] shadow-md text-center">
            <h2 className="font-david mt-[67px] font-bold text-[24px] text-[#CD4964]">
            RSVP
          </h2>

          <p className="mt-[49px] font-cormorant text-[13px] text-[#CD4964]">
            Dear Mr./Mrs./Ms.
          </p>

          <p className="mt-[29px] font-cormorant text-[13px] font-bold text-[#CD4964]">
            .............
          </p>

          <p className="mt-[34px] font-cormorant text-[13px] text-[#CD4964] ">
            Kindly confirm your attendance before <br />
            <span className="font-bold text-[13px]">02 May 2026</span>
          </p>

          <div className="flex justify-center gap-3 mt-[40px]">
            <button className="bg-[#F9732A] font-cormorant text-[#FEFBF0] text-[13px] w-[90px] h-[30px] rounded-full uppercase">
              ATTEND
            </button>
            <button className="border-[#F9732A] font-cormorant border-[0.5px] text-[#FF751F] text-[13px] w-[90px] h-[30px] rounded-full uppercase">
              NOT ATTEND
            </button>
          </div>

          <p className="mt-[43px] font-cormorant text-[13px] text-[#CD4964] ">
            ARE YOU SURE?
          </p>

          <button className="mt-[43px] font-cormorant text-[13px] bg-[#F9732A] text-[#FEFBF0] font-semibold w-[200px] h-[30px] rounded-full">
            CONFIRM NOT ATTEND
          </button>

          <p className="mt-[43px] font-cormorant text-[13px] text-[#CD4964] ">
            Having trouble with RSVP?
          </p>

          <button className="mt-[22px] mx-auto font-cormorant text-[13px] bg-[#F9732A] text-[#FEFBF0] font-semibold w-[200px] h-[30px] rounded-full flex items-center justify-center gap-3">
             <Image
                                    src="/images/rsvp/lonceng.svg"
                                    alt="wa"
                                    width={18}
                                    height={23}
                                    className="w-[20px] md:w-[28px] object-contain"
                                />
            CHAT HELPDESK TEAM
          </button>
        </div>
      </section>
    </>
  );
};

export default Rsvp;
