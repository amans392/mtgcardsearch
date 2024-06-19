//follow video below for custom hook
//https://www.youtube.com/watch?v=si3AZsAkZlE

import useFetch from "./UseFetch";
import FetchData from "./FetchData";

const Displaycards = () => {
    const URL = "https://api.magicthegathering.io/v1/cards"

    const {setData: card, isLoading} = useFetch(URL)
    console.log("the following", card)
    return ( 
        <div>

        </div>
    );
}
 
export default Displaycards;