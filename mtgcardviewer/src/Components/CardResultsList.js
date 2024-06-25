import CardResults from "./CardResults";
import "./CardResultsList.css"
import FindCard from "./Findcard";

//passed in results property from App.js that was passed in
const CardResultsList = ({results}) => {
    return <div className="results-list">
        {/* brackets added so you can code between them 
        //results.map goes through each element inside results array
        and map it to the new component*/}
        {
            results.map((result, id) => {
                //returns a div with it's own key and contains {result.name}
                // return <div key={id}>{result.name}</div>
                //returns the CardResults Component which creates a div with results
                return <CardResults result={result} key={id}/>
       
            })
        }
    </div>
    
//now when you go to search in the bar, it will create a list of divs with names that include what you input
}
export default CardResultsList;