import React from 'react'
import Image from 'next/image'

const Gallery = () => {
  return (
    <div id='gallery'>
      {/* ===== MOBILE ===== */}
      <div className="relative w-full h-[700px] md:h-screen flex justify-center items-center overflow-hidden lg:hidden">
        <Image
          src="/images/gallery/Bg-Mobile.webp"
          alt="background"
          fill
          priority
          className="object-cover object-top"
        />

      </div>

      {/* ===== DESKTOP ===== */}
      <div
        className="relative hidden lg:block w-full overflow-hidden"
        style={{ aspectRatio: "1512/942" }}
      >
        <Image
          src="/images/gallery/BgDekstop.jpg"
          alt="background"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default Gallery