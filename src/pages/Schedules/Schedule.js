import React from "react";
import ZoomSlider from "../../components/ZoomSlider/ZoomSlider";
import Navbar from "../../components/Navbar";
import "../../assets/CSS/bootstrap.min.css";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Header from "../../components/Header/Header";
import Button from "@mui/material/Button";
import TravelItinerary from "./SchedulesPart";
import Map from "../../components/Maps/Leaflet";
import { Schedule } from "@mui/icons-material";

const ScheduleSize = () => {
  return (
    <>
      <div
        style={{
          color: "#000",
        }}
      >
        <ZoomSlider />
        <br />
        <br />

        <Box sx={4}>
          <Grid container spacing={2} columns={32}>
            <Grid item xs={15}>
              <TravelItinerary />
            </Grid>
            <Grid item xs={15}>
              <Map />
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="h-50 d-flex align-items-center justify-content-center">
        <Button variant="contained" color="success">
          Mail My Schedule
        </Button>
      </div>
    </>
  );
};

export default ScheduleSize;

// import React from "react";
// import ZoomSlider from "../components/ZoomSlider/ZoomSlider";
// import Navbar from "../components/Navbar";
// import Map from "../components/Maps";

// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Header from "../components/Header/Header"
// import Button from '@mui/material/Button';
// import Footer from "components/Footer/Footer";

// const app = () => {
//   return (
//     <div
//       style={{
//         color: "#000"
//       }}
//     >
//       <Header/>
//       <ZoomSlider/>
//       <Navbar />
//       <ZoomSlider/>
//       <br/><br/>
//       <Footer/>

//       <Box sx={4}>
//       <Grid container spacing={2} columns={32}>
//         <Grid item xs={15}>

//         </Grid>
//         <Grid item xs={15}>
//         <Map/>

//         </Grid>
//       </Grid>
//     </Box>

//       <Button variant="contained" color="success">
//         Mail My Schedule
//       </Button>

//     </div>
//   );
// };

// export default app;
