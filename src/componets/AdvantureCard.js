import React , {useState} from "react";

export default function Data(card) {
  const [showPlaces, setshowPlaces] = useState(true);
  function showFamousPlaces() {
    setshowPlaces((prev) => !prev);
  }

  const famousP = card.famous;



  return (
    <div className="Whole_card">
      <div className="main_Card">
        <div>
          <img className="imgCont" src={card.img} alt="cardImg" />
        </div>
        <div className="textCont">
        <h1 className="adv">{card.advanture}</h1>
          {showPlaces ? (
            <div>
            <p className="subHeading" >discription</p>
              <p className="dis">{card.discription}</p>
              <button className="famousBtn" onClick={showFamousPlaces}>
                famous places
              </button>
            </div>
          ) : (
            <div className="placesContainer" >
              <p className="subHeading" >famous Places</p>
              <div className="famousplace" >
              {famousP.map(item => <div className="">{item}</div> )}
              </div>
                <button className="famousBtn" onClick={showFamousPlaces}>discription</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
