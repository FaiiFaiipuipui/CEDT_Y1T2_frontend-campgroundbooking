"use client"

import React, { useState } from "react";
import Image from "next/image";

function HomeBanner() {
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0);
  const bannerCoverSrc = ["/img/cover1.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg"];

  const changeCover = () => {
    const nextIndex = (currentCoverIndex + 1) % bannerCoverSrc.length;
    setCurrentCoverIndex(nextIndex);
  };

  return (
    <div onClick={changeCover}>
      <Image src={bannerCoverSrc[currentCoverIndex]} alt={"cover"} fill />
    </div>
  );
}

export default HomeBanner;
