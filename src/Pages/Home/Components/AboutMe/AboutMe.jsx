import Image from '../../../../Components/Image';
import { BannerLogo, Description,  } from '../../../../constant';
import {  useState } from 'react'
import styles from './aboutme.module.scss';
import SocialLinksComponent from './SocialLinksComponent/SocialLinksComponent';


const AboutMe = () => {
    const [showDetail, setShowDetail] = useState();
    return (
        <div className={styles.aboutMeWrapper}>
            <div className={styles.aboutMeContent}>
                <p className={styles.aboutText}>ABOUT ME</p>
                <div className={styles.descriptionBox}>
                    <div className={styles.description}>
                        <Image src={BannerLogo} className={styles.profileImage} />
                        <p className={styles.descriptiontext}>
                            {Description}
                        </p>
                    </div>
                    <SocialLinksComponent showDetail={showDetail} setShowDetail={setShowDetail} />
                </div>
            </div>

        </div>
    )
}

export default AboutMe