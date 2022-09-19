import React from "react";
import "../../style/gallary.css";
import img1 from "../../static/images/gallary/1.jpg";
import img2 from "../../static/images/gallary/2.jpg";
import img3 from "../../static/images/gallary/3.jpg";
import img4 from "../../static/images/gallary/4.jpg";
import img5 from "../../static/images/gallary/5.jpg";
import img6 from "../../static/images/gallary/6.jpg";
import img7 from "../../static/images/gallary/7.jpg";
import img8 from "../../static/images/gallary/8.jpg";
import img9 from "../../static/images/gallary/kangara valley.jpg";

export default function Gallary() {
  const gallaryImg = [
    { Img: img1 },
    { Img: img2 },
    { Img: img3 },
    { Img: img4 },
    { Img: img5 },
    { Img: img6 },
    { Img: img7 },
    { Img: img8 },
    { Img: img9 },
  ];
  
  let imgtoShow = gallaryImg.map((img) => {
    return <img className="gallaryImg" src={img.Img} alt="gallary img" />;
  });

  return (
    <div className="gallaryPage">
    <h1 className="gallaryHeading" > GALLARY </h1>
        <div className="gallaryCard">{imgtoShow}</div>
      </div>
  );
}
