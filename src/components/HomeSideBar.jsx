// import React from 'react';
// import '../assets/CSS/HomeSideBar.css';
// import {Menu} from "antd/dist/antd";
// import { BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom';
// import { HomeOutlined} from '@mui/icons-material';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined';
// import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
// import Hotels from 'pages/Hotels/Hotels';
// import Places from 'pages/places/places';
// import HotelOwnerProfile from 'pages/HotelOwnerProfile';
// import TavellerProfile from 'pages/TravellerProfile/TravellerProfile';
// import Dashboard from 'pages/dashboard';
// import Homepage from '../pages/HomePage/Homepage';
// import PageNotFound from './PageNotFound';

// const HomeSideBar = ({isVisible,toggleSidebar}) => {
//   const navigate = useNavigate()
  
//   return (
//     <div className='main'>
//       <Menu
//         onClick = {({key}) => {
//           if(key === "SignOut"){

//           }else{
//             navigate(key);
//           }
//         }
      
      
//       }

//       defaultSelectedKeys = {[window.location.pathname]}
//         items ={[
//             {label: "Home",key:"/", icon:<HomeOutlined/>},
//             {label: "ProfilePage",key:"/ProfilePage", icon:<AccountCircleOutlinedIcon/>,
//              children: [
//               {label:"Traveler Profile", key:"/TravellerProfile"},
//               {label:"Hotel Owner Profile", key: "/HotelOwnerProfile"}
//              ] },
//             {label: "Traveler Profile",key:"/TravelerProfile",icon:<AccountCircleOutlinedIcon/>},
//             {label: "Hotels",key:"/Hotels",icon:<LuggageOutlinedIcon/>},
//             {label: "Places",key:"/Places",icon:<PlaceOutlinedIcon/>},
//             {label: "Dashboard",key:"/Dashboard",icon:<AdminPanelSettingsOutlinedIcon/>},
//             {label: "Sign out",key:"/SignOut",icon:< LogoutOutlinedIcon />,danger:true},   
             
//         ]}
//       ></Menu>
//       <Content/>
//     </div>
//   )
// }

// function Content() {
//     return <div>
//       <Routes>
//         <Route path='/' element={<Homepage/>}></Route>
//         <Route path='/HotelOwnerProfile' element={<HotelOwnerProfile/>}></Route>
//         <Route path='/TravellerProfile' element={<TavellerProfile/>}></Route>

      
//         <Route path='/Hotels' element={<div>Hotels</div>}></Route>

//         <Route path='/Places' element={<Places/>}></Route>
//         <Route path='/Dashboard' element={<Dashboard/>}></Route>

//         <Route path='*' element={<PageNotFound/>}></Route>

//       </Routes>
//     </div>
// }
// export default HomeSideBar
import { ProSidebarProvider, useProSidebar } from "react-pro-sidebar";
import { Sidebar,Menu,MenuItem,SubMenu,uaeProSidebar } from "react-pro-sidebar";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import React from 'react'
import { BrowserRouter, Link ,Route,Routes} from "react-router-dom";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import HikingIcon from '@mui/icons-material/Hiking';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Hotels from 'pages/Hotels/Hotels';
import Places from 'pages/places/places';
import HotelOwnerProfile from 'pages/HotelOwnerProfile';
import TavellerProfile from 'pages/TravellerProfile/TravellerProfile';
import Dashboard from 'pages/dashboard';
import Homepage from '../pages/HomePage/Homepage';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';

import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { useState } from "react";
import { useSetState } from "@mantine/hooks";
import { icon } from "leaflet";

const HomeSideBar = (onClose) => {
  const {collapseSidebar} = useProSidebar();
  const[isOpen,setIsOpen] = useSetState(false);

  const handleClick =e =>{
    collapseSidebar();
    setIsOpen(onClose);
  }

  return (
    <div style={{ display: "flex", height: "100vh" }} className="maindiv">
    <Sidebar className="sidebarbody">
      <Menu>
        <MenuItem 
        component={<Link to='Navigate' className="link"/>}
        className="menu1"
        onClick={() =>{
          handleClick();
        }}>
          {setIsOpen ? (
            <>
              <OpenInFullIcon/>
            </>
          ):
            <>
              <CloseFullscreenIcon/>
            </>
          }
          
         
        </MenuItem>

        <MenuItem 
        icon={<HomeIcon/>}
        component={<Link to="/" className="link"/>}>
          HomePage
        </MenuItem>

        <MenuItem 
        icon={<AccountCircleRoundedIcon/>}
        component={<Link to="Profile Page" className="link"/>}
        > Profile Pages </MenuItem>

        <SubMenu label="ProfilePages">
          <MenuItem icon={<HikingIcon/>}
          component={<Link to="Traveler Profile" className="link"/>}
          > Traveller Profile </MenuItem>

          <MenuItem icon={<BusinessCenterIcon/>}
          component={<Link to="Hotel Owner" className="link"/>}
          > Hotel Owner Profile</MenuItem>
        </SubMenu>

        <MenuItem icon={<AdminPanelSettingsOutlinedIcon/>}
        component={<Link to="Dashboard" className="link"/>}
        > Dahsboard</MenuItem>

        <MenuItem icon={<LogoutRoundedIcon/>}
        component={<Link to="Hotels" className="link"/>}
        > Hotels </MenuItem>

        <MenuItem icon={<PlaceOutlinedIcon/>}
        component={<Link to="Places" className="link"/>}
        > Places</MenuItem>
        <MenuItem> Logout </MenuItem>
      </Menu>
    </Sidebar>
    {/* <section>
      <Routes>
        <Route path='/' element ={<Homepage/>}/>
        <Route path='Dashboard' element ={<Dashboard/>}/>
        <Route path='Traveler Profile' element ={<TavellerProfile/>}/>
        <Route path='Hotel Owner' element ={<HotelOwnerProfile/>}/>
        <Route path='Hotels' element ={<Hotels/>}/>
        <Route path='Places' element ={<Places/>}/>
        {/* <Route path='*' element ={<PageNotFound/>}/> */}

      {/* </Routes>
    </section> */} 
    </div>
  )
}

export default HomeSideBar

