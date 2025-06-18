// src/components/ModelViewer.jsx
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from '@react-three/drei';

const STLModel = ({ url, rotate }) => {
  const geometry = useLoader(STLLoader, url);
  const meshRef = useRef();

  useFrame(() => {
    if (rotate === 'left') meshRef.current.rotation.y -= 0.01;
    if (rotate === 'right') meshRef.current.rotation.y += 0.01;
    if (rotate === 'up') meshRef.current.rotation.x -= 0.01;
    if (rotate === 'down') meshRef.current.rotation.x += 0.01;
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
};

const ModelViewer = ({ fileUrl, rotate }) => {
  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <STLModel url={fileUrl} rotate={rotate} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
