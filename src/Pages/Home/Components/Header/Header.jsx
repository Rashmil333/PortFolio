import BannerLogoComponent from "./BannerLogo/BannerLogo";
import styles from "./header.module.scss";
import RightLinks from "./RightLinks/RightLinks";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftSection} onClick={() => navigate("/")}>
        <BannerLogoComponent />
        <p className={styles.header}>RASHMIL RAJPOOT</p>
      </div>
      <RightLinks />
    </div>
  );
};

export default Header;
