import React from "react";
import "./BuildControl.css";

const BuildControls = (props) => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      {/* <button className="Less" onClick={props.lessIngredient}>
        Less
      </button> */}
      <button className="More" onClick={props.addIngredient}>
        More
      </button>
    </div>
  );
};

export default BuildControls;
