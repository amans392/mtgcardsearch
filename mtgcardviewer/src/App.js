//tutorial current time: https://youtu.be/NbTrGcz4DW8?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&t=195

import { useState } from 'react';
//import react hooks below
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CardSearchBar from './Components/CardSearchBar';
import CardResultsList from './Components/CardResultsList';
// Expected output: Array ["exuberant", "destruction", "present"]
//Navbar and Home components nested in the return statement below app
//using <Navbar /> and <Home />
function App() {


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
      <Home></Home>
      
      
        
      </div>
    </div>
  );
  }

export default App;