import { BannerLogo, copyIcon, Description, Links } from '../../../../constant';
import styles from './aboutme.module.scss';

const AboutMe = () => {
    return (
        <div className={styles.aboutMeWrapper}>
            <div className={styles.aboutMeContent}>
                <p className={styles.aboutText}>ABOUT ME</p>
                <div className={styles.descriptionBox}>
                    <div className={styles.description}>
                        <img src={BannerLogo} className={styles.profileImage} />
                        <p className={styles.descriptiontext}>
                            {Description}
                        </p>
                    </div>
                    <div className={styles.socialLinks}>
                        {Links.map((link, index) => {
                            return (
                                <>
                                    <div className={styles.tooltip}>
                                        <p>{link.value}</p>
                                        <img src={copyIcon} />
                                    </div>
                                    <img src={link.icon} className={styles.link} />
                                </>

                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe