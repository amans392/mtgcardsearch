//next step see useFectch Component https://youtu.be/qdCHEUaFhBk?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&t=341
import { useState, useEffect } from "react";
import CardList from "./Cardlist";
import useFetch from "./UseFetch";
const Home = () => {
    //added cards and setcards state values
    const URL = "https://api.magicthegathering.io/v1/cards"
    //de structuring properties from UseFetch return statement
    //named the data returned in UseFetch to card  data: card
    const {data: card, isLoading} = useFetch(URL);

    
    // const [card, setCards] = useState(null);
    //     // {name: "Strangleroot Geist", type: "spirit", cmc: 2, id: 1},
    //     // {name: "Llanowar Elf", type: "Elf", cmc: 1, id: 2},
    //     // {name: "Ghalta, Primal Hunger", type: "Dinosaur", cmc: 12, id:3},
    //     //adding a conditional loading message isLoading, setLoading
    
    //     const [isLoading, setIsLoading] = useState(true);
    

    //going to get this name depenency set to the search bar results
    //https://www.youtube.com/watch?v=jQc_bTFZ5_I&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=15
    //const [name, setName] = useState()

    //useEffect hook function runs everytime there is a re-render
    //useful for things like fetching data
    //added a dependency array [] only runs function after first initial render
    //state changes won't run the function that has the depenency array
    //values added so that it changes when the dependcy takes effect

    //api value stored in const variable URL

    // const URL = "https://api.magicthegathering.io/v1/cards"
    // //adding fetch request under useEffect hook
    // useEffect(() => {
    //     //adding a setTimout function with a 1 second delay to display loading before card data
    //     setTimeout(() => {
    //         console.log("useEffect Ran")
    //         handleFetchData();
    //         setIsLoading(false)
    //         //sending git request to the API
    //         //returns a prommise
    //     }
    //     , 500)

    //     }, [])
    //     //creates a data fetch const variable using async
    //     const handleFetchData = async () => {
    //         const response = await fetch(URL)

    //         //stores the json data as the setCards state value
    //         setCards(await response.json()
    //         );
            
            
    //     }
    //map method used to cycle through the array of items above
    //return statement outputs the template to the browser
    //takes the cards property set equal to the array of cards with their properties name, type and cmc
    //return statement imported CardList component
    //set the cards property equal to cards variable
    // then passed in the props card parameter to CardList
    // then in CardList, created const variable cards set equal to passed in props.cards value
    //now the component can see and use the cards variable props in the array
    //logial && added so that card state will be null unless the data is available from CardLIst to load
    //added a logical && for loading message while data state is being loaded
    return ( 
        <div className="Home">
            { isLoading && <div> Loading...</div> }
            {card && <CardList card={card}></CardList>}
        </div>
     );
}
 
export default Home;