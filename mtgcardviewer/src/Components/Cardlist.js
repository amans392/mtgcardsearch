//reusable component to output card property data

import useFetch from "./UseFetch";
//alternative to passing in props via const CardList = ({cards}) =>
//below is the de-structured version
const CardList = ({card}) => {
    console.log(Object.values(card))
    // created variable cards set equal to passed in props object .cards to store
    //const cards = props.cards;
    //then cycling through const cards in return statemen useing the cards.map function
    //mapped values of cards called card parameter using the properties from FetchData
    return ( 
        <div className="card-list">
            {Object.values(card).map(([data]) => (
                <div className="card-preview" key={data.id}>
                    <h2>{data.name}</h2>
                    <img alt="" src={data.imageUrl}></img>
                    {/* <p>This creature is a {data.type} with a CMC of {data.cmc}</p> */}
                </div>
            ))}

        </div>
     );
}
 
export default CardList;