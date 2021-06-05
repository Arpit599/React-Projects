import React from "react";
import "./TechStack.css";

function TechStack(props) {
  return (
    <div className="outer-container">
      <div className="tech-stack-container" style={props.style}>
        <h1>Tech Stack</h1>
        <ul className="tech-stack-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>Fetch API</li>
          <li>npm package manager</li>
          <li>Excalidraw plugin</li>
          <li>JSON-server(Backend)</li>
        </ul>
        {/* <figure className="tech-stack-figure">
        <img src="mern.png" alt="" />
      </figure> */}
      </div>
    </div>
  );
}

export default TechStack;
