import React, { useState } from "react";
import Form from "../Form/Form";
import "./Content.css";
import "../Form/Form.css";

const Content = (props) => {
  const { avenger, living, conception, powers, _id } = props;
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div className="grid-container">
      <div className="avengers">
        {!editToggle ? (
          <>
            <div className="card">
              <p>Avenger: {avenger}</p>
              <p>Alive: {living}</p>
              <p>DOB: {conception}</p>
              <p>Powers: {powers}</p>
              <button
                className="delete-btn"
                onClick={() => props.deleteAvenger(_id)}
              >
                Delete
              </button>
              <button
                className="edit-btn"
                onClick={() => setEditToggle((prevToggle) => !prevToggle)}
              >
                Edit
              </button>
            </div>
          </>
        ) : (
          <>
            <Form // using same form to update data as posting data
              avenger={avenger}
              living={living}
              conception={conception}
              powers={powers}
              _id={_id}
              btnText="Submit"
              setEditToggle={setEditToggle}
              submit={props.updateAvenger}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default Content;
