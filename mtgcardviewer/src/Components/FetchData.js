import { useState, useEffect } from "react";


//variable for fetchData function
const FetchData = () => {
    const[cards, setCards] = useState(null);


//const variable for link to API
const URL = `https://api.magicthegathering.io/v1/cards`;

const [card, setCard] = useState(null);

//useEffect hook for fetching URL API data
//added depnency on when to re-render
    useEffect(() => {
        fetch(URL)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setCards(data)
        });
    }, []);

    return (
        <div className="fetchData">

        </div>
    );
}
 
export default FetchData;