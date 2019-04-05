import React from "react";
import "./style.css";

function ShuffleCard(props) {
  return (
    <div className="image">
      
          <div className="img-container">
            <img alt={props.name} src={props.image} onClick={props.handleClick} />
          </div> 
          {/* <div className="images" onClick={props.handleClick} >   */}
      {/* </div> */}
    </div>
  );
};

export default ShuffleCard;


{/* <img onClick={this.props.handleClick} src="url" className="" alt="" /> */}