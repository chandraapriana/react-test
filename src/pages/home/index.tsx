import Header from "../../components/Header";
import Home from "../../features/home";
import About from "../../features/home/components/About";

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

      <About />
    </div>
  );
};

export default HomePage;
