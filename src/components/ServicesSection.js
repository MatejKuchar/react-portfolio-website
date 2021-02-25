import React from "react";

import image2 from "../img/image2.jpg";
import clock from "../img/icons/clock.svg";
import diaphragm from "../img/icons/diaphragm.svg";
import money from "../img/icons/money.svg";
import team from "../img/icons/team.svg";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          Hight <span>quality</span> service.
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Time efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Save the money</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>something</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={team} alt="team" />
              <h3>Team work</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={image2} alt="Guy with a camera" />
      </div>
    </div>
  );
};

export default ServicesSection;
