// import Popup from "reactjs-popup";
// import "../assets/CSS/bootstrap.min.css";
// // import "reactjs-popup/dist/index.css";
// import {
//   CitySelect,
//   CountrySelect,
//   StateSelect,
// } from "react-country-state-city";
// import "react-country-state-city/dist/react-country-state-city.css";

// import "../assets/CSS/index.css";

// const PopUp = () => (
//   <div className="popup-container mt-3">
//     <Popup
//       modal
//       trigger={
//         <button type="button" className="trigger-button">
//           Add Preferences
//         </button>
//       }
//     >
//       {(close) => (
//         <>
//           <form>
//             <div className="form-group row mb-2">
//               <label
//                 for="fruitSelect"
//                 className="col-sm-2 col-form-label col-form-label-sm"
//               >
//                 {" "}
//                 Where Do you want to go?
//               </label>
//               <div className="col-sm-10">
//                 <select
//                   id="fruitSelect"
//                   className="form-control form-control-sm"
//                 >
//                   <option value="Kandy">Kandy</option>
//                   <option value="Jaffna">Jaffna</option>
//                   <option value="Polonnaruwa">Polonnaruwa</option>
//                   <option value="Galle">Galle</option>
//                   <option value="Matara">Matara</option>
//                   <option value="Divulapitiya">Divulapitiya</option>
//                 </select>
//               </div>
//               <label
//                 for="name"
//                 class="col-sm-2 col-form-label col-form-label-sm"
//               >
//                 Name:
//               </label>
//               <div class="col-sm-10">
//                 <input
//                   type="text"
//                   className="form-control form-control-sm"
//                   id="name"
//                   placeholder="username"
//                 />
//               </div>
//             </div>
//             <div class="form-group row">
//               <label
//                 for="email"
//                 class="col-sm-2 col-form-label col-form-label-sm"
//               >
//                 Email:
//               </label>
//               <div class="col-sm-10">
//                 <input
//                   type="email"
//                   className="form-control form-control-sm"
//                   id="email"
//                   placeholder="email"
//                 />
//               </div>
//             </div>
//             <lable>How long do you stay</lable>
//             <div class="row">
//               <div class="col">
//                 <div class="md-form md-outline input-with-post-icon datepicker">
//                   <input
//                     placeholder="Select date"
//                     type="date"
//                     id="example"
//                     class="form-control"
//                   ></input>
//                   <label for="example">From</label>
//                 </div>
//               </div>
//               <div class="col">
//                 <div class="md-form md-outline input-with-post-icon datepicker">
//                   <input
//                     placeholder="Select date"
//                     type="date"
//                     id="example"
//                     class="form-control"
//                   ></input>
//                   <label for="example">To</label>
//                 </div>
//               </div>
//             </div>
//           </form>
//           <button
//             type="button"
//             className="trigger-button"
//             onClick={() => close()}
//           >
//             Submit
//           </button>
//         </>
//       )}
//     </Popup>
//   </div>
// );
// export default PopUp;
// import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import StepOne from "../components/Forms/StepOne";
import StepTwo from "../components/Forms/StepTwo";
import Final from "../components/Forms/Final";

function App() {
  //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  // javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepOne
                  nextStep={nextStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepTwo
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // Only formData is passed as prop to show the final value at form submit
    case 3:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Final values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // default case to show nothing
    default:
      return <div className="App"></div>;
  }
}

export default App;
