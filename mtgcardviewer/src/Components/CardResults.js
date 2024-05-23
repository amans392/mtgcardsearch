//imported FaSearch options for search icon: https://react-icons.github.io/react-icons/search/#q=fasearch
import { FaSearch } from "react-icons/fa";

const CardResults = ({card}) => {
    console.log(Object.values(card))
    
    return ( 
        <div className="input-wrapper">
            <FaSearch id="search-icon"></FaSearch>
            
        </div>>
     );
}
 
export default CardResults;