import { useState } from 'react';
import { VARIANTS } from '../../../../constant';
import { linkOnClickHandler } from '../../../../helpers';
import SocialLinksComponent from '../AboutMe/SocialLinksComponent/SocialLinksComponent';
import BannerLogoComponent from '../Header/BannerLogo/BannerLogo';
import RightLinks from '../Header/RightLinks/RightLinks';
import styles from './footer.module.scss';

const Footer = () => {
    const [showDetail, setShowDetail] = useState();
    return (
        <div className={styles.footerWrapper}>
            <BannerLogoComponent />
            <RightLinks />
            <hr style={{ width: '90%' }} />
            <SocialLinksComponent variant={VARIANTS.FOOTER} showDetail={showDetail} setShowDetail={setShowDetail} linkOnClickHandler={linkOnClickHandler} />
            <div className={styles.btmSpc} />
        </div>
    )
}

export default Footer