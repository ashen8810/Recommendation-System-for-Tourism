import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaStar } from "react-icons/fa";
import Popupwin from "../../components/Popupwin";
import "../../assets/CSS/Hotels.css";
import AddPlaceOpt from "components/AddPlaceOpt/AddPlaceOpt";
import axios from "axios";

const Hotels = () => {
  const noImages = 6;
  const [next, setNext] = useState(null);
  const [openPopup, setOpenPopup] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/hotels/hotel-details/"
        );
        setData(response.data.results);
        setNext(response.data.next); // Set the 'next' URL for pagination
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchMoreData = async () => {
    try {
      const response = await axios.get(next); // Use the 'next' URL for pagination
      setData((prevData) => [...prevData, ...response.data.results]); // Concatenate the new data with the existing data
      setNext(response.data.next); // Update the 'next' URL for pagination
    } catch (error) {
      setError(error);
    }
  };

  const handleMoreImage = () => {
    fetchMoreData();
  };

  const openImagePopup = (imageIndex) => {
    setOpenPopup(imageIndex);
  };

  const closeImagePopup = () => {
    setOpenPopup(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <AddPlaceOpt />
      <div className="placeList">
        {data &&
          data.map((hotel, index) => {
            return (
              <div
                key={index}
                className="placeCard"
                onClick={() => openImagePopup(index)}
              >
                <img
                  src={hotel.image}
                  alt="Place"
                  className="placeImage"
                  loading="lazy"
                />
                <div className="placeCard_content">
                  <h3 className="placeName">{hotel.hotelName}</h3>
                  <div className="placeRating">
                    {[...Array(hotel.ratings)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        {openPopup !== null && (
          <Popupwin
            id={data[openPopup].hotelId}
            name={data[openPopup].hotelName}
            src={data[openPopup].image}
            description={data[openPopup].description}
            x={data[openPopup].coordinateX}
            y={data[openPopup].coordinateY}
            onClose={closeImagePopup}
          />
        )}
        {next && (
          <div className="placeCard view">
            <img
              src="https://st2.depositphotos.com/1006362/5945/i/950/depositphotos_59454467-stock-photo-sri-lanka.jpg"
              className="placeImage"
              alt="placecollage"
            />
            <div className="viewMoreContent">
              <FaArrowCircleRight className="arrow" onClick={handleMoreImage} />
              <br />
              <div className="viewMoreText">View More</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Hotels;