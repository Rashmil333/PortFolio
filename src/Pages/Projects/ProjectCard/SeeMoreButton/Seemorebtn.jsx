import { useState } from 'react';
import Image from '../../../../Components/Image';
import { rightarrowIconLatest, rightArrowRed } from '../../../../constant';
import { openNewWindow } from '../../../../helpers';
import styles from './seemorebtn.module.scss';

const Seemorebtn = ({ target }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <button
            className={styles.seePenButton}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => openNewWindow(target)}
        >
            SEE PEN
            <Image src={hovered ? rightarrowIconLatest : rightArrowRed} className={styles.arrow} />
        </button>
    )
}

export default Seemorebtn
