'use client';
import React, { Suspense, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({
  scrollProgress,
  pointer,
}: {
  scrollProgress: number;
  pointer: { x: number; y: number };
}) {
  const gltf = useGLTF('/profilePics/models/07.glb');
  const modelRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (modelRef.current) {
      // Base scroll rotation
      const initial = [-0.3, 0.5, 0.1];
      const target = [0, 0, 0];
      const baseX = THREE.MathUtils.lerp(initial[0], target[0], scrollProgress);
      const baseY = THREE.MathUtils.lerp(initial[1], target[1], scrollProgress);
      const baseZ = THREE.MathUtils.lerp(initial[2], target[2], scrollProgress);

      // Pointer influence (hover)
      const hoverX = (pointer.y - 0.5) * 0.3;
      const hoverY = (pointer.x - 0.5) * 0.3;

      // Combine both
      modelRef.current.rotation.x += ((baseX + hoverX) - modelRef.current.rotation.x) * 0.05;
      modelRef.current.rotation.y += ((baseY + hoverY) - modelRef.current.rotation.y) * 0.05;
      modelRef.current.rotation.z += (baseZ - modelRef.current.rotation.z) * 0.05;
    }
  });

  return <primitive object={gltf.scene} ref={modelRef} scale={1}/>;
}

export default function Community2() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);
        const maxDistance = windowHeight / 2;
        const progress = 1 - Math.min(distanceFromCenter / maxDistance, 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ width: '100%', height: '100vh' }}
      className="z-10"
      onMouseMove={(e) => {
        const rect = wrapperRef.current?.getBoundingClientRect();
        if (rect) {
          setPointer({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height,
          });
        }
      }}
    >
      <Canvas style={{ width: '100%', height: '100vh', display: 'block' }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model scrollProgress={scrollProgress} pointer={pointer} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={true} enableRotate={false} />
      </Canvas>
    </div>
  );
}
