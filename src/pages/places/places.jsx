// import React, { useState, useEffect } from "react";
// import { FaArrowCircleRight, FaStar } from "react-icons/fa";
// import Popupwin from "../../components/Popupwin";
// import "../../assets/CSS/Hotels.css";
// import AddPlaceOpt from "components/AddPlaceOpt/AddPlaceOpt";
// import axios from "axios";

// const noImages = 4;

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
//         const [otherDataResponse] = await axios.all([
//           axios.get("http://127.0.0.1:8000/api/places/place-details/"),
//         ]);

//         setData(otherDataResponse.data.results);
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
//     console.log("Current next:", next);
//     console.log("Data length:", data.length);
//     setNext((prevNext) => prevNext + noImages);
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
//         {data &&
//           data.slice(0, next).map((data, index) => {
//             return (
//               <div
//                 key={index}
//                 className="placeCard"
//                 onClick={() => openImagePopup(index)}
//               >
//                 <img
//                   src={data.image}
//                   alt="Place"
//                   className="placeImage"
//                   loading="lazy"
//                 />
//                 <div className="placeCard_content">
//                   <h3 className="placeName">{data.placeName}</h3>
//                   <div className="placeRating">
//                     {[...Array(data.ratings)].map((rating, index) => (
//                       <FaStar id={index + 1} key={index} />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         {openPopup !== null && (
//           <Popupwin
//             id={data[openPopup].placeId}
//             name={data[openPopup].placeName} // Make sure to access the correct data from 'images' array
//             src={data[openPopup].image}
//             description={data[openPopup].description} // Similarly, check the structure for correct access
//             x={data[openPopup].coordinateX}
//             y={data[openPopup].coordinateY}
//             onClose={closeImagePopup}
//           />
//         )}
//         {next < data.length && (
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

const Places = () => {
  const noImages = 6;
  const [next, setNext] = useState(null);
  const [openPopup, setOpenPopup] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/places/place-details/"
        );
        setData(response.data.results);
        setNext(response.data.next); // Set the 'next' URL for pagination
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchMoreData = async () => {
    try {
      const response = await axios.get(next); // Use the 'next' URL for pagination
      setData((prevData) => [...prevData, ...response.data.results]); // Concatenate the new data with the existing data
      setNext(response.data.next); // Update the 'next' URL for pagination
    } catch (error) {
      setError(error);
    }
  };

  const handleMoreImage = () => {
    fetchMoreData();
  };

  const openImagePopup = (imageIndex) => {
    setOpenPopup(imageIndex);
  };

  const closeImagePopup = () => {
    setOpenPopup(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <AddPlaceOpt entityType="places" />
      <div className="placeList">
        {data &&
          data.map((place, index) => {
            return (
              <div
                key={index}
                className="placeCard"
                onClick={() => openImagePopup(index)}
              >
                <img
                  src={place.image}
                  alt="Place"
                  className="placeImage"
                  loading="lazy"
                />
                <div className="placeCard_content">
                  <h3 className="placeName">{place.placeName}</h3>
                  <div className="placeRating">
                    {[...Array(place.ratings)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        {openPopup !== null && (
          <Popupwin
            id={data[openPopup].placeId}
            name={data[openPopup].placeName}
            src={data[openPopup].image}
            description={data[openPopup].description}
            x={data[openPopup].coordinateX}
            y={data[openPopup].coordinateY}
            onClose={closeImagePopup}
          />
        )}
        {next && (
          <div className="placeCard view">
            <img
              src="https://st2.depositphotos.com/1006362/5945/i/950/depositphotos_59454467-stock-photo-sri-lanka.jpg"
              className="placeImage"
              alt="placecollage"
            />
            <div className="viewMoreContent">
              <FaArrowCircleRight className="arrow" onClick={handleMoreImage} />
              <br />
              <div className="viewMoreText">View More</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Places;
