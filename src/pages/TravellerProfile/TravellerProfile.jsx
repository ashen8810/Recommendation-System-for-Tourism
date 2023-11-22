import React from 'react'
import { useState } from 'react';
import {FaCamera,FaPlus} from 'react-icons/fa'
import '../../assets/CSS/Gallery.css';
import '../../components/MySchedules/MySchedules.css';
import '../../assets/CSS/PageStyles.css';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails';
import HotelGallery from '../../components/HotelGallery';
import MySchedules  from '../../components/MySchedules/MySchedules';
import content from '../../components/MySchedules/schedules';
import ProfileImg from 'components/UpdateProfileImage/Profile';
import Profile from 'components/UpdateProfileImage/Profile';
import EditProfilePopup from 'components/EditProfilePopup';

const TavellerProfile = () => {
  
    const[clicked,setIsClicked] = useState(false);
    const[showMore,setShowMore] = useState(true);

    const handleShowMore = () =>{
      setShowMore(!showMore);
    }
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
            <div className='camera' onClick={() =>{
              handleClick();
            }}>
            <span class="material-symbols-outlined edit">
              edit
            </span>
            </div>
            {clicked && <EditProfilePopup onClose={closePopup}/>}
        </div>
        
        
        <div className='Profilebody'>
          <h3 className='topic'>My Schedules</h3>
          <div className="addUploads">
            {showMore? 
            <span class="material-symbols-outlined showMore" onClick={()=>handleShowMore()}>
              expand_more
            </span> : <span class="material-symbols-outlined showMore" onClick={()=>handleShowMore()}>
              expand_less
            </span>
            }

          </div>
        </div>

        {showMore? content.map(content => (
        <MySchedules
          key = {content.key}
          name ={content.name}
          description = {content.Description}
        />

        )): null} 

        
      <div className='Profilebody'>
          <h3 className='topic'>My Uploads</h3> 
      </div>
      <div className="addUploads">
            <span class="material-symbols-outlined">
              add_photo_alternate
            </span>
      </div>

        <HotelGallery/>
      
    </div>
  )
}

export default TavellerProfile;



