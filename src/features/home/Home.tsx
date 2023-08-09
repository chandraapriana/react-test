import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;
