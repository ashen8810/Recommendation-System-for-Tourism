import React from 'react'
import {FaPhone,FaCamera,FaEnvelope,FaMarker} from 'react-icons/fa'
import ReactD from 'react-dom'
import './TravellerProfile.css';
import './Gallery.css';

export const TavellerProfile = () => {
  return (
    <div className='main'>
        <div className='banner'>
            <div className='banner-img'>
                <div className='profile-pic'>
                        <FaCamera className='camera-icon'></FaCamera>
                </div>
            </div>

            <div className='desc'>
                <input className="profileName" type='text' placeholder='Profilename here'></input>
                <textarea className='description' type='text' placeholder='description...max 50 words'></textarea>
                <div className='contact'>
                    <a href='#' id='call' className='direct-to-call'><div className='contact icon'><FaPhone className='phone-icon'></FaPhone>{' '}Phone</div></a> 
                    <a href='#' id='mail' className='direct-to-mail'><div className='contact icon'><FaEnvelope className='email-icon'></FaEnvelope>{' '}Email</div></a>
                </div>
            </div>
             
        </div>

      

      
    </div>
  )
}

export const Schedules = (props) => {
    return(
        <div key={props.id} className='schedules'>
            <div className='schedule-content'>
                <div className='tick-icon'>
                    <span className="material-symbols-outlined">
                        select_check_box
                    </span>
                </div>
                <div className='content-text'>
                    <h3 className='schedule-name'>{props.name}</h3>
                    <p className='schdule-description'>{props.description}</p>
                </div>
            </div>
        </div>
    )

}

const images = [
  { src: 'hotels/public/images/photo-1566296314736-6eaac1ca0cb9.jpg', alt: 'Image 1' },
  { src: 'image2.jpg', alt: 'Image 2' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image4.jpg', alt: 'Image 4' },
  { src: 'image5.jpg', alt: 'Image 5' }
];

export const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          className="gallery__item"
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}




