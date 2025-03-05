import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

const Logo3D = () => {
  const { scene } = useGLTF("/LOGO.glb");
  const logoRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: -0.3, y: 0.4 });

  const handleMouseMove = (event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth - 0.35) * 1;
    const y = (event.clientY / window.innerHeight - 0.5) * 1;

    targetRotation.current.x = y * 1;
    targetRotation.current.y = x * 1;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.rotation.x = THREE.MathUtils.lerp(
        logoRef.current.rotation.x,
        targetRotation.current.x,
        0.07
      );

      logoRef.current.rotation.y = THREE.MathUtils.lerp(
        logoRef.current.rotation.y,
        targetRotation.current.y,
        0.07
      );
    }
  });

  return <primitive object={scene} ref={logoRef} scale={8} />;
};

const HeroLogo = () => {
  return (
    <Canvas gl={{ alpha: true }} style={{}}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <Logo3D />
    </Canvas>
  );
};

export default HeroLogo;
