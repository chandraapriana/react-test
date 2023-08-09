import Header from "../../components/Header";
import Home from "../../features/home";

const HomePage = () => {
  return (
    <div className="home">
      <img
        className="ornament-header"
        src="/images/ornament_header.svg"
        alt=""
      />
      <Header />
      <Home />
    </div>
  );
};

export default HomePage;
