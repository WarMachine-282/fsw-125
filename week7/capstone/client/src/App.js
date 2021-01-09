import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/data/Header/Header";
import Container from "./components/data/Container/Container"
import Content from "./components/data/Content/Content";
import Form from "./components/data/Form/Form";
import Footer from "./components/data/Footer/Footer";
import "./styles.css";

export default function App() {
  const [avenger, setAvenger] = useState([]);
  //displays data
  const getAvengers = () => {
    axios
      .get("/avengers")
      .then((res) => setAvenger(res.data)) // to update state
      .catch((err) => console.log(err)); // in case of an error
  };
  // Search data 
    const searchAvengers = (avenger) => {
      axios
        .get(`/avengers/search/avenger?type=${avenger}`)
        .then((res) => setAvenger(res.data)) // to update state
        .catch((err) => console.log(err)); // in case of an error
    };
  // add post
  const postAvenger = (newAvenger) => {
    axios
      .post("/avengers", newAvenger)
      .then((res) => {
        // setAvenger((prevAvenger) => [...prevAvenger, res.data]);
        getAvengers();
      })
      .catch((err) => console.log(err));
  };
  // Delete post
  const deleteAvenger = (avengerId) => {
    axios
      .delete(`/avengers/${avengerId}`)
      .then((res) => {
        getAvengers()
        // setAvenger((prevAvenger) =>
        //   prevAvenger.filter((avenger) => avenger._id !== avengerId)
        //); // returns with smaller array minus the id that was clicked on
      })
      .catch((err) => console.log(err));
  };
  // Put request - needs id and req.body
  const updateAvenger = (updates, avengerId) => {
    axios.put(`/avengers/${avengerId}`, updates)
      .then((res) => {
        getAvengers()
        // setAvenger((prevAvenger) =>
        //   prevAvenger.map((avenger) => avenger._id !== avengerId ? avenger : res.data)
        // ); //will change if id is not the same otherwise it will change to updated info
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAvengers();
  }, []);
  return (
    <div className="App">
      <Header searchAvengers={searchAvengers}/>
      <Form submit={postAvenger} btnText="Submit your avenger!"/>
      <Container>
      {avenger.map((avenger) => (
        <Content
        {...avenger} // passing id
        powers={avenger.powers}
        key={avenger.avenger}
        deleteAvenger={deleteAvenger}
        updateAvenger={updateAvenger}
        />
        ))}
        </Container>
      <Footer/>
    </div>
  );
}

