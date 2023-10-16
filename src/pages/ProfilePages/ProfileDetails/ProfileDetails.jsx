import React from 'react'
import './ProfileDetails.css';

const ProfileDetails = () => {
  return (
    <div className='detailsCard'>
      <h1>James Bond</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Convallis posuere morbi leo urna molestie at elementum.</p>
      <div className='contact-info'>
          <div className='call'>
              <span class="material-symbols-outlined">
                  call
              </span>
          </div>
          <div className='email'>
            <span class="material-symbols-outlined">
              email
            </span>
          </div>
          <div className='website'>
          <span class="material-symbols-outlined">
            language
          </span>
          </div>

      </div>
    </div>
  )
}

export default ProfileDetails
