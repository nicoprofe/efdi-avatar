import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 4, 7], fov: 42}} >
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
