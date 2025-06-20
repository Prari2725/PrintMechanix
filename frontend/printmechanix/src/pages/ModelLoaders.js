// src/components/ModelLoaders.jsx
import React, { useEffect, useRef, useState } from 'react';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function STLModel({ file }) {
  const meshRef = useRef();
  const [geometry, setGeometry] = useState();

  useEffect(() => {
    const loader = new STLLoader();
    const reader = new FileReader();

    reader.onload = (e) => {
      const arrayBuffer = e.target.result;
      const geometry = loader.parse(arrayBuffer);
      setGeometry(geometry);
    };

    reader.readAsArrayBuffer(file);
  }, [file]);

  return geometry ? (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial color="royalblue" />
    </mesh>
  ) : null;
}

export function GLTFModel({ file }) {
  const [scene, setScene] = useState();

  useEffect(() => {
    const loader = new GLTFLoader();
    const reader = new FileReader();

    reader.onload = (e) => {
      const blob = new Blob([e.target.result], { type: file.type });
      const url = URL.createObjectURL(blob);

      loader.load(
        url,
        (gltf) => setScene(gltf.scene),
        undefined,
        (err) => console.error('GLTF load error:', err)
      );
    };

    reader.readAsArrayBuffer(file);
  }, [file]);

  return scene ? <primitive object={scene} scale={0.01} /> : null;
}
