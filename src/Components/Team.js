import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";

const Team = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Our Team</p>
        <h1 className="primary-heading">Lorem ipsum dolor</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="row">
        <div className="col-md-4">
          {" "}
          {/* Ubah menjadi 4 kolom agar ada 3 kolom dalam satu baris */}
          <div className="team-section-bottom">
            <img src={ProfilePic} alt="" />
            <h2>John Doe</h2>
            <h3>Pegawai</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="team-section-bottom">
            <img src={ProfilePic} alt="" />
            <h2>John Doe</h2>
            <h3>Pegawai</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="team-section-bottom">
            <img src={ProfilePic} alt="" />
            <h2>John Doe</h2>
            <h3>Pegawai</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
