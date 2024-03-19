import Image from "next/image";

function HomeBanner() {
  const bannerCoverSrc = ["/img/cover1.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg"];
  
  return ( <div>
    <Image src={"/img/cover1.jpg"} alt={"cover"} fill />
  </div> );
}

export default HomeBanner;