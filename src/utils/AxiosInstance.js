import axios from "axios"
import {jwtDecode} from "jwt-decode";
import dayjs from "dayjs";
import { toast } from "react-toastify";



// let accessToken=localStorage.getItem('access') ? JSON.parse(localStorage.getItem('access')) : ""
let refreshToken=localStorage.getItem('refresh') ? JSON.parse(localStorage.getItem('refresh')) : ""
let accessToken=localStorage.getItem('access') ? JSON.parse(localStorage.getItem('access')) : ""

console.log('access: ',accessToken)
const baseURL= 'http://localhost:8000/api/user/'




const AxiosInstance = axios.create({
     baseURL:baseURL,
    'Content-type':'application/json',
     headers: {Authorization: localStorage.getItem('access') ? `Bearer ${accessToken}` : ""},
  });


// This interceptor checks the axiosinstance for expired tokens before sending the request 

AxiosInstance.interceptors.request.use(async req =>{
    
    if (accessToken) {
        accessToken=localStorage.getItem('access') ? JSON.parse(localStorage.getItem('access')) : null
        req.headers.Authorization = localStorage.getItem('access') ? `Bearer ${accessToken}` : ""
        const user = jwtDecode(accessToken)
        const isExpired=dayjs.unix(user.exp).diff(dayjs()) < 1
        if(!isExpired) 
        {
          return req
        }else{
          const res =await axios.post(`${baseURL}token/refresh/`, {
            refresh:refreshToken
            })
          if(res.status === 200)
          {
            localStorage.setItem('access', JSON.stringify(res.data.access))
            req.headers.Authorization = `Bearer ${res.data.access}`
            return req
          }
          else{

            // const res = await axios.post(`${baseURL}/logout/`, {'refresh_token':refreshToken})
            // if (res.status === 204) {
            //   localStorage.removeItem('access')
            //   localStorage.removeItem('refresh')
            //   localStorage.removeItem('user')
            //   // navigate('/login')
            //   toast.warn("seesion expired login again.")
            // }
          }  

        }
        
        
     }
    //  else{
    //    req.headers.Authorization = localStorage.getItem('token') ? `Bearer ${JSON.parse(localStorage.getItem('token'))}` : " "
    //    return req 
    // }
 
    
             
 })

  
export default AxiosInstance;