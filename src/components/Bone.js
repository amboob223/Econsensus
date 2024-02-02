import {Link} from "react-router-dom";

const Bone = ({ procs }) => {
  return (
    <>
      <div style={{  display: "flex", flexDirection: "column", border: "1px solid #ccc", padding: "10px", borderRadius: "8px", marginBottom: "20px" }}>
        <div>
          <img src={procs.img} alt="logo" style={{ height: "200px", width: "auto" }} />
        </div>
        <div>
          <div>{procs.date}</div>
          <div>{procs.author}</div>
          <h1 style={{ fontSize: "1.5em", fontWeight: "bold", margin: "10px 0" }}>{procs.title}</h1>
          
          <p>
            <Link to={procs.path}>
              Read more
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Bone;