import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const modelViewerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const handleToggleAnimation = () => {
    const modelViewer = modelViewerRef.current;
    if (modelViewer) {
      if (isPlaying) {
        modelViewer.pause();
      } else {
        modelViewer.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  //test
  return (
    <div>
      <model-viewer
        ref={modelViewerRef}
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
      <button onClick={handleToggleAnimation}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default App;
