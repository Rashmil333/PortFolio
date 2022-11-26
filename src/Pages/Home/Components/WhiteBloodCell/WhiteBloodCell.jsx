import { useRef, } from 'react'
import { useFrame, useLoader, } from '@react-three/fiber';
import * as THREE from "three";
import {
    MeshDistortMaterial,
} from "@react-three/drei";
import { useSpring, a } from '@react-spring/three';

const WhiteBloodCell = ({ texture, position, hovered, index }) => {
    const base = useLoader(THREE.TextureLoader, texture);
    const whiteBloodCellRef = useRef();
    useFrame((state) => {
        whiteBloodCellRef.current.rotation.y += index / 100;
        whiteBloodCellRef.current.rotation.x = Math.sin((state.clock.getElapsedTime())) / 100 + index / 100;
        // whiteBloodCellRef.current.rotation.y += 0.1;
    })

    const props = useSpring({
        scale: hovered ? 0.2 : 0.1
    })

    return (
        <a.mesh scale={props.scale} position={position} ref={whiteBloodCellRef} rotation={[0, 0, 0]}>
            <torusGeometry args={[5, 3, 16, 200]} />
            <MeshDistortMaterial attach='material' map={base} roughness={10} metalness={0} distort={hovered ? 1 : 0.5} />
        </a.mesh>
    )
}

export default WhiteBloodCell;
