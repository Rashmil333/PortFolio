import { useCallback, useEffect, useState } from 'react';
import { MainLinks } from '../../../../../constant';
import styles from './rightlink.module.scss';

const RightLinks = () => {
    const [activeUrl, setActiveUrl] = useState(null);
    const linkHanlder = useCallback((link) => {
        window.open(link.path, '_blank');
    }, []);
    useEffect(() => {
        setActiveUrl(window.location.href);
    }, []);
    return (
        <div className={styles.rightSection}>
            {MainLinks.map((link, index) => {
                return (
                    <p key={index} className={`${styles.link} ${activeUrl?.includes(link.path) ? styles.active : ''}`} onClick={() => linkHanlder(link)}>{link.title}</p>
                )
            })}

        </div>
    )
}

export default RightLinks