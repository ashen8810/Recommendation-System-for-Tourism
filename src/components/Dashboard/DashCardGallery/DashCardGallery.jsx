import React, { useState, useEffect } from 'react'
import css from '../../../assets/CSS/Dashboard/DashCardGallery.module.css'
// import {cardsData} from '../../../data/mockData'
import DashCard from '../DashCard/DashCard'
import axios from 'axios'

const DashCardGallery = () => {

  const [cardData,setCardData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const [view1Data, view2Data, view3Data, view4Data] = await Promise.all([
          axios.get('http://localhost:8000/api/user/user-count/'),
          axios.get('http://localhost:8000/api/places/place-count/'),
          axios.get('http://localhost:8000/api/hotels/hotel-count/'),
          axios.get('http://localhost:8000/api/schedules/schedule-count/')
        ]);

        
        setCardData([
          { title: view1Data.data.title, amount: view1Data.data.amount },
          { title: view2Data.data.title, amount: view2Data.data.amount },
          { title: view3Data.data.title, amount: view3Data.data.amount },
          { title: view4Data.data.title, amount: view4Data.data.amount }
          
        ]);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    
    <div className={css.cards}>
      {
            cardData.map((card, index)=> (
              <DashCard card={card}/>
              
            ))
      }
    </div>
  )
}

export default DashCardGallery