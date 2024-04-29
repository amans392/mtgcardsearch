const Home = () => {
    //creating an onclick event to add button functionality
    //react tutorial current-time: https://youtu.be/0XSDAup85SA?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&t=132
    const handleClick = () => {
        console.log("Hello, Ninjas");
    }
    return (
        //creates an on click button on the home page
        <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick} >Click Me</button>
        </div>
    );
}

export default Home;