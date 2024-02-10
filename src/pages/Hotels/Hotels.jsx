import React, { useEffect, useState } from 'react'
import { FaArrowCircleRight, FaStar} from 'react-icons/fa'
import images from './hotelDetails'
import '../../assets/CSS/Hotels.css'
import Popupwin from '../../components/Popupwin'
import AddPlaceOpt from 'components/AddPlaceOpt/AddPlaceOpt'
import axios from 'axios'

const noImages = 2;

const Hotels= () => {
    const[next,setNext] = useState(noImages);
    const[openPopup,setOpenPopup] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   

  
useEffect(() => {
    const fetchData = async () => {
        try{
            const[otherDataResponse] = await axios.all([
                axios.get("http://127.0.0.1:8000/api/hotels/hotel-details/"),
            ]);

            setData(otherDataResponse.data.results);
            
            console.log(otherDataResponse.data.results[0]);
        }catch(error){
            setError(error);
        }finally{
            setLoading(false);
        }
    };

    fetchData();
},[]);

    if(loading){
        return <div>loading ..</div>
    }

    if(error){
        return <div>Error: {error.message}</div>;
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

  
    return (
        <>
          <AddPlaceOpt entityType = "hotels"/>
          <div className="placeList">
            {data &&
              data.slice(0, next).map((data, index) => {
                return (
                  <div
                    key={index}
                    className="placeCard"
                    onClick={() => openImagePopup(index)}
                  >
                    <img
                      src={data.image}
                      alt="Hotel"
                      className="placeImage"
                      loading="lazy"
                    />
                    <div className="placeCard_content">
                      <h3 className="placeName">{data.hotelName}</h3>
                      <div className="placeRating">
                        {[...Array(data.ratings)].map((rating, index) => (
                          <FaStar id={index + 1} key={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            {openPopup !== null && (
              <Popupwin
                id={data[openPopup].id}
                name={data[openPopup].hotelName} 
                src={data[openPopup].image}
                description={data[openPopup].description} 
                x={data[openPopup].coordinateX}
                y={data[openPopup].coordinateY}
                onClose={closeImagePopup}
              />
            )}
            {next < data.length && (
              <div className="placeCard view">
                <img
                  src="https://st2.depositphotos.com/1006362/5945/i/950/depositphotos_59454467-stock-photo-sri-lanka.jpg"
                  className="placeImage"
                  alt="placecollage"
                ></img>
                <div className="viewMoreContent">
                  <FaArrowCircleRight
                    className="arrow"
                    onClick={handleMoreImage}
                  ></FaArrowCircleRight>
                  <br></br>
                  <div className="viewMoreText">View More</div>
                </div>
              </div>
            )}
          </div>
        </>
      );
    };
   
export default Hotels;






