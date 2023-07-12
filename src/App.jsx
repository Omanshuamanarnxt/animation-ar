import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const modelViewerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    const speeds = [1, 2, 0.5, -1];

    let i = 0;
    const play = () => {
      modelViewer.timeScale = speeds[i++ % speeds.length];
      modelViewer.play({ repetitions: 1 });
    };

    if (modelViewer.loaded) {
      modelViewer.addEventListener("finished", play);
      modelViewer.pause();
      setIsPlaying(false);
    } else {
      modelViewer.addEventListener("load", () => {
        modelViewer.addEventListener("finished", play);
        modelViewer.pause();
        setIsPlaying(false);
      });
    }
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
        src="https://jobpostingbucket.s3.ap-south-1.amazonaws.com/wallsandfloor/RobotExpressive.glb"
        alt="An animate 3D model of a robot">
        <div id="controls" className="dim">
          <button onClick={handleToggleAnimation}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </model-viewer>
    </div>
  );
};

export default App;
