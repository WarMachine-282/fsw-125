import React, { useState } from "react";
import BountyForm from "./BountyForm";
import "./Bounty.css";

const Bounty = (props) => {
  const { firstName, lastName, living, bountyAmount, type, _id } = props;
  const [editToggle, setEditToggle] = useState(false); // do replace post with inputs
  console.log(props);
  return (
    <div className="bounties">
      {!editToggle ? (
        <>
          <h3>
            Name: {firstName} {lastName}
          </h3>
          <p>Type: {type}</p>
          <p>Living: {living}</p>
          <p>Price: {bountyAmount}</p>
          <button
            className="delete-btn"
            onClick={() => props.deleteBounty(_id)}
          >
            Delete
          </button>
          <button
            className="edit-btn"
            onClick={() => setEditToggle((prevToggle) => !prevToggle)}
          >
            Edit
          </button>
        </>
      ) : (
        <>
          <BountyForm // using same form to update data as posting data
            firstName={firstName}
            lastName={lastName}
            living={living}
            bountyAmount={bountyAmount}
            type={type}
            _id={_id}
            btnText="Submit"
            setEditToggle={setEditToggle}
            submit={props.updateBounty}
          />
        </>
      )}
    </div>
  );
};

export default Bounty;
