import React from 'react'
import { SKILLSARRAY } from '../../../constant';
import styles from './skillcomponent.module.scss';

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
                        <button className={styles.githubBtn}>See github --></button>
                    </div>
                )
            })}
        </div>
    )
}
