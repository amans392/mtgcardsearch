import React, { useEffect } from "react";
//current-time: https://youtu.be/sWVgMcz8Q44?t=993
import { useState } from "react";
//imported FaSearch to add the search magnifying glass to input field
import { FaSearch } from "react-icons/fa";

import useFetch from "./UseFetch";

const CardSearchBar = () => {

    //added state variable and state setter function


  
    //created input variable and setInput function set equal to useState of an empy 'string'
    const [input, setInput ] = useState("");
    //stored API in variable URL
    const URL = "https://api.magicthegathering.io/v1/cards"
    
    //fetching data from mtg API

    const FetchData = (value) => {
        //Fetching data from API
        fetch(URL)
        //chained .then to await response result that returns a value later in time of api call
        //takes response and converts it into the json format to be ready by javascript
        .then((response) => response.json())
        //chained another .then get back the json value and console.log the value
        .then((json) => {
            //filtering json data
            const results = json.filter((card) => {
                //checks if card has a name
                //then convert name to lowercase
                return card && 
                card.name && 
                card.name.toLowerCase().includes(value);
            });
            console.log(results);
            console.log(json);
        })
        }
    
    //created a handleChange function that takes in a value
    const handleChange = (value) => {
        //sets the input variable to the given value
        setInput(value)
        //then passes value to fetchData function and makes a request to the API
        FetchData(value)
    }
        
    return ( 
        <div className="input-wrapper">
            {/* added a search icon  to the search bar */}
            <FaSearch id="search-icon"></FaSearch>
            {/* added an input field with Type to Search Placeholder text 
            added value property and set equal to input state variable above
            added onChange event to set input variable to value inside input element using e.target.value
            set Defined HandleChange function above, then set onChange function to handleChange below for value setting and api calling*/}
            <input placeholder="Type to search.." value={input} onChange={(e) => handleChange(e.target.value)}></input>
            
            </div>
     );
}
 
export default CardSearchBar;