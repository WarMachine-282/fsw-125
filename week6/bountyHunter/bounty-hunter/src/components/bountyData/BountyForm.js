import React, { useState } from "react";
import "./BountyForm.css";

const BountyForm = (props) => {
  const initInputs = {
    // recieving names/props/_id, if recieved it will set new value, if not it will stay at current value
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    living: props.living || "",
    bountyAmount: props.bountyAmount || "",
    type: props.type || "",
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
    props.submit(inputs, props._id); // post request and passing id to let know which to update/ prop is called submit to make easier to pass any function down
    setInputs(initInputs);
  };

  return (
    <div className="topnav">
      <form onSubmit={handleSubmit}>
        <input
          className="inputs"
          placeholder="First Name"
          type="text"
          name="firstName"
          value={inputs.firstName}
          onChange={handleChange}
        />
        <input
          className="inputs"
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={inputs.lastName}
          onChange={handleChange}
        />
        <input
          className="inputs"
          placeholder="Type"
          type="text"
          name="type"
          value={inputs.type}
          onChange={handleChange}
        />
        <input
          className="inputs"
          placeholder="Living"
          type="text"
          name="living"
          value={inputs.living}
          onChange={handleChange}
        />
        <input
          className="inputs"
          placeholder="Price"
          type="text"
          name="bountyAmount"
          value={inputs.bountyAmount}
          onChange={handleChange}
        />
        <div
          style={{
            display: props.btnText !== "Submit" ? "inline-block" : "block",
          }}
        >
          {props.btnText !== "Submit" ? (
            <button>{props.btnText}</button>
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
  );
};

export default BountyForm;
