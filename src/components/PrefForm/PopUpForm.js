import React, { Component } from "react";
import MultiStepForm from "./MultiStepForm";
const styles = {
  popup: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000",
  },
  content: {
    background: "white",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  },
};

class PopupForm extends Component {
  render() {
    return (
      <div style={styles.popup}>
        <div style={styles.content}>
          <MultiStepForm />
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default PopupForm;
