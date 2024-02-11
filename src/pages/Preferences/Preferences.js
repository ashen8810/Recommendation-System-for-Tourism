// import React, { Component } from "react";
// import PopupForm from "../../components/PrefForm/PopUpForm";
// import { Navigate } from "react-router-dom";

// class FinalForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isPopupOpen: false,
//     };
//   }

//   toSchedule = () => {
//     return <Navigate to="/Schedules" />;
//   };
//   openPopup = () => {
//     this.setState({ isPopupOpen: true });
//   };

//   closePopup = () => {
//     this.setState({ isPopupOpen: false });
//   };
//   toSchedule = () => {};
//   render() {
//     return (
//       <>
//         <div className="container">
//           <button onClick={this.openPopup}>Create New Schedule</button>
//           {this.state.isPopupOpen && <PopupForm onClose={this.closePopup} />}
//         </div>

//         <div className="container">
//           <button onClick={this.toSchedule}>My Schedules</button>
//         </div>
//       </>
//     );
//   }
// }

// export default FinalForm;
// import React, { Component } from "react";
// import PopupForm from "../../components/PrefForm/PopUpForm";
// import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// class FinalForm extends Component {
//   const navigate = useNavigate();

//   constructor(props) {
//     super(props);

//     this.state = {
//       isPopupOpen: false,
//     };
//   }

//   toSchedule = () => {
//     // <Navigate to="Schedules" />;
//     navigate("/schedules")
//   };
//   openPopup = () => {
//     this.setState({ isPopupOpen: true });
//   };

//   closePopup = () => {
//     this.setState({ isPopupOpen: false });
//   };
  
//   render() {
//     return (
//       <>
//         <br></br>
//         <br></br> <br></br> <br></br>
//         <div className="container">
//           <button onClick={this.openPopup}>Create New Schedule</button>
//           {this.state.isPopupOpen && <PopupForm onClose={this.closePopup} />}
//         </div>
//         <div className="container">
//           <button onClick={this.toSchedule}>My Schedules</button>
//         </div>
//       </>
//     );
//   }
// }

// export default FinalForm;
import React, { useState } from "react";
import PopupForm from "../../components/PrefForm/PopUpForm";
import { useNavigate } from "react-router-dom";

const FinalForm = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toSchedule = () => {
    navigate("/schedules");
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
  
      <div className="container">
        <button onClick={openPopup}>Create New Schedule</button>
        {isPopupOpen && <PopupForm onClose={closePopup} />}
      </div>
      <div className="container">
        <button onClick={toSchedule}>My Schedules</button>
      </div>
    </>
  );
};

export default FinalForm;
