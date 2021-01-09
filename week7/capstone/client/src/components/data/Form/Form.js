import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const initInputs = {
    avenger: props.avenger || "",
    living: props.living || "",
    conception: props.conception || "",
    powers: props.powers || "",
  };
  const [inputs, setInputs] = useState(initInputs);

  // to pass data through the inputs to state
  const handleChange = (e) => {
    const { name, value } = e.target; // what value is typed in to the input
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };
  // to submit data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    props.submit(inputs, props._id); // post request and passing id to let know which to update/ prop is called submit to make easier to pass any function down
    setInputs(initInputs);
  };

  return (
    <div className="grid-container">
      <div className={props.setEditToggle ? "container-b" : "container-a"}>
        <form
          onSubmit={(e) => handleSubmit(e)}
          id={props.setEditToggle ? "form-b" : "form-a"}
        >
          <div className={props.setEditToggle ? "small-box" : "user-box"}>
            <input
              id={props.setEditToggle ? "inputs-b" : "inputs-a"}
              className="inputs"
              placeholder="Avenger"
              type="text"
              name="avenger"
              value={inputs.avenger}
              onChange={handleChange}
            />
          </div>
          <div className={props.setEditToggle ? "small-box" : "user-box"}>
            <input
              id={props.setEditToggle ? "inputs-b" : "inputs-a"}
              className="inputs"
              placeholder="Is alive?"
              type="text"
              name="living"
              value={inputs.living}
              onChange={handleChange}
            />
          </div>
          <div className={props.setEditToggle ? "small-box" : "user-box"}>
            <input
              id={props.setEditToggle ? "inputs-b" : "inputs-a"}
              className="inputs"
              placeholder="DOB"
              type="text"
              name="conception"
              value={inputs.conception}
              onChange={handleChange}
            />
          </div>
          <div className={props.setEditToggle ? "small-box" : "user-box"}>
            <input
              id={props.setEditToggle ? "inputs-b" : "inputs-a"}
              className="inputs"
              placeholder="Powers"
              type="text"
              name="powers"
              value={inputs.powers}
              onChange={handleChange}
            />
          </div>
          <div
            style={{
              display: props.btnText !== "Submit" ? "inline-block" : "block",
            }}
          >
            {props.btnText !== "Submit" ? (
              <button id="submit">{props.btnText}</button>
            ) : (
              <button id="edit-btn">{props.btnText}</button>
            )}
            {props.btnText === "Submit" ? (
              <button
                id="btn-close-submit"
                onClick={() => props.setEditToggle((prevToggle) => !prevToggle)}
              >
                Close
              </button>
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
