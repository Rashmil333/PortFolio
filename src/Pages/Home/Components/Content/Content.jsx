import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import styles from './content.module.scss';
import WhiteBloodCell from '../WhiteBloodCell/WhiteBloodCell';

export const Flowers = ({ hovered }) => {
    const flowersRef = useRef();
    useFrame(() => {
        flowersRef.current.rotation.z += 0.005
    })
    return (
        <group ref={flowersRef} position={[0, 0, 0]}>
            <WhiteBloodCell index={1} hovered={hovered} position={[0, 0, 0]} texture={'/Textures/flower 1.png'} />
            <WhiteBloodCell index={2} hovered={hovered} position={[2, 0, -4]} texture={'/Textures/flower4.jfif'} />
            <WhiteBloodCell index={3} hovered={hovered} position={[-2, 0, -4]} texture={'/Textures/flower4.jfif'} />
            <WhiteBloodCell index={4} hovered={hovered} position={[-3, 2, -4]} texture={'/Textures/flower5.jpg'} />
            <WhiteBloodCell index={5} hovered={hovered} position={[-4, -2, -4]} texture={'/Textures/flower6.webp'} />
            <WhiteBloodCell index={6} hovered={hovered} position={[-6, 0, -5]} texture={'/Textures/flower 1.png'} />
            <WhiteBloodCell index={7} hovered={hovered} position={[1.5, 0, -4]} texture={'/Textures/flower4.jfif'} />
            <WhiteBloodCell index={8} hovered={hovered} position={[6, -1, -10]} texture={'/Textures/flower4.jfif'} />
            <WhiteBloodCell index={9} hovered={hovered} position={[7, 2, -20]} texture={'/Textures/flower5.jpg'} />
            <WhiteBloodCell index={10} hovered={hovered} position={[1, -2, -15]} texture={'/Textures/flower6.webp'} />
            <WhiteBloodCell index={11} hovered={hovered} position={[-8, -2, -50]} texture={'/Textures/flower6.webp'} />
            <WhiteBloodCell index={12} hovered={hovered} position={[-0, -6, -20]} texture={'/Textures/flower7.webp'} />
        </group>

    );
}


const Content = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <div className={styles.contentWrapper}>
            <p
                onPointerOut={() => setHovered(false)}
                onPointerOver={() => setHovered(true)}
                className={styles.canvas_heading}>
                I {hovered ? 'BREAK' : 'MAKE'} THINGS
            </p>
            <Canvas>
                <ambientLight />
                <Flowers hovered={hovered} />
            </Canvas>
        </div>
    )
}

export default Content