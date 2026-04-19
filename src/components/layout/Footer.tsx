import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#CD4964] "
>
      {/* ===== MOBILE ===== */}
      <div className="flex lg:hidden items-center justify-center">
        <div className="relative w-[280px] h-[58px]">
          <Image
            src="/images/footer/LogoProviteMobile.png"
            alt="Logo Provite"
            fill
            className="object-contain -mt-[3vw]"
          />
        </div>
      </div>

      {/* ===== DESKTOP ===== */}
      <div
        className="hidden lg:flex items-center justify-center "
        style={{ aspectRatio: "1512/110"}}
      >
        <div className="relative" style={{ width: "20vw", height: "6.2vw" }}>
          <Image
            src="/images/footer/Logo-Footer.svg"
            alt="Logo Provite"
            fill
            className="object-contain -mt-[1vw]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;