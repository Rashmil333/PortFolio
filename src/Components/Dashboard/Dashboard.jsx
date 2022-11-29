import Footer from '../../Pages/Home/Components/Footer/Footer';
import Header from '../../Pages/Home/Components/Header/Header';
import styles from './dashboard.module.scss';

const Dashboard = (props) => {
  const { category, children, bottomNote, variant } = props;
  return (
    <>
      <Header />
      <div className={styles.dashboardContent}>
        <div className={`${styles.leftSection} ${styles[variant]}`}>
          <p className={styles.category}>{category}</p>
        </div>
        {bottomNote && (
          <div className={styles.bottomNote}>
            {bottomNote}
          </div>
        )}
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Dashboard
