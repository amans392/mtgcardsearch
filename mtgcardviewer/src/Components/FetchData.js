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
            <h1 className="card-header">Card is listed here below</h1>
            
            <ul className="set-card">
            {Object.values(card).map(([data]) => {
                return(
                    <li className="listed-card" key={data.id}> 
                    <h1>{data.name}</h1>
                    <h2>{data.type}</h2>

                    <img className="card-image" alt=""  src={data.imageUrl}></img> 
                    <p>{data.setName}</p>
                    </li>
                )
                
            })}
                
            </ul>

        </div>
        

    )
}
export default FetchData;