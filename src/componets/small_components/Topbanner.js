//import React, { useEffect, useState } from "react";
//import img from "../../static/images/topbanner.jpg";
import "../../style/Topbanner.css";
import QureryForm from "../small_components/QueryForm";
let Banner = () => {
  return (
    <div className="banner">
      <div className="topcut"></div>
      <div className="bottomcut"></div>
      <div className="background">
        <div className="formarea">
        <div className="qureryArea" >
          <QureryForm />
          </div>
        </div>
        <div className="text_area">
          <h1>adventure is worthwhile</h1>
          <p>
            “The journey of a thousand miles begins with a single step.” ...
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
