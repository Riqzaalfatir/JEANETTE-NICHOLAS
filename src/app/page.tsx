"use client"

import { useState } from "react"
import Hero from "@/components/sections/Hero";
import Profile from "@/components/sections/Profile";
import Waktu from "@/components/sections/Waktu";
import Dresscode from "@/components/sections/Dresscode";
import Rsvp from "@/components/sections/Rsvp";
import Gallery from "@/components/sections/Gallery";
import Thankyou from "@/components/sections/Thankyou";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Opening from "@/components/popup/Opening";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
     <Header open={menuOpen} setOpen={setMenuOpen}/>
      <Opening />
       <Hero />
       <Profile />
       <Waktu />
       <Dresscode />
       <Rsvp />
       <Gallery />
       <Thankyou />

     <Footer />
    </>
  );
}
