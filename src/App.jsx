import { Canvas } from "@react-three/fiber";
import { Scroll } from "@react-three/drei";
import Content from "./Content/Content";
import "./App.css";
import Experience from "./experience/Experience";
import { Perf } from "r3f-perf";
import { ScrollControls } from "@react-three/drei";
import { WhyUs } from "./Content/WhyUs/WhyUs";

function App() {
  return (
    <>
      <Content />
      {/* <Canvas> */}
      {/*   <ScrollControls pages={5}> */}
      {/*     <Scroll html></Scroll> */}
      {/*     <Scroll> */}
      {/*       <Perf position="top-right" /> */}
      {/*       <Experience /> */}
      {/*     </Scroll> */}
      {/*   </ScrollControls> */}
      {/* </Canvas> */}
    </>
  );
}

export default App;
