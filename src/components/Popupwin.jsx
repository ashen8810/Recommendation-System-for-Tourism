import React, { useState } from 'react';
import StarRating from './StarRating';

import Leaflet from 'components/Maps/Leaflet';

const Popupwin = (props) => {


const [isOpen,setIsOpen] = useState(true);


const handleClose = () => {
  setIsOpen(false);
  {props.onClose()};
}

  return isOpen ?(
    <div className='PopupWin'>
      <div onClick={handleClose} className='handleClose'>
        <span class="material-symbols-outlined">
          cancel
        </span>
      </div>
      <div className='imageContent'>
        <h3>{props.name}</h3>
        <br></br>
        <h5>Description</h5>
        <div className='description'>
            {props.description}
        </div>
      </div>

      <div className='photo'>
        <img id={props.id} src={props.src} alt='bg'/>
        <Leaflet
        xcoord = {props.x}
        ycoord = {props.y}/>
      </div>
      <div className='imageContent review'>
          <div className='review-profile'>
            
            <span class="material-symbols-outlined personIcon">
              person
            </span>
            <input  for='getReview' className='getReview' type='text' ></input> 
          </div>
          
          <StarRating/>

      </div>
    </div>
  ): null;
}

export default Popupwin;

