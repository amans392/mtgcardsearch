import React, { useState } from "react";
//imported FaSearch to add the search magnifying glass to input field
import { FaSearch } from "react-icons/fa";

import useFetch from "./UseFetch";

import "./CardSearchBar.css"
//taking in the setResults prop defined in app.js
const CardSearchBar = ({ setResults, input, setInput }) => { 
    //added state variable and state setter function


  
    //created input variable and setInput function set equal to useState of an empty array
    //variable value and function SetValue to store value data from API
    //passed in mtg API as url variable to UseFetch
    const [url] = useState('https://api.magicthegathering.io/v1/cards') 

    //using returned data fetched from the url to use in search bar
    const { data: json} = useFetch(url);

    //takes in value which is text to search for

    const filterCard = (value) => {
        //breakdown of useFetch component
        // //calls the API stored in URL variable to fetch data
        // fetch(url)
        // //gets back the data response as json data
        // .then((response) => response.json())
        // //takes the json data, and filters the it
        // //Then stores the data in variable Results
        // .then((json) => {
        //     //json.filter takes the json data and filters through it
        //     //return true if it matches text inside input element
        //     //return false if no match
        //     const results = json.cards.filter(card => {
            const results = json.cards.filter(card => {
                return (
                   
                   //checks if value is given by user if not, nothing is rendered
                   value &&
            
                    //checks card if card exists at current index
                   card &&

                   //check if card has a name
                   card.name &&

                   //then checks if user name converted to lowercase  includes value entered in search field
                   card.name.toLowerCase().includes(value)
                )

                
            });
            //passed in setResults variable
            //sets results variable to what we get back from API call and stored in App.js results variable
            setResults(results);
            // console.log(results)
        };
    

    //handleChange function created to take in input value
    //then pass in value to fetchData function above
    //then makes the revevant API call
    const handleChange = (value) => {
        //takes in value of the input which is typed into the search bar
        setInput(value);
        //then passes in value to fetchData function
        //Which makes request to API
        //added toLowerCase() to fix case sensivity issue when searching cards
        filterCard(value.toLowerCase());   
        console.log(value)
       
    }

    return ( 

        
        <div className="input-wrapper">
            {/* added a search icon  to the search bar */}
            <FaSearch id="search-icon"></FaSearch>
            {/* added an input field with placeholder text
            added value property and set equal to input variable "state" above
            added onChange event to set input variable to value inside input element using e.target.value
            set Defined HandleChange function above, then set onChange function to handleChange below for value setting and api calling*/}
            <input placeholder="Type to search..." 
            value={input} 
            // handleChange function defined above
            //now changing text will make a request to the fetchData API
            onChange={(e) => handleChange(e.target.value)}></input>
            </div>

    )

}


export default CardSearchBar;