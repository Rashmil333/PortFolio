import {
  rightarrowIconLatest,
  SKILLSARRAY,
  STATICLINKS,
} from "../../../constant";
import { openNewWindow } from "../../../helpers";
import styles from "./skillcomponent.module.scss";
import Image from "../../../Components/Image";
import {
  BeginnerIcon,
  BeginnerIconPlus,
  DailyIcon,
  EfforBeginner,
  EfforLevelIntermediate,
  EfforLevelIntermediatePlus,
  EffortBeginnerPlus,
  InformationIcon,
  IntermediateIcon,
  IntermediateIconPlus,
  LongTimeAgo,
  OccasionalyIcon,
} from "../../../SVG/LinksIcons";

const LEVELICON = {
  INTERMEDIATE: <IntermediateIcon />,
  "INTERMIDIATE +": <IntermediateIconPlus />,

  Beginner: <BeginnerIcon />,
  "BEGINNER +": <BeginnerIconPlus />,
};

const EFFORTS = {
  INTERMEDIATE: <EfforLevelIntermediate />,
  "INTERMIDIATE +": <EfforLevelIntermediatePlus />,

  Beginner: <EfforBeginner />,
  "BEGINNER +": <EffortBeginnerPlus />,
};

const ENGAGEMENT = {
  DAILY: <DailyIcon />,
  OCCASIONALY: <OccasionalyIcon />,
  "LONG TIME AGO": <LongTimeAgo />,
};

export const SkillComponent = () => {
  return (
    <div className={styles.skillmapper}>
      {SKILLSARRAY.map((skill, index) => {
        return (
          <div key={index} className={styles.skillSection}>
            <div>
              <p className={styles.title}>{skill.title}</p>

              <div className={styles.level}>
                {LEVELICON[skill.level]}
                <span> {skill.level}</span>
              </div>
              <div className={styles.detail2}>
                <div className={styles.skillDetailSec}>
                  {EFFORTS[skill.level]}
                  <InformationIcon />
                  <div className={styles.enagagementLevel}>
                    {ENGAGEMENT[skill.enagagementLevel]}
                    <p>{skill.enagagementLevel}</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              className={styles.githubBtn}
              onClick={() => openNewWindow(STATICLINKS.github)}
            >
              See github
              <Image src={rightarrowIconLatest} className={styles.arrow} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
