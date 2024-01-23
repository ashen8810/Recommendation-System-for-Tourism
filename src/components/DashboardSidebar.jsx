import React, { useState } from 'react'
import {Sidebar,Menu,MenuItem} from 'react-pro-sidebar'
// import './dasboardsidebar.css'
import { BrowserRouter, Link ,Route,Routes} from "react-router-dom";
import Create from '../pages/create/Create.jsx';
import {Box, IconButton, Typography} from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import PersonOffOutlinedIcon from '@mui/icons-material/PersonOffOutlined';
import PersonRemoveAlt1OutlinedIcon from '@mui/icons-material/PersonRemoveAlt1Outlined';

// const Item = ({ title, to, icon, selected, setSelected }) => {
    
//     return (
//       <MenuItem
//         active={selected === title}
//         style={{
//           color: "#141414"
//         }}
//         onClick={() => setSelected(title)}
//         icon={icon}
//       >
//         <Typography>{title}</Typography>
//         <Link to={to} />
//       </MenuItem>
//     );
//   };

const DashboardSideBar = () => {

const [isCollapsed,setIsCollapsed] = useState(false);
const [selected, setSelected] = useState("Dashboard");


  return (
    
        <div>
          <Sidebar collapsed={isCollapsed} className='sidebar' style={{ background: '#3da58a', height: '100vh' }} >
              <Menu iconshape="square">

                <MenuItem 
                    onClick={()=>setIsCollapsed(!isCollapsed)}
                    icon ={isCollapsed? <MenuOutlinedIcon/>: undefined}
                    style={{
                        margin: "10px 0 20px 0",
                        color: "#141414"
                    }}
                >

                    {!isCollapsed &&(
                        <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                            <Typography variant='h5'>
                                Travel
                            </Typography>
                            <IconButton  onClick={()=>setIsCollapsed(!isCollapsed)}>
                                <MenuOutlinedIcon/>
                            </IconButton>
                        </Box>
                    )}
                    
                </MenuItem>
                {/*user*/}
                {!isCollapsed && (
                    <Box mb="25px">
                        <Box display="flex" justifyContent= "center" alignItems="center" >
                            <img
                                alt="profile-user"
                                width="100px"
                                height="100px"
                                src={'../../assets/useer.png'}
                                style={{cursor: 'pointer', borderRadius:"50%"}}
                            />
                        </Box>

                        <Box textAlign="center" >
                             <Typography variant="h2" color="#f2f0f0" fontWeight="bold" sx={{m: "10px 0 0 0"}}>User</Typography>
                        </Box>
                    </Box>
               )}



                {/* Menu Items */}
               <Box paddingLeft={isCollapsed? undefined : "10%"}>

                            {/* <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            /> */}

                            <MenuItem 
                            icon={<HomeOutlinedIcon/>}
                            component={<Link to="/Dashboard" className="link"/>}>
                            Dashboard
                            </MenuItem>

                            <Typography 
                            
                            color="#3d3d3d"
                            sx={{m: "15px 0 5px 20px"}}>
                              Admin
                            </Typography>

                            {/* <Item
                            title="Users"
                            to="/"
                            icon={<PeopleOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            /> */}

                            <MenuItem 
                            icon={<PeopleOutlineOutlinedIcon/>}
                            component={<Link to="/" className="link"/>}>
                            Users
                            </MenuItem>

{/*                             
                            <Item
                            title="Mail"
                            to="/"
                            icon={<EmailOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            /> */}


                            <MenuItem 
                            icon={<EmailOutlinedIcon/>}
                            component={<Link to="/" className="link"/>}>
                            Email
                            </MenuItem>

                             <Typography 
                            color="#3d3d3d"
                            sx={{m: "15px 0 5px 20px"}}>
                              Accounts
                            </Typography>

                            {/* <Item
                            title="Create"
                            to="/Create"
                            icon={<PersonAddAlt1OutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                            /> */}

                            <MenuItem 
                            icon={<PersonAddAlt1OutlinedIcon/>}
                            component={<Link to="/Create" className="link"/>}>
                            Create
                            </MenuItem>

                            
                            {/* <Item
                            title="Ban"
                            to="/Ban"
                            icon={<PersonOffOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            /> */}

                            <MenuItem 
                            icon={<PersonOffOutlinedIcon/>}
                            component={<Link to="/Ban" className="link"/>}>
                            Ban
                            </MenuItem>

{/*                             
                            <Item
                            title="Delete"
                            to="/Delete"
                            icon={<PersonRemoveAlt1OutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            /> */}


                            <MenuItem 
                            icon={<PersonRemoveAlt1OutlinedIcon/>}
                            component={<Link to="/Delete" className="link"/>}>
                            Delete
                            </MenuItem>

                            {/*                             
                            <Item
                            title="Logout"
                            to="/"
                            icon={<LogoutOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            /> */}

                        <MenuItem 
                                icon={<LogoutOutlinedIcon/>}
                                component={<Link to="/" className="link"/>} style={{margin:"20px 0 0 0"}}>
                                Logout
                         </MenuItem>
                            

               </Box>
              </Menu>
          </Sidebar>
    
    
        </div>
      
  )
}

export default DashboardSideBar