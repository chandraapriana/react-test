import ButtonSolid from "../../../components/Buttons/ButtonSolid";

export type PricePlanType = {
  tier: string;
  price: number | string;
  desc: string;
  benefits: string[];
};

const Pricing = () => {
  const pricePlans: PricePlanType[] = [
    {
      tier: "Basic",
      price: "Free",
      desc: "Free plan for all users",
      benefits: [
        "Recording incoming goods",
        "Recording outgoing goods",
        "Recording profit results",
      ],
    },
    {
      tier: "Business",
      price: 15,
      desc: "Ideal for small business",
      benefits: [
        "Recording incoming goods",
        "Recording outgoing goods",
        "Recording profits",
        "Analyzing sales results with CHART",
        "24/7 Support",
      ],
    },
    {
      tier: "Entrepreneur",
      price: 25,
      desc: "Ideal for enterprise",
      benefits: [
        "Recording incoming goods",
        "Recording outgoing goods",
        "Recording profits",
        "Analyzing sales results with CHART",
        "24/7 Support",
        "Exporting data to Excel",
        "AI Income Prediction",
      ],
    },
  ];
  return (
    <div className="pricing" id="pricing">
      <h1>Pricing</h1>
      <div className="container-price-card">
        {pricePlans.map((plan) => (
          <PriceCard key={plan.tier} {...plan} />
        ))}
      </div>
    </div>
  );
};

const PriceCard = ({
  tier,
  price,
  desc,
  benefits,
}: {
  tier: string;
  price: number | string;
  desc: string;
  benefits: string[];
}) => {
  return (
    <div className="price-card">
      <div className="content">
        <p className="tier">{tier}</p>
        <h1 className="price">
          {price === "Free" ? price : `$${price}/month`}
        </h1>
        <p className="desc">{desc}</p>
        <div className="container-price-benefit">
          {benefits.map((benefit) => (
            <PriceBenefitItem key={tier} benefit={benefit} />
          ))}
        </div>
      </div>

      <ButtonSolid>
        <p>Get Now</p>
      </ButtonSolid>
    </div>
  );
};

const PriceBenefitItem = ({ benefit }: { benefit: string }) => {
  return (
    <div className="price-benefit-item">
      <img className="bullet-point" src="/images/ellipse_pointer.svg" alt="" />
      <p className="benefit-desc">{benefit}</p>
    </div>
  );
};

export default Pricing;
