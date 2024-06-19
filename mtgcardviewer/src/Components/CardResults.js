import "./CardResults.css";

//takes in result as a prop
const CardResults = ({result}) => {
    //renders out a div with the result.name property
    //added onClick functionality 
    return  <div className="card-result" onClick={(e) => alert(`You clicked on ${result.name} `)}>{result.name}
  </div> ;
}

export default CardResults;