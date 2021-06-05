import "./styles.css";
import { React, useState } from "react";
import "./App.css";
import TechStack from "./Views/TechStack";
import TabButton from "./Components/TabButton";
import DrawArea from "./Views/DrawArea";
import DesignArea from "./Views/DesignArea";
import TodoList from "./Components/TodoList";

function App() {
  const [buttonActive, setButtonActive] = useState("tech-stack-info");
  const handleTabBtnClick = (btnId) => {
    setButtonActive(btnId);
  };

  const displayStyle = {
    display: "none",
  };

  return (
    <>
      <div className="tab-container">
        <div className="sidebar">
          <TabButton
            className={"tech-stack-info"}
            active={buttonActive === "tech-stack-info" ? true : false}
            text={"Tech Stack"}
            onClick={handleTabBtnClick}
          ></TabButton>
          <TabButton
            className={"canvas-area"}
            active={buttonActive === "canvas-area" ? true : false}
            text={"Draw"}
            onClick={handleTabBtnClick}
          ></TabButton>
          <TabButton
            className={"todo-area"}
            active={buttonActive === "todo-area" ? true : false}
            text={"To-Dos"}
            onClick={handleTabBtnClick}
          ></TabButton>
          <TabButton
            className={"design-area"}
            active={buttonActive === "design-area" ? true : false}
            text={"Design"}
            onClick={handleTabBtnClick}
          ></TabButton>
        </div>
        <div className="tab-content">
          <TechStack
            style={buttonActive === "tech-stack-info" ? {} : displayStyle}
          ></TechStack>
          {buttonActive === "canvas-area" && (
            <DrawArea
              style={buttonActive === "canvas-area" ? {} : displayStyle}
            ></DrawArea>
          )}
          <TodoList style={buttonActive === "todo-area" ? {} : displayStyle} />
          <DesignArea
            style={buttonActive === "design-area" ? {} : displayStyle}
          />
        </div>
      </div>
    </>
  );
}

export default App;
