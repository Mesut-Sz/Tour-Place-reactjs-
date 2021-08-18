import React from "react";
import { place } from "../../helpers/Data";
import "./Cards.css";

function Cards() {
  
  return (
      <div className="card-container">

          {place.map((card,i) => {
              return ( 
                <div className="cards" key={i}>
                    <div className="title">
                        <h2>{card.placeName}</h2>
                    </div>
                    <img src={card.placeImg} alt={card.placeName}/>
                    <div className="card-over">
                        <p className="text">{card.placeText}</p>

                    </div>
                </div>

              )
          })}



      </div>
  
  );
}

export default Cards;



{/* <div className="card-container">
<div className="cards">
  <div className="title">
    <h2>{place[0].placeName}</h2>
  </div>
  <img src={place[0].placeImg} alt={place[0].placeName} />
  <div className="card-over">
      <p className="text">{place[0].placeText}</p>
  </div>
</div>
</div> */}