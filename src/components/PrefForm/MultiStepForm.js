import React, { Component } from "react";
import "./styles.css";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
} from "@mui/material";

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  stepHeader: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#333",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    fontSize: "14px", // Added font size
    backgroundColor: "#fff", // Background color for inputs
    color: "#333", // Text color for inputs
  },
  button: {
    marginRight: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px", // Added font size for buttons
    transition: "background-color 0.3s, box-shadow 0.3s", // Added a transition for hover effect
  },
  buttonHover: {
    backgroundColor: "#0056b3", // Change background color on hover
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Add a slightly stronger shadow on hover
  },

  errorStyles: {
    color: "red",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "10px 0",
    padding: "10px",
    backgroundColor: "#ffcccc",
    border: "1px solid #ff0000",
    borderRadius: "5px",
  },
  "@media (max-width: 768px)": {
    container: {
      maxWidth: "100%",
      padding: "10px",
    },
    stepHeader: {
      fontSize: "16px",
      marginBottom: "8px",
    },
    input: {
      padding: "8px",
      marginBottom: "8px",
    },
  },
  "@media (max-width: 480px)": {
    stepHeader: {
      fontSize: "14px",
    },
  },
};
const steps = [
  "Trip Information",
  "Date Information",
  "More Information",
  "More",
];

class MultiStepForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      formData: {
        dest: "",
        people: 0,
        from: "",
        to: "",
        hotel: "",
        trip: "",
        min: 0,
        max: 0,
      },
    };
  }

  validateStep = () => {
    const { formData, step } = this.state;
    const errors = {};

    if (step === 0) {
      if (formData.dest == "") {
        errors.dest = "dest is required";
      }
      if (formData.people == 0) {
        errors.people = "Number of people is required";
      }
    } else if (step === 1) {
      if (!formData.from) {
        errors.from = "Date is required";
      }
      if (!formData.to) {
        errors.to = "Date is required";
      }
    } else if (step === 2) {
      if (!formData.hotel) {
        errors.hotel = "Description is required";
      }
      if (!formData.trip) {
        errors.trip = "Description is required";
      }
    } else if (step === 3) {
      if (formData.min == "0$") {
        errors.min = "value is required";
      }
      if (formData.max < 1) {
        errors.max = "value is required";
      }
    }
    return errors;
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  nextStep = () => {
    const errors = this.validateStep();
    if (Object.keys(errors).length === 0) {
      this.setState((prevState) => ({
        step: prevState.step + 1,
        errors: {},
      }));
    } else {
      this.setState({ errors });
    }
  };

  prevStep = () => {
    this.setState((prevState) => ({
      step: prevState.step - 1,
      errors: {},
    }));
  };

  submitForm = () => {
    // You can add a final validation step here if needed

    // Handle form submission here, e.g., send data to the server
    console.log("Form submitted:", this.state.formData);
  };

  render() {
    const { step, formData, errors } = this.state;

    return (
      <div style={{ padding: "20px" }}>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div style={styles.container}>
          {step === 0 && (
            <div>
              <h2 style={styles.stepHeader}>Step 1: Trip Information</h2>
              <label htmlFor="dest">Where do you want to go? :</label>
              <select
                type="select"
                name="dest"
                value={formData.dest}
                onChange={this.handleInputChange}
                placeholder=""
                style={styles.input}
              >
                <option value="">Select</option>

                <option value="Kandy">Kandy</option>
                <option value="Jaffna">Jaffna</option>
                <option value="Polonnaruwa">Polonnaruwa</option>
                <option value="Galle">Galle</option>
                <option value="Matara">Matara</option>
                <option value="Divulapitiya">Divulapitiya</option>
              </select>
              {errors && <div style={styles.errorStyles}>{errors.dest}</div>}
              <label htmlFor="people">How many people? :</label>
              <input
                type="number"
                name="people"
                value={formData.people}
                onChange={this.handleInputChange}
                placeholder="0"
                style={styles.input}
              />
              {errors && <div style={styles.errorStyles}>{errors.people}</div>}
            </div>
          )}
          {step === 1 && (
            <div>
              <h2 style={styles.stepHeader}>Step 2: Date Information</h2>
              <label htmlFor="from">From? :</label>

              <input
                type="date"
                name="from"
                value={formData.from}
                onChange={this.handleInputChange}
                style={styles.input}
              />
              {errors.from && (
                <div style={styles.errorStyles}>{errors.from}</div>
              )}

              <label htmlFor="to">To? :</label>

              <input
                type="date"
                name="to"
                value={formData.to}
                onChange={this.handleInputChange}
                style={styles.input}
              />
              {errors.to && <div style={styles.errorStyles}>{errors.to}</div>}
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 style={styles.stepHeader}>Step 3: More Information</h2>
              <textarea
                type="text"
                name="hotel"
                value={formData.hotel}
                onChange={this.handleInputChange}
                placeholder="What kind of hotel do you need? "
                style={styles.input}
              />
              {errors && <div style={styles.errorStyles}>{errors.hotel}</div>}
              <textarea
                type="text"
                name="trip"
                value={formData.trip}
                onChange={this.handleInputChange}
                placeholder="What kind of trip are you planing? "
                style={styles.input}
              />
              {errors && <div style={styles.errorStyles}>{errors.trip}</div>}
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 style={styles.stepHeader}>Step 4: Price Information</h2>
              <input
                type="number"
                name="min"
                value={formData.min}
                onChange={this.handleInputChange}
                // placeholder="0$"
                style={styles.input}
              />
              {errors && <div style={styles.errorStyles}>{errors.min}</div>}

              <input
                type="number"
                name="max"
                value={formData.max}
                onChange={this.handleInputChange}
                // placeholder="0$"
                style={styles.input}
              />
              {errors && <div style={styles.errorStyles}>{errors.max}</div>}
            </div>
          )}
          <div>
            {step > 0 && (
              <button onClick={this.prevStep} style={styles.button}>
                Previous
              </button>
            )}
            {step < 3 && (
              <button onClick={this.nextStep} style={styles.button}>
                Next
              </button>
            )}
            {step === 3 && (
              <button onClick={this.submitForm} style={styles.button}>
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MultiStepForm;
