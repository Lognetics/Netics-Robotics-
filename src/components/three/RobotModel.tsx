"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

/**
 * Procedural humanoid robot built from primitives.
 * Placeholder until real GLB models are supplied — swap in <primitive object={gltf.scene}/>.
 */
export default function RobotModel({ accent = "#19e3ff" }: { accent?: string }) {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.25) * 0.5;
    group.current.position.y = Math.sin(t * 0.9) * 0.06 - 0.1;
  });

  const metal = (
    <meshStandardMaterial color="#aeb6c6" metalness={0.95} roughness={0.25} />
  );

  return (
    <group ref={group} scale={1.1} position={[0, -0.1, 0]}>
      {/* Head */}
      <mesh position={[0, 1.55, 0]}>
        <boxGeometry args={[0.5, 0.42, 0.46]} />
        {metal}
      </mesh>
      {/* Visor */}
      <mesh position={[0, 1.57, 0.235]}>
        <boxGeometry args={[0.42, 0.16, 0.04]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={2.4} toneMapped={false} />
      </mesh>
      {/* Neck */}
      <mesh position={[0, 1.3, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.16, 16]} />
        {metal}
      </mesh>
      {/* Torso */}
      <mesh position={[0, 0.92, 0]}>
        <boxGeometry args={[0.74, 0.86, 0.44]} />
        <meshStandardMaterial color="#c7cedb" metalness={0.9} roughness={0.3} />
      </mesh>
      {/* Chest core */}
      <mesh position={[0, 1.0, 0.23]}>
        <circleGeometry args={[0.1, 32]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={3} toneMapped={false} />
      </mesh>
      {/* Pelvis */}
      <mesh position={[0, 0.42, 0]}>
        <boxGeometry args={[0.6, 0.28, 0.4]} />
        {metal}
      </mesh>

      {/* Shoulders + arms */}
      {[-1, 1].map((s) => (
        <group key={s} position={[s * 0.5, 1.18, 0]}>
          <mesh>
            <sphereGeometry args={[0.16, 24, 24]} />
            {metal}
          </mesh>
          <mesh position={[s * 0.06, -0.32, 0]}>
            <capsuleGeometry args={[0.1, 0.46, 8, 16]} />
            {metal}
          </mesh>
          <mesh position={[s * 0.1, -0.78, 0]}>
            <capsuleGeometry args={[0.085, 0.4, 8, 16]} />
            <meshStandardMaterial color="#9aa3b5" metalness={0.9} roughness={0.35} />
          </mesh>
          <mesh position={[s * 0.12, -1.04, 0]}>
            <boxGeometry args={[0.16, 0.2, 0.14]} />
            {metal}
          </mesh>
        </group>
      ))}

      {/* Legs */}
      {[-1, 1].map((s) => (
        <group key={s} position={[s * 0.2, 0.18, 0]}>
          <mesh position={[0, -0.1, 0]}>
            <capsuleGeometry args={[0.13, 0.5, 8, 16]} />
            {metal}
          </mesh>
          <mesh position={[0, -0.62, 0]}>
            <capsuleGeometry args={[0.11, 0.46, 8, 16]} />
            <meshStandardMaterial color="#9aa3b5" metalness={0.9} roughness={0.35} />
          </mesh>
          <mesh position={[0, -0.92, 0.08]}>
            <boxGeometry args={[0.22, 0.12, 0.4]} />
            {metal}
          </mesh>
        </group>
      ))}
    </group>
  );
}
