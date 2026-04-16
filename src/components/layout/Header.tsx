"use client"

import { FiMenu } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

type HeaderProps = {
  open: boolean
  setOpen: (value: boolean) => void
}

const Header = ({ open, setOpen }: HeaderProps) => {

  const linkMenu = [
    { name: "HOME", link: "#hero" },
    { name: "PROFILE", link: "#counting" },
    { name: "COUNTING DOWN", link: "#orderofevents" },
    { name: "OUR STORY", link: "#venue" },
    { name: "RSVP", link: "#rsvp" },
    { name: "GALLERY", link: "#rsvp" },
    { name: "WEDDING GIFT", link: "#gift" }
  ]

  const container = {
    hidden: {
      transition: {
        staggerChildren: 0.08,
        staggerDirection: -1
      }
    },
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10, skewX: -10 },
    show: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 lg:hidden px-4 py-3">

      {/* HAMBURGER */}
      {!open && (
        <motion.button
          onClick={() => {
            console.log("OPEN CLICKED")
            setOpen(true)
          }}
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        >
          <FiMenu size={28} className="text-[#C3C3C3]" />
        </motion.button>
      )}

      {/* DROPDOWN */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.3
              }
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{ originX: 0, originY: 0 }}
            className="absolute top-4 left-3 bg-[#FEFBF0]/50 py-4 md:p-8 text-white  w-full max-w-[255px] md:max-w-[280px] z-0"
          >

            {/* CLOSE */}
            <motion.button
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute -top-3 left-1"
            >
             <p className="font-light text-[32px] text-black font-ibm">x</p>
            </motion.button>

            {/* MENU */}
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              className="pt-4 pl-[25px] md:pl-4 space-y-1.5 text-[12px] md:text-[14px] tracking-widest text-black font-sans font-medium flex flex-col"
            >
              {linkMenu.map((menu) => (
                <motion.a
                  key={menu.name}
                  href={menu.link}
                  variants={itemVariants}
                  onClick={() => {
                    setTimeout(() => {
                      setOpen(false)
                    }, 200)
                  }}
                  className="group relative flex items-center cursor-pointer"
                >
                  {/* PANAH */}
                  <span
                    className="absolute left-0 opacity-0 transition-all duration-500 ease-out 
                   group-hover:opacity-100 font-sans"
                  >
                    →
                  </span>

                  {/* TEXT */}
                  <span className="transition-all duration-300 ease-out group-hover:translate-x-5">
                    {menu.name}
                  </span>
                </motion.a>
              ))}
            </motion.ul>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
                ease: "easeOut"
              }}
              className="pt-[20px] text-black ml-7 md:ml-4 text-[8px] md:text-[12px] font-sans font-light"
            >
              Select a section above to continue
            </motion.p>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Header