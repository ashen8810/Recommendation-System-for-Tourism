import React from "react";
import ZoomSlider from "../../components/ZoomSlider/ZoomSlider";
import Navbar from "../../components/Navbar";
import "../../assets/CSS/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Header from "../../components/Header/Header";
import Button from "@mui/material/Button";
import TravelItinerary from "./SchedulesPart";
import Map from "../../components/Maps/Leaflet";
import { Schedule } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ScheduleSize = () => {
  const [coords, setCoords] = useState([]);
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        let resultList = [];

        const url = `http://127.0.0.1:8000/api/schedules/user-schedules/?user_id=${user.userId}`;
        const response = await axios.get(url);
        let x = response.data[0].x
          .trim()
          .replace(/[\[\]]/g, "")
          .split(",");
        let y = response.data[0].y
          .trim()
          .replace(/[\[\]]/g, "")
          .split(",");

        for (let i = 0; i < x.length; i++) {
          let xCoords = parseFloat(x[i]);
          let yCoords = parseFloat(y[i]);

          resultList.push([xCoords, yCoords]);
        }

        setCoords(resultList);
        const allPlans = response.data.flatMap((location) => location.plans);
        setPlans(allPlans);
        console.log(resultList);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  function sendMail() {
    let formData = new FormData();
    formData.append("userId", user.userId);
    formData.append("email", user.email);

    return axios
      .post("http://127.0.0.1:8000/api/schedules/sendMail/", formData)
      .then((response) => {
        console.log("Response:", response.data);
        // alert("Email sent successfully");
        toast.success("Email Sent!!!");
        navigate("/");

        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.error("Error:", error.message);
        }
        throw error;
      });
  }
  return (
    <>
      <div
        style={{
          color: "#000",
        }}
      >
        <ZoomSlider />
        <br />
        <br />

        <Box sx={4}>
          <Grid container spacing={2} columns={32}>
            <Grid item xs={15}>
              <TravelItinerary />
            </Grid>
            <Grid item xs={15}>
              <Map p={{ p: coords, plans: plans }} />
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="h-50 d-flex align-items-center justify-content-center">
        <Button variant="contained" color="success" onClick={sendMail}>
          Mail My Schedule
        </Button>
      </div>
    </>
  );
};

export default ScheduleSize;
// import React from "react";
// import ZoomSlider from "../../components/ZoomSlider/ZoomSlider";
// import Navbar from "../../components/Navbar";
// import "../../assets/CSS/bootstrap.min.css";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Header from "../../components/Header/Header";
// import Button from "@mui/material/Button";
// import TravelItinerary from "./SchedulesPart";
// import Map from "../../components/Maps/Leaflet";
// import { Schedule } from "@mui/icons-material";

// const ScheduleSize = () => {
//   const [coordsx, setCoordsX] = useState([]);
//   const [coordsy, setCoordsY] = useState([]);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userId = 1; // Assuming the user ID is 1
//         const url = `http://127.0.0.1:8000/api/schedules/user-schedules/?user_id=${userId}`;
//         const response = await axios.get(url);
//         let linesx = response.data[0]["x"].split("\n");
//         let linesy = response.data[0]["x"].split("\n");

//         let resultListx = [];
//         let resultListy = [];

//         linesx.forEach((line) => {
//           let parts = line.split(/\s+/);

//           let value = parseFloat(parts[1]);
//           resultListx.push(value);
//         });
//         linesy.forEach((line) => {
//           let parts = line.split(/\s+/);

//           let value = parseFloat(parts[1]);
//           resultListy.push(value);
//         });
//         setCoordsX(resultListx);
//         setCoordsY(resultListy);

//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
//   return (
//     <>
//       <div
//         style={{
//           color: "#000",
//         }}
//       >
//         <ZoomSlider />
//         <br />
//         <br />

//         <Box sx={4}>
//           <Grid container spacing={2} columns={32}>
//             <Grid item xs={15}>
//               <TravelItinerary />
//             </Grid>
//             <Grid item xs={15}>
//               <Map props={{ xcoords: coordsx, ycoords: coordsy }} />
//             </Grid>
//           </Grid>
//         </Box>
//       </div>
//       <div className="h-50 d-flex align-items-center justify-content-center">
//         <Button variant="contained" color="success">
//           Mail My Schedule
//         </Button>
//       </div>
//     </>
//   );
// };

// export default ScheduleSize;

// import React from "react";
// import ZoomSlider from "../components/ZoomSlider/ZoomSlider";
// import Navbar from "../components/Navbar";
// import Map from "../components/Maps";

// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Header from "../components/Header/Header"
// import Button from '@mui/material/Button';
// import Footer from "components/Footer/Footer";

// const app = () => {
//   return (
//     <div
//       style={{
//         color: "#000"
//       }}
//     >
//       <Header/>
//       <ZoomSlider/>
//       <Navbar />
//       <ZoomSlider/>
//       <br/><br/>
//       <Footer/>

//       <Box sx={4}>
//       <Grid container spacing={2} columns={32}>
//         <Grid item xs={15}>

//         </Grid>
//         <Grid item xs={15}>
//         <Map/>

//         </Grid>
//       </Grid>
//     </Box>

//       <Button variant="contained" color="success">
//         Mail My Schedule
//       </Button>

//     </div>
//   );
// };

// export default app;
