import BannerLogoComponent from './BannerLogo/BannerLogo';
import styles from './header.module.scss'
import RightLinks from './RightLinks/RightLinks';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.leftSection}>
                <BannerLogoComponent />
                <p className={styles.header}>RASHMIL RAJPOOT</p>
            </div>
            <RightLinks />
        </div>
    )
}

export default Header