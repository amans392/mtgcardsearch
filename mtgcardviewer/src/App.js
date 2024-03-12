import './App.css';
//import react hooks below
import { useState, useEffect } from "react"
const URL = `https://api.magicthegathering.io/v1/cards`;
function App() {


  const [cards, setCards] = useState([]);
  const [activeCard, setActiveCard] = useState({});

  useEffect(() => {
    const FetchData = async () => {
      const result= await fetch(URL)
      result.json().then(json => {
        
        console.log(json.cards);
        const card = json.cards[0].name;
        setCards(card)
      })
    }
    FetchData();
  }, [])
  return (
    <div className="App">
      <p>{cards}</p>
    </div>
  );
}

export default App;
