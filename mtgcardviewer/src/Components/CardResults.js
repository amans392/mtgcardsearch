import "./CardResults.css";
//takes in result as a prop
const CardResults = ({result, handleSelection}) => {
  
    //renders out a div with the result.name property
    //added onClick functionality 
    return  (<div className="card-result" onClick={(e) => handleSelection(result)}>
  {result.name}
  </div>
    )
};

export default CardResults;