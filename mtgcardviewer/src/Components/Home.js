//next step see useFectch Component https://youtu.be/qdCHEUaFhBk?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&t=341
import { useState, useEffect } from "react";
import CardList from "./Cardlist";
const Home = () => {
    const [card, setCards] = useState([
        // {name: "Strangleroot Geist", type: "spirit", cmc: 2, id: 1},
        // {name: "Llanowar Elf", type: "Elf", cmc: 1, id: 2},
        // {name: "Ghalta, Primal Hunger", type: "Dinosaur", cmc: 12, id:3},
    ]);
    //going to get this name depenency set to the search bar results
    //https://www.youtube.com/watch?v=jQc_bTFZ5_I&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=15
    //const [name, setName] = useState()

    //useEffect hook function runs everytime there is a re-render
    //useful for things like fetching data
    //added a dependency array [] only runs function after first initial render
    //state changes won't run the function that has the depenency array
    //values added so that it changes when the dependcy takes effect

    //api value stored in const variable URL
    const URL = "https://api.magicthegathering.io/v1/cards"
    //adding fetch request under useEffect hook
    useEffect(() => {
        console.log("useEffect Ran")
        handleFetchData();
        //sending git request to the API
        //returns a prommise

        }, [])
        //creates a data fetch const variable using async
        const handleFetchData = async () => {
            const response = await fetch(URL);
            //stores the json data as the setCards state value
            setCards(await response.json());
        }
    //map method used to cycle through the array of items above
    //return statement outputs the template to the browser
    //takes the cards property set equal to the array of cards with their properties name, type and cmc
    //return statement imported CardList component
    //set the cards property equal to cards variable
    // then passed in the props parameter to CardList
    // then in CardList, created const variable cards set equal to passed in props.cards value
    //now the component can see and use the cards variable props in the array
    return ( 
        <div className="Home">
            {card && <CardList card={card}></CardList>}
        </div>
     );
}
 
export default Home;