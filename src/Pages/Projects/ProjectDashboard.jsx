import React from 'react'
import Dashboard from '../../Components/Dashboard/Dashboard'
import Image from '../../Components/Image';
import { CATEGORIES, EDUCATIONARRAY, GIHUBARRAY, GoGreenCover, STATICLINKS } from '../../constant'
import { openNewWindow } from '../../helpers';
import styles from './projectdashboard.module.scss';
import { SkillComponent } from '../Education/SkillComponent/SkillComponent';
import ProjectCard from './ProjectCard/ProjectCard';
const ProjectDashboard = () => {
    return (
        <Dashboard category={CATEGORIES.PROJECTS}>
            <div className={styles.mainContent}>
                <div className={styles.middleSection}>
                    <div className={styles.coverContent}>
                        <p className={styles.coverHeading}>CODEPENS</p>
                        <ProjectCard />
                    </div>

                </div>
                <div className={styles.educationRightSection}>
                    <div className={styles.eduContent}>
                        <p className={styles.caption}>GITHUB</p>
                        <div className={styles.educationMapper}>
                            {GIHUBARRAY.map((item, index) => {
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

export default ProjectDashboard
