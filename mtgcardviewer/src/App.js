//tutorial current time: https://youtu.be/NbTrGcz4DW8?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&t=195


//import react hooks below
import Navbar from './Components/Navbar';
import FetchData from "./Components/FetchData";
import Home from './Components/Home';
// Expected output: Array ["exuberant", "destruction", "present"]
//Navbar and Home components nested in the return statement below app
//using <Navbar /> and <Home />
function App() {
  
  return (
    <div className="app">
      <Navbar />
      <div className='content'>
      <FetchData></FetchData>
      <Home></Home>

        
      </div>
    </div>
  );
  }

export default App;