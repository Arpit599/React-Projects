import React from "react";
import "./MainSection.css";
import { Button } from "./Button";

function mainSection() {
  return (
    <div className="main-section-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted></video>
      <h1 className="main-section-heading">ADVENTURE AWAITS</h1>
      <p className="main-section-para">What are you waiting for?</p>
      <div className="main-section-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default mainSection;
