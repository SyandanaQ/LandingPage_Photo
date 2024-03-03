import React, { useState } from "react";
import PortoPic from "../Assets/port.jpg";
import { FiArrowRight } from "react-icons/fi";

const Porto = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, alt: "Image 1", src: PortoPic },
    { id: 2, alt: "Image 2", src: PortoPic },
    { id: 3, alt: "Image 3", src: PortoPic },
    { id: 4, alt: "Image 4", src: PortoPic },
    // ...Tambahkan lebih banyak gambar jika diperlukan
  ];

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

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
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={index === currentIndex ? "visible" : "hidden"}
          />
        ))}
        <div className="porto-buttons-container">
          <button className="secondary-button">Watch More <FiArrowRight />{" "}</button>
        </div>
      </div>
    </div>
  );
};

export default Porto;
