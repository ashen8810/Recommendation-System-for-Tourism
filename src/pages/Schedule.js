

import React from "react";
import ZoomSlider from "../components/ZoomSlider/ZoomSlider";
import Map from "../components/Maps";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const app = () => {
  return (
    <div
      style={{
        color: "#000"
      }}
    >
      <ZoomSlider/>


      <Box sx={4}>
      <Grid container spacing={2} columns={32}>
        <Grid item xs={15}>

        </Grid>
        <Grid item xs={15}>
        <Map/>

        </Grid>
      </Grid>
    </Box>

     
    </div>
  );
};

export default app;