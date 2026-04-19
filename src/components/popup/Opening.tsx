  "use client";

  import { useState, useEffect } from "react";
  import Image from "next/image";
  import { motion, AnimatePresence } from "framer-motion";
  

type OpeningProps = {
  setStart: (v: boolean) => void;
  namaTamu?: string;
};

const Opening = ({ setStart, namaTamu = "Sela" }: OpeningProps) => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
      document.body.style.overflow = "hidden";
    }, []);


     const handleOpen = () => {
    setStart(true);
    document.body.style.overflow = "auto";
  };
    

    return (
      <AnimatePresence mode="wait" >
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm  md:backdrop-blur-md flex justify-center items-center  px-4"
          >
            {/* CARD POPUP */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97, y: 30 }} 
              transition={{
                duration: open ? 0.6 : 1.5, // masuk lebih lama, keluar lebih pelan
                ease: "easeOut"
              }}

              className="bg-[#F4F1ED] rounded-xl md:rounded-2xl overflow-hidden w-[290px] h-[430px] md:w-[416px] md:h-[540px] shadow-xl flex flex-col z-[100]"
            >
              <div className="relative w-full h-[182px] md:h-[220px] overflow-hidden">
                <Image
                  src="/images/popup/Popup.jpg"
                  alt="prewed"
                  fill
                  className="object-cover object-[50%_46%] md:object-[50%_70%]"
                />
              </div>

              <div className="flex flex-col items-center text-center px-4 pt-[28px] md:pt-[25px] pb-[40px] md:pb-[0px] flex-1 leading-none">
                <p className="text-[13px] md:text-[14px] text-[#7B552B] font-cormorant font-medium ">
                  The Sangjit of
                </p>

                <h1 className="text-[24px] md:text-[36px] text-[#7B552B] pt-[8px] md:pt-[15px] font-david uppercase">
                  JEANETTE & NICHOLAS
                </h1>

                <p className="text-[13px] md:text-[14px] text-[#7B552B] font-cormorant font-medium pt-[14px] md:pt-[24px]">
                  Dear Mr. / Mrs. / Ms.
                </p>

                <p className="text-[13px] md:text-[18px] font-medium font-cormorant text-[#7B552B] pt-[11px] md:pt-[13px]">
                  {namaTamu}
                </p>

                <p className="text-[10px] md:text-[12px]  text-[#7B552B] font-cormorant pt-[15px] md:pt-[23px] leading-[1.2]">
                 We sincerely apologize<br />
                 for any misspelling of names or titles.
                </p>

                <button
                  onClick={handleOpen}
                  className="bg-[#CB4F35] text-[#FEFBF0] w-[184px] h-[30px] md:w-[220px] md:h-[40px] rounded-full uppercase font-cormorant font-medium text-[15px] md:text-[18px] mt-[12px] md:mt-[20px]"
                >
                  Open Invitation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )
        }
      </AnimatePresence >
    );
  };

  export default Opening;