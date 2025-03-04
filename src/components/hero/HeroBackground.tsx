import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const HeroBackground = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Funkcja do śledzenia ruchu myszy
  const handleMouseMove = (event: MouseEvent) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1; // Zmieniamy współrzędną x
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1; // Zmieniamy współrzędną y
  };

  // Używamy hooka useEffect, żeby ustawić nasłuchiwanie na event 'mousemove'
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove); // Dodaj nasłuchiwacz

    // Usuwamy nasłuchiwacz przy unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Pusty array oznacza, że nasłuchiwacz będzie dodany tylko raz

  // Używamy hooka useFrame, żeby zaktualizować rotację kuli na każdą klatkę
  useFrame(() => {
    if (meshRef.current) {
      // Ustawiamy rotację kuli w zależności od pozycji myszy
      meshRef.current.rotation.x = -mouse.current.y * Math.PI; // Możesz dostosować ten mnożnik
      meshRef.current.rotation.y = mouse.current.x * Math.PI; // Możesz dostosować ten mnożnik
    }
  });

  return (
    <>
      {/* Światło ambientowe */}
      <ambientLight intensity={1} />
      {/* Punktowe światło */}
      <pointLight position={[10, 10, 10]} />
      {/* Kula */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial color="#007bff" wireframe />
      </mesh>
    </>
  );
};

export default HeroBackground;
