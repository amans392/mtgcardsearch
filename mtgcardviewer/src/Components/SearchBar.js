//Creating a search bar with API calls current-time
//https://youtu.be/sWVgMcz8Q44?t=659

//creating a serach bar component
//opened terminal and ran npm install react-icons for usage of icons
import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"

const SearchBar = () => {
    return ( 
        //created class input-wrapper for search bar
    <div className="input-wrapper">
    <FaSearch id="search-icon">  </FaSearch>
    <input placeholder="Type to search..."></input>
    
    </div> 
    
    
    )
    
}
 
export default SearchBar;