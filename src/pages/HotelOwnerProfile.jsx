import React from 'react'
import {FaCamera,FaPlus} from 'react-icons/fa'
import '../assets/CSS/HotelGallery.css';
import ProfileDetails from '../components/ProfileDetails/ProfileDetails';
import HotelGallery from '../components/HotelGallery';
import '../assets/CSS/PageStyles.css'
import Profile from 'components/UpdateProfileImage/Profile';

const HotelOwnerProfile = () => {
  return (
    <div className='main'>
        <div className='banner'>
            <div className='pic'>
                <Profile/>
               <FaCamera className='camera-icon'></FaCamera>
            </div>
            <div className='desc'>
                <ProfileDetails/>
            </div>
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



