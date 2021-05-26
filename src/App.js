import React,{useRef,useState} from 'react'
import { Canvas , useFrame} from 'react-three-fiber'
import {useSpring,a} from "@react-spring/three"
//import { Box } from '@react-three/drei';

import './App.css';


const Box=({position,color})=>{
  const mesh=useRef(null);
  useFrame(()=>(mesh.current.rotation.z = mesh.current.rotation.x = mesh.current.rotation.y +=0.01));
  const [expand, setExpand]=useState(false);
  const props=useSpring({scale: expand ? [1.4,1.4,1.4]:[1,1,1],})
  return (
       <a.mesh onClick={()=>setExpand(!expand)} scale={props.scale} position={position} ref={mesh}>
         <boxBufferGeometry attach="geometry" args={[3,3,3]} />
         <meshStandardMaterial attach="material" color={color} />
       </a.mesh>     
  );
}

const Sphere=({position, color})=>{
  const mesh=useRef(null);
  useFrame(()=>(mesh.current.rotation.z = mesh.current.rotation.x = mesh.current.rotation.y +=0.01));
  const [expand, setExpand]=useState(false);
  const props=useSpring({scale: expand ? [1.4,1.4,1.4]:[1,1,1],})
  return (
       <a.mesh onClick={()=>setExpand(!expand)} scale={props.scale} position={position} ref={mesh}>
         <sphereBufferGeometry attach="geometry" args={[2,70,50]} />
         <meshStandardMaterial attach="material" color={color} />
       </a.mesh>     
  );
}

const Cylinder=({position,color})=>{
  const mesh=useRef(null);
  useFrame(()=>(mesh.current.rotation.z = mesh.current.rotation.x = mesh.current.rotation.y +=0.01));
  const [expand, setExpand]=useState(false);
  const props=useSpring({scale: expand ? [1.4,1.4,1.4]:[1,1,1],})
  return (
    <>
       <a.mesh onClick={()=>setExpand(!expand)} scale={props.scale} position={position} ref={mesh}>
         <cylinderBufferGeometry attach="geometry" args={[1,1,4,50,true]} />
         <meshStandardMaterial attach="material" color={color} />
       </a.mesh>   
    </>  
  );
}

function App() {
  return(
    <>
     <Canvas  
     colorManagement 
     camera={{position:[-5,2,10], few:60}} >
       <ambientLight  intensity={0.4} />
       <directionalLight  
        
        position={[0,10,0]}
        intensity={1.4}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={10}
        shadow-camera-right={10}
        shadow-camera-top={-10}
        shadow-camera-bottom={-10}
       />
       <pointLight position={[-10,0,-15]} intensity={0.5} />
       <pointLight position={[0,-10,0]} intensity={1.2} />
      <group>
        <mesh 
        
        rotation={[-Math.PI/2,0,0]} 
        position={[0,-3,0]}>
          <planeBufferGeometry attach='geometry' args={[100,100]} />
          <shadowMaterial attach="material"  />
        </mesh>
      </group>

       <Box position={[-4,1,-5]} color="#ef476f" />
       <Cylinder position={[-1,1,0]} color="#4c956c" />
       <Sphere position={[4,1,1]} color="#d00000" />
     </Canvas>
    </>
  )
  
};



export default App;
