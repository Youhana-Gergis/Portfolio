import React from "react";
import { Html, useProgress } from "@react-three/drei";
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as='div' centerstyle={{display: "flex",justifyContent: "center",alignItems: "center",flexDirection: "column"}}>
      <span className='canvas-loader'></span>
      <p style={{fontSize: 50,color: "#F1F1F1",fontWeight: 900,marginTop: 40,}}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;