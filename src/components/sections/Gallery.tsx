import React from 'react'
import Image from 'next/image'

const Gallery = () => {
  return (
    <>
      {/* ===== MOBILE ===== */}
      <div className="relative w-full h-[700px] flex justify-center items-center overflow-hidden lg:hidden">
        <Image
          src="/images/gallery/Bg-Mobile.svg"
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
          src="/images/gallery/Bg-Dekstop.svg"
          alt="background"
          fill
          priority
          className="object-cover"
        />
      </div>
    </>
  )
}

export default Gallery