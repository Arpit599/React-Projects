import React from "react";

export const Footer = () => {
  const footerStyle = {
    position: "relative",
    bottom: "0px",
    width: "100%",
    height: "40px",
    marginTop: "auto",
  };

  return (
    <footer
      className="bg-dark text-light py-3 d-flex justify-content-center align-items-center"
      style={footerStyle}
    >
      <p className="text-center m-0">Copyright &copy; MyTodoList.com</p>
    </footer>
  );
};
