import React from 'react';
import {FaArrowCircleLeft, FaArrowCircleRight, FaStar} from 'react-icons/fa';

import React, { useState } from 'react'
import { FaArrowCircleRight, FaStar} from 'react-icons/fa'
import images from './hotelDetails.js';
import Popupwin from './Popupwin.jsx';

const noImages = 7;

const Hotels= () => {
    const[next,setNext] = useState(noImages);
    const[openPopup,setOpenPopup] = useState(null);

    const handleMoreImage = () => {
        setNext(next + noImages);
    }

    const openImagePopup = (imageIndex) =>{
        setOpenPopup(imageIndex);
    }

    const closeImagePopup = () => {
        setOpenPopup(null);
    }

    return (
        <div className='placeList'>
            {images.slice(0,next).map((images,index) =>{
                return(
                    <div key={index} className='placeCard' onClick={() => openImagePopup(index)}>
                             
                        <img src={images.image} alt='Place' className='placeImage'></img>
                        <div className='placeCard_content'>
                            <h3 className='placeName'>{images.name}</h3>
                            <div className='placeRating'>
                                {[...Array(images.rating)].map((index) => (
                                <FaStar id={index +1} key = {index}/>
                                ))} 
                            </div>
                            <div className='viewMore'>
                                <a href="https://www.tripadvisor.com/Search?searchSessionId=000f2a474c2594d9.ssid&searchNearby=false&geo=293961&q=anuradhapura&sid=A26A78A2F32631F8F337F74481758B021696380461454&blockRedirect=true" title='View on WebSite' target='_blank' rel='noreferrer'>
                                    <span class="material-symbols-outlined" id={images.id}>
                           
                                        open_in_new_down
                                    </span>
                                </a>
                            </div>

                        </div>
                    </div>
                );
            })}

            {openPopup !== null && (
                <Popupwin 
                    id = {images[openPopup].id}
                    name = {images[openPopup].name}
                    src = {images[openPopup].image}
                    description ={images[openPopup].description}
                    onClose = {closeImagePopup}
                    />
            )}

           

            {next < images.length && (
                <div className='placeCard view'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRER2NOLbnnbnwh2EOzSOf4bOLVp1Rpxm15YA&usqp=CAU' className='placeImage' alt='placecollage'></img>
                    <div className='viewMoreContent'>
                        <FaArrowCircleRight className='arrow' onClick={handleMoreImage}></FaArrowCircleRight> 
                        <br></br>
                        <div className='viewMoreText'>View More</div>
                    </div>
                    
                </div>
            )}
        </div>
    );
    

};
  
   
export default Hotels;

// export const ViewMore =() =>{
//     return(
//         <div className='placeCard'>
//             <FaArrowCircleRight className='arrow'></FaArrowCircleRight>
//             <br></br>
//             <span className='text'> View More</span>

//         </div>
//     )
// }




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
