import React, { useState } from "react";
import StarRating from "./StarRating";

import Leaflet2 from "components/Maps/Leaflet2";

const Popupwin = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [dragStart, setDragStart] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragStart({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseMove = (e) => {
    if (dragStart) {
      const offsetX = e.clientX - dragStart.x;
      const offsetY = e.clientY - dragStart.y;

      setPosition((prevPosition) => ({
        x: prevPosition.x + offsetX,
        y: prevPosition.y + offsetY,
      }));

      setDragStart({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  const handleMouseUp = () => {
    setDragStart(null);
  };

  const handleClose = () => {
    setIsOpen(false);
    {
      props.onClose();
    }
  };

  return isOpen ? (
    <div
      className="PopupWin"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div onClick={handleClose} className="handleClose">
        <span class="material-symbols-outlined">cancel</span>
      </div>
      <div className="imageContent">
        <h3>{props.name}</h3>
        <br></br>
        <h5>Description</h5>
        <div className="description">{props.description}</div>
      </div>

      <div className="photo">
        <img id={props.id} src={props.src} alt="bg" />
      </div>

      <div className="imageContent review">
        <div className="review-profile">
          <span class="material-symbols-outlined personIcon">person</span>
          <textarea
            for="getReview"
            className="getPopupReview"
            type="text"
            placeholder="your comments here ..."
          ></textarea>
        </div>
        <div className="starRating">
          <StarRating />
        </div>
      </div>

      <div className="mapSection">
        <Leaflet2 xcoord={props.x} ycoord={props.y} />
      </div>
    </div>
  ) : null;
};

export default Popupwin;
