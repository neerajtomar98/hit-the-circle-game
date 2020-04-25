import React from "react";
import "./componentStyles.sass";

const Popup = props => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.hidePopup}>
          &times;
        </span>
        <p>Your final score is :&nbsp;{props.score}</p>
      </div>
    </div>
  );
};

export default Popup;
