import React,{useState,useRef} from 'react'
import './addPlaceOpt.css'
import HomeSideBar from 'components/HomeSideBar';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import UploadPlaces from 'components/UploadPlaces';

const AddPlaceOpt = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const[isOpen,setIsOpen] = useState(false);
  const [isPopUpOpen,setIsPopUpOpen] = useState(true);


  const handleClose = () => {
    setIsOpen(false);
    ;
  }

  const handleClick = () => {
    inputRef.current.click();
  }

  return (

    <div className='topLineOPt'>
      <div className='addPlace' onClick={() => setIsOpen(!isOpen)}>
        <span class="material-symbols-outlined loc" title='Add Place'  >
          add_location_alt
        </span>

      </div>
      <div className='homes'>
          <span class="material-symbols-outlined home" title='Goto Home' onClick={() => navigate('/')}>
              home
          </span>
      </div>

      {isOpen && <UploadPlaces />}

    </div>



  )

}

export default AddPlaceOpt
