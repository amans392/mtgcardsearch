import "./CardResults.css";
//takes in result as a prop
const CardResults = ({result, setActiveCard}) => {
  
  //functoin handleClick created to see when onclick event takes place
  function handleClick() {
    setActiveCard()
    console.log("It Clicked")
  }

    //renders out a div with the result.name property
    //added onClick functionality 
    return  <div className="card-result" onClick={(e) => alert(`You clicked on ${result.name} click 'OK`, handleClick() ) }>{result.name} 
  
  </div> ;
}

export default CardResults;