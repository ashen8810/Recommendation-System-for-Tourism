import Popup from "reactjs-popup";
import "../assets/CSS/bootstrap.min.css";
// import "reactjs-popup/dist/index.css";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

import "../assets/CSS/index.css";

const PopUp = () => (
  <div className="popup-container mt-3">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Popup button
        </button>
      }
    >
      {(close) => (
        <>
          <form>
            <div class="form-group row mb-2">
              <label
                for="name"
                class="col-sm-2 col-form-label col-form-label-sm"
              >
                Name:
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="name"
                  placeholder="username"
                />
              </div>
            </div>
            <div class="form-group row">
              <label
                for="email"
                class="col-sm-2 col-form-label col-form-label-sm"
              >
                Email:
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="email"
                  placeholder="email"
                />
              </div>
            </div>
            <lable>How long do you stay</lable>
            <div class="row">
              <div class="col">
                <div class="md-form md-outline input-with-post-icon datepicker">
                  <input
                    placeholder="Select date"
                    type="date"
                    id="example"
                    class="form-control"
                  ></input>
                  <label for="example">From</label>
                </div>
              </div>
              <div class="col">
                <div class="md-form md-outline input-with-post-icon datepicker">
                  <input
                    placeholder="Select date"
                    type="date"
                    id="example"
                    class="form-control"
                  ></input>
                  <label for="example">To</label>
                </div>
              </div>
            </div>
          </form>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            Submit
          </button>
        </>
      )}
    </Popup>
  </div>
);
export default PopUp;
