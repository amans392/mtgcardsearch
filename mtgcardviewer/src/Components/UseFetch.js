
//useFetch setup 

// https://www.youtube.com/watch?v=qdCHEUaFhBk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=17
import { useEffect, useState } from "react"
//custom hooks need to start with "use"
//like example below "useFetch"
//passing into useFetch, the url as parameter for API
const useFetch = (url) => {

    const [data, setData] = useState(null);
    //adding a conditional loading message isLoading, setLoading

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState(null)

    
    //adding fetch request under useEffect hook
    useEffect(() => {
        //adding a setTimout function with a 1 second delay to display loading before card data
        setTimeout(() => {
            console.log("useEffect Ran")
            //added error checking in case API cannot be reached
            try {
                handleFetchData();
            setIsLoading(false);
            setError(null);
            } catch (error) {
                setError(`${error} Could not Fetch Data `);
            }
            //sending git request to the API
            //returns a prommise
        }
        , 500)
    //added url as a dependency
        }, [url])
        //creates a data fetch const variable using async
        const handleFetchData = async () => {
            const response = await fetch(url);
            if (!response.ok) throw new Error(response.statusText);

            //stores the json data as the setData state value
            setData(await response.json()
            );
            
            
        }
    return { data, isLoading, error };

};
// }


// const useFetch = (url) => {
//     //states for datafetching
//     const [data, setData] = useState(null);


//     const [isPending, setIsPending] = useState(false);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//       const fetchData = async () => {
//         setIsPending(true);
//         try {
//           const response = await fetch(url);
//           if (!response.ok) throw new Error(response.statusText);
//           const json = await response.json();
//           setIsPending(false);
//           setData(json);
//           setError(null);
//         } catch (error) {
//           setError(`${error} Could not Fetch Data `);
//           setIsPending(false);
//         }
//       };
//       fetchData();
//     }, [url]);
//     return { data, isPending, error };

// };

export default useFetch;