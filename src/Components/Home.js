import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/ckuning1-removebg-preview.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Lorem ipsum dolor sit amet</h1>
          <p className="primary-text">
            Donec lacinia diam lacinia, convallis nunc non, accumsan velit.
            Phasellus fringilla, neque sit amet pretium pellentesque, purus
            nulla cursus arcu,
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img
            src={BannerImage}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
