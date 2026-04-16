import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#CD4964] flex items-center justify-center h-[40px]">
      <div className="relative w-[280px] h-[40px]">
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