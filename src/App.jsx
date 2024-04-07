import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas>
      <Shrit /> 
    </Canvas>
  );
}

function Shrit() {
  return (
    <mesh>
      <boxGeometry args={[25, 18,2]} />
      <meshNormalMaterial />
    </mesh>
  );
}
export default App;
