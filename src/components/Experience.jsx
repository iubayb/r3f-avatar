import React, { useMemo } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import Avatar from './Avatar';

export const Experience = () => {
  const viewport = useThree((state) => state.viewport);

  const texture = useTexture('/textures/background.jpeg');

  return (
    <>
      <OrbitControls />
      <Avatar position={[0, -3.5, 5]} scale={2.4} />
      <directionalLight position={[0, 10, -10]} intensity={10} />
      <directionalLight position={[10, -5, -10]} intensity={2} />
      <directionalLight position={[-10, -5, -10]} intensity={2} />
      <directionalLight position={[0, 0, 10]} intensity={5} />
      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      
    </>
  );
};
