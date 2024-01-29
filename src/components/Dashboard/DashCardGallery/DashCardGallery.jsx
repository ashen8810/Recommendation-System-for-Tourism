import React from 'react'
import css from '../../../assets/CSS/Dashboard/DashCardGallery.module.css'
import {cardsData} from '../../../data/mockData'
import DashCard from '../DashCard/DashCard'
const DashCardGallery = () => {
  return (
    
    <div className={css.cards}>
      {
            cardsData.map((card, index)=> (
              <DashCard card={card}/>
            ))
      }
    </div>
  )
}

export default DashCardGallery