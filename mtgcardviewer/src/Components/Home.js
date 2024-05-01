//current place video: https://www.youtube.com/watch?v=rb1GWqCJid4&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=9
import { useState } from "react";
//imports useState from React
//useState in react is a hook because it starts with use
//adds a reactivate value that you can change at will

const Home = () => {
    //invoked useState function
    //useState assigned to a const variable
    //using array restructuring to grab two values that the hook returns
    //1st value is name, which in useState is set to Alex
    //to change the value
    //value can be anything, a string, an array, a boolean, datatype doesn't matter
    const [name, setName] = useState('Alex');
    const[age, setAge] = useState(25);

    //creating an onclick event to add button functionality
    //react tutorial current-time: https://youtu.be/0XSDAup85SA?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&t=132
    //passing in e to argument, then referencing it in the console.log provides event properties
    const handleClick = () => {
        //setName referenced in the UseState variable triggers a the name to change
        //in this handeClick event re-renders the component updating the value from Alex to Sam
        //calling the setValue triggers a re-render and outputs the new value
        setName('Sam');
        setAge('26');
    }

    return (
        //creates an on click button on the home page
        <div className="home">
        <h2>MTG Card Search</h2>
        <p>{ name } is { age } years old</p>
        <button onClick={handleClick} >Search</button>
        </div>
    );
}

export default Home;