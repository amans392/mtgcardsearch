
//tutorial may hold clue on getting component to work:
//https://www.youtube.com/watch?v=9wiWzu_tRB0
import "./FindCard.css"
const FindCard = ({result, activeCard}) => {
  
    return ( 
        <div className="selected-card">
          <div key={result.id}>
            <h2>{result.name}</h2>
            <img alt="" src={result.imageUrl}></img>
            </div>
      </div>
     );
}
 
export default FindCard;