import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
      <div className="relative w-full flex justify-center items-center bg-[#FEFFF9]">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/profile/Bg-Profile.png"
        alt="background"
        fill
        className="object-none object-top"
      />

      {/* CONTENT */}
      <div className=" inset-0 pt-[11%] pb-10 px-2 flex flex-col items-center text-center">
        <div className="relative w-[340px] h-[630px] bg-[#FEFFF9] p-[1px] pl-[2px] leading-none">
          <Image
            src="/images/profile/Ornament-Emas.svg"
            alt="frame"
            width={450}
            height={600}
            className="w-full h-auto"
          />

          <div className="absolute inset-0 pt-[13%] pb-[16.5%] px-[8%] flex flex-col items-center text-center">
            <Image
              src="/images/profile/Logo-Provile.svg"
              alt="ornament"
              width={43}
              height={100}
              className="w-[15%] h-auto mb-[15px]"
            />

            <h2 className="font-cormorant text-[13px] text-[#7B552B] mb-[39px] leading-4">
              We are cordially inviting you to be part of <br /> our engagement
              celebration
            </h2>

            <p className="font-cormorant font-bold text-[13px] text-[#7B552B] mb-[23px]">
              Together with our families
            </p>

            <h1 className="text-[32px] text-[#FF751F] font-signature mb-[6px]">
              Jeanette Natasha
            </h1>
            <p className="font-cormorant font-bold text-[13px] text-[#7B552B] mb-[8px]">
              The Daughter of
            </p>
            <p className="font-cormorant text-[13px] text-[#7B552B] mb-[23px] leading-4">
              Mr. Na Eng Siang and <br />
              Mrs. Djuliawati Tan
            </p>

            <p className="font-cormorant font-bold italic text-[13px] text-[#7B552B] mb-[22px]">
              and
            </p>

            <h1 className="text-[32px] text-[#FF751F] font-signature mb-[6px]">
              Nicholas Chua
            </h1>
            <p className="font-cormorant font-bold text-[13px] text-[#7B552B] mb-[8px]">
              The Son of
            </p>
            <p className="font-cormorant text-[13px] text-[#7B552B] mb-[44px] leading-4">
              Mr. Chua Sui Hian and <br />
              Mrs. Go Lie Lien
            </p>

            <p className="font-cormorant text-[13px] text-[#7B552B] leading-4'">
              our joy will be completed with <br />
              your presence and blessings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
