import { useCallback } from 'react';
import { MainLinks } from '../../../../../constant';
import styles from './rightlink.module.scss';

const RightLinks = () => {
    const linkHanlder = useCallback((link) => {
        window.open(link.path, '_blank');
    }, []);
    return (
        <div className={styles.rightSection}>
            {MainLinks.map((link, index) => {
                return (
                    <p key={index} className={styles.link} onClick={() => linkHanlder(link)}>{link.title}</p>
                )
            })}

        </div>
    )
}

export default RightLinks