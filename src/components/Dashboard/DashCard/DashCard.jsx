import React from 'react'
import css from '../../../assets/CSS/Dashboard/DashCard.module.css'
import CountUp from 'react-countup';
const Card = (props) => {
  return (
   <div className={css.card}>
        <div className={css.cardHead}>
           <span>{props.card.title}</span>
        </div>

        <div className={css.cardAmount}>
          <span>
            <CountUp end={props.card.amount} start={props.card.amount-50}  duration={6}  suffix='+'/>
          </span>
        </div>
   </div>
  )
}

export default Card