import React, { useState } from 'react'
import Image from '../../../../../Components/Image'
import styles from './toolTip.module.scss';

const ToolTip = (props) => {
    const { icon, value } = props;
    const [hovered, setHovered] = useState(false);
    return (
        <>
            {hovered && (<p>{value}</p>)}
            <Image src={icon} className={styles.link} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} />
        </>
    )
}

export default ToolTip