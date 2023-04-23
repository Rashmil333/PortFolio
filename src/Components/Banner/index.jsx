import { useState } from "react";
import { circularloopSoon, robotSoon } from "../../constant";
import { randomArrayElement, randomIntFromInterval } from "../../helpers";
import styles from "./banner.module.scss";
const Banner = () => {
  const [hovered, setHovered] = useState(false);
  const RandomCircles = Array(20)
    .fill()
    .map((_, index) => {
      return {
        id: index,
      };
    });
  return (
    <div className={styles.bannerWrapper}>
      {RandomCircles.map((_, index) => {
        const randomDimensions = randomArrayElement([
          "10px",
          "74px",
          "43px",
          "21px",
        ]);
        const bgcolor = randomArrayElement([
          "transparent",
          "#5DA791",
          "#AD1313",
        ]);
        const randomColor = randomArrayElement(["#AD1313", "#13AD3F"]);
        const border =
          bgcolor === "transparent" ? `2px solid ${randomColor}` : "none";
        return (
          <div
            key={index}
            style={{
              width: randomDimensions,
              height: randomDimensions,
              borderRadius: "50%",
              background: bgcolor,
              border: border,
              position: "absolute",
              transition: "3s",
              top: `${randomIntFromInterval(1, 100)}%`,
              left: `${randomIntFromInterval(1, 100)}%`,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
            }}
          ></div>
        );
      })}
      <div className={styles.bannerContent}>
        <p className={styles.heading}>
          <span>C</span>oming soon<span>N!</span>
        </p>
        <div className={styles.banner_card}>
          <div className={styles.textSec}>
            <p className={styles.title}>
              A peculiar robot’s patience being tested.
            </p>
            <button
              className={styles.watchbtn}
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
            >
              Watch
            </button>
          </div>
          <img src={robotSoon} className={styles.poster} />
        </div>
        <div className={`${styles.banner_card} ${styles.mt}`}>
          <img src={circularloopSoon} className={styles.poster} />
          <div className={styles.textSec}>
            <p className={styles.title}>Endless Circular Wave.</p>
            <button
              className={`${styles.watchbtn} ${styles.pinkbtn}`}
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
            >
              Watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
