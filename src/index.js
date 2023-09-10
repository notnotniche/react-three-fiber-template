import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import "./styles.css";
import App from "./app";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    shadows
    flat
    linear
    gl={{ alpha: false, physicallyCorrectLights: true }}
  >
    <React.Suspense fallback={<Text fontSize={0.2}>Loading...</Text>}>
      <App />
    </React.Suspense>
  </Canvas>
);
