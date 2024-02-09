import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import axios from 'axios';
import Leaflet2 from "components/Maps/Leaflet2";
import { toast } from 'react-toastify';

const Popupwin = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [dragStart, setDragStart] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [comments,setCommnent] = useState([])
  const[sucess,setSuccess]=useState(0)
  const Id = props.id

  const handleMouseDown = (e) => {
    setDragStart({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseMove = (e) => {
    if (dragStart) {
      const offsetX = e.clientX - dragStart.x;
      const offsetY = e.clientY - dragStart.y;

      setPosition((prevPosition) => ({
        x: prevPosition.x + offsetX,
        y: prevPosition.y + offsetY,
      }));

      setDragStart({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  const handleMouseUp = () => {
    setDragStart(null);
  };

  const handleClose = () => {
    setIsOpen(false);
    {
      props.onClose();
    }
  
    }; 


    useEffect(() => {
      const fetchCommnetData = async () => {
        

      try {
          const currentUrl = window.location.href;
          let apiUrl = '';
          console.log(currentUrl)
          if (currentUrl.includes('Places')) {
            apiUrl = 'http://localhost:8000/api/places/get-comment';
            const response = await axios.get('http://localhost:8000/api/places/get-comment',{     
              params: {
              "placeId": Id
          }
          })
          setCommnent(response.data);
          } else if (currentUrl.includes('hotel')) {
            apiUrl = 'http://localhost:8000/api/hotel/get-comment';
            const response = await axios.get('http://localhost:8000/api/hotel/get-comment',{     
              params: {
              "hotelId": Id
          }
          })
          setCommnent(response.data);
          }
         
           
      } catch (error) {
          console.error('Error fetching user data:', error.message);
      }
      };

      fetchCommnetData();
  }, [sucess,Id]);


const handleSubmit= async()=>{
  let user = JSON.parse(localStorage.getItem('user')) 
  const comment = document.querySelector('.getPopupReview').value;
 
 
  
  try {
    
    const response = await axios.post('http://127.0.0.1:8000/api/places/save-comment/', {"comment": comment ,"placeId":Id,"userID":user.userId});
    console.log(response.data.message); 
    toast.success(response.data.message);
    setSuccess(sucess+1)
  } catch (error) {
    // Handle error
    console.error('Error saving comment:', error);
    toast.error(error.response.data.warning)
    
  }

}



  return isOpen ? (
    <div
      className="PopupWin"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div onClick={handleClose} className="handleClose">
        <span class="material-symbols-outlined">cancel</span>
      </div>
      <div className="imageContent">
        <h3>{props.name}</h3>
        <br></br>
        <h5>Description</h5>
        <div className='description'>
            {props.description}
            {props.id}
         
        </div>
      </div>

      <div className="photo">
        <img id={props.id} src={props.src} alt="bg" />
       
      </div>
      
      <div className='imageContent review'>
          <div className='review-profile'>
            <span class="material-symbols-outlined personIcon">
              person
            </span>
            <div className="comment-section"  style={{display:"flex", alignItems:"flex-end", gap:"25px", justifyContent:"center",  }}>
                   <textarea  for='getReview' className='getPopupReview' type='text' placeholder='your comments here ...' ></textarea> 
                   <button type='submit' onClick={handleSubmit} className='cbtn' style={{margin:"10px",backgroundColor:"rgb(23, 107, 135)",color:"white", cursor:"pointer"}}>Post</button>
            </div>

            
          </div>
          <div className="comment-container">
                
                {comments.map((comment) => (
                    <div key={comment.commentId}>
                      <p>{comment.comment}</p>
                    </div>
                  ))
                }
                {/* {console.log(comments)} */}
            </div>
  
          <div className='starRating'>
           <StarRating/>
          </div>
      </div>

      <div className="mapSection">
        <Leaflet2 xcoord={props.x} ycoord={props.y} />
      </div>
    </div>
  ) : null;
};

export default Popupwin;
