//next step see useFectch Component https://www.youtube.com/watch?v=qdCHEUaFhBk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=17
import { useState, useEffect } from "react";
import CardList from "./Cardlist";
const Home = () => {
    const [cards, setCards] = useState([
        {name: "Strangleroot Geist", type: "spirit", cmc: 2, id: 1},
        {name: "Llanowar Elf", type: "Elf", cmc: 1, id: 2},
        {name: "Ghalta, Primal Hunger", type: "Dinosaur", cmc: 12, id:3},
    ]);
    //going to get this name depenency set to the search bar results
    //https://www.youtube.com/watch?v=jQc_bTFZ5_I&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=15
    //const [name, setName] = useState()

    //useEffect hook function runs everytime there is a re-render
    //useful for things like fetching data
    //added a dependency array [] only runs function after first initial render
    //state changes won't run the function that has the depenency array
    //values added so that it changes when the dependcy takes effect
    useEffect(() => {
        console.log("useEffect Ran")
        console.log(cards);
    }, []);
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
            <CardList cards={cards}></CardList>
        </div>
     );
}
 
export default Home;