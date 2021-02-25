import React from "react";
import homeImage1 from "../img/image1.jpg";

import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true</h2>
          </Hide>
          <p>
            Contact us for any photography or videography ideas that you have.
            We are professionals with amazing skils.
          </p>
          <button>Contact us</button>
        </div>
      </Description>
      <Image>
        <img src={homeImage1} alt="Guy with a camera" />
      </Image>
    </About>
  );
};

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 10rem;
  color: white;
  background: black;
`;

const Description = styled.div`
  flex: 2;
  padding-right: 5rem;

  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    max-width: 35rem;
    height: 75vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
