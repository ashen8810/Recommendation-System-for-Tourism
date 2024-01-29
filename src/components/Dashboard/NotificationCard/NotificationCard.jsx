import React from 'react'
import css from '../../../assets/CSS/Dashboard/NotificationCard.module.css'
const NotificationCard = (props) => {
  return (
    <div className={css.container}>
                <span>{props.item.description}</span>
    </div>
  )
}

export default NotificationCard