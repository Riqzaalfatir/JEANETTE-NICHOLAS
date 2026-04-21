"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [start, setStart] = useState(false);
  

useEffect(() => {
  AOS.init({
    duration: 1200,
    once: true,
    easing: "ease-out-cubic",
  });
}, []);

 const handleStart = () => {
    setStart(true);
    setTimeout(() => AOS.refresh(), 100);
  };


  return (
  <>
    <Header open={menuOpen} setOpen={setMenuOpen} />
      {!start && <Opening setStart={handleStart} />}  

    <div className="min-h-screen flex flex-col">
      <div style={{ overflowX: "hidden" }}>
        <Hero />
        <Profile />
        <Waktu />
        <Dresscode />
        <Rsvp />
        <Gallery />
      </div>

      <Thankyou />
      <Footer />
    </div>
  </>
);
}
