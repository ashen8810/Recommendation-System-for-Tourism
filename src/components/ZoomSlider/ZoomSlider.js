import React from "react";
// JSX
import HeroSlider, { Overlay, Slide } from "hero-slider";

import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";
import { Button } from "@mui/material";
import { ClassNames } from "@emotion/react";
import Schedule from "../../pages/Schedules/Schedule";
import { Link, useNavigate } from "react-router-dom";
import { ColorModeContext } from "theme";
import "../../assets/CSS/planYourTripButton.css";
import img1 from "./image1.jpg";
import img2 from "./image2.jpg";
import img3 from "./image3.jpg";
import img4 from "./image4.jpg";
import { toast } from 'react-toastify';

// Images
const im1 = img1;
const im2 = img2;
const im3 = img3;
const im4 = img4;

export default function BasicSlider() {
  const navigate = useNavigate();
  const handleSubmit=()=>{
    let user = JSON.parse(localStorage.getItem('user')) 
    if(!user){
      navigate('/login')
      toast.error("you should be logged in first.")
    }
    else{
      navigate("/CreateSchedules")
    }
  }
  return (
    <>
      <HeroSlider
        height={"80vh"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        <Overlay>
          <Wrapper>
            <Title>Discover Amazing Places In </Title>
            <Subtitle>Sri Lanka</Subtitle>
            <button
              className="plantrip"
              onClick={handleSubmit}
            >
              
              Plan your trip
            </button>
          </Wrapper>
        </Overlay>

        <Slide
          background={{
            backgroundImageSrc: im1,
          }}
        />

        <Slide
          background={{
            backgroundImageSrc: im2,
          }}
        />

        <Slide
          background={{
            backgroundImageSrc: im3,
          }}
        />

        <Slide
          shouldRenderMask
          background={{
            backgroundImageSrc: im4,
          }}
        />
      </HeroSlider>
    </>
  );
}
// import React from "react";
// // JSX
// import HeroSlider, { Overlay, Slide } from "hero-slider";

// import Wrapper from "../UI/Wrapper/Wrapper";
// import Title from "../UI/Title/Title";
// import Subtitle from "../UI/Subtitle/Subtitle";

// // Images
// const im1 = "https://drive.google.com/uc?export=view&id=1OdPPRaP4aLAHumJaJgCZGjQC2aq1zwrH";
// const im2 = "https://drive.google.com/uc?export=view&id=1f3acDsb9QDtBqSJB4ueMPrRNHXOBRFgK";
// const im3 = "https://drive.google.com/uc?export=view&id=1ZRTeLtzxpTWHMXVRteOMQ48jHUo13ocY";
// const im4 = "https://drive.google.com/uc?export=view&id=1qk-44PuO6kt6zVZzDwVCevE5unhuafw1";

// export default function BasicSlider() {
//   return (
//     <>
//     <HeroSlider
//       height={"100vh"}
//       autoplay
//       controller={{
//         initialSlide: 1,
//         slidingDuration: 500,
//         slidingDelay: 100,
//         onSliding: (nextSlide) =>
//           console.debug("onSliding(nextSlide): ", nextSlide),
//         onBeforeSliding: (previousSlide, nextSlide) =>
//           console.debug(
//             "onBeforeSliding(previousSlide, nextSlide): ",
//             previousSlide,
//             nextSlide
//           ),
//         onAfterSliding: (nextSlide) =>
//           console.debug("onAfterSliding(nextSlide): ", nextSlide)
//       }}
//     >
//       <Overlay>
//         <Wrapper>
//           <Title>Discover Amazing Places In </Title>
//           <Subtitle>
//           Sri Lanka
//           </Subtitle>
//         </Wrapper>
//       </Overlay>

//       <Slide
//         background={{
//           backgroundImageSrc: im1
//         }}
//       />

//       <Slide
//         background={{
//           backgroundImageSrc: im2
//         }}
//       />

//       <Slide
//         background={{
//           backgroundImageSrc: im3
//         }}
//       />

//       <Slide
//         shouldRenderMask
//         background={{
//           backgroundImageSrc: im4
//         }}
//       />

//     </HeroSlider>
//     </>
//   );
// }
