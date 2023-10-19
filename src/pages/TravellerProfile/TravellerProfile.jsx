import React from 'react'
import {FaCamera,FaPlus} from 'react-icons/fa'
import '../../assets/CSS/Gallery.css';
import '../../components/MySchedules/MySchedules.css';
import '../../assets/CSS/PageStyles.css';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails';
import HotelGallery from '../../components/HotelGallery';
import MySchedules  from '../../components/MySchedules/MySchedules';
import content from '../../components/MySchedules/schedules';
import ProfileImg from 'components/UpdateProfileImage/Profile';

const TavellerProfile = () => {
  return (
    <div className='main'>
        <div className='banner'>
            <div className='pic'>
              <ProfileImg/>
               <FaCamera className='camera-icon'></FaCamera>
            </div>
            <div className='desc'>
                <ProfileDetails/>
            </div>
        </div>

        
       <div className='topic'>
          <h2>My Schedules</h2>
          <div className='advertisments'>
          
        </div>
        </div> 

        {content.map(content => (
        <MySchedules
          key = {content.key}
          name ={content.name}
          description = {content.Description}
        />

      ))} 
      <div>
        <div className='topic'>
          <h2>My Uploads</h2>  
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

export default TavellerProfile;



