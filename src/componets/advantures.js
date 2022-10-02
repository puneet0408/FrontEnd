import React, { useState } from "react";
import "./advantues.css";
import img1 from "../static/images/Advanture/hill_Climbing.jpg";
import img2 from "../static/images/Advanture/waterFall.jpg";
import img3 from "../static/images/Advanture/igglo1.jpg";
import img4 from "../static/images/Advanture/para_gliding.jpg";
import img5 from "../static/images/Advanture/River-Rafting.png";
import img6 from "../static/images/Advanture/Skiing.jpg";
import img7 from "../static/images/Advanture/treeking.png";
import img8 from "../static/images/Advanture/bunjee_jumping.jpg";





const Advanture = () => {
  const Advantures = [


    {
      advanture: "waterFall",
      img: img2,
      discription:
        "waterFall are the  prime attraction for travelers holidaying in Himachal Pradesh.",
      famous: [
        "jogini falls, Manali",
        "satdhara Falls, Dalhousie",
        "Chadwick Falls, shimla",
        "Jana Falls , manali",
      ],
    },
    {
      advanture: "igloo",
      img: img3,
      discription:
        "An igloo is a snow house, is a type of shelter built of suitable snow....",
      famous: ["shimla igloo", "mamali igloo", "kullu igloo", "sethan igloo"],
    },
    {
      advanture: "paragliding",
      img: img4,
      discription:
        "The rising hills of Billing provide   of moderate winds make for a good take-off. .",
      famous: ["Manali", "dharamshamla", "Bilaspur", "solang valley"],
    },
    {
      advanture: "rock_Climbing",
      img: img1,
      discription:
        "Rock climbing is a sport in which   natural rock formations or artificial rock walls.",
      famous: [
        "Shitidhar",
        "Patalsu Peak",
        "Mount Hanuman",
        "Seven Sisters",
      ],
    },
    {
      advanture: "River_Rafting",
      img: img5,
      discription:
        "Rafting and whitewater rafting are recreational river or body of water",
      famous: [
        "Tattapani",
        "Ravi river ",
        "Spiti rivers",
        " satluj river",
      ],
    },
    {
      advanture: "trekking_treak",
      img: img7,
      discription:
        "Tracking   measuring the direction and magnitude of the momenta of charged particles · ",
      famous: ["Kasol", "Hampta valley", "tosh valley", "parsdhar"],
    },
    {
      advanture: "skiing_manali",
      img: img6,
      discription:
        "Skiing is the use of skis to glide on snow.  activity, or a competitive winter sport.",
      famous: ["Solang", "Manali ", "Kufri ", "Narkanda"],
    },
    {
      advanture: "bungee_jumping",
      img: img8,
      discription:
        "Bungee jumping is an  activity that  structure with an elastic cord attached into participants' feet.",
      famous: ["Solang Nala", "Manali ", "Kufri ", "Narkanda"],
    },
  ];

  const [viewFamousfor, setFamousfor] = useState(false);

  const openFamousBox = () => {
    setFamousfor((prev) => !prev);
  };

  const cards = Advantures.map((card) => {
    return (
      <div className="Whole_card">
        <div className="main_Card">
          <div>
            <img className="imgCont" src={card.img} alt="img" />
          </div>
          <div className="textCont">
            {viewFamousfor ? (
              <div>
                {" "}
                <h2>popular {card.advanture}</h2>{" "}
                <div className="famous">{card.famous}</div>
                <button className="btn" onClick={openFamousBox}>
                  back
                </button>
              </div>
            ) : (
              <div>
                <h1 className="adv">{card.advanture}</h1>
                <p className="dis">{card.discription}</p>
                <button className="btn" onClick={openFamousBox}>
                  famous
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="advanture_section">
      <h1 className="advHeading">Advantures</h1>
      <div className="allCard">{cards}</div>
    </div>
  );
};

export default Advanture;
