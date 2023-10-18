import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight, FaStar } from "react-icons/fa";
import "./Accomodation.css";
// const Accomodation = (props) => {
//   return (
//     <div className="placeList">
//       <div key={props.id} className="placeCard">
//         <img src={props.image} alt="Place" className="placeImage"></img>
//         <div className="placeCard_content">
//           <h3 className="placeName">{props.name}</h3>
//           <div className="placeRating">
//             {[...Array(props.rating)].map((index) => (
//               <FaStar id={index + 1} key={index} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Accomodation;

const Accommodation = (props) => (
  <div className="place-list">
    <div key={props.id} className="place-card">
      <img src={props.image} alt="Place" className="place-image" />
      <div className="place-card-content">
        <h3 className="place-name">{props.name}</h3>
        <div className="place-rating">
          {[...Array(props.rating)].map((index) => (
            <FaStar id={index + 1} key={index} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Accommodation;
