// Layout.jsx
import React from 'react';
import DashboardSideBar from './DashboardSidebar.jsx';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar.jsx';

const Layout=()=>
{
    return(
        <Box display="flex" width="100%" height="100%">
            <DashboardSideBar/>
            <Box flexGrow={1} style={{backgroundColor: "#1d2634"}}>
                <Topbar/>
                <Outlet/>
            </Box>
        </Box>
    )
}

export default Layout;
