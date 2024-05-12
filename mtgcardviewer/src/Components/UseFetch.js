import { useState, useEffect } from "react";
//component for fetching data from the

//variable for fetchData function
const useFetch = async (url) => {



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
            console.log('card dada', data);
            setData(data);

        });

    
    }, [url]);

    console.log('card data', data)
    return data
    }
 
export default useFetch;