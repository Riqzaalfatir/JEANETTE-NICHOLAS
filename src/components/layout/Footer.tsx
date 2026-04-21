import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#CD4964] ">
      {/* ===== MOBILE ===== */}
      <div
        className="flex lg:hidden items-center justify-center overflow-hidden"
        style={{ height: "9vw" }}
      >
        <div
          className="relative w-[75vw]"
          style={{
            height: "13vw",
            marginTop: "-6.5vw",
            marginBottom: "-2.5vw",
          }}
        >
          <Image
            src="/images/footer/Logo-Footer.svg"
            alt="Logo Provite"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* ===== DESKTOP ===== */}
      <div
        className="hidden lg:flex items-center justify-center "
        style={{ aspectRatio: "1512/110" }}
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
