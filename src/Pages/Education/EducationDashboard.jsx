import React from 'react'
import Dashboard from '../../Components/Dashboard/Dashboard'
import { CATEGORIES, EDUCATIONARRAY } from '../../constant'
import styles from './educationdashboard.module.scss';
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
                <div>

                </div>
                <div className={styles.educationRightSection}>
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

        </Dashboard>
    )
}

export default EducationDashboard