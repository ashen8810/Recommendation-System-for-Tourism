import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight, FaStar } from "react-icons/fa";
import "./Accomodation.css";

const Accommodation = (props) => (
    <div className="place-list">
        <div key={props.id} className="place-card">
            <img src={props.image} alt="Place" className="place-image" />
            <div className="place-card-content">
                <h4 className="place-name">{props.name}</h4>
                <div className="place-rating">
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            color={index < props.rating ? 'gold' : 'rgba(0, 0, 0, 0.2)'}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Accommodation;
