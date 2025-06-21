// src/components/ModelViewer.jsx
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, PresentationControls ,Center} from '@react-three/drei';
import { STLModel, GLTFModel } from './ModelLoaders';
import * as THREE from 'three';
const RotatingModel = ({ children }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // rotate around Y-axis
    }
  });

  return (
    <group ref={groupRef}>
      {/* ✅ Center the model before rotating */}
      <Center>{children}</Center>
    </group>
  );

};

const AxisHelper = () => {
  const helperRef = useRef();
  return <primitive ref={helperRef} object={new THREE.AxesHelper(2)} />;
};

const ModelViewer = ({ file }) => {
  if (!file || !file.name) {
    return <p className="text-danger">Invalid or missing file</p>;
  }

  const ext = file.name.split('.').pop().toLowerCase();

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Canvas camera={{ position: [0, 50, 15] }}>
        <ambientLight />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={<span>Loading 3D Model...</span>}>
          <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={null}>
             {/* Axis helper for reference */}
             <primitive object={new THREE.AxesHelper(2)} />
              {/* ✅ Centered and rotating model */}
              <RotatingModel>
                {ext === 'stl' ? <STLModel file={file} /> : <GLTFModel file={file} />}
              </RotatingModel>
            </Stage>
          </PresentationControls>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
