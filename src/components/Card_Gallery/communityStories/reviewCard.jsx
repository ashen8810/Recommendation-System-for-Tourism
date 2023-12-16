import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight, FaStar } from "react-icons/fa";
import "./reviewCard.css";

const reviewCard = (props) => (
    <div className="review-list">
        <div key={props.id} className="review-card">
            <div className="review-card-content">
                <h4 className="user-name">{props.name}</h4>
                <img src={props.image} alt="Review" className="review-image" />
                <p className="review">{props.discription}</p>
            </div>
        </div>
    </div>
);

export default reviewCard;
