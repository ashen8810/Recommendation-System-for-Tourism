import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Schedule.css";

const TravelItinerary = () => {
  const [itineraryData, setItineraryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = 1; // Assuming the user ID is 1
        const url = `http://127.0.0.1:8000/api/schedules/user-schedules/?user_id=${userId}`;
        const response = await axios.get(url);
        setItineraryData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array, so it runs only once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const days = itineraryData.map((day) => ({
    day: day.day,
    plans: day.plans,
    hotel: day.hotel.length > 0 ? day.hotel[0] : null,
  }));

  return (
    <div className="travel-itinerary">
      <h2 className="itinerary-heading">Travel Itinerary</h2>
      {days.map((day, index) => (
        <div className="day" key={index}>
          <h3 className="day-heading">{day.day}</h3>
          <ul className="plans-list">
            {day.plans.map((plan, planIndex) => (
              <li key={planIndex} className="plan-item">
                {plan}
              </li>
            ))}
          </ul>
          <h4 className="hotel-heading">Hotel for {day.day}</h4>
          {day.hotel ? (
            <p className="hotel-info">{day.hotel}</p>
          ) : (
            <p className="hotel-info">No hotel booked for {day.day}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TravelItinerary;
