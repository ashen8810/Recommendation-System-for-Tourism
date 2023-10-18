import React from "react";
import "./Schedule.css";
class TravelItinerary extends React.Component {
  render() {
    const day1Plans = [
      "Visit Museum",
      "Explore Local Market",
      "Lunch at a local restaurant",
      "Sightseeing tour",
    ];

    const day2Plans = [
      "Hiking in the mountains",
      "Picnic by the lake",
      "Dinner at a fancy restaurant",
      "Stargazing",
    ];

    const hotels = ["Day 1: Hotel A", "Day 2: Hotel B"];

    return (
      <div className="travel-itinerary">
        <h2 className="itinerary-heading">Travel Itinerary</h2>
        <div className="day">
          <h3 className="day-heading">Day 1</h3>
          <ul className="plans-list">
            {day1Plans.map((plan, index) => (
              <li key={index} className="plan-item">
                {plan}
              </li>
            ))}
          </ul>
          <h4 className="hotel-heading">Hotel for Day 1</h4>
          <p className="hotel-info">{hotels[0]}</p>
        </div>
        <div className="day">
          <h3 className="day-heading">Day 2</h3>
          <ul className="plans-list">
            {day2Plans.map((plan, index) => (
              <li key={index} className="plan-item">
                {plan}
              </li>
            ))}
          </ul>
          <h4 className="hotel-heading">Hotel for Day 2</h4>
          <p className="hotel-info">{hotels[1]}</p>
        </div>
      </div>
    );
  }
}

export default TravelItinerary;
