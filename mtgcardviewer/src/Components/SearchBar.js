//Creating a search bar with API calls current-time
//https://youtu.be/sWVgMcz8Q44?t=1160

//creating a serach bar component
//opened terminal and ran npm install react-icons for usage of icons
import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"


//in SearchBartaking function,  
const SearchBar = ({setResults}) => {
    //created a state varialbes input and set input equal to useState('') empty string
    const [input, setInput ] = useState('').toLowerCase()

    // FetchData variable below is used for fetching data from external API
    // fetch function is asynch, then chain a .then then convert the response into the json format
    const FetchData = (value) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
            //filtering the json data so it matches what's written in input
            //checks data in input field against names and returns false if no match
            const results = json.filter((user) => {
                //
                return (
                    value &&
                    user &&
                    user.name &&
                    user.name.toLowerCase().includes(value)
                    )
            });

            //console.log(results);
            //when input is changed
            //will fetch the data from API
            //filter based on text in input
            //set results variable to what we get back
            //and store it in the results variable below
            setResults(results)
            //logging the json data
            console.log(json)
        });
    }

    const handleChange = (value) => {
        setInput(value)
        FetchData(value)
    }
    return ( 
        //created class input-wrapper for search bar
        //created an input field placeholder with a value =input variable then onChange
        //akes the (e) event set input variable to value inside input element with e.target.value
        //this stores what is typed in search bar in input variable.
        //handleChange variable defined above used in input field so that when text changes, it makes request to fetchData API
    <div className="input-wrapper">
    <FaSearch id="search-icon">  </FaSearch>
    
    <input placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)} ></input>
    
    <div></div>
    </div> 
    
    
    )
    
}
 
export default SearchBar;