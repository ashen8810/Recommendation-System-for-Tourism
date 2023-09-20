

import React from "react";
import ZoomSlider from "../components/ZoomSlider/ZoomSlider";
import Navbar from "../components/Navbar";
import Map from "../components/Maps";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
const im4 = "https://drive.google.com/uc?export=view&id=1qk-44PuO6kt6zVZzDwVCevE5unhuafw1";


const app = () => {
  return (
    <div
      style={{
        color: "#000"
      }}
    >
      <Navbar />
      <ZoomSlider/>
      <br/><br/>


      <Box sx={4}>
      <Grid container spacing={2} columns={32}>
        <Grid item xs={15}>

        </Grid>
        <Grid item xs={15}>
        <Map/>

        </Grid>
      </Grid>
    </Box>
      <Button variant="contained" color="success">
        Mail My Schedule
      </Button>

    </div>
  );
};

export default app;