
//useFetch setup 

// https://www.youtube.com/watch?v=qdCHEUaFhBk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=17
import { useEffect, useState } from "react"
//custom hooks need to start with "use"
//like example below "useFetch"
//passing into useFetch, the url as parameter for API
const useFetch = (url) => {

    const [data, setData] = useState(null);
    //adding a conditional loading message isLoading, setLoading

    const [isLoading, setIsLoading] = useState(true);

    
    //adding fetch request under useEffect hook
    useEffect(() => {
        //adding a setTimout function with a 1 second delay to display loading before card data
        setTimeout(() => {
            console.log("useEffect Ran")
            handleFetchData();
            setIsLoading(false)
            //sending git request to the API
            //returns a prommise
        }
        , 500)
    //added url as a dependency
        }, [url])
        //creates a data fetch const variable using async
        const handleFetchData = async () => {
            const response = await fetch(url)

            //stores the json data as the setCards state value
            setData(await response.json()
            );
            
            
        }
    return { data, isLoading }
}

export default useFetch;