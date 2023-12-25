import { useState } from "react";
import axios from "axios";
import Topbar from "./pages/global/Topbar";
// import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import Bar from "./pages/bar";
import Form from "./pages/form";
import Line from "./pages/line";
import Pie from "./pages/pie";
import Geography from "./pages/geography";
import { CssBaseline, Switch, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./pages/calendar/calendar";
import Delete from "./pages/delete";
import Ban from "./pages/ban";
import Advertisment from "./pages/advertisment";
import "./App.css";
import Preferences from "./pages/Preferences/Preferences";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Schedule from "./pages/Schedules/Schedule";
import Login from "pages/Login/Login";
import Homepage from "./pages/HomePage/Homepage";
import { Home } from "@mui/icons-material";
import HomeSideBar from "./components/HomeSideBar";
import { ProSidebarProvider, useProSidebar } from "react-pro-sidebar";
import { Sidebar, Menu, MenuItem, SubMenu, uaeProSidebar } from "react-pro-sidebar";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
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
import PageNotFound from './components/PageNotFound';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import "../src/assets/CSS/HomeSideBar.css";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { useSetState } from "@mantine/hooks";
import { icon } from "leaflet";
import Map from "./components/Maps/Maps";
import SearchBar from './components/SearchBar/SearchBar';
import { ToastContainer } from "react-toastify";
import VerifyEmail from "pages/verify/VerifyEmail";
import ContactUs from "./pages/ContactUs/ContactUs";
import Emergency from "./pages/Emergency/Emergency";
import FAQ from "./pages/FAQ/FAQ";
import About from "./pages/About/About";

function App() {
  return (
    <div>
    

      <Header />
<ToastContainer/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/otp/verify' element={<VerifyEmail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='Dashboard' element={<Dashboard />} />
        <Route path='Traveler Profile' element={<TavellerProfile />} />
        <Route path='Hotel Owner' element={<HotelOwnerProfile />} />
        <Route path='Hotels' element={<Hotels />} />
        <Route path='Places' element={<Places />} />
        <Route path='Schedules' element={<Schedule />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Emergency' element={<Emergency />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/About' element={<About />} />

      </Routes>
      

      <Footer />

    </div>


  );
}


export default App;
