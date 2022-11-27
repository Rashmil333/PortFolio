import React from 'react'
import Footer from '../../Pages/Home/Components/Footer/Footer';
import Header from '../../Pages/Home/Components/Header/Header';
import styles from './dashboard.module.scss';

const Dashboard = (props) => {
  const { category, children } = props;
  return (
    <>
      <Header />
      <div className={styles.dashboardContent}>
        <div className={styles.leftSection}>
          <p className={styles.category}>{category}</p>
        </div>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Dashboard
