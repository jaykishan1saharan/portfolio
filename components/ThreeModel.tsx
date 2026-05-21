"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Avatar() {
  const { scene } = useGLTF("/models/avatar.glb");

  return (
    <primitive
      object={scene}
      scale={1.5}
      position={[-0.7, -0.9, 0]}
      rotation={[0, -0.2, 0]}
    />
  );
}

export default function ThreeModel() {
  return (
    <Canvas
      camera={{ position: [5, 1.5, 5], fov: 60 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 5, 5]} intensity={2} />

      <Avatar />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}