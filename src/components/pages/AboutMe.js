import React from "react";
import Resume from "./Resume";

export default function AboutMe() {
  return (
    <div className="py-5 px-6">
      <h3>About Me</h3>
      <div className="d-flex justify-content-center">
        <img
          src={process.env.PUBLIC_URL + "/images/portfolioPic.jpg"}
          alt="headshotNick" id="headshotNick"
        />
        </div>
        <div className="d-flex justify-content-center">
        <h2> Hello, my name is Nick Lyle!</h2>
        </div>
        <div className="d-flex justify-content-center">
        <p>
          Starting fullstack web developer. <br /> 4 years experience in
          residential construction, <br /> and 3 years experience as a legal
          assistant. <br />
          Check out my resume below!
        </p>
        </div>
        <div className="d-flex justify-content-center">
        <Resume />
        </div>
    </div>
  );
}
