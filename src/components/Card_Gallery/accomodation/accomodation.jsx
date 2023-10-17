import React from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight, FaStar } from 'react-icons/fa';



const Accomodation = (props) => {

    const maxRating = 5; // Total number of stars

    const accomodationStyle = {
        backgroundColor: '#ffffff', 
        width: '230px',
        boxSizing: 'border-box',
        borderRadius: '5px',
        marginLeft: '3px',
    };

    const imageStyle = {
        width: '200px',
        height: '120px',
        margin: '15px',
        boxShadow: ' 0px 15px 30px #283d44', 

    }

    const nameStyle = {
        textAlign: 'center',
        margin: '0px',
    }

    const rateStyle = {
        textAlign: 'center',
    }
    const listStyle = {
        margin:'3px'
    }
    return (

        <div className='placeList'>
            <div key={props.id} className='placeCard' style={accomodationStyle}>
                <img src={props.image} alt='Place' className='placeImage' style={imageStyle}></img>
                <div className='placeCard_content'>
                    <h3 className='placeName' style={nameStyle}>{props.name}</h3>
                    <div className='placeRating' style={rateStyle}>
                        {[...Array(maxRating)].map((_, index) => (
                            <FaStar
                                key={index}
                                color={index < props.rating ? 'gold' : 'rgba(0, 0, 0, 0.2)'}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Accomodation
