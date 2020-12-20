import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Semantics/Header/Header";
import BountyForm from "./components/bountyData/BountyForm";
import Bounty from "./components/bountyData/Bounty";
import Footer from "./components/Semantics/Footer/Footer";
import "./styles.css";

export default function App() {
  const [bounty, setBounty] = useState([]);
  //displays data
  const getBounties = () => {
    axios
      .get("/bounty")
      .then((res) => setBounty(res.data)) // to update state
      .catch((err) => console.log(err)); // in case of an error
  };
  // add post
  const postBounty = (newBounty) => {
    axios
      .post("/bounty", newBounty)
      .then((res) => {
        setBounty((prevBounty) => [...prevBounty, res.data]);
      })
      .catch((err) => console.log(err));
  };
  // Delete post
  const deleteBounty = (bountyId) => {
    axios
      .delete(`/bounty/${bountyId}`)
      .then((res) => {
        setBounty((prevBounty) =>
          prevBounty.filter((bounty) => bounty._id != bountyId)
        ); // returns with smaller array minus the id that was clicked on
      })
      .catch((err) => console.log(err));
  };
  // Put request - needs id and req.body
  const updateBounty = (updates, bountyId) => {
    axios
      .put(`/bounty/${bountyId}`, updates)
      .then((res) => {
        setBounty((prevBounty) =>
          prevBounty.map((bounty) => bounty._id !== bountyId ? bounty : res.data)
        ); //will change if id is not the same otherwise it will change to updated info
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBounties();
  }, []);
  return (
    <div>
      <Header />
      <BountyForm submit={postBounty} btnText="Submit Bounty!" />
      {bounty.map((bounty) => (
        <Bounty
          {...bounty} // passing id
          key={bounty.firstName}
          deleteBounty={deleteBounty}
          updateBounty={updateBounty}
        />
      ))}
      <Footer />
    </div>
  );
}
