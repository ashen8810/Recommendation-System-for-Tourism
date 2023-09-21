import React from 'react'
import {FaArrowCircleLeft, FaArrowCircleRight, FaStar} from 'react-icons/fa'



const Accomodation = (props) => {
  return (
    
    <div className='placeList'>
        <div key={props.id} className='placeCard'>
            <img src={props.image} alt='Place' className='placeImage'></img>
            <div className='placeCard_content'>
                <h3 className='placeName'>{props.name}</h3>
                <div className='placeRating'>
                    {[...Array(props.rating)].map((index) => (
                        <FaStar id={index +1} key = {index}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accomodation
