import React,{useState,useRef} from 'react'
import './addPlaceOpt.css'
import HomeSideBar from 'components/HomeSideBar';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AddPlaceOpt = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const[isOpen,setIsOpen] = useState(false);

  const handleClick = () => {
    inputRef.current.click();
  }

  return (
    
    <div className='topLineOPt'>
      <div className='addPlace'>
        <span class="material-symbols-outlined loc" title='Add Place' onClick={() => setIsOpen(!isOpen)} >
          add_location_alt
        </span>
      
      </div>
      <div className='homes'>
          <span class="material-symbols-outlined home" title='Goto Home' onClick={() => navigate('/')}>
              home
          </span>
      </div>

      {
        isOpen && 
        <div className='placeInput'>
          <form>
            <input type="file" ref={inputRef} />
            <button onClick={setIsOpen(true)} className='uploadbtn'> Upload</button>
            <input type='text' className='placeNameInput' placeholder='Name of the Place ...'/>
            <input type='text' className='Description'/>
          </form>
        </div>
      }
    
    </div>
    
    

  )

}

export default AddPlaceOpt
