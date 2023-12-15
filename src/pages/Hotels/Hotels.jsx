import React, { useState } from 'react'
import { FaArrowCircleRight, FaStar} from 'react-icons/fa'
import images from './hotelDetails'
import '../../assets/CSS/Hotels.css'
import Popupwin from '../../components/Popupwin'
import AddPlaceOpt from 'components/AddPlaceOpt/AddPlaceOpt'


const noImages = 7;

const Hotels= () => {
    const[openMap,setOpenMap] = useState(null);
    const[next,setNext] = useState(noImages);
    const[openPopup,setOpenPopup] = useState(null);
    const [openUpdatePlacePopup,setUpdatePlacePopup] = useState(null);

    const viewOnMap = (imageIndex) =>{
        setOpenMap(imageIndex);
    }

    const handleMoreImage = () => {
        setNext(next + noImages);
    }

    const openImagePopup = (imageIndex) =>{
        setOpenPopup(imageIndex);
    }

    const closeImagePopup = () => {
        setOpenPopup(null);
    }

    const closeUpdatePlacePopup = () =>{
        setUpdatePlacePopup(null);
    }

    return (
        <>
        <div className='addPlaceMain'>
      
        <AddPlaceOpt/>
           
       
        </div>
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
                            <div className='viewMore' onClick={() => viewOnMap(index)}>
                                <span class="material-symbols-outlined" id={images.id}>
                                    open_in_new_down
                                </span>  
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
                    x = {images[openPopup].x}
                    y = {images[openPopup].y}
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
        </>
    );
    

};
  
   
export default Hotels;






