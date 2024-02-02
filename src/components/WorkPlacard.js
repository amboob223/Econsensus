const WorkPlacard = ({ procs, onSelectReadMore }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", border: "1px solid #ccc", padding: "10px", borderRadius: "8px", marginBottom: "20px" }}>
      <div>
        <img src={procs.img} alt="logo" style={{ height: "200px", width: "auto" }} />
      </div>
      <div>
        <span>{procs.date}</span>
        <span>{procs.author}</span>
        <h1 style={{ fontSize: "1.5em", fontWeight: "bold", margin: "10px 0" }}>{procs.title}</h1>
        <p>{procs.description}</p>
        <p>
          <button onClick={onSelectReadMore}>
            Read more
          </button>
        </p>
      </div>
    </div>
  );

}

export default WorkPlacard;