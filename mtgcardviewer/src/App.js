import './App.css';
//import react hooks below
import { useState, useEffect } from "react"

import Home from './Components/Home';

const home = () => {
  let name = "Alex";

/*const URL = `https://api.magicthegathering.io/v1/cards`;
function App() {




  const [cards, setCards] = useState(null);
  //const [activeCard, setActiveCard] = useState({});

 */ 
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


  return (
    <div className="home">
      <h2>MTG Database</h2>
      <p>{name}</p>
    </div>
  );
  } 


export default Home;
