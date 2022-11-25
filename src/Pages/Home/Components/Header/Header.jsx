import React from 'react';
import { BannerLogo } from '../../../../constant';
import styles from './header.module.scss'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.leftSection}>
                <img src={BannerLogo} className={styles.logo} />
                <p className={styles.header}>RASHMIL RAJPOOT</p>
            </div>

            <div className={styles.rightSection}>
                <p className={styles.link}>EDUCATION</p>
                <p className={styles.link}>SKILLS</p>
                <p className={styles.link}>PROJECTS</p>
            </div>
        </div>
    )
}

export default Header