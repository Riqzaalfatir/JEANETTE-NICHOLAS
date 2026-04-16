import React from 'react'
import Image from 'next/image'

const Gallery = () => {
  return (
    <>
       <section className="relative w-full min-h-[600px] md:h-[573px] flex justify-center items-center overflow-hidden">

         <Image
                src="/images/gallery/Bg-Gallery.jpg"
                alt="background"
                fill
                className="object-cover object-top"
              />
        
    </section>
    </>
  )
}

export default Gallery