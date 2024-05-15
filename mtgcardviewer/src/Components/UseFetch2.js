import { useState, useEffect } from "react";

//creating a custom Hook component
//https://www.youtube.com/watch?v=Jl4q2cccwf0&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=21 
//Custom hooks Must start with the word use, or it won't work
//useFetch below is an example of a custom hook

const useFetch2 = (url) => { 
    const URL = "https://api.magicthegathering.io/v1/cards"
    const [cards, setCards] = useState(null);

    useEffect(() => {
        fetch(URL)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setCards(data)
        });
    }, []);

    return (
        <div classname="home"></div>
    )

}

// //value set to data so that custom hook componenet can be reusable 
//     const [data, setData] = useState(null);

//     //Conditional Loading Message state
//     const [isLoading, setIsLoading] = useState(true);
//     //error message state
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         setTimeout(() => {
//             fetch(url)
//                 .then(res => {
            
//                     if(!res.ok) {
//                         throw Error('could not fetch the data for that resource')
//                     }
//                     return res.json();
//                 })
//                 .then(data => {
//                     console.log(data);
//                     setData(data);
//                     //sets isLoading to false to remove if error displayed
//                     setIsLoading(false);
//                     //if data is fetched, gets rid of the error message if successful
//                     setError(null);
//                 })
//                 .catch(err => {
//                     setIsLoading(false)
//                     //error.message displays the caught error message
//                     setError(err.message);
//                 })
//         }, 1000);
//         //dependency set to url and if it changes
//     }, [url]);

// //returning values from the useFetch function above
// //returns the data of these state values
// return { data, isLoading, error } 
// }
export default useFetch2;