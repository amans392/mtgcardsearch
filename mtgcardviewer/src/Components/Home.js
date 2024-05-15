import { useState } from "react";
import CardList from "./Cardlist";
const Home = () => {
    const [cards, setCards] = useState([
        {name: "Strangleroot Geist", type: "spirit", cmc: 2, id: 1},
        {name: "Llanowar Elf", type: "Elf", cmc: 1, id: 2},
        {name: "Ghalta, Primal Hunger", type: "Dinosaur", cmc: 12, id:3},
    ]);

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