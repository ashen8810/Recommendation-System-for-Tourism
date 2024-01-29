import DashCardGallery from '../../../components/Dashboard/DashCardGallery/DashCardGallery'
import Statistics from '../../../components/Dashboard/Statistics/Statistics'
import css from '../../../assets/CSS/Dashboard/Dashboard.module.css'
import React from 'react'

const Dashboard = () => {
  return (
    <div className={css.container}>
      <div className={css.dashboard}>
          <div className={`${css.dashboardHead} theme-container`}>
              <div className={css.head}>
                 <span>Dashboard</span>
              </div>
              <DashCardGallery/>
          </div>
          
           <Statistics/>
      </div>

      {/* <div className={css.orders}>
            orders
      </div> */}
    </div>
  )
}

export default Dashboard