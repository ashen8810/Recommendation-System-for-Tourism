import React from 'react'
import {FaCamera,FaPlus} from 'react-icons/fa'
import './Gallery.css';
import './MySchedules.css'
import './ProfileDetails/ProfileDetails'
import ProfileDetails from './ProfileDetails/ProfileDetails';
import HotelGallery from './HotelGallery';


const HotelOwnerProfile = () => {
  return (
    <div className='main'>
        <div className='banner'>
            <div className='profile-pic'>
               <FaCamera className='camera-icon'></FaCamera>
            </div>
            <div className='desc'>
                <ProfileDetails/>
            </div>
        </div>
 
      <div>
        <div className='topic'>
          <h2>My Hotels</h2>
          <span class="material-symbols-outlined">
            arrow_drop_down
          </span>
          
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



