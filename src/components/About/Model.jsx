"use client";
import {
  Center,
  OrbitControls,
  OrthographicCamera,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useEffect, Suspense } from "react";
import Circle from "@/assets/images/circle.svg";
import Arrow from "@/assets/images/arrow.svg";
import Image from "next/image";

export function Model() {
  const handleScale = () => {
    if (window.innerWidth < 1024 && window.innerWidth > 768) {
      return 1.3;
    } else if (window.innerWidth < 768 && window.innerWidth > 600) {
      return 1.5;
    } else if (window.innerWidth < 600 && window.innerWidth > 450) {
      return 1.2;
    } else if (window.innerWidth < 450) {
      return 0.8;
    } else if (window.innerWidth > 1024) {
      return 1.5;
    }
  };

  const [scale, setScale] = useState(handleScale());
  const [modelScene, setModelScene] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const modelRef = useRef();

  const { scene } = useGLTF(
    "/3d-models/amenemhat_iii/granite_head_of_amenemhat_iii.glb"
  );
  useEffect(() => {
    setModelScene(scene);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScale(handleScale());
      setScreenWidth(window.innerWidth); // Update screenWidth to trigger re-render
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Return the rendered component only when modelScene is available
  return (
    <Center key={screenWidth}>
      <primitive
        ref={modelRef}
        object={scene}
        scale={scale}
        // position={[1.7, 0, 0]}
        // position={[1.6, 0, 0]}
        // position={[0.2, -3, 0]}
        // rotation={[-Math.PI / 2, 0, 0]}
      />
    </Center>
  );
}

export default function ThreeDModel() {
  return (
    <div className="relative h-full">
      <Canvas>
        <directionalLight
          position={[-10, 2, -10]} // Adjust the position to change the light angle
          intensity={0.8} // Brightness of the light
          castShadow // Enable shadow casting
          shadow-mapSize-width={1024} // Increase shadow resolution
          shadow-mapSize-height={1024}
          shadow-camera-near={20} // Fine-tune the shadow
          shadow-camera-far={50}
          shadow-camera-left={-10} // Size of the shadow camera frustum
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <directionalLight
          position={[10, 0, -5]} // Back light position
          intensity={0.8} // Lower intensity to avoid overpowering the main light
        />
        <ambientLight intensity={0.2} />
        <pointLight position={[-20, 10, 0]} />
        <OrthographicCamera
          makeDefault
          near={1}
          far={1000}
          position={[0, -0.3, 5]}
          zoom={100}
        />
        <OrbitControls
          enablePan={false}
          enableRotate={false}
          enableZoom={false}
          minDistance={300}
          maxDistance={300}
          autoRotateSpeed={-5}
          autoRotate={true}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
        <Suspense fallback={<></>}>
        <Model />
      </Suspense>
        {/* Plane to catch the shadow */}
        <mesh
          receiveShadow
          position={[0, -2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        >
          <planeGeometry args={[100, 100]} />
          <shadowMaterial opacity={0.3} />
        </mesh>
      </Canvas>
      <div className="absolute md:-bottom-12 lg:bottom-0 bottom-0 lg:left-12 left-0  p-4">
        <p className="sm:text-lg md:text-3xl uppercase text-sm">
          I'm not this{" "}
          <span className="relative">
            one{" "}
            <Image
              className="absolute left-0 top-0"
              src={Circle}
              alt="circle"
            />{" "}
            <Image className="absolute left-8 top-3" src={Arrow} alt="circle" />
          </span>
        </p>
        <p className="sm:text-lg text-sm text-accent font-playfair">
          Amenemhat III
        </p>
      </div>
    </div>
  );
}
