import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useCallback } from "react";
import { Vector2, Color } from "three";
import { vertexShader, fragmentShader } from "../shaders/Shader";

const Gradient = ({ darkMode }) => {
  const mesh = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });

  const uniforms = useRef({
    u_time: { value: 0.0 },
    u_mouse: { value: new Vector2(1, 1) },
    u_resolution: { value: new Vector2(1000, 1000) },
    u_bg: { value: new Color(darkMode ? "#0a0a0a" : "#fff7ed") },
    u_highlight_color: { value: new Color(darkMode ? "#c7d2fe" : "#4338ca") },
  });

  const updateMousePosition = useCallback((e) => {
    mousePosition.current = { x: e.pageX, y: e.pageY };
  }, []);

  useEffect(() => {
    uniforms.current.u_bg.value.set(darkMode ? "#0a0a0a" : "#fff7ed");
    uniforms.current.u_highlight_color.value.set(
      darkMode ? "#c7d2fe" : "#4338ca"
    );
  }, [darkMode]);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition, false);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition, false);
    };
  }, [updateMousePosition]);

  useFrame((state) => {
    const { clock } = state;

    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value = clock.getElapsedTime() / 4;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={1.5}>
      <planeGeometry args={[10, 10, 10, 10]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms.current}
        wireframe={false}
      />
    </mesh>
  );
};

const GradientBackground = ({ darkMode }) => {
  return (
    <Canvas
      className="absolute top-0 left-0 w-full h-full overflow-hidden max-h-screen transition-colors duration-300"
      camera={{ position: [0.0, 0.0, 1.5] }}
    >
      <Gradient darkMode={darkMode} />
    </Canvas>
  );
};

export default GradientBackground;
