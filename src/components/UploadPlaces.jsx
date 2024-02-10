
import React, { useEffect, useState, useRef } from "react";
import "../components/AddPlaceOpt/addPlaceOpt.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MapWithCoordinates from "./Maps/Locate";

const UploadPlaces = ({entityType}) => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isSelected, setSelected] = useState(false);

  const [placeName, setPlaceName] = useState("");
  const [placeImage, setPlaceImage] = useState("");
  const [placeDescription, setPlaceDescription] = useState("");
  const [placeOpenTime, setOpenTime] = useState("");
  const [placeCloseTime, setCloseTime] = useState("");
  const [placeContact, setPlaceContact] = useState("");
  const [placeLocation, setPlaceLocation] = useState("");
  const [placeWebsite, setPlaceWebsite] = useState("");
  const [placeCategory, setPlaceCategory] = useState("");
  

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    var coordinates = localStorage.getItem("coords");
    var regex = /[-]?[\d]*[.][\d]+/g;
    var matches = coordinates.match(regex);

    var latitude = parseFloat(matches[0]);
    var longitude = parseFloat(matches[1]);
    
    let formData = new FormData();
    formData.append([entityType === 'hotels' ? 'hotelName' : 'placeName'], placeName);
    formData.append("description", placeDescription);
    formData.append("coordinateX", latitude);
    formData.append("coordinateY", longitude);
    formData.append("category", placeCategory);
    formData.append("contactNumber", placeContact);
    formData.append("website", placeWebsite);
    formData.append("isUserUploaded", "TRUE");
    formData.append("openingTime", "08:00:00");
    formData.append("closingTime", "08:00:00");
    formData.append("image", placeImage);

    if(entityType === "places"){
      axios
        .post("http://127.0.0.1:8000/api/places/places/", formData)
        .then((response) => {
          // Handle successful response
          console.log("Places Response:", response.data);
        })
        .catch((error) => {
          // Handle error
          console.error("Error:", error);
        });
    }else if(entityType === "hotels"){
      axios
        .post("http://127.0.0.1:8000/api/hotels/hotels/", formData,{
          headers:{
            'Content-type': 'multipart/form-data'
          }
        })
        .then((response) => {
          // Handle successful response
          
          console.log(" hotels Response: ", response.data);
        })
        .catch((error) => {
          // Handle error
          console.error("Error:", error);
        });
    }

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
            <form onSubmit={handleClick}>
              <input
                className={`${
                  isSelected ? "ChooseFile" : "NofileChosen"
                }mt-2  w-full file:hidden   border border-placeholderText py-2 pl-2 cursor-pointer focus:border-transparent  focus:ring-main
                block
                font-small
                bg-white bg-clip-padding`}
                type="file"
                name="image"
                ref={inputRef}
                onChange={(e) => setPlaceImage(e.target.files[0])}
              />

              <label className="addPlaceFormLabel">
                Name of the Place :<br></br>
                <input
                  type="text"
                  className="placeNameInput"
                  placeholder="Name of the Place ..."
                  name="placeNameInput"
                  onChange={(e) => {
                    setPlaceName(e.target.value);
                  }}
                />
                
              </label>

              <label className="addPlaceFormLabel">
                Description of the Place :<br></br>
                <textarea
                  type="text"
                  className="placeNameInput"
                  placeholder="Description of the Place ..."
                  name="placeNameInput"
                  onChange={(e) => setPlaceDescription(e.target.value)}
                />
                
              </label>

              <label className="addPlaceFormLabel">
                Website :<br></br>
                <input
                  type="text"
                  className="placeNameInput"
                  placeholder="Website of the Place ...(optional)"
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
                <input
                  type="time"
                  className="OpenTime"
                  name="OpenTime"
                  onChange={(e) => setOpenTime(e.target.value)}
                ></input>
                
              </label>

              <label className="SelectLocation">
                Close Time :<br></br>
                <input
                  type="time"
                  className="OpenTime"
                  name="CloseTime"
                  onChange={(e) => setCloseTime(e.target.value)}
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
              

              <button type="submit"  className="uploadbtn">
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
