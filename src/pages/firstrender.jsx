import React from "react";
import { images } from "../constants";


const FirstRender = () => {
  return (
    <div>
      <div>
        <img src={images.Git} />
        <h3 style={{ marginBottom: "10px" }}>
          Search your Repository here....
        </h3>
        <p>This is a web application for searching git repository according to your needs.</p>
      </div>
    </div>
  );
};

export default FirstRender;
