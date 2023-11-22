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

const HomeSideBar = (props,onClose) => {
  //const {collapseSidebar} = useProSidebar();
  const[collapsed, setcollapsed] = useState(false);
  const[isOpen,setIsOpen] = useSetState(false);

  const handleClick =() =>{
      setcollapsed(!collapsed);
  }

  const handleOpen = () =>{
    setIsOpen(true);
  }
  return (
    <div style={{ display: "flex", height: "100vh" }} className="maindiv">
    <Sidebar collapsed = {collapsed} className="sidebarbody">
      <Menu>
        <MenuItem 
        className="menu1"
        onClick={() =>{
          handleClick();
        }}>
          {collapsed? (
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

        {props.type == 'traveller'?
          <MenuItem icon={<HikingIcon/>}
          component={<Link to="Traveler Profile" className="link"/>}
          > My Profile </MenuItem>  
          :
          props.type == 'Hotel owner'?
          <MenuItem icon={<BusinessCenterIcon/>}
          component={<Link to="Hotel Owner" className="link"/>}
        > My Profile</MenuItem>
        :
        <MenuItem icon={<AdminPanelSettingsOutlinedIcon/>}
        component={<Link to="Dashboard" className="link"/>}
        > Dahsboard</MenuItem>
        }

{/* 
        <MenuItem icon={<HikingIcon/>}
        component={<Link to="Traveler Profile" className="link"/>}
        > Traveller Profile </MenuItem>

        <MenuItem icon={<BusinessCenterIcon/>}
        component={<Link to="Hotel Owner" className="link"/>}
        > Hotel Owner Profile</MenuItem>
        

        <MenuItem icon={<AdminPanelSettingsOutlinedIcon/>}
        component={<Link to="Dashboard" className="link"/>}
        > Dahsboard</MenuItem>*/}

        <MenuItem icon={<LuggageOutlinedIcon />}
        component={<Link to="Hotels" className="link"/>}
        > Hotels </MenuItem> 

        <MenuItem icon={<PlaceOutlinedIcon/>}
        component={<Link to="Places" className="link"/>}
        > Places</MenuItem>

         <MenuItem icon={<LogoutRoundedIcon/>}
        component={<Link to="" className="link"/>}
        > Log Out</MenuItem>

      
        
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

