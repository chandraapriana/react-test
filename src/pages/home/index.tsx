import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import Home from "../../features/home";

const HomePage = () => {
  return (
    <div className="home-page">
      <img
        className="ornament-header"
        src="/images/ornament_header.svg"
        alt=""
      />
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default HomePage;
