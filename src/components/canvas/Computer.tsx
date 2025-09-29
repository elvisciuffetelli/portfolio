import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

import CanvasLoader from "./Loader";

interface ComputersProps {
  isMobile: boolean;
}

const Computers = ({ isMobile }: ComputersProps) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const {
    // Lighting controls
    hemisphereIntensity,
    spotLightPosition,
    spotLightAngle,
    spotLightPenumbra,
    spotLightIntensity,
    pointLightIntensity,
    pointLightPosition,
    // Model controls
    modelScale,
    modelPosition,
    modelRotation,
  } = useControls(process.env.NODE_ENV === 'development' ? {
    // Lighting
    hemisphereIntensity: { value: 6, min: 0, max: 10, step: 0.01 },
    spotLightPosition: { value: [-20, 50, 10], step: 1 },
    spotLightAngle: { value: 0.12, min: 0, max: 1, step: 0.01 },
    spotLightPenumbra: { value: 1, min: 0, max: 1, step: 0.01 },
    spotLightIntensity: { value: 2, min: 0, max: 5, step: 0.1 },
    pointLightIntensity: { value: 1.5, min: 0, max: 5, step: 0.1 },
    pointLightPosition: { value: [0, 2, 0], step: 1 },
    // Model
    modelScale: {
      value: isMobile ? 0.80 : 0.90,
      min: 0.1,
      max: 2,
      step: 0.01
    },
    modelPosition: {
      value: [0, -1.8, -1.5],
      step: 0.1
    },
    modelRotation: { value: [-0.01, -0.2, -0.1], step: 0.01 },
  } : {
    hemisphereIntensity: 6,
    spotLightPosition: [-20, 50, 10],
    spotLightAngle: 0.12,
    spotLightPenumbra: 1,
    spotLightIntensity: 2,
    pointLightIntensity: 1.5,
    pointLightPosition: [0, 2, 0],
    modelScale: isMobile ? 0.80 : 0.90,
    modelPosition: [0, -1.8, -1.5],
    modelRotation: [-0.01, -0.2, -0.1],
  });

  return (
    <mesh>
      <hemisphereLight intensity={hemisphereIntensity} groundColor='black' />
      <spotLight
        position={spotLightPosition}
        angle={spotLightAngle}
        penumbra={spotLightPenumbra}
        intensity={spotLightIntensity}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={pointLightIntensity} position={pointLightPosition} />
      <primitive
        object={computer.scene}
        scale={modelScale}
        position={modelPosition}
        rotation={modelRotation}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ height: isMobile ? 250 : 350 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;