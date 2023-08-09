import About from "./components/About";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Pricing />
    </div>
  );
};

export default Home;
