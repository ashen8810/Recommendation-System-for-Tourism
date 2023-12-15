import { useEffect,useState,useRef } from 'react';
import '../components/AddPlaceOpt/addPlaceOpt.css'
import { useNavigate } from 'react-router-dom';

  const UploadPlaces = () => {

  const navigate = useNavigate();
  const inputRef = useRef(null);
  const[isOpen,setIsOpen] = useState(true);
  const[isSelected,setSelected] = useState(false);
 
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
                bg-white bg-clip-padding`} type="file" ref={inputRef}/>
              
              <label className='addPlaceFormLabel'>
                Name of the Place : 
                <br></br>
              <input type='text' className='placeNameInput' placeholder='Name of the Place ...'/>
              </label>

              <label className='addPlaceFormLabel'>
                Description:
                <br></br>
                <input type='text' className='Description'/>
              </label>
              <button type='submit' onClick={() => handleClick} className='uploadbtn'>Upload</button>
            </form>
          </div>
        </div>}
        </>
  )
}

export default UploadPlaces;