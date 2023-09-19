// import React from "react";

// function Home() {
//   return (
//     <h2>Helloooo</h2>
//   );
// }

// export default Home;

import React from "react";
import ZoomSlider from "../components/ZoomSlider/ZoomSlider";
import Navbar from "../components/Navbar";

const app = () => {
  return (
    <div
      style={{
        color: "#FFF"
      }}
    >
      <Navbar />
      <ZoomSlider />

     
    </div>
  );
};

export default app;