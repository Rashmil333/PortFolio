import { rightarrowIconLatest, SKILLSARRAY, STATICLINKS } from '../../../constant';
import { openNewWindow } from '../../../helpers';
import styles from './skillcomponent.module.scss';
import Image from '../../../Components/Image';

export const SkillComponent = () => {
    return (
        <div className={styles.skillmapper}>
            {SKILLSARRAY.map((skill, index) => {
                return (
                    <div key={index} className={styles.skillSection}>
                        <p className={styles.title}>{skill.title}</p>
                        <p className={styles.description}>{skill.description}</p>
                        <div className={styles.level}>
                            <span>   {skill.level}</span>
                        </div>
                        <button className={styles.githubBtn} onClick={() => openNewWindow(STATICLINKS.github)}>
                            See github
                            <Image src={rightarrowIconLatest} className={styles.arrow} />
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
