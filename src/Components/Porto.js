import React from "react";
import PortoPic from "../Assets/port.jpg";

const Porto = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Our Project</p>
        <h1 className="primary-heading">Portofolio</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="portopic">
        <img src={PortoPic} alt="Image 1" />
        <img src={PortoPic} alt="Image 2" />
        <img src={PortoPic} alt="Image 3" />
        <img src={PortoPic} alt="Image 4" />
      </div>
    </div>
  );
};

export default Porto;
