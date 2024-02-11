import React, { useState ,useEffect } from 'react'
import { NotificationData } from '../../../data/mockData'
import NotificationCard from '../NotificationCard/NotificationCard'
import axios from 'axios'


const NotificationCardGallery = () => {

  const [NotificationData,setNotificationData]=useState([]);
  useEffect(() => {
    const fetchNotificationData = async () => {
      

    try {
        
          const response = await axios.get('http://localhost:8000/api/user/notification/')
          console.log(response.data)
          setNotificationData(response.data.results);
         
    } catch (error) {
        console.error('Error fetching user data:', error.message);
    }
    };

    fetchNotificationData() 
}, []);

  return (
    <div className="container" >
      {
            NotificationData && NotificationData.map((item,index)=>(
             <NotificationCard item={item.content}/>
           ))
          
           
      }

      {console.log(NotificationData)}
        
    </div>
  )
}

export default NotificationCardGallery