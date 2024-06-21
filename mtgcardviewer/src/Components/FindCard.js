
//tutorial may hold clue on getting component to work:
//https://www.youtube.com/watch?v=9wiWzu_tRB0
const findCard = ({results}) => {
    return ( 
        <div className="card-list">
          <div key={results.id}>
            <h2>{results.name}</h2>
            <img alt="" src={results.imageUrl}></img>
            </div>
      </div>
     );
}
 
export default findCard;