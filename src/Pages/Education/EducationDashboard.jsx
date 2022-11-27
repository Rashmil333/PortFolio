import React from 'react'
import Dashboard from '../../Components/Dashboard/Dashboard'
import Image from '../../Components/Image';
import { CATEGORIES, EDUCATIONARRAY, GoGreenCover, SKILLSARRAY } from '../../constant'
import styles from './educationdashboard.module.scss';
import { SkillComponent } from './SkillComponent/SkillComponent';
const EducationDashboard = () => {
    const EducationArray = Array(10).fill().map(() => {
        return (
            {
                title: 'Python Developmet and Classed',
                description: 'Published on Jul 2, 2021 on CSS-Tricks'
            }
        )
    });
    console.log(EducationArray);
    return (
        <Dashboard category={CATEGORIES.EDUCATION}>
            <div className={styles.mainContent}>
                <div className={styles.middleSection}>
                    <div className={styles.coverContent}>
                        <Image src={GoGreenCover} className={styles.cover} />
                        <p className={styles.coverhint}>Recently made this.</p>
                        <p className={styles.coverTitle}>Steps flow with model parallely</p>

                        <p className={styles.heading}>SKILLS</p>
                        <SkillComponent />
                    </div>

                </div>
                <div className={styles.educationRightSection}>
                    <div className={styles.eduContent}>
                        <p className={styles.caption}>FORMAL {CATEGORIES.EDUCATION}</p>
                        <div className={styles.educationMapper}>
                            {EDUCATIONARRAY.map((item) => {
                                return (
                                    <div className={styles.education}>
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