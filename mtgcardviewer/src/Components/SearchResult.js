import React from "react";
import "./SearchResult.css"
//Tutorial complete: https://www.youtube.com/watch?v=sWVgMcz8Q44&t=1525s
//Create a card search variation using mtg app
const SearchResult = ({result}) => {
    return ( 
        //renders out the results property in a div
        //returns result.name which is the name of the current user at the specific index
        //added onClick functionality for whenever a result is clicked
        //grabs the click event (e) and adds an alert message `You clicked on X` with the clicked on result.name 
        <div className="search-result" onClick={(e) => alert(`You clicked on ${result.name}`) }>{result.name}</div>
     );
}
 
export default SearchResult;