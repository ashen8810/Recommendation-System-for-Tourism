import React from "react";
import ZoomSlider from "../../components/ZoomSlider/ZoomSlider";
import Accomodation from "../../components/Card_Gallery/accomodation/accomodation";
import ReviewCard from "../../components/Card_Gallery/communityStories/reviewCard";
import FirstAdvertisement from "../../components/Advertisement/FirstAdvertisement ";
import Grid from "@mui/material/Grid";
import Carousel, { Item } from "better-react-carousel";
import { items } from "../../data/mockData";
import { review } from "../../data/mockData";

import './HomePage.css'

const app = () => {
  return (
    <div>

      <ZoomSlider />
      <div className="body">
        <br />

        <div className="visitingPlace">
          <h2 className="place">Places To Visit</h2>
          <br />
          <Carousel cols={4} rows={1} gap={0} loop>
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

        <br /><br/>

        <FirstAdvertisement />

        <br/><br/>

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

        <div className="stories">
          <h2 className="communityStories">Community Stories</h2>
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

        <br /><br /><br />

      </div>
    </div>


  );
};
export default app;

