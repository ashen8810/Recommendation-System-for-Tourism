import React,{useState,useRef} from 'react'
import './addPlaceOpt.css'
import { useNavigate } from 'react-router-dom';
import UploadPlaces from 'components/UploadPlaces';

const AddPlaceOpt = ({entityType}) => {
  const navigate = useNavigate();
  const[isOpen,setIsOpen] = useState(false);
  


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
