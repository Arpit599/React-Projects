import React from "react";

function TabButton(props) {
  const styles = {
    borderLeft: "7.5px solid orangered",
    color: "orangered",
  };

  return (
    <button
      className={`${props.className}${props.active ? " active" : ""}`}
      style={props.active ? styles : null}
      onClick={() => props.onClick(props.className)}
    >
      {props.text}
    </button>
  );
}

export default TabButton;
