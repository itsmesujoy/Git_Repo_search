import React from "react";
import { images } from "../constants";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div >
      <div>
        <img src={images.NotFound}  />
        <h3  style={{ marginBottom: "10px" }}>
          Page Not Found
        </h3>
        <p >
          Sorry, we couldn't find the page you are looking for.
        </p>
       
      </div>
    </div>
  );
};

export default NotFound;
