import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <form>
              <div className="form-group row mb-2">
                <label
                  for="citySelect"
                  className="col-sm-2 col-form-label col-form-label-sm"
                >
                  {" "}
                  Where Do you want to go?
                </label>

                <div className="col-sm-10">
                  <select
                    id="citySelect"
                    className="form-control form-control-sm"
                  >
                    <option value="Kandy">Kandy</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Polonnaruwa">Polonnaruwa</option>
                    <option value="Galle">Galle</option>
                    <option value="Matara">Matara</option>
                    <option value="Divulapitiya">Divulapitiya</option>
                  </select>
                </div>
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
            <div style={{ margin: "auto" }}>
              <Button variant="primary" type="submit">
                Continue
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;
