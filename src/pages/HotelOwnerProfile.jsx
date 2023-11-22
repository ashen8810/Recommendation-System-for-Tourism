import React from 'react'
import { useState } from 'react';
import {FaCamera,FaPlus} from 'react-icons/fa'
import '../assets/CSS/HotelGallery.css';
import ProfileDetails from '../components/ProfileDetails/ProfileDetails';
import HotelGallery from '../components/HotelGallery';
import '../assets/CSS/HotelGallery.css';
import '../assets/CSS/PageStyles.css'
import Profile from 'components/UpdateProfileImage/Profile';
import EditProfilePopup from 'components/EditProfilePopup';

const HotelOwnerProfile = () => {
  const[clicked,setIsClicked] = useState(false);

  const handleClick =()=>{
    setIsClicked(!clicked);
  }
  
  const closePopup=()=>{
    setIsClicked(false);
  }
  return (
    <div className='main'>
        <div className='banner'>
            <div className='pic'>
                <Profile/>
               
            </div>
            <div className='desc'>
                <ProfileDetails/>
                
            </div>
            <FaCamera className='camera'
            onClick={() =>{
              handleClick();
            }}>
            </FaCamera>
            {clicked && <EditProfilePopup onClose={closePopup}/>}
        </div>
 
      <div>
        <div className='topic'>
          <h2>My Hotels</h2>
        </div>
        <div className='plus-div'>
        <span class="material-symbols-outlined">
            add_photo_alternate
        </span>
        </div>
      </div>

        <HotelGallery/>
      
    </div>
  )
}

export default HotelOwnerProfile;



