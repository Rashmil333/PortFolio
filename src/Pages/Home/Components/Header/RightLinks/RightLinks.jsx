import { useEffect, useState } from "react";
import { MainLinks } from "../../../../../constant";
import styles from "./rightlink.module.scss";
import { useNavigate } from "react-router-dom";

const RightLinks = () => {
  const navigate = useNavigate();

  const [activeUrl, setActiveUrl] = useState(null);

  useEffect(() => {
    setActiveUrl(window.location.href);
  }, []);
  return (
    <div className={styles.rightSection}>
      {MainLinks.map((link, index) => {
        return (
          <p
            key={index}
            className={`${styles.link} ${
              activeUrl?.includes(link.path) ? styles.active : ""
            }`}
            onClick={() => navigate(link.path)}
          >
            {link.title}
          </p>
        );
      })}
    </div>
  );
};

export default RightLinks;
