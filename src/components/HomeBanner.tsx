"use client";

import React, { useState } from "react";
import Image from "next/image";

function HomeBanner() {
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0);
  const bannerCoverSrc = [
    "/img/cover1.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];

  const changeCover = () => {
    const nextIndex = (currentCoverIndex + 1) % bannerCoverSrc.length;
    setCurrentCoverIndex(nextIndex);
  };

  return (
    <div className="relative w-screen h-screen" onClick={changeCover}>
      <Image src={bannerCoverSrc[currentCoverIndex]} alt={"cover"} fill />
      <div className="relative top-[45%] text-center z-20 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <h1 className="text-4xl font-bold">Welcome to our services</h1>
        <h3 className="text-xl mt-5">Have a great time here!</h3>
      </div>
    </div>
  );
}

export default HomeBanner;
