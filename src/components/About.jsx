import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div className="about-block">
      <Fragment>
        <p className="about">Hi, i'm Opio Maxwell and here's my story...</p>

        <p>
          when i joined the workforce, there were days with unstable
          electricity. The company had a generator but it was too noisy for 
          concentration.
        </p>

        <p>
          This is why I started Home of Solar. At home of solar, our vision is
          to give companies independence over power together with environmental
          friendliness.
          <br />
          This is through distributing solar products and accessories such as
          panels, batteries, inverters and many others.
        </p>

        <p>You're welcome to see all our products here in the store...</p>
      </Fragment>

      <Link to="/products" className="btn btn-info">
        OPEN STORE
      </Link>
    </div>
  );
}

export default About;
