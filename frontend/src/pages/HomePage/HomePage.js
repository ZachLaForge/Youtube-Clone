import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./HomePage.css"
import hqdefault from "../Images/hqdefault.jpg"
import linus from "../Images/linus.jpg"

import axios from "axios";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div>
      <h1 className="center">
        Welcome to your homepage
      </h1>
      <div className="grid">
        <Link to="video" style={{ textDecoration: "none", color: "white" }}>
        <a>
          <img src={hqdefault}></img>
        </a>
        </Link>
        <Link to="linus" style={{ textDecoration: "none", color: "white" }}>
        <a>
          <img src={linus}></img>
        </a>
        </Link>
      </div>
      <div className="grid">
        <a>
          <img src={hqdefault}></img>
        </a>
        <a>
          <img src={linus}></img>
        </a>
      </div>
      <div className="grid">
        <a>
          <img src={hqdefault}></img>
        </a>
        <a>
          <img src={linus}></img>
        </a>
      </div>


      {/* <h1>Home Page for {user.username}!</h1>
      {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))} */}
    </div>
  );
};

export default HomePage;
