import React from "react";
import homeImage1 from "../img/image1.jpg";

const AboutSection = () => {
  return (
    <div className="description">
      <div className="title">
        <div className="hide">
          <h2>We work to make</h2>
        </div>
        <div className="hide">
          <h2>
            your <span>dreams</span>
          </h2>
        </div>
        <div className="hide">
          <h2>come true</h2>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          are professionals with amazing skils.
        </p>
        <button>Contact us</button>
      </div>
      <div className="image">
        <img src={homeImage1} alt="Guy with a camera" />
      </div>
    </div>
  );
};

export default AboutSection;
