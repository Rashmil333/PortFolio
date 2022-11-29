import Dashboard from '../../Components/Dashboard/Dashboard'
import Image from '../../Components/Image';
import { CATEGORIES, EDUCATIONARRAY, GoGreenCover, STATICLINKS } from '../../constant'
import { openNewWindow } from '../../helpers';
import styles from './educationdashboard.module.scss';
import { SkillComponent } from './SkillComponent/SkillComponent';
const EducationDashboard = () => {
    return (
        <Dashboard category={CATEGORIES.EDUCATION}>
            <div className={styles.mainContent}>
                <div className={styles.middleSection}>
                    <div className={styles.coverContent}>
                        <div className={styles.coverTopSection} onClick={() => openNewWindow(STATICLINKS.coverlink)}>
                            <Image src={GoGreenCover} className={styles.cover} />
                            <p className={styles.coverhint}>Recently made this.</p>
                            <p className={styles.coverTitle}>Steps flow with model parallely</p>
                        </div>


                        <p className={styles.heading}>SKILLS</p>
                        <SkillComponent />
                    </div>

                </div>
                <div className={styles.educationRightSection}>
                    <div className={styles.eduContent}>
                        <p className={styles.caption}>FORMAL {CATEGORIES.EDUCATION}</p>
                        <div className={styles.educationMapper}>
                            {EDUCATIONARRAY.map((item, index) => {
                                return (
                                    <div className={styles.education} key={index}>
                                        <p className={styles.course}>{item.title}</p>
                                        <p className={styles.description}>{item.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default EducationDashboard