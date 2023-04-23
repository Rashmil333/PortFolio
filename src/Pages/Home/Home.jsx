import Banner from "../../Components/Banner";
import AboutMe from "./Components/AboutMe/AboutMe";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Content />
      <Banner />
      <AboutMe />
      <Footer />
    </>
  );
};

export default Home;
