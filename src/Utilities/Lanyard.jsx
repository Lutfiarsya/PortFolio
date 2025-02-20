import { Text } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from 'three'
import Profile from '../Assets/Photo Profile.jpeg'
import Code from '../Assets/QRCode.png'
import { useMediaQuery } from "react-responsive";


function Lanyard() {
  const ImageProfile = useLoader(THREE.TextureLoader, Profile)
  const QrCode = useLoader(THREE.TextureLoader, Code)
  const Mobile = useMediaQuery({ maxWidth: 768})



  return (
    <group position={[0,0,0]}>
  

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={Mobile ? [1.5, 2, 0.02] : [1.2, 1.7, 0.02]} /> {/* Lebar 1.5, Tinggi 1, Ketebalan 0.02 */}
        <meshBasicMaterial color='white' />
      </mesh>


        {/* Foto Profile */}
      <group>
      <mesh position={Mobile ? [0, 0.5, 0.02] : [0, 0.3, 0.02]}>
        <circleGeometry args={ Mobile ? [0.4, 22] : [0.3, 22]}/>
        <meshBasicMaterial map={ImageProfile}/>
      </mesh>
      <mesh position={Mobile ? [0, 0.5, 0.012] : [0, 0.3, 0.012]}>
        <circleGeometry args={Mobile ? [0.41, 32] : [0.31, 32]} /> 
        <meshBasicMaterial color="black" />
      </mesh>
      </group>

      <group>
        <mesh position={Mobile ? [0, -0.6, 0.02] : [0, -0.5, 0.02]}>
          <boxGeometry args={Mobile ? [.5, .5, 0] :  [.4, .4, 0]} />
          <meshBasicMaterial map={QrCode}/>
        </mesh>
      </group>

        <Text
          position={Mobile ? [0, -0.05, 0.02] :  [0, -0.15, 0.02]} // Slightly above the card
          fontSize={Mobile ? .14 : 0.08}
          color="black"
          fontWeight={'bold'}
        
        >
        Luthfie Arsya
        </Text>

        <Text
          position={Mobile ?  [0, -0.2, 0.02] : [0, -0.25, 0.02]} // Slightly above the card
          fontSize={Mobile ? 0.08 : 0.05}
          color="black"
          fontStyle="italic"
        
        >
        "Adaptation or Die"
        </Text>
    </group>
  );

}


export default Lanyard