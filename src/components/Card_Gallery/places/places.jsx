<<<<<<< HEAD
import React from 'react'
import {FaArrowCircleLeft, FaArrowCircleRight, FaStar} from 'react-icons/fa'

const Places = (props) => {
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

export default Places
=======
import React, { useState } from 'react'
import { FaArrowCircleRight, FaStar} from 'react-icons/fa'
import images from './data.js';

const noImages = 7;

const Palette = () => {
    const[next,setNext] = useState(noImages);

    const handleMoreImage = () => {
        setNext(next + noImages);
    }

    return (
        <div className='placeList'>
            {images.slice(0,next).map(images =>{
                return(
                    <div key={images.id} className='placeCard'>
                        <img src={images.image} ald='Place' className='placeImage'></img>
                        <div className='placeCard_content'>
                            <h3 className='placeName'>{images.name}</h3>
                            <div className='placeRating'>
                                {[...Array(images.rating)].map((index) => (
                                <FaStar id={index +1} key = {index}/>
                                ))} 
                            </div>
                            <div className='viewMore'>
                                <a href="https://www.tripadvisor.com/Search?searchSessionId=000f2a474c2594d9.ssid&searchNearby=false&geo=293961&q=anuradhapura&sid=A26A78A2F32631F8F337F74481758B021696380461454&blockRedirect=true" title='View on WebSite' target='_blank' rel='noreferrer'>
                                    <span class="material-symbols-outlined" id='viewMoreIcon'>
                                        open_in_new_down
                                    </span>
                                </a>
                            </div>

                        </div>
                    </div>
                );
            })}
            {next < images.length && (
                <div className='placeCard view'>
                    <img src='https://st2.depositphotos.com/1006362/5945/i/950/depositphotos_59454467-stock-photo-sri-lanka.jpg' className='placeImage' alt='placecollage'></img>
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
  
   
export default Palette;

// export const ViewMore =() =>{
//     return(
//         <div className='placeCard'>
//             <FaArrowCircleRight className='arrow'></FaArrowCircleRight>
//             <br></br>
//             <span className='text'> View More</span>

//         </div>
//     )
// }


>>>>>>> 0ece65e6c403352736dc0e655fef8fcf1b89fb6a
