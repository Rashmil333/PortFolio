import Image from '../../../../../Components/Image';
import { Links } from '../../../../../constant';
import { linkOnClickHandler } from '../../../../../helpers';
import styles from './socialLinkComponent.module.scss';

const SocialLinksComponent = (props) => {
    const { setShowDetail, showDetail, variant } = props;
    return (
        <div className={`${styles.socialLinks} ${styles[variant]}`}>
            <p className={styles.detail}>{showDetail}</p>
            {Links.map((link, index) => {
                return (
                    <span key={index}>
                        <Image
                            src={link.icon}
                            className={styles.link}
                            onPointerOver={() => setShowDetail(link.value)}
                            onPointerOut={() => setShowDetail('')}
                            onClick={() => linkOnClickHandler(link)}
                        />
                    </span>
                )
            })}
        </div>
    )
}

export default SocialLinksComponent