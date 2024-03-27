const Cutrap = ({ data }) => {
  return (
    <div>
      <img
        src={data.img}
        alt="Cutrap Logo"
        className="cutrap-logo"
        style={{ height: "200px", width: "auto", float: "left", marginRight: "20px" }}
      />
      <div className="cutrap-content">
        <h1>{data.title}</h1>

        {data.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <h3>Key Features:</h3>
        <ul>
          {data.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <h3>Description:</h3>
        <p>{data.description}</p>

        <h3>Get Started:</h3>
        <p>{data.getStarted}</p>
      </div>
    </div>
  );
};

export default Cutrap;
