// import React from "react";
// import ZoomSlider from "../components/ZoomSlider/ZoomSlider";
// import Navbar from "../components/Navbar";
// import Accomodation from "../components/Card_Gallery/accomodation/accomodation";
// import Grid from "@mui/material/Grid";
// import Carousel from "better-react-carousel";

// const Homepage = () => {
//   return (
//     <div
//       style={{
//         color: "#000",
//         marginLeft: "2%",
//         marginRight: "2%",
//         backgroundColor: "#a6d6ce",
//       }}
//     >
//       <ZoomSlider />

//       <br></br>
//       <h2>Places To Visit</h2>
//       <Carousel cols={5} rows={1} gap={0} loop>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//       </Carousel>

//       <br></br>
//       <h2>Lodgings</h2>
//       <Carousel cols={5} rows={1} gap={0} loop>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <Accomodation
//             id="1"
//             image="1.jpg"
//             name="Hello"
//             rating="4"
//             index="4"
//           />
//         </Carousel.Item>
//       </Carousel>

//       <br></br>

//       <h2>Community Stories</h2>
//       <Grid container spacing={3}>
//         <Accomodation
//           id="1"
//           image="logo192.png"
//           name="Hello"
//           rating="1"
//           index="4"
//         />
//         <Accomodation
//           id="1"
//           image="logo192.png"
//           name="Hello"
//           rating="4"
//           index="4"
//         />
//         <Accomodation
//           id="1"
//           image="logo192.png"
//           name="Hello"
//           rating="4"
//           index="4"
//         />
//         <Accomodation
//           id="1"
//           image="logo192.png"
//           name="Hello"
//           rating="4"
//           index="4"
//         />
//         <Accomodation
//           id="1"
//           image="logo192.png"
//           name="Hello"
//           rating="4"
//           index="4"
//         />
//         <Accomodation
//           id="1"
//           image="logo192.png"
//           name="Hello"
//           rating="4"
//           index="4"
//         />
//       </Grid>
//     </div>
//   );
// };
// export default Homepage;

import React from "react";
import ZoomSlider from "../components/ZoomSlider/ZoomSlider";
import Navbar from "../components/Navbar";
import Accomodation from "../components/Card_Gallery/accomodation/accomodation";
import Grid from "@mui/material/Grid";
import Carousel, { Item } from "better-react-carousel";
import { items } from "./../data/mockData";
const Homepage = () => {
  return (
    <div
      style={{
        color: "#000",
        marginLeft: "5%",
        marginRight: "5%",
      }}
    >
      <Navbar />
      <ZoomSlider />

      <br></br>
      <h2>Places To Visit</h2>
      <Carousel cols={5} rows={1} gap={0} loop>
        {items.map((item, index) => (
          <Carousel.Item key={item.id}>
            <Accomodation
              id={item.id}
              image={item.image}
              name={item.name}
              rating={item.rating}
              index={item.index}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <br></br>
      <h2>Lodgings</h2>
      <Carousel cols={5} rows={1} gap={0} loop>
        {items.map((item, index) => (
          <Carousel.Item key={item.id}>
            <Accomodation
              id={item.id}
              image={item.image}
              name={item.name}
              rating={item.rating}
              index={item.index}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <br></br>
      <br></br>

      <h2>Community Stories</h2>
      <br></br>
      <br></br>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid item>
            <Item>
              <Accomodation
                id={item.id}
                image={item.image}
                name={item.name}
                rating={item.rating}
                index={item.index}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Homepage;
