import React, { useRef } from 'react'
import { useFrame, useLoader, } from '@react-three/fiber';
import * as THREE from "three";

const Box = (props) => {
    const { texture, args, position } = props;
    const base = useLoader(THREE.TextureLoader, texture);
    const boxref = useRef();
    useFrame(() => {
        boxref.current.rotation.y += 0.001
    }, []);
    return (
        <mesh ref={boxref} position={position}>
            <meshPhysicalMaterial map={base} attach='material' />
            <boxBufferGeometry args={args} attach='geometry' />
        </mesh>
    )
}

export default Box