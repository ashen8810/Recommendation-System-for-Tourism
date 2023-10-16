import React from 'react'
import {FaCamera,FaPlus} from 'react-icons/fa'
import './Gallery.css';
import './MySchedules.css'
import './ProfileDetails/ProfileDetails'
import ProfileDetails from './ProfileDetails/ProfileDetails';
import Gallery from './Gallery';
import MySchedules  from './MySchedules';
import content from './schedules'

const TavellerProfile = () => {
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

        
       <div className='topic'>
          <h2>My Schedules</h2>
          <span class="material-symbols-outlined">
            arrow_drop_down
          </span>
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

        <Gallery/>
      
    </div>
  )
}

export default TavellerProfile;



