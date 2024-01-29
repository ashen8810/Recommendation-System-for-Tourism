import React from 'react'
import css from '../../../assets/CSS/Dashboard/Statistics.module.css'
import StatisticsChart from './StatisticsChart'
const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
         <span className={css.title}>Overview Statistics</span>
         <StatisticsChart/>
         
    </div>
  )
}  

export default Statistics