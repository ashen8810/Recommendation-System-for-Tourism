

import React from "react";
import ZoomSlider from "../components/ZoomSlider/ZoomSlider";

const app = () => {
  return (
    <div
      style={{
        color: "#FFF"
      }}
    >
      <ZoomSlider />

     
    </div>
  );
};



import React from "react";
import ZoomSlider from "../components/ZoomSlider/ZoomSlider";
import Navbar from "../components/Navbar";
import Accomodation from '../components/Card_Gallery/Accomodation/Accomodation';
import Grid from '@mui/material/Grid';
import Carousel from 'better-react-carousel'


const app = () => {
  return (
    <div
      style={{
        color: "#000",
        marginLeft:'5%',
        marginRight:'5%'

      }}
    >
      <Navbar />
      <ZoomSlider />

      <br>
      </br>
     <h2>Places To Visit</h2>
      <Carousel cols={1} rows={1} gap={0} loop>
      <Carousel.Item>
      <Accomodation id="1" image="logo192.png" name='Hello' rating='4' index='4' />
        
      </Carousel.Item>
      <Carousel.Item>
      <Accomodation id="1" image="logo192.png" name='Hello' rating='4' index='4' />
      
      </Carousel.Item>
      <Carousel.Item>
      <Accomodation id="1" image="logo192.png" name='Hello' rating='4' index='4' />
      
      </Carousel.Item>
      <Carousel.Item>
      <Accomodation id="1" image="logo192.png" name='Hello' rating='4' index='4' />

      </Carousel.Item>
    </Carousel>
      
    <br>
      </br>
     <h2>Lodgings</h2>
      <Carousel cols={1} rows={1} gap={0} loop>
      <Carousel.Item>
      <Accomodation id="1" image="logo192.png" name='Hello' rating='4' index='4' />
        
      </Carousel.Item>
      <Carousel.Item>
      <Accomodation id="1" image="logo192.png" name='Hello' rating='4' index='4' />
      
      </Carousel.Item>
      <Carousel.Item>
      <Accomodation id="1" image="logo192.png" name='Hello' rating='4' index='4' />
      
      </Carousel.Item>
      <Carousel.Item>
      <Accomodation id="1" image="logo192.png" name='Hello' rating='4' index='4' />

      </Carousel.Item>
    </Carousel>
     

     <br></br>

     <h2>Community Stories</h2>
     <Grid container spacing={3}>
     <Accomodation id="1" image="logo192.png" name='Hello' rating='4' index='4' />
     <Accomodation id="1" image="logo192.png" name='Hello' rating='4' index='4' />
     <Accomodation id="1" image="logo192.png" name='Hello' rating='4' index='4' />
     <Accomodation id="1" image="logo192.png" name='Hello' rating='4' index='4' />
     <Accomodation id="1" image="logo192.png" name='Hello' rating='4' index='4' />
     <Accomodation id="1" image="logo192.png" name='Hello' rating='4' index='4' />

     </Grid>
    </div>
  );
};

