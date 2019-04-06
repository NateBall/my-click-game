import React from "react";
import "./style.css";

function ShuffleCard(props) {
  return (
    <div className="image">
      
          <div className="img-container" data-clicked={props.clicked}>
            <img id={props.id} alt={props.name} src={props.image} onClick={props.handleClick} />
          </div> 
    </div>
  );
};

export default ShuffleCard;


