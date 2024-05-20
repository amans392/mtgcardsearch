//tutorial current time: https://youtu.be/NbTrGcz4DW8?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&t=195

import { useState } from 'react';
//import react hooks below
import Navbar from './Components/Navbar';
import FetchData from "./Components/FetchData";
import Home from './Components/Home';
import SearchBar from './Components/SearchBar';
// Expected output: Array ["exuberant", "destruction", "present"]
//Navbar and Home components nested in the return statement below app
//using <Navbar /> and <Home />
function App() {

//state variable results created for search bar
//
const [results, setResults] = useState([]);

  return (
    <div className="app">
      <Navbar />
      <div className='content'>
      <SearchBar setResults={setResults}></SearchBar>
      <div>SearchResults</div>
      <Home></Home>
      
        
      </div>
    </div>
  );
  }

export default App;