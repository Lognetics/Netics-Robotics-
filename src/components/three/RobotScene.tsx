"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, ContactShadows, Sparkles } from "@react-three/drei";
import { Suspense } from "react";
import RobotModel from "./RobotModel";

export default function RobotScene({
  accent = "#19e3ff",
  interactive = true,
  autoRotate = true,
}: {
  accent?: string;
  interactive?: boolean;
  autoRotate?: boolean;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.6, 5], fov: 38 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 6, 4]} angle={0.4} intensity={120} penumbra={1} color="#cfe0ff" />
        <pointLight position={[-5, 2, -3]} intensity={40} color={accent} />
        <pointLight position={[3, -2, 4]} intensity={20} color="#2f6bff" />

        <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.5}>
          <RobotModel accent={accent} />
        </Float>

        <Sparkles count={60} scale={6} size={2} speed={0.3} color={accent} opacity={0.5} />
        <ContactShadows position={[0, -1.05, 0]} opacity={0.5} scale={8} blur={2.6} far={3} color="#000000" />
        <Environment preset="city" />

        {interactive && (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate={autoRotate}
            autoRotateSpeed={0.8}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.8}
          />
        )}
      </Suspense>
    </Canvas>
  );
}
