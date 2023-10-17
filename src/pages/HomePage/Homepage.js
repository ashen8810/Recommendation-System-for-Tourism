import React from "react";
import ZoomSlider from "../../components/ZoomSlider/ZoomSlider";
import Navbar from "../../components/Navbar";
import Accomodation from "../../components/Card_Gallery/accomodation/accomodation";
import Grid from "@mui/material/Grid";
import Carousel from "better-react-carousel";
import './HomePage.css'

const app = () => {
  return (
    <div>
      <ZoomSlider />
      <div className="body">
        <br />
    
        <div className="visitingPlace">
        <h2 className="place">Places To Visit</h2>       

          <Carousel cols={5} rows={1} gap={22} loop>
            <Carousel.Item>
              <Accomodation
                id="1"
                image= 'https://media.istockphoto.com/id/1181382649/photo/colombo-sri-lanka-december-05-2018-view-of-the-colombo-city-skyline-with-modern-architecture.jpg?s=612x612&w=0&k=20&c=XIS9COAwhGXkQYqGKHcabMEpc64B_uwT2utuonAoWl0='
                name="Colombo"
                rating="3"
                index="4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Accomodation
                id="1"
                image= "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/02/Sigiriya-rock-fortress-in-Sri-Lanka.jpg"
                name="Seegiriya"
                rating="5"
                index="4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Accomodation
                id="1"
                image ="https://www.tusktravel.com/blog/wp-content/uploads/2022/02/Bentota-Beach-Sri-Lanka2.jpg"
                name="Bentota"
                rating="4"
                index="4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Accomodation
                id="1"
                image = "https://www.tripbibo.com/blog/wp-content/uploads/2021/06/dambulla-cave-temple_srilanka-1024x591.jpg"
                name="Dambulla"
                rating="5"
                index="4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Accomodation
                id="1"
                image = "https://media.istockphoto.com/id/1129078125/photo/the-girl-travels-by-train-to-beautiful-places-beautiful-girl-traveling-by-train-among.jpg?s=612x612&w=0&k=20&c=HCHXlPWt7QQ1rfwGrVZ3_AV37U8YVmQ_7HXYja-dOEY="
                name="Ella"
                rating="2"
                index="4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Accomodation
                id="1"
                image = "https://c.myholidays.com/blog/blog/content/images/2021/06/Trincomalee.jpg"
                name="Hello"
                rating="1"
                index="4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Accomodation
                id="1"
                image="1.jpg"
                name="Hello"
                rating="4"
                index="4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Accomodation
                id="1"
                image="1.jpg"
                name="Hello"
                rating="4"
                index="4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Accomodation
                id="1"
                image="1.jpg"
                name="Hello"
                rating="4"
                index="4"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <h2>Lodgings</h2>
        <div className="Lodgings">
          <Carousel cols={5} rows={1} gap={0} loop>
            <Carousel.Item className="aaa">
              <Accomodation
                id="1"
                image="1.jpg"
                name="Hello"
                rating="4"
                index="4"
              />

            </Carousel.Item>
            <Carousel.Item>
              <Accomodation
                id="1"
                image="1.jpg"
                name="Hello"
                rating="4"
                index="4"
              />
            </Carousel.Item>

          </Carousel>
        </div>

        <h2>Community Stories</h2>
        <div className="stories">
          <Grid container spacing={3}>
            <Accomodation
              id="1"
              image="logo192.png"
              name="Hello"
              rating="1"
              index="4"
            />
            <Accomodation
              id="1"
              image="logo192.png"
              name="Hello"
              rating="4"
              index="4"
            />
            <Accomodation
              id="1"
              image="logo192.png"
              name="Hello"
              rating="4"
              index="4"
            />
            <Accomodation
              id="1"
              image="logo192.png"
              name="Hello"
              rating="4"
              index="4"
            />
            <Accomodation
              id="1"
              image="logo192.png"
              name="Hello"
              rating="4"
              index="4"
            />
            <Accomodation
              id="1"
              image="logo192.png"
              name="Hello"
              rating="4"
              index="4"
            />
          </Grid>
        </div>


      </div>
    </div>


  );
};
export default app;

