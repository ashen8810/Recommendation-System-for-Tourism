import React,{useState} from 'react'
import './addPlaceOpt.css'

const AddPlaceOpt = () => {
    const[isOpen,setIsOpen] = useState(false)
  return (
    <div className='topLineOPt'>
    <div className='addPlace'>
      <span class="material-symbols-outlined loc" title='Add Place' >
        add_location_alt
      </span>
     
    </div>
    <div className='homes'>
        <span class="material-symbols-outlined home" title='Goto Home'>
            home
        </span>
    </div>
    </div>
    
  )
}

export default AddPlaceOpt
