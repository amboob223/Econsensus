import React from "react";
import Wocktan from "./Wocktan";
import WorkPlacard from "./WorkPlacard";
import workData from "../data/worksData";


const Workpage = () => {
  const [selectedWork, setSelectedWork] = React.useState(null);

  const handleReadMoreClick = (work) => {
    setSelectedWork(work);
  };

  const handleGoBackClick = () => {
    setSelectedWork(null);
  };

  return (
    <div style={{"margin-top":"3%"}}>
      <h1>Works</h1>
      {selectedWork ? (
        <>
          <Wocktan data={selectedWork} />
          <button onClick={handleGoBackClick}>Go Back</button>
        </>
      ) : (
        <div style={{ marginTop: "3%" }}>
          {workData.map((work, index) => (
            <WorkPlacard key={index} procs={work} onSelectReadMore={() => handleReadMoreClick(work)} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Workpage;