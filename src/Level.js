import * as THREE from "three"

const boxGeometry = new THREE.BoxGeometry(1,1,1)
const floorMaterial = new THREE.MeshStandardMaterial( { color : "greenyellow"})
import { BoxGeometry } from "three"

function BlockStart({position = [0,0,0]}){
    return <group position = {position}>
    <mesh geometry={boxGeometry} material={floorMaterial} position ={ [0,-0.1,0]} scale={[7.5,0.2,7.5]} receiveShadow>
        
    </mesh>
    </group>
}
function BlockRight({position = [0,0,0]}){
    return <group position = {position}>
    <mesh geometry={boxGeometry} material={floorMaterial} position ={ [0,-0.1,0]} scale={[4,0.2,4]} receiveShadow>
        
    </mesh>
    </group>
}
function BlockLeft({position = [0,0,0]}){
    return <group position = {position}>
    <mesh geometry={boxGeometry} material={floorMaterial} position ={ [0,-0.1,0]} scale={[4,0.2,4]} receiveShadow>
        
    </mesh>
    </group>
}
function BlockAhead({position = [0,0,0]}){
    return <group position = {position}>
    <mesh geometry={boxGeometry} material={floorMaterial} position ={ [0,-0.1,0]} scale={[10,0.2,10]} receiveShadow>
        
    </mesh>
    </group>
}
function BlockRightAhead({position = [0,0,0]}){
    return <group position = {position}>
    <mesh geometry={boxGeometry} material={floorMaterial} position ={ [0,-0.1,0]} scale={[7.5,0.2,10]} receiveShadow>
        
    </mesh>
    </group>
}
function BlockLeftAhead({position = [0,0,0]}){
    return <group position = {position}>
    <mesh geometry={boxGeometry} material={floorMaterial} position ={ [0,-0.1,0]} scale={[7.5,0.2,10]} receiveShadow>
        
    </mesh>
    </group>
}


export default function Level()
{
    return <>
    

        <BlockStart position ={ [0,0,0 ] }/>
        <BlockRight position ={ [-7.25,0,3.5 ] }/>
        <BlockLeft position ={ [7.25,0,3.5 ] }/>
        <BlockAhead position ={ [0,0,-12.5 ] }/>
        <BlockLeftAhead position ={ [11.25,0,-7 ] }/>
        <BlockRightAhead position ={ [-11.25,0,-7 ] }/>
    </>
}