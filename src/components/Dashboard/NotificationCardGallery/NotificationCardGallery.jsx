import React from 'react'
import { NotificationData } from '../../../data/mockData'
import NotificationCard from '../NotificationCard/NotificationCard'

const NotificationCardGallery = () => {
  return (
    <div className="container" >
      {
           NotificationData.map((item,index)=>(
             <NotificationCard item={item}/>
           ))
      }
        
    </div>
  )
}

export default NotificationCardGallery