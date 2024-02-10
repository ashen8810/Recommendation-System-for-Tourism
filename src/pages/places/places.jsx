// import React, { useState, useEffect } from "react";
// import { FaArrowCircleRight, FaStar } from "react-icons/fa";
// import Popupwin from "../../components/Popupwin";
// import "../../assets/CSS/Hotels.css";
// import AddPlaceOpt from "components/AddPlaceOpt/AddPlaceOpt";
// import axios from "axios";

// const noImages = 7;

// const Places = () => {
//   const [next, setNext] = useState(noImages);
//   const [openPopup, setOpenPopup] = useState(null);
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [images, setImages] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [placesResponse, otherDataResponse] = await axios.all([
//           axios.get("http://127.0.0.1:8000/api/places/images/"),
//           axios.get("http://127.0.0.1:8000/api/places/places/"),
//         ]);

//         setImages(placesResponse.data);
//         setData(otherDataResponse.data);
//         console.log(otherDataResponse.data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   const handleMoreImage = () => {
//     setNext(next + noImages);
//   };

//   const openImagePopup = (imageIndex) => {
//     setOpenPopup(imageIndex);
//   };

//   const closeImagePopup = () => {
//     setOpenPopup(null);
//   };

//   return (
//     <>
//       <AddPlaceOpt />
//       <div className="placeList">
//         {images &&
//           images.slice(0, next).map((image, index) => {
//             return (
//               <div
//                 key={index}
//                 className="placeCard"
//                 onClick={() => openImagePopup(index)}
//               >
//                 <img
//                   src={image.image}
//                   alt="Place"
//                   className="placeImage"
//                   loading="lazy"
//                 />
//                 <div className="placeCard_content">
//                   <h3 className="placeName">{data.placeName}</h3>
//                   <div className="placeRating">
//                     {[...Array(data.rating)].map((rating, index) => (
//                       <FaStar id={index + 1} key={index} />
//                     ))}
//                   </div>
//                   {/* Rest of your JSX */}
//                 </div>
//               </div>
//             );
//           })}
//         {openPopup !== null && (
//           <Popupwin
//             id={images[openPopup].id}
//             name={data[openPopup].placeName} // Make sure to access the correct data from 'images' array
//             src={images[openPopup].image}
//             description={data[openPopup].description} // Similarly, check the structure for correct access
//             x={data[openPopup].x}
//             y={data[openPopup].y}
//             onClose={closeImagePopup}
//           />
//         )}
//         {next < images.length && (
//           <div className="placeCard view">
//             <img
//               src="https://st2.depositphotos.com/1006362/5945/i/950/depositphotos_59454467-stock-photo-sri-lanka.jpg"
//               className="placeImage"
//               alt="placecollage"
//             ></img>
//             <div className="viewMoreContent">
//               <FaArrowCircleRight
//                 className="arrow"
//                 onClick={handleMoreImage}
//               ></FaArrowCircleRight>
//               <br></br>
//               <div className="viewMoreText">View More</div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Places;
import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaStar } from "react-icons/fa";
import Popupwin from "../../components/Popupwin";
import "../../assets/CSS/Hotels.css";
import AddPlaceOpt from "components/AddPlaceOpt/AddPlaceOpt";
import axios from "axios";

const noImages = 4;

const Places = () => {
  const [next, setNext] = useState(noImages);
  const [openPopup, setOpenPopup] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [otherDataResponse] = await axios.all([
          axios.get("http://127.0.0.1:8000/api/places/place-details/"),
        ]);

        setData(otherDataResponse.data.results);
        console.log(otherDataResponse.data.results[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleMoreImage = () => {
    setNext(next + noImages);
  };

  const openImagePopup = (imageIndex) => {
    setOpenPopup(imageIndex);
  };

  const closeImagePopup = () => {
    setOpenPopup(null);
  };

  return (
    <>
      <AddPlaceOpt entityType = "places" />
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
                  alt="Place"
                  className="placeImage"
                  loading="lazy"
                />
                <div className="placeCard_content">
                  <h3 className="placeName">{data.placeName}</h3>
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
            id={data[openPopup].placeId}
            name={data[openPopup].placeName} // Make sure to access the correct data from 'images' array
            src={data[openPopup].image}
            description={data[openPopup].description} // Similarly, check the structure for correct access
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

export default Places;
