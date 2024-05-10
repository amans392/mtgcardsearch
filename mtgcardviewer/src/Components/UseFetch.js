import { useState, useEffect } from "react";
//component for fetching data from the API

//variable for fetchData function
const useFetch = (url) => {



//const variable for link to API

//state variables for data, loading screen and error messages 
const [data, setData] = useState(null);

//const [loading, isLoading] = useState(null);

//const [error, setError ] = useState(null)

//useEffect hook for fetching URL API data
//
    useEffect(() => {
      
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setData(data)

        });

    
    }, [url]);
    return { data }
}
 
export default useFetch;