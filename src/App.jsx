import React, { useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const modelViewerRef = useRef(null);

  useEffect(() => {
    const modelViewer = document.querySelector("#change-speed-demo");
    const speeds = [1, 2, 0.5, -1];

    let i = 0;
    const play = () => {
      modelViewer.timeScale = speeds[i++ % speeds.length];
      modelViewer.play({ repetitions: 1 });
    };
    modelViewer.addEventListener("load", play);
    modelViewer.addEventListener("finished", play);
  }, []);
  //test
  return (
    <div>
      <model-viewer
        id="change-speed-demo"
        camera-controls
        touch-action="pan-y"
        animation-name="Dance"
        ar
        ar-modes="webxr scene-viewer"
        scale="0.2 0.2 0.2"
        shadow-intensity="1"
        src="./src/assets/RobotExpressive.glb"
        alt="An animate 3D model of a robot"></model-viewer>
    </div>
  );
};

export default App;
