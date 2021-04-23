import React, { useEffect, useRef, useState } from "react";

function UseEffect() {
  const [name, setName] = useState("Kyle");
  const previousName = useRef(null);
  console.log("Before useEffect");

  useEffect(() => {
    console.log("Before prev");
    previousName.current = name;
    console.log("After prev");
  }, [name]);

  console.log("After useEffect");
  return (
    <>
      {console.log("Before inputfield")}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {console.log("After inputfield")}

      <div>
        {previousName.current} => {name}
      </div>
    </>
  );
  //   const [triggerName, settriggerName] = useState("");
  //   const testRef = useRef(null);
  //   console.log("Render");
  //   useEffect(() => {
  //     testRef.current = triggerName;
  //     console.log("TriggerName: ", triggerName);
  //     console.log(testRef.current);
  //   }, [triggerName]);

  //   return (
  //     <div>
  //       <button onClick={() => settriggerName("Post")}>Post</button>
  //       <button onClick={() => settriggerName("Comment")}>Comment</button>
  //       <button onClick={() => settriggerName("Share")}>Share</button>
  //       <h1>{triggerName}</h1>
  //     </div>
  //   );
}

export default UseEffect;
