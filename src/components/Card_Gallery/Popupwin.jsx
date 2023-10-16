import React, { useState } from 'react';
import StarRating from './StarRating';


const Popupwin = (props) => {
  
const [isOpen,setIsOpen] = useState(true);

const handleClose = () => {
  setIsOpen(false);
  {props.onClose()};
}

  return isOpen ?(
    <div className='PopupWin'>
      <div className='photo'>
        <img id={props.id} src={props.image} alt='bg'/>
        <div onClick={handleClose} className='handleClose'>
        <span class="material-symbols-outlined">
          cancel
        </span>
        </div>
      </div>
      <div className='imageContent'>
        <h3>{props.name}</h3>
        <br></br>
        <h5>Description</h5>
        <div className='description'>
            {props.description}
        </div>
      </div>
      <div className='imageContent review'>
          <div className='review-profile'>
          <span class="material-symbols-outlined">
            person
          </span>
          </div>
          <textarea for='getReview' className='getReview' type='text' placeholder='Your Comments here...'></textarea> 
          <StarRating/>

      </div>
    </div>
  ): null;
}

export default Popupwin;

