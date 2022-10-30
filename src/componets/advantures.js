import React,{useState} from "react";
import "./advantues.css";
import Card from "./AdvantureCard";
import img1 from "../static/images/Advanture/hill_Climbing.jpg";
import img2 from "../static/images/Advanture/waterFall.jpg";
import img3 from "../static/images/Advanture/igglo1.jpg";
import img4 from "../static/images/Advanture/para_gliding.jpg";
import img5 from "../static/images/Advanture/River-Rafting.png";
import img6 from "../static/images/Advanture/Skiing.jpg";
import img7 from "../static/images/Advanture/treeking.png";
import img8 from "../static/images/Advanture/bunjee_jumping.jpg";



const Advantures = [

  {
    id:1,
    advanture: "waterFall",
    img: img2,
    discription:
      "waterFall are the  prime attraction for travelers holidaying in Himachal Pradesh.",
    famous: ["jogini falls","satdhara Falls","Chadwick Falls","Jana Falls"],
  },
  {
    id:2,
    advanture: "igloo",
    img: img3,
    discription:
      "An igloo is a snow house, is a type of shelter built of suitable snow....",
    famous: ["shimla igloo", "mamali igloo", "kullu igloo", "sethan igloo"],
  },
  {
    id:3,
    advanture: "paragliding",
    img: img4,
    discription:
      "The rising hills of Billing provide   of moderate winds make for a good take-off. .",
    famous: ["Manali", "dharamshamla", "Bilaspur", "solang valley"],
  },
  {
    id:4,
    advanture: "rock_Climbing",
    img: img1,
    discription:
      "Rock climbing is a sport in which   natural rock formations or artificial rock walls.",
    famous: ["Shitidhar","Patalsu Peak", "Mount Hanuman","Seven Sisters",],
  },
  {
    id:5,
    advanture: "River_Rafting",
    img: img5,
    discription:
      "Rafting and whitewater rafting are recreational river or body of water",
    famous: [ "Tattapani","Ravi river ","Spiti rivers"," satluj river",],
  },
  {
    id:6,
    advanture: "trekking_treak",
    img: img7,
    discription:
      "Tracking   measuring the direction and magnitude of the momenta of charged particles · ",
    famous: ["Kasol", "Hampta valley", "tosh valley", "parsdhar"],
  },
  {
    id:7,
    advanture: "skiing_himach",
    img: img6 ,
    discription:
      "Skiing is the use of skis to glide on snow.  activity, or a competitive winter sport.",
    famous: ["Solang","Manali ", "Kufri ","Narkanda"],
  },
  {
    id:8,
    advanture: "bungee_jumping",
    img: img8,
    discription:
      "Bungee jumping is an  activity that  structure with an elastic cord attached into participants' feet.",
    famous: ["Solang Nala", "Manali ", "Kufri ", "Narkanda"],
  },
];

const Advanture = () => {
  // const [viewFamous, setViewFamous] = useState(null);

  const cards = Advantures.map((data , index) => {
    return (
     <Card 
      key={data.id}
      {...data}
      //  isExpanded={viewFamous=== index}
      //  expandFamous={() => setViewFamous(index)}
     />
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
