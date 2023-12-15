import { useEffect,useState,useRef } from 'react';
import '../components/AddPlaceOpt/addPlaceOpt.css'
import { useNavigate } from 'react-router-dom';
import Map from './Maps/Leaflet';

  const UploadPlaces = () => {

  const navigate = useNavigate();
  const inputRef = useRef(null);
  const[isOpen,setIsOpen] = useState(true);
  const[isSelected,setSelected] = useState(false);
 
  const[placeName,setPlaceName] = useState("")
  const[placeImage,setPlaceImage] = useState("")
  const[placeDescription,setPlaceDescription] = useState("")
  const[placeOpenTime,setPlaceOpenTime] = useState("")
  const[placeCloseTime,setPlaceCloseTime] = useState("")
  const[placeContact,setPlaceContact] = useState("")
  const[placeLocation,setPlaceLocation] = useState("")
  const[placeWebsite,setPlaceWebsite] = useState("")
  const[placeCategory,setPlaceCategory] = useState("")


  const handleClose = () =>{
    setIsOpen(false)
  }

  const handleClick = () => {
    inputRef.current.click();
  }
  
  return (
    <>
    {isOpen && 
    <div className='placeInput'>
           <div  className='handleClose' >
           <span class="material-symbols-outlined" onClick={ handleClose}>
              cancel
            </span>
            </div>
          <div className='adplaceForm'>
          <form >
              <input className={`${isSelected? "ChooseFile":"NofileChosen"}mt-2  w-full file:hidden   border border-placeholderText py-2 pl-2 cursor-pointer focus:border-transparent  focus:ring-main 
                block
                font-small
                bg-white bg-clip-padding`} type="file" ref={inputRef} name='placeImage' onChange={(e)=>e.target.files[0]}/>
              
              <label className='addPlaceFormLabel'>
                Name of the Place : 
                <br></br>
              <input type='text' className='placeNameInput' placeholder='Name of the Place ...' name='placeNameInput' onChange={(e) => e.target.value}/>
              </label>

              <label className='addPlaceFormLabel'>
                Website : 
                <br></br>
              <input type='text' className='placeNameInput' placeholder='Website of the Place ...' name='placeWebsite' onChange={(e)=>e.target.value}/>
              </label>

              <label className='addPlaceFormLabel'>
                Select a Category:
                <br></br>
                <select>
                <option value ="">Select ...</option>
                <option value ="Option1">Indoor</option>
                <option value ="Option1">Outdoor</option>
                <option value ="Option1">Hike</option>
                <option value ="Option1">Cultural</option>
                <option value ="Option1">Adventure</option>
                </select>
              </label>

              <label className='SelectLocation'>
                Select the location :
                <Map/>
              </label>

              <label className='SelectLocation'>
               Open Time :
                <br></br>
                <input type="time" className='OpenTime' name='OpenTime'></input>
              </label>
            
              <label className='SelectLocation'>
               Close Time :
                <br></br>
                <input type="time" className='OpenTime' name='CloseTime'></input>
              </label>
            
              <label className='SelectLocation'>
               Contact Number:
                <br></br>
                <input type="text" className='ContactNumber' name='ContactNumber'></input>
              </label>

              <button type='submit' onClick={() => handleClick} className='uploadbtn'>Upload</button>
            </form>
          </div>
        </div>}
        </>
  )
}

export default UploadPlaces;