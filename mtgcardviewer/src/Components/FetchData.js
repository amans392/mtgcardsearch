//follow mdn link to figure out why .map doesn't work: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data

import React, { useEffect } from "react";
import { useState } from "react";

function FetchData() {
    const [card, setCard] = useState([]);
    URL = "https://api.magicthegathering.io/v1/cards"
//run cards function when page loads
    useEffect(() => {
        cards()
    }, [])
//async/await to fetch data
    const cards = async () => {
        const response = await fetch(URL);
        //store the data in cards variable
        setCard(await response.json())
    }
    
    return(
        <div>
            <h1>Card is listed here below</h1>
            
            <ul className="list-card list-card-id">
            {Object.values(card).map(([data]) => {
                return(
                    <li className="list-card" key={data.id}> {data.name} <img alt="" src={data.imageUrl} ></img>  </li>
                )
                
            })}
                
            </ul>

        </div>
        

    )
}
export default FetchData;