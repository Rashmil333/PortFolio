import styles from './rightlink.module.scss';

const RightLinks = () => {
    return (
        <div className={styles.rightSection}>
            <p className={styles.link}>EDUCATION</p>
            <p className={styles.link}>SKILLS</p>
            <p className={styles.link}>PROJECTS</p>
        </div>
    )
}

export default RightLinks