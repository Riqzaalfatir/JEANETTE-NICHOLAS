import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#CD4964] flex items-center justify-center h-[43px]">
      <div className="relative w-[280px] h-[60px]">
        <Image
          src="/images/footer/Logo-Footer.svg"
          alt="Logo Provite"
          fill
          className="object-contain -mt-2"
        />
      </div>
    </footer>
  );
};

export default Footer;