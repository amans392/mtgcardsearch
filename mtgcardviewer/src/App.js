//try selectable options from video: https://www.youtube.com/watch?v=GomD1Udf4WQ
//also see https://www.youtube.com/watch?v=3u_ulMvTYZI
//also https://www.youtube.com/watch?v=1cYnbYVAi_E
import { useState } from 'react';
//import react hooks below
import Navbar from './Components/Navbar';
import CardSearchBar from './Components/CardSearchBar';
import CardResultsList from './Components/CardResultsList';
//imported useFetch custom hook for api data fetching
import useFetch from './Components/UseFetch';
import DisplayCard from './Components/DisplayCard';

// Expected output: Array ["exuberant", "destruction", "present"]
//Navbar and Home components nested in the return statement below app
//using <Navbar /> and <Home />
function App() {
  //stores API in URL state variable
const [url] = useState('https://api.magicthegathering.io/v1/cards') 

  //passes in data fetched from useFetch hook
const {error} = useFetch(url);
// create variable and variable modifier equal to empty array
const [results, setResults] = useState([]);

const [activeCard, setActiveCard] = useState(null);

const [input, setInput] = useState("")

//function that passes in card takes the setActiveCard state function to parameter card
//then passes in the card parameter
const handleSelection = (card) => {
  console.log('Updating selected card to -->', card);
  setActiveCard(card);
  // Clear results, maybe there's a way to clear the input too?
  setResults([]);
  setInput("")
}


//passed in results variable as a prop in SearchResultsList
  return (
    <div className="app">
      <Navbar />
      <div className='content'>
      {/* passed in setResults variable and modifier defined above as a prop equal to setResults
      //then in CardSearchBar, take it in as prop */}
      <CardSearchBar setResults={setResults} input={input} setInput={setInput}></CardSearchBar>
      {/* passed in results variable as prop into CardResultsList below */}
      <CardResultsList results={results} handleSelection={handleSelection}></CardResultsList>
        <h1>Selected Card Below:</h1>
        <DisplayCard results={results} activeCard={activeCard}/>
      {error && <div>{error}</div>}
 
      </div>
    </div>
  );
  }

export default App;