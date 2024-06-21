//follow video below for custom hook
//https://www.youtube.com/watch?v=si3AZsAkZlE

const displayCard = ({result}) => {

    return  <div key={result.id} >
    <h2>{result.name}</h2>
    <img alt="" src={result.imageUrl}></img>
    </div>

}

export default displayCard;