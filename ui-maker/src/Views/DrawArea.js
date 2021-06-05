import "../styles.css";
import { React, useState, useEffect, useRef } from "react";
import Excalidraw from "@excalidraw/excalidraw";
import "./DrawArea.css";

function DrawArea(props) {
  const excalidrawRef = useRef(null);
  const excalidrawWrapperRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  const [viewModeEnabled, setViewModeEnabled] = useState(false);
  const [zenModeEnabled, setZenModeEnabled] = useState(false);
  const [gridModeEnabled, setGridModeEnabled] = useState(false);

  useEffect(() => {
    setDimensions({
      width: excalidrawWrapperRef.current.getBoundingClientRect().width,
      height: excalidrawWrapperRef.current.getBoundingClientRect().height,
    });
    const onResize = () => {
      setDimensions({
        width: excalidrawWrapperRef.current.getBoundingClientRect().width,
        height: excalidrawWrapperRef.current.getBoundingClientRect().height,
      });
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [excalidrawWrapperRef]);

  // const updateScene = () => {
  //   const sceneData = {
  //     elements: [
  //       {
  //         type: "rectangle",
  //         version: 141,
  //         versionNonce: 361174001,
  //         isDeleted: false,
  //         id: "oDVXy8D6rom3H1-LLH2-f",
  //         fillStyle: "hachure",
  //         strokeWidth: 1,
  //         strokeStyle: "solid",
  //         roughness: 1,
  //         opacity: 100,
  //         angle: 0,
  //         x: 100.50390625,
  //         y: 93.67578125,
  //         strokeColor: "#c92a2a",
  //         backgroundColor: "transparent",
  //         width: 186.47265625,
  //         height: 141.9765625,
  //         seed: 1968410350,
  //         groupIds: [],
  //       },
  //     ],
  //     appState: {
  //       viewBackgroundColor: "#edf2ff",
  //     },
  //   };
  //   excalidrawRef.current.updateScene(sceneData);
  // };
  //   const [buttonActive, setButtonActive] = useState("tech-stack-info");

  //   const displayStyle = {
  //     display: "none",
  //   };

  const [initialData, setinitialData] = useState([]);
  const [clickActive, setclickActive] = useState(false);

  const updateDb = () => {
    console.log("Inside updatedb method", initialData);
    //To store the lastly added element first
    fetch(`http://localhost:5050/elements`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(initialData[initialData.length - 1]),
    })
      .then((res) => res.json())
      .then((res) => console.log("Successfull", res));
    //Update the remaining elements parameters
    initialData.map((data) => {
      fetch(`http://localhost:5050/elements/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
    });
  };

  useEffect(() => {
    fetch("http://localhost:5050/elements")
      .then((res) => res.json())
      .then((res) => {
        const obj = { elements: res };
        setinitialData(res);
        excalidrawRef.current.updateScene(obj);
        console.log("Initial useEffect", obj);
      });
  }, []);

  return (
    <>
      <div className="draw-container" style={props.style}>
        <div className="button-wrapper">
          {/* <button className="update-scene" onClick={() => updateScene()}>
                Update Scene
              </button> */}
          <div className="checkbox-wrapper">
            <label htmlFor="viewModeBtn">
              <input
                id="viewModeBtn"
                type="checkbox"
                checked={viewModeEnabled}
                onChange={() => setViewModeEnabled(!viewModeEnabled)}
              />
              View Mode
            </label>
            <label htmlFor="zenModeBtn">
              <input
                id="zenModeBtn"
                type="checkbox"
                checked={zenModeEnabled}
                onChange={() => setZenModeEnabled(!zenModeEnabled)}
              />
              Zen Mode
            </label>
            <label htmlFor="gridModeBtn">
              <input
                id="gridModeBtn"
                type="checkbox"
                checked={gridModeEnabled}
                onChange={() => setGridModeEnabled(!gridModeEnabled)}
              />
              Grid Mode
            </label>
          </div>

          <button
            className="reset-scene-btn"
            onClick={() => excalidrawRef.current.resetScene()}
          >
            Reset Scene
          </button>
        </div>

        <div className="excalidraw-wrapper" ref={excalidrawWrapperRef}>
          <Excalidraw
            ref={excalidrawRef}
            width={dimensions.width}
            height={dimensions.height}
            initialData={initialData}
            onChange={(elements, state) => {
              setinitialData(elements);
            }}
            onPointerUpdate={(payload) => {
              if (payload.button === "down") {
                setclickActive(true);
              }
              if (clickActive && payload.button === "up") {
                setclickActive(false);
                console.log("Inside onpointerupdate", {
                  elements: initialData,
                });
                updateDb();
              }
            }}
            onCollabButtonClick={() =>
              window.alert("You clicked on collab button")
            }
            viewModeEnabled={viewModeEnabled}
            zenModeEnabled={zenModeEnabled}
            gridModeEnabled={gridModeEnabled}
          >
            {" "}
          </Excalidraw>
        </div>
      </div>
    </>
  );
}

export default DrawArea;
