import { useCallback, useEffect, useMemo, useState } from "react";
import { robotSoon, simplySidebarsCover, sunflower } from "../../constant";
import { randomArrayElement, randomIntFromInterval } from "../../helpers";
import styles from "./banner.module.scss";

const Hello = () => {
  const randomData = useMemo(() => {
    const RandomCircles = Array(20)
      .fill()
      .map((_, index) => {
        return {
          id: index,
        };
      });
    return RandomCircles;
  }, []);
  return (
    <>
      {randomData.map((_, index) => {
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
    </>
  );
};
const TimeRemaining = () => {
  const d = new Date();
  const [currTime, setCurrTime] = useState(d);

  useEffect(() => {
    let setInterval_ = setInterval(() => {
      const d = new Date();
      setCurrTime(d);
    }, 1000);
    return () => clearInterval(setInterval_);
  });

  const getHoursHandler = useCallback(() => {
    const ampmtime = currTime.toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
    });
    if (currTime.getHours() > 12) {
      return 24 - currTime.getHours();
    }
    if (ampmtime.slice(ampmtime.length - 2, ampmtime.length) === "PM") {
      return 24 - currTime.getHours() + 12;
    }
    return currTime.getHours();
  }, [currTime]);

  return (
    <p className={styles.remainingTime}>
      <span className={styles.timeBig}>{27 - currTime.getDate()}</span>days
      &nbsp;
      <span className={styles.timeBig}>{getHoursHandler()}</span>h &nbsp;
      <span className={styles.timeBig}>{60 - currTime.getMinutes()}</span>
      min&nbsp;
      <span className={styles.timeBig}>{60 - currTime.getSeconds()}</span>sec
    </p>
  );
};
const Banner = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.bannerWrapper}>
      <Hello />
      <div className={styles.bannerContent}>
        {/* <div className={styles.bannerHeader}>
          <p className={styles.heading}>
            <span>C</span>oming soon<span>N!</span>
          </p>
        </div> */}
        {/* <div className={styles.banner_card}>
          <img src={sunflower} className={styles.poster} alt="" />
          <div className={styles.textSec}>
            <p className={styles.title}>Sunflower</p>
            <button
              className={styles.watchbtn}
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
              onClick={() =>
                window.open("https://new-projects-pen.web.app/morph", "__blank")
              }
            >
              Watch Pen
            </button>
          </div>
        </div> */}
        <div className={`${styles.banner_card} ${styles.mt}`}>
          <img src={simplySidebarsCover} className={styles.poster} alt="" />
          <div className={styles.textSec}>
            <p className={styles.title}>Simply Sidebars.</p>
            <button
              className={`${styles.watchbtn} ${styles.pinkbtn}`}
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
              onClick={() =>
                window.open(
                  "https://new-projects-pen.web.app/simply-sidebars",
                  "__blank"
                )
              }
            >
              Visit
            </button>
          </div>
        </div>
        <div className={styles.bannerHeader}>
          <p className={styles.heading}>
            <span>L</span>atest
          </p>
        </div>
        <div className={styles.banner_card}>
          <img src={sunflower} className={styles.poster} alt="" />
          <div className={styles.textSec}>
            <p className={styles.title}>Sunflower</p>
            <button
              className={styles.watchbtn}
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
              onClick={() =>
                window.open("https://new-projects-pen.web.app/morph", "__blank")
              }
            >
              Watch Pen
            </button>
          </div>
        </div>
        <div className={styles.banner_card}>
          <div className={styles.textSec}>
            <p className={styles.title}>
              A peculiar robot’s patience being tested.
            </p>
            <button
              className={styles.watchbtn}
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
              onClick={() =>
                window.open("https://new-projects-pen.web.app/stack", "__blank")
              }
            >
              Watch Pen
            </button>
          </div>
          <img src={robotSoon} className={styles.poster} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
