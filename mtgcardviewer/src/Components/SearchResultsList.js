import React from "react";
import "./SearchResultsList.css"
import SearchResult from "./SearchResult";
//passed in results into SearchResultsList function
const SearchResultsList = ({ results }) => {
    return (
        //
        //added results-list class to div 
        //added brackets in return div
        //results.map will map through the 
        <div className="results-list">
        
        {
            results.map((result, id) => {
                return <SearchResult result = {result} key={id}/>
            })}
            {/*
            removed placeholders <div>A</div>
            <div>B</div>
            <div>C</div> */}
        </div>
     );
}
 
export default SearchResultsList ;