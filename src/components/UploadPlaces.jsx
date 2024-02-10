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
// import React, { useEffect, useState, useRef } from "react";
// import "../components/AddPlaceOpt/addPlaceOpt.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import MapWithCoordinates from "./Maps/Locate";

// const UploadPlaces = () => {
//   const navigate = useNavigate();
//   const inputRef = useRef(null);
//   const [isOpen, setIsOpen] = useState(true);
//   const [isSelected, setSelected] = useState(true);

//   const [placeName, setPlaceName] = useState("");
//   const [placeImage, setPlaceImage] = useState("");
//   const [placeDescription, setPlaceDescription] = useState("");
//   const [placeOpenTime, setOpenTime] = useState("");
//   const [placeCloseTime, setCloseTime] = useState("");
//   const [placeContact, setPlaceContact] = useState("");
//   const [placeWebsite, setPlaceWebsite] = useState("");
//   const [placeCategory, setPlaceCategory] = useState("");

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   const handleClick = () => {
//     var coordinates = localStorage.getItem("coords");
//     var regex = /[-]?[\d]*[.][\d]+/g;
//     var matches = coordinates.match(regex);

//     var latitude = parseFloat(matches[0]);
//     var longitude = parseFloat(matches[1]);
//     let postData = {
//       placeName: placeName,
//       image: placeImage,
//       description: placeDescription,
//       coordinateX: latitude,
//       coordinateY: longitude,
//       category: placeCategory,
//       contactNumber: placeContact,
//       website: placeWebsite,
//       isUserUploaded: "TRUE",
//       openingTime: "08:00:00",
//       closingTime: "08:00:00",
//     };
//     axios
//       .post("http://127.0.0.1:8000/api/places/places/", postData)
//       .then((response) => {
//         console.log("Response:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className="placeInput">
//           <div className="handleClose">
//             <span className="material-symbols-outlined" onClick={handleClose}>
//               cancel
//             </span>
//           </div>
//           <div className="adplaceForm">
//             <form>
//               <input
//                 className={`${
//                   isSelected ? "ChooseFile" : "NofileChosen"
//                 }mt-2  w-full file:hidden   border border-placeholderText py-2 pl-2 cursor-pointer focus:border-transparent  focus:ring-main
//                 block
//                 font-small
//                 bg-white bg-clip-padding`}
//                 type="file"
//                 name="image"
//                 ref={inputRef}
//                 onChange={(e) => {
//                   setPlaceImage(e.target.files[0]);
//                   setTimeout(() => {
//                     console.log(typeof e.target.files[0]);
//                   }, 60000); // 60000 milliseconds = 1 minute
//                 }}
//               />

//               <label className="addPlaceFormLabel">
//                 Name of the Place :<br></br>
//                 <input
//                   type="text"
//                   className="placeNameInput"
//                   placeholder="Name of the Place ..."
//                   name="placeNameInput"
//                   onChange={(e) => {
//                     setPlaceName(e.target.value);
//                   }}
//                 />
//               </label>

//               <label className="addPlaceFormLabel">
//                 Description of the Place :<br></br>
//                 <textarea
//                   type="text"
//                   className="placeNameInput"
//                   placeholder="Description of the Place ..."
//                   name="placeNameInput"
//                   onChange={(e) => setPlaceDescription(e.target.value)}
//                 />
//               </label>

//               <label className="addPlaceFormLabel">
//                 Website :<br></br>
//                 <input
//                   type="text"
//                   className="placeNameInput"
//                   placeholder="Website of the Place ..."
//                   name="placeWebsite"
//                   onChange={(e) => setPlaceWebsite(e.target.value)}
//                 />
//               </label>

//               <label className="addPlaceFormLabel">
//                 Select a Category:
//                 <br></br>
//                 <select
//                   value={placeCategory}
//                   onChange={(e) => setPlaceCategory(e.target.value)}
//                 >
//                   <option value="">Select ...</option>
//                   <option value="Indoor">Indoor</option>
//                   <option value="Outdoor">Outdoor</option>
//                   <option value="Hike">Hike</option>
//                   <option value="Cultural">Cultural</option>
//                   <option value="Adventure">Adventure</option>
//                 </select>
//               </label>

//               <label className="SelectLocation">
//                 Select the location :
//                 <MapWithCoordinates />
//               </label>

//               <label className="SelectLocation">
//                 Open Time :<br></br>
//                 <input
//                   type="time"
//                   className="OpenTime"
//                   name="OpenTime"
//                   onChange={(e) => setOpenTime(e.target.value)}
//                 ></input>
//               </label>

//               <label className="SelectLocation">
//                 Close Time :<br></br>
//                 <input
//                   type="time"
//                   className="OpenTime"
//                   name="CloseTime"
//                   onChange={(e) => setCloseTime(e.target.value)}
//                 ></input>
//               </label>

//               <label className="SelectLocation">
//                 Contact Number:
//                 <br></br>
//                 <input
//                   type="text"
//                   className="ContactNumber"
//                   name="ContactNumber"
//                   onChange={(e) => setPlaceContact(e.target.value)}
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

const UploadPlaces = ({ entityType }) => {
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
    // userId = models.ForeignKey(User, on_delete=models.CASCADE)
    // adminId = models.ForeignKey(Admin, on_delete=models.CASCADE)
    // createdDate = models.DateTimeField(auto_now_add=True)
    // ratings = models.IntegerField(default=0)
    // imageID = models.CharField(max_length=7,auto_created=True,null=True)
    // let postData = {
    //   [entityType === 'hotels' ? 'hotelName' : 'placeName']: placeName,
    //   image: placeImage,
    //   description: placeDescription,
    //   coordinateX: latitude,
    //   coordinateY: longitude,
    //   category: placeCategory,
    //   contactNumber: placeContact,
    //   website: placeWebsite,
    //   isUserUploaded: "TRUE",
    //   openingTime: "08:00:00",
    //   closingTime: "08:00:00",
    // };

    let formData = new FormData();
    formData.append("placeName", placeName);
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

    axios
      .post("http://127.0.0.1:8000/api/places/places/", formData)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
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

              <button type="submit" className="uploadbtn">
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
