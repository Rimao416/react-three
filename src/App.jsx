import { Canvas } from "@react-three/fiber";
import { OrbitControls,Center } from "@react-three/drei";
import "./App.css";
function App({ position = [-1, 0, 2.5], fov = 25 }) {
  return (
    <Canvas
    eventSource={document.getElementById("root")}
    
    camera={{ position, fov }}>
      <Center>
        <Shirt />
      </Center>
      <OrbitControls />
    </Canvas>
  );
}

function Shirt() {
  return (
    <mesh>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshNormalMaterial />
    </mesh>
  );
}
export default App;
