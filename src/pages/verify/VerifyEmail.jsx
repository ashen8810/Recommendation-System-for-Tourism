import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './verify.css'

const VerifyEmail = () => {
    const [otp, setOtp]=useState("")
    const navigate=useNavigate()

    const handleOtpSubmit = async(e)=>{
            e.preventDefault()
            try{
              if (otp) {
                const res = await axios.post('http://localhost:8000/api/user/verify-email/', {'otp':otp})
                const resp = res.data
                if (res.status === 200) {
                    navigate('/login')
                    toast.success(resp.message)
                }
                else if(res.status === 204)
                {
                  toast.warn(resp.message)
                }
              }
            }
            catch(error){
                 if(error.response.status === 400)
                 {
                  toast.error(error.response.data.message)
                 }
            }
          
            
    }
  return (
    <div>
        <div className='form-container'>
            <form action="" style={{width:"30%"}}  onSubmit={handleOtpSubmit}>
               <div className='form-group'>
                 <label htmlFor=""><h2>Enter your Otp code</h2></label>
                 <input type="text"
                  className='email-form'  
                  name="otp"
                  value={otp}
                  onChange={(e)=>setOtp(e.target.value)} 
                   />
               </div>
                <div className="button-container">
                    <button type='submit' className='lbtn' onClick={()=>{
                      {navigate('/login')}
                    }}>Later</button>
                    <button type='submit' className='vbtn'>Send</button>
                </div>
                  
            </form>
        </div>
    </div>
  )
}

export default VerifyEmail