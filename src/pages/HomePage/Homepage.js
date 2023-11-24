import React from "react";
import ZoomSlider from "../../components/ZoomSlider/ZoomSlider";
import Accomodation from "../../components/Card_Gallery/accomodation/accomodation";
import Grid from "@mui/material/Grid";
import Carousel, { Item } from "better-react-carousel";
import { items } from "../../data/mockData";
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

        <div className="stories">
          <h2 className="communityStories">Community Stories</h2>
          <br />
          <Grid container spacing={3}>
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

        <br /><br /><br />

      </div>
    </div>


  );
};
export default app;

