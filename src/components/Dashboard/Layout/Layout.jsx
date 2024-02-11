// Layout.jsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import css from '../../../assets/CSS/Dashboard/Layout.module.css'
import moment from 'moment/moment'
import { BiSearch } from "react-icons/bi";
import Sidebar from '../Sidebar/Sidebar.jsx';
import { MdOutlineNotificationsNone } from "react-icons/md";
import NotificationCardGallery from '../NotificationCardGallery/NotificationCardGallery.jsx';

// const Layout=()=>
// {
//     return(
//         <Box display="flex" width="100%" height="100%">
//             <DashboardSideBar/>
//             <Box flexGrow={1} style={{backgroundColor: "#1d2634"}}>
//                 <Topbar/>
//                 <Outlet/>
//             </Box>
//         </Box>
//     )
// }

// export default Layout;



const Layout = () => {
    let user = JSON.parse(localStorage.getItem('user')) 
    // const userId=user.userId;
    const {pathName}= useLocation()
    const [visible,setVisible] = useState(false)
  return (
    <div className={css.container}>
        <Sidebar/>
        {pathName === "/" && <Navigate to="/dashboard"/>}
        <div className={css.dashboard}>
            <div className={css.topBaseGradients}>
                <div className='gradient-red'> </div>
                <div className="gradient-orange"></div>
                <div className="gradient-blue"></div>

            </div>

            <div className={css.header}>
                <span>{moment().format("dddd,Do MMM YYYY")}</span>
                <div className={css.searchBar}>
                     <BiSearch size={20}/>
                     <input type='text' placeholder='search'/>
                </div>

                <div className={css.profile}>
                    {/* <img src="#" alt='profile image'/> */}
                    <div className={css.details}>
                        <span>{user.userName}</span>
                        <span>{user.email}</span>
                    </div>
                    <div className={css.notification}>
                        <MdOutlineNotificationsNone size={30} onClick={()=>{
                            setVisible(true)
                        }}/>
                    </div>
                </div>
            </div>
           
            <div className={css.content}>
                <Outlet/>
            </div>
        </div>

        { visible &&(
                <div className={css.notificationOverlay} onClick={()=>{setVisible(false)}}>
                        
                        <NotificationCardGallery/>
                </div>
                    
        )}
    </div>
  )
}

export default Layout