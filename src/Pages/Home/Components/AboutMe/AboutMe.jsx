import { Canvas } from '@react-three/fiber';
import Image from '../../../../Components/Image';
import { BannerLogo, Description, Links, VARIANTS } from '../../../../constant';
import { useCallback, useState } from 'react'
import WhiteBloodCell from '../WhiteBloodCell/WhiteBloodCell';
import styles from './aboutme.module.scss';
import ToolTip from './ToolTip/ToolTip';
import SocialLinksComponent from './SocialLinksComponent/SocialLinksComponent';
import { linkOnClickHandler } from '../../../../helpers';

const AboutMe = () => {
    const [showDetail, setShowDetail] = useState();
    // function copyTextToClipboard(text) {
    //     if (!navigator.clipboard) {
    //         console.log('try again')
    //         return;
    //     }
    //     navigator.clipboard.writeText(text).then(function () {
    //         console.log('Async: Copying to clipboard was successful!');
    //     }, function (err) {
    //         console.error('Async: Could not copy text: ', err);
    //     });
    // }
    // const linkOnClickHandler = useCallback((link) => {
    //     if (link.target === 'github') {
    //         window.open('https://github.com/Rashmil333?tab=repositories', '_blank');
    //     } else {
    //         copyTextToClipboard(link.text);
    //     }
    // }, []);

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