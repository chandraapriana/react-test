import ButtonOutline from "../../../components/Buttons/ButtonOutline";
import ButtonSolid from "../../../components/Buttons/ButtonSolid";

const Hero = () => {
  return (
    <div className="container-hero">
      <div className="hero">
        <img className="img-hero" src="/images/img_hero.png" alt="" />
        <div className="text-hero">
          <h1>
            Streamline Your Work, Simplify Your Life with Our Management App
          </h1>
          <p>
            Effortless Collaboration, Efficient Result - Our Management Goods
            Brings Your Team Toghether.
          </p>
          <div className="row">
            <ButtonOutline>
              <h1>Get Started</h1>
            </ButtonOutline>
            <ButtonSolid>
              <h1>Free Trial</h1>
            </ButtonSolid>
          </div>
        </div>
      </div>
      <img className="ornament-home" src="/images/ornament_home.png" alt="" />
    </div>
  );
};

export default Hero;
