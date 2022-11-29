import Image from '../../../Components/Image';
import { CODEPENARRAY } from '../../../constant';
import styles from './projectcard.module.scss';
import Seemorebtn from './SeeMoreButton/Seemorebtn';

const ProjectCard = (props) => {
    return (
        <>
            {CODEPENARRAY.map((card, index) => {
                return (
                    <div className={styles.projectCard}>
                        <p className={styles.title}>{card.title}</p>
                        <p className={styles.desciption}>{card.description}</p>
                        <Seemorebtn target={card.link} />
                        <Image src={card.img} className={styles.cardCover} />
                    </div>
                )
            })}
        </>


    )
}

export default ProjectCard