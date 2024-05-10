//tutorial current time: https://youtu.be/NbTrGcz4DW8?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&t=195

//import css styling at the top
//import react hooks below
import { useState, useEffect } from "react";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Home2 from "./Components/Home2";
import Homes from "./Components/Homes";




//const URL = `https://api.magicthegathering.io/v1/cards`;




 // const [cards, setCards] = useState(null);
  //const [activeCard, setActiveCard] = useState({});


/* 
  useEffect(() => {
    const FetchData = async () => {
      const result= await fetch(URL)
      result.json().then(json => {
        
        console.log(json.cards);
        const card = json.cards[0].types[0];
        setCards(card)

      const cards = json.cards
      const types = [];

      const filtered = cards.filter((card) => card.types[0] == "Creature");

  console.log(filtered);
      
  setCards(filtered)
  
*/
//onclick event created

// Expected output: Array ["exuberant", "destruction", "present"]
//Navbar and Home components nested in the return statement below app
//using <Navbar /> and <Home />
function App() {
  
  return (
    <div className="app">
      <Navbar />
      <div className='content'>
        <Home2></Home2>
        <Homes/>
        
      </div>
    </div>
  );
  }

export default App;