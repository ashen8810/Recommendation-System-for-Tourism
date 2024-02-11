import React from "react";
import ZoomSlider from "../../components/ZoomSlider/ZoomSlider";
import Accomodation from "../../components/Card_Gallery/accomodation/accomodation";
import ReviewCard from "../../components/Card_Gallery/communityStories/reviewCard";
import FirstAdvertisement from "../../components/Advertisement/FirstAdvertisement ";
import SecondAdvertisement from "../../components/Advertisement/SecondAdvertisement";
import Grid from "@mui/material/Grid";
import Carousel, { Item } from "better-react-carousel";
import { items } from "../../data/mockData";
import { review } from "../../data/mockData";
import { useState, useEffect } from "react";
import axios from "axios";
import "./HomePage.css";
const noImages = 10;
const App = () => {
  const [next, setNext] = useState([]);
  const [data, setPlaceData] = useState([]);
  //const [hotelData, setHotelData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [placesData, hotelsData] = await axios.all([
  //         axios.get("http://127.0.0.1:8000/api/places/place-details/"),
  //         // axios.get("http://127.0.0.1:8000/api/places/hotel-details/"), // add hotels api here
  //       ]);
  //       setPlaceData(placesData.data.results);
  //       // setHotelData(hotelsData.data.results);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  // const handleMoreImage = () => {
  //   setNext(next + noImages);
  // };
  return (
    <div>
      <ZoomSlider />
      <div className="body">
        <br />
        <br />
        <div className="visitingPlace">
          <h2 className="place">Places To Visit</h2>
          <br />
          <Carousel cols={4} rows={1} gap={0} loop>
            {data.map((data, index) => (
              <Carousel.Item key={data.id}>
                <Accomodation
                  id={data.id}
                  image={data.image}
                  name={data.placeName}
                  rating={data.ratings}
                  index={data.index}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <br />
        <br />
        <br />
        <FirstAdvertisement />
        <br />
        <br />
        <div className="Lodgings">
          <h2 className="lodging">Lodgings</h2>
          <br />
          <Carousel cols={4} rows={1} gap={2} loop>
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
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="last_container">
          <div className="stories">
            <h2 className="communityStories">Community Stories</h2>

            <br />
            <br />

            <Grid container spacing={3}>
              {review.map((review, index) => (
                <Grid review>
                  <Item>
                    <ReviewCard
                      id={review.id}
                      image={review.image}
                      name={review.name}
                      discription={review.discription}
                    />
                  </Item>
                </Grid>
              ))}
            </Grid>
          </div>

          <div className="secondAdd">
            <SecondAdvertisement />
          </div>
        </div>

        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
export default App;
