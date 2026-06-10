import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Models";

export default function Scene() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <Model />

        <OrbitControls />
      </Canvas>
    </div>
  );
}