// import { useEffect, useState, useRef } from "react";
// import "../components/AddPlaceOpt/addPlaceOpt.css";
// import { useNavigate } from "react-router-dom";
// import Map from "./Maps/Leaflet";
// import axios from "axios";
// import MapWithCoordinates from "./Maps/Locate";
// const UploadPlaces = () => {
//   const navigate = useNavigate();
//   const inputRef = useRef(null);
//   const [isOpen, setIsOpen] = useState(true);
//   const [isSelected, setSelected] = useState(false);

//   const [placeName, setPlaceName] = useState("");
//   const [placeImage, setPlaceImage] = useState("");
//   const [placeDescription, setPlaceDescription] = useState("");
//   const [placeOpenTime, setPlaceOpenTime] = useState("");
//   const [placeCloseTime, setPlaceCloseTime] = useState("");
//   const [placeContact, setPlaceContact] = useState("");
//   const [placeLocation, setPlaceLocation] = useState("");
//   const [placeWebsite, setPlaceWebsite] = useState("");
//   const [placeCategory, setPlaceCategory] = useState("");

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   const handleClick = () => {
//     inputRef.current.click();
//     let postData = {
//       placeName: placeName,
//       placeImage: placeImage,
//       placeDescription: placeDescription,
//       placeLocationX: localStorage.getItem("coords"),
//       placeCategory: placeCategory,
//     };

//     alert(postData);

//     axios
//       .post("http://127.0.0.1:8000/api/places/places/", postData)
//       .then((response) => {
//         // Handle successful response
//         console.log("Response:", postData);

//         console.log("Response:", response.data);
//       })
//       .catch((error) => {
//         // Handle error
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className="placeInput">
//           <div className="handleClose">
//             <span class="material-symbols-outlined" onClick={handleClose}>
//               cancel
//             </span>
//           </div>
//           <div className="adplaceForm">
//             <form action="/Places">
//               <input
//                 className={`${
//                   isSelected ? "ChooseFile" : "NofileChosen"
//                 }mt-2  w-full file:hidden   border border-placeholderText py-2 pl-2 cursor-pointer focus:border-transparent  focus:ring-main
//                 block
//                 font-small
//                 bg-white bg-clip-padding`}
//                 type="file"
//                 ref={inputRef}
//                 name="placeImage"
//                 onChange={(e) => e.target.files[0]}
//               />

//               <label className="addPlaceFormLabel">
//                 Name of the Place :<br></br>
//                 <input
//                   type="text"
//                   className="placeNameInput"
//                   placeholder="Name of the Place ..."
//                   name="placeNameInput"
//                   onChange={(e) => e.target.value}
//                 />
//               </label>

//               <label className="addPlaceFormLabel">
//                 Website :<br></br>
//                 <input
//                   type="text"
//                   className="placeNameInput"
//                   placeholder="Website of the Place ..."
//                   name="placeWebsite"
//                   onChange={(e) => e.target.value}
//                 />
//               </label>

//               <label className="addPlaceFormLabel">
//                 Select a Category:
//                 <br></br>
//                 <select value={placeCategory} onChange={(e) => e.target.value}>
//                   <option value="">Select ...</option>
//                   <option value="Option1">Indoor</option>
//                   <option value="Option1">Outdoor</option>
//                   <option value="Option1">Hike</option>
//                   <option value="Option1">Cultural</option>
//                   <option value="Option1">Adventure</option>
//                 </select>
//               </label>

//               <label className="SelectLocation">
//                 Select the location :
//                 <MapWithCoordinates />
//               </label>

//               <label className="SelectLocation">
//                 Open Time :<br></br>
//                 <input type="time" className="OpenTime" name="OpenTime"></input>
//               </label>

//               <label className="SelectLocation">
//                 Close Time :<br></br>
//                 <input
//                   type="time"
//                   className="OpenTime"
//                   name="CloseTime"
//                 ></input>
//               </label>

//               <label className="SelectLocation">
//                 Contact Number:
//                 <br></br>
//                 <input
//                   type="text"
//                   className="ContactNumber"
//                   name="ContactNumber"
//                   onChange={(e) => e.target.value}
//                 ></input>
//               </label>

//               <button type="submit" onClick={handleClick} className="uploadbtn">
//                 Upload
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default UploadPlaces;
import React, { useEffect, useState, useRef } from "react";
import "../components/AddPlaceOpt/addPlaceOpt.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MapWithCoordinates from "./Maps/Locate";

const UploadPlaces = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isSelected, setSelected] = useState(false);

  const [placeName, setPlaceName] = useState("");
  const [placeImage, setPlaceImage] = useState("");
  const [placeDescription, setPlaceDescription] = useState("");
  const [placeOpenTime, setPlaceOpenTime] = useState("");
  const [placeCloseTime, setPlaceCloseTime] = useState("");
  const [placeContact, setPlaceContact] = useState("");
  const [placeLocation, setPlaceLocation] = useState("");
  const [placeWebsite, setPlaceWebsite] = useState("");
  const [placeCategory, setPlaceCategory] = useState("");

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    inputRef.current.click();
    let postData = {
      placeName1: placeName,
      placeImage1: placeImage,
      placeDescription1: placeDescription,
      placeLocationX1: localStorage.getItem("coords"),
      placeCategory1: placeCategory,
    };
    alert(postData.placeCategory1);
    axios
      .post("http://127.0.0.1:8000/api/places/places/", postData)
      .then((response) => {
        // Handle successful response
        console.log("Response:", postData);
        console.log("Response:", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };

  return (
    <>
      {isOpen && (
        <div className="placeInput">
          <div className="handleClose">
            <span className="material-symbols-outlined" onClick={handleClose}>
              cancel
            </span>
          </div>
          <div className="adplaceForm">
            <form action="/Places">
              <input
                className={`${
                  isSelected ? "ChooseFile" : "NofileChosen"
                } mt-2 w-full file:hidden border border-placeholderText py-2 pl-2 cursor-pointer focus:border-transparent focus:ring-main block font-small bg-white bg-clip-padding`}
                type="file"
                ref={inputRef}
                name="placeImage"
                onChange={(e) => setPlaceImage(e.target.files[0])}
              />

              <label className="addPlaceFormLabel">
                Name of the Place :<br></br>
                <input
                  type="text"
                  className="placeNameInput"
                  placeholder="Name of the Place ..."
                  name="placeNameInput"
                  onChange={(e) => setPlaceName(e.target.value)}
                />
              </label>

              <label className="addPlaceFormLabel">
                Website :<br></br>
                <input
                  type="text"
                  className="placeNameInput"
                  placeholder="Website of the Place ..."
                  name="placeWebsite"
                  onChange={(e) => setPlaceWebsite(e.target.value)}
                />
              </label>

              <label className="addPlaceFormLabel">
                Select a Category:
                <br></br>
                <select
                  value={placeCategory}
                  onChange={(e) => setPlaceCategory(e.target.value)}
                >
                  <option value="">Select ...</option>
                  <option value="Indoor">Indoor</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Hike">Hike</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Adventure">Adventure</option>
                </select>
              </label>

              <label className="SelectLocation">
                Select the location :
                <MapWithCoordinates />
              </label>

              <label className="SelectLocation">
                Open Time :<br></br>
                <input type="time" className="OpenTime" name="OpenTime"></input>
              </label>

              <label className="SelectLocation">
                Close Time :<br></br>
                <input
                  type="time"
                  className="OpenTime"
                  name="CloseTime"
                ></input>
              </label>

              <label className="SelectLocation">
                Contact Number:
                <br></br>
                <input
                  type="text"
                  className="ContactNumber"
                  name="ContactNumber"
                  onChange={(e) => setPlaceContact(e.target.value)}
                ></input>
              </label>

              <button type="submit" onClick={handleClick} className="uploadbtn">
                Upload
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadPlaces;
