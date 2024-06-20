//tutorial current time: https://youtu.be/NbTrGcz4DW8?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&t=195

import { useState } from 'react';
//import react hooks below
import Navbar from './Components/Navbar';
import CardSearchBar from './Components/CardSearchBar';
import CardResultsList from './Components/CardResultsList';
//imported useFetch custom hook for api data fetching
import useFetch from './Components/UseFetch';
// Expected output: Array ["exuberant", "destruction", "present"]
//Navbar and Home components nested in the return statement below app
//using <Navbar /> and <Home />
function App() {
  //stores API in URL state variable
  const [url, setURL] = useState('https://api.magicthegathering.io/v1/cards') 

  //passes in data fetched from useFetch hook
  const { data, isLoading, error } = useFetch(url);
// create variable and variable modifier equal to empty array
const [results, setResults] = useState([]);
//passed in results variable as a prop in SearchResultsList
  return (
    <div className="app">
      <Navbar />
      <div className='content'>
      {/* passed in setResults variable and modifier defined above as a prop equal to setResults
      //then in CardSearchBar, take it in as prop */}
      <CardSearchBar setResults={setResults}></CardSearchBar>
      {/* passed in results variable as prop into CardResultsList below */}
      <CardResultsList results={results} ></CardResultsList>
      {/* <Displaycards></Displaycards> */}
        <h1>Name of Cards</h1>
        
      {error && <div>{error}</div>}
      

      <div className="card-list">
      {isLoading && <div>Loading...</div>}
        {data && data.cards.map((card) => (
          <div key={card.id}>
            <h2>{card.name}</h2>
            <img alt="" src={card.imageUrl}></img>
            </div>
        ))}
      </div>

      {/* {data && data.cards.map((card) => <p key={card.id}>{card.name}</p>)}
      {data && data.cards.map((card) =>  <img alt="" src={card.imageUrl}></img>)} */}
        
      </div>
    </div>
  );
  }

export default App;