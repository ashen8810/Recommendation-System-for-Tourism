import React, { Component } from "react";
import PopupForm from "../../components/PrefForm/PopUpForm";

class FinalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopupOpen: false,
    };
  }

  openPopup = () => {
    this.setState({ isPopupOpen: true });
  };

  closePopup = () => {
    this.setState({ isPopupOpen: false });
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.openPopup}>Open Preferences</button>
        {this.state.isPopupOpen && <PopupForm onClose={this.closePopup} />}
      </div>
    );
  }
}

export default FinalForm;
