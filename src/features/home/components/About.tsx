type InfoDataType = {
  title: string;
  desc: string;
};

const About = () => {
  const aboutInfoData: InfoDataType[] = [
    { title: "5 Billion", desc: "User Interactive per Day" },
    { title: "1 Billion", desc: "Users Engaged Every Month" },
    { title: "8 Billion", desc: "Goods Recorded" },
    { title: "30 Billion", desc: "Notification Sent Every Day" },
  ];
  return (
    <div className="about" id="about">
      <h1>About</h1>
      <div className="row">
        <div className="text-about">
          <h1>We’re shaping the future of managing goods technology</h1>
          <p>
            you will discover the spirit and vision that underlie the birth of
            Goodys. We are not just an ERP platform; we are your partner in
            facing everyday business challenges. We combine cutting-edge
            technology with incredible simplicity, creating an environment that
            you can leverag
          </p>
        </div>
        <div className="container-about-info">
          {aboutInfoData.map((info, idx) => (
            <Info key={"info" + idx} {...info} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Info = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="info-about">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default About;
