import { lazy, Suspense } from 'react';
import { Links } from '../../../../../constant';
import { linkOnClickHandler } from '../../../../../helpers';
import styles from './socialLinkComponent.module.scss';
const ToolTip = lazy(() => import('../ToolTip/ToolTip'));

const SocialLinksComponent = (props) => {
    const { setShowDetail, showDetail, variant } = props;
    return (
        <div className={`${styles.socialLinks} ${styles[variant]}`}>
            <div className={styles.linksContainer}>
                {showDetail?.value && (
                    <Suspense fallback={null}>
                        <ToolTip text={showDetail?.value} id={showDetail?.id} />
                    </Suspense>
                )}
                {Links.map((link, index) => {
                    return (
                        <span key={index} >
                            <div className={styles.link} onPointerOver={() => setShowDetail({ value: link.value, id: index })}
                                onPointerOut={() => setShowDetail('')}
                                onClick={() => linkOnClickHandler(link)}>
                                {link.icon}
                            </div>
                        </span>
                    )
                })}
            </div>

        </div>
    )
}

export default SocialLinksComponent;