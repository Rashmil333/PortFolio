import Image from '../../../../../Components/Image';
import { BannerLogo } from '../../../../../constant';
import styles from './bannerlogo.module.scss';

const BannerLogoComponent = () => {
    return (
        <Image src={BannerLogo} className={styles.logo} />
    )
}

export default BannerLogoComponent