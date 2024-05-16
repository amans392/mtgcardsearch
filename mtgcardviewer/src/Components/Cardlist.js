//reusable component to output card property data
//alternative to passing in props via const CardList = ({cards}) =>
//below is the de-structured version
const CardList = ({cards}) => {
    // created variable cards set equal to passed in props object .cards to store
    //const cards = props.cards;
    //then cycling through const cards in return statemen useing the cards.map function
    //mapped values of cards called card parameter
    return ( 
        <div className="card-list">
            {Object.values.cards.map((card) => (
                <div className="card-preview" key={card.id}>
                    <h2>{card.name}</h2>
                    <p>This creature is a {card.type} with a CMC of {card.cmc}</p>
                    
                </div>
            ))}

        </div>
     );
}
 
export default CardList;