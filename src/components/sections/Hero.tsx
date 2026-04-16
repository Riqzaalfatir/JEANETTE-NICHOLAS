import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
     <div className='relative w-full min-h-[850px]'>
      
      <Image
        src="/images/hero/Bg-Hero.jpg"
        alt='Background Hero'
        fill
        className='object-cover object-bottom'
        priority />

        {/* <div className='absolute inset-0 bg-black/30' /> */}

        <div className='absolute top-[65px] left-1/2 -translate-x-1/2 z-10'>
          <Image
            src="/images/hero/Ornament-Hero.svg"
            alt='ornament'
            width={73}
            height={100} 
            />
        </div>

        <div className='absolute inset-0 flex flex-col justify-end items-center pb-[115px] text-center z-10'>

            <p className='text-white font-cormorant font-semibold text-[16px]'>
                The Sangjit of
            </p>

            <h1 className='text-white font-david text-[28px]'>
                JEANETTE & NICHOLAS
            </h1>

            <p className='text-white font-cormorant font-bold text-[13px]'>
                SATURDAY, 16 MAY 2026
            </p>
        </div>
     </div>
    </>
  )
}

export default Hero