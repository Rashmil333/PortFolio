import { Canvas } from '@react-three/fiber';
import { useState, useEffect } from 'react';
import styles from './mariana.module.scss';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from '@react-three/drei';

const Model = ({ url }) => {
    const [model, setModel] = useState();
    useEffect(() => {
        new GLTFLoader().load(url, setModel);
    }, [url]) //build issue adding dependency
    console.log(model);
    return model ? <primitive object={model.scene} /> : null
}

export const Ship = () => {
    return (
        <mesh>
            <Model url={'/Models/SmallSubmarine/scene.gltf'} />
        </mesh>
    )
}

const Mariana = () => {
    return (
        <div className={styles.sea}>
            <p className={styles.enterButton}>Launch My ship</p>
            {/* <Canvas>
                <Ship />
                <ambientLight />
                <OrbitControls />
            </Canvas> */}
        </div>
    )
}

export default Mariana
