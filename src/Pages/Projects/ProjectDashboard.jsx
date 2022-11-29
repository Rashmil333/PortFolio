import Dashboard from '../../Components/Dashboard/Dashboard'
import { CATEGORIES, GIHUBARRAY, githubIcon, STATICLINKS } from '../../constant'
import styles from './projectdashboard.module.scss';
import ProjectCard from './ProjectCard/ProjectCard';
import Image from '../../Components/Image';
import { openNewWindow } from '../../helpers';
const BottomNote = () => {
    return (
        <p className={styles.bottomNote} onClick={() => openNewWindow(STATICLINKS.github)}>
            Follow me on<br />   <span className={styles.bold}><Image src={githubIcon} className={styles.github} />GitHub</span> if you want, I suppose
        </p>
    )
}
const ProjectDashboard = () => {
    return (
        <Dashboard category={CATEGORIES.PROJECTS} bottomNote={<BottomNote />} variant='projects'>
            <div className={styles.mainContent}>
                <div className={styles.middleSection}>
                    <div className={styles.coverContent}>
                        <p className={styles.coverHeading}>CODEPEN</p>
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
